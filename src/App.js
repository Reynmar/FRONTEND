import { Home } from "@material-ui/icons";
import { Switch, Route } from "react-router";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Homepage from "./pages/HomePage";
import Aboutpage from './pages/AboutPage';
import BlogPage from "./pages/BlogPage";
import ContactsPage from './pages/ContactsPage';
import PortfolioPage from './pages/PortfolioPage';
import ResumePage from './pages/ResumePage';

function App() {
  return (
  <div className="App">
    <Sidebar />
    <MainContentStyled className="main-content">
      {/* <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>   */}
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/about" exact>
            <Aboutpage />
          </Route>
          <Route path="/resume" exact>
            <ResumePage/>
          </Route>
          <Route path="/portfolio" exact>
            <PortfolioPage/>
          </Route>
          <Route path="/blog" exact>
            <BlogPage/>
          </Route>
          <Route path="/contacts" exact>
            <ContactsPage/>
          </Route>
        </Switch>
    </MainContentStyled>
  </div>
  );
}

const MainContentStyled = styled.div`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  /* background-color: black; */

  .lines{
    position: absolute;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    .line-1, .line-2, .line-3, .line-4{
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }

`;

// const AppStyled = styled.div`
//   background-color: blueviolet;
// `;

export default App;
