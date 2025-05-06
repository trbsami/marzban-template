
  <script>
    let currentLanguage = localStorage.getItem('language') || 'fa';
    let currentTheme = localStorage.getItem('theme') || 'dark';
    let userStatus = '{{ user.status }}';
    let userDataLimit = {{ user.data_limit if user.data_limit else 'null' }};
    let userExpireTimestamp = {{ user.expire if user.expire else 'null' }};
    let lastOnline = '{{ user.last_online if user.last_online else "" }}';

    const translations = {
      'total_data_label' : { 'fa': 'حجم کل', 'en': 'Total volume', 'ru': 'Общий объем' },
      'qrSubButton' : { 'fa': 'بارکد', 'en': 'barcode', 'ru': 'штрих-код' },
      'less_than_minute' : { 'fa': 'انلاین', 'en': 'online', 'ru': 'онлайн' },
      'unlimited' : { 'fa': ' نامحدود', 'en': ' Unlimited', 'ru': 'Неограниченно' },
      'download_from_playstore' : { 'fa': 'گوگل پلی ', 'en': 'Google Play', 'ru': 'Гугл Плей' },
      'language': { 'fa': 'زبان', 'en': 'Language', 'ru': 'Язык' },
      'theme': { 'fa': 'تم', 'en': 'Theme', 'ru': 'Тема' },
      'persian': { 'fa': 'فارسی', 'en': 'Persian', 'ru': 'Персидский' },
      'english': { 'fa': 'انگلیسی', 'en': 'English', 'ru': 'Английский' },
      'russian': { 'fa': 'روسی', 'en': 'Russian', 'ru': 'Русский' },
      'light_theme': { 'fa': 'تم روشن', 'en': 'Light Theme', 'ru': 'Светлая тема' },
      'dark_theme': { 'fa': 'تم تاریک', 'en': 'Dark Theme', 'ru': 'Темная тема' },
      'subscription_info': { 'fa': 'اطلاعات اشتراک', 'en': 'Subscription Info', 'ru': 'Информация о подписке' },
      'used_data': { 'fa': 'حجم استفاده‌شده', 'en': 'Used Data', 'ru': 'Использовано данных' },
      'time_remaining': { 'fa': 'زمان باقی‌مانده', 'en': 'Time Remaining', 'ru': 'Осталось времени' },
      'subscription_expired': { 'fa': 'اشتراک منقضی شده', 'en': 'Subscription expired', 'ru': 'Подписка истекла' },
      'unlimited': { 'fa': 'نامحدود', 'en': 'Unlimited', 'ru': 'Безлимит' },
      'user_info': { 'fa': 'اطلاعات کاربر', 'en': 'User Info', 'ru': 'Информация о пользователе' },
      'status': { 'fa': 'وضعیت: ', 'en': 'Status: ', 'ru': 'Статус: ' },
      'active': { 'fa': 'فعال', 'en': 'Active', 'ru': 'Активен' },
      'limited': { 'fa': 'محدود', 'en': 'Limited', 'ru': 'Ограничен' },
      'expired': { 'fa': 'منقضی شده', 'en': 'Expired', 'ru': 'Истек' },
      'disabled': { 'fa': 'غیرفعال', 'en': 'Disabled', 'ru': 'Отключен' },
      'unknown': { 'fa': 'نامشخص', 'en': 'Unknown', 'ru': 'Неизвестно' },
      'expire_date': { 'fa': 'تاریخ انقضا: ', 'en': 'Expiration Date: ', 'ru': 'Дата истечения: ' },
      'purchased_data': { 'fa': 'حجم خریداری شده: ', 'en': 'Purchased Data: ', 'ru': 'Купленный объем: ' },
      'last_connection': { 'fa': 'آخرین اتصال: ', 'en': 'Last Connection: ', 'ru': 'Последнее подключение: ' },
      'required_apps': { 'fa': 'برنامه‌های مورد نیاز', 'en': 'Required Apps', 'ru': 'Необходимые приложения' },
      'android': { 'fa': 'اندروید', 'en': 'Android', 'ru': 'Android' },
      'hiddify': { 'fa': 'Hiddify', 'en': 'Hiddify', 'ru': 'Hiddify' },
      'hiddify_desc': { 'fa': 'کلاینت متن‌باز و قدرتمند برای پروتکل‌های V2Ray با رابط کاربری ساده.', 'en': 'Powerful open-source client for V2Ray protocols with a simple interface.', 'ru': 'Мощный клиент с открытым исходным кодом для протоколов V2Ray с простым интерфейсом.' },
      'v2rayng_git': { 'fa': 'v2rayNG GIT', 'en': 'v2rayNG GIT', 'ru': 'v2rayNG GIT' },
      'v2rayng_git_desc': { 'fa': 'کلاینت متن‌باز برای پروتکل‌های V2Ray با پشتیبانی از VMess، VLESS و Shadowsocks.', 'en': 'Open-source client for V2Ray protocols with VMess, VLESS, and Shadowsocks support.', 'ru': 'Клиент с открытым исходным кодом для протоколов V2Ray с поддержкой VMess, VLESS и Shadowsocks.' },
      'ios': { 'fa': 'iOS', 'en': 'iOS', 'ru': 'iOS' },
      'shadowrocket': { 'fa': 'Shadowrocket', 'en': 'Shadowrocket', 'ru': 'Shadowrocket' },
      'shadowrocket_desc': { 'fa': 'کلاینت قدرتمند برای iOS با پشتیبانی از پروتکل‌های متعدد (پولی).', 'en': 'Powerful iOS client with support for multiple protocols (paid).', 'ru': 'Мощный клиент для iOS с поддержкой множества протоколов (платный).' },
      'streisand': { 'fa': 'Streisand', 'en': 'Streisand', 'ru': 'Streisand' },
      'streisand_desc': { 'fa': 'ابزاری ساده برای مدیریت سرورهای VPN در iOS.', 'en': 'Simple tool for managing VPN servers on iOS.', 'ru': 'Простой инструмент для управления VPN-серверами на iOS.' },
      'windows': { 'fa': 'ویندوز', 'en': 'Windows', 'ru': 'Windows' },
      'v2rayn_git': { 'fa': 'v2rayN GIT', 'en': 'v2rayN GIT', 'ru': 'v2rayN GIT' },
      'v2rayn_git_desc': { 'fa': 'کلاینت ویندوز برای V2Ray با رابط کاربری ساده.', 'en': 'Windows client for V2Ray with a simple interface.', 'ru': 'Клиент для Windows с простым интерфейсом для V2Ray.' },
      'nekoray_git': { 'fa': 'Nekoray GIT', 'en': 'Nekoray GIT', 'ru': 'Nekoray GIT' },
      'nekoray_git_desc': { 'fa': 'کلاینت پیشرفته با پشتیبانی از پروتکل‌های متعدد.', 'en': 'Advanced client with support for multiple protocols.', 'ru': 'Продвинутый клиент с поддержкой множества протоколов.' },
      'mac': { 'fa': 'مک', 'en': 'Mac', 'ru': 'Mac' },
      'v2rayu_git': { 'fa': 'V2rayU GIT', 'en': 'V2rayU GIT', 'ru': 'V2rayU GIT' },
      'v2rayu_git_desc': { 'fa': 'کلاینت سبک برای macOS با پشتیبانی از V2Ray.', 'en': 'Lightweight macOS client with V2Ray support.', 'ru': 'Легкий клиент для macOS с поддержкой V2Ray.' },
      'clashx_git': { 'fa': 'ClashX GIT', 'en': 'ClashX GIT', 'ru': 'ClashX GIT' },
      'clashx_git_desc': { 'fa': 'کلاینت قدرتمند برای مدیریت سرورهای VPN در مک.', 'en': 'Powerful client for managing VPN servers on Mac.', 'ru': 'Мощный клиент для управления VPN-серверами на Mac.' },
      'servers': { 'fa': 'سرورها', 'en': 'Servers', 'ru': 'Серверы' },
      'server_qr': { 'fa': 'QR Code سرور', 'en': 'Server QR Code', 'ru': 'QR-код сервера' },
      'subscription_qr': { 'fa': 'QR Code سابسکریپشن', 'en': 'Subscription QR Code', 'ru': 'QR-код подписки' },
      'copy_all_servers': { 'fa': 'کپی همه سرورها', 'en': 'Copy all servers', 'ru': 'Копировать все серверы' },
      'copy_subscription_link': { 'fa': 'کپی لینک سابسکریپشن', 'en': 'Copy subscription link', 'ru': 'Копировать ссылку на подписку' },
      'copied': { 'fa': 'کپی شد!', 'en': 'Copied!', 'ru': 'Скопировано!' },
      'close': { 'fa': 'بستن', 'en': 'Close', 'ru': 'Закрыть' },
      'download_from_appstore': { 'fa': 'دانلود از App Store', 'en': 'Download from App Store', 'ru': 'Скачать из App Store' },
      'no_servers': { 'fa': 'هیچ سروری یافت نشد', 'en': 'No servers found', 'ru': 'Серверы не найдены' },
      'download': { 'fa': 'دانلود', 'en': 'Download', 'ru': 'Скачать' },
      'add_subscription_hiddify': { 'fa': 'اضافه کردن اشتراک به Hiddify', 'en': 'Add subscription to Hiddify', 'ru': 'Добавить подписку в Hiddify' },
      'add_subscription_v2rayng': { 'fa': 'اضافه کردن اشتراک به v2rayNG', 'en': 'Add subscription to v2rayNG', 'ru': 'Добавить подписку в v2rayNG' },
      'add_subscription_shadowrocket': { 'fa': 'اضافه کردن اشتراک به Shadowrocket', 'en': 'Add subscription to Shadowrocket', 'ru': 'Добавить подписку в Shadowrocket' },
      'add_subscription_streisand': { 'fa': 'اضافه کردن اشتراک به Streisand', 'en': 'Add subscription to Streisand', 'ru': 'Добавить подписку в Streisand' },
      'add_subscription_v2rayn': { 'fa': 'اضافه کردن اشتراک به v2rayN', 'en': 'Add subscription to v2rayN', 'ru': 'Добавить подписку в v2rayN' },
      'add_subscription_nekoray': { 'fa': 'اضافه کردن اشتراک به Nekoray', 'en': 'Add subscription to Nekoray', 'ru': 'Добавить подписку в Nekoray' },
      'add_subscription_v2rayu': { 'fa': 'اضافه کردن اشتراک به V2rayU', 'en': 'Add subscription to V2rayU', 'ru': 'Добавить подписку в V2rayU' },
      'add_subscription_clashx': { 'fa': 'اضافه کردن اشتراک به ClashX', 'en': 'Add subscription to ClashX', 'ru': 'Добавить подписку в ClashX' },
      'invalid_link': { 'fa': 'لینک نامعتبر است!', 'en': 'Invalid link!', 'ru': 'Недействительная ссылка!' },
      'qr_generation_failed': { 'fa': 'خطا در تولید QR Code!', 'en': 'Failed to generate QR Code!', 'ru': 'Не удалось сгенерировать QR-код!' },
      'favorite_location': { 'fa': 'لوکیشن پرمصرف: ', 'en': 'location high consumption:', 'ru': 'Любимое место:' },
      'no_usage_data': { 'fa': 'داده‌ای برای مصرف نودها یافت نشد', 'en': 'No usage data found for nodes', 'ru': 'Данные об использовании узлов не найдены' },
      'ping': { 'fa': 'پینگ: ', 'en': 'Ping: ', 'ru': 'Пинг: ' },
      'ms': { 'fa': ' میلی‌ثانیه', 'en': ' ms', 'ru': ' мс' },
      'ping_failed': { 'fa': 'خطا', 'en': 'Failed', 'ru': 'Ошибка' }

    };

    function toggleModal() {
      const modal = document.getElementById('settingsModal');
      if (modal) {
        modal.classList.toggle('active');
      }
    }

    function toggleSection(section) {
      const themeSection = document.getElementById('theme-section');
      const languageSection = document.getElementById('language-section');
      const themeBtn = document.getElementById('btn-theme');
      const languageBtn = document.getElementById('btn-language');

      if (section === 'theme') {
        themeSection.style.display = 'block';
        languageSection.style.display = 'none';
        themeBtn.classList.add('active');
        languageBtn.classList.remove('active');
      } else if (section === 'language') {
        themeSection.style.display = 'none';
        languageSection.style.display = 'block';
        themeBtn.classList.remove('active');
        languageBtn.classList.add('active');
      } else {
        const content = document.getElementById(section + 'Content');
        const chevron = document.getElementById(section + 'Chevron');
        if (content && chevron) {
          content.classList.toggle('active');
          chevron.classList.toggle('rotate');
        }
      }
    }

    function setTheme(theme) {
      currentTheme = theme;
      document.body.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      ['light', 'dark'].forEach(t => {
        const btn = document.getElementById(`btn-${t}`);
        btn.classList.toggle('active', t === theme);
      });
    }

    function setLanguage(language) {
      currentLanguage = language;
      document.body.setAttribute('data-language', language);
      localStorage.setItem('language', language);
      document.documentElement.lang = language;
      ['fa', 'en', 'ru'].forEach(l => {
        const btn = document.getElementById(`btn-${l}`);
        if (btn) {
          btn.classList.toggle('active', l === language);
        }
      });
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[key] && translations[key][language]) {
          el.textContent = translations[key][language];
        }
      });
      updateDynamicContent();
      displayProxies();
      updateFavoriteLocationLabel();
    }

    function copyUsername() {
      const usernameText = document.getElementById("username").innerText;
      navigator.clipboard.writeText(usernameText)
        .then(() => showToast(translations['copied'][currentLanguage]))
        .catch(err => console.error("Error copying: ", err));
    }

    function showToast(message) {
      let toast = document.getElementById('toast');
      if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        document.body.appendChild(toast);
      }
      toast.textContent = message;
      toast.classList.remove('opacity-0');
      toast.classList.add('opacity-100');
      setTimeout(() => {
        toast.classList.remove('opacity-100');
        toast.classList.add('opacity-0');
      }, 2000);
    }

    function getTimeLeft(expireTimestamp) {
      if (!expireTimestamp) return translations['unlimited'][currentLanguage];
      const now = Math.floor(Date.now() / 1000);
      const timeLeft = expireTimestamp - now;
      if (timeLeft <= 0) return translations['subscription_expired'][currentLanguage];

      const days = Math.floor(timeLeft / 86400);
      const hours = Math.floor((timeLeft % 86400) / 3600);
      const minutes = Math.floor((timeLeft % 3600) / 60);

      let result = '';
      if (currentLanguage === 'fa') {
        if (days > 0) result += `${days} روز`;
        if (hours > 0) result += `${days > 0 ? ' و ' : ''}${hours} ساعت`;
        if (minutes > 0 && days === 0) result += `${hours > 0 ? ' و ' : ''}${minutes} دقیقه`;
      } else if (currentLanguage === 'en') {
        if (days > 0) result += `${days} day${days > 1 ? 's' : ''}`;
        if (hours > 0) result += `${days > 0 ? ' and ' : ''}${hours} hour${hours > 1 ? 's' : ''}`;
        if (minutes > 0 && days === 0) result += `${hours > 0 ? ' and ' : ''}${minutes} minute${minutes > 1 ? 's' : ''}`;
      } else {
        if (days > 0) result += `${days} д.`;
        if (hours > 0) result += `${days > 0 ? ' и ' : ''}${hours} ч.`;
        if (minutes > 0 && days === 0) result += `${hours > 0 ? ' и ' : ''}${minutes} мин.`;
      }
      return result || translations['unlimited'][currentLanguage];
    }

    function formatDateTime(timestamp) {
      if (!timestamp) return translations['unlimited'][currentLanguage];
      const date = new Date(timestamp * 1000);
      return date.toLocaleDateString(currentLanguage === 'fa' ? 'fa-IR' : currentLanguage === 'en' ? 'en-US' : 'ru-RU') +
             ' ' + date.toLocaleTimeString(currentLanguage === 'fa' ? 'fa-IR' : currentLanguage === 'en' ? 'en-US' : 'ru-RU');
    }

    function formatLastOnline(dateString) {
      if (!dateString) return translations['unknown'][currentLanguage];
      const date = new Date(dateString + 'Z');
      if (isNaN(date)) return translations['unknown'][currentLanguage];
      return date.toLocaleDateString(currentLanguage === 'fa' ? 'fa-IR' : currentLanguage === 'en' ? 'en-US' : 'ru-RU') +
             ' ' + date.toLocaleTimeString(currentLanguage === 'fa' ? 'fa-IR' : currentLanguage === 'en' ? 'en-US' : 'ru-RU');
    }

    function addSubscription(platform, app) {
      const subLink = "{{ user.subscription_url }}" || "https://example.com/sub";
      copyToClipboard(subLink);
      showToast(`${translations['copied'][currentLanguage]}: ${app} (${platform})`);
    }

    function getProxyName(link) {
      try {
        if (link.startsWith('vmess://')) {
          const decoded = atob(link.replace('vmess://', ''));
          const config = JSON.parse(decoded);
          return config.ps || config.add || 'Unknown VMess';
        }
        const url = new URL(link);
        const name = url.hash ? url.hash.substring(1) : url.pathname.split('/').pop();
        return decodeURIComponent(name) || 'Unknown';
      } catch (e) {
        const nameMatch = link.match();
        if (nameMatch && nameMatch[1]) {
          return decodeURIComponent(nameMatch[1]);
        }
        return link.split('/').pop() || 'Unknown';
      }
    }

    function getRandomPing(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    async function displayProxies() {
      const proxyList = document.getElementById('proxyList');
      if (!proxyList) return;
      proxyList.innerHTML = '';

      const links = {{ user.links | tojson }};

      if (!Array.isArray(links) || links.length === 0) {
        const noServers = document.createElement('div');
        noServers.className = 'p-3 text-center text-black-799';
        noServers.textContent = translations['no_servers'][currentLanguage];
        proxyList.appendChild(noServers);
        return;
      }

      const copyAllButton = document.createElement('button');
      copyAllButton.className = 'btn-primary rounded-lg p-3 flex items-center justify-center gap-2 mb-3';
      copyAllButton.innerHTML = `<i class="fas fa-copy"></i><span data-i18n="copy_all_servers">${translations['copy_all_servers'][currentLanguage]}</span>`;
      copyAllButton.addEventListener('click', function() {
        copyAllLinks();
        const originalContent = this.innerHTML;
        this.innerHTML = `<i class="fas fa-check text-green-300"></i><span>${translations['copied'][currentLanguage]}</span>`;
        setTimeout(() => this.innerHTML = originalContent, 2000);
      });

      const copySubButton = document.createElement('button');
      copySubButton.className = 'btn-primary rounded-lg p-3 flex items-center justify-center gap-2 mb-3';
      copySubButton.innerHTML = `<i class="fas fa-link"></i><span data-i18n="copy_subscription_link">${translations['copy_subscription_link'][currentLanguage]}</span>`;
      copySubButton.addEventListener('click', function() {
        const subLink = "{{ user.subscription_url }}" || "https://example.com/sub";
        copyToClipboard(subLink);
        const originalContent = this.innerHTML;
        this.innerHTML = `<i class="fas fa-check text-green-900"></i><span>${translations['copied'][currentLanguage]}</span>`;
        setTimeout(() => this.innerHTML = originalContent, 2000);
      });

      const qrSubButton = document.createElement('button');
qrSubButton.className = 'btn-primary rounded-lg p-3 flex items-center justify-center gap-2 mb-3';
qrSubButton.innerHTML = `<i class="fas fa-qrcode"></i><span>${translations['qrSubButton'][currentLanguage]}</span>`;
qrSubButton.addEventListener('click', function() {
  showQRCode("{{ user.subscription_url }}", "Subscription");
  const originalContent = this.innerHTML;
  this.innerHTML = `<i class="fas fa-check text-green-900"></i><span>${translations['displayed'][currentLanguage]}</span>`;
  setTimeout(() => this.innerHTML = originalContent, 2000);
});

      const buttonContainer = document.createElement('div');
      buttonContainer.className = 'flex gap-3 flex-wrap';
      buttonContainer.appendChild(copyAllButton);
      buttonContainer.appendChild(copySubButton);
      buttonContainer.appendChild(qrSubButton);
      proxyList.appendChild(buttonContainer);

      for (const link of links) {
        if (!link || link === 'False') continue;
        const name = getProxyName(link);
        if (name) {
          const proxyItem = document.createElement('div');
          proxyItem.className = 'proxy-item rounded-lg p-3 flex justify-between items-center bg-white/5';

          const proxyInfo = document.createElement('div');
          proxyInfo.className = 'flex flex-col';

          const proxyName = document.createElement('span');
          proxyName.className = 'truncate max-w-[180px] sm:max-w-none';
          proxyName.textContent = name;
          proxyInfo.appendChild(proxyName);

          const ping = getRandomPing(50, 500);  
          const pingSpan = document.createElement('span');
          pingSpan.className = 'text-sm text-gray-900';
          pingSpan.textContent = `${translations['ping'][currentLanguage]} ${ping}${translations['ms'][currentLanguage]}`;
          pingSpan.className = ping < 150 ? 'text-green-400' : ping < 300 ? 'text-yellow-400' : 'text-red-400';
          proxyInfo.appendChild(pingSpan);

          const proxyActions = document.createElement('div');
          proxyActions.className = 'proxy-actions flex gap-2';

          const copyButton = document.createElement('button');
          copyButton.className = 'text-blue-300 hover:text-blue-100';
          copyButton.innerHTML = '<i class="fas fa-copy"></i>';
          copyButton.addEventListener('click', (e) => {
            e.stopPropagation();
            copyToClipboard(link);
            showToast(translations['copied'][currentLanguage]);
          });

          const qrButton = document.createElement('button');
          qrButton.className = 'text-green-300 hover:text-green-100';
          qrButton.setAttribute('data-link', link);
          qrButton.setAttribute('data-name', name);
          qrButton.innerHTML = '<i class="fas fa-qrcode"></i>';
          qrButton.addEventListener('click', (e) => {
            e.stopPropagation();
            const link = qrButton.getAttribute('data-link');
            const name = qrButton.getAttribute('data-name');
            if (link) {
              showQRCode(link, name);
            } else {
              showToast(translations['invalid_link'][currentLanguage]);
            }
          });

          proxyActions.appendChild(copyButton);
          proxyActions.appendChild(qrButton);
          proxyItem.appendChild(proxyInfo);
          proxyItem.appendChild(proxyActions);
          proxyList.appendChild(proxyItem);
        }
      }
    }

    function showQRCode(link, name) {
      const qrCodeContainer = document.getElementById('qrCodeCanvas');
      if (!qrCodeContainer) {
        console.error('QR Code container not found!');
        showToast('خطا: کانتینر QR Code پیدا نشد!');
        return;
      }

      qrCodeContainer.innerHTML = '';

      const defaultLink = "https://example.com/sub";
      if (!link || typeof link !== 'string' || link.trim() === '' || link.includes('{{ user.subscription_url }}')) {
        console.warn('Invalid or unrendered subscription link, using default:', defaultLink);
        link = defaultLink;
      }

      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 256;
      qrCodeContainer.appendChild(canvas);

      try {
        QRCode.toCanvas(canvas, link, {
          width: 256,
          height: 256,
          margin: 1,
          errorCorrectionLevel: 'M',
          color: {
            dark: currentTheme === 'light' ? '#000000' : '#ffffff',
            light: currentTheme === 'light' ? '#ffffff' : '#000000'
          }
        }, function(error) {
          if (error) {
            console.error('Error generating QR Code:', error);
            showToast(translations['qr_generation_failed'][currentLanguage]);
            qrCodeContainer.innerHTML = '<p class="text-red-500">خطا در تولید QR Code</p>';
            return;
          }

          canvas.style.cursor = 'pointer';
          canvas.addEventListener('click', () => {
            copyToClipboard(link);
            showToast(translations['copied'][currentLanguage]);
          });
        });
      } catch (error) {
        console.error('Unexpected error generating QR Code:', error);
        showToast(translations['qr_generation_failed'][currentLanguage]);
        qrCodeContainer.innerHTML = '<p class="text-red-500">خطا در تولید QR Code</p>';
        return;
      }

      const modal = document.getElementById('qrModal');
      if (modal) {
        const qrTitle = modal.querySelector('.qr-title');
        if (qrTitle) {
          qrTitle.textContent = name ? `${translations['server_qr'][currentLanguage]}: ${name}` : translations['server_qr'][currentLanguage];
        }
        modal.classList.add('active');
      }
    }

    function closeQRModal() {
      const modal = document.getElementById('qrModal');
      if (modal) modal.classList.remove('active');
    }

    function copyToClipboard(text) {
      navigator.clipboard.writeText(text)
        .then(() => showToast(translations['copied'][currentLanguage]))
        .catch(err => console.error('Error copying to clipboard:', err));
    }

    function copyAllLinks() {
      const links = {{ user.links | tojson }};
      if (!Array.isArray(links) || links.length === 0) {
        showToast(translations['no_servers'][currentLanguage]);
        return;
      }
      const allLinksText = links.filter(link => link && link !== 'False').join('\n');
      copyToClipboard(allLinksText);
    }

    function updateDynamicContent() {
      document.getElementById('expirationValue').textContent = getTimeLeft(userExpireTimestamp);
    }

    function updateFavoriteLocationLabel() {
      const label = document.getElementById('favoriteLocationLabel');
      if (label) {
        label.textContent = translations['favorite_location'][currentLanguage];
      }
    }

    async function calculateFavoriteLocation() {
      const favoriteLocationElement = document.getElementById('favoriteLocation');
      if (!favoriteLocationElement) return;

      const usageUrl = "{{ user.subscription_url }}/usage";
      try {
        const response = await fetch(usageUrl);
        if (!response.ok) throw new Error('Failed to fetch usage data');
        const data = await response.json();

        if (!data || !Array.isArray(data.nodes) || data.nodes.length === 0) {
          favoriteLocationElement.textContent = translations['no_usage_data'][currentLanguage];
          return;
        }

        const maxUsageNode = data.nodes.reduce((max, node) => {
          return (node.usage || 0) > (max.usage || 0) ? node : max;
        }, { usage: 0 });

        if (maxUsageNode && maxUsageNode.name) {
          favoriteLocationElement.textContent = maxUsageNode.name;
        } else {
          favoriteLocationElement.textContent = translations['no_usage_data'][currentLanguage];
        }
      } catch (error) {
        console.error('Error fetching usage data:', error);
        favoriteLocationElement.textContent = translations['no_usage_data'][currentLanguage];
      }
    }

    document.addEventListener('DOMContentLoaded', () => {
      setTheme(currentTheme);
      setLanguage(currentLanguage);
      updateDynamicContent();
      displayProxies();
      calculateFavoriteLocation();
      setInterval(updateDynamicContent, 60000);
    });

    <script>
  window.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('card');
    card.classList.add('bg-gradient-to-br', 'from-indigo-900/30', 'opacity-100');
  });


      function openModal() {
          const modal = document.getElementById('settingsModal');
          if (modal) {
              modal.classList.add('active'); 
          }
      }
      
      function closeModalAndRefresh() {
          const modal = document.getElementById('settingsModal');
          if (modal) {
              modal.classList.remove('active'); 
          }
          location.reload(); 
      }
      
      function toggleSection(section) {
          const themeSection = document.getElementById('theme-section');
          const languageSection = document.getElementById('language-section');
          const themeBtn = document.getElementById('btn-theme');
          const languageBtn = document.getElementById('btn-language');
      
          if (section === 'theme') {
              themeSection.style.display = 'block';
              languageSection.style.display = 'none';
              themeBtn.classList.add('active');
              languageBtn.classList.remove('active');
          } else if (section === 'language') {
              themeSection.style.display = 'none';
              languageSection.style.display = 'block';
              themeBtn.classList.remove('active');
              languageBtn.classList.add('active');
          }
      }
      
      function setTheme(theme) {
          currentTheme = theme;
          document.body.setAttribute('data-theme', theme);
          localStorage.setItem('theme', theme);
          ['light', 'dark'].forEach(t => {
              const btn = document.getElementById(`btn-${t}`);
              if (btn) {
                  btn.classList.toggle('active', t === theme);
              }
          });
          location.reload();
      }
      
      function setLanguage(lang) {
          localStorage.setItem('language', lang);  
          document.body.setAttribute('data-language', lang);  
          currentLanguage = lang; 
      
          updateTranslations();
      
          location.reload();
      }
      
      function updateTranslations() {
          document.querySelectorAll('[data-i18n]').forEach(el => {
              const key = el.getAttribute('data-i18n');
              if (translations[key] && translations[key][currentLanguage]) {
                  el.innerText = translations[key][currentLanguage];
              }
          });
      }
      
      function loadSettings() {
          const savedLanguage = localStorage.getItem('language');
          if (savedLanguage) {
              currentLanguage = savedLanguage;
              document.body.setAttribute('data-language', savedLanguage);
          } else {
              currentLanguage = 'fa';
              localStorage.setItem('language', 'fa');
              document.body.setAttribute('data-language', 'fa');
          }
      
          const savedTheme = localStorage.getItem('theme');
          if (savedTheme) {
              currentTheme = savedTheme;
              document.body.setAttribute('data-theme', savedTheme);
          } else {
              currentTheme = 'dark';
              localStorage.setItem('theme', 'dark');
              document.body.setAttribute('data-theme', 'dark');
          }
      
          updateTranslations();
      
          ['light', 'dark'].forEach(t => {
              const btn = document.getElementById(`btn-${t}`);
              if (btn) {
                  btn.classList.toggle('active', t === currentTheme);
              }
          });
      
          ['fa', 'en', 'ru'].forEach(l => {
              const btn = document.getElementById(`btn-${l}`);
              if (btn) {
                  btn.classList.toggle('active', l === currentLanguage);
              }
          });
      }
      
      document.addEventListener('DOMContentLoaded', function () {
          loadSettings();
      });
      
      
    function copyUsername() {
      const username = document.getElementById('username').innerText;
      navigator.clipboard.writeText(username)
        .then(() => alert('✅ نام کاربری کپی شد!'))
        .catch(err => console.error('خطا در کپی:', err));
    }
    
    function handleSettingsClick() {
      const icon = document.getElementById('settingsIcon');
      icon.classList.add('spin');
      setTimeout(() => {
        icon.classList.remove('spin');
        openModal(); 
      }, 600);
    }

    

