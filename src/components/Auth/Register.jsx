const Register = () => {
    return (
      <div className="account-column">
        <h2>Kayıt Ol</h2>
        <form>
          <div>
            <label>
              <span>
                Kullanıcı Adı <span className="required">*</span>
              </span>
              <input type="text" />
            </label>
          </div>
          <div>
            <label>
              <span>
                E-mail <span className="required">*</span>
              </span>
              <input type="email" />
            </label>
          </div>
          <div>
            <label>
              <span>
                Parola <span className="required">*</span>
              </span>
              <input type="password" />
            </label>
          </div>
          <div className="privacy-policy-text remember">
            <p>
            Kişisel verileriniz bu web sitesindeki deneyiminizi desteklemek, hesabınıza erişimi yönetmek ve belgemizde açıklanan diğer amaçlar için kullanılacaktır.<a href="#">Gizlilik Politikası.</a>
            </p>
            <button className="btn btn-sm">Kayıt Ol</button>
          </div>
        </form>
      </div>
    );
  };
  
  export default Register;