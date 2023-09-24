import { baseUrl } from '@/common/apiConfig'
import { AI_KEY } from '@/common/config'
export async function POST(request: Request) {
  const { client_id, client_secret } = await request.json()
  const fetchResponse = await fetch(
    `${
      baseUrl[AI_KEY.AI_SESSION_MAP_yiyan]
    }/oauth/2.0/token?grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`
  )
  return new Response(JSON.stringify(await fetchResponse.json()))
}
