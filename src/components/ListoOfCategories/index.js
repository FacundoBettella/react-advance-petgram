import React, { useState, useEffect, Fragment } from "react";
import { Category } from "../Category";
import { Item, List } from "./style";
import data from "../../../api/db.json";

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([]); // Para que no rompa en el map.
  const [showFixed, setShowFixed] = useState(false);

  const fetchData = () => {
    try {
      fetch("https://petgram-server-leidy-daza-leidydaza.vercel.app/categories")
        .then((res) => res.json())
        .then((response) => setCategories(response));
    } catch (error) {
      setCategories(data.categories);
      console.log(error);
    }
  };

  const onScroll = () => {
    window.scrollY > 210 ? setShowFixed(true) : setShowFixed(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    onScroll();

    // Para evitar seguir escuchando el evento cuando el componente no está montado:
    return () => document.removeEventListener("scroll", onScroll);
    
  }, [document.addEventListener("scroll", onScroll)]);

  const renderList = (fixed) => {
    return (
      <List className={fixed ? "customFixed" : ""}>
        {categories.map((category) => (
          <Item key={category.id}>
            <Category
              {...category} //pasar props por rest operator
            />
          </Item>
        ))}
      </List>
    );
  };

  return(
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
    ) 
  };
