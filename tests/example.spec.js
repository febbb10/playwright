const { test, expect } = require('@playwright/test');

test('assertion and locator', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const inputNama = page.locator('#user-name');
  await inputNama.fill('standard_user');
  await expect(inputNama).toHaveValue('standard_user');

  const inputPassword = page.locator('#password');
  await inputPassword.fill('secret_sauce');
  await expect(inputPassword).toHaveValue('secret_sauce');

  const loginButton = page.locator('#login-button');
  await loginButton.click();

  const productLabel = page.locator('.header_secondary_container .title');
  await expect(productLabel).toHaveText('Products');

  const addToCartButton = page.locator('#add-to-cart-sauce-labs-backpack');
  await addToCartButton.click();

  const cartButton = page.locator('.shopping_cart_link');
  await cartButton.click();

  const checkout = page.locator('#checkout');
  await checkout.click();

  const inputNamadepan = page.locator('#first-name');
  await inputNamadepan.fill('Febi');

  const inputNamaTerakhir = page.locator('#last-name');
  await inputNamaTerakhir.fill('ramdani');

  const inputKodepos = page.locator('#postal-code');
  await inputKodepos.fill('12345');

  const continueButton = page.locator('#continue');
  await continueButton.click();

  const finishButton = page.locator('#finish');
  await finishButton.click();

  const completeLabel = page.locator('.complete-header');
  await expect(completeLabel).toHaveText('Thank you for your order!');
});
