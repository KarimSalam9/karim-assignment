import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import Team from "./Team/Team";
import Work from "./Work/Work";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Team></Team>
      <Work></Work>
      <Footer></Footer>
    </div>
  );
}

export default App;
