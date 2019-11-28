import React from 'react';
import Head from 'next/head';

const Header = () => (
  <Head>
    <title>Boilerplate</title>
    <link rel="icon" href="/static/favicon.ico" />
    <link href="/static/css/style.css" rel="stylesheet" />
    <link href="/static/css/bootstrap.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.6/antd.css"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap"
      rel="stylesheet"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    <meta
      property="og:image"
      content="https://example.com/public/static/logo.png"
    />
    <meta property="og:site_name" content="NextJS Boilerplate" />
    <style>
      {`
        @font-face {
          font-family: 'SF UI Text Regular';
          font-style: normal;
          font-weight: normal;
          src: local('SF UI Text Regular'), url('/static/fonts/SFUIText-Regular.woff') format('woff');
        }

        @font-face {
          font-family: 'SF UI Text Italic';
          font-style: normal;
          font-weight: normal;
          src: local('SF UI Text Italic'), url('/static/fonts/SFUIText-RegularItalic.woff') format('woff');
        }

        @font-face {
          font-family: 'SF UI Text Light';
          font-style: normal;
          font-weight: normal;
          src: local('SF UI Text Light'), url('/static/fonts/SFUIText-Light.woff') format('woff');
        }

        @font-face {
          font-family: 'SF UI Text Light Italic';
          font-style: normal;
          font-weight: normal;
          src: local('SF UI Text Light Italic'), url('/static/fonts/SFUIText-LightItalic.woff') format('woff');
        }

        @font-face {
          font-family: 'SF UI Text Medium';
          font-style: normal;
          font-weight: normal;
          src: local('SF UI Text Medium'), url('/static/fonts/SFUIText-Medium.woff') format('woff');
        }

        @font-face {
          font-family: 'SF UI Text Medium Italic';
          font-style: normal;
          font-weight: normal;
          src: local('SF UI Text Medium Italic'), url('/static/fonts/SFUIText-MediumItalic.woff') format('woff');
        }

        @font-face {
          font-family: 'SF UI Text Semibold';
          font-style: normal;
          font-weight: normal;
          src: local('SF UI Text Semibold'), url('/static/fonts/SFUIText-Semibold.woff') format('woff');
        }

        @font-face {
          font-family: 'SF UI Text Semibold Italic';
          font-style: normal;
          font-weight: normal;
          src: local('SF UI Text Semibold Italic'), url('/static/fonts/SFUIText-SemiboldItalic.woff') format('woff');
        }

        @font-face {
          font-family: 'SF UI Text Bold';
          font-style: normal;
          font-weight: normal;
          src: local('SF UI Text Bold'), url('/static/fonts/SFUIText-Bold.woff') format('woff');
        }

        @font-face {
          font-family: 'SF UI Text Bold Italic';
          font-style: normal;
          font-weight: normal;
          src: local('SF UI Text Bold Italic'), url('/static/fonts/SFUIText-BoldItalic.woff') format('woff');
        }

        @font-face {
          font-family: 'SF UI Text Heavy';
          font-style: normal;
          font-weight: normal;
          src: local('SF UI Text Heavy'), url('/static/fonts/SFUIText-Heavy.woff') format('woff');
        }

        @font-face {
          font-family: 'SF UI Text Heavy Italic';
          font-style: normal;
          font-weight: normal;
          src: local('SF UI Text Heavy Italic'), url('/static/fonts/SFUIText-HeavyItalic.woff') format('woff');
        }

        @font-face {
          font-family: 'SF UI Text Regular';
          font-style: normal;
          font-weight: normal;
          src: local('SF UI Text Regular'), url('/static/fonts/SFUIText-Regular.woff') format('woff');
        }

        @font-face {
          font-family: 'SF UI Text Bold';
          font-style: normal;
          font-weight: normal;
          src: local('SF UI Text Bold'), url('/static/fonts/SFUIText-Bold.woff') format('woff');
        }

        @font-face {
          font-family: 'SF UI Text Light';
          font-style: normal;
          font-weight: normal;
          src: local('SF UI Text Light'), url('/static/fonts/SFUIText-Light.woff') format('woff');
        }

        @font-face {
          font-family: 'product_sansregular';
          src: url('/static/fonts/product_sans_regular-webfont.woff2') format('woff2'), url('/static/fonts/product-sans/product_sans_regular-webfont.woff') format('woff');
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: 'product_sansbold';
          src: url('/static/fonts/product_sans_bold-webfont.woff2') format('woff2'), url('/static/fonts/product-sans/product_sans_bold-webfont.woff') format('woff');
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: 'product_sansbold';
          src: url('/static/fonts/product_sans_bold-webfont.woff2') format('woff2'), url('/static/fonts/product-sans/product_sans_bold-webfont.woff') format('woff');
          font-weight: normal;
          font-style: normal;
        }


      body {
        font-family: 'product_sansregular','product_sansbold', 'SF UI Text Regular', 'SF UI Text Bold', 'SF UI Text Light', 'SF UI Text Heavy', 'SF UI Text SemiBold';
      }
    `}
    </style>
  </Head>
);

export default Header;
