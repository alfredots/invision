import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Mulish:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <script
            src="https://apis.google.com/js/platform.js"
            async
            defer
          ></script>
          <meta
            name="google-signin-client_id"
            content="573428625274-mt242098he6plaljcu117938rn8kf61t.apps.googleusercontent.com"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
