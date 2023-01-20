import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileContract } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div>
      <div class="container fixed-bottom">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-12 d-flex align-items-center">
            <a
              href="/"
              class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            ></a>
            <div class="text-muted d-flex align-items-center justfiy-content-center">
              <div className="px-3">
                <lottie-player
                  src="https://assets10.lottiefiles.com/private_files/lf30_eMegtS.json"
                  background="transparent"
                  speed="1"
                  style={{ width: "30px", height: "30px" }}
                  loop
                  autoplay
                ></lottie-player>
              </div>

              <div>2022 Company, Inc</div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
