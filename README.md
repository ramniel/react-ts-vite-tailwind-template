# Vite + React + TypeScript + TailwindCSS

App template using Vite, React, TypeScript and TailwindCSS

## Motivation

Lightning-fast startups with instant hot module replacement and complex responsive layout creation using Vite, React, TypeScript, and TailwindCSS.

This starter uses following libraries:

- Vite
- React
  - React Router DOM
- TypeScript
- TailwindCSS
  - daisyUI
- ESLint
- Prettier

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

### React Router DOM

[React Router DOM](https://reactrouter.com) is an npm package that enables you to implement dynamic routing in a web app.

## TypeScript

[TypeScript](https://www.typescriptlang.org) is a superset of JavaScript. It is just one of NPM library, but it provides an original compiler.

When you use TypeScript with React, you can write JSX with TypeScript, called TSX. Then you can develop views written by **Type-Safe** template.

## Tailwind CSS

[Tailwind CSS](https://tailwindcss.com) is modern utility-first CSS framework. It provides many CSS rules, but these are purged when production builds. So developers do not worry about CSS asset size for performance optimization.

### daisyUI

[daisyUI](https://daisyui.com/) is Tailwind CSS Components library.

If you don't want to use it, just remove the package and remove config in `tailwind.config.js`.

## Formatter and Linter

Already set up [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/). You can customize the rules.

## How was it builded?

- Create **Vite** app for **React** with **TypeScript**
  </br>
  Run `yarn create vite react-ts-vite-tailwindcss-template --template react-ts`
  </br>
- Add **TailwindCSS**
  </br>
  Run `yarn add --dev tailwindcss postcss autoprefixer`
  </br>
- Configure **TailwindCSS**
  </br>
  Run `npx tailwindcss init`
  </br>
- Add the following in `postcss.config.js` file:
  </br>

  ```js
  module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  };
  ```

- Update `content` in `tailwind.config.js`:
  </br>

  ```js
  module.exports = {
    //...
    content: ['./index.html', './src/**/*.{tsx,ts}'],
    //...
  };
  ```

- Add **daisyUI**
  </br>

  - Run `yarn add daisyui`
    </br>
  - Then add `daisyUI` to `tailwind.config.js` file:
    </br>

    ```js
    module.exports = {
      //...
      plugins: [require('daisyui')],
    };
    ```

- Add support for TypeScript's path mapping in Vite
  </br>

  - Run `yarn add --dev vite-tsconfig-paths`

- Add **ESLint**
  </br>

  - Run `yarn add --dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin`
    </br>

  - Configure ESLint

    - Run `npx eslint --init`

      ✔ How would you like to use ESLint? · style
      </br>
      ✔ What type of modules does your project use? · esm
      </br>
      ✔ Which framework does your project use? · react
      </br>
      ✔ Does your project use TypeScript? · No / Yes · Yes
      </br>
      ✔ Where does your code run? · browser
      </br>
      ✔ How would you like to define a style for your project?
      · guide
      </br>
      ✔ Which style guide do you want to follow? · standard
      </br>
      ✔ What format do you want your config file to be in? · JavaScript
      </br>
      ✔ Do you want to downgrade? · No / Yes · No
      </br>
      ✔ Would you like to install them now with npm? · No / Yes · No
      </br>

    - Run `yarn add --dev eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-react`
      </br>

    - Adding some rules in `.eslintrc.js`:

      ```js
      rules: {
        'react/jsx-curly-brace-presence': 'error',
        'react/react-in-jsx-scope': 'off',
        'react/self-closing-comp': [
          'error',
          {
            component: true,
            html: true,
          },
        ],
        'react/jsx-boolean-value': 'error',
        'prefer-template': 'error',
        'jsx-quotes': ['error', 'prefer-double'],
        'react/jsx-tag-spacing': 'error',
      }
      ```

    - Create .eslintignore file and add the following:
      </br>
      `node_modules`
      </br>
      `dist`
      </br>

    - Add the following in package.json:

      ```js
      "scripts": {
        // ...
        "lint": "eslint --ignore-path .eslintignore --ext .js,.ts,.tsx ."
      }
      ```

      </br>

      _To automatically fix all errors, run:_
      </br>
      `yarn lint --fix`

      **Some useful VSCode extension**
      </br>

      - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

      - [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)

- Add **Prettier**
  </br>

  - Run `yarn add --dev prettier`
    </br>
  - Create `.prettierrc.js` file and add the following:

    ```js
    module.exports = {
      printWidth: 120,
      singleQuote: true,
    };
    ```

  - Add the following in package.json:

    ```js
    "scripts": {
      // ...
      "format": "prettier --ignore-path .gitignore --write \"**/*.+(js|ts|json)\""
    }
    ```

    </br>

- Add **React Router Dom**
  </br>

  - Run `yarn add react-router-dom@6.3.0`
