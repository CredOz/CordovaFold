// Empty constructor
function CordovaFold() {}

CordovaFold.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.cordovaFold = new CordovaFold();
  return window.plugins.cordovaFold;
};
cordova.addConstructor(CordovaFold.install);