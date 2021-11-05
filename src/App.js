import "./App.scss";
import Button from "./components/Button/Button";
import Amplify from "@aws-amplify/core";
function App() {
  require("dotenv").config();

  return (
    <div className="App">
      <div className="first">MaxMovie</div>
      <div className="second">
        <h1>Discover TV-shows & Movies to watch together</h1>
      </div>
      <div className="image">
        <img className="elipse" src="./images/Circle.png" />
      </div>
      <div className="sign_up">Sign up with email</div>
      <div className="three-images">
        <img className="first_img" src="./images/Light.png" />
        <img className="second_img" src="./images/Light1.png" />
        <img className="second_img" src="./images/Light1.png" />
      </div>
      <div className="third">
        <div className="third_text">
          By continuing, you are indicating that you accept our Terms of Service
          and Privacy Policy.
        </div>
      </div>
      <div className="fourth">
        Already have an account? <span className="text"> Sign in</span>
      </div>
      <div className="third_img"></div>
      {/* <Button>Sign Up</Button> */}
    </div>
  );
}
export default App;
