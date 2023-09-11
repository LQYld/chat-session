/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import { AI_SESSION_MAP, AI_STATE } from '@/common/config'
import { Tooltip } from '@douyinfe/semi-ui'
import './styles.scss'
import { on } from 'process'
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
                    {/* <ul className="m-0">
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="svg-icon"
                          viewBox="0 0 48 48"
                        >
                          <path
                            d="M38.4,48c-2.1,0-5.1-.8-9.5-3.2a62.9,62.9,0,0,1-14.6-11A61.7,61.7,0,0,1,3.2,19C-.9,11.8-.3,8.5.7,6.4A9.7,9.7,0,0,1,4.8,2,21.1,21.1,0,0,1,7.8.4h.3c1.8-.7,3-.3,4.9,1.5h.1a40.1,40.1,0,0,1,5.4,8.2c1.3,2.6,1.6,4.3-.2,6.9l-.5.6c-.8,1-.8,1.2-.8,1.6s1.9,3.4,5.2,6.7S28,30.8,28.8,31s.6,0,1.6-.8l.7-.4c2.5-1.9,4.2-1.6,6.8-.3A40.6,40.6,0,0,1,46.1,35h.1c1.8,1.9,2.2,3.1,1.5,4.9v.2h0a21.1,21.1,0,0,1-1.6,3,10,10,0,0,1-4.3,4.1A7.7,7.7,0,0,1,38.4,48ZM9.5,4.1H9.2L6.9,5.4H6.8A6.3,6.3,0,0,0,4.3,8.1c-.3.7-1.2,2.6,2.4,9A58.9,58.9,0,0,0,17.1,30.9,58.2,58.2,0,0,0,30.9,41.3c6.4,3.6,8.4,2.7,9.1,2.4a6.7,6.7,0,0,0,2.5-2.5.1.1,0,0,0,.1-.1c.5-.8.9-1.6,1.3-2.4v-.2l-.5-.6a35.4,35.4,0,0,0-7.3-4.8c-1.7-.8-1.8-.8-2.7-.1l-.6.4A5.3,5.3,0,0,1,28,34.9c-2.9-.6-7.4-4.9-8.7-6.2s-5.6-5.8-6.2-8.7.6-3.6,1.5-4.8l.4-.6c.7-.9.8-1-.1-2.7a35.4,35.4,0,0,0-4.8-7.3Z"
                            fill="#f68b3c"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="svg-icon"
                          viewBox="0 0 46.8 47.4"
                        >
                          <path
                            d="M35.8,47.4H11a11,11,0,0,1-11-11V11.6A11,11,0,0,1,11,.6h8.8a2,2,0,1,1,0,4H11a7,7,0,0,0-7,7V36.4a7,7,0,0,0,7,7H35.8a7,7,0,0,0,7-7v-9a2,2,0,1,1,4,0v9A11,11,0,0,1,35.8,47.4Z"
                            fill="#f68b3c"
                          />
                          <path
                            d="M36.6,20.4A10.2,10.2,0,1,1,46.8,10.2,10.2,10.2,0,0,1,36.6,20.4ZM36.6,4a6.2,6.2,0,1,0,6.2,6.2A6.2,6.2,0,0,0,36.6,4Z"
                            fill="#f68b3c"
                          />
                        </svg>
                      </li>
                      <li className="chat__details d-flex d-xl-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="svg-icon"
                          viewBox="0 0 42.2 11.1"
                        >
                          <g>
                            <circle cx="5.6" cy="5.6" r="5.6" fill="#d87232" />
                            <circle cx="21.1" cy="5.6" r="5.6" fill="#d87232" />
                            <circle cx="36.6" cy="5.6" r="5.6" fill="#d87232" />
                          </g>
                        </svg>
                      </li>
                    </ul> */}
                  </div>
                </div>
                <div className="chat__content pt-4 px-4">
                  <ul className="chat__list-messages">
                    <li>
                      <div className="chat__time">Yesterday at 16:43</div>
                      <div className="chat__bubble chat__bubble--you">
                        Hey, I bought something yesterdat but haven't gotten any
                        confirmation. Do you know I if the order went through?
                      </div>
                    </li>
                    <li>
                      <div className="chat__bubble chat__bubble--me">
                        Hi! I just checked, your order went through and is on
                        it's way home. Enjoy your new computer! 😃
                      </div>
                    </li>
                    <li>
                      <div className="chat__bubble chat__bubble--you">
                        Ohh thanks ! I was really worried about it !
                      </div>
                      <div className="chat__bubble chat__bubble--you">
                        Can't wait for it to be delivered
                      </div>
                    </li>
                    <li>
                      <div className="chat__time">07:14</div>
                      <div className="chat__bubble chat__bubble--me">
                        Aenean iaculis massa non lorem dignissim volutpat.
                        Praesent id faucibus lorem, a sagittis nunc. Duis
                        facilisis lectus vel sapien ultricies, sed placerat
                        augue elementum. In sagittis, justo nec sodales posuere,
                        nunc est sagittis tellus, eget scelerisque dolor risus
                        vel augue
                      </div>
                      <div className="chat__bubble chat__bubble--me">
                        Is everything alright?
                      </div>
                    </li>
                    <li>
                      <div className="chat__bubble chat__bubble--you">
                        Vestibulum finibus pulvinar quam, at tempus lorem.
                        Pellentesque justo sapien, pulvinar sed magna et,
                        vulputate commodo nisl. Aenean pharetra ornare turpis.
                        Pellentesque viverra blandit ullamcorper. Mauris
                        tincidunt ac lacus vel convallis. Vestibulum id nunc nec
                        urna accumsan dapibus quis ullamcorper massa. Aliquam
                        erat volutpat. Nam mollis mi et arcu dapibus
                        condimentum.
                      </div>
                      <div className="chat__bubble chat__bubble--you">
                        Nulla facilisi. Duis laoreet dignissim lectus vel
                        maximus
                      </div>
                      <div className="chat__bubble chat__bubble--you">
                        Curabitur volutpat, ipsum a condimentum hendrerit ! 😊
                      </div>
                    </li>
                    <li>
                      <div className="chat__time">09:26</div>
                      <div className="chat__bubble chat__bubble--me">
                        Perfect, thanks !
                      </div>
                    </li>
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
                    />
                    <button className="custom-form__send-img chat-attachment-btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="feather feather-paperclip"
                        viewBox="0 0 24 24"
                      >
                        <defs />
                        <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
                      </svg>
                    </button>
                    <button className="custom-form__send-submit chat-send-btn">
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
