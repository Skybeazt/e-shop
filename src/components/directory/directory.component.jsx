import CategoryItem from "./../category-item/category-item.component.jsx";

import "./directory.styles.scss";

const Directory = function ({ categories }) {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
