import "./App.scss";
import Button from "./components/Button/Button";
function App() {
  return (
    <div className="App">
      <div className="first">MaxMovie</div>
      <div className="second">Discover TV-shows & Movies to watch together</div>
      <img className="elipse" src="./images/Circle.png" />
      <div className="sign_up">Sign up with email</div>
      <img className="first_img" src="./images/Light.png" />
      <img className="second_img" src="./images/Light1.png" />
      <img className="second_img" src="./images/Light1.png" />
      <div className="third">
        By continuing, you are indicating that you accept our Terms of Service
        and Privacy Policy.
      </div>
      <div className="fourth">
        Already have an account? <h1>Sign in</h1>
      </div>
      <div className="third_img"></div>
      {/* <Button>Sign Up</Button> */}
    </div>
  );
}
export default App;
