import React, { useEffect } from "react";

const HubspotContactForm = () => {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    const key = "pat-eu1-f807f377-e345-4167-bc0f-bc91bce4b2b1";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      // @TS-ignore
      if (window.hbspt) {
        // @TS-ignore
        window.hbspt.forms.create({
          region: "eu1",
          portalId: "143188444",
          formId: "112aabe1-9c86-4326-b579-04049492d548",
        });
      }
    });
  }, []);

  return (
    <div>
      <div id="hubspotForm"></div>
    </div>
  );
};

export default HubspotContactForm;
