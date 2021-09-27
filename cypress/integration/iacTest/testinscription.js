// describe("render prospect page", () => {
//   //   cy.viewport(1600, 800);
//   it("it render correctly", () => {
//     cy.visit("/prospect");
//     cy.get('a[href="#/prospect"]').should("exist");

//     cy.get("#status").click();
//     cy.get('[aria-label="Clear value"]').click();
//     cy.scrollTo("bottom");
//     cy.get("#status").click();
//     cy.get('[data-value="treated"]').click();
//     cy.scrollTo("top");
//     cy.get("#status").click();
//     cy.get('[data-value="pending"]').click();
//     cy.get(".jss78 > .MuiButtonBase-root > .MuiButton-label").click();

//     cy.get('[data-key="comment"]').click();
//     cy.get("#comment").type("TEST");

//     cy.visit("/user");
//     // cy.get('a[href="#/user"]').should("exist");
//     // cy.get('a[href="#/user"]').click();
//     // cy.get("/user .MuiToolbar-root > a.MuiButtonBase-root").click();
//     cy.wait(4000);
//     // cy.get(".MuiToolbar-root > a.MuiButtonBase-root").click();
//     // cy.get(".Mui-selected").click();
//     // cy.get('a[href="#/student"]').click();
//     // cy.get('a[href="#/classes"]').click();
//     // cy.get('a[href="#/courses"]').click();

//     // cy.get('a[href="#/prospect"]').click();
//     // cy.get('a[href="#/prospect"]').click();
//     // cy.get('a[href="#/user"]').click();
//   });
// });

const formData = {
  name: "test user",
  email: "tes11@user.com",
  phoneNumber: "0625939301",
  password: "hello world",
};

const repForm = (data) => {
  for (const [key, value] of Object.entries(data)) {
    cy.get(`#${key}`).type(value);
  }
};
describe("rendrig user page", () => {
  it("it rendering correctly", () => {
    cy.visit("/user");

    cy.get(".MuiToolbar-root > a.MuiButtonBase-root").click();
    repForm(formData);

    cy.get("#city").click();
    cy.get('.MuiList-root > [tabindex="0"]').click();

    cy.get("#role").click();
    cy.get('.MuiList-root > [tabindex="0"]').click();

    cy.get(".MuiInputAdornment-root > .MuiButtonBase-root").click();
    cy.get(".MuiFormControlLabel-root").click();

    cy.get(".jss113 > .MuiButtonBase-root > .MuiButton-label").click();
  });
});
