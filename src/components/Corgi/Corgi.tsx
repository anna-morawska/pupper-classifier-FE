import React, { FC } from "react";
import "./Corgi.css";

interface PropsFile {}

const Corgi: FC<PropsFile> = ({}) => {
  return (
    <div className="wrap">
      <div className="resize" id="corgi_wrap">
        <div className="corgi_head_area">
          <div className="leg_fr_left brown"></div>
          <div className="leg_fr_right brown"></div>
          <div className="corgi_breast white"></div>
          <div className="fuwa corgi_face_area">
            <div className="corgi_face white">
              <div className="eye-left"></div>
              <div className="eye-right"></div>
              <div className="corgi_nose white">
                <div className="nose"></div>
              </div>
              <div className="ear-left brown"></div>
              <div className="ear-right brown"></div>
            </div>
          </div>
        </div>
        <div className="corgi_body_area">
          <div className="corgi_body brown"></div>
        </div>
        <div className="corgi_tail_area">
          <div className="corgi_hip brown" id="hip">
            <div className="leg_ba_left brown"></div>
            <div className="leg_ba_right brown"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Corgi };
