import DividerWithText from "./DividerWithText";

describe("DividerWithText", () => {
  it("should render with a text inside a hr", () => {
    const text = "test";
    cy.mount(<DividerWithText text={text} />);
    cy.getBySel("divider").should("exist");
    cy.getBySel("absolute-center").should("have.text", text);
  });
  it("should render with an empty text inside the absoluteCenter", () => {
    const text = "";
    cy.mount(<DividerWithText text={text} />);
    cy.getBySel("absolute-center").should("be.be.empty");
  });
});
