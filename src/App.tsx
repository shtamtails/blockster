import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Footer } from "./assets/components/page/Footer/Footer";
import Header from "./assets/components/page/Header/Header";
import { Sidebar } from "./assets/components/page/Sidebar/Sidebar";
import { Home } from "./assets/components/pages/home/Home";
import { PostPage } from "./assets/components/pages/post/PostPage";
import "./assets/style/main.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/posts/:postId",
    element: <PostPage />,
  },
]);

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
