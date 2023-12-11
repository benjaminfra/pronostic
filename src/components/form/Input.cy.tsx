import Input from "./Input";

describe("Input", () => {
  it("should render an input", () => {
    cy.mount(<Input type="text" dataTest="inputTest" />);
    cy.getBySel("inputTest").should("exist");
    cy.getBySel("inputTest").should("have.class", "block");
    cy.getBySel("inputTest").should("have.class", "w-full");
    cy.getBySel("inputTest").should("have.class", "rounded-md");
    cy.getBySel("inputTest").should("have.class", "border-0");
    cy.getBySel("inputTest").should("have.class", "py-1.5");
    cy.getBySel("inputTest").should("have.class", "px-3");
    cy.getBySel("inputTest").should("have.class", "text-gray-900");
    cy.getBySel("inputTest").should("have.class", "shadow-sm");
    cy.getBySel("inputTest").should("have.class", "ring-1");
    cy.getBySel("inputTest").should("have.class", "ring-inset");
    cy.getBySel("inputTest").should("have.class", "ring-gray-300");
    cy.getBySel("inputTest").should("have.class", "placeholder:text-gray-400");
    cy.getBySel("inputTest").should("have.class", "focus:ring-2");
    cy.getBySel("inputTest").should("have.class", "focus:ring-inset");
    cy.getBySel("inputTest").should("have.class", "focus-visible:outline-none");
    cy.getBySel("inputTest").should("have.class", "focus:ring-yellow-500");
    cy.getBySel("inputTest").should("have.class", "sm:text-sm");
    cy.getBySel("inputTest").should("have.class", "sm:leading-6");
  });
  it("should handle a span with errorMsg when the property is set", () => {
    cy.mount(<Input type="text" dataTest="inputTest" errorMsg="test" />);
    cy.getBySel("errorSpan-inputTest").should("have.text", "test");
  });
});
