---
description: You will learn the "visit" command in this part
---

# 2. Navigating

## Practice

In your editor, in the cloned repository, go to cypress/integration/&lt;course&gt; and browse to the corresponding folder matching this course and open "01-first-test.spec.js"

Here you should see a template of our first test:

```text
describe("The Home Page", () => {
  it("successfully loads", () => {
    // TODO: implement me!
  });
});
```

The first thing we need to do is visit the application we are going to test, the Cypress example webiste: [https://example.cypress.io/](https://example.cypress.io/)

This is how Cypress visits a website:

```text
cy.visit("https://flock.community");
```

## Exercise

Edit the test file so it visits the Cypress example website. 

Run it using [the Cypress Test Runner](the-cypress-test-runner.md). The test should pass and on the right side of the newly opened browser window you should see the Cypress example page.

{% hint style="info" %}
When you change and save the test file, the test will automatically rerun in your  browser!
{% endhint %}

## Additional Reading \(not part of the course\)

{% hint style="info" %}
The Cypress website contains comprehensive documentation of all its commands, e.g. for [visit](https://docs.cypress.io/api/commands/visit.html#Syntax)
{% endhint %}

{% hint style="info" %}
Cypress uses "[Mocha](https://mochajs.org/)" for the test syntax, the "describe/it" syntax is referred to as [BDD](https://en.wikipedia.org/wiki/Behavior-driven_development) style
{% endhint %}

