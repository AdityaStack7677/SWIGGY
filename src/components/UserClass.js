import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };

    console.log(this.props.name + "Child Constructor Called");
  }

  async componentDidMount() {
    console.log(this.props.name + "Child component Did Mount Called");
    const data = await fetch("https://api.github.com/users/hiteshchoudhary");

    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  async componentDidUpdate() {
    console.log("Component did update");
  }

  async componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  render() {
    // const { name, location } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;

    console.log("Child Render");

    return (
      <div className="user-card m-4 p-4 w-[350] bg-gray-200 hover:bg-red-50 rounded-lg">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @adityayadav</h4>
      </div>
    );
  }
}

export default UserClass;
