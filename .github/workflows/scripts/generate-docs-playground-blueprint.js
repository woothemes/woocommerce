const generateDocsPlaygroundBlueprint = (runId, prNumber) => {
  return {
    landingPage: '/wp-admin/post-new.php?post_type=page',
    preferredVersions: {
      php: '8.0',
      wp: 'latest'
    },
    phpExtensionBundles: ['kitchen-sink'],
    features: { networking: true },
    steps: [
      {
        step: 'mkdir',
        path: '/wordpress/wp-content/static-content'
      },
      {
        step: 'defineWpConfigConsts',
        consts: {
          STATIC_FILES_ROOT: '/wordpress/wp-content/static-content'
        }
      },
      {
        step: 'installPlugin',
        pluginZipFile: {
          resource: 'url',
          url: 'https://raw.githubusercontent.com/adamziel/playground-content-converters/21ecd28/dist/playground-content-converters.zip'
        },
        options: {
          activate: true
        }
      },
      {
        step: 'activatePlugin',
        pluginPath: 'import-static-files/import-static-files.php'
      },
      {
        step: 'activatePlugin',
        pluginPath: 'store-markdown-as-post-meta/index.php'
      },
      {
        step: 'activatePlugin',
        pluginPath: 'convert-markdown-to-blocks-in-js/convert-markdown-to-blocks-in-js.php'
      },
      {
        step: 'activatePlugin',
        pluginPath: 'save-pages-as-static-files/index.php'
      },
      {
        step: 'login',
        username: 'admin',
        password: 'password',
      }
    ],
    plugins: []
  };
};

async function run({ github, context, core }) {
  const commentInfo = {
    owner: context.repo.owner,
    repo: context.repo.repo,
    issue_number: context.issue.number,
  };

  const comments = (await github.rest.issues.listComments(commentInfo)).data;
  let existingCommentId = null;

  for (const currentComment of comments) {
    if (
      currentComment.user.type === 'Bot' &&
      currentComment.body.includes('Preview Documentation using WordPress Playground')
    ) {
      existingCommentId = currentComment.id;
      break;
    }
  }

  const defaultSchema = generateDocsPlaygroundBlueprint(
    context.runId,
    context.issue.number
  );

  const url = `https://playground.wordpress.net/#${JSON.stringify(
    defaultSchema
  )}` +
    '&ghexport-playground-root=/wordpress/wp-content/static-content/docs' +
    '&ghexport-repo-root=/docs' +
    '&ghexport-content-type=custom-paths';

  const body = `
## Preview Documentation using WordPress Playground
The documentation changes in this pull request can be previewed using a [WordPress Playground](https://developer.wordpress.org/playground/) instance.
This playground is specifically configured for reviewing documentation changes and includes the necessary documentation plugins.

[Preview documentation changes in WordPress Playground](${url})

Note: 
- This URL is valid for 30 days from when this comment was last updated
- You can update it by closing/reopening the PR or pushing a new commit
- The playground will load directly to the documentation section for easy review
`;

  if (existingCommentId) {
    await github.rest.issues.updateComment({
      owner: commentInfo.owner,
      repo: commentInfo.repo,
      comment_id: existingCommentId,
      body: body,
    });
  } else {
    commentInfo.body = body;
    await github.rest.issues.createComment(commentInfo);
  }
}

module.exports = { run };
