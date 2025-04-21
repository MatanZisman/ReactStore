import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import {Tab} from "./types/Tab";

const App = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<Tab>("home");

  const pages: Record<Tab, React.ReactNode> = {
    home: <Home />,
    cart: <Cart setLoading={setLoading} />,
  };

  return (
    <>
      <Header loading={loading} />
      <SubHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {pages[activeTab]}
    </>
  );
};

export default App;
