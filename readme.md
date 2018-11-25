# laravel-5.7-master-template
For All Project Laravel 5.7

#Dependencis 
1. Socialite

Tahapan : 
1. `composer require laravel/socialite`
2. buat aplikasi di https://developers.facebook.com/apps/
3. Masuk ke Aplikasi -> Setting -> copy paste App ID dan App Secret ke .env laravel
4. Ubah `Website` jadi localhost:8000 (tergantung domainnya).
5. Klik Menu `Facebook Login` -> `Setting` -> isi Valid OAuth Redirect URIs dengan `localhost:8000` (tergantung domain)
