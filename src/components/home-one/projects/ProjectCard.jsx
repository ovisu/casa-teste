import { Link } from "react-router-dom";
function ProjectCard({ project: { title, description, img } }) {
  return (
    <div className="swiper-slide">
      <Link className="aximo-project-icon" to=""style={{display:"flex", justifyContent:"center"}}>
        <div className="aximo-project-thumb">
          <img src={img} alt={title} />
          <div className="aximo-project-wrap"></div>
        </div>
      </Link>
      <div className="aximo-project-data">
        <h3>{title}</h3>

        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
