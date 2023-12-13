import { Profile } from "@/types/users";
import ProfileButton from "./ProfileButton";

describe("Profile Button", () => {
  it("should render a button to sign in if there is not logged user ", () => {
    cy.mount(<ProfileButton loggedUser={undefined} isLoading={false} />);
    cy.getBySel("signIn-button").should("exist");
    cy.getBySel("profile-button").should("not.exist");
    cy.getBySel("signIn-loader").should("not.exist");
  });
  it("should not have a profil slide if there is no user logged in", () => {
    cy.mount(<ProfileButton loggedUser={undefined} isLoading={false} />);
    cy.getBySel("profile-slide").should("not.exist");
  });
  it("should render a disabled button with a loader if the user is loading ", () => {
    cy.mount(<ProfileButton loggedUser={undefined} isLoading={true} />);
    cy.getBySel("signIn-button").should("exist");
    cy.getBySel("signIn-button").should("have.attr", "disabled");
    cy.getBySel("signIn-loader").should("exist");
  });
  it("should render a profile button if there is a user", () => {
    const profile: Profile = {
      id: "1",
      username: "test",
    };
    cy.mount(<ProfileButton loggedUser={profile} isLoading={false} />);
    cy.getBySel("profile-button").should("exist");
    cy.getBySel("signIn-button").should("not.exist");
    cy.getBySel("profile-button").should("have.text", profile.username);
  });
  it("should open a profile slide on click of the profile button", () => {
    const profile: Profile = {
      id: "1",
      username: "test",
    };
    cy.mount(<ProfileButton loggedUser={profile} isLoading={false} />);
    cy.getBySel("profile-slide").should("exist");
    cy.getBySel("profile-slide").should("have.class", "translate-x-full");
    cy.getBySel("profile-slide").should("not.have.class", "translate-x-0");
    cy.getBySel("profile-button").click();
    cy.getBySel("profile-slide").should("not.have.class", "translate-x-full");
    cy.getBySel("profile-slide").should("have.class", "translate-x-0");
  });
});
