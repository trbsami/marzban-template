# Marzban Template

**Marzban Template** یک قالب رابط کاربری سبک و واکنش‌گرا برای پنل مارزبان است. این قالب با HTML و TailwindCSS ساخته شده و به‌راحتی قابل ویرایش و استفاده می‌باشد.

## ویژگی‌ها
- ⚡ سبک و سریع
- 🎨 طراحی‌شده با TailwindCSS
- 📱 سازگار با موبایل
- ✏️ کد تمیز و قابل ویرایش

---

## Installation

To use this template in your project, follow these steps:

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

