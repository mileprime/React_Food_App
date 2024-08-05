import React from "react";
import { UserContext } from "./App";

function GrandChild() {
  const User = React.useContext(UserContext);
  console.log(User, "coming from parent");
  return (
    <div>
      This Grandchild {User.name}
      <button onClick={User.printlog}> Show Alert</button>
    </div>
  );
}
export default GrandChild;
