import './App.css';
import Layout from "./components/Layout.jsx";
import {ThemeProvider} from "styled-components";

//@media query sizes for responsive rules
const theme = {
    mobileSmall: "285px",
    mobile: "380px",
    tablet: "768px",
    desktop: "1200px"
}

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Layout/>
        </ThemeProvider>
    );
}

export default App;
