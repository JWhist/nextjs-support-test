export default function Joke({ joke, status }) {
  return (
    <div>
      {status}
      <JokeBlock joke={joke} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json", UserAgent: "testing-Netlify" },
  });
  const res2 = await fetch("https://tranquil-youtiao-b5df2a.netlify.app/");
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
      status: res2.status,
    },
    revalidate: 60,
  };
}
