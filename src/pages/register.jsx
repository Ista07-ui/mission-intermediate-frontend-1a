import { useState } from "react";
import "../styles/register.css";
import { useNavigate } from "react-router";
import InputLabelText from "../components/InputLabelText";
import InputNoHp from "../components/InputNoHp";
import InputPass from "../components/InpusPass";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const setValueName = (event) => {
    setName(event.target.value);
  };

  const submitFormPendaftaran = () => {
    console.log(name, email, nohp, password, confirmPass);

    if (
      name === "" ||
      email === "" ||
      nohp === "" ||
      password === "" ||
      confirmPass === ""
    ) {
      alert("Data Lengkap Tidak Boleh Kosong");
      return;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("nohp", nohp);
    localStorage.setItem("password", password);

    navigate("/profile");
  };

  const [email, setEmail] = useState("");

  const setValueEmail = (event) => {
    setEmail(event.target.value);
  };

  const [nohp, setNohp] = useState("");

  const setValueNohp = (event) => {
    setNohp(event.target.value);
  };

  const [password, setPassword] = useState("");

  const setValuePassword = (event) => {
    setPassword(event.target.value);
  };

  const [confirmPass, setConfirmPass] = useState("");

  const setValueConfirmPass = (event) => {
    setConfirmPass(event.target.value);
  };

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
            <InputLabelText
              labelValue="Nama Lengkap"
              inputId="nama-lengkap"
              placeholder="Masukkan Nama Lengkap"
              type="text"
              // value untuk menampilkan data dari state name
              value={name}
              onChange={setValueName}
              // onChange untuk mengambil data dari input disetiap perubahan value
            />

            <InputLabelText
              labelValue="E-mail"
              inputId="email"
              placeholder="Masukkan E-Mail"
              type="email"
              value={email}
              onChange={setValueEmail}
            />

            <InputNoHp nohp={nohp} setValueNohp={setValueNohp} />

            <InputPass name={password} setValuePassword={setValuePassword} />

            <div className="box-input">
              <label htmlFor="confirm-password">
                Konfirmasi Kata Sandi<span className="litleicon">*</span>
              </label>
              <div className="box-input-password">
                <input
                  className="boxformInput"
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="Konfirmasi Kata Sandi"
                  value={confirmPass}
                  onChange={setValueConfirmPass}
                />
                <img src="./icons/hidden.png" alt="s" />
              </div>
            </div>

            <a className="forgotPassword" href="/#">
              Lupa password?
            </a>

            <div className="box-login-register">
              <button id="tombol-masuk" type="button">
                Masuk
              </button>
              <button
                id="tombol-daftar"
                type="button"
                onClick={submitFormPendaftaran}
              >
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
