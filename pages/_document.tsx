import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) => (props: any) =>
          sheets.collect(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [
        ...React.Children.toArray(initialProps.styles),
        sheets.getStyleElement(),
      ],
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

// import Document, {
//   DocumentContext,
//   Html,
//   Main,
//   Head,
//   NextScript,
// } from 'next/document';
// import { ServerStyleSheets } from '@material-ui/styles';
// import { ServerStyleSheet } from 'styled-components';

// class MyDocument extends Document {
// 	static async getInitialProps(ctx: DocumentContext) {
// 		const styledComponentsSheet = new ServerStyleSheet();
// 		const materialSheets = new ServerStyleSheets();
// 		const originalRenderPage = ctx.renderPage;
// 		try {
// 			ctx.renderPage = () =>
// 				originalRenderPage({
// 					enhanceApp: (App) => (props) =>
// 						styledComponentsSheet.collectStyles(
// 							materialSheets.collect(<App {...props} />),
// 						),
// 				});
// 			const initialProps = await Document.getInitialProps(ctx);
// 			return {
// 				...initialProps,
// 				styles: (
// 					<>
// 						{" "}
// 						{initialProps.styles} {materialSheets.getStyleElement()}{" "}
// 						{styledComponentsSheet.getStyleElement()}{" "}
// 					</>
// 				),
// 			};
// 		} finally {
// 			styledComponentsSheet.seal();
// 		}
// 		const initialProps = await Document.getInitialProps(ctx);
// 		return { ...initialProps };
// 	}
// 	render() {
// 		return (
// 			<Html lang="ko">
// 				<Head>
// 					<meta charSet="utf-8" />
// 				</Head>
// 				<body>
// 					<Main />
// 					<NextScript />
// 				</body>
// 			</Html>
// 		);
// 	}
// }

// export default MyDocument;
