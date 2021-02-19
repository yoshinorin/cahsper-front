import { Comment } from '../../types/comment'
import config from '../../config'

export async function getComments(): Promise<Array<Comment>> {
  const comments: Promise<Array<Comment>> = await fetch(
    `https://${config.apiUrl}/comments/`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }
  ).then((response) => response.json())
  // TODO: error handling
  return comments
}
