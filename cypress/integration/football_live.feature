Feature: Task_1_tests
Using a BDD approach build a test framework that will assert that all the events returned are football events, from the /football/live API endpoint.
Add a test to assert that there is a home and an away competitor for each of the events.

Scenario: Hitting the /football/live/ endpoint should return correct events
    Given The base url is up
    When I hit the "\/football\/live\/" endpoint
    Then All events returned are football events
    And Each event should have a home & away competitor