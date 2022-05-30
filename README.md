![repository-banner.png](https://res.cloudinary.com/alvarosaburido/image/upload/v1612193118/as-portfolio/Repo_Banner_kexozw.png)

# slidev-theme-penguin

[![NPM version](https://img.shields.io/npm/v/slidev-theme-penguin?color=3AB9D4&label=)](https://www.npmjs.com/package/slidev-theme-penguin)

A Penguin 🐧  theme for [Slidev](https://github.com/slidevjs/slidev).

This theme is based on my personal brand, but it can be easily use and customized for your own.

<!--
run `npm run dev` to check out the slides for more details of how to start writing a theme
-->

<!--
put some screenshots here to demonstrate your theme,
-->


Live demo: [here](https://slidev-theme-penguin.alvarosaburido.dev/)

## You can help me keep working on this project 💚

- [Become a Sponsor on GitHub](https://github.com/sponsors/alvarosaburido)
- [One-time donation via PayPal](https://paypal.me/alvarosaburido)

<h4 align="center">Generous Unicorns 🦄</h4>

<p align="center">
  <a href="https://github.com/OmgImAlexis" target="_blank" rel="noopener noreferrer" ">
    <img src="https://avatars.githubusercontent.com/u/6525926?v=4" height="72px"  style="border-radius: 100%; overflow: hidden; border: 4px solid #5EDCAE" alt="OmgImAlexis">
  </a>
</p>


## Install

Add the following frontmatter to your `slides.md`. Start Slidev then it will prompt you to install the theme automatically.

<pre><code>---
theme: <b>penguin</b>
---</code></pre>

It is also required to install the npm package `vite-svg-loader` and adding a vite.config.js in your project with the following:

```js
import svgLoader from 'vite-svg-loader'

export default {
  plugins: [svgLoader()],
}
```

Learn more about [how to use a theme](https://sli.dev/themes/use).

## Layouts

This theme provides the following layouts:

### Header and footer

By default any layout will not contain a header and a footer

But you can add this properties to add header and footer

```
---
themeConfig:
  logoHeader: '/logo.svg'
  eventLogo: 'https://img2.storyblok.com/352x0/f/84560/2388x414/23d8eb4b8d/vue-amsterdam-with-name.png'
  eventUrl: 'https://vuejs.amsterdam/'
  twitter: '@alvarosabu'
  twitterUrl: 'https://twitter.com/alvarosabu'
---
```
With properties            | Without properties 
:-------------------------:|:-------------------------:
![introDark](./screenshots/dark/intro.png) | ![introLight](./screenshots/dark/04.png)

---

Date on footer is automatic

### Intro `intro`

Usage:

- Add `intro` in the layout field.

```
---
layout: intro
---
```

Dark                       | Light
:-------------------------:|:-------------------------:
![introDark](./screenshots/dark/intro.png) | ![introLight](./screenshots/light/intro.png)

---

### Presenter `presenter`

Usage:

- Add `presenter` in the layout field.
- Add `presenterImage` for the speaker image.

```
---
layout: presenter
presenterImage: 'https://res.cloudinary.com/alvarosaburido/image/upload/v1622370075/as-portfolio/alvaro_saburido.jpg'
---
```

Dark                       | Light
:-------------------------:|:-------------------------:
![presenterDark](./screenshots/dark/presenter.png) | ![presenterLight](./screenshots/light/presenter.png)

---

### New Section `new-section`

Usage:

- Add `new-section` in the layout field.

```
---
layout: new-section
---
```

Dark                       | Light
:-------------------------:|:-------------------------:
![newSectionDark](./screenshots/dark/new-section.png) | ![newSectionLight](./screenshots/light/new-section.png)

---


### Text Image `text-image`

Usage:

- Add `text-image` in the layout field and add the image url on the `media` field.

```
---
layout: text-image
media: 'https://media.giphy.com/media/VkMV9TldsPd28/giphy.gif'
---
```

Dark                       | Light
:-------------------------:|:-------------------------:
![textImageDark](./screenshots/dark/text-image.png) | ![textImageLight](./screenshots/light/text-image.png)

- Add `reverse:true` to reverse the order of the layout


```
---
layout: text-image
media: 'https://media.giphy.com/media/VkMV9TldsPd28/giphy.gif'
reverse: true
---
```
Dark                       | Light
:-------------------------:|:-------------------------:
![textImageDark](./screenshots/dark/text-image-reverse.png) | ![textImageLight](./screenshots/light/text-image-reverse.png)
---

### Text Window `text-window`

Usage:

- Add `text-window` in the layout field.

```
---
layout: text-window
---
```

Dark                       | Light
:-------------------------:|:-------------------------:
![textWindowDark](./screenshots/dark/text-window.png) | ![textWindowLight](./screenshots/light/text-window.png)

- Add `reverse:true` to reverse the order of the layout


```
---
layout: text-window
reverse: true
---
```
Dark                       | Light
:-------------------------:|:-------------------------:
![textWindowDark](./screenshots/dark/text-window-reverse.png) | ![textWindowLight](./screenshots/light/text-window-reverse.png)

To set the content inside the window console, just use the syntax sugar `::window::` for slot name:

```
---
layout: text-window
---

# Consoles

Use code snippets and get the highlighting directly into a nice looking window!

::window::

I go inside the window

```

## Components

This theme provides the following components:

### Auto-favicon fancy link `fancy-link`

`FancyLink` Component will allow you to automatically add the favicon just aside your link.

![auto-favicon](./screenshots/fancy-link-component.png)

To use it you just need to add it to your `examples.md` like this:

```markdown
Say hi at <fancy-link href="https://twitter.com/alvarosabu">@alvarosabu</fancy-link>
```

### Console window `the-console`


```ts
<the-console>
  <iframe height="300" style="width: 100%;" scrolling="no" title="Text Clock" src="https://codepen.io/searleb/embed/pvQaJB?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    See the Pen <a href="https://codepen.io/searleb/pen/pvQaJB">
    Text Clock</a> by Bill Searle (<a href="https://codepen.io/searleb">@searleb</a>)
    on <a href="https://codepen.io">CodePen</a>.
  </iframe>
</the-console>s
```


> TODO:

## Contributing

- `npm install`
- `npm run dev` to start theme preview of `example.md`
- Edit the `example.md` and style to see the changes
- `npm run export` to generate the preview PDF
- `npm run screenshot` to generate the preview PNG
