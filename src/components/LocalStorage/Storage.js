const getDataIntoLocalStorage = () =>{
    const storageData = localStorage.getItem("shopping-carts");
    let shoppingCarts = [];
    if(storageData){
        shoppingCarts = JSON.parse(storageData)
    }
    return shoppingCarts;
}

export { getDataIntoLocalStorage as StorageItem };

