"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import CommentForm from "../components/CommentForm";
import CommentList from "../components/CommentList";
import RatingForm from "../components/RatingForm";
import RatingDisplay from "../components/RatingDisplay";
import Chatbot from "../components/Chatbot";
import { motion } from "framer-motion";

const portfolioItems = [
  {
    title: "Website Toko Furniture",
    description:
      "Website e-commerce furniture dengan fitur login, register, CRUD produk, dan dashboard admin.",
    link: "/projects/website-furniture",
    year: "2024",
  },
  {
    title: "Sistem PMB Multi Role",
    description:
      "Sistem Penerimaan Mahasiswa Baru dengan login multi-role (petugas, kaprodi, pimpinan).",
    link: "/projects/pmb-system",
    year: "2023",
  },
  {
    title: "CV Online React",
    description:
      "Landing page profesional interaktif menampilkan data diri dan projek dengan desain modern.",
    link: "/projects/cv-online",
    year: "2025",
  },
];

export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [newComment, setNewComment] = useState(null);
  const [refreshRating, setRefreshRating] = useState(0);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <Navbar />

      {/* Biodata Section */}
      <section
        id="about"
        className="flex flex-col items-center justify-center text-center p-8"
      >
        <img
          src="images2.jpg"
          alt="Foto Profil"
          className="w-32 h-32 rounded-full mb-4 shadow-lg"
        />
        <h1 className="text-3xl font-bold mb-2">Hai, saya Nova</h1>
        <div className="text-left bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md w-full max-w-md">
          <p><strong>Nama:</strong> Nova Khairunnisa Nurulaini</p>
          <p><strong>Email:</strong> nova.k.nurulaini@gmail.com</p>
          <p><strong>Keahlian:</strong> Web Development, Penulisan, AI Assistant</p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="p-8 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Pengalaman & Karya</h2>
        <div className="relative border-l-4 border-blue-500 dark:border-blue-300 ml-4 space-y-10">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="pl-6 relative"
            >
              <div className="absolute w-4 h-4 bg-blue-500 dark:bg-blue-300 rounded-full left-[-10px] top-2" />
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.year}</p>
              <a
                href={item.link}
                className="text-xl font-semibold text-blue-700 dark:text-blue-400 hover:underline"
              >
                {item.title}
              </a>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comment Section */}
      <section id="comments" className="p-6 max-w-2xl mx-auto">
        <h2 className="text-xl font-bold mb-4 text-center">Komentar</h2>
        <CommentForm onCommentAdded={setNewComment} />
        <CommentList newComment={newComment} />
      </section>

      {/* Rating Section */}
      <section id="rating" className="p-6 max-w-2xl mx-auto">
        <h2 className="text-xl font-bold text-center">Beri Rating Website Ini</h2>
        <RatingForm onRatingSubmitted={() => setRefreshRating((r) => r + 1)} />
        <RatingDisplay refreshTrigger={refreshRating} />
      </section>

      {/* Contact Section */}
      <section id="contact" className="text-center p-6 text-sm">
        &copy; 2025 Nova – Semua Hak Dilindungi
      </section>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-4 left-4 bg-blue-600 text-white dark:bg-gray-800 dark:text-gray-300 px-4 py-2 rounded-full shadow-lg transition-all duration-300"
      >
        {isDarkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>

      {/* ✅ Chatbot */}
      <Chatbot />
    </div>
  );
}
