module.exports = {
  'BStackDemo test add to cart': function (browser) {
    // visit the site
    browser.url('https://bstackdemo.com/');

    // get name of product we want to add to cart
    browser.getText('css selector', '#\\33  > p', function(result) {
      const productToAdd = result.value;

      // click on add to cart
      browser.click('css selector', '#\\33  > .shelf-item__buy-btn');

      // get name of item in cart
      browser.getText('css selector', '#__next > div > div > div.float-cart.float-cart--open > div.float-cart__content > div.float-cart__shelf-container > div > div.shelf-item__details > p.title', function(cartResult) {
        const productInCart = cartResult.value;
        // check if product in cart is same as one added
        browser.assert.strictEqual(productInCart, productToAdd, 'Product in cart matches added product');
      });
    });
  }
};
