---
runme:
  id: 01HWAC1QX9ZPTMX7SF8AHTWYDR
  version: v3
---

[![](https://img.shields.io/static/v1?label=BY&message=RAMOUN&color=birghtgreen)](https://ramoun.me)

![React](https://img.shields.io/badge/-React-1f1f1f?logo=react&logoColor=61DAFB&style=for-the-badge)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)

# NewsFeed

> Newsfeed application fetches news articles from an online news feed API (https://newsapi.org/) and displays them in a user-friendly format. The app features a main screen with a list of news article headings, images.

## Outline of Building Process

0. Prepare Project Structuree, Dependecy Management, Build System, Linting System, and Application Configs.
1. Build a navgiation stack map
2. UI Breakdown to components (core components, navigation, layouts, pages)
3. Build components library (core building blocks of the app - under `src/components`)
4. Build a styling system using `styled-system` (including theme and global styles - under `src/styles`)
5. Add styling to core components
6. Build screens components (responsible for common layouts between pages - under `src/screens`)
7. Build stacks of the app (under `src/stacks`)
8. Add global state (using `Redux Toolkit` - under `src/state`)
9. [Coming Soon] Add animations (using `RN Animated`)
10. [Coming Soon] Unit Tests and Mocks.
11. [Coming Soon] Performance Optimization
12. [Coming Soon] Add Security Layers

## Built With

1. **Typescript**
2. **React Native**
3. **Styled System**
4. **Redux Toolkit**

## How To Run Locally

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

### Step 0: Install Dependencies

```bash {"id":"01HWAC1QX9ZPTMX7SF85JR50RZ"}
# 1. clone repository
git clone https://github.com/OmarRamoun/contacts.git

# 2. change current directory
cd contacts

# 3. Install all Dependencies
yarn install

# 4. Build Icons
yarn icons
```

### Step 1: Start the Metro Server

First, you will need to start __Metro__, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash {"id":"01HWAC1QX9ZPTMX7SF85V1P68F"}
# using Yarn
yarn dev # check package.json for more info
```

### Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

#### For Android

```bash {"id":"01HWAC1QX9ZPTMX7SF872V0M9C"}
yarn android
```

#### For iOS

> **Note**: fore `iOS`, make sure to `cd ios` and `pod install` first.

```bash {"id":"01HWAC1QX9ZPTMX7SF8ACTEXZ1"}
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

## Author

👤 **Omar Ramoun**

- **GitHub**: [![@omarramoun](https://img.shields.io/github/followers/omarramoun?label=OmarRamoun&style=social)](https://github.com/omarramoun)
- **Twitter**: [![@omarramoun](https://img.shields.io/twitter/follow/omarramoun?label=OmarRamoun&style=social)](https://twitter.com/omarramoun)
- **LinkdIn**: [![@omarramoun](https://img.shields.io/github/followers/omarramoun?label=OmarRamoun&logo=linkedin&style=social)](https://www.linkedin.com/in/omarramoun/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues).

## Show your support

Give a ⭐️ if you like this project!
