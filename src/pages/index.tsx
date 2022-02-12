import type { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
type Post = {
  id: number;
  title: string;
  body: string;
  user: {
    id: string;
    name: string;
    avatar: string;
  };
};
type HomeProps = {
  posts: Post[];
};
const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <div className="h-screen w-screen">
      <Head>
        <title>Next challenge</title>
        <meta name="description" content="Next challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" h-screen w-screen flex flex-1 flex-col justify-center text-center">
        <h1 className="text-5xl leading-normal text-gray-700">
          Welcome to Next Challenge
        </h1>
        <Link href="/posts">
          <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-48 self-center mt-6">
            Post List
          </a>
        </Link>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(
    (res) => res.json()
  );
  return {
    props: {
      posts,
    },
  };
};
export default Home;
