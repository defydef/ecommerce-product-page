import LargeButton from "./LargeButton";
import { useCart } from "../contexts/CartContext";

function Product() {
  const { qty, addCartQty, subtractCartQty } = useCart();
  return (
    <section className="pb-8">
      <section className="flex flex-col p-5 gap-3">
        <h2 className="text-[var(--orange)] text-xs uppercase font-bold tracking-[0.11538rem]">
          Sneaker Company
        </h2>
        <h1 className="text-[var(--dark)] text-[1.75rem] font-bold leading-8">
          Fall Limited Edition Sneakers
        </h1>
        <p className="text-[var(--grey)] leading-[1.5625rem] text-[0.9375rem]">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="flex justify-between items-center py-4">
          <div className="flex gap-5 items-center ">
            <p className=" text-[1.75rem] font-bold">$125.00</p>
            <p className="bg-[var(--light-orange)] uppercase p-2 text-[var(--orange)] rounded-md font-bold">
              50%
            </p>
          </div>
          <div>
            <p className="text-[var(--light-grey)] font-bold line-through text-base">
              $250.00
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--light-grey-2)] flex justify-between items-center p-5 mx-5 rounded-[0.625rem]">
        {/* decreaseQty button */}
        <button onClick={subtractCartQty}>
          <svg
            width="12"
            height="4"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <path
                d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                id="a"
              />
            </defs>
            <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#a" />
          </svg>
        </button>
        <div className="text-[var(--dark)] font-bold">{qty}</div>
        {/* increaseQty button */}
        <button onClick={addCartQty}>
          <svg
            width="12"
            height="12"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <path
                d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                id="b"
              />
            </defs>
            <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#b" />
          </svg>
        </button>
      </section>

      <section className="p-5 flex justify-center">
        <LargeButton additionalClass="shadow-[0px_20px_50px_-20px_var(--orange)]">
          <span>
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#fff"
                fillRule="nonzero"
              />
            </svg>
          </span>
          <span className="font-bold text-base">Add to cart</span>
        </LargeButton>
      </section>
    </section>
  );
}

export default Product;
