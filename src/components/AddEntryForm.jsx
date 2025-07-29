
import React, { useState } from "react";

export default function AddEntryForm() {
  const [form, setForm] = useState({
    name: "",
    amount: "",
    category: "Інше",
    account: "Карта"
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tg = window.Telegram.WebApp;
    const payload = {
      ...form,
      telegram_id: tg.initDataUnsafe?.user?.id
    };

    const res = await fetch("https://n8n.yourdomain.com/webhook/add-finance", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      alert("✅ Додано успішно!");
    } else {
      alert("❌ Помилка додавання.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
      <h3>➕ Додати витрату</h3>
      <input name="name" placeholder="Назва" onChange={handleChange} required />
      <input name="amount" placeholder="Сума" type="number" onChange={handleChange} required />
      <select name="category" onChange={handleChange}>
        <option>Продукти</option>
        <option>Транспорт</option>
        <option>Інше</option>
      </select>
      <button type="submit">Додати</button>
    </form>
  );
}
