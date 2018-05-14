import React, { Component } from 'react';
import './index.scss';



// import {
//   ScrollablePane
// } from 'office-ui-fabric-react/lib/ScrollablePane';
// import {
//   Sticky
// } from 'office-ui-fabric-react/lib/Sticky';


// import { Pivot, PivotItem, PivotLinkSize } from 'office-ui-fabric-react/lib/Pivot';


// import { loadTheme } from 'office-ui-fabric-react/lib/Styling';

// loadTheme({
//   palette: {
//     'themePrimary': 'white'
//   }
// });


class Benifits extends Component {
  componentWillMount() {
    //fetch('/api/diagnose')
  }

  onLinkClick = (item) => {
  }
  render() {
    return (
        <div className="container  home-why">
              <div className="home-why-benefits animate">
                  <div className="home-why-benefit help">
                      <img src="https://static.sketchfab.com/static/builds/web/dist/why-upload-62a1466401a4ff352f7df6cd86f483d0.png" width="60" height="60" className="home-why-benefit-icon" />
                      <div className="home-why-benefit-copy">
                          <h3>Free unlimited uploads</h3>
                      </div>
                      <div className="tooltip tooltip-up">
                          Upload an unlimited number of models from your software or your browser.
                      </div>
                  </div>

                  <div className="home-why-benefit help">
                      <img src="https://static.sketchfab.com/static/builds/web/dist/why-viewer-1f59c2fb23f9c32bf137b79dbf1f4b4e.png" width="60" height="60" className="home-why-benefit-icon" />
                      <div className="home-why-benefit-copy">
                          <h3>Universal 3D/AR/VR viewer</h3>
                      </div>
                      <div className="tooltip tooltip-up">
                          Display your models out of the box in most browsers and smartphones.
                      </div>
                  </div>

                  <div className="home-why-benefit help">
                      <img src="https://static.sketchfab.com/static/builds/web/dist/why-share-83c0599a63cb8bff96ec6b84540cf4c1.png" width="60" height="60" className="home-why-benefit-icon" />
                      <div className="home-why-benefit-copy">
                          <h3>Embed anywhere</h3>
                      </div>
                      <div className="tooltip tooltip-up">
                          Embed your models on Facebook, portfolios, blogs, forums or any website.
                      </div>
                  </div>
              </div>
        </div>

    );
  }
}

export default Benifits;
