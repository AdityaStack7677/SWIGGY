import { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const { name } = props;
  return (
    <div className="user-card">
      <h1>Count :-{count}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Dehradun</h3>
      <h4>Contact: @adityayadav</h4>
    </div>
  );
};

export default User;
