import Tag from "./Tag.js";

class FormBuilder {
  public readonly allTags: Tag[] = [];
  constructor(private template: Record<string, string>) {}

  private static createAsTag(attrOptions: Record<string, string>, name: string, content: string) {
    const { as, ...restAttrs } = attrOptions;
    const cols = restAttrs.cols || "20";
    const rows = restAttrs.rows || "40";
    return new Tag(as, { cols, rows, name, ...restAttrs }, content);
  }
  private static capitalize(s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  private static createLabelTag(name: string) {
    return new Tag("label", { for: name }, FormBuilder.capitalize(name));
  }

  input(name: string, attrOptions: Record<string, string> = {}) {
    const nameValue = this.template[name] ?? undefined;
    if (!nameValue) {
      throw new Error("Missing name attribute in template");
    }
    this.allTags.push(FormBuilder.createLabelTag(name));

    if (attrOptions.as === "textarea") {
      this.allTags.push(FormBuilder.createAsTag(attrOptions, name, nameValue));
    } else {
      const obj = { name, type: "text", value: nameValue, ...attrOptions };
      const tag = new Tag("input", obj);
      this.allTags.push(tag);
    }
  }

  submit(value?: string) {
    const submitTag = new Tag("input", { type: "submit", value: value || "Save" });
    this.allTags.push(submitTag);
  }

  getHtml(): string {
    return this.allTags.map((tag) => tag.toString()).join("");
  }
}

function formFor(
  template: Record<string, string>,
  options: Record<string, unknown> = {},
  callback: (f: any) => void = () => {},
) {
  const data = { action: options.url || "#", method: options.method || "post" };
  const builder = new FormBuilder(template);
  callback(builder);

  return new Tag("form", data, builder.getHtml());
}

export default formFor;
