#!/bin/bash

export PATH=$PATH:$HOME/.nvm/versions/node/v22.14.0/bin/

# shellcheck disable=SC2005
minified="$(./node_modules/.bin/minify --js webcorrupter.js | xargs | sed -E 's/^\s*use strict/"use strict"/;t')"
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