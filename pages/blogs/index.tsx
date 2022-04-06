import Container from "../../components/container";
import MoreStories from "../../components/more-stories";
import HeroPost from "../../components/hero-post";
import Intro from "../../components/intro";
import Layout from "../../components/layout";
import { getAllPosts } from "../../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import Post from "../../types/post";
import useOnScrolled from "../../hooks/useOnScrolled";
import Link from "next/link";
import { ChatAltIcon } from "@heroicons/react/solid";

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const scrolled = useOnScrolled();
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>Tato's blog</title>
        </Head>
        <Container>
          <header
            className={`bg-zinc-800 z-10 fixed left-0 top-0 w-full duration-500 overflow-hidden ${
              scrolled && "h-16"
            }`}
          >
            <nav className="flex justify-between items-center m-auto max-w-7xl h-16 z-50">
              <button
                className={`logo text-3xl font-Poppins tracking-wider cursor-pointer px-4 py-1 -ml-40 hover:text-sky-500 rounded-md duration-200 opacity-0 ${
                  scrolled && "opacity-100 ml-0"
                }`}
              >
                Tato
              </button>
              <ul
                className={`flex gap-4 text-lg duration-500 translate-x-20 ${
                  scrolled && " -translate-x-1"
                }`}
              >
                <li className=" px-3 py-2 cursor-pointer border-b-2 border-transparent hover:border-sky-500 duration-150">
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li className="text-gray-400 px-3 py-2 cursor-pointer border-b-2 border-transparent hover:border-sky-500 duration-150">
                  <Link href="/blogs">
                    <a>Blog</a>
                  </Link>
                </li>
                <li className="px-3 py-2 cursor-pointer border-b-2 border-transparent hover:border-sky-500 duration-150">
                  <Link href="/about">
                    <a>About</a>
                  </Link>
                </li>
                <li
                  className={`group cursor-pointer opacity-0 px-6 py-2 rounded-md bg-sky-600 hover:text-sky-700 hover:bg-white duration-300 ${
                    scrolled && "opacity-100"
                  }`}
                >
                  <Link href="/">
                    <a>
                      <ChatAltIcon className="w-6 h-6 inline-block mr-2 group-hover:-rotate-[25deg] group-hover:scale-150 duration-300" />
                      Contact me
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
