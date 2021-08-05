import React from "react";

const Book = (props) => {
  const { img, title, author } = props;
  const clickHandler = () => {
    alert("kkk");
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => alert(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        button
      </button>
    </article>
  );
};

export default Book;
