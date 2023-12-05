import AlertDescription from "./AlertDescription";

describe("AlertDescription", () => {
  it("should have a p with text children", () => {
    const description = "description";
    cy.mount(<AlertDescription>{description}</AlertDescription>);
    cy.getBySel("alert-description").contains(description);
  });
  it("should have a p with tags children", () => {
    const description = <div>test</div>;
    cy.mount(<AlertDescription>{description}</AlertDescription>);
    cy.getBySel("alert-description")
      .should("have.descendants", "div")
      .and("have.text", "test");
  });
});
