function Button({ imageSource, alt, additionalClass }) {
  return (
    <button
      className={`bg-white w-10 h-10 rounded-full flex justify-center items-center ${
        additionalClass || ""
      }`}
      type="button"
    >
      <img src={imageSource} alt={alt} className="w-1/4" />
    </button>
  );
}

export default Button;
