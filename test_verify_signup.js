// That test case verifies signup functionality

describe('SIGNUP:', function () {


    it('verify that user is able to select engish language', function () {
		
		var signup = element(by.id('btn-register'));
		var signUpButton = protractor.ExpectedConditions;
            browser.wait(signUpButton.visibilityOf(signup), browser.params.elementWait);
			signup.getText().then(function(text) {
				console.log("sign up text ::"+text);
			});
		    expect(signup.getText()).toBe("Sign up");
			signup.click();
			browser.sleep(2000);
			
			var userName = element(by.css("input[type='text']"));
			var ECusername = protractor.ExpectedConditions;
			browser.wait(ECusername.visibilityOf(userName), browser.params.elementWait);
			userName.sendKeys("kashif");
			//browser.sleep(3000);
			
			var emailField = element(by.xpath("/html/body/app-root/ng-component/ng-component/guest-header/div[4]/div/div[1]/div[1]/div[2]/input"));
			var ECemailField = protractor.ExpectedConditions;
			browser.wait(ECemailField.visibilityOf(emailField), browser.params.elementWait);	
			emailField.sendKeys("kashifali9829@gmail.com");
			//browser.sleep(2000);
			var userPassword = element(by.id("reg-pw"));
			var ECpassword = protractor.ExpectedConditions;
			browser.wait(ECpassword.visibilityOf(userPassword), browser.params.elementWait);	
			userPassword.sendKeys("Admin123@");
			
			var userPasswordRepeat = element(by.id("reg-pw2"));
			var ECpassword = protractor.ExpectedConditions;
			browser.wait(ECpassword.visibilityOf(userPasswordRepeat), browser.params.elementWait);	
			userPasswordRepeat.sendKeys("Admin123@");
			
			var signUpButton = element(by.cssContainingText('.btn.btn-next','Sign up'));
			var ECSignupButton = protractor.ExpectedConditions;
			browser.wait(ECSignupButton.elementToBeClickable(signUpButton), browser.params.elementWait);
			signUpButton.click();
			
			browser.sleep(3000);
			
		
    }) // it block end here
	


}); //describe block end here