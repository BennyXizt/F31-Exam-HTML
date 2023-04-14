import TeamItem from "../TeamItem/TeamItem";

function TeamList(props) {
  return (
    <section className="teamList">
      <div className="teamList__container _container">
      {props.images.map((e, i) => {
        return <TeamItem key={i} image={e} name={props.names[i]} job={props.jobs[i]}/>;
      })}
      </div>
    </section>
  );
}

export default TeamList;
