import LargeButton from "./LargeButton";

function Cart() {
  return (
    <div className="bg-white col-start-1 row-start-1 row-span-full m-2 h-fit z-20 rounded-[0.625rem] pt-6 pb-8 flex flex-col gap-7 text-[var(--dark)] shadow-[] shadow-[0px_20px_50px_-20px_var(--dark-2)]">
      <h1 className="px-6 font-bold">Cart</h1>
      <div className="w-full h-[1px] bg-[var(--horizontal-line)]"></div>
      <div className="px-6 flex items-center gap-3 justify-between">
        <img
          src="./images/image-product-1-thumbnail.jpg"
          className="w-[3.125rem]"
        />
        <div className="flex flex-col gap-2">
          <p className="text-[var(--grey)] leading-[1.625rem]">
            Fall Limited Edition Sneakers
          </p>
          <div className="flex gap-3">
            <p className="text-[var(--grey)]">$125.00 x 3</p>
            <p className="font-bold">$375.00</p>
          </div>
        </div>
        <span>
          <svg
            width="14"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <path
                d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                id="a"
              />
            </defs>
            <use fill="#C3CAD9" fillRule="nonzero" xlinkHref="#a" />
          </svg>
        </span>
      </div>
      <div className="px-6">
        <LargeButton>Checkout</LargeButton>
      </div>
    </div>
  );
}

export default Cart;
