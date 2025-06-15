

const PostSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {Array(3)
        .fill(0)
        .map((_, index) => (
          <article key={index} className="mb-8 shadow rounded-md animate-pulse">
            <div className="h-[245px] bg-gray-200"></div>

            <div className="p-4">
              <h5 className="h-2 bg-gray-200 rounded mb-4"></h5>
              <ul className="flex gap-4 mb-4">
                <li className="h-2 w-full bg-gray-200 rounded"></li>
                <li className="h-2 w-full bg-gray-200 rounded"></li>
              </ul>
              <p className="h-2 bg-gray-200 rounded"></p>
            </div>
          </article>
        ))}
    </div>
  );
};

export default PostSkeleton;
