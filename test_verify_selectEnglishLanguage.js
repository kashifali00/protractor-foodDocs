// That test case verifies Select English Language functionality

describe('Select English Language:', function () {

    beforeAll(function () {
        browser.get(browser.params.host, browser.params.testWait);		
    });

    afterAll(function () {

    });	

    it('verify that user is able to select engish language', function () {
		
		
		var dropDown = element(by.cssContainingText('option', 'EN'));
		var EC = protractor.ExpectedConditions;
            browser.wait(EC.visibilityOf(dropDown), browser.params.elementWait);		
            expect(dropDown.getText()).toBe('EN');
			dropDown.click();
			browser.sleep(5000);
        
    }) // it block end here
	


}); //describe block end here