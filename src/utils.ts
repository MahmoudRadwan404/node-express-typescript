import path from "path";

export function src(relativePath: string) {
  return path.resolve(process.cwd(), "src", relativePath);
}
