import React from "react";

export default function CardItem({
  photo,
  title,
  subtitle,
  avatar,
  mentor,
  rolementor,
  price,
}) {
  return (
    <div className="card-item">
      <img src={photo} alt="CourseImage" className="card-image" />
      <div className="card-description">
        <h6 className="text-title">{title}</h6>
        <p className="card-textLittle">{subtitle}</p>
      </div>
      <div className="card-avatar">
        <img alt="Instructor" className="avatar-img" src={avatar} />
        <div className="avatar-cardLittle">
          <p className="avatar-title">{mentor}</p>

          <div className="avatar-little">
            <p className="avatarText-little">{rolementor}</p>
          </div>
        </div>
      </div>

      <div className="card-point">
        <div className="point-box">
          <div className="point-boxLittle">
            <div>
              <img className="star-img" src="./icons/starYellow.png" alt="" />
            </div>
            <div>
              <img className="star-img" src="./icons/starYellow.png" alt="" />
            </div>
            <div>
              <img
                style={{ width: "22px", height: "22px" }}
                className="star-img"
                alt=""
                src="./icons/maskedStar.png"
              />
            </div>
            <div>
              <img className="star-img" src="./icons/starGrey.png" alt="" />
            </div>
            <div>
              <img className="star-img" src="./icons/starGrey.png" alt="" />
            </div>
          </div>
          <p className="point-number">3.5 (86)</p>
        </div>
        <p className="point-K">Rp {price}</p>
      </div>
    </div>
  );
}
