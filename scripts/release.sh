#!/bin/bash

# prepare for release
node -p "require('./package.json').version" | xargs -I {} git tag -a v{} -m 'Version {}'
npm run build

# release upstream 
git push origin master
git push --tags
npm publish
