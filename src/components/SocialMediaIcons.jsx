// برای سوشال مدیاها یک کامپوننت جدا ایجاد کردیم
const SocialMediaIcons = () => {
    return (
        // یک دیوی ایجاد کرده که با جاستی فای و فلکس مرتب شان کرده و یک گپی بینشان انداخته
      <div className="flex justify-center md:justify-start my-10 gap-7">
        {/* هر کدام از سوشال مدیاها را در یک تگ ای گذاشته */}
        <a
          className="hover:opacity-50 transition duration-500"
        // اینجا لینک را گذاشته
          href="https://www.linkedin.com"
        //   یعنی در یک صفحه جداگانه ایجاد و باز شود
          target="_blank"
         //یعنی همه مرورگرهای قدیمی را هم پشتیبانی کند
          rel="noreferrer">
            {/* عکس لینکدین رو به صورت پینجی میزاریم */}
          <img alt="linkedin-link" src="../assets/linkedin.png" />
        </a>
        
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.twitter.com"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="twitter-link" src="../assets/twitter.png" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="facebook-link" src="../assets/facebook.png" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="instagram-link" src="../assets/instagram.png" />
        </a>
      </div>
    );
  };
  
  export default SocialMediaIcons;