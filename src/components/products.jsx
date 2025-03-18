import "./Products.css";
export default function Products() {
  const products = [
    {
      id: 1,
      name: "product1",
      price: 30,
      desc: "this is the description this is the description",
    },
    {
      id: 2,
      name: "product2",
      price: 30,
      desc: "this is the description this is the description",
    },
    {
      id: 3,
      name: "product3",
      price: 30,
      desc: "this is the description this is the description",
    },
    {
      id: 4,
      name: "product4",
      price: 30,
      desc: "this is the description this is the description",
    },
    {
      id: 5,
      name: "product5",
      price: 30,
      desc: "this is the  this is the description",
    },
    {
      id: 6,
      name: "product6",
      price: 30,
      desc: "this is the description this is the description",
    },
    {
      id: 7,
      name: "product7",
      price: 30,
      desc: "this is the description this is the description",
    },
    {
      id: 8,
      name: "product8",
      price: 30,
      desc: "this is the description this is the description",
    },
  ];
  return (
    <div>
      <div className="App-Products-Row">
        {products.map((value, index) => (
          <div className="App-Products-Box" key={index}>
            <h3>{value.name}</h3>
            <h5>{value.desc}</h5>
            <h4>{value.price}</h4>
            <button>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
