import { expect, test } from "vitest";
import formFor from "../src/HexletCode";

const template = { name: "rob", job: "hexlet", gender: "m" };

test("submit по умолчанию — Save", () => {
  const form = formFor(template, { method: "post" }, (f) => {
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
  const form = formFor(template, { method: "post" }, (f) => {
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
