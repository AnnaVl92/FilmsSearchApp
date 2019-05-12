import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const sheet = new ServerStyleSheet()
    const page = ctx(App => props => sheet.collectStyles(<App {...props} />))
    return { ...page }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charset="UTF-8">
          <meta name= "description" content=""/>
          <title>Webpack App</title>
          <link rel="stylesheet" href="../../../node_modules/bootstrap/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
          <link rel="stylesheet" href="./app.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument