import { expect, test } from "vitest";
import HexletCode from "../src/HexletCode.js";

const template = { name: "rob", job: "hexlet", gender: "m" };

test("submit по умолчанию — Save", () => {
  const form = HexletCode.formFor(template, { method: "post" }, (f) => {
    f.input("name");
    f.input("job");
    f.submit();
  });
  const expected =
    '<form action="#" method="post">' +
    '<label for="name">Name</label>' +
    '<input name="name" type="text" value="rob">' +
    '<label for="job">Job</label>' +
    '<input name="job" type="text" value="hexlet">' +
    '<input type="submit" value="Save">' +
    "</form>";
  expect(form.toString()).toBe(expected);
});

test("submit с кастомным текстом", () => {
  const form = HexletCode.formFor(template, { method: "post" }, (f) => {
    f.input("name");
    f.input("job");
    f.submit("Wow");
  });
  const expected =
    '<form action="#" method="post">' +
    '<label for="name">Name</label>' +
    '<input name="name" type="text" value="rob">' +
    '<label for="job">Job</label>' +
    '<input name="job" type="text" value="hexlet">' +
    '<input type="submit" value="Wow">' +
    "</form>";
  expect(form.toString()).toBe(expected);
});
