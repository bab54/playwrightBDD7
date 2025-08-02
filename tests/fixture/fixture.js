import { test as base } from 'playwright-bdd';
import{RegistrationPage} from '../pages/registrationPage'

export const test = base.extend({
  registrationPage: async ({ page }, use) => {
    await use(new RegistrationPage(page));
  }
});

// import { test as base } from 'playwright-bdd' 
//  import {LoginPage} from '../pages/loginPage'
// import{RegistrationPage} from '../pages/registrationPage'



// export const test = base.extend(({
//     loginPage: async({page}, use) => {
//         const loginPage = new LoginPage(page);
//         await use (loginPage);
//     },


// export const test = base.extend<{registrationPage:RegistrationPage}>({
//   registrationPage: async ({ page }, use) => {
//     await use(new RegistrationPage(page));
//   }