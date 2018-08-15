// setup the reporting

/*
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
    dest: 'reports',
    filename: 'report.html',
    showSummary: true,
    reportTitle: "Regression suite",
    cleanDestination: true
});
*/
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    framework: 'jasmine2',
    specs: [
	        'test_verify_selectEnglishLanguage.js',
			'test_verify_signup.js'
	
	       ],

    getPageTimeout: 120000,

    params: {
	    host: "https://staging.fooddocs.ee/guest",
        testWait: 120000,
        elementWait: 120000

    },

    restartBrowserBetweenTests: false,

    suites: {
        //regression tests
        regression:
              [

              ]
    },

    capabilities: {
        browserName: 'chrome',
	'chromeOptions': {
      args: ['--disable-browser-side-navigation'] 
    }   
    },

    directConnect: false,

    onPrepare: function () {
        // By default, Protractor use data:text/html,<html></html> as resetUrl, but
        // location.replace from the data: to the file: protocol is not allowed
        // (we'll get ‘not allowed local resource’ error), so we replace resetUrl with one
        // with the file: protocol (this particular one will open system's root folder)

        browser.manage().window().setSize(1600, 1000);
  //      jasmine.getEnv().addReporter(reporter);
        browser.ignoreSynchronization = true;
        browser.waitForAngular();
        jasmineNodeOpts: {
            defaultTimeoutInterval: 250000000
        }
    }
}
