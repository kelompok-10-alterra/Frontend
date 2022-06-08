const MEMBERSHIP = {
  id: 1,
  name: "Membership",
  link: "/membership",
};
const CLASS = {
  id: 4,
  name: "Class",
  link: "/class",
};
const BOOKING = {
  id: 5,
  name: "Booking",
  link: "/booking",
};

export const CRUMBS_DATA = {
  membership: MEMBERSHIP,
  "details-membership": [
    MEMBERSHIP,
    {
      id: 2,
      name: "Details Membership",
      link: "/details-membership",
    },
  ],
  "add-membership": [
    MEMBERSHIP,
    {
      id: 3,
      name: "Add Membership",
      link: "/add-membership",
    },
  ],
  class: CLASS,
  "add-class": [
    CLASS,
    {
      id: 6,
      name: "Add Class",
      link: "/add-class",
    },
  ],
  "details-class": [
    CLASS,
    {
      id: 7,
      name: "Detail Class",
      link: "/details-class",
    },
  ],
};
