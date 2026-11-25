#!/usr/bin/env bash
# Local build. Needs: Node 18+, JDK 17, Android SDK (ANDROID_HOME set).
set -e
npm install
[ -d android ] || npm run setup
npx cap sync android
cd android && chmod +x gradlew && ./gradlew assembleDebug
echo "APK: android/app/build/outputs/apk/debug/app-debug.apk"
