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