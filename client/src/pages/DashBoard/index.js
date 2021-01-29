import React from "react";

import { Dashboard } from "../../components";

function DashBoard({ logoutCallback }) {
  return (
    <div>
      <Dashboard logoutCallback={logoutCallback} />
    </div>
  );
}

export default DashBoard;
