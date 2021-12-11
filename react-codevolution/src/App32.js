import "./styles.css";
// import PureComp from "./PureComp_26.js";
// import ParentComp26 from "./ParentComp_26.js"
// import RefsDemo from "./RefsDemo.js"
// import FocusRefClass29 from "./FocusRefClass29.js"
// import PortalDemo31 from "./PortalDemo31.js"
import Hero32 from "./Hero32.js"
import ErrorBoundary32 from "./ErrorBoundary32.js"


export default function App() {
    return ( <
        div className = "App" >
        <
        ErrorBoundary32 >
        <
        Hero32 heroName = "Stupid banana" / >
        <
        /ErrorBoundary32> <
        ErrorBoundary32 >
        <
        Hero32 heroName = "Bad man" / >
        <
        /ErrorBoundary32> { /* <PortalDemo31 /> */ } { /* <FocusRefClass29 /> */ } { /* <RefsDemo /> */ } { /* <ParentComp26 name="Parikshit"/> */ } { /* <PureComp /> */ } {
            /* <h1>Hello CodeSandbox</h1>
                  <h2>Start editing to see some magic happen!</h2> */
        } <
        /div>
    );
}