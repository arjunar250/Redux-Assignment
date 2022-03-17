
const Reducer = (state = [],action) => {
    switch(action.type) {
        case "WISH_LIST_ADDER":
                console.log(`payload =`, action.payload);
                if(localStorage.getItem("wishList") === null || localStorage.getItem("wishList") === [] || localStorage.getItem("wishList") === undefined ){
                    let wishList = [];
                    wishList.push(action.payload);
                    localStorage.setItem("wishList", JSON.stringify(wishList));
                  } else {
                    let wishList = JSON.parse(localStorage.getItem("wishList"));
                    wishList.push(action.payload);
                    localStorage.setItem("wishList", JSON.stringify(wishList));
                  }
                window.alert("Added to Wishlist");
                window.location.href(`/whishlist`)
               
        break;

        case "WISH_LIST_REMOVER":

        break;

        default: return state;
    }
}

export default Reducer;
