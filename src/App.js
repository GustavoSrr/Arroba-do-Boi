import Header from "./components/Header/index";
import Content from "./components/Content/index";
import Footer from "./components/Footer/index";

import "./App.css";

function App() {
  return (
    <>
      <div className="main">
        <Header />
        <Content />
      </div>
      <Footer />
    </>
  );
}

export default App;
