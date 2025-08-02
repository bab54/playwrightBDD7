// Generated from: tests\features\registration.feature
import { test } from "../../../tests/fixture/fixture.js";

test.describe.only('Registration for online training', () => {

  test('', { tag: ['@only'] }, async ({ Given, registrationPage, And, When, Then }) => { 
    await Given('i navigate to the website "https://blueskycitadel.com/automation-form/"', null, { registrationPage }); 
    await And('i enter my first name "John"', null, { registrationPage }); 
    await And('i enter my last name "London"', null, { registrationPage }); 
    await And('i enter my email Address "qazwsx123@yahoo.com"', null, { registrationPage }); 
    await And('i enter my height "5 feet 6 inches"', null, { registrationPage }); 
    await And('i select that i am a vegan', null, { registrationPage }); 
    await And('i enter which state city and country i am in "London UK"', null, { registrationPage }); 
    await And('i select how long i have been searching for a job', null, { registrationPage }); 
    await And('i enter a describtion of my favoriite hobbies and interest "FOOTBALL"', null, { registrationPage }); 
    await And('i select my choice course', null, { registrationPage }); 
    await And('i choose my career progression', null, { registrationPage }); 
    await And('i select what days work best for me', null, { registrationPage }); 
    await And('i select my favorite music', null, { registrationPage }); 
    await When('i click on submit button', null, { registrationPage }); 
    await Then('i should be registered with message "Thanks for contacting us! We will be in touch with you shortly."', null, { registrationPage }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\registration.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":["@only"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given i navigate to the website \"https://blueskycitadel.com/automation-form/\"","stepMatchArguments":[{"group":{"start":26,"value":"\"https://blueskycitadel.com/automation-form/\"","children":[{"start":27,"value":"https://blueskycitadel.com/automation-form/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And i enter my first name \"John\"","stepMatchArguments":[{"group":{"start":22,"value":"\"John\"","children":[{"start":23,"value":"John","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And i enter my last name \"London\"","stepMatchArguments":[{"group":{"start":21,"value":"\"London\"","children":[{"start":22,"value":"London","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And i enter my email Address \"qazwsx123@yahoo.com\"","stepMatchArguments":[{"group":{"start":25,"value":"\"qazwsx123@yahoo.com\"","children":[{"start":26,"value":"qazwsx123@yahoo.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And i enter my height \"5 feet 6 inches\"","stepMatchArguments":[{"group":{"start":18,"value":"\"5 feet 6 inches\"","children":[{"start":19,"value":"5 feet 6 inches","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"And i select that i am a vegan","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"And i enter which state city and country i am in \"London UK\"","stepMatchArguments":[{"group":{"start":45,"value":"\"London UK\"","children":[{"start":46,"value":"London UK","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"And i select how long i have been searching for a job","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"And i enter a describtion of my favoriite hobbies and interest \"FOOTBALL\"","stepMatchArguments":[{"group":{"start":59,"value":"\"FOOTBALL\"","children":[{"start":60,"value":"FOOTBALL","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"And i select my choice course","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"And i choose my career progression","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"And i select what days work best for me","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"And i select my favorite music","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When i click on submit button","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then i should be registered with message \"Thanks for contacting us! We will be in touch with you shortly.\"","stepMatchArguments":[{"group":{"start":36,"value":"\"Thanks for contacting us! We will be in touch with you shortly.\"","children":[{"start":37,"value":"Thanks for contacting us! We will be in touch with you shortly.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end