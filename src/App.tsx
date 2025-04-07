import './App.css'
import React, {useState} from "react";
import Header from "./components/Header";
import SubHeader from './components/SubHeader';
import Home from './components/Home Page/Home';
import Cart from './components/Cart Page/Cart';

const App: React.FC = () => {

  const [wallet, setWallet] = useState(2000000);

  const [loading, setLoading] = React.useState(false);

  const [activeTab, setActiveTab] = useState<"home" | "cart">("home");
  return (
    <>
      <Header loading = { loading } wallet = { wallet }/>
      <SubHeader activeTab = { activeTab } setActiveTab={ setActiveTab }/>
      {activeTab === "home" ? <Home/> : <Cart wallet = { wallet } setWallet = {setWallet}
       setLoading = { setLoading } />}
    </>
  )
}

export default App
