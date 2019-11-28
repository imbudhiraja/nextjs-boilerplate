module.exports = {
  extends: 'imbudhiraja/react',
  rules: {
    camelcase: [
      'error',
      {
        allow: ['message_id','user_id'],
        ignoreDestructuring: true,
      },
    ],
    'class-methods-use-this': 'off',
    'filenames/match-exported': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'ignore' },
    ],
    'max-len': 'off',
    'max-lines': ['error', 1000],
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '_data',
          '__PERSISTOR',
          '_id',
          '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__',
        ],
      },
    ],
    radix: 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
      },
    ],
  },
};
