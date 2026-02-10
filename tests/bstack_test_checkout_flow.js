module.exports = {
  'BStackDemo test checkout flow': function (browser) {
    // visit the site
    browser.url('https://bstackdemo.com/');

    // sign in
    browser.click('css selector', '#signin')
      .click('css selector', '#username svg')
      .click('css selector', '#react-select-2-option-0-0')
      .click('css selector', '#password svg')
      .click('css selector', '#react-select-3-option-0-0')
      .click('css selector', '#login-btn')
      .pause(500)

      // click on buy item
      .click('css selector', '#\\31  > .shelf-item__buy-btn')
      .click('css selector', '.float-cart__close-btn')
      .click('css selector', '#\\32  > .shelf-item__buy-btn')
      .click('css selector', '.buy-btn')

      // add address details
      .setValue('css selector', '#firstNameInput', 'first')
      .setValue('css selector', '#lastNameInput', 'last')
      .setValue('css selector', '#addressLine1Input', 'address')
      .setValue('css selector', '#provinceInput', 'province')
      .setValue('css selector', '#postCodeInput', 'pincode')

      // checkout
      .click('css selector', '#checkout-shipping-continue')
      .click('xpath', "//*[contains(text(),'Continue')]")
      .click('xpath', "//*[contains(text(),'Orders')]");
  }
};
