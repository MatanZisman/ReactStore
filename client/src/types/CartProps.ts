export interface CartProps 
{ 
    wallet : number;
    setWallet : React.Dispatch<React.SetStateAction<number>>;
    setLoading : React.Dispatch<React.SetStateAction<boolean>>;
}