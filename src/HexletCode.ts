import Tag from "./Tag";

class FormData {
  public readonly allTagsStrings: string[] = [];
  constructor(private template: Record<string, string>) {}

  private createAsTag(
    options: Record<string, string>,
    nameObj: Record<string, string>,
    nameValue: string,
  ) {
    const tagName = options.as;
    let defaults: Record<string, string> = {};
    if (tagName === "textarea") {
      defaults = { cols: "20", rows: "40" };
    }
    const tagOptions: Record<string, string> = {};
    for (const attr of Object.keys(options)) {
      if (defaults.hasOwnProperty(attr)) {
        defaults[attr] = options[attr];
      } else if (attr !== "as") {
        tagOptions[attr] = options[attr];
      }
    }
    const obj = { ...defaults, ...nameObj, ...tagOptions };
    const tag = new Tag(tagName, obj, nameValue);
    this.allTagsStrings.push(tag.toString());
  }

  input(name: string, options?: Record<string, string>) {
    const nameValue = this.template[name] ?? undefined;
    if (!nameValue) {
      throw new Error("Missing name attribute in template");
    }
    const nameObj = { name: name };

    if (options && options.hasOwnProperty("as")) {
      this.createAsTag(options, nameObj, nameValue);
    } else {
      const obj = { ...nameObj, type: "text", value: nameValue, ...options };
      const tag = new Tag("input", obj);
      this.allTagsStrings.push(tag.toString());
    }
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
