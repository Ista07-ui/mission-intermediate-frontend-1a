import { useEffect, useState } from "react";
import "../styles/profile.css";

const Profile = () => {
  const [name, setName] = useState("-");
  const [email, setEmail] = useState("");
  const [nohp, setNohp] = useState("");

  function getDataFromLocalStorage() {
    // ambil data dari localStorage dengan key "name"
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) return { name: "", email: "", nohp: "" };

    const { name, email, nohp } = JSON.parse(loggedInUser);
    // simpan data username ke state name
    setName(name);
    setEmail(email);
    setNohp(nohp);
  }

  // ketika komponen ini (Profile) muncul dilayar
  useEffect(() => {
    // ambil data dari localStorage
    getDataFromLocalStorage();
  }, []);

  return (
    <>
      <main>
        <div className="frame-background">
          <section>
            <div className="frame-boxOne">
              <div className="textBox">
                <div className="textHeading">
                  <h5>Ubah Profil</h5>
                </div>
                <div className="textLittle">
                  <p>Ubah data diri Anda</p>
                </div>
              </div>
              <div className="boxSection">
                <div className="sectionLittle-yellow">
                  <div className="sectionImg">
                    <img alt="" src="/icons/Person.png" />
                  </div>
                  <div className="sectionText-yellow">Profil Saya</div>
                </div>
                <div className="sectionLittle">
                  <div className="sectionImg">
                    <div>
                      <img alt="" src="./icons/Book.png" />
                    </div>
                  </div>
                  <div className="sectionText">Kelas Saya</div>
                </div>
                <div className="sectionLittle">
                  <div className="sectionImg">
                    <div>
                      <img alt="" src="./icons/ShoppingBasket.png" />
                    </div>
                  </div>
                  <div className="sectionText">Pesanan Saya</div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="frame-boxTwo">
              <div className="box-profile">
                <img alt="" src="/images/Avatarprofile.png" />
                <div className="box-profileText">
                  <h5 className="profileHeading">{name}</h5>
                  <p className="profileEmail">{email}</p>
                  {nohp}
                  <p className="profileChange">Ganti Foto Profil</p>
                </div>
              </div>
              <div className="profileLine"></div>
              <form className="profileForm">
                <div className="profileFormInput">
                  <fieldset className="profileForm-fieldset profileForm-inputActive">
                    <legend className="profileForm-border">
                      <div className="profileForm-legend">Nama Lengkap</div>
                    </legend>
                    <div className="profileForm-size">
                      {/* <input className="profileForm-little" value={name} /> */}
                      <input
                        className="profileForm-little"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                        }}
                      >
                        <div
                          style={{
                            width: "24px",
                            height: "24px",
                            position: "relative",
                          }}
                        ></div>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className="profileFormInput">
                  <fieldset className="profileForm-fieldset">
                    <legend className="profileForm-border">
                      <div className="profileForm-legend">E-mail</div>
                    </legend>
                    <div className="profileForm-size">
                      {/* <input
                        type="email"
                        className="profileForm-little"
                        value={email}
                      /> */}
                      <input
                        type="email"
                        className="profileForm-little"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                        }}
                      >
                        <div
                          style={{
                            width: "24px",
                            height: "24px",
                            position: "relative",
                          }}
                        ></div>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className="profileForm-ColumnTwo">
                  <div className="profileFormInput">
                    <fieldset className="profileForm-fieldset">
                      <div className="profileForm-border">
                        <select
                          name="phone"
                          id="phone"
                          className="profileForm-little"
                        >
                          <option value="indonesia">+62</option>
                        </select>
                      </div>
                    </fieldset>
                  </div>

                  <div className="profileFormInput">
                    <fieldset className="profileForm-fieldset">
                      <legend className="profileForm-border">
                        <div
                          className="profileForm-legend"
                          style={{
                            color: "rgba(51, 51, 51, 0.68) !important",
                          }}
                        >
                          No. Hp
                        </div>
                      </legend>
                      <div className="profileForm-size">
                        {/* <input className="profileForm-little" value={nohp} /> */}
                        <input
                          className="profileForm-little"
                          value={nohp}
                          onChange={(e) => setNohp(e.target.value)}
                        />
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                          }}
                        >
                          <div
                            style={{
                              width: "24px",
                              height: "24px",
                              position: "relative",
                            }}
                          ></div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
            <button className="boxButton">
              <div className="button">
                <div className="buttonText">Simpan</div>
              </div>
            </button>
          </section>
        </div>
      </main>

      <footer>
        <div className="footer-container">
          <div className="footer-menu">
            <div className="footer-title">
              <div className="footer-img">
                <img alt="" src="/images/logo.png" />
              </div>
              <div className="footerbox-title">
                <p className="footertext-title">Gali Potensi Anda Melalui</p>
                <p className="footertext-title">
                  Pembelajaran Video di hariesok.id!
                </p>
                <p className="footertext-little">
                  Jl. Usman Effendi No. 50 Lowokwaru, Malang
                </p>
                <p className="footertext-little">+62-877-7123-1234</p>
              </div>
            </div>

            <div className="footer-submenu-container">
              <div className="footer-tab">
                <div className="footer-tabText">
                  <span> Kategori </span>

                  <img
                    className="footer-submenu-caret"
                    src="icons/caret-right.png"
                    alt=""
                  />
                </div>
                <div className="footer-submenu-links">
                  <p>Digital & Teknologi</p>
                  <p>Pemasaran</p>
                  <p>Manajemen Bisnis</p>
                  <p>Pengembangan Diri</p>
                  <p>Desain</p>
                </div>
              </div>
              <div className="footer-tab">
                <div className="footer-tabText">
                  <span> Perusahaan </span>

                  <img
                    className="footer-submenu-caret"
                    src="icons/caret-right.png"
                    alt=""
                  />
                </div>
                <div className="footer-submenu-links">
                  <p>Tentang Kami</p>
                  <p>FAQ</p>
                  <p>Kebijakan Privasi</p>
                  <p>Ketentuan Layanan</p>
                  <p>Bantuan</p>
                </div>
              </div>
              <div className="footer-tab">
                <div className="footer-tabText">
                  <span> Komunitas </span>

                  <img
                    className="footer-submenu-caret"
                    src="icons/caret-right.png"
                    alt=""
                  />
                </div>
                <div className="footer-submenu-links">
                  <p>Tips Sukses</p>
                  <p>Blog</p>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              width: "100%",
              height: "1px",
              position: "relative",
              border: "1px rgba(58, 53, 65, 0.12) solid",
            }}
          ></div>

          <div className="footer-info">
            <p>@2025 Gerobak Sayur All Rights Reserved.</p>
            <div className="footer-tabIcon">
              <div className="footer-icon">
                <img alt="" src="./icons/linked.png" />
              </div>
              <div className="footer-icon">
                <img alt="" src="./icons/faceb.png" />
              </div>
              <div className="footer-icon">
                <img alt="" src="./icons/inst.png" />
              </div>
              <div className="footer-icon">
                <img alt="" src="./icons/twit.png" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Profile;
