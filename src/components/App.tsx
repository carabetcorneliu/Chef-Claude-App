import Header from "./Header.tsx";
import Main from "./Main.tsx";
import Footer from "./Footer.tsx";
// global-utility css, backgroundcolor
import "./App.css";

export default function App() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
