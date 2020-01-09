
const plugins = [
  ['@babel/plugin-proposal-decorators', { legacy: true }],
  ['@babel/plugin-proposal-class-properties', { loose: true }],
  '@babel/plugin-proposal-optional-chaining',
  '@babel/plugin-proposal-nullish-coalescing-operator',
  '@babel/plugin-syntax-dynamic-import',
  ['import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css' // `style: true` 会加载 less 文件
  }, 'antd'],
  ['import', {
    libraryName: 'antd-mobile',
    libraryDirectory: 'es',
    style: 'css' // `style: true` 会加载 less 文件
  }, 'antd-mobile'],
];

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        targets: ['> 1%', 'last 2 versions', 'IE >= 10'],
        corejs: '2',
      }
    ],
    '@babel/preset-react'
  ],
  plugins,
};
