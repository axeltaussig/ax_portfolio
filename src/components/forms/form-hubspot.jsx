import React, { useEffect } from "react";
import HubspotForm from 'react-hubspot-form'

const HubspotContactForm = () => {




  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://js.hsforms.net/forms/v2.js";
  //   // const key = "pat-eu1-f807f377-e345-4167-bc0f-bc91bce4b2b1";

  //   script.addEventListener("load", () => {
  //     // @TS-ignore
  //     if (window.hbspt) {
  //       // @TS-ignore
  //       window.hbspt.forms.create({
  //         region: "eu1",
  //         portalId: "143188444",
  //         formId: "112aabe1-9c86-4326-b579-04049492d548",
  //       });
  //     }
  //   });


  // }, []);

  return (
    <div>
      <div id="hubspotForm">
          <HubspotForm
   portalId='143188444'
   formId='112aabe1-9c86-4326-b579-04049492d548'
   onSubmit={() => console.log('Submit!')}
   onReady={(form) => console.log('Form ready!')}
   loading={<div>Loading...</div>}
   />
      </div>
    </div>
  );
};

export default HubspotContactForm;
