#!/bin/bash

for i in tests/*/; do
    echo "Copying script for $i"
    cp -f webcorrupter.js "$i"
done

echo "Success!"