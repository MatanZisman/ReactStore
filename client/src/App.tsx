import './App.css'
import React, {useState} from "react";
import Header from "./components/Header";
import SubHeader from './components/SubHeader';
import Home from './components/Home';
import Cart from './components/Cart';

const App: React.FC = () => {

  const [activeTab, setActiveTab] = useState<"home" | "cart">("home");

  return (
    <>
      <Header/>
      <SubHeader setActiveTab={setActiveTab} />
      {activeTab === "home" ? <Home/> : <Cart/>}
    </>
  )
}

export default App
