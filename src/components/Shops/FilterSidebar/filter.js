
/* by searching name */
const searchByName = (search, products, setSearchedProduct) =>{
    const filteredBySearch = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
    setSearchedProduct(filteredBySearch);
}


/* by category name  */
const getByCategoryName = (category, products, setSearchedProduct) =>{
    const filteredByCategoryName = products.filter(product => product.category === category)
    setSearchedProduct(filteredByCategoryName);
}


/* by brand name  */
const getByBrandName = (brand, products, setSearchedProduct) =>{
    const filteredByBrandName = products.filter(product => product.seller === brand)
    setSearchedProduct(filteredByBrandName);
}


/* by ratings  */
const getByRatings = (star, products, setSearchedProduct) =>{
    const filteredByRatings = products.filter(product => product.ratings === star)
    setSearchedProduct(filteredByRatings);
}

/* get a category */ 
const getCategory = (products) =>{
    const categories = products.map(product=> product.category)
    let uniqCategories = [];
    for(let i = 0; i < categories.length; i++){
        const element = categories[i];
        if(!uniqCategories.includes(element)){
            uniqCategories.push(element)
        }
    }   
    return uniqCategories;
}

/* get brands */
const getBrand = (products) => {
    const brand = products.map(seller => seller.seller)
    let uniqBrands = [];
    for(let i = 0; i < brand.length; i++){
        const element = brand[i];
        if(!uniqBrands.includes(element)){
            uniqBrands.push(element)
        }
    }   
    return uniqBrands;
}


/* get brands */
const getRatings = (products) => {
    const ratings = products.map(ratings => ratings.ratings)
    let uniqRatings = [];
    for(let i = 0; i < ratings.length; i++){
        const element = ratings[i];
        if(!uniqRatings.includes(element)){
            uniqRatings.push(element)
        }
    }   
    return uniqRatings;
}






export { searchByName, getCategory, getBrand, getRatings, getByCategoryName, getByBrandName, getByRatings };

