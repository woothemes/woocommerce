const generateDocsPlaygroundBlueprint = (runId, prNumber, context) => {
  // First, create our own blueprint that matches the structure but uses WooCommerce docs
  const blueprint = {
    "$schema": "https://playground.wordpress.net/blueprint-schema.json",
    "login": true,
    "landingPage": "/wp-admin/?markdown-file-path=docs/contributors/accessibility-testing.md",
    "steps": [
      {
        "step": "unzip",
        "extractToPath": "/tmp",
        "zipFile": {
          "resource": "url",
          "url": "https://github-proxy.com/proxy/?repo=adamziel/playground-content-converters&branch=explore-markdown-editor-setup&directory=src",
          "caption": "Downloading Markdown editing plugin"
        }
      },
      {
        "step": "mkdir",
        "path": "/wordpress/wp-content/static-content"
      },
      {
        "step": "unzip",
        "extractToPath": "/wordpress/wp-content/static-content",
        "zipFile": {
          "resource": "url",
          "url": `https://github-proxy.com/proxy/?repo=${context.repo.owner}/${context.repo.repo}&directory=docs`,
          "caption": "Importing WooCommerce documentation"
        }
      },
      {
        "step": "defineWpConfigConsts",
        "consts": {
          "STATIC_FILES_ROOT": "/wordpress/wp-content/static-content"
        }
      },
      {
        "step": "mv",
        "fromPath": "/tmp/src/convert-markdown-to-blocks-in-js",
        "toPath": "/wordpress/wp-content/plugins/convert-markdown-to-blocks-in-js"
      },
      {
        "step": "mv",
        "fromPath": "/tmp/src/import-static-files",
        "toPath": "/wordpress/wp-content/plugins/import-static-files"
      },
      {
        "step": "mv",
        "fromPath": "/tmp/src/store-markdown-as-post-meta",
        "toPath": "/wordpress/wp-content/plugins/store-markdown-as-post-meta"
      },
      {
        "step": "mv",
        "fromPath": "/tmp/src/save-pages-as-static-files",
        "toPath": "/wordpress/wp-content/plugins/save-pages-as-static-files"
      },
      {
        "step": "activatePlugin",
        "pluginPath": "import-static-files/import-static-files.php"
      },
      {
        "step": "activatePlugin",
        "pluginPath": "store-markdown-as-post-meta/index.php"
      },
      {
        "step": "activatePlugin",
        "pluginPath": "convert-markdown-to-blocks-in-js/convert-markdown-to-blocks-in-js.php"
      },
      {
        "step": "activatePlugin",
        "pluginPath": "save-pages-as-static-files/index.php"
      }
    ]
  };

  return `https://playground.wordpress.net/` +
    `?gh-ensure-auth=yes` +
    `&ghexport-repo-url=https://github.com/${context.repo.owner}/${context.repo.repo}` +
    `&ghexport-content-type=custom-paths` +
    `&ghexport-path=.` +
    `&ghexport-commit-message=Documentation+update` +
    `&ghexport-playground-root=/wordpress/wp-content/static-content/docs` +
    `&ghexport-repo-root=/docs` +
    `&ghexport-pr-action=create` +
    `&ghexport-allow-include-zip=no` +
    `#${JSON.stringify(blueprint)}`;
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

  const url = generateDocsPlaygroundBlueprint(
    context.runId,
    context.issue.number,
    context
  );

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
