## **Overview**

The objective is to implement an editable account panel. The account page will contain essential user information, including the profile picture, full name, email, and the ability to change the password. This implementation aims to enhance user experience by providing a seamless and intuitive interface for users to manage their account details efficiently. The use of modern CSS and a JavaScript framework will ensure the panel is visually appealing, responsive, and user-friendly.

## **Features**

**Profile Picture**

- Non Editable field
- The user's profile picture will be fetched from Gravatar using their email
- If the user does not have a Gravatar, a default image will get displayed

**Name**

- Full name will be displayed on the main screen
- Editable & Mandatory field
- Editing full names will display a first and last name field
- Field validation is pertinent to both the "First Name" and "Last Name" fields for updates
- Maximum 20 characters are allowed for each field

**About**

- Profile description will be displayed on the main screen
- Non-editable field

**Email**

- Email will be displayed on the main screen
- Editable & Mandatory field
- Maximum 255 characters are allowed
- Format validation is in place

**Password**

- The Change Password button/link will be displayed on the main screen
- Editable & Mandatory field
- Strength meter(along with suggestions) is in place
- Maximum 64 characters are allowed
- Mask/Unmask option has been added for better user experience

## **How to Use**

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Format with [Prettier](https://prettier.io/)

```sh
npm run format
```

## **Dependencies**

**Font Awesome**
Font Awesome is a popular icon library that provides a vast collection of scalable vector icons. In a Vue.js project, Font Awesome is often used to easily incorporate stylish and customizable icons into the user interface, enhancing visual appeal and usability without the need for additional image assets.

**Crypto.js**
Crypto.js is a library that provides cryptographic functions in JavaScript. In this project, it is being used to generate the hash of email id to get profile picture from Gravatar

**pinia**
Pinia is a state management library for Vue.js applications, offering a simple and efficient alternative to Vuex. In this Vue.js project, Pinia is utilized to manage User Profile in the application state.

**vuetify**
Vuetify is a popular Vue.js component library that offers a rich set of UI components following Google's Material Design guidelines. In this project, it using following components by importing them individually to reduce bundle size:

- VCard
- VBtn
- VContainer
- VRow
- VCol
- VImg
- VTextField
- VProgressLinear
- VProgressCircular

**zxcvbn**
zxcvbn is a JavaScript library for estimating password strength. In this Vue.js project, zxcvbn is used to provide real-time feedback to users when creating passwords, helping them choose stronger and more secure passwords by evaluating factors such as complexity and entropy, thus enhancing overall application security.

## **Style Guide**

This project follows [official style guide](https://vuejs.org/style-guide/) maintained and recommended by Vue.js
