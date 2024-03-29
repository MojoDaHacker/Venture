module.exports = {
  expo: {
    name: "venture",
    slug: "venture",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/ios/venture_splash.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/ios/venture_splash.png",
      resizeMode: "contain",
      backgroundColor: "#B3BFAA"
    },
    facebookScheme: "fb3904798486263112",
    facebookAppId: "3904798486263112",
    facebookDisplayName: "Venture",
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      googleServicesFile: "./GoogleService-Info.plist",
      bundleIdentifier: "com.matthewmckenzie446.venture"
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#FFFFFF"
      },
      package: "com.matthewmckenzie446.venture"
    },
    web: {
      favicon: "./assets/images/favicon.png"
    },
    plugins: [
      "@react-native-firebase/app",
      [
        "expo-build-properties",
        {
          android: {
            compileSdkVersion: 31,
            targetSdkVersion: 31,
            buildToolsVersion: "31.0.0"
          },
          ios: {
            useFrameworks: "static"
          }
        }
      ]
    ],
    mods: {
      ios: {
        podfileProperties: (config) => {
          config.modResults["ios.useFrameworks"] = "static";
          return config;
        },
      }
    },
    extra: {
      eas: {
        projectId: "2e26e706-9820-4720-bf27-1f14a18fcbd0"
      }
    }
  }
}
