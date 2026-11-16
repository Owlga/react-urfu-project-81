import Tag from "./Tag";

class FormData {
  public readonly allTagsStrings: string[] = [];
  constructor(private template: Record<string, string>) {}

  private createAsTag(
    attrOptions: Record<string, string>,
    nameObj: Record<string, string>,
    content: string,
  ) {
    const tagName = attrOptions.as;
    let defaults: Record<string, string> = {};
    if (tagName === "textarea") {
      defaults = { cols: "20", rows: "40" };
    }
    const tagOptions: Record<string, string> = {};
    for (const attr of Object.keys(attrOptions)) {
      if (defaults.hasOwnProperty(attr)) {
        defaults[attr] = attrOptions[attr];
      } else if (attr !== "as") {
        tagOptions[attr] = attrOptions[attr];
      }
    }
    const obj = { ...defaults, ...nameObj, ...tagOptions };
    const tag = new Tag(tagName, obj, content);
    this.allTagsStrings.push(tag.toString());
  }
  private static capitalize(s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  private static createLabelTag(name: string) {
    return new Tag("label", { for: name }, FormData.capitalize(name));
  }

  input(name: string, attrOptions?: Record<string, string>) {
    const nameValue = this.template[name] ?? undefined;
    if (!nameValue) {
      throw new Error("Missing name attribute in template");
    }
    const nameObj = { name: name };
    this.allTagsStrings.push(FormData.createLabelTag(name).toString());

    if (attrOptions && attrOptions.hasOwnProperty("as")) {
      this.createAsTag(attrOptions, nameObj, nameValue);
    } else {
      const obj = { ...nameObj, type: "text", value: nameValue, ...attrOptions };
      const tag = new Tag("input", obj);
      this.allTagsStrings.push(tag.toString());
    }
  }

  submit(value?: string) {
    const submitTag = new Tag("input", { type: "submit", value: value || "Save" });
    this.allTagsStrings.push(submitTag.toString());
  }
}

function formFor(
  template: Record<string, string>,
  options: Record<string, unknown> = {},
  callback?: (f: any) => void,
) {
  const data = { action: options.url || "#", method: options.method || "post" };
  const formData = new FormData(template);
  if (callback) {
    callback(formData);
  }
  const insideTags = formData.allTagsStrings;
  return new Tag("form", data, insideTags.join(""));
}

export default formFor;
