import { envVariables } from "../config";

describe("Some describe", () => {
    before(() => {
        cy.visit('http://uitestingplayground.com/home')
    });

    it("Dynamic ID", () => {
        cy.get("a[href='/dynamicid']").click();
        cy.wait(2000);
        cy.contains('Button with Dynamic ID').click();
    })
})