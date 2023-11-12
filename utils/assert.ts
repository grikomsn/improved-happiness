export const ignoreSymbol = Symbol("ignore");

export function ignore(): never {
  throw ignoreSymbol;
}

export function ignoreAssert(condition: any): asserts condition {
  if (condition) return condition;
  ignore();
}

export function ignoreNullable<T>(value: T): NonNullable<T> {
  if (value) return value;
  ignore();
}

export function raise(err?: string, opts?: ErrorOptions): never {
  throw new Error(err, opts);
}

export function raiseAssert(condition: any, err?: string, opts?: ErrorOptions): asserts condition {
  if (condition) return;
  raise(err, opts);
}
