import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from "gatsby"
import { HelmetDatoCms } from 'gatsby-source-datocms'

import Header from './Header'
import Footer from './Footer'

import '../../styles/index.scss'

const TemplateWrapper = ({ children }) => (
  <StaticQuery query={graphql`
    query LayoutQuery
    {
      datoCmsSite {
        globalSeo {
          siteName
        }
        faviconMetaTags {
          ...GatsbyDatoCmsFaviconMetaTags
        }
      }
      datoCmsHome {
        seoMetaTags {
          ...GatsbyDatoCmsSeoMetaTags
        }
        introTextNode {
          childMarkdownRemark {
            html
          }
        }
        copyright
      }
      allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
        edges {
          node {
            profileType
            url
          }
        }
      }
    }
  `}
  render={data => (
    <div >
      <HelmetDatoCms
        favicon={data.datoCmsSite.faviconMetaTags}
        seo={data.datoCmsHome.seoMetaTags}
      >

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
ß
      <link rel="stylesheet" href="assets/css/unify-core.css"/>
      <link rel="stylesheet" href="assets/css/unify-components.css"/>
      <link rel="stylesheet" href="assets/css/unify-globals.css"/>

      <link rel="stylesheet" href="assets/css/custom.css"/>
      
      </HelmetDatoCms>
      <Header/>
        {children}
      <Footer/>
    </div>
    )}
  />
)

TemplateWrapper.propTypes = {
  children: PropTypes.object,
}

export default TemplateWrapper
