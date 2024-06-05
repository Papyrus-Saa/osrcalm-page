import  { ThemeProvider } from "styled-components";
import Testing from "./components/Testing";
import theme from "./theme/ThemeColors";



const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>App</div>
      <Testing/>
    </ThemeProvider>
  );
};

export default App;
