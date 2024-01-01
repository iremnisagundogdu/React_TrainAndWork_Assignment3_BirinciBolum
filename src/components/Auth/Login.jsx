const Login = () => {
    return (
      <div className="account-column">
        <h2>Giriş</h2>
        <form>
          <div>
            <label>
              <span>
                Kullanıcı Adı veya E-mail <span className="required">*</span>
              </span>
              <input type="text" />
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
          <p className="remember">
            <label>
              <input type="checkbox" />
              <span>Beni Hatırla</span>
            </label>
            <button className="btn btn-sm">Giriş</button>
          </p>
          <a href="#" className="form-link">
            Parolamı unuttum.
          </a>
        </form>
      </div>
    );
  };
  
  export default Login;