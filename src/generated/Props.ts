export interface TagQueryProps {
  Tags: [{ name: string }]
}

export interface PostQueryProps {
  Post: [
    {
      create_at: any
      id: number
      caption: string
      image: string
    }
  ]
}
