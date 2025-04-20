import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import {Tab} from "./types/Tab";

const App = () => {
  const [wallet, setWallet] = useState(2000000);
  const [loading, setLoading] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<Tab>("home");

  const pages: Record<Tab, React.ReactNode> = {
    home: <Home />,
    cart: <Cart wallet={wallet} setWallet={setWallet} setLoading={setLoading} />,
  };

  return (
    <>
      <Header loading={loading} wallet={wallet} />
      <SubHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {pages[activeTab]}
    </>
  );
};

export default App;
