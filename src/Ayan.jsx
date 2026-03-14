import { useState, useEffect } from "react";
import {
  ShoppingCart, X, Menu, Phone, Mail, MapPin,
  Shield, Wrench, BadgeIndianRupee, GraduationCap, Cpu, CreditCard,
  Star, ArrowRight, Laptop, Search, Instagram, Facebook, Twitter,
  CheckCircle, Zap, Clock, Wifi, Plus, Trash2, Edit3, Save, LogIn,
  LogOut, Package, LayoutDashboard, Eye, EyeOff,
  SlidersHorizontal, ChevronDown, ChevronUp, MemoryStick, HardDrive, IndianRupee, ArrowUpDown, RotateCcw
} from "lucide-react";

const ADMIN_PASSWORD = "ayana2025";
const STORAGE_KEY = "ayana_products";

const defaultProducts = [
  { id: 1, name: "HP EliteBook X360 1040 G8", tag: "Touch Screen", brand: "HP", price: 20000, original: 35000, category: "Laptops", specs: "Intel Core i7 · 16GB RAM · 512GB SSD", ram: 16, rom: 512, color: "#00F5A0", active: true },
  { id: 2, name: "HP EliteBook 745 G6", tag: "AMD Ryzen 5 Pro", brand: "HP", price: 20000, original: 35000, category: "Laptops", specs: "Ryzen 5 Pro 3500U · 8GB RAM · 256GB SSD", ram: 8, rom: 256, color: "#00F5A0", active: true },
  { id: 3, name: "Dell Latitude E7470", tag: "Touch Screen", brand: "Dell", price: 14500, original: 15000, category: "Laptops", specs: "Intel Core i5 · 8GB RAM · 256GB SSD", ram: 8, rom: 256, color: "#C8F53C", active: true },
  { id: 4, name: "HP EliteBook 840 G3", tag: "Touch Screen", brand: "HP", price: 15000, original: 18000, category: "Laptops", specs: "Intel Core i5 · 8GB RAM · 256GB SSD", ram: 8, rom: 256, color: "#00F5A0", active: true },
  { id: 5, name: "Dell Latitude 5310", tag: "Touch Screen", brand: "Dell", price: 13700, original: 20000, category: "Laptops", specs: "Intel Core i5 10th Gen · 8GB · 256GB", ram: 8, rom: 256, color: "#C8F53C", active: true },
  { id: 6, name: "HP EliteBook 840 G5", tag: "14.1 Inch", brand: "HP", price: 22999, original: 29999, category: "Laptops", specs: "Intel Core i7 · 16GB RAM · 512GB SSD", ram: 16, rom: 512, color: "#00F5A0", active: true },
  { id: 7, name: "Apple MacBook Pro A1990", tag: "Touch Bar", brand: "Apple", price: 39999, original: 45000, category: "Laptops", specs: "Intel Core i7 · 16GB RAM · 512GB SSD", ram: 16, rom: 512, color: "#E8EDF3", active: true },
  { id: 8, name: "HP EliteBook 830 G6", tag: "360 Rotated", brand: "HP", price: 26999, original: 29999, category: "Laptops", specs: "Intel Core i5 · 8GB RAM · 256GB SSD", ram: 8, rom: 256, color: "#00F5A0", active: true },
  { id: 9, name: "Apple MacBook Pro A1707", tag: "Touch Bar", brand: "Apple", price: 36999, original: 40000, category: "Laptops", specs: "Intel Core i7 · 16GB RAM · 512GB SSD", ram: 16, rom: 512, color: "#E8EDF3", active: true },
  { id: 10, name: "Dell Inspiron 5501", tag: "Like New", brand: "Dell", price: 24999, original: 29999, category: "Laptops", specs: "Intel Core i5 11th Gen · 8GB · 512GB", ram: 8, rom: 512, color: "#C8F53C", active: true },
];

const facilities = [
  { icon: Shield, title: "Warranty Services", desc: "All products come with warranty for added peace of mind." },
  { icon: Wrench, title: "After-Sales Support", desc: "Comprehensive repair & maintenance services post-purchase." },
  { icon: BadgeIndianRupee, title: "Affordable Pricing", desc: "Competitive pricing ensuring best value for money." },
  { icon: GraduationCap, title: "Educational Discounts", desc: "Special discounts for students and educators." },
  { icon: Cpu, title: "Latest Technology", desc: "Stocking latest models to keep you up-to-date." },
  { icon: CreditCard, title: "Financing Options", desc: "Easy EMI and installment plans available." },
];

const brands = ["HP", "Dell", "Apple", "Lenovo", "Asus", "Acer", "Samsung", "Sony"];
const categories = ["All", "Laptops", "Computer", "New Laptop", "Accessories"];
const brandOptions = ["HP", "Dell", "Apple", "Lenovo", "Asus", "Acer", "Samsung", "Other"];
const categoryOptions = ["Laptops", "Computer", "New Laptop", "Accessories", "LED Screen", "Antivirus"];

// ── STORAGE ──────────────────────────────────────────────────────────────────
function loadProducts() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : defaultProducts;
  } catch { return defaultProducts; }
}
function saveProducts(products) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(products)); } catch {}
}

