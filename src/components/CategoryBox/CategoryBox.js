const CategoryBox = ({ category, onClick }) => (
    <div className="category-box" onClick={onClick}>
      {category.icon && <img src={category.icon} alt={category.name} />}
      <span>{category.name}</span>
    </div>
  );

  export default CategoryBox