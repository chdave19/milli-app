import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaRegClock } from "react-icons/fa";
import ImgPlaceholder from "../img/placeholder_img.png";

export default function QuizItem({
  imageUrl,
  pageUrl,
  title,
  mode,
  quote,
  duration,
  length,
}) {
  const imgRef = useRef();

  return (
    <div style={{ position: "relative" }}>
      {length === 0 ? (
        <span className="notice n-red">Not available</span>
      ) : (
        <span className="notice n-green">Available</span>
      )}
      <section className={`item ${length === 0 ? "not-available" : ""}`}>
        <figure>
          {imageUrl ? (
            <>
              <img src={imageUrl} ref={imgRef} alt="" />
            </>
          ) : (
            <img
              src={ImgPlaceholder}
              alt={title + ", " + pageUrl}
              className="img-placeholder"
            />
          )}
        </figure>
        <p>{quote}</p>
        <div className="item-bottom">
          <div className="title">
            <span>{title}</span>
            <span>{`Mode: ${mode}`}</span>
            <span>{`No of Questions: ${length > 15 ? 15 + "+" : length}`}</span>
            <span>
              <FaRegClock style={{ marginRight: "6px" }} /> Duration:{" "}
              {`${duration}s`}
            </span>
          </div>
          <Link
            to={length === 0 ? window.location : `/quiz/${pageUrl}`}
            className={mode}
          >
            Play
          </Link>
        </div>
      </section>
    </div>
  );
}
