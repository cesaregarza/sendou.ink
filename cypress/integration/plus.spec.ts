import { PLUS_SUGGESTIONS_PAGE } from "~/utils/urls";

export {};

describe("Plus suggestions page", () => {
  beforeEach(() => {
    cy.seed();
  });

  it("views suggestions status as non plus member", function () {
    cy.auth(150);
    cy.visit(PLUS_SUGGESTIONS_PAGE);
    cy.contains("You are suggested");
  });

  it("adds a comment and deletes one", () => {
    cy.auth();
    cy.visit(PLUS_SUGGESTIONS_PAGE);
    cy.getCy("plus2-radio").click();
    cy.getCy("comment-button").first().click();

    cy.url().should("include", "/2/"); // let's check the radio button click did something
    cy.getCy("comment-textarea").type("Cracked!");
    cy.getCy("submit-button").click();

    cy.contains("Cracked!");

    cy.getCy("comments-summary").first().click();
    cy.getCy("delete-comment-button").first().click();
    cy.getCy("confirm-button").click();
    cy.contains("Cracked!").should("not.exist");
  });

  // xxx: test adding completely new suggestion, validation works
});
