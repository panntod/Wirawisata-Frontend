import { H4 } from "../global/Text";

// Membuat template service image yang digunakan dibeberapa page 
const ServiceImage = (props) => (
  <div>
    <div className="bg-white rounded-full border-8 border-secondary">
      <img
        src={"/service" + props.img}
        alt={props.title}
        className="w-[130px] h-[130px] mx-auto"
        width={120}
        height={120}
      />
    </div>
    <H4 className="text-white mt-4 text-center">{props.title}</H4>
  </div>
);

export default ServiceImage;
