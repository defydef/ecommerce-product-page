function LargeButton({ additionalClass, children }) {
  return (
    <button
      className={`bg-[var(--orange)] flex gap-3 justify-center items-center text-white w-full sm:min-w-max rounded-[0.625rem] p-4 sm:px-12 ${additionalClass}`}
    >
      {children}
    </button>
  );
}

export default LargeButton;
