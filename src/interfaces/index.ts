export interface IIndustryIdentifiers {
  type: string
  identifier: string
}

export interface IVolumeInfo {
  title: string
  authors: string[]
  publisher: string
  publishedDate: string
  description: string
  industryIdentifiers: IIndustryIdentifiers[]
  readingModes: {
    text: boolean
    image: boolean
  },
  printType: string
  categories: string[]
  maturityRating: string
  allowAnonLogging: boolean
  contentVersion: string
  panelizationSummary: {
    containsEpubBubbles: boolean
    containsImageBubbles: boolean
  },
  imageLinks: {
    smallThumbnail: string
    thumbnail: string
  },
  language: string
  previewLink: string
  infoLink: string
  canonicalVolumeLink: string
}

export interface ISaleInfo {
  country: string
  saleability: string
  isEbook: boolean
  listPrice: {
    amount: number
    currencyCode: string
  },
  retailPrice: {
    amount: number
    currencyCode: string
  },
  buyLink: string
  offers: {
    finskyOfferType: number
    listPrice: {
      amountInMicros: number
      currencyCode: string
    },
    retailPrice: {
      amountInMicros: number
      currencyCode: string
    }
  }[]
}

export interface IAccessInfo {
  country: string
  viewability: string
  embeddable: boolean
  publicDomain: boolean
  textToSpeechPermission: string
  epub: {
    isAvailable: boolean
  },
  pdf: {
    isAvailable: boolean
    acsTokenLink: string
  },
  webReaderLink: string
  accessViewStatus: string
  quoteSharingAllowed: boolean
}

export interface ISearchInfo {
  textSnippet: string
}

export interface IBook {
  kind: string
  id: string
  etag: string
  selfLink: string
  volumeInfo: IVolumeInfo
  saleInfo: ISaleInfo
  accessInfo: IAccessInfo
  searchInfo: ISearchInfo
}

export interface IBooksResult {
  kind: string
  totalItems: number
  items: IBook[]
}
export interface ISearchData {
  query: string
  maxResults: number
  startIndex: number
}

export interface IState {
  booksResult: IBooksResult
  searchData: ISearchData
}
