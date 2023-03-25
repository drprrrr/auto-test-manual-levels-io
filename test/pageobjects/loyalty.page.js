const Page = require('./page');

class LoyaltyPage extends Page {
  get loyaltyTab () {
    return $('a[href="/bonus-system/auto-levels"]');
  }

  get discountManualLevels () {
    return $('a[href="/bonus-system/discount-manual-levels"]');
  }

  get addDiscountManualButton () {
    return $('div.crm-navigator-table__item button i.material-icons');
  }

  get addManualDiscountInput () {
    return $('input.bonus-level-data__text.ng-untouched.ng-pristine.ng-valid');
  }

  get saveButton () {
    return $('tbody.ng-star-inserted:last-child div.bonus-level-edit.ng-star-inserted:nth-child(1) div:nth-child(1) button');
  }

  get lastDiscountEditButton () {
    return $('tbody:last-child button:nth-of-type(1)');
  }

  async goToDiscountManualLevels () {
    await this.discountManualLevels.click();
  }

  async addManualDiscount () {
    await this.addDiscountManualButton.click();
  }

  async fillManualDiscount (title) {
    await this.addManualDiscountInput.setValue(title);
  }

  async editDiscount () {
    await this.lastDiscountEditButton.click();
    await browser.pause(2000);
    const editInput = await $('input.bonus-level-data__text.ng-untouched.ng-pristine.ng-valid');
    await editInput.setValue('Edited coupon');
    await browser.pause(2000);
    const savaButton = await $('tbody:last-child button.bonus-level-edit__button:nth-of-type(1)');
    await savaButton.click();
    await browser.pause(2000);

  }
}

module.exports = new LoyaltyPage();
