import { expect, test } from "vitest";
import Tag from "../src/Tag";

test("only one tag", () => {
  expect(new Tag("br").toString()).toBe("<br>");
});

test("tag + 1 option", () => {
  expect(new Tag("img", { src: "path/to/image" }).toString()).toBe('<img src="path/to/image">');
});

test("tag + 2 options", () => {
  expect(new Tag("input", { type: "submit", value: "Save" }).toString()).toBe(
    '<input type="submit" value="Save">',
  );
});

test("pair tag with info", () => {
  expect(new Tag("label", {}, "Email").toString()).toBe("<label>Email</label>");
});

test("pair tag + info + option", () => {
  expect(new Tag("label", { for: "email" }, "Email").toString()).toBe(
    '<label for="email">Email</label>',
  );
});
test("pair tag", () => {
  expect(new Tag("div").toString()).toBe("<div></div>");
});
