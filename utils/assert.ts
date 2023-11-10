export function raise(err?: string, opts?: ErrorOptions): never {
  throw new Error(err, opts);
}
