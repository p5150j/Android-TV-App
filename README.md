# tvos-androidtv

![Screen Shot 2022-02-22 at 11 49 40 AM](https://user-images.githubusercontent.com/444888/155198951-1bb9ed44-b6b0-4366-9542-35dec3bc1af1.png)



### Grab the tools youll need
```
install react native https://reactnative.dev/docs/environment-setup
android studio https://developer.android.com/studio
AXM 6.2.1 or later (HAXM 7.2.0 or later recommended)-- FYI must be intel chip
xcode for tvos (mac only) https://developer.apple.com/xcode/
```

### Get the project spun up
```
git clone
cd 
tvos-androidtv
nmp i
react-native run-ios  --simulator "Apple TV" --scheme "TestApp-tvOS"
react-native run-android 
```

### Make a local apk for your TV
```
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

cd android 
 ./gradlew assembleDebug
```

### Deploy to your Androind TV
```
Install send files to TV or File Commander (and conned gdrive)
https://www.androidpolice.com/how-to-sideload-any-application-on-android-tv/
You can also use a usb if your TV support it, and adb cli if uoi are brave enough
```
