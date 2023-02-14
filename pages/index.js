import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";

export default function Home({ joke }) {
  return (
    <div className="container">
      <Head>
        <title>Next.js Toolbox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Next.js Toolbox" />
        <hr />
        <p className="description">
          Here's an example of a Netlify Form! When you fill this out, the
          submissions can be found in the Netlify Admin site.
        </p>
        <FeedbackForm />
        <JokeBlock joke={joke} />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://icanhazdadjoke.com/");
  if (!res.ok) {
    return {
      props: {
        joke: "No joke for you.",
      },
      revalidate: 60,
    };
  }

  const { joke } = await res.json();

  return {
    props: {
      joke: joke,
    },
    revalidate: 60,
  };
}
