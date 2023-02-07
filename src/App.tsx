import "./assets/style/main.scss";
import logo from "./assets/img/logo.png";

function App() {
  return (
    <>
      <div className="header">
        <a href="#">
          <div className="logo">
            <img src={logo} />
            <div className="header-title">
              <div className="upper-title">BLOCKSTER</div>
              <div className="lower-title">early access</div>
            </div>
          </div>
        </a>
        <div className="search">search</div>
        <div className="misc">misc</div>
      </div>
    </>
  );
}

export default App;
