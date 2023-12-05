import AlertErrorIcon from "./AlertErrorIcon";

describe("AlertErrorIcon", () => {
  it("should have an error icon", () => {
    cy.mount(<AlertErrorIcon />);
    cy.getBySel("alert-error-icon").should("exist");
    cy.getBySel("alert-error-icon").should("have.class", "w-7");
    cy.getBySel("alert-error-icon").should("have.class", "h-7");
    cy.getBySel("alert-error-icon").should("have.class", "fill-red-700");
    cy.getBySel("alert-error-icon").should("have.class", "text-white");
    cy.getBySel("alert-error-icon").should("have.class", "stroke-red-100");
  });
});
