import type { GetStaticPaths, GetStaticProps } from 'next'
import { Layout } from '@vercel/examples-ui'
import { Dictionary } from '../../../lib/types'
import api from '../../../lib/api'

interface Params {
  locale: string
  country: string
}

interface Props {
  locale: string
  dictionary: Dictionary
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {


  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<unknown, Params> = async ({

  params: { locale },
}) => {
  // Fetch the dictionary for the specified locale
  const dictionary = await api.dictionaries.fetch(locale);

  return {
    props: {
      locale,
      dictionary,
    },
    revalidate: false,
  };
};

export default function ContactPage({ locale, dictionary }: Props) {
  return (
    <>

     {/* <Layout title={dictionary.title} description={dictionary.subtitle}> */}
     <h2>Contact</h2>
      <p className="mt-4 sm:text-xl text-lg text-gray-700">
            {dictionary.subtitle}
          </p>
    {/* </Layout> */}
    </>
  );
}

ContactPage.Layout = Layout;
