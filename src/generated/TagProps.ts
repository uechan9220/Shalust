export interface TagQueryProps {
  Tags: [{ name: string }]
}

export interface UserQueryProps {
  User: [
    {
      avatar: string
      email: string
      name: string
      Posts: [
        {
          image: string
        }
      ]
    }
  ]
}
