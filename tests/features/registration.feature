
Feature: Registration for online training
  Scenario:
    Given i navigate to the website "https://blueskycitadel.com/automation-form/"
    And i enter my first name "John"
    And i enter my last name "London"
      And i enter my email Address "qazwsx123@yahoo.com"
    And i enter my height "5 feet 6 inches"
    And i select that i am a vegan
    And i enter which state city and country i am in "London UK"
    And i select how long i have been searching for a job
    And i enter a describtion of my favoriite hobbies and interest "FOOTBALL"
    And i select my choice course
  #  And i click on cookie
   And i choose my career progression
   And i select what days work best for me
  #   And i select what time works best
    And i select my favorite music
    When i click on submit button
    Then i should be registered with message "Thanks for contacting us! We will be in touch with you shortly."
