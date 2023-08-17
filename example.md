---
theme: ./
colorSchema: 'auto'
layout: intro
# https://sli.dev/custom/highlighters.html
highlighter: shiki
title: Slidev Penguin Theme
themeConfig:
  logoHeader: '/logo.svg'
  eventLogo: 'https://img2.storyblok.com/352x0/f/84560/2388x414/23d8eb4b8d/vue-amsterdam-with-name.png'
  eventUrl: 'https://vuejs.amsterdam/'
  twitter: '@alvarosabu'
  twitterUrl: 'https://twitter.com/alvarosabu'
css: unocss
---


# A penguin Slidev Theme

🐧 slides for developers

<div class="pt-12">
  <span @click="next" class="px-2 p-1 rounded cursor-pointer hover:bg-white hover:bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---
layout: presenter
eventLogo: 'https://img2.storyblok.com/352x0/f/84560/2388x414/23d8eb4b8d/vue-amsterdam-with-name.png'
eventUrl: 'https://vuejs.amsterdam/'
twitter: '@alvarosabu'

twitterUrl: 'https://twitter.com/alvarosabu'
presenterImage: 'https://res.cloudinary.com/alvarosaburido/image/upload/v1666351649/b_w_egfb4v.png'
---

# Alvaro Saburido

DevRel at <a  href="https://www.storyblok.com/"><logos-storyblok-icon  mr-1/>Storyblok</a>

- Barcelona, Spain 🇪🇸
- I often write at <a href="https://dev.to/alvarosaburido"> dev.to/@alvarosabu</a>
- Creating content on <a href="https://www.youtube.com/channel/AlvaroDevLabs" ><logos-youtube-icon mr-1 />AlvaroDevLabs</a>
- Blog & Portfolio <a href="https://alvarosaburido.dev">alvarosaburido.dev</a>
- Say hi at <a href="https://twitter.com/alvarosabu"><logos-twitter mr-1 />@alvarosabu</a>

---
layout: text-image
media: 'https://media.giphy.com/media/VkMV9TldsPd28/giphy.gif'
caption: 'I am a penguin'
---

# This is a peguin 🐧

Arepa ipsum dolor amet jalabola! aenean sit tequeños se prendio esta chamito;? Nisl nojoda eu amet in? Nisl cuál es la guachafita ni lava ni presta la batea háblame cloro gravida sifrino macundal panita; Sed háblame cloro nunc empanada ac coroto Na webona vladimil parchita? 

- Cacique panita sit Se prendio la labia gravida Praesent tequeño. 
- Qué paso mi pana?! elit parchita molleja aguacate vergación, háblame mollejúo chamito est burda mauris morbi;

---
layout: text-image
reverse: true
media: 'https://media.giphy.com/media/VkMV9TldsPd28/giphy.gif'
---

# This is a reverse peguin

Arepa ipsum dolor amet jalabola! aenean sit tequeños se prendio esta mierdaa menool ladilla chamito;? Nisl nojoda eu amet in? Nisl cuál es la guachafita ni lava ni presta la batea háblame cloro gravida sifrino macundal panita; Sed háblame cloro nunc empanada ac coroto Na webona vladimil parchita? Cacique ladilla sit Se prendio el peo labia gravida Praesent tequeño. Qué paso mi pana?! elit parchita molleja aguacate vergación, háblame mollejúo chamito est burda mauris morbi;
---

# What is Slidev?

Slidev is a slides maker and presenter designed for developers `devs`, consist of the following features

- 📝 **Text-based** - focus on the content with Markdown, and then style them later
- 🎨 **Themable** - theme can be shared and used with npm packages
- 🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion
- 🤹 **Interactive** - embedding Vue components to enhance your expressions
- 🎥 **Recording** - built-in recording and camera view
- 📤 **Portable** - export into PDF, PNGs, or even a hostable SPA
- 🛠 **Hackable** - anything possible on a webpage

<br>
<br>

Read more about [Why Slidev?](https://sli.dev/guide/why)

---

# Navigation

Hover on the bottom-left corner to see the navigation's controls panel

### Keyboard Shortcuts

|                                                      |                             |
| ---------------------------------------------------- | --------------------------- |
| <kbd>space</kbd> / <kbd>tab</kbd> / <kbd>right</kbd> | next animation or slide     |
| <kbd>left</kbd>                                      | previous animation or slide |
| <kbd>up</kbd>                                        | previous slide              |
| <kbd>down</kbd>                                      | next slide                  |

---
layout: new-section

---

# New wild section appeared

![penguin-work](https://media.giphy.com/media/VkMV9TldsPd28/giphy.gif)

---
eventLogo: 'https://img2.storyblok.com/352x0/f/84560/2388x414/23d8eb4b8d/vue-amsterdam-with-name.png'
eventUrl: 'https://vuejs.amsterdam/'
twitter: '@alvarosabu'
twitterUrl: 'https://twitter.com/alvarosabu'

---

# Code

Use code snippets and get the highlighting directly!

```ts
// main.ts

import { createApp } from 'vue'
import { createDynamicForms } from '@asigloo/vue-dynamic-forms'

const VueDynamicForms = createDynamicForms({
  // Global Options go here
})

export const app = createApp(App)

app.use(VueDynamicForms)
```
--- 
layout: two-cols
--- 
Awiwiiw

```ts
// main.ts

import { createApp } from 'vue'
import { createDynamicForms } from '@asigloo/vue-dynamic-forms'

const VueDynamicForms = createDynamicForms({
  // Global Options go here
})

export const app = createApp(App)

app.use(VueDynamicForms)
```

::right::

```vue
<template>
  <div>
    <TheToolbar />
    <slot />
  </div>
</template>
```

---
layout: text-window

---

# Consoles

Use code snippets and get the highlighting directly into a nice looking window!

::window::

```ts
// main.ts

import { createApp } from 'vue'
import { createDynamicForms } from '@asigloo/vue-dynamic-forms'

const VueDynamicForms = createDynamicForms({
  // Global Options go here
})

export const app = createApp(App)

app.use(VueDynamicForms)
```
---
layout: text-window
reverse: true
logoHeader: '/logo.svg'
eventLogo: 'https://img2.storyblok.com/352x0/f/84560/2388x414/23d8eb4b8d/vue-amsterdam-with-name.png'
eventUrl: 'https://vuejs.amsterdam/'
twitter: '@alvarosabu'
twitterUrl: 'https://twitter.com/alvarosabu'
---

# Embedded stuff

Use window to show a live demo of any page, or even a sub component!

::window::

<div class="overflow-hidden relative w-full aspect-16-9">
<iframe height="300" style="width: 100%;" scrolling="no" title="Text Clock" src="https://codepen.io/searleb/embed/pvQaJB?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/searleb/pen/pvQaJB">
  Text Clock</a> by Bill Searle (<a href="https://codepen.io/searleb">@searleb</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
</div>
---
class: 'grid text-center align-self-center justify-self-center'
---

# Gracias totales

[Documentations](https://sli.dev) / [GitHub Repo](https://github.com/slidevjs/slidev)
