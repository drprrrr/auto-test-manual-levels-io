const LoginPage = require('../pageobjects/login.page');
const { addManualDiscount } = require('../pageobjects/loyalty.page');
const LoyaltyPage = require('../pageobjects/loyalty.page');

describe("Loyalty tests", () => {
  
  beforeEach(async () => {
    await LoginPage.open();
    await LoginPage.login('Admin', 'Admin@Navi');
  });
  
  afterEach(async () => {
    await browser.reloadSession();
  })
  
  it('Create a discont', async () => {
    await LoyaltyPage.loyaltyTab.click();
    await expect(browser).toHaveUrlContaining('bonus-system');
    await LoyaltyPage.goToDiscountManualLevels();
    await expect(browser).toHaveUrlContaining('discount-manual-levels');
    
    await LoyaltyPage.addManualDiscount();
    await LoyaltyPage.fillManualDiscount('New Test');
    
    await browser.pause(2000);

    const savaButton = await $('tbody:last-child button.bonus-level-edit__button:nth-of-type(1)')

    await expect(savaButton).toExist();

    await savaButton.click();

    await browser.pause(2000);
  });

  it('Update a discount', async () => {
    await LoyaltyPage.loyaltyTab.click();
    await expect(browser).toHaveUrlContaining('bonus-system');
    await LoyaltyPage.goToDiscountManualLevels();
    await expect(browser).toHaveUrlContaining('discount-manual-levels');

    await LoyaltyPage.editDiscount();
  })
})
