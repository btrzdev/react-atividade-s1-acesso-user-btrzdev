import "./style.css";
export default function RestrictedPage({ isLoggedIn, user, login, logout }) {
  return isLoggedIn ? (
    <div className="title">
      <h1> Bem vindo(a), {user}</h1>
      <button onClick={logout}>Sair</button>
    </div>
  ) : (
    <div className="title">
      <h1> Você não pode acessar essa página</h1>
      <button onClick={login}>Entrar</button>
    </div>
  );
}
