const ProductSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <article
            key={index}
            className="border border-gray-200 shadow-sm rounded-md animate-pulse"
          >
            <div className="h-[290px] bg-gray-200"></div>
            <div className="p-4">
              <h6 className="h-2 bg-gray-200 rounded mb-2"></h6>
              <p className="h-2 bg-gray-200 rounded mb-2"></p>
              <div className="mb-2 h-2 bg-gray-200 rounded"></div>
              <div className="mb-2 h-2 bg-gray-200 rounded"></div>
            </div>
          </article>
        ))}
    </div>
  );
};

export default ProductSkeleton;
