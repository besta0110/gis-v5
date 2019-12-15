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

    return { heroes, quickLink: quickLinks, services, jobs, announcements, downloads, portals, goods, events };
  }

  render() {
    return (
      <div className="container-fluid page-body-wrapper">
        <div className="theme-setting-wrapper">
          <div id="settings-trigger"><i className="fas fa-fill-drip" /></div>
          <div id="theme-settings" className="settings-panel"> <i className="settings-close fa fa-times" />
            <p className="settings-heading">SIDEBAR SKINS</p>
            <div className="sidebar-bg-options selected" id="sidebar-light-theme">
              <div className="img-ss rounded-circle bg-light border mr-3" />
              Light</div>
            <div className="sidebar-bg-options" id="sidebar-dark-theme">
              <div className="img-ss rounded-circle bg-dark border mr-3" />
              Dark</div>
            <p className="settings-heading mt-2">HEADER SKINS</p>
            <div className="color-tiles mx-0 px-4">
              <div className="tiles primary" />
              <div className="tiles info" />
              <div className="tiles dark" />
              <div className="tiles default" />
            </div>
            <p className="settings-heading">PAGE LAYOUT DESIGNS</p>
            <div className="page-layout">
              <div className="sidebar-bg-options">
                <a href="pages/layout/horizontal-menu.html">Horizontal Menu</a></div>
              <div className="sidebar-bg-options">
                <a href="pages/layout/boxed-layout.html">Boxed</a></div>
              <div className="sidebar-bg-options">
                <a href="pages/layout/rtl-layout.html">RTL</a></div>
              <div className="sidebar-bg-options">
                <a href="index.html">Default Menu</a></div>
            </div>
          </div>
        </div>
        <div id="right-sidebar" className="settings-panel"> <i className="settings-close fa fa-times" />
          <ul className="nav nav-tabs" id="setting-panel" role="tablist">
            <li className="nav-item"> <a className="nav-link active" id="todo-tab" data-toggle="tab" href="#todo-section" role="tab" aria-controls="todo-section" aria-expanded={true}>TO DO LIST</a> </li>
            <li className="nav-item"> <a className="nav-link" id="chats-tab" data-toggle="tab" href="#chats-section" role="tab" aria-controls="chats-section">CHATS</a> </li>
          </ul>
          <div className="tab-content" id="setting-content">
            <div className="tab-pane fade show active scroll-wrapper" id="todo-section" role="tabpanel" aria-labelledby="todo-section">
              <div className="add-items d-flex px-3 mb-0">
                <form className="form w-100">
                  <div className="form-group d-flex">
                    <input type="text" className="form-control todo-list-input" placeholder="Add To-do" />
                    <button type="submit" className="add btn btn-primary todo-list-add-btn" id="add-task-todo">Add</button>
                  </div>
                </form>
              </div>
              <div className="list-wrapper px-3">
                <ul className="d-flex flex-column-reverse todo-list">
                  <li>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="checkbox" type="checkbox" /> Team review meeting at 3.00 PM </label>
                    </div>
                    <i className="remove fa fa-times-circle" /> </li>
                  <li>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="checkbox" type="checkbox" /> Prepare for presentation </label>
                    </div>
                    <i className="remove fa fa-times-circle" /> </li>
                  <li>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="checkbox" type="checkbox" /> Resolve all the low priority tickets due today </label>
                    </div>
                    <i className="remove fa fa-times-circle" /> </li>
                  <li className="completed">
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="checkbox" type="checkbox" defaultChecked /> Schedule meeting for next week </label>
                    </div>
                    <i className="remove fa fa-times-circle" /> </li>
                  <li className="completed">
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="checkbox" type="checkbox" defaultChecked /> Project review </label>
                    </div>
                    <i className="remove fa fa-times-circle" /> </li>
                </ul>
              </div>
              <div className="events py-4 border-bottom px-3">
                <div className="wrapper d-flex mb-2"> <i className="fa fa-times-circle text-primary mr-2" /> <span>Feb 11 2018</span> </div>
                <p className="mb-0 font-weight-thin text-gray">Creating component page</p>
                <p className="text-gray mb-0">build a js based app</p>
              </div>
              <div className="events pt-4 px-3">
                <div className="wrapper d-flex mb-2"> <i className="fa fa-times-circle text-primary mr-2" /> <span>Feb 7 2018</span> </div>
                <p className="mb-0 font-weight-thin text-gray">Meeting with Alisa</p>
                <p className="text-gray mb-0 ">Call Sarah Graves</p>
              </div>
            </div>
            {/* To do section tab ends */}
            <div className="tab-pane fade" id="chats-section" role="tabpanel" aria-labelledby="chats-section">
              <div className="d-flex align-items-center justify-content-between border-bottom">
                <p className="settings-heading border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">Friends</p>
                <small className="settings-heading border-top-0 mb-3 pt-0 border-bottom-0 pb-0 pr-3 font-weight-normal">See All</small> </div>
              <ul className="chat-list">
                <li className="list active">
                  <div className="profile"><img src="images/faces/face1.jpg" alt="image" /><span className="online" /></div>
                  <div className="info">
                    <p>Thomas Douglas</p>
                    <p>Available</p>
                  </div>
                  <small className="text-muted my-auto">19 min</small> </li>
                <li className="list">
                  <div className="profile"><img src="images/faces/face2.jpg" alt="image" /><span className="offline" /></div>
                  <div className="info">
                    <div className="wrapper d-flex">
                      <p>Junaid</p>
                    </div>
                    <p>Away</p>
                  </div>
                  <div className="badge badge-success badge-pill my-auto mx-2">4</div>
                  <small className="text-muted my-auto">23 min</small> </li>
                <li className="list">
                  <div className="profile"><img src="images/faces/face3.jpg" alt="image" /><span className="online" /></div>
                  <div className="info">
                    <p>Daniel Russell</p>
                    <p>Available</p>
                  </div>
                  <small className="text-muted my-auto">14 min</small> </li>
                <li className="list">
                  <div className="profile"><img src="images/faces/face4.jpg" alt="image" /><span className="offline" /></div>
                  <div className="info">
                    <p>Tanya Richardson</p>
                    <p>Away</p>
                  </div>
                  <small className="text-muted my-auto">2 min</small> </li>
                <li className="list">
                  <div className="profile"><img src="images/faces/face5.jpg" alt="image" /><span className="online" /></div>
                  <div className="info">
                    <p>Talal Said</p>
                    <p>Available</p>
                  </div>
                  <small className="text-muted my-auto">5 min</small> </li>
                <li className="list">
                  <div className="profile"><img src="images/faces/face6.jpg" alt="image" /><span className="online" /></div>
                  <div className="info">
                    <p>Sarah Graves</p>
                    <p>Available</p>
                  </div>
                  <small className="text-muted my-auto">47 min</small> </li>
              </ul>
            </div>
            {/* chat tab ends */}
          </div>
        </div>

        <div className="main-panel">
          <div className="content-wrapper main-content">
            <div className="card">
              <section className="hero hero-slider-wrapper">
                <div className="hero-slider hero-slider-style-1">
                  {this.props.heroes.map((hero, i) => {
                    return (
                      <div className="slide" key={i}>
                        <img src={hero.image.publicUrl} className="slider-bg" />
                        <div className="container">
                          <div className="row">
                            <div className="col col-lg-8 col-sm-9 slide-caption">
                              <h2>We believe in  <span>Oman. </span> <br />{hero.title}</h2>
                              <p>{hero.subTitle}</p>
                              <div className="btns">
                                <a href="#" className="theme-btn">About us</a>
                                <a href="#" className="theme-btn-s2">Explore</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
              <section className="section-padding">
                <div className="container">
                  { this.props.quickLink.length > 0 &&
                  <div className="row">
                    <div className="col col-lg-3 col-md-4">
                      <div className="section-title">
                        <h2>QUICK LINKS</h2>
                      </div>
                    </div>
                    <div className="col col-lg-6 col-md-5">
                      <p>{this.props.quickLink[0].brief}</p>
                    </div>
                    <div className="col col-lg-3 col-md-3">
                      <div className="all-service-link">
                        <a href="#" className="theme-btn">See More</a>
                      </div>
                    </div>
                  </div>}
                  {process.browser &&
                    <div className="row">
                      <div className="col col-xs-12">
                        <div className="services-grids service-slider dots-s1">
                          {this.props.services.map((service, i) => {
                            return (
                              <div className="grid" key={i}>
                                <div className="inner mk-bg-img">
                                  <div className="details ">
                                    <div className="info">
                                      <img src={service.image.publicUrl} className="bg-image" />
                                      <a href="#">
                                        <h3><i className="fa fa-angle-right" />{service.title}</h3>
                                      </a>
                                      <p>{service.brief}</p>
                                      <a href="#" className="more">Get Details</a>
                                    </div>
                                  </div>
                                </div>
                              </div>)
                          })}
                        </div>
                      </div>
                    </div>}
                </div>
              </section>
              <section className="testimonials section-padding parallax" data-bg-image="images/press_bg.jpg">
                <div className="container main-header">
                  <div className="row">
                    <h4>Press Release</h4>
                  </div>
                </div>
                <div className="container">
                  {process.browser &&
                    <div className="row">
                      <div className="col col-xs-12">
                        <div className="testimonials-slider slider-arrow-s1">
                          <div className="slide-item">
                            <div className="inner">
                              <div className="client-quote">
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                              </div>
                              <div className="client-details">
                                <div className="client-pic">
                                  <img src="images/news-thumb.jpg" />
                                </div>
                                <div className="client-info">
                                  <h4>TITLE GOES HERE</h4>
                                  <span>short details given here</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="slide-item">
                            <div className="inner">
                              <div className="client-quote">
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                              </div>
                              <div className="client-details">
                                <div className="client-pic">
                                  <img src="images/news-thumb.jpg" />
                                </div>
                                <div className="client-info">
                                  <h4>TITLE GOES HERE</h4>
                                  <span>short details given here</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>}
                </div>
              </section>
              <section className="section-padding" id="download-ask">
                <div className="row content-section">
                  <div className="col-md-8 grid-margin stretch-card half-div">
                    <div className="online-jobs">
                      <div className="section-title col-md-12">
                        <h2>INTERNAL VACANCIES</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean smod bibendum laoreet.Lorem ipsum dolor sit amet, </p>
                      </div>
                      <div className="swiper-container">
                        <div className="swiper-wrapper">
                          {this.props.jobs.map((job, i) => {
                            return (
                              <div className="swiper-slide" key={i}>
                                <div className="card hovercard">
                                  <div className="cardheader">
                                    <div className="skill">{job.skill}</div>
                                    <div className="jobApply">
                                      <a className="btn blue btn-sm" href="#">Apply</a>
                                    </div>
                                  </div>
                                  <div className="info">
                                    <div className="title">
                                      {job.title}
                                    </div>
                                    <div className="desc"> Job Code : {job.code}</div>
                                    <div className="desc text-uppercase"><strong> {job.uppercase} </strong></div>
                                    <div className="desc showmore">
                                      <strong>Sr. Office Assistant (in Sells)</strong>
                                      <br />{htmlToReactParser.parse(job.showmore)}
                                    </div>
                                  </div>
                                </div>
                              </div>)
                          })}
                        </div>
                        {/* Navigation */}
                        <div className="swiper-button-next swiper-button-white" />
                        <div className="swiper-button-prev swiper-button-white" />
                      </div>
                      <div className="all-service-link see-more">
                        <a href="#" className="theme-btn">See More</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 grid-margin stretch-card ">
                    <div className="card">
                      <h4 className="card-title"> <i className="fas fa-info" />Did You Know </h4>
                      <div className="card-body">
                        <div className="carousel vert slide" data-ride="carousel" data-interval={2000}>
                          <div className="carousel-inner">
                            <div className="carousel-item active carousel-item-left">
                              <ul className="timeline">
                                <li>
                                  {/*"_blank" tıklanan linkin yeni sekmede açılmasını sağlar.*/}
                                  <a target="_blank" href="#">News Headline</a>
                                  <a href="#" className="float-right">09 Ocak, 2019</a>
                                  <p className="article">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean smod bibendum laoreet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean smod .Lorem ipsum dolor sit amet</p>
                                </li>
                                <hr />
                                <li>
                                  <a href="#">News Headline</a>
                                  <a href="#" className="float-right">4 Temmuz, 2018</a>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean smod bibendum laoreet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean smod.Lorem ipsum dolor sit amet </p>
                                </li>
                              </ul>
                            </div>
                            <div className="carousel-item carousel-item-next carousel-item-left">
                              <ul className="timeline">
                                <li>
                                  <a href="#">News Headline</a>
                                  <a href="#" className="float-right">4 Temmuz, 2018</a>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean smod bibendum laoreet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean smod.Lorem ipsum dolor sit amet</p>
                                </li>
                                <hr />
                                <li>
                                  <a href="#">News Headline</a>
                                  <a href="#" className="float-right">4 Temmuz, 2018</a>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean smod bibendum laoreet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean smod.Lorem ipsum dolor sit amet</p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </section>
              <section className="section-padding">
                <div className="container">
                  <div className="row">
                    <div className="col col-lg-9 col-md-4">
                      <div className="section-title">
                        <h2>Internal Announcements</h2>
                      </div>
                    </div>
                    <div className="col col-lg-3 col-md-3">
                      <div className="all-service-link">
                        <a href="#" className="theme-btn">See More</a>
                      </div>
                    </div>
                  </div>
                  {/* end row */}
                  <div className="row">
                    <div className="col col-xs-12">
                      <div className="services-grids service-slider dots-s1">
                        {this.props.announcements.map((announcement, i) => {
                          return (
                            <div className="grid" key={i}>
                              <div className="inner mk-bg-img">
                                <div className="details ">
                                  <div className="info">
                                    <img src={announcement.image.publicUrl} className="bg-image" />
                                    <a href="#">
                                      <h3><i className="fa fa-angle-right" />{announcement.title}</h3>
                                    </a>
                                    <p>{announcement.brief}</p>
                                    <a href="#" className="more">Get Details</a>
                                  </div>
                                </div>
                              </div>
                            </div>)
                        })}
                      </div>
                      {/* end services-grids */}
                    </div>
                    {/* end col */}
                  </div>
                  {/* end row */}
                </div>
                {/* end container */}
              </section>
              <section className="section-padding" style={{ background: '#f1f1f1', padding: '30px 15px 30px 15px' }}>
                <div className="row">
                  <div className="col-lg-4 sidebar-widget-area sidebar-break-md">
                    <div className="widget">
                      <div className="section-heading heading-dark">
                        <h3 className="item-heading">Downloads</h3>
                      </div>
                      <div className="widget-blog-post">
                        <ul className="block-list">
                          {this.props.downloads.map((download, i) => {
                            return (
                              <li className="single-item" key={i}>
                                <div className="item-img">
                                  <a href="#"><img src={download.image.publicUrl} alt="Post" /></a>
                                </div>
                                <div className="item-content">
                                  <h4 className="item-title pro-title"><a href={download.url}>{download.title}</a></h4>
                                  <p>{download.desc}</p>
                                  <div className="item-post-by"><a href={download.url}><i className="fas fa-cloud-download-alt" /> CLICK HERE FOR DOWNLOAD
                                  </a></div>
                                </div>
                              </li>)
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 sidebar-widget-area sidebar-break-md">
                    <div className="widget">
                      <div className="section-heading heading-dark">
                        <h3 className="item-heading">internal security portal</h3>
                      </div>
                      <div id="carousel2_indicator" className="carousel slide carousel-fade" data-ride="carousel">
                        <div className="carousel-inner">
                          {this.props.portals.map((portal, i) => {
                            return (
                              <div className={"carousel-item" + (i == 0 ? ' active' : '')} key={i}>
                                <img className="d-block w-100" src={portal.image.publicUrl} alt="First slide" />
                                <article className="carousel-caption d-none d-md-block">
                                  <h5>{portal.label}</h5>
                                  <p>{portal.desc}</p>
                                </article>
                              </div>)
                          })}
                        </div>
                        <a className="carousel-control-prev" href="#carousel2_indicator" role="button" data-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden={true} />
                          <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carousel2_indicator" role="button" data-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden={true} />
                          <span className="sr-only">Next</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 sidebar-widget-area sidebar-break-md">
                    <div className="widget">
                      <div className="section-heading heading-dark">
                        <h3 className="item-heading">Buy &amp; Sell</h3>
                      </div>
                      <div className="widget-blog-post">
                        <ul className="block-list">
                          {this.props.goods.map((thing, i) => {
                            return (
                              <li className="single-item" key={i}>
                                <div className="item-img">
                                  <a href="#"><img src={thing.image.publicUrl} alt="Post" /></a>
                                </div>
                                <div className="item-content">
                                  <h4 className="item-title pro-title"><a href="#">Get Your {thing.label}</a>
                                  </h4>
                                  <p className="pro_details">{thing.desc}</p>
                                  <div className="item-post-date"><a href="#"><i className="fas fa-money" />{thing.currency} {thing.price}</a></div>
                                  <div className="item-post-by buy-btn">
                                    <a href="#"> <i className="fas fa-cart-plus" /> BUY NOW</a>
                                  </div>
                                </div>
                              </li>)
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="recent-projects section-padding">
                <div className="container">
                  <div className="row">
                    <div className="col col-lg-12">
                      <div className="section-title-s2">
                        <h2>Upcoming Events</h2>
                        <p>Lorem ipsum dolor sit amet, mel postea mio liore corrumpit ea. Affert partiendo vix eu. Ei mea dolore democritum disu artio.</p>
                      </div>
                    </div>
                  </div>
                  {/* end row */}
                </div>
                <div className="row">
                  <div className="col col-xs-12">
                    <div className="recent-projects-grids">
                      {this.props.events.map((event, i) => {
                        return (
                          <div className="grid" key={i}>
                            <div className="project-img">
                              <img src={event.image.publicUrl} />
                            </div>
                            <div className="project-info">
                              <div className="inner-info">
                                <a href="#"><h3>{event.title}</h3></a>
                                <div className="tags">{event.desc}</div>
                              </div>
                            </div>
                          </div>)
                      })}
                    </div>
                  </div>
                </div>
              </section>
              <section className="section-padding">
                <div className="container">
                  <div className="row">
                    <div className="col col-md-4">
                      <div className="section-title">
                        <h2>What's Your Opinion</h2>
                      </div>
                      <div className="offer-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc ing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna.</p>
                        <label className="radio">RABI
                          <input type="radio" defaultChecked="checked" name="is_company" />
                          <span className="checkround" />
                        </label>
                        <label className="radio">MUHARRAM
                          <input type="radio" name="is_company" />
                          <span className="checkround" />
                        </label>
                        <label className="radio">RAJAB
                          <input type="radio" name="is_company" />
                          <span className="checkround" />
                        </label>
                        <a href="#" className="read-more"><img src="images/btn.jpg" /></a>
                      </div>
                    </div>
                    <div className="col col-lg-4">
                      <div className="about-us-section">
                        <div className="section-title">
                          <h2>hr management</h2>
                        </div>
                        <div className="details">
                          <p>Lorem ipsum dolor sit amet, sed do eiusmod incididunt incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                          <div className="social">
                            <p>Get Connected With Us:</p>
                            <ul className="social-links">
                              <li><a href="#"><i className="fa fa-facebook-square" /></a></li>
                              <li><a href="#"><i className="fa fa-twitter-square" /></a></li>
                              <li><a href="#"><i className="fa fa-instagram" /></a></li>
                              <li><a href="#"><i className="fa fa-linkedin-square" /></a></li>
                            </ul>
                          </div>
                          <div className="btns">
                            <a href="#" className="theme-btn-s3">Read More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col col-lg-4 hr-manager">
                      <div className="section-title">
                        <h2>Know Me</h2>
                      </div>
                      <h4>HR Unit</h4>
                      <p>Lorem ipsum dolor sit amet, sed do eiusmod incididunt ut labore et dolore magna..</p>
                      <img src="images/hr-person.png" />
                    </div>
                  </div>
                  {/* end row */}
                </div>
                {/* end container */}
              </section>
            </div>
          </div>
          <footer className="footer">
            <div className="d-sm-flex justify-content-center justify-content-sm-between"> <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2019 <a href="#" target="_blank">GIS</a>. All rights reserved.</span><span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Designed &amp; Developed By GIS <i className="far fa-heart text-danger" /></span> </div>
          </footer>
        </div>
      </div>
    )
  };
}

export default App;