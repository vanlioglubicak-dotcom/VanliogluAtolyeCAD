Vanlıoğlu Atölye CAD — Ready-to-Build Package
===========================================

Bu paket, yerel olarak veya bir CI (GitHub Actions) ile Windows portable .exe ve Android APK üretebilmen için hazırlanmış
hazır kaynakları, build script'lerini ve CI iş akışlarını içerir.

IMPORTANT: Bu ortamda (.zip) doğrudan .exe veya .apk üretemiyorum. Ancak bu paket, kendi bilgisayarında veya bir CI sunucusunda
doğrudan EXE/APK üretecek şekilde yapılandırılmıştır.

İçerik:
- renderer/: React + Vite kaynakları (2B çizim + 3D viewer starter)
- electron/: electron main + preload (JS)
- assets/: splash + simple VAB.svg
- i18n/: tr.json, en.json
- .github/workflows/: GitHub Actions workflow'ları (win-build.yml, android-build.yml)
- package.json: electron-builder yapılandırması (portable)
- README.md: build adımları

Hızlı Yerel Build (Windows için):
1. Node.js 18+ yükleyin.
2. Proje kökünde: `npm install`
3. Üretim buildlerini oluşturun: `npm run build:all`
4. Portable exe oluşturun: `npm run pack:win`
   - electron-builder portable hedefi bir tek dosya exe oluşturacaktır (dist/ içinde).

Android (Capacitor) - Kısa:
1. `npm install`
2. `npm run build:renderer`
3. `npx cap init VanliogluAtolyeCAD com.vanlioglu.cad` (sadece ilk kez)
4. `npx cap copy android`
5. `npx cap open android` ile Android Studio'da açın ve APK oluşturun.

CI (Önerilen): .github/workflows içindeki workflow'lar GitHub Actions üzerinde yapılandırılmıştır. GitHub Secrets içinde
GPG gibi anahtarlar gerektirmez; ancak büyük dosya ve cache için runner ayarları yapabilirsiniz.

Eğer isterseniz ben bu .zip içeriğini kullanarak GitHub Actions üzerinde otomatize edilmiş EXE ve APK üretecek şekilde
depo oluşturup çalıştırabilirim (veya sizin için doğrudan buildleri üretirim). Bana nasıl devam etmemi istediğini söyleyin.
