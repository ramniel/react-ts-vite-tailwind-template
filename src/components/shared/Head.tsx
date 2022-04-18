import { Helmet } from 'react-helmet-async';

type Props = {
  title: string;
  description?: string;
};

const APP_TITLE = import.meta.env.VITE_APP_TITLE;
const APP_DESCRIPTION = import.meta.env.VITE_APP_DESCRIPTION;

export default function Head({ title, description }: Props) {
  return (
    <Helmet>
      <title>{`${title} | ${APP_TITLE}`}</title>
      <meta name="description" content={description ?? `This is ${APP_DESCRIPTION}`} />
      <meta property="og:title" content={`${title} | ${APP_TITLE}`} />
      <meta property="og:description" content={description ?? `This is ${APP_DESCRIPTION}`} />
      <meta name="robots" content="noindex" />
    </Helmet>
  );
}
