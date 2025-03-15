import React from "react";

import "../home.css";
import "../index.css";
import "../colors.css";
import "../typography.css";

const Home = () => {
  return (
    <>
      <nav className="navigation-bar">
        <div className="navigation-bar-container">
          <img className="logo" src="assets/logo.png" alt="Logo" />

          <div className="navigation-bar-links">
            <a href="register.html">Sign in</a>
            <a href="login.html">Login</a>
            <a href="a">Kategori</a>

            <img src="icons/Avatar.png" alt="" />
          </div>
        </div>
      </nav>

      <main className="mainHome">
        <div
          className="frameBackground"
          style={{
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%), url('assets/bg-1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="frameCover">
            <div>
              <h1 className="frameText">
                <img
                  src="./icons/Revolusi Pembelajaran_ Temukan Ilmu Baru melalui Platform Video Interaktif!.png"
                  alt=""
                />
              </h1>
              <p className="frameDescription">
                Temukan ilmu baru yang menarik dan mendalam melalui koleksi
                video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda
                juga dapat berpartisipasi dalam latihan interaktif yang akan
                meningkatkan pemahaman Anda.
              </p>
            </div>
            <button className="frameButton">
              <div className="buttonText">
                Temukan Video Course untuk Dipelajari!
              </div>
            </button>
          </div>
        </div>

        <div>
          <div className="cardSection">
            <div className="cardTitle">
              <h3 className="cardText">Koleksi Video Pembelajaran Unggulan</h3>
              <p className="cardtextLittle">
                Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
              </p>
            </div>
            <div className="tabLittle">
              <div>
                <div
                  className="tabCard"
                  style={{ width: "133px", height: "46px" }}
                >
                  <div className="tabTextfirst">Semua Kelas</div>
                </div>
                <div className="tabUnderline"></div>
              </div>

              <div>
                <div
                  className="tabCard"
                  style={{ width: "121px", height: "46px" }}
                >
                  <div className="tabText">Pemasaran</div>
                </div>
              </div>

              <div>
                <div
                  className="tabCard"
                  style={{ width: "89px", height: "46px" }}
                >
                  <div className="tabText">Desain</div>
                </div>
              </div>

              <div>
                <div
                  className="tabCard"
                  style={{ width: "186px", height: "46px" }}
                >
                  <div className="tabText">Pengembangan Diri</div>
                </div>
              </div>

              <div>
                <div
                  className="tabCard"
                  style={{ width: "81px", height: "46px" }}
                >
                  <div className="tabText">Bisnis</div>
                </div>
              </div>
            </div>

            <div className="card-container">
              <div className="card-item">
                <img className="card-image" src="./assets/foto 1.png" />
                <div className="card-description">
                  <h6 className="text-title">
                    Big 4 Auditor Financial Analyst
                  </h6>
                  <p className="card-textLittle">
                    Mulai transformasi dengan instruktur profesional, harga yang
                    terjangkau, dan kurikulum terbaik
                  </p>
                </div>
                <div className="card-avatar">
                  <img className="avatar-img" src="./icons/Avatar (1).png" />
                  <div
                    className="avatar-cardLittle"
                    style={{ width: "294px", height: "42px" }}
                  >
                    <p className="avatar-title">Jenna Ortega</p>

                    <div className="avatar-little">
                      <p className="avatarText-little">
                        Senior Accountant di Gojek
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-point">
                  <div className="point-box">
                    <div className="point-boxLittle">
                      <p>
                        <div>
                          <img
                            className="star-img"
                            src="./icons/starYellow.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            className="star-img"
                            src="./icons/starYellow.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            style={{ width: "22px", height: "22px;" }}
                            src="./icons/maskedStar.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            className="star-img"
                            src="./icons/starGrey.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            className="star-img"
                            src="./icons/starGrey.png"
                            alt=""
                          />
                        </div>
                      </p>
                    </div>
                    <p className="point-number">3.5 (86)</p>
                  </div>
                  <p className="point-K">Rp 300K</p>
                </div>
              </div>
              <div className="card-item">
                <img className="card-image" src="./assets/foto 2.png" />
                <div className="card-description">
                  <h6 className="text-title">
                    Big 4 Auditor Financial Analyst
                  </h6>
                  <p className="card-textLittle">
                    Mulai transformasi dengan instruktur profesional, harga yang
                    terjangkau, dan kurikulum terbaik
                  </p>
                </div>
                <div className="card-avatar">
                  <img className="avatar-img" src="./icons/Avatar (2).png" />
                  <div
                    className="avatar-cardLittle"
                    style={{ width: "294px", height: "42px" }}
                  >
                    <p className="avatar-title">Jenna Ortega</p>
                    <div className="avatar-little">
                      <p className="avatarText-little">
                        Senior Accountant di Gojek
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-point">
                  <div className="point-box">
                    <div className="point-boxLittle">
                      <p>
                        <div>
                          <img
                            className="star-img"
                            src="./icons/starYellow.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            className="star-img"
                            src="./icons/starYellow.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            style={{ width: "22px", height: "22px" }}
                            src="./icons/maskedStar.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            className="star-img"
                            src="./icons/starGrey.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            className="star-img"
                            src="./icons/starGrey.png"
                            alt=""
                          />
                        </div>
                      </p>
                    </div>
                    <div className="point-number">3.5 (86)</div>
                  </div>
                  <p className="point-K">Rp 300K</p>
                </div>
              </div>

              <div className="card-item">
                <img className="card-image" src="./assets/foto 3.png" />
                <div
                  style={{
                    alignSelf: "stretch",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "8px",
                    display: "flex",
                  }}
                >
                  <h6 className="text-title">
                    Big 4 Auditor Financial Analyst
                  </h6>
                  <p
                    className="card-textLittle"
                    style={{ width: "100% !important" }}
                  >
                    Mulai transformasi dengan instruktur profesional, harga yang
                    terjangkau, dan kurikulum terbaik
                  </p>
                </div>
                <div className="card-avatar">
                  <img className="avatar-img" src="./icons/Avatar (3).png" />
                  <div className="avatar-cardLittle">
                    <p className="avatar-title">Jenna Ortega</p>
                    <div className="avatar-little">
                      <p className="avatarText-little">
                        Senior Accountant di Gojek
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-point">
                  <div className="point-box">
                    <div className="point-boxLittle">
                      <p>
                        <div>
                          <img
                            className="star-img"
                            src="./icons/starYellow.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            className="star-img"
                            src="./icons/starYellow.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            style={{ width: "22px", height: "22px" }}
                            src="./icons/maskedStar.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            className="star-img"
                            src="./icons/starGrey.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            className="star-img"
                            src="./icons/starGrey.png"
                            alt=""
                          />
                        </div>
                      </p>
                    </div>
                    <div className="point-number">3.5 (86)</div>
                  </div>
                  <p className="point-K">Rp 300K</p>
                </div>
              </div>
            </div>

            <div className="card-container">
              <div className="card-item">
                <img className="card-image" src="./assets/foto 4.png" />
                <div className="card-description">
                  <h6 className="text-title">
                    Big 4 Auditor Financial Analyst
                  </h6>
                  <p className="card-textLittle">
                    Mulai transformasi dengan instruktur profesional, harga yang
                    terjangkau, dan kurikulum terbaik
                  </p>
                </div>
                <div className="card-avatar">
                  <img className="avatar-img" src="./icons/Avatar (4).png" />
                  <div className="avatar-cardLittle">
                    <p className="avatar-title">Jenna Ortega</p>
                    <div className="avatar-little">
                      <p className="avatarText-little">
                        Senior Accountant di Gojek
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-point">
                  <div className="point-box">
                    <div className="point-boxLittle">
                      <p>
                        <div>
                          <img
                            className="star-img"
                            src="./icons/starYellow.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            className="star-img"
                            src="./icons/starYellow.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            style={{ width: "22px", height: "22px" }}
                            src="./icons/maskedStar.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            className="star-img"
                            src="./icons/starGrey.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            className="star-img"
                            src="./icons/starGrey.png"
                            alt=""
                          />
                        </div>
                      </p>
                    </div>
                    <div className="point-number">3.5 (86)</div>
                  </div>
                  <p className="point-K">Rp 300K</p>
                </div>
              </div>

              <div className="card-item">
                <img className="card-image" src="assets/foto 5.png" />
                <div className="card-description">
                  <h6 className="text-title">
                    Big 4 Auditor Financial Analyst
                  </h6>
                  <p className="card-textLittle">
                    Mulai transformasi dengan instruktur profesional, harga yang
                    terjangkau, dan kurikulum terbaik
                  </p>
                </div>
                <div className="card-avatar">
                  <img className="avatar-img" src="./icons/Avatar (5).png" />
                  <div
                    className="avatar-cardLittle"
                    style={{ width: "294px", height: "42px" }}
                  >
                    <p className="avatar-title">Jenna Ortega</p>
                    <div className="avatar-littl">
                      <p className="avatarText-little">
                        Senior Accountant di Gojek
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-point">
                  <div className="point-box">
                    <div className="point-boxLittle">
                      <p>
                        <div>
                          <img
                            className="star-img"
                            src="./icons/starYellow.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            className="star-img"
                            src="./icons/starYellow.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            style={{ width: "22px", height: "22px" }}
                            src="./icons/maskedStar.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            className="star-img"
                            src="./icons/starGrey.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            className="star-img"
                            src="./icons/starGrey.png"
                            alt=""
                          />
                        </div>
                      </p>
                    </div>
                    <div className="point-number">3.5 (86)</div>
                  </div>
                  <p className="point-K">Rp 300K</p>
                </div>
              </div>

              <div className="card-item">
                <img className="card-image" src="assets/foto 6.png" />
                <div
                  className="card-description"
                  style={{ width: "100% !important" }}
                >
                  <h6 className="text-title">
                    Big 4 Auditor Financial Analyst
                  </h6>
                  <p
                    className="card-textLittle"
                    style={{ width: "100% !important" }}
                  >
                    Mulai transformasi dengan instruktur profesional, harga yang
                    terjangkau, dan kurikulum terbaik
                  </p>
                </div>
                <div className="card-avatar">
                  <img className="avatar-img" src="./icons/Avatar (6).png" />
                  <div className="avatar-cardLittle">
                    <p className="avatar-title">Jenna Ortega</p>
                    <div className="avatar-little">
                      <p className="avatarText-little">
                        Senior Accountant di Gojek
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-point ">
                  <div className="point-box">
                    <div className="point-boxLittle">
                      <p>
                        <div>
                          <img
                            className="star-img"
                            src="./icons/starYellow.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            className="star-img"
                            src="./icons/starYellow.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            style={{ width: "22px", height: "22px" }}
                            src="./icons/maskedStar.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            className="star-img"
                            src="./icons/starGrey.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            className="star-img"
                            src="./icons/starGrey.png"
                            alt=""
                          />
                        </div>
                      </p>
                    </div>
                    <div className="point-number">3.5 (86)</div>
                  </div>
                  <p className="point-K">Rp 300K</p>
                </div>
              </div>
            </div>

            <div className="card-container">
              <div className="card-item">
                <img className="card-image" src="assets/foto 7.png" />
                <div className="card-description">
                  <h6 className="text-title">
                    Big 4 Auditor Financial Analyst
                  </h6>
                  <p className="card-textLittle">
                    Mulai transformasi dengan instruktur profesional, harga yang
                    terjangkau, dan kurikulum terbaik
                  </p>
                </div>
                <div className="card-avatar">
                  <img className="avatar-img" src="./icons/Avatar (7).png" />
                  <div
                    className="avatar-cardLittle"
                    style={{ width: "294px", height: "42px" }}
                  >
                    <p className="avatar-title">Jenna Ortega</p>
                    <div className="avatar-little">
                      <p className="avatarText-little">
                        Senior Accountant di Gojek
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-point">
                  <div className="point-box">
                    <div className="point-boxLittle">
                      <p>
                        <div>
                          <img
                            className="star-img"
                            src="./icons/starYellow.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            className="star-img"
                            src="./icons/starYellow.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            style={{ width: "22px", height: "22px" }}
                            src="./icons/maskedStar.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            className="star-img"
                            src="./icons/starGrey.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            className="star-img"
                            src="./icons/starGrey.png"
                            alt=""
                          />
                        </div>
                      </p>
                    </div>
                    <div className="point-number">3.5 (86)</div>
                  </div>
                  <p className="point-K">Rp 300K</p>
                </div>
              </div>

              <div className="card-item">
                <img className="card-image " src="assets/foto 8.png" />
                <div className="card-description">
                  <h6 className="text-title">
                    Big 4 Auditor Financial Analyst
                  </h6>
                  <p className="card-textLittle">
                    Mulai transformasi dengan instruktur profesional, harga yang
                    terjangkau, dan kurikulum terbaik
                  </p>
                </div>
                <div className="card-avatar">
                  <img className="avatar-img" src="./icons/Avatar (8).png" />
                  <div
                    className="avatar-cardLittle"
                    style={{ width: "294px", height: "42px" }}
                  >
                    <p className="avatar-title">Jenna Ortega</p>
                    <div className="avatar-little">
                      <p className="avatarText-little">
                        Senior Accountant di Gojek
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-point">
                  <div className="point-box">
                    <div className="point-boxLittle">
                      <p>
                        <div>
                          <img
                            className="star-img"
                            src="./icons/starYellow.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            className="star-img"
                            src="./icons/starYellow.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            style={{ width: "22px", height: "22px" }}
                            src="./icons/maskedStar.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            className="star-img"
                            src="./icons/starGrey.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            className="star-img"
                            src="./icons/starGrey.png"
                            alt=""
                          />
                        </div>
                      </p>
                    </div>
                    <div className="point-number">3.5 (86)</div>
                  </div>
                  <p className="point-K">Rp 300K</p>
                </div>
              </div>

              <div className="card-item">
                <img className="card-image" src="assets/foto 9.png" />
                <div
                  className="card-description"
                  style={{ width: "100% !important" }}
                >
                  <h6 className="text-title">
                    Big 4 Auditor Financial Analyst
                  </h6>
                  <p
                    className="card-textLittle"
                    style={{ width: "100% !important" }}
                  >
                    Mulai transformasi dengan instruktur profesional, harga yang
                    terjangkau, dan kurikulum terbaik
                  </p>
                </div>
                <div className="card-avatar">
                  <img className="avatar-img" src="assets/woman.jpg" />
                  <div className="avatar-cardLittle">
                    <p className="avatar-title">Jenna Ortega</p>
                    <div className="avatar-little">
                      <p className="avatarText-little">
                        Senior Accountant di Gojek
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-point">
                  <div className="point-box">
                    <div className="point-boxLittle">
                      <p>
                        <div>
                          <img
                            className="star-img"
                            src="./icons/starYellow.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            className="star-img"
                            src="./icons/starYellow.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            style={{ width: "22px", height: "22px" }}
                            src="./icons/maskedStar.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            className="star-img"
                            src="./icons/starGrey.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            className="star-img"
                            src="./icons/starGrey.png"
                            alt=""
                          />
                        </div>
                      </p>
                    </div>
                    <div className="point-number">3.5 (86)</div>
                  </div>
                  <p className="point-K">Rp 300K</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="frame2-background"
            style={{
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%), url('assets/bg-2.jpg')",
              boxShadow: "0px 12px 45px -10px rgba(0, 59, 222, 0.2)",
            }}
          >
            <div className="frame2-cover">
              <div className="frame-textbox">
                <p className="frame2-text">NEWSLETTER</p>
                <div
                  className="frame-textbox"
                  style={{ gap: "10px !important" }}
                >
                  <h3 className="frame2-texTitle">Mau Belajar Lebih Banyak?</h3>
                  <p className="frame2-textLittle">
                    Daftarkan dirimu untuk mendapatkan informasi terbaru dan
                    penawaran spesial dari program-program terbaik hariesok.id
                  </p>
                </div>
              </div>
              <div className="frame-Email">
                <input
                  type="text"
                  style={{
                    margin: "0 !important",
                    height: "100% !important",
                    border: "0",
                    flex: "1 1 0",
                    color: "rgba(51, 51, 51, 0.68)",
                    fontWeight: "400",
                  }}
                  placeholder="Masukkan Emailmu"
                />
                <button
                  type="button"
                  style={{
                    padding: "8px 16px !important",
                    background: "#ffbd3a",
                    borderRadius: "10px",
                    border: "0",
                  }}
                >
                  <p style={{ color: "#ffffff", letterSpacing: "0.2px" }}>
                    Subscribe
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer
        style={{
          width: "100%",
          padding: "48px 20px",
          borderTop: "1px rgba(58, 53, 65, 0.12) solid",
          flexDirection: "column",
          alignItems: "center",
          display: "inline-flex",
          background: "#ffffff",
          justifyContent: "flex-start",
          gap: "20px",
          margin: "auto",
        }}
      >
        <div className="footer-container">
          <div className="footer-title">
            <div className="footer-img">
              <img src="./assets/logo.png" />
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
                  srcSet=""
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
                  srcSet=""
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
                  srcSet=""
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
              <img src="./icons/linked.png" alt="" />
            </div>
            <div className="footer-icon">
              <img src="./icons/faceb.png" alt="" />
            </div>
            <div className="footer-icon">
              <img src="./icons/inst.png" alt="" />
            </div>
            <div className="footer-icon">
              <img src="./icons/twit.png" alt="" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
