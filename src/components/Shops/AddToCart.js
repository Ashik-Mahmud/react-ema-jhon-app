import { StorageItem } from "../LocalStorage/Storage";

const addToCart = (product) =>{
    
    const items = StorageItem();
    product.quantity = 1;
    product.mainPrice = product.price;
    items.push(product)
    localStorage.setItem("shopping-carts", JSON.stringify(items))
    

}


export { addToCart };

