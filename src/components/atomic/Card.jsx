import { Link } from "react-router-dom";

const Card = ({ link = "/", img, children }) => (
  <Link
    to={link}
    className="shadow-md bg-white h-max w-72 rounded-3xl overflow-hidden"
  >
    <img src={img} alt="..." className="w-full h-auto object-contain" />
    <div className="border-2 border-black rounded-b-3xl p-4">{children}</div>
  </Link>
);

export default Card;
