import { baseUrl } from '@/common/apiConfig'
import { AI_KEY } from '@/common/config'

export async function POST(request: Request) {
  const { access_token, messages } = await request.json()
  const fetchResponse = await fetch(
    `${
      baseUrl[AI_KEY.AI_SESSION_MAP_yiyan]
    }/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/completions?access_token=${access_token}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        messages
      })
    }
  )
  return new Response(JSON.stringify(await fetchResponse.json()))
}
