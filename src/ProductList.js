import { useEffect, useState } from 'react';
import { API } from './globalUrl';
import { Product } from './Product';

export function ProductList() {

  // const Equipment_Data_List = [
  //   {
  //     "id": "01",
  //     "name": "Atomos Shogun Monitor",
  //     "duration": "7 Hours ",
  //     "price": "₹1,500.00",
  //     "image": "https://cdn.shopify.com/s/files/1/1034/1611/products/atomos_atomnjav01_ninja_v_5_4k_1523308823000_1401565_600x.jpg?v=1576016000"
  //   },
  //   {
  //     "id": "02",
  //     "name": "Baby Light",
  //     "duration": "7 Hours ",
  //     "price": "₹500.00",
  //     "image": "https://cdn.shopify.com/s/files/1/0486/4137/6411/products/112_49849e06-9b1c-45ab-9010-4ac0c7938592_590x.jpg?v=1631274821"
  //   },
  //   {
  //     "id": "03",
  //     "name": "BackDrop Stand",
  //     "duration": "7 Hours ",
  //     "price": "₹500.00",
  //     "image": "https://m.media-amazon.com/images/I/51BEEoujfcL._AC_SL1500_.jpg"
  //   },
  //   {
  //     "id": "04",
  //     "name": "Benro Monopad",
  //     "duration": "7 Hours ",
  //     "price": "₹150.00",
  //     "image": "https://ii1.pepperfry.com/media/catalog/product/b/e/800x880/benro-c49t-tripod-benro-c49t-tripod-seyipb.jpg"
  //   },
  //   {
  //     "id": "05",
  //     "name": "Benro Photo Tripod",
  //     "duration": "7 Hours ",
  //     "price": "₹300.00",
  //     "image": "https://m.media-amazon.com/images/I/51NlCVcr9vL._SY450_.jpg"
  //   },
  //   {
  //     "id": "06",
  //     "name": "BestView 17.3Inch HDMI Monitor",
  //     "duration": "7 Hours ",
  //     "price": "₹1,000.00",
  //     "image": "https://cdn.shopify.com/s/files/1/1034/1611/products/feelworld_17_3_p173_9hsd_co_carry_on_broadcast_1560429793_1473465_500x.jpg?v=1576016481"
  //   }
  // ];


  // const data = Equipment_Data_List;

  const [products, setproducts] = useState([]);


    useEffect(() => {

      fetch(`${API}/product`, {method: "GET"})
      .then((data) => data.json())
      .then((cds) => setproducts(cds));

    }, []);
    
  

  return (
    <div className="product-list">
      {products.map((product) => (
        <Product product={product} key={product._id} />
      ))}
    </div>
  );
}
