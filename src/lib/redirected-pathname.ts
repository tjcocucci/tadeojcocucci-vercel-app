export default function redirectedPathName(pathname: string, locale: string) {
  if (!pathname) return "/" + locale + "/";
  const segments = pathname.split("/").filter((s) => s.length);
  segments.unshift(locale);
  return segments.join("/");
}