// ── SCROLL ANIMATION ──────────────────────────────────────────────────────────
function useScrollAnim() {
  useEffect(() => {
    const observe = () => {
      const els = document.querySelectorAll(".anim");
      const obs = new IntersectionObserver(
        (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
        { threshold: 0.08 }
      );
      els.forEach((el) => obs.observe(el));
      return obs;
    };
    const obs = observe();
    return () => obs.disconnect();
  });
}

// ── SVG LAPTOP ───────────────────────────────────────────────────────────────
function LaptopSVG({ color = "#00F5A0" }) {
  return (
    <svg viewBox="0 0 200 140" width="100%" style={{ opacity: 0.7 }}>
      <rect x="20" y="10" width="160" height="100" rx="8" fill="#1E2733" stroke={color} strokeWidth="1.5" />
      <rect x="30" y="20" width="140" height="80" rx="4" fill="#0E1318" />
      <rect x="50" y="35" width="60" height="8" rx="3" fill={color} opacity="0.4" />
      <rect x="50" y="50" width="100" height="4" rx="2" fill={color} opacity="0.2" />
      <rect x="50" y="60" width="80" height="4" rx="2" fill={color} opacity="0.2" />
      <rect x="50" y="70" width="90" height="4" rx="2" fill={color} opacity="0.2" />
      <rect x="10" y="112" width="180" height="10" rx="4" fill="#1E2733" stroke={color} strokeWidth="1" />
      <circle cx="100" cy="117" r="3" fill={color} opacity="0.5" />
    </svg>
  );
}

// ── GLOBAL STYLES ─────────────────────────────────────────────────────────────
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { background: #090C10; color: #E8EDF3; font-family: 'DM Sans', sans-serif; overflow-x: hidden; }
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: #090C10; }
    ::-webkit-scrollbar-thumb { background: #00F5A0; border-radius: 2px; }
    input, textarea, select { font-family: 'DM Sans', sans-serif; }
    .anim { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
    .anim.visible { opacity: 1; transform: translateY(0); }
    .card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease; }
    .card-hover:hover { transform: translateY(-5px); box-shadow: 0 20px 50px rgba(0,245,160,0.1); border-color: rgba(0,245,160,0.35) !important; }
    @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
    .float-anim { animation: float 3.5s ease-in-out infinite; }
    @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
    .marquee-track { animation: marquee 22s linear infinite; }
    @keyframes glow { 0%,100% { box-shadow: 0 0 0 0 rgba(0,245,160,0.35); } 50% { box-shadow: 0 0 0 14px rgba(0,245,160,0); } }
    @keyframes fadeIn { from { opacity: 0; transform: scale(0.97); } to { opacity: 1; transform: scale(1); } }
    .fade-in { animation: fadeIn 0.25s ease; }
    .hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
    .product-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(230px, 1fr)); gap: 16px; }
    .facility-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(270px, 1fr)); gap: 16px; }
    .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: start; }
    .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
    .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1.5fr; gap: 32px; }
    .admin-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 16px; }
    .hidden-mobile { display: flex !important; }
    .show-mobile { display: none !important; }
    @media (max-width: 768px) {
      .hero-grid { grid-template-columns: 1fr; }
      .hero-visual { display: none; }
      .about-grid, .contact-grid { grid-template-columns: 1fr; }
      .footer-grid { grid-template-columns: 1fr 1fr; }
      .hidden-mobile { display: none !important; }
      .show-mobile { display: block !important; }
    }
    @media (max-width: 480px) { .footer-grid { grid-template-columns: 1fr; } }
    input:focus, textarea:focus, select:focus { outline: none; border-color: rgba(0,245,160,0.5) !important; box-shadow: 0 0 0 3px rgba(0,245,160,0.08); }
    .neon-btn { background: linear-gradient(135deg,#00F5A0,#C8F53C); color: #090C10; font-weight: 700; border: none; cursor: pointer; transition: all 0.2s; }
    .neon-btn:hover { box-shadow: 0 0 24px rgba(0,245,160,0.45); transform: translateY(-1px); }
    .tag { display:inline-block; background:rgba(0,245,160,0.1); color:#00F5A0; border:1px solid rgba(0,245,160,0.25); font-size:11px; letter-spacing:0.08em; padding:4px 12px; border-radius:999px; font-family:'JetBrains Mono',monospace; text-transform:uppercase; }
  `}</style>
);

// ── ADMIN LOGIN ───────────────────────────────────────────────────────────────
function AdminLogin({ onLogin }) {
  const [pw, setPw] = useState("");
  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    if (pw === ADMIN_PASSWORD) { onLogin(); setErr(false); }
    else { setErr(true); setTimeout(() => setErr(false), 2000); }
  };
  return (
    <div style={{ minHeight: "100vh", background: "#090C10", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <div className="fade-in" style={{ width: "100%", maxWidth: 380, background: "#141A22", border: "1px solid rgba(0,245,160,0.2)", borderRadius: 20, padding: 36 }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ width: 52, height: 52, borderRadius: 14, background: "linear-gradient(135deg,#00F5A0,#C8F53C)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 18, color: "#090C10" }}>AC</div>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, color: "white", fontSize: 22, marginBottom: 6 }}>Admin Panel</h2>
          <p style={{ color: "#4B5563", fontSize: 13 }}>Ayana Computer — Store Management</p>
        </div>
        <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div>
            <label style={{ display: "block", fontSize: 11, color: "#6B7280", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Password</label>
            <div style={{ position: "relative" }}>
              <input type={show ? "text" : "password"} value={pw} onChange={e => setPw(e.target.value)} placeholder="Enter admin password" style={{ width: "100%", padding: "11px 40px 11px 14px", background: "#0E1318", border: `1px solid ${err ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.08)"}`, borderRadius: 10, fontSize: 14, color: "white", transition: "border 0.2s" }} />
              <button type="button" onClick={() => setShow(!show)} style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#4B5563" }}>
                {show ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {err && <p style={{ color: "#EF4444", fontSize: 12, marginTop: 6 }}>Incorrect password. Try again.</p>}
          </div>
          <button type="submit" className="neon-btn" style={{ padding: "12px 0", borderRadius: 10, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
            <LogIn size={15} /> Login to Admin
          </button>
        </form>
        <p style={{ textAlign: "center", color: "#374151", fontSize: 11, marginTop: 20 }}>Default password: <span style={{ color: "#00F5A0", fontFamily: "monospace" }}>ayana2025</span></p>
      </div>
    </div>
  );
}

// ── PRODUCT FORM MODAL ────────────────────────────────────────────────────────
function ProductModal({ product, onSave, onClose }) {
  const empty = { name: "", tag: "", brand: "HP", price: "", original: "", category: "Laptops", specs: "", ram: "", rom: "", color: "#00F5A0", active: true };
  const [form, setForm] = useState(product || empty);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.price || isNaN(form.price) || Number(form.price) <= 0) e.price = "Enter valid price";
    if (!form.original || isNaN(form.original) || Number(form.original) <= 0) e.original = "Enter valid MRP";
    return e;
  };

  const submit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    onSave({ ...form, price: Number(form.price), original: Number(form.original), id: form.id || Date.now() });
  };

  const field = (key, label, type = "text", placeholder = "") => (
    <div>
      <label style={{ display: "block", fontSize: 11, color: "#6B7280", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 7 }}>{label}</label>
      <input type={type} value={form[key]} onChange={e => setForm({ ...form, [key]: e.target.value })} placeholder={placeholder}
        style={{ width: "100%", padding: "10px 12px", background: "#0E1318", border: `1px solid ${errors[key] ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.08)"}`, borderRadius: 8, fontSize: 13, color: "white" }} />
      {errors[key] && <p style={{ color: "#EF4444", fontSize: 11, marginTop: 4 }}>{errors[key]}</p>}
    </div>
  );

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }} onClick={onClose} />
      <div className="fade-in" style={{ position: "relative", width: "100%", maxWidth: 520, background: "#141A22", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: 28, maxHeight: "90vh", overflowY: "auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, color: "white", fontSize: 18 }}>{product ? "Edit Product" : "Add New Product"}</h3>
          <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: "#6B7280" }}><X size={18} /></button>
        </div>
        <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {field("name", "Product Name *", "text", "e.g. HP EliteBook 840 G5")}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div>
              <label style={{ display: "block", fontSize: 11, color: "#6B7280", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 7 }}>Brand</label>
              <select value={form.brand} onChange={e => setForm({ ...form, brand: e.target.value })} style={{ width: "100%", padding: "10px 12px", background: "#0E1318", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, fontSize: 13, color: "white" }}>
                {brandOptions.map(b => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>
            <div>
              <label style={{ display: "block", fontSize: 11, color: "#6B7280", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 7 }}>Category</label>
              <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} style={{ width: "100%", padding: "10px 12px", background: "#0E1318", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, fontSize: 13, color: "white" }}>
                {categoryOptions.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>
          {field("tag", "Tag / Subtitle", "text", "e.g. Touch Screen, Refurbished")}
          {field("specs", "Specifications", "text", "e.g. Intel Core i5 · 8GB RAM · 256GB SSD")}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div>
              <label style={{ display: "block", fontSize: 11, color: "#6B7280", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 7 }}>RAM (GB)</label>
              <select value={form.ram} onChange={e => setForm({ ...form, ram: Number(e.target.value) })} style={{ width: "100%", padding: "10px 12px", background: "#0E1318", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, fontSize: 13, color: "white" }}>
                <option value="">Select RAM</option>
                {[4, 8, 16, 32, 64].map(v => <option key={v} value={v}>{v} GB</option>)}
              </select>
            </div>
            <div>
              <label style={{ display: "block", fontSize: 11, color: "#6B7280", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 7 }}>Storage (GB)</label>
              <select value={form.rom} onChange={e => setForm({ ...form, rom: Number(e.target.value) })} style={{ width: "100%", padding: "10px 12px", background: "#0E1318", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, fontSize: 13, color: "white" }}>
                <option value="">Select Storage</option>
                {[128, 256, 512, 1024].map(v => <option key={v} value={v}>{v >= 1024 ? `${v/1024} TB` : `${v} GB`}</option>)}
              </select>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {field("price", "Selling Price (₹) *", "number", "20000")}
            {field("original", "MRP / Original Price (₹) *", "number", "35000")}
          </div>
          <div>
            <label style={{ display: "block", fontSize: 11, color: "#6B7280", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 7 }}>Accent Color</label>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              {["#00F5A0", "#C8F53C", "#E8EDF3", "#60A5FA", "#F472B6"].map(c => (
                <button key={c} type="button" onClick={() => setForm({ ...form, color: c })} style={{ width: 28, height: 28, borderRadius: "50%", background: c, border: form.color === c ? "3px solid white" : "2px solid transparent", cursor: "pointer", transition: "border 0.2s" }} />
              ))}
              <input type="color" value={form.color} onChange={e => setForm({ ...form, color: e.target.value })} style={{ width: 32, height: 28, borderRadius: 4, border: "1px solid rgba(255,255,255,0.1)", background: "none", cursor: "pointer" }} />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <button type="button" onClick={() => setForm({ ...form, active: !form.active })}
              style={{ width: 42, height: 24, borderRadius: 12, background: form.active ? "linear-gradient(135deg,#00F5A0,#C8F53C)" : "#1E2733", border: "none", cursor: "pointer", position: "relative", transition: "background 0.3s" }}>
              <span style={{ position: "absolute", top: 3, left: form.active ? 21 : 3, width: 18, height: 18, borderRadius: "50%", background: form.active ? "#090C10" : "#374151", transition: "left 0.3s" }} />
            </button>
            <span style={{ fontSize: 13, color: form.active ? "#00F5A0" : "#6B7280" }}>{form.active ? "Visible on store" : "Hidden from store"}</span>
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
            <button type="button" onClick={onClose} style={{ flex: 1, padding: "11px 0", borderRadius: 10, background: "none", border: "1px solid rgba(255,255,255,0.1)", color: "#9CA3AF", fontSize: 14, cursor: "pointer" }}>Cancel</button>
            <button type="submit" className="neon-btn" style={{ flex: 2, padding: "11px 0", borderRadius: 10, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
              <Save size={15} /> {product ? "Save Changes" : "Add Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ── ADMIN PANEL ───────────────────────────────────────────────────────────────
function AdminPanel({ products, onUpdate, onLogout }) {
  const [modal, setModal] = useState(null); // null | "add" | product object
  const [search, setSearch] = useState("");
  const [toast, setToast] = useState("");

  const showToast = (msg) => { setToast(msg); setTimeout(() => setToast(""), 2500); };

  const handleSave = (product) => {
    let updated;
    if (modal === "add" || !product.id || !products.find(p => p.id === product.id)) {
      updated = [...products, { ...product, id: Date.now() }];
      showToast("✓ Product added successfully!");
    } else {
      updated = products.map(p => p.id === product.id ? product : p);
      showToast("✓ Product updated successfully!");
    }
    onUpdate(updated);
    setModal(null);
  };

  const handleDelete = (id) => {
    if (!window.confirm("Delete this product?")) return;
    onUpdate(products.filter(p => p.id !== id));
    showToast("Product deleted.");
  };

  const toggleActive = (id) => {
    onUpdate(products.map(p => p.id === id ? { ...p, active: !p.active } : p));
  };

  const resetDefaults = () => {
    if (!window.confirm("Reset all products to default? This cannot be undone.")) return;
    onUpdate(defaultProducts);
    showToast("✓ Reset to default products.");
  };

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.brand.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  );

  const stats = [
    { label: "Total Products", value: products.length, color: "#00F5A0" },
    { label: "Active", value: products.filter(p => p.active).length, color: "#C8F53C" },
    { label: "Hidden", value: products.filter(p => !p.active).length, color: "#F472B6" },
    { label: "Categories", value: [...new Set(products.map(p => p.category))].length, color: "#60A5FA" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#090C10" }}>
      {/* Toast */}
      {toast && (
        <div style={{ position: "fixed", top: 80, right: 20, zIndex: 300, background: "#141A22", border: "1px solid rgba(0,245,160,0.3)", borderRadius: 10, padding: "12px 20px", color: "#00F5A0", fontSize: 13, fontWeight: 600, boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }} className="fade-in">{toast}</div>
      )}

      {/* Admin Navbar */}
      <div style={{ background: "#0E1318", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "0 20px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg,#00F5A0,#C8F53C)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 13, color: "#090C10" }}>AC</div>
          <div>
            <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, color: "white", fontSize: 15, lineHeight: 1 }}>Admin Panel</div>
            <div style={{ fontSize: 10, color: "#4B5563", fontFamily: "monospace" }}>Ayana Computer</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#9CA3AF", textDecoration: "none", padding: "6px 12px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8 }}>
            <Eye size={13} /> View Store
          </a>
          <button onClick={onLogout} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#EF4444", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 8, padding: "6px 12px", cursor: "pointer" }}>
            <LogOut size={13} /> Logout
          </button>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "28px 20px" }}>
        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 12, marginBottom: 28 }}>
          {stats.map(s => (
            <div key={s.label} style={{ background: "#141A22", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 12, padding: "16px 20px" }}>
              <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 28, color: s.color }}>{s.value}</div>
              <div style={{ fontSize: 11, color: "#6B7280", marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Toolbar */}
        <div style={{ display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap", alignItems: "center" }}>
          <div style={{ position: "relative", flex: 1, minWidth: 200 }}>
            <Search size={13} style={{ position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)", color: "#4B5563" }} />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search products..." style={{ width: "100%", paddingLeft: 32, paddingRight: 12, paddingTop: 9, paddingBottom: 9, background: "#141A22", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, fontSize: 13, color: "white" }} />
          </div>
          <button onClick={resetDefaults} style={{ padding: "9px 16px", borderRadius: 8, background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", color: "#EF4444", fontSize: 12, cursor: "pointer", whiteSpace: "nowrap" }}>Reset Defaults</button>
          <button onClick={() => setModal("add")} className="neon-btn" style={{ padding: "9px 18px", borderRadius: 8, fontSize: 13, display: "flex", alignItems: "center", gap: 6, whiteSpace: "nowrap" }}>
            <Plus size={14} /> Add Product
          </button>
        </div>

        {/* Product Cards */}
        <div className="admin-grid">
          {filtered.map(p => {
            const disc = p.original > p.price ? Math.round((1 - p.price / p.original) * 100) : 0;
            return (
              <div key={p.id} style={{ background: "#141A22", border: `1px solid ${p.active ? "rgba(255,255,255,0.07)" : "rgba(239,68,68,0.15)"}`, borderRadius: 14, overflow: "hidden", opacity: p.active ? 1 : 0.6, transition: "all 0.3s" }} className="card-hover">
                <div style={{ background: "#0E1318", padding: 16, height: 120, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                  <LaptopSVG color={p.color || "#00F5A0"} />
                  {!p.active && <div style={{ position: "absolute", top: 8, left: 8, background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: 6, padding: "2px 8px", fontSize: 10, color: "#EF4444", fontFamily: "monospace" }}>Hidden</div>}
                  {disc > 0 && <div style={{ position: "absolute", top: 8, right: 8, background: "linear-gradient(135deg,#00F5A0,#C8F53C)", color: "#090C10", fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 4 }}>-{disc}%</div>}
                </div>
                <div style={{ padding: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4 }}>
                    <span style={{ fontSize: 10, color: "#6B7280", background: "#0E1318", padding: "2px 7px", borderRadius: 4, fontFamily: "monospace" }}>{p.category}</span>
                    <span style={{ fontSize: 10, color: "#9CA3AF" }}>{p.brand}</span>
                  </div>
                  <h4 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 13, color: "white", margin: "6px 0 3px", lineHeight: 1.3 }}>{p.name}</h4>
                  <p style={{ fontSize: 11, color: "#00F5A0", marginBottom: 3 }}>{p.tag}</p>
                  <p style={{ fontSize: 11, color: "#4B5563", marginBottom: 10, lineHeight: 1.4 }}>{p.specs}</p>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 12 }}>
                    <span style={{ fontFamily: "monospace", fontWeight: 700, color: "white", fontSize: 15 }}>₹{Number(p.price).toLocaleString()}</span>
                    <span style={{ fontSize: 11, color: "#374151", textDecoration: "line-through" }}>₹{Number(p.original).toLocaleString()}</span>
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button onClick={() => toggleActive(p.id)} title={p.active ? "Hide from store" : "Show on store"}
                      style={{ width: 34, height: 34, borderRadius: 8, background: p.active ? "rgba(0,245,160,0.08)" : "rgba(107,114,128,0.08)", border: `1px solid ${p.active ? "rgba(0,245,160,0.2)" : "rgba(107,114,128,0.2)"}`, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: p.active ? "#00F5A0" : "#6B7280" }}>
                      {p.active ? <Eye size={14} /> : <EyeOff size={14} />}
                    </button>
                    <button onClick={() => setModal(p)} style={{ flex: 1, height: 34, borderRadius: 8, background: "rgba(96,165,250,0.08)", border: "1px solid rgba(96,165,250,0.2)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, fontSize: 12, color: "#60A5FA" }}>
                      <Edit3 size={13} /> Edit
                    </button>
                    <button onClick={() => handleDelete(p.id)} style={{ width: 34, height: 34, borderRadius: 8, background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#EF4444" }}>
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 0", color: "#374151" }}>
            <Package size={40} style={{ opacity: 0.2, marginBottom: 12 }} />
            <p style={{ fontSize: 14 }}>No products found</p>
          </div>
        )}
      </div>

      {modal && (
        <ProductModal
          product={modal === "add" ? null : modal}
          onSave={handleSave}
          onClose={() => setModal(null)}
        />
      )}
    </div>
  );
}

// ── STOREFRONT COMPONENTS ─────────────────────────────────────────────────────
function Navbar({ cartCount, onCartOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const links = ["Home", "Products", "Services", "About", "Contact"];
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, transition: "all 0.3s", background: scrolled ? "rgba(14,19,24,0.95)" : "transparent", backdropFilter: scrolled ? "blur(20px)" : "none", borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 20px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg,#00F5A0,#C8F53C)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 13, color: "#090C10" }}>AC</div>
          <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 18, color: "white" }}>Ayana<span style={{ background: "linear-gradient(135deg,#00F5A0,#C8F53C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Computer</span></span>
        </a>
        <div className="hidden-mobile" style={{ gap: 28 }}>
          {links.map(l => <a key={l} href={`#${l.toLowerCase()}`} style={{ color: "#9CA3AF", fontSize: 14, textDecoration: "none", fontWeight: 500 }}>{l}</a>)}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <a href="tel:+917737640042" className="hidden-mobile" style={{ alignItems: "center", gap: 5, fontSize: 12, color: "#9CA3AF", textDecoration: "none" }}><Phone size={13} /> +91 7737640042</a>
          <button onClick={onCartOpen} style={{ position: "relative", padding: 8, background: "none", border: "none", cursor: "pointer", color: "#9CA3AF" }}>
            <ShoppingCart size={20} />
            {cartCount > 0 && <span style={{ position: "absolute", top: -2, right: -2, width: 16, height: 16, borderRadius: "50%", background: "linear-gradient(135deg,#00F5A0,#C8F53C)", color: "#090C10", fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{cartCount}</span>}
          </button>
          <a href="/admin" style={{ padding: "6px 12px", borderRadius: 8, border: "1px solid rgba(0,245,160,0.2)", color: "#00F5A0", fontSize: 11, textDecoration: "none", fontFamily: "monospace" }} className="hidden-mobile">Admin ↗</a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="show-mobile" style={{ padding: 6, background: "none", border: "none", cursor: "pointer", color: "#9CA3AF" }}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div style={{ background: "rgba(14,19,24,0.98)", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "12px 20px 16px", display: "flex", flexDirection: "column", gap: 4 }}>
          {links.map(l => <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)} style={{ color: "#9CA3AF", fontSize: 14, padding: "8px 0", textDecoration: "none" }}>{l}</a>)}
          <a href="/admin" style={{ color: "#00F5A0", fontSize: 12, padding: "8px 0", textDecoration: "none", fontFamily: "monospace" }}>Admin Panel ↗</a>
        </div>
      )}
    </nav>
  );
}

function CartDrawer({ cart, onClose, onRemove, onQty }) {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 100, display: "flex" }}>
      <div style={{ flex: 1, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)" }} onClick={onClose} />
      <div style={{ width: "100%", maxWidth: 360, background: "rgba(14,19,24,0.98)", borderLeft: "1px solid rgba(255,255,255,0.07)", display: "flex", flexDirection: "column", height: "100%" }}>
        <div style={{ padding: 20, borderBottom: "1px solid rgba(255,255,255,0.07)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 18, color: "white" }}>Cart <span style={{ color: "#00F5A0" }}>({cart.length})</span></h2>
          <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: "#9CA3AF" }}><X size={18} /></button>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: 14, display: "flex", flexDirection: "column", gap: 10 }}>
          {cart.length === 0 ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: 200, color: "#4B5563" }}>
              <ShoppingCart size={38} style={{ opacity: 0.25, marginBottom: 10 }} /><p style={{ fontSize: 13 }}>Your cart is empty</p>
            </div>
          ) : cart.map(item => (
            <div key={item.id} style={{ background: "#141A22", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 12, padding: 12, display: "flex", gap: 10 }}>
              <div style={{ width: 56, height: 42, borderRadius: 8, background: "#0E1318", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Laptop size={18} style={{ color: item.color || "#00F5A0" }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: 12, fontWeight: 600, color: "white", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", marginBottom: 2 }}>{item.name}</p>
                <p style={{ fontSize: 12, color: "#00F5A0", fontFamily: "monospace", marginBottom: 6 }}>₹{Number(item.price).toLocaleString()}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  {[[-1,"−"],[1,"+"]].map(([d,l], i) => <>{i === 1 && <span style={{ fontSize: 12, color: "white", minWidth: 16, textAlign: "center" }}>{item.qty}</span>}<button key={d} onClick={() => onQty(item.id, d)} style={{ width: 22, height: 22, borderRadius: 4, border: "1px solid rgba(255,255,255,0.1)", background: "none", color: "white", fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>{l}</button></>)}
                </div>
              </div>
              <button onClick={() => onRemove(item.id)} style={{ background: "none", border: "none", cursor: "pointer", color: "#4B5563", alignSelf: "flex-start" }}><X size={13} /></button>
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <div style={{ padding: 16, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12, fontSize: 14 }}>
              <span style={{ color: "#9CA3AF" }}>Total</span>
              <span style={{ fontFamily: "monospace", fontWeight: 700, color: "#00F5A0", fontSize: 16 }}>₹{total.toLocaleString()}</span>
            </div>
            <a href="tel:+917737640042" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, width: "100%", padding: "12px 0", borderRadius: 12, background: "linear-gradient(135deg,#00F5A0,#C8F53C)", color: "#090C10", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
              <Phone size={14} /> Order via Call
            </a>
            <p style={{ textAlign: "center", color: "#4B5563", fontSize: 11, marginTop: 8 }}>Call us to complete your order</p>
          </div>
        )}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", paddingTop: 64 }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(0,245,160,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,245,160,0.04) 1px,transparent 1px)", backgroundSize: "40px 40px", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "30%", left: "20%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,245,160,0.07),transparent 70%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "60px 20px", width: "100%", position: "relative", zIndex: 1 }} className="hero-grid">
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <span className="tag" style={{ width: "fit-content" }}>Chomu, Jaipur · Est. 2019</span>
          <h1 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(30px,5vw,56px)", lineHeight: 1.12, color: "white" }}>
            Premium Refurbished<br />
            <span style={{ background: "linear-gradient(135deg,#00F5A0,#C8F53C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Laptops & PCs</span><br />
            <span style={{ color: "#9CA3AF", fontSize: "clamp(20px,3.5vw,36px)" }}>at Unbeatable Prices</span>
          </h1>
          <p style={{ color: "#6B7280", fontSize: 15, lineHeight: 1.7, maxWidth: 440 }}>Your trusted source for high-performance refurbished laptops in Chomu. Quality tested, warranty backed, student-friendly pricing.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <a href="#products" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", borderRadius: 12, background: "linear-gradient(135deg,#00F5A0,#C8F53C)", color: "#090C10", fontWeight: 700, fontSize: 14, textDecoration: "none", animation: "glow 2.5s ease-in-out infinite" }}>Browse Products <ArrowRight size={15} /></a>
            <a href="tel:+917737640042" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.12)", color: "#D1D5DB", fontSize: 14, textDecoration: "none" }}><Phone size={15} /> Call Now</a>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
            {[["500+","Customers"],["200+","Products"],["24/7","Support"],["5yr+","Experience"]].map(([v,l]) => (
              <div key={l}><div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 24, background: "linear-gradient(135deg,#00F5A0,#C8F53C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{v}</div><div style={{ fontSize: 11, color: "#6B7280", marginTop: 2 }}>{l}</div></div>
            ))}
          </div>
        </div>
        <div className="hero-visual" style={{ justifyContent: "center", alignItems: "center" }}>
          <div style={{ position: "relative" }} className="float-anim">
            <div style={{ border: "1px solid rgba(0,245,160,0.3)", borderRadius: 20, padding: 4, background: "rgba(20,26,34,0.9)", width: 300 }}>
              <div style={{ borderRadius: 14, overflow: "hidden", background: "#0E1318", padding: 16 }}><LaptopSVG color="#00F5A0" /></div>
              <div style={{ padding: "14px 16px 16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, color: "white", fontSize: 13 }}>HP EliteBook X360 1040 G8</span>
                  <span style={{ background: "linear-gradient(135deg,#00F5A0,#C8F53C)", color: "#090C10", fontSize: 10, fontWeight: 700, padding: "2px 6px", borderRadius: 4, flexShrink: 0, marginLeft: 8 }}>-43%</span>
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 6 }}>
                  <span style={{ fontFamily: "monospace", fontWeight: 700, color: "#00F5A0", fontSize: 18 }}>₹20,000</span>
                  <span style={{ fontSize: 11, color: "#4B5563", textDecoration: "line-through" }}>₹35,000</span>
                </div>
                <div style={{ display: "flex", gap: 2 }}>{[1,2,3,4,5].map(i => <Star key={i} size={11} style={{ fill: "#FBBF24", color: "#FBBF24" }} />)}<span style={{ fontSize: 11, color: "#6B7280", marginLeft: 4 }}>4.9</span></div>
              </div>
            </div>
            <div style={{ position: "absolute", top: -10, right: -50, background: "rgba(14,19,24,0.9)", border: "1px solid rgba(0,245,160,0.2)", borderRadius: 8, padding: "6px 10px", fontSize: 11, color: "#00F5A0", fontFamily: "monospace", whiteSpace: "nowrap" }}><Zap size={9} style={{ display: "inline", marginRight: 4 }} />Warranty Included</div>
            <div style={{ position: "absolute", bottom: -10, left: -50, background: "rgba(14,19,24,0.9)", border: "1px solid rgba(200,245,60,0.2)", borderRadius: 8, padding: "6px 10px", fontSize: 11, color: "#C8F53C", fontFamily: "monospace", whiteSpace: "nowrap" }}><CheckCircle size={9} style={{ display: "inline", marginRight: 4 }} />Quality Tested</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "18px 0", overflow: "hidden", background: "#0E1318" }}>
      <div style={{ display: "flex", width: "max-content" }}>
        <div className="marquee-track" style={{ display: "flex", alignItems: "center", gap: 64, paddingRight: 64 }}>
          {[...brands,...brands].map((b,i) => <span key={i} style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, color: "#374151", fontSize: 18, letterSpacing: "0.12em", whiteSpace: "nowrap" }}>{b}</span>)}
        </div>
      </div>
    </div>
  );
}

function Products({ products, onAddCart }) {
  const [cat, setCat] = useState("All");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [ramFilter, setRamFilter] = useState("All");
  const [romFilter, setRomFilter] = useState("All");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [brandFilter, setBrandFilter] = useState("All");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const active = products.filter(p => p.active !== false);

  // Derive available RAM/ROM/Brand options from active products
  const ramOptions = ["All", ...Array.from(new Set(active.map(p => p.ram).filter(Boolean))).sort((a,b) => a-b).map(v => String(v))];
  const romOptions = ["All", ...Array.from(new Set(active.map(p => p.rom).filter(Boolean))).sort((a,b) => a-b).map(v => String(v))];
  const brandOptions2 = ["All", ...Array.from(new Set(active.map(p => p.brand).filter(Boolean))).sort()];

  const allPrices = active.map(p => p.price);
  const globalMin = allPrices.length ? Math.min(...allPrices) : 0;
  const globalMax = allPrices.length ? Math.max(...allPrices) : 100000;

  const sortOptions = [
    { key: "default", label: "Default" },
    { key: "price_asc", label: "Price: Low to High" },
    { key: "price_desc", label: "Price: High to Low" },
    { key: "discount", label: "Best Discount" },
    { key: "name_asc", label: "Name: A → Z" },
    { key: "name_desc", label: "Name: Z → A" },
  ];

  const hasFilters = cat !== "All" || ramFilter !== "All" || romFilter !== "All" || brandFilter !== "All" || priceMin !== "" || priceMax !== "" || search !== "" || sortBy !== "default";

  const resetAll = () => { setCat("All"); setRamFilter("All"); setRomFilter("All"); setBrandFilter("All"); setPriceMin(""); setPriceMax(""); setSearch(""); setSortBy("default"); };

  let filtered = active.filter(p => {
    const q = search.toLowerCase();
    const matchSearch = !q || p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || (p.specs || "").toLowerCase().includes(q) || (p.tag || "").toLowerCase().includes(q);
    const matchCat = cat === "All" || p.category === cat;
    const matchRam = ramFilter === "All" || String(p.ram) === ramFilter;
    const matchRom = romFilter === "All" || String(p.rom) === romFilter;
    const matchBrand = brandFilter === "All" || p.brand === brandFilter;
    const min = priceMin !== "" ? Number(priceMin) : 0;
    const max = priceMax !== "" ? Number(priceMax) : Infinity;
    const matchPrice = p.price >= min && p.price <= max;
    return matchSearch && matchCat && matchRam && matchRom && matchBrand && matchPrice;
  });

  filtered = [...filtered].sort((a, b) => {
    if (sortBy === "price_asc") return a.price - b.price;
    if (sortBy === "price_desc") return b.price - a.price;
    if (sortBy === "discount") return (b.original - b.price) / b.original - (a.original - a.price) / a.original;
    if (sortBy === "name_asc") return a.name.localeCompare(b.name);
    if (sortBy === "name_desc") return b.name.localeCompare(a.name);
    return 0;
  });

  const Chip = ({ label, active: isActive, onClick }) => (
    <button onClick={onClick} style={{ padding: "6px 12px", borderRadius: 20, fontSize: 12, fontWeight: 500, cursor: "pointer", transition: "all 0.15s", background: isActive ? "linear-gradient(135deg,#00F5A0,#C8F53C)" : "#0E1318", color: isActive ? "#090C10" : "#9CA3AF", border: isActive ? "none" : "1px solid rgba(255,255,255,0.08)", whiteSpace: "nowrap" }}>
      {label}
    </button>
  );

  return (
    <section id="products" style={{ padding: "80px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 20px" }}>

        {/* Header */}
        <div className="anim" style={{ textAlign: "center", marginBottom: 48 }}>
          <span className="tag" style={{ marginBottom: 16 }}>Our Inventory</span>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(26px,4vw,40px)", color: "white", marginBottom: 12 }}>Best Deals on <span style={{ background: "linear-gradient(135deg,#00F5A0,#C8F53C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Laptops & PCs</span></h2>
          <p style={{ color: "#6B7280", fontSize: 14, maxWidth: 480, margin: "0 auto" }}>Premium refurbished laptops — quality tested, warranty backed, prices you'll love.</p>
        </div>

        {/* Search + Sort Bar */}
        <div className="anim" style={{ display: "flex", gap: 10, marginBottom: 14, flexWrap: "wrap", alignItems: "center" }}>
          {/* Search */}
          <div style={{ position: "relative", flex: 1, minWidth: 220 }}>
            <Search size={13} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#4B5563" }} />
            <input
              value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Search by name, brand, specs, tag..."
              style={{ width: "100%", paddingLeft: 34, paddingRight: search ? 32 : 12, paddingTop: 10, paddingBottom: 10, background: "#141A22", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, fontSize: 13, color: "white", boxSizing: "border-box" }}
            />
            {search && (
              <button onClick={() => setSearch("")} style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#6B7280", display: "flex" }}>
                <X size={14} />
              </button>
            )}
          </div>

          {/* Sort dropdown */}
          <div style={{ position: "relative" }}>
            <button onClick={() => { setSortOpen(!sortOpen); setFiltersOpen(false); }} style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 14px", background: sortBy !== "default" ? "rgba(0,245,160,0.08)" : "#141A22", border: `1px solid ${sortBy !== "default" ? "rgba(0,245,160,0.3)" : "rgba(255,255,255,0.08)"}`, borderRadius: 10, fontSize: 12, color: sortBy !== "default" ? "#00F5A0" : "#9CA3AF", cursor: "pointer", whiteSpace: "nowrap" }}>
              <ArrowUpDown size={13} /> {sortOptions.find(s => s.key === sortBy)?.label || "Sort by"}
              <ChevronDown size={12} style={{ transform: sortOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
            </button>
            {sortOpen && (
              <div style={{ position: "absolute", top: "calc(100% + 6px)", right: 0, background: "#141A22", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: 6, zIndex: 30, minWidth: 200, boxShadow: "0 12px 40px rgba(0,0,0,0.5)" }} className="fade-in">
                {sortOptions.map(s => (
                  <button key={s.key} onClick={() => { setSortBy(s.key); setSortOpen(false); }} style={{ display: "block", width: "100%", textAlign: "left", padding: "9px 12px", background: sortBy === s.key ? "rgba(0,245,160,0.1)" : "none", color: sortBy === s.key ? "#00F5A0" : "#9CA3AF", border: "none", borderRadius: 6, fontSize: 13, cursor: "pointer" }}>
                    {s.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Filter toggle */}
          <button onClick={() => { setFiltersOpen(!filtersOpen); setSortOpen(false); }} style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 14px", background: filtersOpen || hasFilters ? "rgba(0,245,160,0.08)" : "#141A22", border: `1px solid ${filtersOpen || hasFilters ? "rgba(0,245,160,0.3)" : "rgba(255,255,255,0.08)"}`, borderRadius: 10, fontSize: 12, color: filtersOpen || hasFilters ? "#00F5A0" : "#9CA3AF", cursor: "pointer", whiteSpace: "nowrap" }}>
            <SlidersHorizontal size={13} /> Filters
            {hasFilters && <span style={{ width: 16, height: 16, borderRadius: "50%", background: "linear-gradient(135deg,#00F5A0,#C8F53C)", color: "#090C10", fontSize: 9, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>✓</span>}
            <ChevronDown size={12} style={{ transform: filtersOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
          </button>

          {hasFilters && (
            <button onClick={resetAll} style={{ display: "flex", alignItems: "center", gap: 5, padding: "10px 12px", background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 10, fontSize: 12, color: "#EF4444", cursor: "pointer", whiteSpace: "nowrap" }}>
              <RotateCcw size={12} /> Reset
            </button>
          )}
        </div>

        {/* Expandable Filter Panel */}
        {filtersOpen && (
          <div className="fade-in" style={{ background: "#141A22", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: 20, marginBottom: 16 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>

              {/* Category */}
              <div>
                <p style={{ fontSize: 10, color: "#6B7280", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>Category</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {categories.map(c => <Chip key={c} label={c} active={cat === c} onClick={() => setCat(c)} />)}
                </div>
              </div>

              {/* Brand */}
              <div>
                <p style={{ fontSize: 10, color: "#6B7280", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>Brand</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {brandOptions2.map(b => <Chip key={b} label={b} active={brandFilter === b} onClick={() => setBrandFilter(b)} />)}
                </div>
              </div>

              {/* RAM */}
              <div>
                <p style={{ fontSize: 10, color: "#6B7280", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10, display: "flex", alignItems: "center", gap: 5 }}>
                  <MemoryStick size={11} /> RAM
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {ramOptions.map(r => <Chip key={r} label={r === "All" ? "All" : `${r} GB`} active={ramFilter === r} onClick={() => setRamFilter(r)} />)}
                </div>
              </div>

              {/* Storage */}
              <div>
                <p style={{ fontSize: 10, color: "#6B7280", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10, display: "flex", alignItems: "center", gap: 5 }}>
                  <HardDrive size={11} /> Storage (SSD)
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {romOptions.map(r => <Chip key={r} label={r === "All" ? "All" : Number(r) >= 1024 ? `${Number(r)/1024} TB` : `${r} GB`} active={romFilter === r} onClick={() => setRomFilter(r)} />)}
                </div>
              </div>

              {/* Price Range */}
              <div style={{ gridColumn: "span 2" }}>
                <p style={{ fontSize: 10, color: "#6B7280", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10, display: "flex", alignItems: "center", gap: 5 }}>
                  <IndianRupee size={11} /> Price Range
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                  <div style={{ position: "relative" }}>
                    <span style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", fontSize: 12, color: "#6B7280" }}>₹</span>
                    <input type="number" value={priceMin} onChange={e => setPriceMin(e.target.value)} placeholder={`Min (${globalMin.toLocaleString()})`}
                      style={{ paddingLeft: 22, paddingRight: 10, paddingTop: 8, paddingBottom: 8, background: "#0E1318", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, fontSize: 12, color: "white", width: 160 }} />
                  </div>
                  <span style={{ color: "#374151", fontSize: 12 }}>to</span>
                  <div style={{ position: "relative" }}>
                    <span style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", fontSize: 12, color: "#6B7280" }}>₹</span>
                    <input type="number" value={priceMax} onChange={e => setPriceMax(e.target.value)} placeholder={`Max (${globalMax.toLocaleString()})`}
                      style={{ paddingLeft: 22, paddingRight: 10, paddingTop: 8, paddingBottom: 8, background: "#0E1318", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, fontSize: 12, color: "white", width: 160 }} />
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {[["Under ₹15K", 0, 15000], ["₹15K–25K", 15000, 25000], ["₹25K–35K", 25000, 35000], ["₹35K+", 35000, ""]].map(([label, min, max]) => (
                      <button key={label} onClick={() => { setPriceMin(String(min)); setPriceMax(String(max)); }}
                        style={{ padding: "6px 10px", borderRadius: 6, fontSize: 11, cursor: "pointer", background: priceMin === String(min) && priceMax === String(max) ? "rgba(0,245,160,0.1)" : "#0E1318", border: `1px solid ${priceMin === String(min) && priceMax === String(max) ? "rgba(0,245,160,0.4)" : "rgba(255,255,255,0.06)"}`, color: priceMin === String(min) && priceMax === String(max) ? "#00F5A0" : "#6B7280" }}>
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category quick pills (always visible) */}
        <div className="anim" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
          {categories.map(c => <Chip key={c} label={c} active={cat === c} onClick={() => setCat(c)} />)}
        </div>

        {/* Results summary */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, flexWrap: "wrap", gap: 8 }}>
          <p style={{ fontSize: 12, color: "#4B5563" }}>
            Showing <span style={{ color: "#00F5A0", fontWeight: 600 }}>{filtered.length}</span> of {active.length} products
            {sortBy !== "default" && <span style={{ color: "#6B7280" }}> · Sorted by {sortOptions.find(s => s.key === sortBy)?.label}</span>}
          </p>
          {/* Active filter tags */}
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {ramFilter !== "All" && <span style={{ background: "rgba(0,245,160,0.08)", border: "1px solid rgba(0,245,160,0.2)", borderRadius: 20, padding: "3px 10px", fontSize: 11, color: "#00F5A0", display: "flex", alignItems: "center", gap: 5 }}>RAM: {ramFilter}GB <button onClick={() => setRamFilter("All")} style={{ background: "none", border: "none", cursor: "pointer", color: "#00F5A0", padding: 0, display: "flex" }}><X size={10} /></button></span>}
            {romFilter !== "All" && <span style={{ background: "rgba(200,245,60,0.08)", border: "1px solid rgba(200,245,60,0.2)", borderRadius: 20, padding: "3px 10px", fontSize: 11, color: "#C8F53C", display: "flex", alignItems: "center", gap: 5 }}>SSD: {Number(romFilter) >= 1024 ? `${Number(romFilter)/1024}TB` : `${romFilter}GB`} <button onClick={() => setRomFilter("All")} style={{ background: "none", border: "none", cursor: "pointer", color: "#C8F53C", padding: 0, display: "flex" }}><X size={10} /></button></span>}
            {brandFilter !== "All" && <span style={{ background: "rgba(96,165,250,0.08)", border: "1px solid rgba(96,165,250,0.2)", borderRadius: 20, padding: "3px 10px", fontSize: 11, color: "#60A5FA", display: "flex", alignItems: "center", gap: 5 }}>{brandFilter} <button onClick={() => setBrandFilter("All")} style={{ background: "none", border: "none", cursor: "pointer", color: "#60A5FA", padding: 0, display: "flex" }}><X size={10} /></button></span>}
            {(priceMin || priceMax) && <span style={{ background: "rgba(244,114,182,0.08)", border: "1px solid rgba(244,114,182,0.2)", borderRadius: 20, padding: "3px 10px", fontSize: 11, color: "#F472B6", display: "flex", alignItems: "center", gap: 5 }}>₹{priceMin||"0"}–{priceMax||"∞"} <button onClick={() => { setPriceMin(""); setPriceMax(""); }} style={{ background: "none", border: "none", cursor: "pointer", color: "#F472B6", padding: 0, display: "flex" }}><X size={10} /></button></span>}
          </div>
        </div>

        {/* Grid */}
        <div className="product-grid">
          {filtered.map((p, i) => {
            const disc = p.original > p.price ? Math.round((1 - p.price / p.original) * 100) : 0;
            return (
              <div key={p.id} className="anim card-hover" style={{ borderRadius: 16, overflow: "hidden", background: "#141A22", border: "1px solid rgba(255,255,255,0.06)", transitionDelay: `${i * 40}ms` }}>
                <div style={{ background: "#0E1318", padding: 16, height: 140, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                  <LaptopSVG color={p.color || "#00F5A0"} />
                  {disc > 0 && <span style={{ position: "absolute", top: 10, left: 10, background: "linear-gradient(135deg,#00F5A0,#C8F53C)", color: "#090C10", fontSize: 10, fontWeight: 700, padding: "3px 7px", borderRadius: 4 }}>-{disc}%</span>}
                  <span style={{ position: "absolute", top: 10, right: 10, background: "rgba(14,19,24,0.8)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 6, padding: "2px 8px", fontSize: 10, color: "#9CA3AF" }}>{p.brand}</span>
                </div>
                <div style={{ padding: 16 }}>
                  <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 13, color: "white", marginBottom: 4, lineHeight: 1.3 }}>{p.name}</h3>
                  <p style={{ fontSize: 11, color: "#00F5A0", marginBottom: 6 }}>{p.tag}</p>

                  {/* RAM / ROM badges */}
                  {(p.ram || p.rom) && (
                    <div style={{ display: "flex", gap: 6, marginBottom: 8, flexWrap: "wrap" }}>
                      {p.ram && <span style={{ display: "flex", alignItems: "center", gap: 3, background: "rgba(0,245,160,0.07)", border: "1px solid rgba(0,245,160,0.15)", borderRadius: 5, padding: "2px 7px", fontSize: 10, color: "#00F5A0", fontFamily: "monospace" }}>
                        <MemoryStick size={9} /> {p.ram}GB RAM
                      </span>}
                      {p.rom && <span style={{ display: "flex", alignItems: "center", gap: 3, background: "rgba(200,245,60,0.07)", border: "1px solid rgba(200,245,60,0.15)", borderRadius: 5, padding: "2px 7px", fontSize: 10, color: "#C8F53C", fontFamily: "monospace" }}>
                        <HardDrive size={9} /> {p.rom >= 1024 ? `${p.rom/1024}TB` : `${p.rom}GB`} SSD
                      </span>}
                    </div>
                  )}

                  <p style={{ fontSize: 11, color: "#4B5563", marginBottom: 12, lineHeight: 1.5 }}>{p.specs}</p>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 12 }}>
                    <span style={{ fontFamily: "monospace", fontWeight: 700, color: "white", fontSize: 16 }}>₹{Number(p.price).toLocaleString()}</span>
                    <span style={{ fontSize: 11, color: "#374151", textDecoration: "line-through" }}>₹{Number(p.original).toLocaleString()}</span>
                    {disc > 0 && <span style={{ fontSize: 10, color: "#00F5A0", fontWeight: 600 }}>Save ₹{(p.original - p.price).toLocaleString()}</span>}
                  </div>
                  <button onClick={() => onAddCart(p)} style={{ width: "100%", padding: "10px 0", borderRadius: 10, background: "linear-gradient(135deg,#00F5A0,#C8F53C)", color: "#090C10", fontWeight: 700, fontSize: 12, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                    <ShoppingCart size={13} /> Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 0", color: "#374151" }}>
            <Laptop size={40} style={{ opacity: 0.2, marginBottom: 12 }} />
            <p style={{ fontSize: 14, marginBottom: 8 }}>No products match your filters</p>
            <button onClick={resetAll} style={{ fontSize: 12, color: "#00F5A0", background: "none", border: "1px solid rgba(0,245,160,0.2)", borderRadius: 8, padding: "8px 16px", cursor: "pointer" }}>Clear all filters</button>
          </div>
        )}
      </div>
    </section>
  );
}

function Facilities() {
  return (
    <section id="services" style={{ padding: "80px 0", background: "#0E1318" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 20px" }}>
        <div className="anim" style={{ textAlign: "center", marginBottom: 48 }}>
          <span className="tag" style={{ marginBottom: 16 }}>Why Choose Us</span>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(26px,4vw,40px)", color: "white" }}>Exceptional Benefits with <span style={{ background: "linear-gradient(135deg,#00F5A0,#C8F53C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Every Purchase</span></h2>
        </div>
        <div className="facility-grid">
          {facilities.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="anim card-hover" style={{ borderRadius: 16, padding: 24, background: "#141A22", border: "1px solid rgba(255,255,255,0.05)", transitionDelay: `${i * 70}ms` }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(0,245,160,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}><Icon size={18} style={{ color: "#00F5A0" }} /></div>
              <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, color: "white", fontSize: 15, marginBottom: 8 }}>{title}</h3>
              <p style={{ color: "#6B7280", fontSize: 13, lineHeight: 1.6 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RepairBanner() {
  return (
    <section style={{ padding: "60px 20px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="anim" style={{ border: "1px solid rgba(0,245,160,0.22)", borderRadius: 24, padding: "clamp(24px,5vw,56px)", background: "linear-gradient(135deg,#0E1318,#141A22)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 300, background: "radial-gradient(circle at right, rgba(0,245,160,0.05), transparent)", pointerEvents: "none" }} />
          <div style={{ position: "relative", display: "flex", flexWrap: "wrap", gap: 32, alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ maxWidth: 560 }}>
              <span className="tag" style={{ marginBottom: 16 }}>Repair Services</span>
              <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(22px,3.5vw,34px)", color: "white", marginBottom: 12, lineHeight: 1.2 }}>Your Trusted <span style={{ background: "linear-gradient(135deg,#00F5A0,#C8F53C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Laptop Repair Experts!</span></h2>
              <p style={{ color: "#6B7280", fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>Hardware, software, performance issues — our skilled technicians fix it all. Available 24×7 in Chomu.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
                {["Free Diagnostics","24×7 Available","Doorstep Service"].map(t => <span key={t} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#9CA3AF" }}><CheckCircle size={13} style={{ color: "#00F5A0" }} />{t}</span>)}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a href="tel:+917737640042" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 12, background: "linear-gradient(135deg,#00F5A0,#C8F53C)", color: "#090C10", fontWeight: 700, fontSize: 14, textDecoration: "none", whiteSpace: "nowrap" }}><Phone size={15} /> Call for Repair</a>
              <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "#4B5563", justifyContent: "center" }}><Clock size={11} style={{ color: "#00F5A0" }} />Response within 30 minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" style={{ padding: "80px 0", background: "#0E1318" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 20px" }} className="about-grid">
        <div className="anim" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <span className="tag" style={{ width: "fit-content" }}>Our Story</span>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(24px,3.5vw,36px)", color: "white", lineHeight: 1.2 }}>Making Technology <span style={{ background: "linear-gradient(135deg,#00F5A0,#C8F53C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Accessible</span> for Everyone</h2>
          <p style={{ color: "#6B7280", fontSize: 14, lineHeight: 1.7 }}>Located in Chomu, Ayana Computers was founded with a single mission: make quality technology accessible to everyone — without compromising on performance or durability.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[["500+","Happy Customers"],["200+","Products in Stock"]].map(([v,l]) => (
              <div key={l} style={{ padding: 16, background: "#141A22", borderRadius: 12, border: "1px solid rgba(255,255,255,0.05)" }}>
                <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 24, background: "linear-gradient(135deg,#00F5A0,#C8F53C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{v}</div>
                <div style={{ fontSize: 11, color: "#6B7280", marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="anim" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[[Cpu,"Custom PC Builds","Build to your exact specs and budget.","#00F5A0","rgba(0,245,160,0.1)"],[GraduationCap,"Student Discounts","Advanced tech made affordable for education.","#C8F53C","rgba(200,245,60,0.1)"],[Wifi,"Remote Support","Diagnostics and software help from anywhere.","#00F5A0","rgba(0,245,160,0.1)"]].map(([Icon,title,desc,c,bg]) => (
            <div key={title} className="card-hover" style={{ padding: 20, background: "#141A22", borderRadius: 16, border: "1px solid rgba(255,255,255,0.05)", display: "flex", gap: 14 }}>
              <div style={{ width: 38, height: 38, borderRadius: 10, background: bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Icon size={17} style={{ color: c }} /></div>
              <div><h4 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 14, color: "white", marginBottom: 5 }}>{title}</h4><p style={{ color: "#6B7280", fontSize: 12, lineHeight: 1.6 }}>{desc}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", msg: "" });
  const [sent, setSent] = useState(false);
  const submit = (e) => { e.preventDefault(); if (!form.name || !form.phone) return; setSent(true); setTimeout(() => setSent(false), 3000); setForm({ name: "", phone: "", msg: "" }); };
  return (
    <section id="contact" style={{ padding: "80px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 20px" }}>
        <div className="anim" style={{ textAlign: "center", marginBottom: 48 }}>
          <span className="tag" style={{ marginBottom: 16 }}>Get In Touch</span>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(26px,4vw,40px)", color: "white" }}>Visit Us or <span style={{ background: "linear-gradient(135deg,#00F5A0,#C8F53C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Call Now</span></h2>
        </div>
        <div className="contact-grid">
          <div className="anim" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[[MapPin,"Address","Near Bharat Petrol Pump, Thana Mode, Chomu, Rajasthan 303702",null],[Phone,"Phone","+91 7737640042  |  +91 9166134806","tel:+917737640042"],[Mail,"Email","support@ayanacomputer.com","mailto:support@ayanacomputer.com"],[Clock,"Hours","Mon–Sat: 9AM–9PM  •  24×7 Repair Support",null]].map(([Icon,lbl,val,href]) => (
              <div key={lbl} style={{ padding: 18, background: "#141A22", borderRadius: 14, border: "1px solid rgba(255,255,255,0.05)", display: "flex", gap: 14 }}>
                <div style={{ width: 36, height: 36, borderRadius: 9, background: "rgba(0,245,160,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Icon size={15} style={{ color: "#00F5A0" }} /></div>
                <div><p style={{ color: "#4B5563", fontSize: 10, fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>{lbl}</p>{href ? <a href={href} style={{ color: "white", fontSize: 13, textDecoration: "none" }}>{val}</a> : <p style={{ color: "white", fontSize: 13, lineHeight: 1.5 }}>{val}</p>}</div>
              </div>
            ))}
          </div>
          <div className="anim">
            <form onSubmit={submit} style={{ background: "#141A22", borderRadius: 20, border: "1px solid rgba(255,255,255,0.05)", padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
              <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, color: "white", fontSize: 18 }}>Send us a message</h3>
              {[["name","Your Name *","text"],["phone","Phone Number *","tel"]].map(([k,ph,t]) => (
                <div key={k}><label style={{ display: "block", fontSize: 10, color: "#6B7280", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 7 }}>{ph}</label><input type={t} value={form[k]} onChange={e => setForm({...form,[k]:e.target.value})} placeholder={ph.replace(" *","")} required={ph.includes("*")} style={{ width: "100%", padding: "10px 12px", background: "#0E1318", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, fontSize: 13, color: "white" }} /></div>
              ))}
              <div><label style={{ display: "block", fontSize: 10, color: "#6B7280", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 7 }}>Message</label><textarea value={form.msg} onChange={e => setForm({...form,msg:e.target.value})} placeholder="Tell us what you're looking for..." rows={4} style={{ width: "100%", padding: "10px 12px", background: "#0E1318", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, fontSize: 13, color: "white", resize: "none" }} /></div>
              <button type="submit" style={{ padding: "12px 0", borderRadius: 10, background: sent ? "rgba(34,197,94,0.2)" : "linear-gradient(135deg,#00F5A0,#C8F53C)", color: sent ? "#4ADE80" : "#090C10", fontWeight: 700, fontSize: 14, border: sent ? "1px solid rgba(74,222,128,0.3)" : "none", cursor: "pointer" }}>{sent ? "✓ Message Sent!" : "Send Message"}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#0E1318", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 20px" }}>
        <div className="footer-grid" style={{ marginBottom: 28 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}><div style={{ width: 30, height: 30, borderRadius: 7, background: "linear-gradient(135deg,#00F5A0,#C8F53C)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 12, color: "#090C10" }}>AC</div><span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, color: "white", fontSize: 16 }}>Ayana<span style={{ background: "linear-gradient(135deg,#00F5A0,#C8F53C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Computer</span></span></div>
            <p style={{ color: "#4B5563", fontSize: 12, lineHeight: 1.6 }}>Your trusted source for budget-friendly laptops and PCs in Chomu, Jaipur.</p>
            <div style={{ display: "flex", gap: 8 }}>{[Instagram,Facebook,Twitter].map((Icon,i) => <a key={i} href="https://www.instagram.com/ayanacomputer/" target="_blank" rel="noreferrer" style={{ width: 30, height: 30, borderRadius: 8, background: "#141A22", border: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center", color: "#4B5563", textDecoration: "none" }}><Icon size={13} /></a>)}</div>
          </div>
          <div><h4 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, color: "white", fontSize: 13, marginBottom: 16 }}>Shop</h4>{["Laptops","Computers","New Laptops","Accessories","LED Screens"].map(l => <a key={l} href="#products" style={{ display: "block", color: "#4B5563", fontSize: 12, textDecoration: "none", marginBottom: 8 }}>{l}</a>)}</div>
          <div><h4 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, color: "white", fontSize: 13, marginBottom: 16 }}>Company</h4>{["About Us","Contact Us","Repair Services","Blog"].map(l => <a key={l} href="#about" style={{ display: "block", color: "#4B5563", fontSize: 12, textDecoration: "none", marginBottom: 8 }}>{l}</a>)}</div>
          <div><h4 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, color: "white", fontSize: 13, marginBottom: 16 }}>Contact</h4><div style={{ display: "flex", flexDirection: "column", gap: 8 }}><p style={{ color: "#4B5563", fontSize: 11, display: "flex", gap: 6, lineHeight: 1.5 }}><MapPin size={11} style={{ color: "#00F5A0", flexShrink: 0, marginTop: 1 }} />Near Bharat Petrol Pump, Chomu, Rajasthan</p><a href="tel:+917737640042" style={{ color: "#4B5563", fontSize: 11, textDecoration: "none", display: "flex", gap: 6, alignItems: "center" }}><Phone size={11} style={{ color: "#00F5A0" }} />+91 7737640042</a></div></div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 20, display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ color: "#374151", fontSize: 11 }}>© 2025 Ayana Computer. All rights reserved.</p>
          <p style={{ color: "#374151", fontSize: 11 }}>Made with <span style={{ color: "#00F5A0" }}>♥</span> in Chomu, Jaipur</p>
        </div>
      </div>
    </footer>
  );
}

// ── MAIN APP ──────────────────────────────────────────────────────────────────
export default function App() {
  const [products, setProducts] = useState(() => loadProducts());
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [page, setPage] = useState(() => window.location.hash === "#admin" ? "admin-login" : "store");
  const [adminAuthed, setAdminAuthed] = useState(false);

  useScrollAnim();

  // Route on hash change
  useEffect(() => {
    const handle = () => {
      if (window.location.hash === "#admin") setPage(adminAuthed ? "admin" : "admin-login");
      else setPage("store");
    };
    window.addEventListener("hashchange", handle);
    return () => window.removeEventListener("hashchange", handle);
  }, [adminAuthed]);

  const updateProducts = (updated) => { setProducts(updated); saveProducts(updated); };

  const addCart = (p) => {
    setCart(prev => { const ex = prev.find(i => i.id === p.id); return ex ? prev.map(i => i.id === p.id ? { ...i, qty: i.qty + 1 } : i) : [...prev, { ...p, qty: 1 }]; });
    setCartOpen(true);
  };

  if (page === "admin-login") return (<><GlobalStyles /><AdminLogin onLogin={() => { setAdminAuthed(true); setPage("admin"); }} /></>);
  if (page === "admin") return (<><GlobalStyles /><AdminPanel products={products} onUpdate={updateProducts} onLogout={() => { setAdminAuthed(false); window.location.hash = ""; setPage("store"); }} /></>);

  return (
    <>
      <GlobalStyles />
      <Navbar cartCount={cart.reduce((s,i) => s + i.qty, 0)} onCartOpen={() => setCartOpen(true)} />
      {cartOpen && <CartDrawer cart={cart} onClose={() => setCartOpen(false)} onRemove={id => setCart(p => p.filter(i => i.id !== id))} onQty={(id,d) => setCart(p => p.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty + d) } : i))} />}
      <Hero />
      <Marquee />
      <Products products={products} onAddCart={addCart} />
      <Facilities />
      <RepairBanner />
      <About />
      <Contact />
      <Footer />
      <a href="https://wa.me/917737640042?text=Hi%2C%20I%27m%20interested%20in%20buying%20a%20laptop" target="_blank" rel="noreferrer" style={{ position: "fixed", bottom: 24, right: 24, zIndex: 40, width: 52, height: 52, borderRadius: 14, background: "linear-gradient(135deg,#25D366,#128C7E)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 20px rgba(37,211,102,0.3)", animation: "glow 2.5s ease-in-out infinite", textDecoration: "none" }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </>
  );
}