

require("babel-register")({
    presets: ["es2015"]
  });


exports.config = {

    directConnect : true,
    specs :['a.js'],

    // below code is to avoid jamine time out error (by default jasmine time out is 30 s)
    framework : 'jasmine',
    jasmineNodeOpts : {
showColors : true,
defaultTimeoutInterval : 50000

    },
capabilities : {
    'browserName' : 'chrome'
}



}
