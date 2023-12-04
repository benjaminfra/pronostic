import ErrorAlert from "./ErrorAlert";

describe("ErrorAlert", () => {
  it("should have an error icon", () => {
    cy.mount(<ErrorAlert description="" />);
    cy.getBySel("alert-error-icon").should("exist");
  });
  it("should have a title", () => {
    cy.mount(<ErrorAlert description="" />);
    cy.getBySel("alert-title").should("have.text", "common.error.title");
  });
  it("should have a description", () => {
    const description = "description";
    cy.mount(<ErrorAlert description={description} />);
    cy.getBySel("alert-description").should("have.text", description);
  });
});
