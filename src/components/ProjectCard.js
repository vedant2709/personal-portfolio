import { Col } from "react-bootstrap";
import { FaGlobe } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="view-links">
            <a href="#">View Project <FaGlobe /></a>
            <a href="#">Source Code <FaLink /></a>
          </div>
        </div>
      </div>
    </Col>
  )
}