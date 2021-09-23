describe("render inscription page", () => {
  //   cy.viewport(1600, 800);
  it("it render correctly", () => {
    cy.visit("/prospect");
    cy.get('a[href="#/prospect"]').click();
    cy.get(":nth-child(1) > .column-name").click();
    // cy.get('a[href="#/student"]').click();
    // cy.get('a[href="#/classes"]').click();
    // cy.get('a[href="#/courses"]').click();
    // cy.get('a[href="#/prospect"]').click();
    // cy.get('a[href="#/prospect"]').click();
    // cy.get('a[href="#/prospect"]').click();
    // cy.get('a[href="#/prospect"]').click();
  });
});
