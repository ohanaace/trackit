import React, { useState } from "react";
import LogInPage from "./pages/LogIn&SignUp/LogInPage";
import SignUpPage from "./pages/LogIn&SignUp/SignUpPage";
import TodayPage from "./pages/Today/TodayPage";
import HabitsPage from "./pages/Habits/HabitsPage";
import HistoryPage from "./pages/History/HistoryPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle/GlobalStyle";
import MyStyle from "./GlobalStyle/MyStyle";
import { UserContext } from "./context/AuthContext";



function App() {
  const [userData, setUserData] = useState({ name: "", image: "", token: "", habits: [], todayHabits: [], progress: 0 })

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
  
        <BrowserRouter>
          <GlobalStyle />
          <MyStyle />
          <Routes>
            <Route path="/" element={<LogInPage />} />
            <Route path="/cadastro" element={<SignUpPage />} />
            <Route path="/habitos" element={<HabitsPage />} />
            <Route path="/hoje" element={<TodayPage />} />
            <Route path="/historico" element={<HistoryPage />} />
          </Routes>
        </BrowserRouter>  
    </UserContext.Provider>
  );
}

export default App;
