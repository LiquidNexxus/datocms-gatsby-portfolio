import React from "react"
import PropTypes from "prop-types"

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <base href="/"/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800"/>
          <link rel="stylesheet" href="assets/vendor/bootstrap/bootstrap.min.css"/>
          <link rel="stylesheet" href="assets/vendor/icon-awesome/css/font-awesome.min.css"/>
          <link rel="stylesheet" href="assets/vendor/icon-line/css/simple-line-icons.css"/>
          <link rel="stylesheet" href="assets/vendor/icon-etlinefont/style.css"/>
          <link rel="stylesheet" href="assets/vendor/icon-line-pro/style.css"/>
          <link rel="stylesheet" href="assets/vendor/icon-hs/style.css"/>
          <link rel="stylesheet" href="assets/vendor/dzsparallaxer/dzsparallaxer.css"/>
          <link rel="stylesheet" href="assets/vendor/dzsparallaxer/dzsscroller/scroller.css"/>
          <link rel="stylesheet" href="assets/vendor/dzsparallaxer/advancedscroller/plugin.css"/>
          <link rel="stylesheet" href="assets/vendor/fancybox/jquery.fancybox.min.css"/>
          <link rel="stylesheet" href="assets/vendor/typedjs/typed.css"/>
          <link rel="stylesheet" href="assets/vendor/animate.css"/>
          <link rel="stylesheet" href="../../assets/vendor/cubeportfolio-full/cubeportfolio/css/cubeportfolio.min.css"/>
          <link rel="stylesheet" href="../../assets/vendor/slick-carousel/slick/slick.css"/>
          <link rel="stylesheet" href="assets/vendor/hs-megamenu/src/hs.megamenu.css"/>
          <link rel="stylesheet" href="assets/vendor/hamburgers/hamburgers.min.css"/>
          <link rel="stylesheet" href="assets/css/unify-core.css"/>
          <link rel="stylesheet" href="assets/css/unify-components.css"/>
          <link rel="stylesheet" href="assets/css/unify-globals.css"/>
          

        <link rel="stylesheet" href="assets/css/custom.css"/>
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
        <script src="assets/vendor/jquery/jquery.min.js"></script>
        <script src="assets/vendor/jquery-migrate/jquery-migrate.min.js"></script>
        <script src="assets/vendor/popper.js/popper.min.js"></script>
        <script src="assets/vendor/bootstrap/bootstrap.min.js"></script>


        <script src="assets/vendor/hs-megamenu/src/hs.megamenu.js"></script>
        <script src="assets/vendor/cubeportfolio-full/cubeportfolio/js/jquery.cubeportfolio.min.js"></script>

        <script src="assets/js/hs.core.js"></script>
        <script src="assets/js/components/hs.header.js"></script>
        <script src="assets/js/helpers/hs.hamburgers.js"></script>
        <script src="assets/js/components/hs.tabs.js"></script>
        <script src="assets/js/components/hs.cubeportfolio.js"></script>
        <script src="assets/js/components/hs.go-to.js"></script>

        <script src="assets/js/custom.js"></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
                    $(document).on('ready', function () {
                      // initialization of go to
                      $.HSCore.components.HSGoTo.init('.js-go-to')
                  
                      // initialization of tabs
                      $.HSCore.components.HSTabs.init('[role="tablist"]');
                    });
                  
                    $(window).on('load', function () {
                      // initialization of header
                      $.HSCore.components.HSHeader.init($('#js-header'));
                      $.HSCore.helpers.HSHamburgers.init('.hamburger');
                  
                      // initialization of HSMegaMenu component
                      $('.js-mega-menu').HSMegaMenu({
                        event: 'hover',
                        pageContainer: $('.container'),
                        breakpoint: 991
                      });
                  
                      // initialization of cubeportfolio
                      $.HSCore.components.HSCubeportfolio.init('.cbp');
                    });
                  
                    $(window).on('resize', function () {
                      setTimeout(function () {
                        $.HSCore.components.HSTabs.init('[role="tablist"]');
                      }, 200);
                    });
                `,
          }}
        />

          
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
