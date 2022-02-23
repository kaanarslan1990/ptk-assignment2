import React from "react";

const Footer = ({
  filteredList,
  setActiveCategory,
  activeCategory,
  handleClear,
}) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{filteredList.length} </strong>
        item{filteredList.length > 1 && "s"} left
      </span>
      <ul className="filters">
        <li onClick={() => setActiveCategory("All")}>
          <a href="/#" className={activeCategory === "All" ? "selected" : ""}>All</a>
        </li>
        <li onClick={() => setActiveCategory("Active")}>
          <a href="/#" className={activeCategory === "Active" ? "selected" : ""}>Active</a>
        </li>
        <li onClick={() => setActiveCategory("Completed")}>
          <a href="/#" className={activeCategory === "Completed"? "selected" : ""}>
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed" onClick={handleClear}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;