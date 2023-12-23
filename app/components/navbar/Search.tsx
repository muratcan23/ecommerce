const Search = () => {
  return (
    <div className="hidden md:flex flex-1">
      <input
        className="py-2 px-3 border-none outline-none flex flex-1  rounded-l-md "
        type="text"
        placeholder="Search anything..."
      />
      <button className="p-2 bg-orange-800 cursor-pointer text-sm border-transparent">
        Search
      </button>
    </div>
  );
};

export default Search;
