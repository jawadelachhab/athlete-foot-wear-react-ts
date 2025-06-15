import { Outlet } from "react-router-dom";
import { Header, NewsLetter,InstagramFeeds, Footer } from "@components/common";
import { ToastList } from "@components/feedback";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="relative">
        <Outlet />
        <NewsLetter />
        <InstagramFeeds/>
        <ToastList />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
