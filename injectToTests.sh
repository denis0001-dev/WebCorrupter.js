#!/bin/bash

for i in tests/*/; do
    cp -f webcorrupter.js "$i"
done