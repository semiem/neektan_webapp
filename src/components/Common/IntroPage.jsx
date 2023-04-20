import pic1 from "../../assets/images/intro/gabin-vallet-a0totlIZMxM-unsplash.jpg";
import pic2 from "../../assets/images/intro/aaron-brogden-9y4MaTz2Js0-unsplash.jpg";
import pic3 from "../../assets/images/intro/gold-touch-nutrition-7Rj21qBAhxk-unsplash.jpg";
import pic4 from "../../assets/images/intro/jonathan-borba-zrZOBsXDlRc-unsplash.jpg";
import pic5 from "../../assets/images/intro/julia-rekamie-Z72YujnOrlY-unsplash.jpg";
import pic6 from "../../assets/images/intro/alina-rubo-SYX4S7SVBOM-unsplash.jpg";
import logo from "../../assets/images/130.png";

export default function IntroPage() {
  const imageList = [
    { img: pic1 },
    { img: pic2 },
    { img: pic3 },
    { img: pic4 },
    { img: pic5 },
    { img: pic6 },
  ];

  const r = Math.floor(Math.random() * imageList.length);

  return (
    <div className="relative">
      <img src={imageList[r].img} alt="" className="h-screen w-screen" />
      <img src={logo} alt="" className="absolute top-64 right-24 w-44" />
    </div>
  );
}
