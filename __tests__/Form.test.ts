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

test("form with undefined", () => {
  expect(formFor(template, { url: undefined }, () => {}).toString()).toBe(
    '<form action="#" method="post"></form>',
  );
});
test("form with empty", () => {
  expect(formFor(template, {}, () => {}).toString()).toBe('<form action="#" method="post"></form>');
});
