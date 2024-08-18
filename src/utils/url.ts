export function getOffsetFromUrl(url: string): number | null {
  const urlObj = new URL(url);
  const offset = urlObj.searchParams.get("offset");

  return offset ? parseInt(offset, 10) : null;
}
