module.exports = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add a new rule to handle .teal files
    config.module.rules.push({
      test: /\.teal$/, // Identify .teal files
      use: 'raw-loader', // Use raw-loader to process .teal files
    });

    // Important: return the modified config
    return config;
  },
};
