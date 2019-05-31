import React from 'react';
import './App.css';

import Page1 from './components/Page1';
// import Page2 from './components/Page2';
// import Page3 from './components/Page3';

import AsyncComponent from './components/AsyncComponent';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: 'page1',
      component: null,
    };
  }

  onRouteChange = route => {
    this.setState({ route });

    // with code splitting
    // if (route === 'page1') {
    //   this.setState({ route });
    // } else if (route === 'page2') {
    //   import('./components/Page2').then(Page2 => {
    //     this.setState({ route: route, component: Page2.default });
    //   });
    // } else if (route === 'page3') {
    //   import('./components/Page3').then(Page3 => {
    //     this.setState({ route: route, component: Page3.default });
    //   });
    // }
  };

  render() {
    if (this.state.route === 'page1') {
      return <Page1 onRouteChange={this.onRouteChange} />;
    } else if (this.state.route === 'page2') {
      const AsnycPage2 = AsyncComponent(() => import('./components/Page2'));
      return <AsnycPage2 onRouteChange={this.onRouteChange} />;
    } else if (this.state.route === 'page3') {
      const AsnycPage3 = AsyncComponent(() => import('./components/Page3'));
      return <AsnycPage3 onRouteChange={this.onRouteChange} />;
    }

    // if (this.state.route === 'page1') {
    //   return <Page1 onRouteChange={this.onRouteChange} />;
    // } else {
    //   return <this.state.component onRouteChange={this.onRouteChange} />;
    // }
  }
}

export default App;
