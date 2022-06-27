/** @type {import('next').NextConfig} */
const path = require('path')

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: '@use "main" as *;',
  },
}
