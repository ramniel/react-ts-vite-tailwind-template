# Vite + React + TypeScript + TailwindCSS

App template using Vite, React, TypeScript and TailwindCSS

## Motivation

Lightning-fast startups with instant hot module replacement and complex responsive layout creation using Vite, React, TypeScript, and TailwindCSS.

This starter uses following libraries:

- Vite
- React
- TypeScript
- TailwindCSS
  - daisyUI

## Set up

```shell
mv .env.local.example .env.local
yarn
yarn dev
```

## Vite

[Vite](https://vitejs.dev) is a fast frontend build tool.

## React

[React](https://es.reactjs.org) is a JavaScript library for building user interfaces.

## TypeScript

[TypeScript](https://www.typescriptlang.org) is a superset of JavaScript. It is just one of NPM library, but it provides an original compiler.

When you use TypeScript with React, you can write JSX with TypeScript, called TSX. Then you can develop views written by **Type-Safe** template.

## Tailwind CSS

[Tailwind CSS](https://tailwindcss.com) is modern utility-first CSS framework. It provides many CSS rules, but these are purged when production builds. So developers do not worry about CSS asset size for performance optimization.

### daisyUI

[daisyUI](https://daisyui.com/) is Tailwind CSS Components library.

If you don't want to use it, just remove the package and remove config in `tailwind.config.js`.

## How was it builded?

- Create **Vite** app for **React** with **TypeScript**
  Run `yarn create vite react-ts-vite-tailwindcss-template --template react-ts`
  </br>
- Add **TailwindCSS**
  Run `yarn add --dev tailwindcss postcss autoprefixer`
  </br>
- Configure **TailwindCSS**
  Run `npx tailwindcss init`
  </br>
- Add next to a `postcss.config.js` file:
  </br>

  ```js
  module.exports = {
  	plugins: {
  		tailwindcss: {},
  		autoprefixer: {}
  	}
  }
  ```

  </br>

- Update `content` in `tailwind.config.js`:
  </br>

  ```js
  module.exports = {
  	//...
  	content: ['./index.html', './src/**/*.{tsx,ts}']
  	//...
  }
  ```

  </br>

- Add **daisyUI**
  Run `yarn add daisyui`
  </br>
  Then add `daisyUI` to `tailwind.config.js` file:
  </br>

  ```js
  module.exports = {
  	//...
  	plugins: [require('daisyui')]
  }
  ```

- Add support for TypeScript's path mapping in Vite
  Run `yarn add --dev vite-tsconfig-paths`
