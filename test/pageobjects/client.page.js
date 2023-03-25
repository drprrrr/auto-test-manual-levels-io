const Page = require('./page');

class ClientPage extends Page {
  get addClientButton () {
    return $('button.clients-add-user-dialog');
  }
  
  get userForm () {
    return $('form.add-user-modal__form');
  }
  
  get firstNameInput () {
    return $('input[formcontrolname="userName"]');
  }
  
  get surnameInput () {
    return $('input[formcontrolname="userSurname"]');
  }
  
  get middleNameInput () {
    return $('input[formcontrolname="userMiddleName"]');
  }
  
  get genderRadio () {
    return $('mat-radio-group mat-radio-button:nth-child(1) div[class=\'mat-radio-label-content\']');
  }
  
  get emailInput () {
    return $('input[formcontrolname="email"]');
  }
  
  get phoneInput () {
    return $('input[formcontrolname="phone"]');
  }
  
  get birthdayInput () {
    return $('input[formcontrolname="birthday"]');
  }
  
  get saveButton () {
    return $('button[name=\'save\']');
  }
  
  get searchField () {
    return $('input[placeholder=\'Все пользователи\']');
  }
  
  get firstTrInListOfClients () {
    return $('table tbody tr:nth-child(1) td');
  }
  
  get updateMiddleNameInput () {
    return $('input[placeholder="Отчество"]');
  }
  
  get updateSaveButton () {
    return $('button[name="save"]');
  }
  
  get couponLink () {
    return $('a[href="/coupons"]');
  }
  
  async createClient() {
  
    await this.addClientButton.click();
    await expect(this.userForm).toExist();
  
    await this.fillCreateUserForm();
    await this.saveButton.click();
  }
  
  async updateClient() {
    await this.searchField.setValue('Banderez');
    await browser.pause(3000);
    expect(await this.searchField.getValue()).toMatch('Banderez');
    await browser.keys('Enter');
    await browser.pause(3000);
  
    await expect(this.firstTrInListOfClients).toExist();
    await this.firstTrInListOfClients.click();
    await browser.pause(5000);
  
    await this.updateMiddleNameInput.setValue('VeryCrazyMiddleName');
    await this.updateSaveButton.click();
  }
  
  async viewClient() {
   
    await this.searchField.setValue('VeryCrazyMiddleName');
    await browser.keys('Enter');
    await browser.pause(3000);
    await expect(this.firstTrInListOfClients).toExist();
    await this.firstTrInListOfClients.click();
    await browser.pause(5000);
  }
  
  async fillCreateUserForm() {
    await this.surnameInput.setValue('Banderez');
    await this.firstNameInput.setValue('Antonio');
    await this.middleNameInput.setValue('Nikole');
    await this.genderRadio.click();
    await this.emailInput.setValue(this.generateRandomEmail());
    await this.phoneInput.setValue(this.generateRandomNumber())
    await this.birthdayInput.setValue('3/12/1988');
  }

  generateRandomEmail() {
    return `banderez${Math.floor(Math.random() * 555)}@gmail.com`;
  }

  generateRandomNumber() {
    return `996700${Math.floor(Math.random() * 900000)}`;
  }
}

module.exports = new ClientPage();
