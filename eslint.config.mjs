import js from '@eslint/js';

export default [js.configs.recommended, {
  // 'env': {
  //   'browser': false,
  //   'commonjs': true,
  //   'node': true,
  //   'es6': true
  // },
  'languageOptions': {
    'globals': {
      'require': 'readonly',
      'module': 'readonly',
      'exports': 'readonly',
      '__dirname': 'readonly',
      '__filename': 'readonly',
    },
  },
  'rules': {
    'indent': [
      'error',
      2,
      {
        'FunctionDeclaration': {
          'parameters': 'first'
        },
        'FunctionExpression': {
          'parameters': 'first'
        },
        'CallExpression': {
          'arguments': 'first'
        }
      }
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'max-len': [
      'error',
      80,
      2
    ]
  }
}];
