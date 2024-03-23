# Star Wars Favorites Mobile Application

This mobile application, built using React Native, allows users to indicate their favorite characters from the Star Wars Universe and view the total count of male, female, and other characters based on user selections. The application fetches data from the Star Wars API (https://swapi.py4e.com/) to populate the list of characters.

## Technologies Used

- React Native
- React JS
- TypeScript
- Redux Toolkit
- Redux Async Thunk

## Features

- **API Integration**: Makes API requests to retrieve character information from the server.
- **Character List**: Displays a scrollable and paginated list of Star Wars characters.
- **Favorites**: Allows users to mark characters as favorites, updating the total count of male, female, and other characters accordingly.
- **Total Counts**: Displays the total amounts of male, female, and other characters based on user selections.
- **Reset**: Provides a button to reset all statistics and clear the favorites list, returning everything to the initial state.

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:
