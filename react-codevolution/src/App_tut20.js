import "./styles.css";
import UserGreeting from "./UserGreeting";
import StyleSheet from "./StyleSheet"
import './myStyles.css';
import myStyle from "./myStyles.module.css";


export default function App() {
  return (
    <div className="App">
      <p className = 'primary1'>This is first p</p>
      <p className = {myStyle.primary2}>This is second p</p>
      {/* <StyleSheet primary={false} fontxl={true}/> */}
     {/* <UserGreeting /> */}
    </div>
  );
}
