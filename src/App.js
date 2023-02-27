import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import Friends from "./Components/Profile/Friends/Friends";
import { Route, Routes } from "react-router-dom";

const App = (props) => {
  return (
    <div className="app">
      <Header />
      <div className="app-wrapper">
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/*"
              element={
                <Profile
                  profilePage={props.store.getProfilePage()}
                  dispatch={props.store.dispatch.bind(props.store)}
                />
              }
            />
            <Route
              path="/dialogs/*"
              element={
                <Dialogs
                  dialogsPage={props.store.getDialogsPage()}
                  dispatch={props.store.dispatch.bind(props.store)}
                />
              }
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/friends" element={<Friends />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
