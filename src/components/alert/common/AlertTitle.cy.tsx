import AlertTitle from "./AlertTitle";

describe("AlertTitle", () => {
  it("should have a bold p tag with children", () => {
    const title = "title";
    cy.mount(<AlertTitle>{title}</AlertTitle>);
    cy.getBySel("alert-title").contains(title);
    cy.getBySel("alert-title").should("have.class", "font-bold");
  });
});
