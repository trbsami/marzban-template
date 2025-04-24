# Marzban Template

**Marzban Template** یک قالب رابط کاربری سبک و واکنش‌گرا برای پنل مارزبان است. این قالب با HTML و TailwindCSS ساخته شده و به‌راحتی قابل ویرایش و استفاده می‌باشد.

## ویژگی‌ها
- ⚡ سبک و سریع
- 🎨 طراحی‌شده با TailwindCSS
- 📱 سازگار با موبایل
- ✏️ کد تمیز و قابل ویرایش

---

## نحوه استفاده

برای استفاده از این قالب در پروژه خود، مراحل زیر را دنبال کنید:

1. **فایل رو در سرور خود نصب کنید**:
   ```bash
   sudo wget -N -P /var/lib/marzban/templates/subscription/ https://raw.githubusercontent.com/trbsami/marzban-template/refs/heads/main/index.html
2. **دستورات زیر را در ترمینال سرور خود اجرا کنید**:
   ```bash
   echo 'CUSTOM_TEMPLATES_DIRECTORY="/var/lib/marzban/templates/"' | sudo tee -a /opt/marzban/.env
   echo 'SUBSCRIPTION_PAGE_TEMPLATE="subscription/index.html"' | sudo tee -a /opt/marzban/.env
3. **ریستارت مرزبان ** :


   ```bash
   sudo marzban restart
   
**تمام حقوق مادی و معنوی این پروژه متعلق به:**  
trbSami [![Telegram](https://img.shields.io/badge/Telegram-26A5E4?logo=telegram&logoColor=white)](https://t.me/samimifar)


## حمایت از من
- **TON:** `UQDj12cOZIrM1Ft11Pc38wVi2fx2mg-L8gZRFmLEb4jBdET7`
- **TRX:** `TYD5azd2aiu1JGaGD7thvT2oRKu376Zga6`
