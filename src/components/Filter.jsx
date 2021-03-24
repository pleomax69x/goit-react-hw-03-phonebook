const Filter = ({ filter, handleFilterChange }) => {
  return (
    <>
      <p>Find contact by name</p>
      <label>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Enter name to find"
        />
      </label>
    </>
  );
};
export default Filter;
