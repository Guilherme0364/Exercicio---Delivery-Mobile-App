const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

config.resolver.resolveRequest = (context, moduleName, platform) => {  
  console.log('Resolving module:', moduleName);

  if (moduleName.startsWith('my-custom-resolver:')) {
    return {      
      filePath: path.join(__dirname, 'path/to/custom', moduleName.replace('my-custom-resolver:', '')),
      type: 'sourceFile',
    };
  }  
  return context.resolveRequest(context, moduleName, platform);
};

module.exports = config;
