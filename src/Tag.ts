class Tag {
  private static readonly voidElements: ReadonlySet<string> = new Set([
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
  ]);

  constructor(
    public readonly name: string,
    private readonly options?: Record<string, unknown>,
    private readonly insideInfo?: string,
  ) {}

  private renderAttributes(): string {
    if (!this.options) return "";
    const entries = Object.entries(this.options);
    if (entries.length === 0) return "";

    const attrs = entries.map(([key, value]) => `${key}="${value}"`).join(" ");
    return ` ${attrs}`;
  }

  public toString(): string {
    const attrs = this.renderAttributes();

    if (Tag.voidElements.has(this.name)) {
      return `<${this.name}${attrs}>`;
    }
    return `<${this.name}${attrs}>${this.insideInfo ?? ""}</${this.name}>`;
  }
}

export default Tag;
