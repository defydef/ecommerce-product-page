import { useState } from "react";
import LightboxGallery from "./LightboxGallery";

function DesktopGallery({
  imageThumbnails,
  imageArray,
  onSetDisplayedImageIndex,
  currImageIndex,
  onToggleLightbox,
  isShowLightbox,
}) {
  const [showLightbox, setShowLightbox] = useState(false);
  return (
    <>
      <div className="hidden sm:flex flex-col justify-start gap-6 pl-10">
        <div
          className="cursor-pointer"
          onClick={() => setShowLightbox(!isShowLightbox)}
        >
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
                className={`w-[5.8rem] grow ${
                  index === currImageIndex ? "opacity-30" : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>
      {showLightbox && (
        <LightboxGallery
          onToggleLightbox={setShowLightbox}
          imageThumbnails={imageThumbnails}
          imageArray={imageArray}
          onSetDisplayedImageIndex={onSetDisplayedImageIndex}
          currImageIndex={currImageIndex}
        />
      )}
    </>
  );
}

export default DesktopGallery;
