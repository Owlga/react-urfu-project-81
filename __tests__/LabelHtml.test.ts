import { expect, test } from "vitest";
import HexletCode from "../src/HexletCode.js";
import { expectedForms } from "./__fixtures__/expectedForms";

test("should generate form with custom label, input and submit", () => {
  const template = { name: "rob" };

  const form = HexletCode.formFor(template, {}, (f) => {
    f.input("name", { label: "User", labelHtml: { class: "form-label", id: "name-label" } });
    f.submit("Ok");
  });

  const expected = expectedForms.labelHtml;

  expect(form.toString()).toBe(expected);
});
