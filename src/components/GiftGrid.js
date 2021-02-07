import React from "react";
import PropTypes from "prop-types";

import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GiftGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeInDown">{category}</h3>

      {loading && <p className="animate__animated animate__fadeIn">Loading</p>}

      {
        <div className="card-grid">
          {images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </div>
      }
    </>
  );
};
GiftGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
