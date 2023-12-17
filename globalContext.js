import { createContext } from "react";


const Globalcontext = createContext({
Cart: [],
user: {},
addProductTocart: () => {},
removeProductFromcart: () => {},
});

export default Globalcontext;