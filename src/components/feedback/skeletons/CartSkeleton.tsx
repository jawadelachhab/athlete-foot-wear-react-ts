const CartSkeleton = () => {

  
  return (
    <tr className="border-b border-[#dee2e6] text-center">
      <td className=" p-2">
        <div className="w-24 h-24 bg-gray-200"></div>
      </td>
      <td className="p-2">
        <div className="h-2 w-8  bg-gray-200 rounded"></div>
      </td>
      <td className="p-2">
        <div className="h-2 w-8  bg-gray-200 rounded"></div>
      </td>
      <td className="p-2">
        <div className="h-2 w-8  bg-gray-200 rounded"></div>
      </td>

      <td className="p-2">
        <div className="h-2 w-8  bg-gray-200 rounded"></div>
      </td>
    </tr>
  );
};

export default CartSkeleton;
