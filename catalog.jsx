import Product from "../components/product";
import "./catalog.css";
import DataService from "../services/dataService";
import { useEffect, useState } from "react";



function Catalog() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [prodsToDisplay, setprodsToDisplay] = useState([]);

  useEffect(() => {
    console.log("component is loaded");
    loadCatalog();
  }, []);

  async function loadCatalog() {
    let service = new DataService();
    let prods = await service.getProduct(); // Add await here
    setProducts(prods);
    console.log(prods);
    let categ = ["fruit", "vegetables"]; // Correct the spelling of "vegetables"
    setCategories(categ);
    setprodsToDisplay(prods);
  }

  function filter(category) {
    console.log(category);

    let list = [];
    for (let i = 0; i < products.length; i++) {
      let prods = products[i];
      if (prods.category === category) {
        list.push(prods);
      }
    }

    setprodsToDisplay(list);
    console.log(list);
  }

  function clearFilters() {
    setprodsToDisplay(products);
  }

  return (
    <div className="catalog-container page">
      <h1>Check out our {products.length} new products</h1>
      <button onClick={clearFilters} className="btn btn-sm btn-dark">
        all
      </button>
      {categories.map((arrowCategories) => (
        <button
          key={arrowCategories}
          onClick={() => filter(arrowCategories)}
          className="btn btn-sm btn-primary btn-filter"
        >
          {arrowCategories}
        </button>
      ))}
      <br />
      {prodsToDisplay.map((arrowProduct) => (
        <Product key={arrowProduct._id} data={arrowProduct} />
      ))}
    </div>
  );
}

export default Catalog;
