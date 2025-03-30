import './App.css'
import React, {useState} from "react";
import Header from "./components/Header";
import SubHeader from './components/SubHeader';
import Home from './components/Home';
import Cart from './components/Cart';

const App: React.FC = () => {

  const [wallet, setWallet] = useState(2000000);

  const [activeTab, setActiveTab] = useState<"home" | "cart">("home");
  return (
    <>
      <Header wallet = { wallet }/>
      <SubHeader activeTab = { activeTab } setActiveTab={ setActiveTab }/>
      {activeTab === "home" ? <Home/> : <Cart wallet = { wallet } setWallet = {setWallet}/>}
    </>
  )
}

export default App
