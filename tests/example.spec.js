const { test, expect } = require('@playwright/test');

test('Login, Add item to cart, and Checkout', async ({ page }) => {
  // Buka halaman Sauce Demo
  await page.goto('https://www.saucedemo.com/');

  // Isi form login
  await page.fill('input[name="user-name"]', 'standard_user'); // Ganti dengan username yang sesuai
  await page.fill('input[name="password"]', 'secret_sauce');   // Ganti dengan password yang sesuai

  // Klik tombol login
  await page.click('input[type="submit"]');

  // Tunggu sampai halaman utama setelah login
  await page.waitForSelector('.inventory_list'); // Mengecek apakah elemen produk muncul

  // Pilih produk pertama dan tambah ke keranjang
  await page.click('.inventory_item button'); // Klik tombol 'Add to cart' pada produk pertama

  // Verifikasi produk berhasil ditambahkan ke keranjang
  const cartCount = await page.textContent('.shopping_cart_badge');
  expect(cartCount).toBe('1'); // Verifikasi jumlah item di keranjang adalah 1

  // Klik ikon keranjang untuk melanjutkan ke halaman checkout
  await page.click('.shopping_cart_link');

  // Tunggu hingga halaman keranjang dimuat
  await page.waitForSelector('.cart_list');

  // Klik tombol 'Checkout'
  await page.click('.checkout_button');

  // Isi form informasi checkout
  await page.fill('input[name="firstName"]', 'John');
  await page.fill('input[name="lastName"]', 'Doe');
  await page.fill('input[name="postalCode"]', '12345');

  // Klik tombol 'Continue'
  await page.click('#continue');

  // Tunggu halaman konfirmasi order
  await page.waitForSelector('.summary_info');

  // Verifikasi halaman konfirmasi checkout muncul
  const checkoutComplete = await page.isVisible('.summary_info');
  expect(checkoutComplete).toBe(true);

  console.log('Checkout completed successfully!');
});
