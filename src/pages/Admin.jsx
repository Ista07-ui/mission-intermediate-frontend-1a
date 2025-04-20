import "../styles/admin.css";
import React, { useEffect, useState } from "react";
import {
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../service/api.js";
import CardItem from "../components/CardItem";

export default function Admin() {
  const [products, setProduct] = useState([]);
  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    mentor: "",
    rolementor: "",
    price: "",
    photo: "",
    avatar: "",
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    const data = await getProduct();
    setProduct(data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await updateProduct(editingId, form);
    } else {
      await addProduct({ ...form, createdAt: new Date().toISOString() });
    }
    setForm({
      title: "",
      subtitle: "",
      mentor: "",
      rolementor: "",
      price: "",
      photo: "",
      avatar: "",
    });
    setEditingId(null);
    loadProduct();
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    loadProduct();
  };

  const handleEdit = (item) => {
    setForm(item);
    setEditingId(item.id);
  };

  return (
    <>
      <main>
        <div className="admin-container">
          <h1 className="admin-title">Admin Produk</h1>
          <form onSubmit={handleSubmit} className="admin-form">
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Judul Produk"
              className="input"
            />
            <input
              name="subtitle"
              value={form.subtitle}
              onChange={handleChange}
              placeholder="Subjudul"
              className="input"
            />
            <input
              name="mentor"
              value={form.mentor}
              onChange={handleChange}
              placeholder="Mentor"
              className="input"
            />
            <input
              name="rolementor"
              value={form.rolementor}
              onChange={handleChange}
              placeholder="Role Mentor"
              className="input"
            />
            <input
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="Harga"
              className="input"
            />
            <input
              name="photo"
              value={form.photo}
              onChange={handleChange}
              placeholder="Link Foto"
              className="input"
            />
            <input
              name="avatar"
              value={form.avatar}
              onChange={handleChange}
              placeholder="Link Avatar"
              className="input"
            />
            <button type="submit" className="btn">
              {editingId ? "Update Produk" : "Tambah Produk"}
            </button>
          </form>

          <div>
            {products.map((Product) => (
              <div key={Product.id} className="card">
                <CardItem {...Product} />
                <div className="card-buttons">
                  <button
                    className="btn-edit"
                    onClick={() => handleEdit(Product)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => handleDelete(Product.id)}
                  >
                    Hapus
                  </button>
                </div>
              </div>
            ))}
          </div>
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
}
