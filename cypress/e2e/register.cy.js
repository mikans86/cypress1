/// <reference types="Cypress"/>
describe("registretion test", () => {
    
    function makeId(length) {
        var result = "";
        var characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
          );
        }
        return result;
      }
      let email = `${makeId(5)}@test.com`;

    it ("register with valid data", () => {
        cy.visit("/");
        cy.get ("a[href= '/register']").click();
        cy.get ("#first-name").type("Miroslav");
        cy.get ("#last-name").type("Zaric");
        cy.get ("#email").type(email);
        cy.get ("#password").type("Test1234");
        cy.get ("#password-confirmation").type("Test1234");
        cy.get('[type="checkbox"]').check()
        cy.get("button").click();
        cy.url().should("not.include", "/register");


    });
});