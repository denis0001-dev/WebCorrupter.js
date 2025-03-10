#!/bin/bash

export PATH=$PATH:$HOME/.nvm/versions/node/v22.14.0/bin/

# shellcheck disable=SC2005
minified="$(./node_modules/.bin/minify webcorrupter.js | xargs)"
if [ "$minified" == "" ]; then
    echo "ERROR: minify doesn't exist." > /dev/stderr
    exit 1
fi
echo "Minifying..."
echo "$minified" > webcorrupter.js

for i in tests/*/; do
    echo "Copying script for $i"
    cp -f webcorrupter.js "$i"
done

echo "Success!"