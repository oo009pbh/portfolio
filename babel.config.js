module.exports = {
  plugins: ['@babel/plugin-proposal-optional-chaining', '@babel/plugin-proposal-nullish-coalescing-operator', ['styled-components', {
    'displayName': true,
    'pure': true,
  }],
  ],
  presets: [
    [
      'next/babel',
      {
        runtime: 'automatic',
      },
    ],
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
};
