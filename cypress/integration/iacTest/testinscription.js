describe("render inscription page", () => {
  //   cy.viewport(1600, 800);
  it("it render correctly", () => {
    cy.visit("/prospect");
    cy.get('a[href="#/prospect"]').should("exist");

    cy.get("#status").click();
    cy.get('[aria-label="Clear value"]').click();
    cy.scrollTo("bottom");
    cy.get("#status").click();
    cy.get('[data-value="treated"]').click();
    cy.scrollTo("top");
    cy.get("#status").click();
    cy.get('[data-value="pending"]').click();
    cy.get(".jss78 > .MuiButtonBase-root > .MuiButton-label").click();

    cy.get('[data-key="comment"]').click();
    cy.wait(2000);
    cy.get("#comment").type("TEST");

    // cy.get(".Mui-selected").click();
    // cy.get('a[href="#/student"]').click();
    // cy.get('a[href="#/classes"]').click();
    // cy.get('a[href="#/courses"]').click();
    // cy.get('a[href="#/prospect"]').click();
    // cy.get('a[href="#/prospect"]').click();
    // cy.get('a[href="#/prospect"]').click();
    // cy.get('a[href="#/prospect"]').click();
  });
});
