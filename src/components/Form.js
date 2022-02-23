import React from "react";
import Footer from "./Footer";
import List from "./List";

const Form = ({
  handleToggleCompleted,
  handleDelete,
  setActiveCategory,
  filteredList,
  activeCategory,
  handleClear,
}) => {
  return (
    <section>
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <List
        filteredList={filteredList}
        handleToggleCompleted={handleToggleCompleted}
        handleDelete={handleDelete}
      />
      <Footer
        filteredList={filteredList}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
        handleClear={handleClear}
      />
    </section>
  );
};

export default Form;