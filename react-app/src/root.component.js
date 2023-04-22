import { useState } from "react";
import Parcel from "single-spa-react/parcel";
import './root.component.css';
import { ClaimList } from "./component/ClaimsList";

export default function Root(props) { //Asurion App
  const [selectedApp, setSelectedApp] = useState('my-devices');    

  return (
    <>
      <h1>Asurion Home</h1>
      <hr/>
      <nav>
        <span className={`navItem ${selectedApp === 'my-devices' ? 'selected-nav' : ''}`} onClick={() => setSelectedApp('my-devices')}>My devices</span>
        <span className={`navItem ${selectedApp === 'mobility' ? 'selected-nav' : ''}`} onClick={() => setSelectedApp('mobility')}>Mobility</span>
      </nav>
      <div key={selectedApp}>
        {selectedApp === 'my-devices' ? <ClaimList /> : 
        <Parcel // mobility parcel
          config={() => System.import("@app/angular-parcel")} // mobility parcel
          customProp1="Parent prop1"
          wrapWith="h1"
          wrapStyle={{ color: "green" }}
          handleError={err => console.log(err)}
          parcelDidMount={() => console.log("Angular parcel mounted")}
        />
        }
      </div>
    </>
  );
}
