'use strict';

const acorn = require('acorn-node');

exports.parse = (source) => {
  return acorn.parse(source, {
    locations: true,
    sourceType: 'module'
  });
};
