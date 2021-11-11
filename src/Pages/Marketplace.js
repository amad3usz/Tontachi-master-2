import React from "react";
import tontachiLogo from "../Images/tontachiLogo.png";
import Iframe from "react-iframe";
import { ASSET_URL, CHOSEN_THEME } from "../constants";

const embeddedUrl = `${ASSET_URL}?embed=${CHOSEN_THEME}`;

const Market = () => {
  return (
    <div className="background">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <img
              className="tontachiLogo"
              src={tontachiLogo}
              id="tontachiLogo"
              alt="tontachiLogo"
              height="265"
              width="265"
              top="20"
              left="43"
            />
          </div>
        </div>

        <div className="blueSection" style={{ height: window.innerHeight }}>
          <div
            className="container-fluid"
            style={{ height: window.innerHeight }}
          >
            <div className="row pb-3" style={{ height: window.innerHeight }}>
              <Iframe
                id="opensea-iframe"
                title="Embedded OpenSea Marketplace"
                src={embeddedUrl}
                width="100%"
                height="100%"
                frameBorder="0"
              ></Iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
