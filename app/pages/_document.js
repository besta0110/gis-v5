import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          {/* plugins:css */}
          <link rel="stylesheet" href="vendors/iconfonts/font-awesome/css/all.min.css" />
          <link rel="stylesheet" href="vendors/css/vendor.bundle.base.css" />
          <link rel="stylesheet" href="vendors/css/vendor.bundle.addons.css" />
          {/* endinject */}
          {/* main css */}
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,900&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="css/bootstrap.css" />
          <link rel="stylesheet" href="css/reset.css" />
          <link rel="stylesheet" href="css/font-awesome.min.css" />
          <link rel="stylesheet" href="css/flaticon.css" />
          <link rel="stylesheet" href="css/fonts.css" />
          <link rel="stylesheet" href="css/style.css" />
          <link rel="stylesheet" href="css/main-menu.css" />
          {/*-------------------------------------------------------------------------*/}
          {/* Plugins for this template */}
          <link href="css/main/animate.css" rel="stylesheet" />
          <link href="css/main/owl.carousel.css" rel="stylesheet" />
          <link href="css/main/owl.theme.css" rel="stylesheet" />
          <link href="css/main/slick.css" rel="stylesheet" />
          <link href="css/main/slick-theme.css" rel="stylesheet" />
          <link href="css/main/owl.transitions.css" rel="stylesheet" />
          <link href="css/main/jquery.fancybox.css" rel="stylesheet" />
          <link href="css/main/jquery.mCustomScrollbar.min.css" rel="stylesheet" />
          <link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.min.css" />
          {/* Custom styles for this template */}
          <link href="css/main/main-page.css" rel="stylesheet" />
          <link href="style.css" rel="stylesheet" />
        </Head>
        <body>
          <div className="container-scroller">
            <div className="preloader">
              <div className="preloader-inner">
                <img src="images/preloader.gif" />
              </div>
            </div>
            <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row default-layout-navbar">
              <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                <a className="navbar-brand brand-logo" href="index.html"><img src="images/logo.png" alt="logo" /></a>
                <a className="navbar-brand brand-logo-mini" href="index.html"><img src="images/logo-mini.png" alt="logo" /></a>
              </div>
              <div className="navbar-menu-wrapper d-flex align-items-stretch main-menu">
                <button className="navbar-toggler navbar-toggler align-self-center bar-button" type="button" data-toggle="minimize"> <span className="fas fa-bars" /> </button>
                <header id="header" className="site-header header-style-3">
                  {/* end topbar */}
                  <nav className="navigation navbar navbar-default original">
                    <div className="container-fluid">
                      <div className="navbar-header">
                        <button type="button" className="open-btn">
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar" />
                          <span className="icon-bar" />
                          <span className="icon-bar" />
                        </button>
                      </div>
                      <div id="navbar" className="navbar-collapse collapse navbar-right navigation-holder">
                        <button className="close-navbar"><i className="fa fa-close" /></button>
                        <ul className="nav navbar-nav">
                          <li className="menu-item-has-children">
                            <a href="#">Home</a>
                          </li>
                          <li className="menu-item-has-children"><a href="#">Organization <i className="fas fa-angle-down" /></a>
                            <ul className="sub-menu">
                              <li><a href="#">sub menu 1</a></li>
                              <li><a href="#">sub menu 1</a></li>
                              <li><a href="#">sub menu 1</a></li>
                              <li><a href="#">sub menu 1</a></li>
                              <li><a href="#">sub menu 1</a></li>
                              <li><a href="#">sub menu 1</a></li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children"><a href="#">Employee Resources <i className="fas fa-angle-down" /></a>
                            <ul className="sub-menu">
                              <li><a href="#">sub menu 1</a></li>
                              <li><a href="#">sub menu 1</a></li>
                              <li><a href="#">sub menu 1</a></li>
                              <li><a href="#">sub menu 1</a></li>
                              <li><a href="#">sub menu 1</a></li>
                              <li><a href="#">sub menu 1</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Tools &amp; website</a></li>
                          <li className="menu-item-has-children">
                            <a href="#">Information Centre <i className="fas fa-angle-down" /></a>
                            <ul className="sub-menu">
                              <li><a href="#">sub menu 1</a></li>
                              <li><a href="#">sub menu 1</a></li>
                              <li><a href="#">sub menu 1</a></li>
                              <li><a href="#">sub menu 1</a></li>
                              <li><a href="#">sub menu 1</a></li>
                              <li><a href="#">sub menu 1</a></li>
                              <li><a href="#">sub menu 1</a></li>
                            </ul>
                          </li>
                          <li><a href="#">GIS Community</a></li>
                          <li className="menu-item-has-children last-menu">
                            <a href="#"><i className="fas fa-angle-down" /></a>
                            <ul className="sub-menu">
                              <li><a href="#">Mail</a></li>
                              <li><a href="#">Calender</a></li>
                              <li><a href="#">Notes</a></li>
                              <li><a href="#">Chats</a></li>
                              <li><a href="#">Contacts</a></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      {/* end of nav-collapse */}
                    </div>
                    {/* end of container */}
                  </nav>
                </header>
                <div className="header-right">
                  <div className="upper-header">
                    <ul className="navbar-nav search-section nav-item dropdown">
                      <button id="searchbar"><i className="fa fa-search" /></button>
                      <form className="search-form" id="searchform" action="">
                        <div className="input-group">
                          <input type="text" name="search" className="search form-control" placeholder="Search" />
                          <span className="input-group-addon" id="basic-addon2"><i className="fa fa-search" aria-hidden="true" />
                          </span>
                        </div>
                      </form>
                    </ul>
                    <ul>
                      <li className="nav-item dropdown d-lg-flex flag">
                        <div className="nav-link"> <span className="dropdown-toggle btn btn-outline-dark" id="languageDropdown" data-toggle="dropdown">
                          <img src="images/eng-flag.png" />
                        </span>
                          <div className="dropdown-menu navbar-dropdown" aria-labelledby="languageDropdown"> <a className="dropdown-item font-weight-medium" href="#"> English </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item font-weight-medium" href="#"> Arabic </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item font-weight-medium" href="#"> Latin </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item font-weight-medium" href="#"> French</a> </div>
                        </div>
                      </li>
                    </ul>
                    <ul className="navbar-nav">
                      <li className="nav-item nav-settings d-lg-block">
                        <a className="nav-link" href="#"> <i className="fas fa-ellipsis-h" /> </a>
                      </li>
                    </ul>
                  </div>
                  <div className="lower-header">
                    <ul className="navbar-nav navbar-nav-right">
                      <li className="nav-item nav-profile dropdown user-profile">
                        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown"> <img src="images/user.jpg" alt="profile" /> &nbsp;My GIS </a>
                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                          <a className="dropdown-item"> <i className="fas fa-cog text-primary" /> Settings </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item"> <i className="fas fa-power-off text-primary" /> Logout </a>
                        </div>
                      </li>
                    </ul></div>
                  <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas"> <span className="fas fa-bars" /> </button>
                </div>
              </div>
            </nav>
            <Main />
          </div>
          <NextScript />
          <script src="vendors/js/vendor.bundle.base.js"></script>
          <script src="vendors/js/vendor.bundle.addons.js"></script>
          <script src="js/off-canvas.js"></script>
          <script src="js/hoverable-collapse.js"></script>
          <script src="js/misc.js"></script>
          <script src="js/settings.js"></script>
          <script src="js/todolist.js"></script>
          <script src="js/dashboard.js"></script>
          <script src="js/main-menu.js"></script>
          <script src="js/main/jquery.min.js"></script>
          <script src="js/main/bootstrap.min.js"></script>
          <script src="js/main/jquery-plugin-collection.js"></script>
          <script src="https://unpkg.com/swiper/js/swiper.min.js"></script>
          <script src="js/main/jquery.mCustomScrollbar.js"></script>
          <script src="js/main/script.js"></script>
          <div className="style-switcher-box">
            <button id="toggle-btn" className="toggle-btn"><i className="fa fa-cog" /></button>
            <div id="switcherinner" className="switcher-inner">
            </div>
          </div>
          <div className="vertical-chat-status">
            <button className="toggle-btn" id="toggle-btn2"><i className="fas fa-cog" /></button>
            <div className="fuse-chat" lockedopen="gt-md" name="chatPanel" position="right" style={{ width: 70, minWidth: 70, maxWidth: 70 }}>
              <div className="chat-panel header mat-elevation-z4 primary" fxlayout="row" fxlayoutalign="space-between center" style={{ flexDirection: 'row', boxSizing: 'border-box', display: 'flex', placeContent: 'center space-between', alignItems: 'center' }}>
                <div className="title ml-16 ng-star-inserted" style={{ flexDirection: 'row', boxSizing: 'border-box', placeContent: 'center flex-start', alignItems: 'center' }}>
                  <i className="fas fa-comment-dots" />
                  <div fuseperfectscrollbar="" id="contacts-list" className="ps ps--active-y">
                    <div className="contacts-list-item online ng-star-inserted">
                      <img className="avatar" mattooltipposition="left" aria-describedby="cdk-describedby-message-5" cdk-describedby-host="" src="images/faces/face1.jpg" style={{ touchAction: 'none', userSelect: 'none', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }} />
                      <div className="unread-count ng-star-inserted">2</div><div className="status-icon online" />
                    </div>
                    <div className="contacts-list-item do-not-disturb ng-star-inserted">
                      <img className="avatar" mattooltipposition="left" aria-describedby="cdk-describedby-message-6" cdk-describedby-host="" src="images/faces/face2.jpg" style={{ touchAction: 'none', userSelect: 'none', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }} />
                      <div className="status-icon do-not-disturb" /></div>
                    <div className="contacts-list-item do-not-disturb ng-star-inserted"><img className="avatar" mattooltipposition="left" aria-describedby="cdk-describedby-message-7" cdk-describedby-host="" src="images/faces/face3.jpg" style={{ touchAction: 'none', userSelect: 'none', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }} />
                      <div className="status-icon do-not-disturb" /></div>
                    <div className="contacts-list-item offline ng-star-inserted"><img className="avatar" mattooltipposition="left" aria-describedby="cdk-describedby-message-8" cdk-describedby-host="" src="images/faces/face4.jpg" style={{ touchAction: 'none', userSelect: 'none', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }} />
                      <div className="unread-count ng-star-inserted">3</div><div className="status-icon offline" /></div>
                    <div className="contacts-list-item offline ng-star-inserted"><img className="avatar" mattooltipposition="left" aria-describedby="cdk-describedby-message-9" cdk-describedby-host="" src="images/faces/face5.jpg" style={{ touchAction: 'none', userSelect: 'none', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }} />
                      <div className="unread-count ng-star-inserted">1</div><div className="status-icon offline" /></div><div className="contacts-list-item offline ng-star-inserted"><img className="avatar" mattooltipposition="left" aria-describedby="cdk-describedby-message-10" cdk-describedby-host="" src="images/faces/face6.jpg" style={{ touchAction: 'none', userSelect: 'none', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }} />
                      <div className="status-icon offline" /></div>
                    <div className="contacts-list-item online ng-star-inserted">
                      <img className="avatar" mattooltipposition="left" aria-describedby="cdk-describedby-message-5" cdk-describedby-host="" src="images/faces/face1.jpg" style={{ touchAction: 'none', userSelect: 'none', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }} />
                      <div className="unread-count ng-star-inserted">2</div><div className="status-icon online" />
                    </div>
                    <div className="contacts-list-item do-not-disturb ng-star-inserted"><img className="avatar" mattooltipposition="left" aria-describedby="cdk-describedby-message-6" cdk-describedby-host="" src="images/faces/face2.jpg" style={{ touchAction: 'none', userSelect: 'none', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }} />
                      <div className="status-icon do-not-disturb" /></div>
                    <div className="contacts-list-item do-not-disturb ng-star-inserted"><img className="avatar" mattooltipposition="left" aria-describedby="cdk-describedby-message-7" cdk-describedby-host="" src="images/faces/face3.jpg" style={{ touchAction: 'none', userSelect: 'none', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }} />
                      <div className="status-icon do-not-disturb" /></div>
                    <div className="contacts-list-item offline ng-star-inserted"><img className="avatar" mattooltipposition="left" aria-describedby="cdk-describedby-message-8" cdk-describedby-host="" src="images/faces/face4.jpg" style={{ touchAction: 'none', userSelect: 'none', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }} />
                      <div className="unread-count ng-star-inserted">3</div><div className="status-icon offline" /></div>
                    <div className="contacts-list-item offline ng-star-inserted"><img className="avatar" mattooltipposition="left" aria-describedby="cdk-describedby-message-9" cdk-describedby-host="" src="images/faces/face5.jpg" style={{ touchAction: 'none', userSelect: 'none', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }} />
                      <div className="unread-count ng-star-inserted">1</div><div className="status-icon offline" /></div><div className="contacts-list-item offline ng-star-inserted"><img className="avatar" mattooltipposition="left" aria-describedby="cdk-describedby-message-10" cdk-describedby-host="" src="images/faces/face6.jpg" style={{ touchAction: 'none', userSelect: 'none', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }} />
                      <div className="status-icon offline" /></div>
                    <div className="unread-count ng-star-inserted">1</div><div className="status-icon offline" /></div><div className="contacts-list-item offline ng-star-inserted"><img className="avatar" mattooltipposition="left" aria-describedby="cdk-describedby-message-10" cdk-describedby-host="" src="images/faces/face6.jpg" style={{ touchAction: 'none', userSelect: 'none', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }} />
                    <div className="status-icon offline" /></div>
                  <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}><div className="ps__thumb-x" tabIndex={0} style={{ left: 0, width: 0 }} /></div><div className="ps__rail-y" style={{ top: 0, height: 593, right: 0 }}><div className="ps__thumb-y" tabIndex={0} style={{ top: 0, height: 245 }} /></div></div></div></div>
          </div>
        </body>
      </html>
    )
  }
}
