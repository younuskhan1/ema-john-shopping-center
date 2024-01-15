const getItemsFromLocalStorage = () =>{
    return localStorage.getItem("shopping-cart") ?
    JSON.parse(localStorage.getItem("shopping-cart")) : [];
}

const setItemsToLocalStorage = (id) =>{
    const priorItemsOfLS = getItemsFromLocalStorage();
    const totalItemsOfLS = [...priorItemsOfLS, id]
    localStorage.setItem("shopping-cart", JSON.stringify(totalItemsOfLS));
}

const clearLocalStorage =()=>{
    const allItemsOfLS = getItemsFromLocalStorage();
    localStorage.clear(allItemsOfLS);
}


export {setItemsToLocalStorage,
    getItemsFromLocalStorage,
    clearLocalStorage,
};