import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter,  Routes, Route} from "react-router-dom";
import Login from './Content/Login/Login'
import Signup from './Content/Signup/Signup'
import PostPage from './Content/Post/PostPage';
import FindQuestions from './Content/Post/FindQuestions';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="post" element={<PostPage />} />
        <Route path="signup" element={<Signup />} />
        <Route path="find_question" element={<FindQuestions />} />
      </Routes>
      </BrowserRouter>
    </div>
);