import "./App.css";
import React from "react";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import FriendsContainer from "./Components/Friends/FriendsContainer";
import Footer from "./Components/Footer/footer";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import ToDoListContainer from "./Components/ToDoList/ToDoListContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";

const App = (props) => {
  return (
    <div className="app">
      <Header />
      <div className="app-wrapper">
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<ProfileContainer />}>
              <Route path=":userId?" element={<ProfileContainer />} />
            </Route>
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/friends" element={<FriendsContainer />} />
            <Route path="/todo-list" element={<ToDoListContainer />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