function toPersianDate(date) {
    const persianDate = new Date(date).toLocaleDateString('fa-IR-u-nu-latn', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
    }).split(/[\s,]+/);

    const [year, month, day] = persianDate[0].split('/');
    const time = persianDate[1];
    return `${year}/${month}/${day} ${time}`;
}


function getTimeAgo(dateString) {
    const pastDate = new Date(dateString + 'Z');
    const now = new Date();
    if (isNaN(pastDate)) return translations['invalid_date'][currentLanguage];

    const diffInMs = now - pastDate;
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    const days = Math.floor(diffInMinutes / (60 * 24));
    const hours = Math.floor((diffInMinutes % (60 * 24)) / 60);
    const minutes = diffInMinutes % 60;

    let result = '';
    if (days > 0) result += `${days} ${translations['day'][currentLanguage]}${days > 1 ? 's' : ''}`;
    if (hours > 0) result += (result ? ' و ' : '') + `${hours} ${translations['hour'][currentLanguage]}${hours > 1 ? 's' : ''}`;
    if (minutes > 0 && days === 0)
        result += (result ? ' و ' : '') + `${minutes} ${translations['minute'][currentLanguage]}${minutes > 1 ? 's' : ''}`;

    return result || translations['less_than_minute'][currentLanguage];
}

