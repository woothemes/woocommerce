#!/usr/bin/env bash

set -eo pipefail

skipEnvSetup=False

while getopts "x" opt; do
  case $opt in
    x)
      skipEnvSetup=True
      ;;
    \?)
      echo "Invalid option: -$OPTARG" >&2
      exit 1
      ;;
  esac
done

shift $((OPTIND-1))

envName=$1
shift

SCRIPT_PATH=$(
  cd "$(dirname "${BASH_SOURCE[0]}")" || return
  pwd -P
)

echo "Setting up environment: $envName"

if [ -f "$SCRIPT_PATH/envs/$envName/.env.enc" ]; then
	echo "Found an encrypted .env file for environment '$envName'"
	"$SCRIPT_PATH/bin/dotenv.sh" -d "$envName"
elif [ -f "$SCRIPT_PATH/envs/$envName/.env" ]; then
	echo "Found a non encrypted .env file for environment '$envName'. Will copy and overwrite the main .env (if it exists)"
	cp "$SCRIPT_PATH/envs/$envName/.env" "$SCRIPT_PATH/.env"
else
	echo "No encrypted .env file found for environment '$envName'."
	echo "Removing .env file if it exists."
	rm -f "$SCRIPT_PATH/.env"
fi

if [ "$skipEnvSetup" == "True" ]; then
	echo "Skipping environment setup"
else
	echo "Executing environment setup script(s)"
	"$SCRIPT_PATH/envs/$envName/env-setup.sh"
fi

echo "Running tests with environment: '$envName'"
echo "Arguments: $*"
pnpm playwright test --config="$SCRIPT_PATH"/envs/"$envName"/playwright.config.js "$@"
