# sbg-task
## Task One
Using the provided API:<br />

Using a BDD approach build a test framework that will assert that all the events returned are football events, from the /football/live API endpoint.
Add a test to assert that there is a ‘home’ and an ‘away’ competitor for each of the events.


###### BDD
Given the base url is up<br />
When I hit the /football/live endpoint<br />
Then all events returned are football events<br />

Given the base url is up<br />
When I hit the /football/live endpoint<br />
Then each event should have a home & away competitor<br />

# Repo
## System Requirements
Docker<br />
Node<br />

## Running tests
Before tests can be ran you need to spin up the API in docker<br />
You can do this by running command docker run -it --rm --name sbg-tech-test-api -p 8888-8890:8888-8890 sbgtechtest/api in the terminal<br />

There are two ways to run the Cypress tests, either in the Cypress GUI or headless

To run with the GUI:<br />
Run command npx cypress open<br />
Once the GUI has loaded you can either click and run individual test files or run all test files by clicking 'run integration spec'<br />

To run the tests in headless mode:<br />
Run command npx cypress run<br />
You will be able to see the test results within the terminal<br />

