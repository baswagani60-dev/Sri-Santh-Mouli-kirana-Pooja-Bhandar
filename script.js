function showStore(storeId) {
    const stores = document.querySelectorAll(".store");
    stores.forEach(store => store.classList.add("hidden"));

    document.getElementById(storeId).classList.remove("hidden");
}
