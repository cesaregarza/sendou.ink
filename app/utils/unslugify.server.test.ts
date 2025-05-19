import { describe, expect, test, vi } from "vitest";

// Mock weapon translations to keep the test lightweight
vi.mock("../../locales/en/weapons.json", () => ({
  default: {
    MAIN_500: "Splattershot",
  },
}));

import { weaponNameSlugToId } from "./unslugify.server";

describe("weaponNameSlugToId", () => {
  test("returns numeric id for known slug", () => {
    expect(weaponNameSlugToId("splattershot")).toBe(500);
  });

  test("returns null for unknown slug", () => {
    expect(weaponNameSlugToId("unknown")).toBeNull();
  });

  test("returns null when slug is undefined", () => {
    expect(weaponNameSlugToId(undefined)).toBeNull();
  });
});
