import { expect, test } from "vitest";
import HexletCode from "../src/HexletCode.js";
import { expectedForms } from "./__fixtures__/expectedForms";

const template = { name: "rob", job: "hexlet", gender: "m" };

test("empty form", () => {
  expect(HexletCode.formFor(template, {}, () => {}).toString()).toBe(expectedForms.empty);
});

test("form with action url", () => {
  expect(HexletCode.formFor(template, { url: "/users" }, () => {}).toString()).toBe(
    expectedForms.actionUrl,
  );
});

test("form with empty url''", () => {
  expect(HexletCode.formFor(template, { url: "" }, () => {}).toString()).toBe(expectedForms.empty);
});

test("form with empty object url", () => {
  expect(HexletCode.formFor(template, {}, () => {}).toString()).toBe(expectedForms.empty);
});

test("form with new method get", () => {
  expect(HexletCode.formFor(template, { method: "get" }, () => {}).toString()).toBe(
    '<form action="#" method="get"></form>',
  );
});

test("throws an error if field is missing in template", () => {
  expect(() => {
    HexletCode.formFor(template, {}, (f) => {
      f.input("age");
    });
  }).toThrow("Field 'age' does not exist in the template.");
});
