import { StorageItem } from "../LocalStorage/Storage";

const addToCart = (product) =>{
    
    const items = StorageItem();
    items.push(product)
    localStorage.setItem("shopping-carts", JSON.stringify(items))
    

}


export { addToCart };

