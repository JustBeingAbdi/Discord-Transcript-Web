/*
 * Copyright (c) 2021 Abdi Hassan
 * Licensed under the MIT Licence
 */
import './elements/ThemeSwitch'
import './elements/DiscordMessages'
import './elements/DiscordMessage'
import './elements/MessageHeader'
import './elements/MessageAvatar'
import './elements/MessageDate'
import './elements/MessageMarkup'
import './elements/MessageEmoji'
import './elements/MessageMention'
import './elements/MessageSpoiler'
import './elements/MessageCodeblock'
import './elements/MessageImage'
import './elements/MessageVideo'
import './elements/MessageAttachment'
import './elements/DiscordInvite'
import { copy, contextMenu } from './utils'

// Context menus
window.addEventListener('contextmenu', e => {
  e.preventDefault()
  
  // Remove any previous context menu
  const el = document.querySelector('.context-menu')
  if (el) el.remove()
})

document.querySelectorAll('img[data-clickable], message-markup a, .embed a').forEach(link => {
  contextMenu(link, [
    {
      name: 'Copy Link',
      callback: () => copy(link.src || link.href)
    },
    {
      name: 'Open Link',
      callback: () => open(link.src || link.href)
    }
  ])
})

// User Agents
function onLoad () {
  if (navigator.userAgent.toLowerCase().indexOf('firefox') !== -1) {
    document.body.classList.add('firefox')
  }

  if (navigator.userAgent.toLowerCase().indexOf('chrome') !== -1) {
    document.body.classList.add('chrome')
  }
}

document.readyState === 'loading'
  ? document.addEventListener('DOMContentLoaded', onLoad)
  : onLoad()
