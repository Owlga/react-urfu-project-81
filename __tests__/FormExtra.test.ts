import { expect, test } from "vitest";
import formFor from "../src/HexletCode";

const template = { name: "rob", job: "hexlet", gender: "m" };

test("1 input", () => {
  const form = formFor(template, { method: "post" }, (f) => {
    f.input("name");
  });
  const expected =
    '<form action="#" method="post">' + '<input name="name" type="text" value="rob">' + "</form>";
  expect(form.toString()).toBe(expected);
});

test("доп инфа в инпуте", () => {
  const form = formFor(template, {}, (f) => {
    f.input("name", { class: "user-input" });
    f.input("job");
  });
  const expected =
    '<form action="#" method="post">' +
    '<input name="name" type="text" value="rob" class="user-input">' +
    '<input name="job" type="text" value="hexlet">' +
    "</form>";
  expect(form.toString()).toBe(expected);
});

test("только as", () => {
  const form = formFor(template, {}, (f) => f.input("job", { as: "textarea" }));
  const expected =
    '<form action="#" method="post">' +
    '<textarea cols="20" rows="40" name="job">hexlet</textarea>' +
    "</form>";
  expect(form.toString()).toBe(expected);
});

test("as переопределение дефолтов", () => {
  const form = formFor(template, { url: "#" }, (f) =>
    f.input("job", { as: "textarea", rows: 50, cols: 50 }),
  );
  const expected =
    '<form action="#" method="post">' +
    '<textarea cols="50" rows="50" name="job">hexlet</textarea>' +
    "</form>";
  expect(form.toString()).toBe(expected);
});

test("as допы", () => {
  const form = formFor(template, { url: "#" }, (f) =>
    f.input("job", { as: "textarea", class: "my-textarea" }),
  );
  const expected =
    '<form action="#" method="post">' +
    '<textarea cols="20" rows="40" name="job" class="my-textarea">hexlet</textarea>' +
    "</form>";
  expect(form.toString()).toBe(expected);
});
