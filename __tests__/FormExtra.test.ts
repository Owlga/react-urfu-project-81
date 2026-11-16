import { expect, test } from "vitest";
import HexletCode from "../src/HexletCode.js";

const template = { name: "rob", job: "hexlet", gender: "m" };

test("1 input", () => {
  const form = HexletCode.formFor(template, { method: "post" }, (f) => {
    f.input("name");
  });
  const expected =
    '<form action="#" method="post">' +
    '<label for="name">Name</label>' +
    '<input name="name" type="text" value="rob">' +
    "</form>";
  expect(form.toString()).toBe(expected);
});

test("доп инфа в инпуте", () => {
  const form = HexletCode.formFor(template, {}, (f) => {
    f.input("name", { class: "user-input" });
    f.input("job");
  });
  const expected =
    '<form action="#" method="post">' +
    '<label for="name">Name</label>' +
    '<input name="name" type="text" value="rob" class="user-input">' +
    '<label for="job">Job</label>' +
    '<input name="job" type="text" value="hexlet">' +
    "</form>";
  expect(form.toString()).toBe(expected);
});

test("только as", () => {
  const form = HexletCode.formFor(template, {}, (f) => f.input("job", { as: "textarea" }));
  const expected =
    '<form action="#" method="post">' +
    '<label for="job">Job</label>' +
    '<textarea cols="20" rows="40" name="job">hexlet</textarea>' +
    "</form>";
  expect(form.toString()).toBe(expected);
});

test("as переопределение дефолтов", () => {
  const form = HexletCode.formFor(template, { url: "#" }, (f) =>
    f.input("job", { as: "textarea", rows: 50, cols: 50 }),
  );
  const expected =
    '<form action="#" method="post">' +
    '<label for="job">Job</label>' +
    '<textarea cols="50" rows="50" name="job">hexlet</textarea>' +
    "</form>";
  expect(form.toString()).toBe(expected);
});

test("as допы", () => {
  const form = HexletCode.formFor(template, { url: "#" }, (f) =>
    f.input("job", { as: "textarea", class: "my-textarea" }),
  );
  const expected =
    '<form action="#" method="post">' +
    '<label for="job">Job</label>' +
    '<textarea cols="20" rows="40" name="job" class="my-textarea">hexlet</textarea>' +
    "</form>";
  expect(form.toString()).toBe(expected);
});
