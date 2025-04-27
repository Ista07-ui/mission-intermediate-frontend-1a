import React from "react";

const Footer = () => {
  return (
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
  );
};

export default Footer;
