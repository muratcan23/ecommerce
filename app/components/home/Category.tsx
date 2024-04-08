const Category = () => {
  const categoryList = [
    {
      name: "Electronic accessory",
    },
    {
      name: "Mobile-Device",
    },
    {
      name: "Pc-Hardware",
    },
    {
      name: "Indoor",
    },
    {
      name: "Shoe",
    },
    {
      name: "Outdoor",
    },
  ];

  return (
    <div className="flex items-center justify-center px-3 md:px-10 gap-3 md:gap-10  py-5 md:py-8 xl:my-15 overflow-x-auto">
      {categoryList.map((category, index) => (
        <div
          className="border hover:bg-slate-400 hover:text-white   text-slate-500 rounded-full min-w-[120px]flex flex-1  px-4 py-2 text-center items-center justify-center cursor-pointer"
          key={index}
        >
          {category.name}{" "}
        </div>
      ))}
    </div>
  );
};

export default Category;
