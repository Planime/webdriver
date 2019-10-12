var  { describe, it, after, before } = require('selenium-webdriver/testing')
var Page = require('../lib/home_page');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var should = chai.should();

var page;
chai.use(chaiAsPromised);

describe('library app scenarious', function() {
    this.timeout(50000);

    beforeEach(function() {
        page = new Page();
        page.visit('https://library-app.firebaseapp.com/libraries');

    });

    afterEach(function() {
        page.quit();
    });

    it('Typing valid email changes button opacity to 1  (test 1)', function(){
        var btn = page.requestBtn();
        btn.opacity.should.eventually.equal('1');

    });

    it('Typing a valid email enables request button', function(){
        var btn = page.requestBtn();
        btn.state.should.eventually.be.true;

        console.log("Hey");
    });

    it('clicking request invitation triggers a confirmation box', function(){
        var alert = page.alertSuccess();
        alert.should.eventually.contain("Thank you!")

    });


    console.log('Hello');

});
