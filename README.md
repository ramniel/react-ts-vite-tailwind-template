# Vite + React + TypeScript + TailwindCSS

App template using Vite, React, TypeScript and TailwindCSS

## Motivation

Lightning-fast startups with instant hot module replacement and complex responsive layout creation using Vite, React, TypeScript, and TailwindCSS.

This starter uses following libraries:

- Vite
- React
- TypeScript
- TailwindCSS

## Set up

```shell
mv .env.local.example .env.local
yarn
yarn dev
```

## Vite

[Vite](https://github.com/vitejs/vite) is a fast frontend build tool.

## React

[React](https://github.com/facebook/react) is a JavaScript library for building user interfaces.

## TypeScript

[TypeScript](https://github.com/microsoft/TypeScript) is a superset of JavaScript. It is just one of NPM library, but it provides an original compiler.

When you use TypeScript with React, you can write JSX with TypeScript, called TSX. Then you can develop views written by **Type-Safe** template.

## Tailwind CSS

[Tailwind CSS](https://tailwindcss.com/) is modern utility-first CSS framework. It provides many CSS rules, but these are purged when production builds. So developers do not worry about CSS asset size for performance optimization.

## How was it builded?

- Create Vite app for React with TypeScript
  Run `yarn create vite react-ts-vite-tailwindcss-template --template react-ts`
  </br>
- Add TailwindCSS
  Run `yarn add --dev tailwindcss postcss autoprefixer`
  </br>
- Configure it TailwindCSS
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
  ...
  content: ['./index.html', './src/**/*.{tsx,ts}'],
  ...
  ```
