require('dotenv').config()
const {notarize} = require('electron-notarize')

exports.default = async function notarizing (context) {
  const {electronPlatformName, appOutDir} = context
  if (!process.env.NOTARIZE) {
    return
  }

  if (electronPlatformName !== 'darwin') {
    return
  }

  const appName = context.packager.appInfo.productFilename

  return await notarize({
    appBundleId: 'org.verge.my-vergies',
    appPath: `${appOutDir}/${appName}.app`,
    appleId: process.env.APPLE_ID,
    appleIdPassword: process.env.APPLE_ID_PASS,
    ascProvider: process.env.APPLE_ASC_PROVIDER
  })
}
