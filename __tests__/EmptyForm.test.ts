import { expect, test } from "vitest";
import formFor from "../src/HexletCode";

const template = { name: "rob", job: "hexlet", gender: "m" };

test("empty form", () => {
  expect(formFor(template, {}, () => {}).toString()).toBe('<form action="#" method="post"></form>');
});

test("form with action", () => {
  expect(formFor(template, { url: "/users" }, () => {}).toString()).toBe(
    '<form action="/users" method="post"></form>',
  );
});

test("form with ''", () => {
  expect(formFor(template, { url: "" }, () => {}).toString()).toBe(
    '<form action="#" method="post"></form>',
  );
});

test("form with empty object", () => {
  expect(formFor(template, {}, () => {}).toString()).toBe('<form action="#" method="post"></form>');
});

test("form with new method put", () => {
  expect(formFor(template, { method: "put" }, () => {}).toString()).toBe(
    '<form action="#" method="put"></form>',
  );
});

test("throws an error if field is missing in template", () => {
  expect(() => {
    formFor(template, {}, (f) => {
      f.input("age");
    });
  }).toThrow("Field 'age' does not exist in the template.");
});
