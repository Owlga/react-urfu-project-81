import { expect, test } from "vitest";
import HexletCode from "../src/HexletCode.js";
import { expectedForms } from "./__fixtures__/expectedForms";

const template = { name: "rob", job: "hexlet", gender: "m" };

test("1 input", () => {
  const form = HexletCode.formFor(template, { method: "post" }, (f) => {
    f.input("name");
  });
  const expected = expectedForms.oneInput;
  expect(form.toString()).toBe(expected);
});

test("extra attributes in input", () => {
  const form = HexletCode.formFor(template, {}, (f) => {
    f.input("name", { class: "user-input" });
  });
  const expected = expectedForms.extraInput;
  expect(form.toString()).toBe(expected);
});

test("as textarea", () => {
  const form = HexletCode.formFor(template, {}, (f) => f.input("job", { as: "textarea" }));
  const expected = expectedForms.textarea;
  expect(form.toString()).toBe(expected);
});

test("as переопределение дефолтов", () => {
  const form = HexletCode.formFor(template, { url: "#" }, (f) =>
    f.input("job", { as: "textarea", rows: 50, cols: 50 }),
  );
  const expected = expectedForms.textareaNewDefaults;

  expect(form.toString()).toBe(expected);
});

test("as допы", () => {
  const form = HexletCode.formFor(template, { url: "#" }, (f) =>
    f.input("job", { as: "textarea", class: "my-textarea" }),
  );
  const expected = expectedForms.extraAs;
  expect(form.toString()).toBe(expected);
});
