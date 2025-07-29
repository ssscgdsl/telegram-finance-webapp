
import React, { useEffect, useState } from "react";

export default function DataTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://n8n.yourdomain.com/webhook/get-finance")
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error("Помилка отримання даних:", err));
  }, []);

  return (
    <div>
      <h3>📊 Список транзакцій</h3>
      <ul>
        {data.map((item, i) => (
          <li key={i}>
            {item.date} - {item.name} - 💸 {item.amount} грн
          </li>
        ))}
      </ul>
    </div>
  );
}
