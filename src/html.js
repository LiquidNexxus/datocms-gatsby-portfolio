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
