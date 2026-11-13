import Tag from "./Tag";
function formFor(template: object, options: { url?: string } = {}, _callback: (f: any) => void) {
  const data = { action: options.url || "#", method: "post" };
  return new Tag("form", data);
}

export default formFor;
