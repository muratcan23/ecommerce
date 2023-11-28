const Category = () => {
  const categoryList = [
    {
      name: "Shoe",
    },
    {
      name: "Shoe",
    },
    {
      name: "Shoe",
    },
    {
      name: "Shoe",
    },
    {
      name: "Shoe",
    },
    {
      name: "Shoe",
    },
  ];

  return (
    <div>
      {categoryList.map((category, index) => (
        <div key={index}>{category.name} </div>
      ))}
    </div>
  );
};

export default Category;
