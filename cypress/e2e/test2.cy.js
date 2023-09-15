import { envVariables } from "../config";

describe("Some describe", () => {
    before(() => {
        cy.visit('http://uitestingplayground.com/home')
    });

    it("Dynamic ID", () => {
        cy.get("a[href='/classattr']").click();
        cy.wait(1000);
        cy.get('button[type="button"].btn-primary').click();
    })
})