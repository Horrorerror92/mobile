cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "com.salesforce.plugin.oauth",
      "file": "plugins/com.salesforce/www/com.salesforce.plugin.oauth.js",
      "pluginId": "com.salesforce"
    },
    {
      "id": "com.salesforce.plugin.network",
      "file": "plugins/com.salesforce/www/com.salesforce.plugin.network.js",
      "pluginId": "com.salesforce"
    },
    {
      "id": "com.salesforce.plugin.sdkinfo",
      "file": "plugins/com.salesforce/www/com.salesforce.plugin.sdkinfo.js",
      "pluginId": "com.salesforce"
    },
    {
      "id": "com.salesforce.plugin.smartstore",
      "file": "plugins/com.salesforce/www/com.salesforce.plugin.smartstore.js",
      "pluginId": "com.salesforce",
      "clobbers": [
        "navigator.smartstore"
      ]
    },
    {
      "id": "com.salesforce.plugin.smartstore.client",
      "file": "plugins/com.salesforce/www/com.salesforce.plugin.smartstore.client.js",
      "pluginId": "com.salesforce",
      "clobbers": [
        "navigator.smartstoreClient"
      ]
    },
    {
      "id": "com.salesforce.plugin.sfaccountmanager",
      "file": "plugins/com.salesforce/www/com.salesforce.plugin.sfaccountmanager.js",
      "pluginId": "com.salesforce"
    },
    {
      "id": "com.salesforce.plugin.mobilesync",
      "file": "plugins/com.salesforce/www/com.salesforce.plugin.mobilesync.js",
      "pluginId": "com.salesforce"
    },
    {
      "id": "com.salesforce.util.bootstrap",
      "file": "plugins/com.salesforce/www/com.salesforce.util.bootstrap.js",
      "pluginId": "com.salesforce"
    },
    {
      "id": "com.salesforce.util.event",
      "file": "plugins/com.salesforce/www/com.salesforce.util.event.js",
      "pluginId": "com.salesforce"
    },
    {
      "id": "com.salesforce.util.exec",
      "file": "plugins/com.salesforce/www/com.salesforce.util.exec.js",
      "pluginId": "com.salesforce"
    },
    {
      "id": "com.salesforce.util.logger",
      "file": "plugins/com.salesforce/www/com.salesforce.util.logger.js",
      "pluginId": "com.salesforce"
    },
    {
      "id": "com.salesforce.util.promiser",
      "file": "plugins/com.salesforce/www/com.salesforce.util.promiser.js",
      "pluginId": "com.salesforce"
    },
    {
      "id": "com.salesforce.util.push",
      "file": "plugins/com.salesforce/www/com.salesforce.util.push.js",
      "pluginId": "com.salesforce"
    },
    {
      "id": "cordova-plugin-camera.Camera",
      "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "Camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverOptions",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverOptions"
      ]
    },
    {
      "id": "cordova-plugin-camera.camera",
      "file": "plugins/cordova-plugin-camera/www/Camera.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "navigator.camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverHandle",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverHandle"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "com.salesforce": "8.0.0",
    "cordova-plugin-androidx-adapter": "1.1.0",
    "cordova-plugin-camera": "4.1.0"
  };
});