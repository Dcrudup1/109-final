import { useEffect, useState } from "react";
import "./admin.css";
import DataService from "../services/dataService";

function Admin() {
  const [allProducts, setAllProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [allCoupons, setAllCoupons] = useState([]);
  const [coupons, setCoupons] = useState({});

  useEffect(() => {
    loadCatalog();
  }, []);

  async function loadCatalog() {
    try {
      let service = new DataService();
      let prods = await service.getProduct();
      setAllProducts(prods);
    } catch (error) {
      console.error("Error loading catalog:", error);
    }
  }

  function handleProductForm(e) {
    let text = e.target.value;
    let name = e.target.name;

    let copy = { ...product };
    copy[name] = text;
    setProduct(copy);
  }

  function handleCouponForm(e) {
    let value = e.target.value;
    let name = e.target.name;

    let copy = { ...coupons };
    copy[name] = name === "discount" ? parseFloat(value) : value;
    setCoupons(copy);
  }

  function handleProductSave() {
    console.log("Saving product:", product);
    // Add logic to save the product data
  }

  function handleCouponSave() {
    console.log("Saving coupon:", coupons);
    // Add logic to save the coupon data
  }

  return (
    <div className="admin">
      <h2>Store Administration</h2>

      <div className="parent">
        <section className="product">
          <h3>Register Products</h3>

          <div className="form">
            {/* ... (rest of the code) ... */}
          </div>
        </section>

        <section className="coupons">
          <div className="form">
            <h3>Register Coupons</h3>

            <div className="field">
              {/* ... (rest of the code) ... */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Admin;
