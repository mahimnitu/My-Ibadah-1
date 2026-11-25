# My Ibadah - Android APK project

Your web app (in `www/`) wrapped with Capacitor. It already uses the Capacitor
plugins App, Geolocation, Haptics and LocalNotifications, which are included.

The Android platform folder is generated on first build (it needs network access
to fetch Gradle and the Android SDK), so the APK itself is built outside this zip.

## Option A - no installs: GitHub Actions
1. Create a new GitHub repo and push this folder to it.
2. Open the repo's Actions tab, run "Build Android APK" (it also runs on push).
3. When it finishes, download the `my-ibadah-apk` artifact, unzip, and install
   `app-debug.apk` on your phone (allow "Install unknown apps").

## Option B - on your computer
Needs Node 18+, JDK 17, Android SDK (ANDROID_HOME set).

    ./build.sh

Output: `android/app/build/outputs/apk/debug/app-debug.apk`

## Notes
- Debug APKs are fine for installing on your own phone. For Play Store you need
  a signed release build (`./gradlew bundleRelease` plus a keystore).
- Required permissions (notifications, exact alarms, location, vibrate) are added to the manifest automatically by `patch-manifest.js`.
- The app loads Google Fonts and the Aladhan prayer-times API over the internet;
  without a connection it falls back to cached data / system fonts.
