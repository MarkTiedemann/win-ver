const test = require('ava')
const semver = require('semver')
const ver = require('./')

test(assert => ver()
  .then(version => assert.truthy(semver.valid(version)))
)
