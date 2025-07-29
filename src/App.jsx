
import React, { useEffect, useState } from "react";
import DataTable from "./components/DataTable.jsx";
import AddEntryForm from "./components/AddEntryForm.jsx";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.ready();
    setUser(tg.initDataUnsafe?.user);
  }, []);

  return (
    <div style={{ padding: 16 }}>
      <h2>Привіт, {user?.first_name || "користувач"} 👋</h2>
      <DataTable />
      <AddEntryForm />
    </div>
  );
}
