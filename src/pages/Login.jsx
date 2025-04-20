import { useState } from "react";
import "../styles/login.css";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setValueEmail = (event) => {
    setEmail(event.target.value);
  };

  const setValuePassword = (event) => {
    setPassword(event.target.value);
  };

  const submitFormMasuk = () => {
    console.log(email, password);

    if (email === "" || password === "") {
      alert("Email dan Password tidak boleh kosong");
      return;
    }

    // Ambil data users dari localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    console.log("Data users di localStorage:", existingUsers);

    // Cari user yang cocok
    const foundUser = existingUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      alert("Login berhasil!");
      localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
      navigate("/profile");
    } else {
      alert("Email atau password salah");
      localStorage.setItem("email", email),
        localStorage.setItem("password", password);
    }
  };

  return (
    <main>
      <div className="main-box">
        <div className="main-box-title">
          <h3 className="title">Masuk ke Akun</h3>

          <p className="description">
            Yuk, lanjutin belajarmu di videobelajar.
          </p>
        </div>

        <form>
          <fieldset className="main-box-content">
            <div className="box-input">
              <label htmlFor="email">
                E-Mail<span className="litleicon">*</span>
              </label>
              <input
                className="boxformInput"
                type="email"
                name="email"
                id="email"
                placeholder="Masukkan E-Mail"
                value={email}
                onChange={setValueEmail}
              />
            </div>

            <div className="box-input">
              <label htmlFor="password">
                Kata Sandi<span className="litleicon">*</span>
              </label>
              <div className="box-input-password">
                <input
                  className="boxformInput"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Masukkan Kata Sandi"
                  value={password}
                  onChange={setValuePassword}
                />
                <img src="./icons/hidden.png" alt="" />
              </div>
              <a className="forgotPassword" href="/#">
                Lupa password?
              </a>
            </div>

            <div className="box-login-register">
              <button id="tombol-masuk" type="button" onClick={submitFormMasuk}>
                Masuk
              </button>
              <button id="tombol-daftar" type="button">
                Daftar
              </button>

              <div>
                <span className="divider">atau</span>
              </div>

              <button id="tombol-google" type="button">
                <img src="./icons/search.png" alt="" />
                <span>Masuk dengan Google</span>
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </main>
  );
};

export default Login;
