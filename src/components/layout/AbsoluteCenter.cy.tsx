import AbsoluteCenter from "./AbsoluteCenter";

describe("AbsoluteCenter", () => {
  it("should center a React element", () => {
    const element = "text";
    cy.mount(<AbsoluteCenter>{element}</AbsoluteCenter>);
    cy.getBySel("absolute-center").should("have.class", "absolute");
    cy.getBySel("absolute-center").should("have.class", "left-1/2");
    cy.getBySel("absolute-center").should("have.class", "top-1/2");
    cy.getBySel("absolute-center").should("have.class", "ps-6");
    cy.getBySel("absolute-center").should("have.class", "pe-6");
    cy.getBySel("absolute-center").should("have.class", "-translate-y-2/4");
    cy.getBySel("absolute-center").should("have.class", "-translate-x-2/4");
    cy.getBySel("absolute-center").should("have.class", "bg-white");
  });
});
