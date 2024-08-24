import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col max-w-[1440px] mx-auto px-16 ">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
