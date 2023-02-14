import styles from "./JokeBlock.module.css";

export default function JokeBlock({ joke }) {
  return <blockquote className={styles.quote}>{joke}</blockquote>;
}
