import React, { useState, useEffect, Fragment } from "react";
import { Category } from "../Category";
import { Item, List } from "./style";
import data from "../../../api/db.json";
import { useCustomFetch } from "../utils/useCustomFetch";

export const ListOfCategories = () => {
  const [ fetchData, loading ] = useCustomFetch(
    "https://petgram-server-leidy-daza-leidydaza.vercel.app/categories"
  );
  const [categories, setCategories] = useState([]); // Para que no rompa en el map.
  const [showFixed, setShowFixed] = useState(false);

  const onScroll = () => {
    window.scrollY > 210 ? setShowFixed(true) : setShowFixed(false);
  };

  useEffect(() => {
    if (fetchData !== null) {
      setCategories(fetchData);
      return;
    } else {
      setCategories(data);
    }
  }, [fetchData]);

  useEffect(() => {
    onScroll();

    // Para evitar seguir escuchando el evento cuando el componente no está montado:
    return () => document.removeEventListener("scroll", onScroll);
  }, [document.addEventListener("scroll", onScroll)]);

  const renderList = (fixed) => {
    return (
      <List className={fixed ? "customFixed" : ""}>
        {loading ? (
          <Item key="loading">
            <Category />
          </Item>
        ) : (
          categories.map((category) => (
            <Item key={category.id}>
              <Category
                {...category} //pasar props por rest operator
              />
            </Item>
          ))
        )}
      </List>
    );
  };

  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  );
};
