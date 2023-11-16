import React, { useEffect } from "react";
import music from "./../../media/images/Music_New.jpg";

function Footer() {
  return (
    <>
      <footer fixed="bottom" class="bg-dark text-center text-white">
        <div class="container p-5 pb-0">
          <section class="">
            <form action="">
              <div class="row d-flex justify-content-center">
                <div class="col-auto">
                  <p class="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>
                <div class="col-md-3 col-12">
                  <div class="form-outline form-white mb-0 mt=5">
                    <input
                      type="email"
                      id="form5Example29"
                      class="form-control"
                      placeholder="Your email address"
                    />
                    <label class="form-label" for="form5Example29"></label>
                  </div>
                </div>
                <div class="col-auto">
                  <button type="submit" class="btn btn-outline-light mb-4">
                    Subscribe
                  </button>
                </div>
                <img src={music} />
              </div>
            </form>
          </section>
        </div>
      </footer>
    </>
  );
}

export default Footer;
