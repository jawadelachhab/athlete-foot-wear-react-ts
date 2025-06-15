const CategorySkeleton = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-7 gap-6" >
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <article key={index} className="animate-pulse">
            <div className="h-[140px] bg-gray-200"></div>
            <h3 className="mt-4 h-2 bg-gray-200 rounded"></h3>
          </article>
        ))}
    </div>
  );
};

export default CategorySkeleton;
