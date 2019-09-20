'use strict';

const acorn = require('acorn');

exports.parse = (source) => {
  return acorn.parse(source, {
    locations: true,
    sourceType: 'module',
    ecmaVersion: 2020
  });
};
