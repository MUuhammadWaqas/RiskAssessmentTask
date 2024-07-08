This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.




## Step 1: Clone  Application

First, clone the RiskAssessmentApp repository from GitHub:




```bash

 git clone https://github.com/MUuhammadWaqas/RiskAssessmentTask


```

## Step 2: Install Dependencies

Use Yarn to install the necessary packages:

```bash
# using npm
npm i

# OR using Yarn
yarn 

### For iOS

# using npm
npm run ios

# OR using Yarn
yarn ios
```

## Step 3: Setup IOS Project

Navigate to the iOS directory and install CocoaPods dependencies:



```bash

cd ios
pod install
cd ..




```

## Step 4: Run the Project


## For IOS:

```bash

yarn ios




```

## ForAndroid:

```bash

yarn android




```

## Step 4: Run the Test Cases 

After the project is running, you can execute the test cases using Jest:


```bash

yarn test




```

## Notes
•	Ensure your development environment is set up for React Native. Follow the official React Native environment setup guide if needed.
•	The project uses the latest version of React Native, which requires the latest version of Node.js. Ensure compatibility by checking Node.js version:


```bash
node -v




```

## Additional Steps to Open .xcworkspace in Xcode:

1.	Navigate to iOS Directory After installing CocoaPods dependencies, navigate to the ios directory:
sh
Copy code
cd ios
2.	Open .xcworkspace File Open the .xcworkspace file in Xcode. You can do this either by double-clicking the file in Finder or by using the open command in the terminal:
sh
Copy code
open RiskAssessmentApp.xcworkspace
3.	Build and Run in Xcode Once Xcode opens with the project, select a simulator or a connected device from the toolbar.
4.	Run the App Click on the "Run" button (a play icon) in Xcode to build and run the app on the selected simulator or device.
By following these steps, you should be able to clone, set up, run, and test the RiskAssessmentApp successfully. If you encounter any issues, consult the project's README or open an issue on GitHub. 
