import DividerWithText from "./DividerWithText";

describe("DividerWithText", () => {
  it("should render with a text inside the absoluteCenter", () => {
    const text = "test";
    cy.mount(<DividerWithText text={text} />);

    cy.get('[data-test="dividerBox"]').should("exist");
    cy.get('[data-test="divider"').should("exist");
    cy.get("[data-test='absoluteCenter']").should("have.text", text);
  });
  it("should render with an empty text inside the absoluteCenter", () => {
    const text = "";
    cy.mount(<DividerWithText text={text} />);
    cy.get("[data-test='absoluteCenter']").should("be.be.empty");
  });
});
