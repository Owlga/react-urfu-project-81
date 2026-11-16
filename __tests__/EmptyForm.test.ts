import { expect, test } from "vitest";
import HexletCode from "../src/HexletCode.js";

const template = { name: "rob", job: "hexlet", gender: "m" };

test("empty form", () => {
  expect(HexletCode.formFor(template, {}, () => {}).toString()).toBe(
    '<form action="#" method="post"></form>',
  );
});

test("form with action", () => {
  expect(HexletCode.formFor(template, { url: "/users" }, () => {}).toString()).toBe(
    '<form action="/users" method="post"></form>',
  );
});

test("form with ''", () => {
  expect(HexletCode.formFor(template, { url: "" }, () => {}).toString()).toBe(
    '<form action="#" method="post"></form>',
  );
});

test("form with empty object", () => {
  expect(HexletCode.formFor(template, {}, () => {}).toString()).toBe(
    '<form action="#" method="post"></form>',
  );
});

test("form with new method put", () => {
  expect(HexletCode.formFor(template, { method: "put" }, () => {}).toString()).toBe(
    '<form action="#" method="put"></form>',
  );
});

test("throws an error if field is missing in template", () => {
  expect(() => {
    HexletCode.formFor(template, {}, (f) => {
      f.input("age");
    });
  }).toThrow("Field 'age' does not exist in the template.");
});
