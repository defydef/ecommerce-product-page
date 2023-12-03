function MobileMenu({ onToggleMobileMenu, isShowMobileMenu }) {
  return (
    <>
      <div className=" w-screen h-full bg-black opacity-75 absolute z-20"></div>
      <div className=" w-60 h-full bg-white absolute z-30 flex flex-col gap-10 px-5 py-6">
        {/* Close button */}
        <button onClick={() => onToggleMobileMenu(!isShowMobileMenu)}>
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#69707D"
              fillRule="evenodd"
            />
          </svg>
        </button>
        <ul className="flex flex-col gap-3 text-lg font-bold text-[var(--dark)]">
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
}

export default MobileMenu;
