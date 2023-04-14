import { useEffect, useState } from "react";

function Experience(props) {
  const [sliderIndex, setSliderIndex] = useState(0);
 
  useEffect(() => {
    setTimeout(() => {
        setSliderIndex(sliderIndex + 1)
        if(sliderIndex >= props.list.length - 1)
            setSliderIndex(0)
    }, 3000)
  }, [sliderIndex])
  return (
    <section className="experience">
      <div className="experience__container _container">
        <ul className="experience__list">
          {props.list.map((e, i) => {
            return (
              <li
                key={i}
                className={
                  i === sliderIndex
                    ? "experience__item active"
                    : "experience__item"
                }
              >
                {e}
              </li>
            );
          })}
        </ul>
        <dl className="experience__definition">
            <dt className="experience__definition__title">{props.definition[sliderIndex].title}</dt>
            <dd className="experience__definition__item">{props.definition[sliderIndex].article}</dd>
        </dl>
      </div>
    </section>
  );
}

export default Experience;
