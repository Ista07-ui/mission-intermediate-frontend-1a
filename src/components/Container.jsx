import Navbar from "./Navbar";

const Container = ({ children }) => {
  return (
    <>
      <Navbar />

      {children}
    </>
  );
};

export default Container;
