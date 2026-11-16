import { expect, test } from "vitest";
import HexletCode from "../src/HexletCode.js";
import { expectedForms } from "./__fixtures__/expectedForms";

const template = { name: "rob", job: "hexlet", gender: "m" };

test("submit по умолчанию — Save", () => {
  const form = HexletCode.formFor(template, { method: "post" }, (f) => {
    f.input("name");
    f.input("job");
    f.submit();
  });
  const expected = expectedForms.submitDefault;
  expect(form.toString()).toBe(expected);
});

test("submit с кастомным текстом", () => {
  const form = HexletCode.formFor(template, { method: "post" }, (f) => {
    f.input("name");
    f.input("job");
    f.submit("Wow");
  });
  const expected = expectedForms.submitExtra;
  expect(form.toString()).toBe(expected);
});
