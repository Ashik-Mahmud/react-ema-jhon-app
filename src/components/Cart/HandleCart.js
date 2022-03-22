import { StorageItem } from "../LocalStorage/Storage";



/* handle increase cart  */
const handleIncreaseCart = (product, price, setCartQty, cartQty, setStockError, setTotalCartMoney) =>{
    setCartQty(cartQty + 1)

    const items = StorageItem();
    const filteredItem = items?.filter(item => item.id === product.id)
    if(filteredItem[0].quantity > filteredItem[0].stock - 1){
        setStockError(true)
    }else{
        filteredItem[0].quantity =  filteredItem[0].quantity + 1;
        filteredItem[0].price = filteredItem[0].quantity * price;
        setStockError(false)
    }

    localStorage.setItem("shopping-carts",JSON.stringify(items));
    setTotalCartMoney(TotalMoneyFromStorage())

}



/* handle decrease cart  */
const handleDecreaseCart = (product, price, setCartQty, cartQty, setStockError, setTotalCartMoney) =>{
    cartQty > 0 ? setCartQty(cartQty - 1) : setCartQty(1)
    const items = StorageItem();
    const filteredItem = items.filter(item => item.id === product.id)
    if(filteredItem[0].quantity > 1){
        filteredItem[0].quantity =  filteredItem[0].quantity - 1;
        filteredItem[0].price = filteredItem[0].price - price;
        setStockError(false)
    }
    localStorage.setItem("shopping-carts",JSON.stringify(items));
    setTotalCartMoney(TotalMoneyFromStorage())
    
}

const TotalMoneyFromStorage = () =>{
    const items = StorageItem();
    const totalMoney = items.reduce((acc, item) => acc + item.price, 0)
    return totalMoney;
    
    
}




export { handleDecreaseCart, handleIncreaseCart };

