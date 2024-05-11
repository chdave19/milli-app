import React from "react";
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
}) {
  return (
    <section className={`item ${mode}`}>
      <figure>
        {imageUrl ? (
          <img src={imageUrl} alt={title + ", " + pageUrl} />
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
          <span>
            <FaRegClock style={{ marginRight: "6px" }} /> Duration:{" "}
            {`${duration}s`}
          </span>
        </div>
        <Link to={`/quiz/${pageUrl}`} className={mode}>
          Play
        </Link>
      </div>
    </section>
  );
}
