export interface TagQueryProps {
  Tags: [{ name: string }]
}

export interface PostQueryProps {
  Post: [
    {
      create_at: any
      caption: string
      image: string
      Likes_aggregate: [
        {
          aggregate: [
            {
              count: number
            }
          ]
        }
      ]
      Like: [
        {
          id: number
        }
      ]
    }
  ]
}
