import Button from "./Button";
import DesktopGallery from "./DesktopGallery";

function LightboxGallery({
  onToggleLightbox,
  imageThumbnails,
  imageArray,
  onSetDisplayedImageIndex,
  currImageIndex,
}) {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen grid grid-rows-1 grid-cols-1 place-items-center">
      <div
        className=" bg-black opacity-75 z-0 h-screen w-screen row-start-1 col-start-1"
        onClick={() => onToggleLightbox(false)}
      ></div>

      <div className="hidden sm:flex flex-col justify-start pl-10 z-20 row-start-1 col-start-1">
        <div className="flex justify-end py-3">
          <svg
            width="14"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => onToggleLightbox(false)}
            className="cursor-pointer"
          >
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#fff"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <div className="cursor-pointer grid grid-rows-[13rem_1fr_13rem] grid-cols-1 ">
          <span className="overflow-hidden col-start-1 row-start-1 row-span-full z-0">
            <img
              src={imageArray[currImageIndex]}
              alt="product-1"
              className="rounded-[0.9375rem] w-[27.8125rem]"
            />
          </span>
          <div className="col-start-1 row-start-2 row-span-1 z-10 flex justify-between ">
            <Button
              imageSource="./images/icon-previous.svg"
              alt="previous icon"
              additionalClass="pr-1 -ml-5"
              onSetDisplayedImageIndex={onSetDisplayedImageIndex}
              currImageIndex={currImageIndex}
              type="prev"
            />
            <Button
              imageSource="./images/icon-next.svg"
              alt="next icon"
              additionalClass="-mr-5"
              onSetDisplayedImageIndex={onSetDisplayedImageIndex}
              currImageIndex={currImageIndex}
              type="next"
            />
          </div>
        </div>
        <div className="flex gap-3 justify-center">
          {imageThumbnails.map((image, index) => (
            <div
              key={index}
              onClick={() => onSetDisplayedImageIndex(index)}
              className={` ${
                index === currImageIndex
                  ? "border bg-white opacity-75 w-[5.5rem] h-[5.5rem]"
                  : ""
              } border-[var(--orange)] rounded-[0.9375rem] overflow-hidden cursor-pointer`}
            >
              <img
                src={image}
                alt={`product-${index + 1}`}
                className={`w-[5.5rem] grow ${
                  index === currImageIndex ? "opacity-30" : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LightboxGallery;
