import { StorageItem } from "../LocalStorage/Storage";

const ShowQuantity = (id) =>{
    const filteredItem = StorageItem().filter(item => item.id === id)
    if(filteredItem[0].quantity){
        return filteredItem[0].quantity;
    }
}

const totalCartPrice = () =>{
    const totalMoney = StorageItem().reduce((acc, item) => acc + item.price, 0)
    return totalMoney;
}



const shippingCharge = () =>{
    const totalMoney = StorageItem().reduce((acc, item) => acc + item.shipping, 0)
    return totalMoney;
}


export { ShowQuantity, totalCartPrice, shippingCharge };

