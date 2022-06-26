import "./works.scss";
import {useState} from "react";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data =[
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat asperiores quo quos quibusdam illo nemo repellat perferendis eius!",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flive.staticflickr.com%2F39%2F121453142_334c91e091_b.jpg&f=1&nofb=1"
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Web Development",
      desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat asperiores quo quos quibusdam illo nemo repellat perferendis eius!",
      img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-T5eaaY6aDZk%2FUGPKdRDt0YI%2FAAAAAAAABq8%2FSQ248zu42Rc%2Fs1600%2F800px-Felis_silvestris_catus_-_Rapperswil_Duftrosengarten_2010-10-02_16-44-24.JPG&f=1&nofb=1"
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Writing",
      desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat asperiores quo quos quibusdam illo nemo repellat perferendis eius!",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flive.staticflickr.com%2F562%2F18891935026_b966128ed3_b.jpg&f=1&nofb=1"
    }
  ]

  const handleClick = (way)=>{
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) : setCurrentSlide(currentSlide < data.length-1 ? currentSlide+1 : 0)};
  return (
    <div className="works" id="works">
      <div 
      className="slider" 
      style={{ transform: `translateX(-${currentSlide * 100}vw)`}}>
       {data.map((d=>
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} alt="" />
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
                <a href="https://github.com/victormssa"><span>Projects</span></a>
              </div>
            </div>
            <div className="right">
              <img src={d.img} alt="" />
            </div>
          </div>
       </div>))}
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
      <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick("right")}/>
    </div>
  );
}
