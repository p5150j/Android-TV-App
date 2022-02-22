# tvos-androidtv

install react native https://reactnative.dev/docs/environment-setup

android studio https://developer.android.com/studio

 react-native run-ios  --simulator "Apple TV" --scheme "TestApp-tvOS"

 react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res


cd android 
 ./gradlew assembleDebug
