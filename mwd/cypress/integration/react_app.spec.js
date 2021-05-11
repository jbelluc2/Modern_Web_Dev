const { wait } = require("@testing-library/dom");

describe("Testing the login page", function(){
  beforeEach(function(){
    cy.visit("https://jbelluc2.github.io/Modern_Web_Dev/");
  });
  
  it("should visit the site without crashing", function(){
    cy.visit("https://jbelluc2.github.io/Modern_Web_Dev/");
  });
  
  it("should find the word login in the header", function(){
    cy.contains("h1", "LOGIN");
  });
  
  it("should generate a pop-up form when creating new account", function(){
    cy.contains("button", "CREATE ACCOUNT").click();
  });
  it("should have username and password text boxes", function(){
    cy.get("form input").eq(0).should("have.id", "username");
    cy.get("form input").eq(1).should("have.id", "password");
  });
  it("should verify correct username and password", function(){
    cy.get("form input").eq(0).type("Santa Claus");
    cy.get("form input").eq(1).type("santa");
    cy.contains("button", "LOGIN").click();
    cy.wait(3000);
    cy.get("span");
  });
  it("should not verify incorrect username and password", function(){
    cy.get("form input").eq(0).type("fakeusername");
    cy.get("form input").eq(1).type("fakepassword");
    cy.contains("button", "LOGIN").click();
    cy.wait(3000);
    cy.contains("h1", "LOGIN");
  });
});