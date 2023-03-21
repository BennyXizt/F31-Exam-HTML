import { Link } from "react-router-dom";
import Carousel from "../Carousel/Carousel";

function Team(props) {
  return (
    <section className="team">
      <div className="team__container _container">
        <Carousel width={1320}>
          {props.images.map((e, i) => {
            return (
              <div key={i} className="list-team_item">
                <figure className="list-team_figure">
                  <img
                    src={`./team/team${i + 1}.png`}
                    alt={`team-${i + 1}`}
                    className="list-team_image"
                  />
                </figure>
                <div className="list-team_container">
                  <Link to="/team" className="list-team_link _link">
                    {props.upper}
                  </Link>
                  <h2 className="list-team_title _title">{props.title[i]}</h2>
                  <span className="list-team_name">{props.name[i]}</span>
                  <span className="list-team_job">{props.job[i]}</span>
                </div>
              </div>
            );
          })}
        </Carousel>
       
      </div>
    </section>
  );
}

export default Team;
