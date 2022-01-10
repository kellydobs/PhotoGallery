export type Photo = {
  title: string
  imageURL: string
  sourceURL: string
}

export type Category = {
  title: string
  description: string
  photo: Photo[]
}
