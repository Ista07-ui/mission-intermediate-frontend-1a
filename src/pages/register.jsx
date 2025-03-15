import "../styles/login.css";

const Register = () => {
  return (
    <main>
      <div className="main-box">
        <div className="main-box-title">
          <h3 className="title">Pendaftaran Akun</h3>

          <p className="description">
            Yuk, lanjutin belajarmu di videobelajar.
          </p>
        </div>

        <form>
          <fieldset className="main-box-content">
            <div className="box-input">
              <label for="nama-lengkap">
                Nama Lengkap<span className="litleicon">*</span>
              </label>
              <input
                className="boxformInput"
                type="text"
                name="nama-lengkap"
                id="nama-lengkap"
                placeholder="Masukkan Nama Lengkap"
              />
            </div>

            <div className="box-input">
              <label for="email">
                E-Mail<span className="litleicon">*</span>
              </label>
              <input
                className="boxformInput"
                type="email"
                name="email"
                id="email"
                placeholder="Masukkan E-Mail"
              />
            </div>

            <div className="box-input">
              <label for="country-code">
                No. HP<span className="litleicon">*</span>
              </label>
              <div className="phone-input">
                <div className="phone-country-flag">
                  <img src="./icons/indonesia.png" alt="" />
                  <select name="country" id="country-code">
                    <option value="indonesia">+62</option>
                    <option value="singapore">+1</option>
                    <option value="malaysia">+2</option>
                  </select>
                </div>
                <input
                  className="boxformInput"
                  type="text"
                  id="phone-number"
                  name="phone-number"
                  placeholder="123-456-7890"
                  required
                />
              </div>
            </div>

            <div className="box-input">
              <label for="password">
                Kata Sandi<span className="litleicon">*</span>
              </label>
              <div className="box-input-password">
                <input
                  className="boxformInput"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Masukkan Kata Sandi"
                />
                <img src="./icons/hidden.png" alt="" srcset="" />
              </div>
            </div>

            <div className="box-input">
              <label for="confirm-passwor">
                Konfirmasi Kata Sandi<span className="litleicon">*</span>
              </label>
              <div className="box-input-password">
                <input
                  className="boxformInput"
                  type="password"
                  name="confirm-passwor"
                  id="confirm-passwor"
                  placeholder="Konfirmasi Kata Sandi"
                />
                <img src="./icons/hidden.png" alt="" srcset="" />
              </div>

              <a className="forgotPassword" href="#">
                Lupa password?
              </a>
            </div>

            <div className="box-login-register">
              <button id="tombol-masuk" type="button">
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
                <span>Daftar dengan Google</span>
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </main>
  );
};

export default Register;
