import Head from 'next/head';
import { Inter } from '@next/font/google';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Results from '../components/Results';
import requests from '../utils/requests';

const inter = Inter({ subsets: ['latin'] })

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>COMPSCINEMA</title>
        <link rel='icon' href='/logo.png' />
      </Head>

      <Header />
      <Nav />
      <Results results={results}/>
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const requestUrl = requests[genre]?.url || requests.fetchTrending.url;
  const request = await fetch(`https://api.themoviedb.org/3${requestUrl}`).then((res) => res.json());

  return {
    props: {
      results: request.results || null,
    },
  };
}