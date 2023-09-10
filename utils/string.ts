export function getId(url: string) {
  return url.split('/').pop()
}
