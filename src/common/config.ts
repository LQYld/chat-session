import doubaoLogo from '../../public/ai_logo/doubao.png'
import yiyanLogo from '../../public/ai_logo/yiyan.png'
import xfyunLogo from '../../public/ai_logo/xfyun.ico'
import glmLogo from '../../public/ai_logo/glm.png'

export enum AI_KEY {
  AI_SESSION_MAP_yiyan = 'AI_SESSION_MAP_yiyan', // 文心一言
  AI_SESSION_MAP_xfyun = 'AI_SESSION_MAP_xfyun', // 讯飞星火
  AI_SESSION_MAP_doubao = 'AI_SESSION_MAP_doubao', // 豆包
  AI_SESSION_MAP_glm = 'AI_SESSION_MAP_glm' // 智谱清言
}

export const AI_SESSION_MAP = [
  {
    logo: yiyanLogo,
    name: '文心一言',
    description:
      '作为你的智能伙伴，我既能写文案、想点子，又能陪你聊天、答疑解惑。',
    key: AI_KEY.AI_SESSION_MAP_yiyan,
    example: null
  },
  {
    logo: xfyunLogo,
    name: '讯飞星火',
    description:
      '能够学习和理解人类的语言，进行多轮对话。回答问题，高效便捷地帮助人们获取信息、知识和灵感',
    key: AI_KEY.AI_SESSION_MAP_xfyun,
    example: null
  },
  {
    logo: doubaoLogo,
    name: '豆包',
    description: '你好，我是你的 AI 朋友豆包！希望我能帮到你。',
    key: AI_KEY.AI_SESSION_MAP_doubao,
    example: null
  },
  {
    logo: glmLogo,
    name: '智谱清言',
    description:
      '记得多喝水哦，小智可以帮你轻松获取各类信息和辅助创作，让你的时间用在更宝贵的地方。',
    key: AI_KEY.AI_SESSION_MAP_glm,
    example: null
  }
]

export const AI_CONFIG_KEY = 'AI_CONFIG'
