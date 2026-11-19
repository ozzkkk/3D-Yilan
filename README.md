# 3D Yılan v1.26.0 — GitHub Pages'e hazır PWA

## En kolay yayınlama: derlenmiş dosyalar

1. Bu ZIP'i **çıkarın**. ZIP'in kendisini GitHub'a yüklemek çalışmaz.
2. GitHub'da yeni bir depo oluşturun. Çıkardığınız `index.html`, `sw.js`, `manifest.webmanifest`, `icons` klasörü ve bu dosyaları, içinde başka bir klasör oluşturulmayacak şekilde deponun köküne yükleyin. `.nojekyll` dosyası varsa onu da ekleyin (burada zorunlu değildir).
3. Deponun **Settings → Pages** bölümünde **Deploy from a branch** seçin; dal olarak `main`, klasör olarak `/ (root)` seçip kaydedin.
4. Pages'in verdiği HTTPS adresinin açılmasını bekleyin. Proje deposu adresi genellikle `https://KULLANICI_ADI.github.io/DEPO_ADI/` şeklindedir; kesin adresi GitHub gösterir.
5. Siteyi ilk kez internetle açın ve birkaç saniye bekleyin. Android Chrome menüsünde **Uygulamayı yükle** veya **Ana ekrana ekle** seçeneğini kullanın. Uygun olduğunda oyun menüsünde de kurulum düğmesi görünür. Daha sonra uygulama çevrimdışı açılabilir.

GitHub Pages özelliği ve depo görünürlüğü GitHub hesap/plan ayarlarına tabidir. Bu paket GitHub'a yüklenmiş değildir; yayınlama işlemini sizin yapmanız gerekir.

## iPhone/iPad

Safari'de siteyi açıp Paylaş → Ana Ekrana Ekle seçeneğini deneyin. Kurulum, tam ekran ve çevrimdışı davranış iOS sürümüne ve Safari'ye bağlıdır.

## Önemli

- `index.html` dosyasını doğrudan açmak oyunu çalıştırabilir; ancak `file://` yolu üzerinden PWA kurulumu ve servis çalışanı kullanılmaz. PWA için HTTPS GitHub Pages veya geliştirme amaçlı localhost gerekir.
- Çevrimdışı kullanım, sitenin **önce internetle başarılı biçimde açılıp önbelleğe alınmasını** gerektirir. Tarayıcı/site verileri silinirse yeniden çevrimiçi açılması gerekir.
- Rekorlar ve ayarlar cihazın tarayıcısında saklanır. Eski HTML dosyasının rekorları otomatik olarak GitHub adresine aktarılmaz; farklı cihazlara da eşitlenmez.
- Güncelleme için yeni sürümün tüm site dosyalarını aynı yere yükleyin. Yeni servis çalışanı kurulduktan sonra sayfayı yeniden açmak/yenilemek gerekebilir.
- Bu dosyalardan kaynak kodu düzenlenmez; kod değişikliği yapmak için ayrı kaynak projesi ZIP'ini kullanın.
- Üçüncü taraf lisans bildirimleri HTML içinde ve `LISANS-BILDIRIMLERI.txt` dosyasındadır.
