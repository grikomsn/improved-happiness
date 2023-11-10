export function stringOrNull(str: unknown): string | null {
  return typeof str === "string" ? str : null;
}

export function stringOrUndefined(str: unknown): string | undefined {
  return typeof str === "string" ? str : undefined;
}

export function toSearchString<T extends Record<string, string>>(obj: T) {
  return new URLSearchParams({ ...obj }).toString();
}

export function trimHttp(str: string) {
  return str.replace(/https?:\/\//, "");
}
