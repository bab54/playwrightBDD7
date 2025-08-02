import {RegistrationPage} from '../pages/registrationPage.js'
import { createBdd } from 'playwright-bdd';

import{test} from '../fixture/fixture'

const { Given, When, Then } = createBdd(test);


// import {test  } from '../fixture/fixture'
// import { createBdd } from 'playwright-bdd';

// const { Given, When, Then } = createBdd(test);


// Given('I navigate to the bpbonline website {string}', async ({loginPage}, url) => {
//    await loginPage.navigate(url);
// });







Given('i navigate to the website {string}', async ({registrationPage}, url) => {

 await registrationPage.navigate(url);
});

Given('i enter my first name {string}', async ({registrationPage}, firstName) => {
 await registrationPage.enterFirstName(firstName);
});
Given('i enter my last name {string}', async ({registrationPage}, lastName) => {
  await registrationPage.enterlastName(lastName);
});
Given('i enter my email Address {string}', async ({registrationPage}, email) => {
  await  registrationPage.enterEmail(email);
});

// Given('i enter my last name {string}', async ({}, arg) => {
 
// });

Given('i enter my height {string}', async ({registrationPage}, height) => {
  await registrationPage.enterHeight(height);
});

Given('i select that i am a vegan', async ({registrationPage}) => {
  await registrationPage.selectVegen();
});

Given('i enter which state city and country i am in {string}', async ({registrationPage}, country) => {
      await registrationPage.enterCountry(country)
});

Given('i select how long i have been searching for a job', async ({registrationPage}) => {
  await registrationPage.selectCareer()
});

Given('i enter a describtion of my favoriite hobbies and interest {string}', async ({registrationPage}, hobbies) => {
  await registrationPage.enterHobbies(hobbies)
});

Given('i select my choice course', async ({registrationPage} ) => {
  await registrationPage.clickChoiceCourse()
});

// Given('i click on cookie', async ({}) => {
//   // Step: And i click on cookie
//   // From: tests\features\registration.feature:14:4
// });

Given('i choose my career progression', async ({registrationPage},  ) => {
 await registrationPage.checkCareerProgression()
});

// Given('i select what days work best for me', async ({registrationPage}, ) => {
//   await registrationPage.clickWorksBest();
// });

// Given('i select what time works best', async ({registrationPage}) => {
//   await registrationPage.clickWorksBest();
// });


Given('i select what days work best for me', async ({registrationPage} ) => {
  await registrationPage.clickWorksBest();
});
Given('i select my favorite music', async ({registrationPage}, ) => {
 await registrationPage.clickMusic()  

});

When('i click on submit button', async ({registrationPage}  ) => {
  await registrationPage.clickSubmit()
});

Then('i should be registered with message {string}', async ({registrationPage},) => {
 await registrationPage.verifyMessage() 
});

