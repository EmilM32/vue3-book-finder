export function getApi (maxResults: number, startIndex: number, query: string): string {
  return `https://www.googleapis.com/books/v1/volumes?&maxResults=${maxResults}&startIndex=${startIndex}&q=${query}`
}
