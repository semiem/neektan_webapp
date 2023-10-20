// assets
import logo from "../assets/images/130.png";
import image1 from "../assets/images/131.jpg";

const Welcome = () => {
  return (
    <div className={`relative w-full h-[100vh]`}>
      <div
        className={`absolute top-0 right-0 w-[100vw] h-full bg-[#01233d]`}
      ></div>
      <img
        src={image1}
        alt="image"
        className={`absolute top-0 left-full w-full h-full transition duration-[1s] animate-welcome`}
      />

      <img
        src={logo}
        alt="pod logo"
        className="w-44 h-20 fixed top-1/2 left-1/2 -mt-10 -ml-[5.5rem] z-50"
      />
    </div>
  );
};

export default Welcome;
