import { Switch, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Layout>
      <Route path="/auth" element={<AuthPage />}></Route>
      <Route path="/profile" element={<UserProfile />}></Route>
    </Layout>
  );
}

export default App;
