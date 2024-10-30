import { Component } from "react";
const CounterZ = () => {
  class App extends Component {
    render() {
      const { isLoggedIn } = this.state;
      return (
        <div className="container">
          {isLoggedIn ? <button>Logout</button> : <button>Login</button>}
        </div>
      );
    }
  }
};
export default CounterZ;
