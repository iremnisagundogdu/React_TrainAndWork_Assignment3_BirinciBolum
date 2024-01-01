import "./Contact.css"

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-top">
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.0453842822158!2d28.998892476842574!3d41.08985501439646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab662cd196d9f%3A0xb7571ab751c4cbdf!2zT2x0YWzEsQ!5e0!3m2!1str!2str!4v1704102662263!5m2!1str!2str"
            width="100%"
            height="500"
            style={{
              border: "0",
              
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="contact-bottom">
        <div className="container">
          <div className="contact-titles">
            <h4>Bizimle İletişime Geçin</h4>
            <h2>İletişim Formu</h2>
            <p>
              Yardımcı olabilmemiz için lütfen aşağıdaki formu eksiksiz doldurun.
            </p>
          </div>
          <div className="contact-elements">
            <form className="contact-form">
              <div className="">
                <label>
                  Ad
                  <span>*</span>
                </label>
                <input type="text" required />
              </div>
              <div className="">
                <label>
                  E-mail
                  <span>*</span>
                </label>
                <input type="text" required />
              </div>
              <div className="">
                <label>
                  Konu
                  <span>*</span>
                </label>
                <input type="text" required />
              </div>
              <div className="">
                <label>
                  Mesaj
                  <span>*</span>
                </label>
                <textarea
                  id="author"
                  name="author"
                  type="text"
                  defaultValue=""
                  size="30"
                  required=""
                ></textarea>
              </div>
              <button className="btn btn-sm form-button">Gönder</button>
            </form>
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-texts">
                  <strong> GÜNDOĞDU MAKİNA</strong>
                  <p className="contact-street">
                  Sultan Selim, Güzel Yonca Sokağı No:11, 34415 Kâğıthane/İstanbul
                  </p>
                  <a href="tel:Phone: +1 1234 567 88">Telefon: (0212) 280 80 57</a>
                  <a href="mailto:Email: contact@example.com">
                    Email: gundogdu@gundogdu.com
                  </a>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-texts">
                  <strong> Çalışma Saatleri</strong>
                  <p className="contact-date">Pazartesi - Cumartesi : 09.00-18.00</p>
                  <p>Pazar Günü Kapalıdır.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;