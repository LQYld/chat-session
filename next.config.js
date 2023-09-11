/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  transpilePackages: [
    '@douyinfe/semi-ui',
    '@douyinfe/semi-icons',
    '@douyinfe/semi-illustrations'
  ],
  webpack: (config, { dev, isServer }) => {
    config.module.rules.push({
      test: /\.(gltf|hdr)$/,
      use: {
        loader: 'file-loader',
        options: {
          outputPath: 'static/3dModal/'
        }
      }
    })
    config.module.rules.push({
      test: /\.(bin)$/,
      use: {
        loader: 'file-loader',
        options: {
          outputPath: 'static/3dModal/',
          name: '[name].[ext]' // keep the original name
        }
      }
    })
    if (!dev && !isServer) {
      config.module.rules.push({
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      })
    }
    return config
  }
}

module.exports = nextConfig
