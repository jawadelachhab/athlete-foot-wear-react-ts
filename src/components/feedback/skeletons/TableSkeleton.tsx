const TableSkeleton = () => {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="w-14 h-8 bg-gray-200 animate-pulse"></th>
          <th className="w-14 h-8 bg-gray-200 animate-pulse"></th>
          <th className="w-14 h-8 bg-gray-200 animate-pulse"></th>
          <th className="w-14 h-8 bg-gray-200 animate-pulse"></th>
          <th className="w-14 h-8 bg-gray-200 animate-pulse"></th>
        </tr>
      </thead>
      <tbody>
        {[...Array(4)].map((_, index) => (
          <tr key={index}>
            <td className="w-14 h-8 bg-gray-200 animate-pulse"></td>
            <td className="w-14 h-8 bg-gray-200 animate-pulse"></td>
            <td className="w-14 h-8 bg-gray-200 animate-pulse"></td>
            <td className="w-14 h-8 bg-gray-200 animate-pulse"></td>
            <td className="w-14 h-8 bg-gray-200 animate-pulse"></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableSkeleton;
