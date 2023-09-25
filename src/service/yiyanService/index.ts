import { AI_STATE } from './../../common/enum'
class YiyanClass {
  private client_id = null
  private client_secret = null

  private access_token = null
  private session_key = null
  protected chat_records = []
  public state = AI_STATE.OFFLINE

  public proxyObject = null

  private session_context = []

  constructor({ client_id, client_secret, proxyObject }) {
    this.client_id = client_id
    this.client_secret = client_secret
    this.proxyObject = proxyObject
    if (client_id && client_secret) {
      this.initYiyanSession()
    }
  }

  async initYiyanSession() {
    const fetchResponse = await fetch(`/api/yiyanSession/getAccessToken`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        client_id: this.client_id,
        client_secret: this.client_secret
      })
    })
    const { access_token, session_key } = await fetchResponse.json()
    this.access_token = access_token
    this.session_key = session_key
    this.state = AI_STATE.ONLINE
    this.proxyObject.state = AI_STATE.ONLINE
  }

  initChatRecords = (chat_records) => (this.chat_records = chat_records)

  getChatRecords = () => this.chat_records

  async sendMessage(message, callback) {
    const newChatRecords = [
      ...this.chat_records,
      { ...message, role: 'user', content: message.message }
    ]
    const newSessionMeesage = [
      ...this.session_context,
      { ...message, role: 'user', content: message.message }
    ]
    const newSession_records = {
      access_token: this.access_token,
      messages: newSessionMeesage
    }
    const fetchResponse = await fetch(`/api/yiyanSession/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newSession_records)
    })
    const { result } = await fetchResponse.json()
    this.chat_records = [
      ...newChatRecords,
      { isOwn: false, role: 'assistant', message: result }
    ]
    this.session_context = [
      ...newSessionMeesage,
      { isOwn: false, role: 'assistant', message: result }
    ]
    callback(this.chat_records)
  }
}

export default YiyanClass
