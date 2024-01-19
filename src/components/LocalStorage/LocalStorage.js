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

const removeSingleSelectedItem = (id) =>{
   const localStorageItems = getItemsFromLocalStorage();
   const leftItems = localStorageItems.filter(item => item !== id)
   localStorage.setItem("shopping-cart", JSON.stringify(leftItems));
}


export {setItemsToLocalStorage,
    getItemsFromLocalStorage,
    clearLocalStorage,
    removeSingleSelectedItem,
};