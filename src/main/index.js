import React, { Component } from 'react';

import MainLayout from '../components/layout';

import Hero from './heros';
import Benifits from './benifits';
import Browser from './browser';
import './index.scss';


class App extends Component {
  componentWillMount() {
    //fetch('/api/diagnose')
  }

  onLinkClick = (item) => {
  }
  render() {
    return (
      <div className="App">
          <MainLayout>
              <div className="">
                  <Hero />
                  <div className="home-section home-why-outer">
                      <Benifits />
                  </div>
                  <div className="home-section home-browser-outer">
                       <Browser />

                  </div>

              </div>
          </MainLayout>
          

          



      </div>
    );
  }
}

export default App;
