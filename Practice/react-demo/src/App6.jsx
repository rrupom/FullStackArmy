import { useState } from "react";

const productList = [
  {
    id: 111,
    name: "keyboard",
    stock: 10,
    price: 2000,
  },
  {
    id: 112,
    name: "Mouse",
    stock: 5,
    price: 1500,
  },
  {
    id: 113,
    name: "Headphone",
    stock: 8,
    price: 2500,
  },
];

const TableRow = ({
  id,
  name,
  stock,
  price,
  quantity,
  total,
  increment,
  decrement,
}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{stock}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{total}</td>
      <td>
        <button onClick={() => increment(id)} disabled={stock == 0}>
          +
        </button>
        <button onClick={() => decrement(id)} disabled={quantity == 0}>
          -
        </button>
      </td>
    </tr>
  );
};

const App = () => {
  const [products, setProducts] = useState(
    productList.map((product) => ({
      ...product,
      quantity: 0,
      total: 0,
    }))
  );

  const incrementQuantity = (id) => {
    const newProducts = products.map((product) => {
      if (product.id == id && product.stock > 0) {
        product.quantity++;
        product.stock--;
        product.total = product.quantity * product.price;
      }

      return product;
    });
    setProducts(newProducts);
  };

  const decrementQuantity = (id) => {
    const newProducts = products.map((product) => {
      if (product.id == id && product.quantity > 0) {
        product.quantity--;
        product.stock++;
        product.total = product.quantity * product.price;
      }
      return product;
    });

    setProducts(newProducts);
  };

  const sum = products.reduce((acc, cur) => acc + cur.total, 0);
  return (
    <div>
      <h1>Product Information</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <TableRow
              key={product.id}
              {...product}
              increment={incrementQuantity}
              decrement={decrementQuantity}
            />
          ))}
        </tbody>
      </table>
      {sum > 0 && <p>Total : {sum} BDT</p>}
    </div>
  );
};

export default App;
