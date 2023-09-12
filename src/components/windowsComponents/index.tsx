/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import { AI_SESSION_MAP, AI_STATE } from '@/common/config'
import { mockSessionMessage } from '@/common/mock'
import { Tooltip, Toast } from '@douyinfe/semi-ui'
import { IconSetting } from '@douyinfe/semi-icons'
import './styles.css'

const scrollBubble = (element) => {
  if (element != null) {
    element.scrollIntoView(true)
  }
}

const AiBubble = ({ index, message, thisRef }) => {
  return (
    <li key={`chat__list-message_AiBubble_${index}`} ref={thisRef}>
      {/* <div className="chat__time">Yesterday at 16:43</div> */}
      <div className={`chat__bubble chat__bubble--you`}>{message}</div>
    </li>
  )
}
const UserBubble = ({ index, message, thisRef }) => {
  return (
    <li key={`chat__list-message_UserBubble_${index}`} ref={thisRef}>
      {/* <div className="chat__time">Yesterday at 16:43</div> */}
      <div className={`chat__bubble chat__bubble--me`}>{message}</div>
    </li>
  )
}

const WindowsComponentes = () => {
  const [currentTheme, setCurrentTheme] = useState('light')
  const toggleTheme = () => {
    if (currentTheme === 'light') {
      setCurrentTheme('dark')
      document.body.classList.add('dark-mode')
      document.body.setAttribute('theme-mode', 'dark')
    } else {
      setCurrentTheme('light')
      document.body.classList.remove('dark-mode')
      document.body.removeAttribute('theme-mode')
    }
  }
  const [currentAiSession, setCurrentAiSession] = useState(AI_SESSION_MAP[0])
  const onChangeSelectAiSession = (aiSession) => setCurrentAiSession(aiSession)

  const [sessionMessage, setSessionMessage] = useState(mockSessionMessage)

  const [inputValue, setInputValue] = useState('')

  const sendMessage = () => {
    if (!inputValue.trim()) {
      return Toast.error({
        content: '请输入您想了解的内容！',
        duration: 3
      })
    }
    setSessionMessage([...sessionMessage, { isOwn: true, message: inputValue }])
    setInputValue('')
  }

  const handleInputChange = (event) => {
    const value = event.target.value
    setInputValue(value)
  }

  return (
    <div className="home-page__content messages-page">
      <div className="container-fluid h-full">
        <div className="row h-full">
          {/* <!-- start message list section  --> */}
          <div className="col-12 col-md-4 col-lg-5 col-xl-3 px-0 messages-page__list-scroll w-1/5 h-full">
            <div className="messages-page__header mb-0 px-4 pt-3 pb-3">
              <span className="messages-page__title">AI Chat Session</span>
              <div
                className="messages-page__dark-mode-toogler"
                onClick={toggleTheme}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg-icon svg-icon--dark-mode"
                  viewBox="0 0 49.7 49.7"
                >
                  <path
                    d="M25.4,49.7A25.6,25.6,0,0,1,1.3,32.3,25.6,25.6,0,0,1,17.3.1a2,2,0,0,1,2.1.5,2.2,2.2,0,0,1,.5,2.1,19.9,19.9,0,0,0-1.2,6.8A21,21,0,0,0,25,24.7,21,21,0,0,0,40.2,31h0a20.9,20.9,0,0,0,6.9-1.2,2,2,0,0,1,2.5,2.5,25.8,25.8,0,0,1-16,16.1A28.7,28.7,0,0,1,25.4,49.7ZM15,5.5A21.4,21.4,0,0,0,5.1,31.1,21.5,21.5,0,0,0,15.9,43.4a21.2,21.2,0,0,0,28.3-8.8,17.5,17.5,0,0,1-4,.4h0a24.9,24.9,0,0,1-18-7.5,24.9,24.9,0,0,1-7.5-18A26.9,26.9,0,0,1,15,5.5Z"
                    fill="#f68b3c"
                  />
                </svg>
              </div>
            </div>
            <div className="messages-page__search mb-0 px-3 pb-3">
              <div className="custom-form__search-wrapper">
                <input
                  type="text"
                  className="form-control custom-form"
                  id="search"
                  placeholder="请输入您想搜素的内容 …"
                />
                <button type="submit" className="custom-form__search-submit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg-icon svg-icon--search"
                    viewBox="0 0 46.6 46.6"
                  >
                    <path
                      d="M46.1,43.2l-9-8.9a20.9,20.9,0,1,0-2.8,2.8l8.9,9a1.9,1.9,0,0,0,1.4.5,2,2,0,0,0,1.5-.5A2.3,2.3,0,0,0,46.1,43.2ZM4,21a17,17,0,1,1,33.9,0A17.1,17.1,0,0,1,33,32.9h-.1A17,17,0,0,1,4,21Z"
                      fill="#f68b3c"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <ul className="messages-page__list pb-5 px-1 px-md-3">
              {AI_SESSION_MAP.map((item, index) => {
                return (
                  <li
                    key={`AI_SESSION_MAP_${index}`}
                    className={`messaging-member ${
                      item.state === AI_STATE.ONLINE
                        ? 'messaging-member--online'
                        : 'messaging-member--offline'
                    } ${
                      currentAiSession.key === item.key
                        ? 'messaging-member--active'
                        : ''
                    }`}
                    onClick={() => onChangeSelectAiSession(item)}
                  >
                    <div className="messaging-member__wrapper">
                      <div className="messaging-member__avatar">
                        <div style={{ position: 'relative' }}>
                          <img
                            src={`${item.logo.src}`}
                            alt={item.name}
                            loading="lazy"
                          />
                          <div className="user-status"></div>
                        </div>
                      </div>
                      <span className="messaging-member__name">
                        {item.name}
                      </span>
                      <Tooltip position="topLeft" content={item.description}>
                        <span className="messaging-member__message">
                          {item.description}
                        </span>
                      </Tooltip>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
          {/* <!-- end message list section  --> */}
          {/* <!-- start content section  --> */}
          <div className="chat col-12 col-md-8 col-lg-7 col-xl-6 px-0 pl-md-1 w-4/5 h-full">
            <div className="chat__container">
              <div className="chat__wrapper py-2 pt-mb-2 pb-md-3">
                <div
                  className={`chat__messaging ${
                    currentAiSession.state === AI_STATE.ONLINE
                      ? 'messaging-member--online'
                      : 'messaging-member--offline'
                  } pb-2 pb-md-2 pl-2 pl-md-4 pr-2`}
                >
                  <div className="chat__infos pl-2 pl-md-0">
                    <div className="chat-member__wrapper" data-online="true">
                      <div className="chat-member__avatar">
                        <img
                          src={currentAiSession.logo.src}
                          alt={currentAiSession.name}
                          loading="lazy"
                        />
                        <div className="user-status user-status--large"></div>
                      </div>
                      <div className="chat-member__details">
                        <span className="chat-member__name">
                          {currentAiSession.name}
                        </span>
                        <span className="chat-member__status">
                          {currentAiSession.description}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="chat__actions mr-2 ">
                    <ul className="m-0">
                      <li>
                        <IconSetting size="extra-large" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="chat__content pt-4 px-4">
                  <ul className="chat__list-messages">
                    {sessionMessage.map((item, index) => {
                      return item.isOwn ? (
                        <UserBubble
                          index={index}
                          message={item.message}
                          thisRef={scrollBubble}
                          key={`chat__list-message_UserBubbleComponent_${index}`}
                        />
                      ) : (
                        <AiBubble
                          index={index}
                          message={item.message}
                          thisRef={scrollBubble}
                          key={`chat__list-message_AiBubbleComponent_${index}`}
                        />
                      )
                    })}
                  </ul>
                </div>
                {/*  */}
                <div className="chat__send-container pl-4 pr-4add8px px-md-3 pt-1 pt-md-3">
                  <div className="custom-form__send-wrapper">
                    <input
                      type="text"
                      className="form-control custom-form"
                      id="message"
                      placeholder="请输入您想了解的内容 …"
                      value={inputValue}
                      onChange={handleInputChange}
                    />
                    <button className="custom-form__send-img chat-attachment-btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="feather feather-paperclip"
                        viewBox="0 0 24 24"
                      >
                        <defs />
                        <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
                      </svg>
                    </button>
                    <button
                      className="custom-form__send-submit chat-send-btn"
                      onClick={() => sendMessage()}
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end content section  --> */}
        </div>
      </div>
    </div>
  )
}

export default WindowsComponentes
