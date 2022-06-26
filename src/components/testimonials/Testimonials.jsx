import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Undefined",
      title: "Null",
      img:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tuktukdesign.com%2Fwp-content%2Fuploads%2F2020%2F01%2Fmember-icon-vector.jpg&f=1&nofb=1",
      icon: "assets/linkedin.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Undefined",
      title: "Null",
      img:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tuktukdesign.com%2Fwp-content%2Fuploads%2F2020%2F01%2Fmember-icon-vector.jpg&f=1&nofb=1",
      icon: "assets/linkedin.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Undefined",
      title: "Null",
      img:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tuktukdesign.com%2Fwp-content%2Fuploads%2F2020%2F01%2Fmember-icon-vector.jpg&f=1&nofb=1",
      icon: "assets/linkedin.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

