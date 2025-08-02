import {  expect } from '@playwright/test';
class RegistrationPage {
  // /**
  //  * @param {import('playwright').Page} page
  //  */
  constructor(page) {
    this.page = page;
    this.firstName =page.getByRole('textbox', { name: 'Name * First' });
    this.lastName =page.getByRole('textbox', { name: 'Last' });
    this.email =page.getByRole('textbox', { name: 'Email *' });
    this.height = page.getByRole('textbox', { name: 'Height:' })
    this.vegen =page.getByLabel('Are you vegan/ Vegetarian?');
    this.country = page.getByRole('textbox', { name: 'Where are you located?' });
   this.career= page.getByLabel('How long have been searching');
   this.hobbies=page.getByRole('textbox', { name: 'Describe your favourite' });
   this.choiceCourse=page.getByRole('radio', { name: 'Business Analyst' });
   this.careerProgression=page.getByRole('checkbox', { name: 'Business Analyst' })
   this.worksBest=page.getByRole('radio', { name: 'Morning' });
   this.music=page.getByRole('radio', { name: 'Afro Beats' });
   this.submit= page.getByRole('button', { name: 'Submit' });
   this.verify=page.locator('#wpforms-confirmation-2082');
  }











  async navigate(url) 
   {
     await this.page.goto(url);
   }
  async enterFirstName(firstName) {
    await this.firstName.fill(firstName) ;
    
  }

  async enterlastName(lastName) {
    await this.lastName.fill(lastName);
   
  }
  async enterEmail(email) {
    await this.email.fill (email);
   
  }
   async enterHeight(height) {
    await this.height.fill (height);
   
  }
  async selectVegen() {
    await this.vegen.selectOption('No'); 
   
  }
async enterCountry(country)
{
  await this.country.fill(country)
}

async selectCareer()
{
 await this.career.selectOption('1 year- 2 years');
}
async enterHobbies(hobbies)
{
await this.hobbies.fill(hobbies);
}
async   clickChoiceCourse()
{
 await this.choiceCourse.click()
}

async checkCareerProgression()
{
  await this.careerProgression.check()
}
async clickWorksBest()
{
  await  this.worksBest.click()
}
async clickMusic()
{
  await  this.music.click()
}
async clickSubmit()
{
  await  this.submit.click()
}
async verifyMessage()
{
 await expect( this.verify).toContainText('Thanks for contacting us! We will be in touch with you shortly.');
}



// }
}
module.exports = { RegistrationPage};