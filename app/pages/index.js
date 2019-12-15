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
          publicUrl
        }
        title
        brief
        extended
      }
    }`;

    const GET_ALL_JOBS = `
    query GetJobs {
      allJobs {
        title
        skill
        code
        uppercase
        showmore
      }
    }`;

    const GET_ALL_ANNOUNCEMENTS = `
    query GetAnnouncements {
      allAnnouncements {
        image {
          publicUrl
        }
        title
        brief
        extended
      }
    }`;

    const GET_ALL_DOWNLOADS = `
    query GetDownloads {
      allDownloads {
        image {
          publicUrl
        }
        title
        desc
        url
      }
    }`;

    const GET_ALL_PORTALS = `
    query GetPortals {
      allPortals {
        image {
          publicUrl
        }
        label
        desc
      }
    }`;

    const GET_ALL_GOODS = `
    query GetGoods {
      allGoods {
        image {
          publicUrl
        }
        label
        desc
        currency
        price
      }
    }`;

    const GET_ALL_EVENTS = `
    query GetEvents {
      allEvents {
        image {
          publicUrl
        }
        title
        desc
        url
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

    axioResult = await axios.post(API_ENDPOINT, { query: GET_ALL_JOBS });
    let jobs = (axioResult ? axioResult.data.data.allJobs : null);
    console.log('All Jobs:', jobs);

    axioResult = await axios.post(API_ENDPOINT, { query: GET_ALL_ANNOUNCEMENTS });
    let announcements = (axioResult ? axioResult.data.data.allAnnouncements : null);
    console.log('All Announcements:', announcements);

    axioResult = await axios.post(API_ENDPOINT, { query: GET_ALL_DOWNLOADS });
    let downloads = (axioResult ? axioResult.data.data.allDownloads : null);
    console.log('All Downloads:', downloads);

    axioResult = await axios.post(API_ENDPOINT, { query: GET_ALL_PORTALS });
    let portals = (axioResult ? axioResult.data.data.allPortals : null);
    console.log('All Portals:', portals);

    axioResult = await axios.post(API_ENDPOINT, { query: GET_ALL_GOODS });
    let goods = (axioResult ? axioResult.data.data.allGoods : null);
    console.log('All Goods:', goods);

    axioResult = await axios.post(API_ENDPOINT, { query: GET_ALL_EVENTS });
    let events = (axioResult ? axioResult.data.data.allEvents : null);
    console.log('All Events:', events);

    return { users: axioResult.data };
  }

  render() {
    return (
    <div>Hello GIS</div>
    )
  };
}

export default App;