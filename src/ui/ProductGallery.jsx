function ProductGallery({ children }) {
  return (
    <section className="flex flex-col sm:flex-row justify-between sm:px-40">
      {children}
    </section>
  );
}

export default ProductGallery;
