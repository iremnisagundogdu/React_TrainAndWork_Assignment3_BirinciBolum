import React from "react";
import Policy from "../Policy/Policy";
import "./Footer.css";
const Footer = () => {
    return (
      <React.Fragment> 
        <Policy/>
        <footer className="footer">
    <div className="subscribe-row">
      <div className="container">
        <div className="footer-row-wrapper">
          <div className="footer-subscribe-wrapper">
            <div className="footer-subscribe">
              <div className="footer-subscribe-top">
                <h3 className="subscribe-title">Yeni ürünler, indirimler ve daha fazlası hakkında bilgi almak için mailinizi bırakın.</h3>
                <p className="subscribe-desc">50$ üzeri ilk siparişinizde 10$ değerinde bir kupon göndereceğiz.</p>
              </div>
              <div className="footer-subscribe-bottom">
                <form>
                  <input type="text" placeholder="Enter your email address."/>
                  <button className="btn">Abone</button>
                </form>
                <p className="privacy-text">
                  Abone olduğunuzda <a href="#">Gizlilik Şartlarımızı ve Çerezleri Kabul Etmiş Oluyorsunuz.</a>
                </p>
              </div>
            </div>
          </div>
          <div className="footer-contact-wrapper">
            <div className="footer-contact-top">
              <h3 className="contact-title">
                Yardım İçin <br/>
                (+90) 565 544 54 45 
              </h3>
              <p className="contact-desc">Sabah 8.00 – akşam 19.00 arası açığız</p>
            </div>
            <div className="footer-contact-bottom">
              <div className="download-app">
                <a href="#">
                  <img src="/img/footer/app-store.png" alt=""/>
                </a>
                <a href="#">
                  <img src="/img/footer/google-play.png" alt=""/>
                </a>
              </div>
              <p className="privacy-text">
                <strong></strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="widgets-row">
      <div className="container">
        <div className="footer-widgets">
          <div className="brand-info">
            <div className="footer-logo">
               <a href="index.html" className="logo"><img src="/img/gundogduLogo.png" alt="" style={{widt:"120px", height:"60px"}}/></a>
            </div>
            <div className="footer-desc">
              <p>GÜNDOĞDU MAKİNA & İPLİK & YEDEK PARÇA</p>
            </div>
            <div className="footer-contact">
              <p>
                <a href="tel:555 555 55 55">(0212) 2808057</a> – <a
                  href="mailto:info@example.com">gundogdu@gundogdu.com</a>
              </p>
            </div>
          </div>
          <div className="widget-nav-menu">
            <h4>Bilgiler</h4>
            <ul className="menu-list">
              <li>
                <a href="#">Hakkımızda</a>
              </li>
              <li>
                <a href="#">Gizlilik Politikası</a>
              </li>
              <li>
                <a href="#">İade Politikası</a>
              </li>
              <li>
                <a href="#">Gönderim Politikası</a>
              </li>
              <li>
                <a href="#">Stoksuz Satış</a>
              </li>
            </ul>
          </div>
          <div className="widget-nav-menu">
            <h4>Kullanıcı Hesap</h4>
            <ul className="menu-list">
              <li>
                <a href="#">Dashboard</a>
              </li>
              <li>
                <a href="#">Siparişlerim</a>
              </li>
              <li>
                <a href="#">Favorilerim</a>
              </li>
              <li>
                <a href="#">Hesap Detay</a>
              </li>
              <li>
                <a href="#">Sipariş Takibi</a>
              </li>
            </ul>
          </div>
          <div className="widget-nav-menu">
            <h4>Mağaza</h4>
            <ul className="menu-list">
              <li>
                <a href="#">Ortaklık</a>
              </li>
              <li>
                <a href="#">Çok Satanlar</a>
              </li>
              <li>
                <a href="#">Son Gelen Ürünler</a>
              </li>
              <li>
                <a href="#">İndirimli Ürünler</a>
              </li>
            </ul>
          </div>
          <div className="widget-nav-menu">
            <h4>Kategoriler</h4>
            <ul className="menu-list">
              <li>
                <a href="#">Overlok Makinaları</a>
              </li>
              <li>
                <a href="#">Düz Dikiş Makinaları</a>
              </li>
              <li>
                <a href="#">Reçme Makinaları</a>
              </li>
              <li>
                <a href="#">Lok Makinaları</a>
              </li>
              <li>
                <a href="#">Kollu Makinaları</a>
              </li>
              <li>
                <a href="#">İlik Düğme Makinaları</a>
              </li>
              <li>
                <a href="#">İplik</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-row">
      <div className="container">
        <div className="footer-copyright">
          <div className="site-copyright">
            <p>
              Copyright 2023 © 
            </p>
          </div>
          <a href="#">
            <img src="/img/footer/cards.png" alt=""/>
          </a>
          <div className="footer-menu">
            <ul className="footer-menu-list">
              <li className="list-item">
                <a href="#">Gizlilik Politikası</a>
              </li>
              <li className="list-item">
                <a href="#">Şart ve Koşullar</a>
              </li>
              <li className="list-item">
                <a href="#">İade Politikaları</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  </React.Fragment>
    );
};

export default Footer;