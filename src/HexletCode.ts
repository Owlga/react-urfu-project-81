import Tag from "./Tag.js";

type AttrOptions = {
  label?: string;
  labelHtml?: Record<string, string>;
  as?: string;
  [key: string]: string | Record<string, string> | undefined;
};

class FormBuilder {
  public readonly allTags: Tag[] = [];
  constructor(private template: Record<string, string>) {}

  private static createAsTag(
    attrOptions: AttrOptions,
    name: string,
    content: string,
    tagName: string,
  ) {
    if (tagName === "textarea") {
      const cols = attrOptions.cols || "20";
      const rows = attrOptions.rows || "40";
      return new Tag(tagName, { cols, rows, name, ...attrOptions }, content);
    }
    return new Tag(tagName, { name, ...attrOptions }, content);
  }

  private static capitalize(s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  private static createLabelTag(
    name: string,
    labelOptions: Record<string, string>,
    labelName: string | undefined,
  ) {
    const content = labelName || FormBuilder.capitalize(name);
    return new Tag("label", { for: name, ...labelOptions }, content);
  }

  input(name: string, attrOptions: AttrOptions = {}) {
    if (!(name in this.template)) {
      throw new Error(`Field '${name}' does not exist in the template.`);
    }
    const nameValue = this.template[name];

    const { labelHtml, label, as, ...restAttrs } = attrOptions;

    const labelOptions = labelHtml || {};
    this.allTags.push(FormBuilder.createLabelTag(name, labelOptions, label));

    if (as) {
      this.allTags.push(FormBuilder.createAsTag(restAttrs, name, nameValue, as));
    } else {
      const obj = { name, type: "text", value: nameValue, ...restAttrs };
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
  callback: (f: FormBuilder) => void,
) {
  const data = { method: options.method || "post", action: options.url || "#" };
  const builder = new FormBuilder(template);
  callback(builder);

  return new Tag("form", data, builder.getHtml()).toString();
}

export default { formFor };
