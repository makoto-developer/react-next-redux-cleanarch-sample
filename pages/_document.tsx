import { DocumentContext, DocumentProps, Html, Head, Main, NextScript } from 'next/document';
import {
  DocumentHeadTags,
  DocumentHeadTagsProps,
  documentGetInitialProps,
} from '@mui/material-nextjs/v16-pagesRouter';

const MyDocument = (props: DocumentProps & DocumentHeadTagsProps) => (
  <Html lang='ja'>
    <Head>
      <DocumentHeadTags {...props} />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  return await documentGetInitialProps(ctx);
};
