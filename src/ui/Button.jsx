function Button({
  imageSource,
  alt,
  additionalClass,
  onSetDisplayedImageIndex,
  currImageIndex,
  type,
}) {
  function changeImageIndex() {
    if (type === "prev") {
      currImageIndex > 0
        ? onSetDisplayedImageIndex(currImageIndex - 1)
        : onSetDisplayedImageIndex(3);
    }

    if (type === "next") {
      currImageIndex < 3
        ? onSetDisplayedImageIndex(currImageIndex + 1)
        : onSetDisplayedImageIndex(0);
    }
  }
  return (
    <button
      className={`bg-white w-10 h-10 rounded-full flex justify-center items-center ${
        additionalClass || ""
      }`}
      type="button"
      onClick={changeImageIndex}
    >
      <img src={imageSource} alt={alt} className="w-1/4" />
    </button>
  );
}

export default Button;
