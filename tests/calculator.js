let homepage = require ('../pages/homepage');


describe('Demo calculator tests', () => {

    it('Open calculator web', () => {
        homepage.get('http://juliemr.github.io/protractor-demo/');
        // expect(browser.getCurrentUrl()).toBe('http://juliemr.github.io/protractor-demo/');
        // browser.sleep(1000)
    })

    it('Add a number on the first position', () => {    
        // var input = homepage.firstNumber_input;
        homepage.enterFirstNumber('2');
        // expect(input.getAttribute('value')).toBe('2');    
    })

    it('Add a number on the second position', () => {    
        // var input = homepage.secondNumber_input;
        // input.sendKeys('3');
        homepage.enterSecondNumber('3')
        // expect(input.getAttribute('value')).toBe('3');    
    })

    it('Click on go button', () => {   
        homepage.clickGo()
    })

    it('Check the result is correct', () => {    
        homepage.verifyResult('5')  
        browser.sleep(3000)
    })
  })