import ErrorAlert from "./ErrorAlert";

describe("ErrorAlert", () => {
  it("should have an con", () => {
    cy.mount(<ErrorAlert description="" />);
    cy.getBySel("alert-icon").should("have.descendants", "svg");
  });
});
