import "../styles/home.css";
import React from "react";
import CardItem from "../components/CardItem";
import { useEffect } from "react";
import { fetchProducts } from "../store/redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";

function Home() {
  const ReadData = () => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) return { name: "", email: "", nohp: "" };

    const { name, email, nohp } = JSON.parse(loggedInUser);
    console.log({
      name,
      email,
      nohp,
    });

    return {
      name: name,
      email: email,
      nohp: nohp,
    };
  };

  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.items);

  useEffect(() => {
    dispatch(fetchProducts()).unwrap();
  }, []);

  return (
    <>
      <main>
        <section className="frameBackground">
          <div className="hero">
            <div className="frameCover">
              <div>
                <h1 className="frameText">
                  Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform
                  Video Interaktif!
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
        </section>

        <section className="cardSection">
          <div className="cardTitle">
            <h3 className="cardText">Koleksi Video Pembelajaran Unggulan</h3>
            <p className="cardTextSubtitle">
              Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
            </p>
          </div>
          <div className="tabs">
            <div className="customFlex">
              <div className="tabLink">
                <div className="tabLinkTitle">Semua Kelas</div>
                <div className="tabUnderline"></div>
              </div>

              <div className="tabLink">
                <a href="a" className="tabText">
                  Pemasaran
                </a>
              </div>

              <div className="tabLink">
                <a href="a" className="tabText">
                  Desain
                </a>
              </div>

              <div className="tabLink">
                <a href="a" className="tabText">
                  Pengembangan Diri
                </a>
              </div>

              <div className="tabLink">
                <a href="a" className="tabText">
                  Bisnis
                </a>
              </div>
            </div>

            {ReadData().name ? (
              <div className="admin-button-wrapper">
                <button
                  className="admin-button"
                  onClick={() => (window.location.href = "/admin")}
                >
                  Admin
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>

          <div className="card-container">
            {products.map((product) => (
              <CardItem
                key={product.id}
                id={product.id}
                title={product.title}
                subtitle={product.subtitle}
                avatar={product.avatar}
                mentor={product.mentor}
                rolementor={product.rolementor}
                price={product.price}
                photo={product.photo}
              />
            ))}
          </div>
        </section>

        <section className="frame2-background">
          <div className="heroFooter">
            <div className="frame2-cover">
              <div className="frame-textbox">
                <p className="frame2-text">NEWSLETTER</p>
                <div className="frame-textbox">
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
                <button type="button">
                  <p style={{ color: "#ffffff", letterSpacing: "0.2px" }}>
                    Subscribe
                  </p>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;
