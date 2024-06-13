import Main from "./components/Main";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <div className="app">
        <header className="app-header">
          <h1>Il mio Blog</h1>
        </header>
        <Main />
        <Footer />
      </div>
    </>
  );
};

export default App;
