const LoginPage = require('../pageobjects/login.page');
const ClientPage = require('../pageobjects/client.page');

describe("Client tests", () => {
  
  beforeEach(async () => {
    await LoginPage.open();
    await LoginPage.login('Admin', 'Admin@Navi');
  });
  
  afterEach(async () => {
    await browser.reloadSession();
  })
  
  it('Create a client', async () => {
    await expect(browser).toHaveUrlContaining('clients');
    await ClientPage.createClient();
    await browser.pause(5000);
    await browser.acceptAlert()
    await expect(browser).toHaveUrlContaining('clients')
  })
  
  it('Update a client', async () => {
    await expect(browser).toHaveUrlContaining('clients');
    await ClientPage.updateClient();
    await browser.pause(3000);
    await browser.acceptAlert()
    await browser.pause(3000);
  })
  
  it('View updated client', async () => {
    await expect(browser).toHaveUrlContaining('clients');
    await ClientPage.viewClient();
  })
})
