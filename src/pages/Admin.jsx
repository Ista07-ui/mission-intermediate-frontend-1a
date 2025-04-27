import "../styles/admin.css";
import React, { useEffect, useRef, useState } from "react";
import CardItem from "../components/CardItem";
import {
  createProduct,
  editProduct,
  fetchProducts,
  removeProduct,
} from "../store/redux/productSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Footer from "../components/Footer";

export default function Admin() {
  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    price: "",
    photo: "",
    avatar: "",
    rolementor: "",
    mentor: "",
    mentorId: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.items);

  const formRef = useRef(null);

  useEffect(() => {
    dispatch(fetchProducts()).unwrap();
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      // tampilkan semua produk saat input kosong
    }
  }, [searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();

    setSearchTerm(e.target.value);
    dispatch(fetchProducts(e.target.value)).unwrap();
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId) {
      dispatch(editProduct({ id: editingId, data: form })).unwrap();
    } else {
      dispatch(
        createProduct({ ...form, createdAt: new Date().toISOString() })
      ).unwrap();
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
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Apakah kamu yakin ingin menghapus data ini?"
    );

    if (confirmDelete) {
      try {
        await dispatch(removeProduct(id)).unwrap();
        toast.success("Data berhasil dihapus!");
      } catch {
        toast.error("Terjadi kesalahan saat menghapus data.");
      }
    }
  };

  const handleEdit = (item) => {
    setForm(item);
    setEditingId(item.id);

    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main>
        <div className="admin-container">
          <div ref={formRef}>
            <h1 className="admin-title">Admin Produk</h1>

            {/* FORM TAMBAH / UPDATE */}
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
          </div>

          {/* FORM SEARCH */}
          <div style={{ marginTop: "20px" }}>
            <input
              type="text"
              placeholder="Cari Produk..."
              value={searchTerm}
              onChange={handleSearch}
              className="input-field"
            />
          </div>

          {/* LIST PRODUK */}
          <section className="cardSection">
            <div className="card-container">
              {products?.map((Product) => (
                <CardItem
                  {...Product}
                  key={Product.id}
                  isEdit
                  handleEdit={() => handleEdit(Product)}
                  handleDelete={() => handleDelete(Product.id)}
                />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