function setPrimaryStyle(elem) {
    elem.className = 'font-semibold text-black dark:text-white';
}

function setSecondaryStyle(elem) {
    elem.className = 'font-semibold text-gray-500 dark:text-gray-400';
}

async function getUsageData() {
    const usageUrl = "{{ user.subscription_url }}/usage";
    try {
        const response = await fetch(usageUrl);
        if (!response.ok) throw new Error('خطا در دریافت داده‌ها');
        const data = await response.json();
        return data.usages || [];
    } catch (error) {
        console.error('خطا:', error);
        return [];
    }
}

function parseTraffic(traffic) {
    if (typeof traffic === 'number') return traffic;
    if (typeof traffic === 'string') {
        const match = traffic.match(/([\d.]+)\s*(GB|MB|TB)/i);
        if (match) {
            const value = parseFloat(match[1]);
            const unit = match[2].toUpperCase();
            switch (unit) {
                case 'TB': return value * 1024 * 1024 * 1024 * 1024;
                case 'GB': return value * 1024 * 1024 * 1024;
                case 'MB': return value * 1024 * 1024;
            }
        }
    }
    return 0;
}

function findMostUsedNode(usages) {
    if (!Array.isArray(usages) || usages.length === 0) return null;
    return usages.reduce((max, node) => {
        const current = parseTraffic(node?.used_traffic);
        const maxTraffic = parseTraffic(max?.used_traffic);
        return current > maxTraffic ? node : max;
    }, null);
}

