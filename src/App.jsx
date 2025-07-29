export default function App() {
  const tg = window.Telegram.WebApp;
  tg.ready();
  const user = tg.initDataUnsafe?.user;

  return (
    <div style={{ padding: 16 }}>
      <h2>Привіт, {user?.first_name || "користувач"} 👋</h2>
      <p>Це шаблон Telegram WebApp на базі Vite + React</p>
    </div>
  );
}
