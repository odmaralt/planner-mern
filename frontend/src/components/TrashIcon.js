import * as React from "react";

const TrashIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    className={"trashIcon"}
    height={30}
    fill={"#a09688"}
    viewBox="0 0 30 30"
    {...props}
  >
    <path d="M4 5c0 .5.4 1 .9 1 .4 0 1.1 4 1.3 8.9.3 4.9.8 9.4 1.2 10 .9 1.5 14.3 1.5 15.2 0 .4-.6.9-5.1 1.2-10C24 10 24.7 6 25.1 6c.5 0 .9-.5.9-1 0-.6-4.3-1-11-1S4 4.4 4 5zm18 4.7c0 2.1-.3 6.2-.6 9l-.7 5.3H9.3l-.7-5.3c-.3-2.8-.6-6.9-.6-9V6h14v3.7z" />
  </svg>
);

export default TrashIcon;