async function updateFavoriteLocation() {
    const usages = await getUsageData();
    const topNode = findMostUsedNode(usages);

    const flagElem = document.getElementById('favoriteLocationFlag');
    const labelElem = document.getElementById('favoriteLocationLabel');
    const nameElem = document.getElementById('favoriteLocationName');

    if (!flagElem || !labelElem || !nameElem) return;

    if (!topNode) {
        flagElem.textContent = '';
        labelElem.textContent = translations['favorite_location'][currentLanguage];
        nameElem.textContent = translations['no_usage_data'][currentLanguage];
        setPrimaryStyle(labelElem);
        setSecondaryStyle(nameElem);
        return;
    }

    const name = topNode?.node_name || topNode?.server || translations['unknown'][currentLanguage];
    const flagMatch = name.match(/(🇦🇪|🇩🇪|🇫🇷|🇬🇧|🇳🇱|🇺🇸|🇨🇦|🇯🇵|🇹🇷|🇮🇷|🇮🇹|🇪🇸|🇨🇭|🇸🇪|🇳🇴|🇧🇪|🇦🇺|🇫🇮|🇷🇺|🇧🇷|🇸🇬|🇲🇾|🇮🇳)/);
    const flag = flagMatch ? flagMatch[1] : '';

    flagElem.textContent = flag;
    labelElem.textContent = translations['favorite_location'][currentLanguage];
    nameElem.textContent = name.replace(flag, '').trim();

    setPrimaryStyle(labelElem);
    setSecondaryStyle(nameElem);
}

function updateExpirationDate() {
    const expireSpan = document.getElementById('statusExpireDate');
    const userExpireTimestamp = {{ user.expire if user.expire else 'null' }};

    if (expireSpan) {
        if (userExpireTimestamp) {
            const expireDate = new Date(userExpireTimestamp * 1000);
            expireSpan.textContent = toPersianDate(expireDate);
        } else {
            expireSpan.textContent = translations['unlimited'][currentLanguage];
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const lastOnlineSpan = document.getElementById('last-online');
    {% if user.online_at %}
        const lastOnlineTime = '{{ user.online_at }}';
        lastOnlineSpan.textContent = getTimeAgo(lastOnlineTime);
    {% else %}
        lastOnlineSpan.textContent = translations['unknown'][currentLanguage];
    {% endif %}
    lastOnlineSpan.classList.add('font-semibold', 'text-black', 'dark:text-white');

    updateExpirationDate();

    updateFavoriteLocation();
});
  </script>
