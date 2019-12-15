import { Component } from 'react';
import axios from 'axios'

// var HtmlToReactParser = require('html-to-react').Parser;
// var htmlToReactParser = new HtmlToReactParser();

class App extends Component {
  static async getInitialProps({ renderPage }) {
    let API_ENDPOINT = process.env.API_ENDPOINT;
    const GET_ALL_HEROES = `
    query GetHeroes {
      allHeroes {
        image {
          path
          publicUrl
        }
        title
        subTitle
      }
    }`;

    const GET_ALL_QUICKLINKS = `
    query GetQuickLinks {
      allQuickLinks {
        title
        brief
        extended
      }
    }`;

    const GET_ALL_SERVICES = `
    query GetServices {
      allServices {
        image {
          path
          publicUrl
        }
        title
        brief
        extended
      }
    }`;

    let axioResult = await axios.post(API_ENDPOINT, { query: GET_ALL_HEROES });
    let heroes = (axioResult ? axioResult.data.data.allHeroes : null);
    console.log('All Heroes:', heroes);

    axioResult = await axios.post(API_ENDPOINT, { query: GET_ALL_QUICKLINKS });
    let quickLinks = (axioResult ? axioResult.data.data.allQuickLinks : null);
    console.log('All QuickLinks:', quickLinks);

    axioResult = await axios.post(API_ENDPOINT, { query: GET_ALL_SERVICES });
    let services = (axioResult ? axioResult.data.data.allServices : null);
    console.log('All Services:', services);

    return { users: axioResult.data };
  }

  render() {
    return (
    <div>Hello GIS</div>
    )
  };
}

export default App;