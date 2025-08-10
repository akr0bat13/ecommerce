import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

export const ProductCard = ({product}) => {
  const dispatch = useDispatch();

    const addProduct = (product) => {
      dispatch(addCart(product));
    };

    const isProductEnabled = product.rating.count !== 0
  return (
      <div className="card text-center h-100" key={product.id}>
        <img
          className="card-img-top p-3 img-fit"
          src={product.image}
          alt="Card"
          height={300}
        />
        <div className="card-body">
          <h5 className="card-title">
            {product.title}
          </h5>
          <p className="card-text">
            {product.description.substring(0, 90)}...
          </p>
        </div>
        <div className="list-group list-group-flush">
          <p className="list-group-item lead">$ {product.price}</p>
        </div>
        <div className="card-body">
          <Link
            to={"/product/" + product.id}
            className="btn btn-dark m-1"
          >
            Buy Now
          </Link>
          <button
            className="btn btn-dark m-1"
            disabled={!isProductEnabled}
            onClick={() => {
              toast.success("Added to cart");
              addProduct(product);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
  )
}