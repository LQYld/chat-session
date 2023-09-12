import { AI_KEY } from './config'

export const welcomeMessage = {
  [`${AI_KEY.AI_SESSION_MAP_yiyan}`]: [
    {
      isOwn: false,
      message: `你好，我是文心一言。`
    },
    {
      isOwn: false,
      message: `作为你的智能伙伴，我既能写文案、想点子，又能陪你聊天、答疑解惑。`
    },
    {
      isOwn: false,
      message: `我又更新啦！写代码、数学计算、逻辑推理能力大幅提升，快来和我对话吧！`
    }
  ],
  [`${AI_KEY.AI_SESSION_MAP_xfyun}`]: [
    {
      isOwn: false,
      message: `您好，我是讯飞星火认知大模型。`
    },
    {
      isOwn: false,
      message: `能够学习和理解人类的语言，进行多轮对话。`
    },
    {
      isOwn: false,
      message: `回答问题，高效便捷地帮助人们获取信息、知识和灵感。`
    }
  ],
  [`${AI_KEY.AI_SESSION_MAP_doubao}`]: [
    {
      isOwn: false,
      message: `你好，我是你的 AI 朋友豆包！希望我能帮到你。`
    },
    {
      isOwn: false,
      message: `但也请注意，我当前能力有限，无法确保信息的真实准确，请谨慎参考。`
    },
    {
      isOwn: false,
      message: `你可以试着对我说：如何拍出好看的星空照片。`
    }
  ],
  [`${AI_KEY.AI_SESSION_MAP_glm}`]: [
    {
      isOwn: false,
      message: `您好，我是智谱清言。`
    },
    {
      isOwn: false,
      message: `未完的工作让小智来帮你一起解决吧。`
    }
  ]
}
