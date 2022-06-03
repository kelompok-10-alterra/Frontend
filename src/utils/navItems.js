/** Icons */
import { GiAbstract050 } from "react-icons/gi";
import {
  MdVerifiedUser,
  MdAddToPhotos,
  MdEventAvailable,
} from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { TiNews } from "react-icons/ti";
import { FiLogOut } from "react-icons/fi";

export const navItems = [
  {
    id: 1,
    name: "Dashboard",
    logo: <GiAbstract050 />,
    link: "/dashboard",
  },
  {
    id: 2,
    name: "Membership",
    logo: <MdVerifiedUser />,
    link: "/membership",
  },
  {
    id: 3,
    name: "Class",
    logo: <IoIosPeople />,
    link: "/class",
  },
  {
    id: 4,
    name: "Booking",
    logo: <MdEventAvailable />,
    link: "/booking",
  },
  {
    id: 5,
    name: "Newsletter",
    logo: <TiNews />,
    link: "/newsletter",
  },
  {
    id: 6,
    name: "Content",
    logo: <MdAddToPhotos />,
    link: "/content",
  },
  {
    id: 7,
    name: "Logout",
    logo: <FiLogOut />,
    link: "/",
  },
];
