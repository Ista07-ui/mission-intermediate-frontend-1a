import "../styles/login.css";

const Login = () => {
  return (
    <main>
      <div class="main-box">
        <div class="main-box-title">
          <h3 class="title">Masuk ke Akun</h3>

          <p class="description">Yuk, lanjutin belajarmu di videobelajar.</p>
        </div>

        <form>
          <fieldset class="main-box-content">
            <div class="box-input">
              <label for="email">
                E-Mail<span class="litleicon">*</span>
              </label>
              <input
                class="boxformInput"
                type="email"
                name="email"
                id="email"
                placeholder="Masukkan E-Mail"
              />
            </div>

            <div class="box-input">
              <label for="password">
                Kata Sandi<span class="litleicon">*</span>
              </label>
              <div class="box-input-password">
                <input
                  class="boxformInput"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Masukkan Kata Sandi"
                />
                <img src="./icons/hidden.png" alt="" srcset="" />
              </div>
              <a class="forgotPassword" href="#">
                Lupa password?
              </a>
            </div>

            <div class="box-login-register">
              <button id="tombol-masuk" type="button">
                Masuk
              </button>
              <button id="tombol-daftar" type="button">
                Daftar
              </button>

              <div>
                <span class="divider">atau</span>
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
