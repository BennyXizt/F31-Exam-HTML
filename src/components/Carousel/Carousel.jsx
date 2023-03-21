import { useEffect, useState } from "react";

function Carousel(props) {
  const PAGE_WIDTH = props.width
  const [offset, setOffset] = useState(0);
  const [styles, setStyles] = useState({
    transform: `translateX(${offset}px)`,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.abs(offset) >= (props.children.length - 1) * PAGE_WIDTH) {
        setOffset(0);
      } else {
        setOffset((prev) => prev - PAGE_WIDTH);
      }
    }, 8000);

    setStyles({
      transform: `translateX(${offset}px)`,
    });

    return () => clearInterval(interval);
  }, [offset]);

  function handleClick(key) {
    setOffset(-(PAGE_WIDTH * key));
  }
  return (
    <article className="carousel">
      <div className="carousel__list" style={styles}>
        {props.children}
      </div>
      <div className="carousel__buttons">
        {props.children.map((e, i) => {
          return (
            <button
              key={i}
              className={
                Math.abs(offset / PAGE_WIDTH) === i
                  ? "carousel__button active"
                  : "carousel__button"
              }
              onClick={() => handleClick(i)}
            ></button>
          );
        })}
      </div>
    </article>
  );
}

export default Carousel;
