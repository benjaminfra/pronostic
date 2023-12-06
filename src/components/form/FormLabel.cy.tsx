import FormLabel from "./FormLabel";

describe("FormLabel", () => {
  it("should render a label with text", () => {
    const test = "test";
    cy.mount(<FormLabel dataTest="labelTest">{test}</FormLabel>);
    cy.getBySel("labelTest").should("exist");
    cy.getBySel("labelTest").should("have.text", test);
    cy.getBySel("labelTest").should("have.class", "block");
    cy.getBySel("labelTest").should("have.class", "text-sm");
    cy.getBySel("labelTest").should("have.class", "font-medium");
    cy.getBySel("labelTest").should("have.class", "leading-6");
    cy.getBySel("labelTest").should("have.class", "text-gray-900");
  });
});
