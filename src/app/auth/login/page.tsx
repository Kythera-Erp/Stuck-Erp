import "./login.css";
export default function Login() {
  return (
 <div className="login-wrapper">
  <div className="login-card">
    <h1>Giriş Yap</h1>
    <p>Devam etmek için email ve şifreni gir</p>

    <form>
      <div className="form-group">
        <label>Email</label>
        <input type="email" placeholder="ornek@mail.com" />
      </div>

      <div className="form-group">
        <label>Şifre</label>
        <input type="password" placeholder="••••••••" />
      </div>

      <button>Giriş Yap</button>
    </form>
  </div>
</div>

  );
}
