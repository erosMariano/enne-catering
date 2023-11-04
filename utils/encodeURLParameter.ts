export function encodeURLParameter(param: string) {
  return encodeURIComponent(param).replace(/%20/g, '+');
}
