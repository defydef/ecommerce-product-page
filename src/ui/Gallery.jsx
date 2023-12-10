import { useState } from "react";
import Button from "./Button";
import Cart from "./Cart";

const imageArray = [
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg",
];

const imageThumbnails = [
  "./images/image-product-1-thumbnail.jpg",
  "./images/image-product-2-thumbnail.jpg",
  "./images/image-product-3-thumbnail.jpg",
  "./images/image-product-4-thumbnail.jpg",
];

function Gallery({ isShowCart }) {
  const [currImageIndex, setCurrImageIndex] = useState(0);
  return (
    <>
      {/* Gallery on Mobile */}
      <div className="sm:hidden grid grid-rows-[8.125rem_2.5rem_8.125rem] grid-cols-1">
        <span className="max-h-[18.75rem] overflow-hidden col-start-1 row-start-1 row-span-full z-0">
          <img src={imageArray[currImageIndex]} alt="product-1" />
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
      {/* Gallery on Desktop */}
      <div className="hidden sm:flex flex-col justify-start gap-6 pl-10">
        <div>
          <img
            src={imageArray[currImageIndex]}
            alt="product-1"
            className="rounded-[0.9375rem] min-w-[27.8125rem]"
          />
        </div>
        <div className="flex gap-4 justify-between">
          {imageThumbnails.map((image, index) => (
            <div
              key={index}
              onClick={() => setCurrImageIndex(index)}
              className={` ${
                index === currImageIndex
                  ? "border bg-white opacity-75 w-[5.5rem] h-[5.5rem]"
                  : ""
              } border-[var(--orange)] rounded-[0.9375rem] overflow-hidden cursor-pointer`}
            >
              <img
                src={image}
                alt={`product-${index + 1}`}
                className={`w-[5.8rem] grow ${
                  index === currImageIndex ? "opacity-30" : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Gallery;
