import { Link } from "react-router-dom";

import { H3 } from "../global/Text";

// Membuat logo yang berisikan gambar dan teks
const Logo = ({ color }) => (
  <div className="flex items-center gap-2">
    <img src="/logo.png" alt="logo pictures" className="w-12 h-8" />
    <Link to="/" className={`border-l-2 border-${color}`}>
      <H3 className={`ms-1 text-${color} text-lg font-bold`}>WiraWisata</H3>
    </Link>
  </div>
);

export default Logo;
