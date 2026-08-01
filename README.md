# AutoLog Web - Next.js Frontend

Oto servis takip uygulaması için profesyonel web sitesi. QR kod ile araç servis geçmişi görüntüleme ve landing page.

## Özellikler

- ✅ Landing page (hero, features, pricing, FAQ)
- ✅ QR vehicle public page (SSR with Supabase)
- ✅ Güvenlik: CSP headers, UUID validation, instance-bazlı kötüye kullanım sınırı
- ✅ Responsive design (mobile-first)
- ✅ Türkçe arayüz (İngilizce yerelleştirme henüz bağlı değil)
- ✅ SEO optimized with metadata
- ✅ Legal pages (Privacy, Terms, Support)

## Kurulum

### 1. Environment Variables

```bash
cp .env.local.example .env.local
```

`.env.local` dosyasını düzenle:
```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
NEXT_PUBLIC_APP_URL=https://autolog.vercel.app
NEXT_PUBLIC_APP_STORE_URL=https://apps.apple.com/app/your-app-id
NEXT_PUBLIC_PLAY_STORE_URL=https://play.google.com/store/apps/details?id=your.package
```

**Önemli:** Mobil uygulama ile aynı Supabase projesini kullan.

### 2. Supabase Migration

Yeni RLS policy'lerini uygula:
```bash
cd ../tamir
npx supabase db push
```

Migration'ları dosya sırasıyla CLI üzerinden uygulayın. Dashboard'a tek bir eski
migration kopyalamak güncel güvenlik değişikliklerini atlayabilir.

### 3. Bağımlılıkları Yükle

```bash
npm install
```

### 4. Development Server

```bash
npm run dev
```

http://localhost:3000 adresinde açılacak.

## Deployment (Vercel)

### 1. GitHub'a Push

```bash
git add .
git commit -m "chore(web): prepare production configuration"
git push
```

### 2. Vercel'e Deploy

1. https://vercel.com adresine git
2. **Import Project** > GitHub repo seç
3. Monorepo kullanılıyorsa **Root Directory** değerini `tamir-web` yap
4. **Environment Variables** ekle:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_APP_URL`
   - `NEXT_PUBLIC_APP_STORE_URL`
   - `NEXT_PUBLIC_PLAY_STORE_URL`
5. **Deploy** tıkla

### 3. Domain Bağla

Vercel Dashboard:
- **Settings** > **Domains**
- `autolog.vercel.app` ekle
- DNS kayıtlarını (A record veya CNAME) güncelle

## Güvenlik

### ✅ Uygulanmış Güvenlik Önlemleri

1. **HTTP Security Headers** (next.config.ts)
   - Content-Security-Policy
   - X-Frame-Options: DENY
   - X-Content-Type-Options: nosniff
   - Referrer-Policy: strict-origin-when-cross-origin
   - Strict-Transport-Security (HSTS)

2. **Kötüye Kullanım Sınırı** (middleware.ts)
   - `/vehicle/*` routes: 60 requests/minute per IP
   - Other routes: 200 requests/minute per IP
   - Bu sayaç instance-bazlıdır; dağıtık/global rate limit garantisi vermez

3. **Input Validation**
   - UUID v4 format validation (regex)
   - Invalid UUIDs return 404 (no database hit)

4. **Data Security**
   - Supabase server-side only (RLS enabled)
   - Financial data NEVER queried in public pages
   - QR pages not indexed by search engines (`noindex`)

5. **XSS Protection**
   - React's built-in XSS protection
   - No `dangerouslySetInnerHTML` usage
   - All user input escaped

## Proje Yapısı

```
tamir-web/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout + metadata
│   ├── page.tsx                  # Landing page
│   ├── robots.ts                 # Crawler policy
│   ├── sitemap.ts                # Public marketing routes
│   ├── vehicle/[uuid]/page.tsx   # QR public page (SSR)
│   ├── privacy/page.tsx          # Gizlilik Politikası
│   ├── terms/page.tsx            # Kullanım Koşulları
│   └── support/page.tsx          # Destek
├── components/
│   ├── landing/                  # Hero, Features, Pricing, etc.
│   ├── vehicle/                  # Vehicle components
│   └── shared/                   # Header, Footer
├── lib/
│   ├── supabase/server.ts        # Supabase SSR client
│   ├── validations/uuid.ts       # UUID validation
│   └── utils/format.ts           # Formatters
├── types/index.ts                # TypeScript types
├── messages/                     # Gelecekteki i18n çevirileri
├── middleware.ts                 # Rate limiting + HTTPS
└── next.config.ts                # Security headers
```

## Mobil Uygulamada Değişiklik

QR kod URL'sini güncelle:

**src/app/public/[qrUuid].tsx** (veya QR generator servis):
```typescript
const qrUrl = `https://autolog.vercel.app/vehicle/${vehicle.qr_uuid}`;
```

## Test

### QR Page Test
```bash
# Valid UUID (database'de var)
curl http://localhost:3000/vehicle/550e8400-e29b-41d4-a716-446655440000

# Invalid UUID format (404 dönmeli)
curl http://localhost:3000/vehicle/invalid-uuid

# Non-existent UUID (404 dönmeli)
curl http://localhost:3000/vehicle/00000000-0000-4000-8000-000000000000
```

### Security Headers Test
```bash
curl -I http://localhost:3000
```

Beklenen:
- `content-security-policy`
- `x-frame-options: DENY`
- `x-content-type-options: nosniff`

### Instance Abuse Guard Test
```bash
# Aynı çalışan instance üzerinde 60+ istek 429 döndürmeli
for i in {1..65}; do curl http://localhost:3000/vehicle/test; done
```

## Troubleshooting

### QR page 404 dönüyor
1. UUID format doğru mu? (lowercase, UUID v4)
2. Supabase migration uygulandı mı?
3. `.env.local` dosyası doğru mu?

### Supabase connection error
1. NEXT_PUBLIC_SUPABASE_URL doğru mu?
2. ANON KEY doğru mu?
3. RLS policies uygulandı mı?

### Images/static files 404
1. `public/` klasöründe mi?
2. `/` ile başlayarak referans edilmiş mi?

## Production Checklist

- [ ] Tüm Supabase migration'ları sıra ile uygulandı
- [ ] Environment variables Vercel'de set edildi
- [ ] Gerçek App Store / Play Store URL'leri set edildi
- [ ] Domain (autolog.vercel.app) bağlandı
- [ ] Security headers test edildi (securityheaders.com)
- [ ] QR page test edildi (valid + invalid UUID)
- [ ] Instance abuse guard test edildi; gerekiyorsa dağıtık rate limiter planlandı
- [ ] Mobile app QR URL güncellendi
- [ ] Analytics ve hata izleme eklendi

## Lisans

Proprietary - AutoLog
