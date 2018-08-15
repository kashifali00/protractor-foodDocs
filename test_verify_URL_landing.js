// That test case verifies URL landing

describe('FOODDOCS STAGING:', function () {

    beforeAll(function () {
        browser.get(browser.params.host, 300000);
		
		
    });

    afterAll(function () {
		
    });

    it('verify that foodDocs staging url is accessible through browser', function () {
        var getTitle = browser.getTitle();
        getTitle.then(function (title) {
            expect(title).toContain('FoodDocs OÜ');
        });
    }) // it block end here

}); //describe block end here
