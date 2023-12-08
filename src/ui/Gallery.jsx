import { useState } from "react";
import Button from "./Button";
import Cart from "./Cart";
import { useCart } from "../contexts/CartContext";

const imageArray = [
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg",
];

function Gallery({ isShowCart }) {
  const [currImageIndex, setCurrImageIndex] = useState(0);
  const { qty } = useCart();
  return (
    <div className="grid grid-rows-[8.125rem_2.5rem_8.125rem] grid-cols-1">
      <span className="max-h-[18.75rem] overflow-hidden col-start-1 row-start-1 row-span-full z-0">
        <img
          src={imageArray[currImageIndex]}
          alt="product-1"
          // className="clip-image"
        />
      </span>
      <div className="col-start-1 row-start-2 row-span-1 z-10 flex justify-between">
        <Button
          imageSource="./images/icon-previous.svg"
          alt="previous icon"
          additionalClass="pr-1 ml-3"
          onSetDisplayedImageIndex={setCurrImageIndex}
          currImageIndex={currImageIndex}
          type="prev"
        />
        <Button
          imageSource="./images/icon-next.svg"
          alt="next icon"
          additionalClass="mr-3"
          onSetDisplayedImageIndex={setCurrImageIndex}
          currImageIndex={currImageIndex}
          type="next"
        />
      </div>
      {isShowCart && <Cart />}
    </div>
  );
}

export default Gallery;
