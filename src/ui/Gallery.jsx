import Button from "./Button";

function Gallery() {
  return (
    <div className="grid grid-rows-[8.125rem_2.5rem_8.125rem] grid-cols-1">
      <span className="max-h-[18.75rem] bg-yellow-200 overflow-hidden col-start-1 row-start-1 row-span-full z-0">
        <img
          src="./images/image-product-1.jpg"
          alt="product-1"
          className="clip-image"
        />
      </span>
      <div className="col-start-1 row-start-2 row-span-1 z-10 flex justify-between">
        <Button
          imageSource="./images/icon-previous.svg"
          alt="previous icon"
          additionalClass="pr-1 ml-3"
        />
        <Button
          imageSource="./images/icon-next.svg"
          alt="next icon"
          additionalClass="mr-3"
        />
      </div>
    </div>
  );
}

export default Gallery;
