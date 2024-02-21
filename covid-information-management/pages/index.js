import axios from "axios";
import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather?q=hanoi&units=metric&appid=39c170ea2faa55a3196f9ac535873360"
  );

  const data = response.data;
  return {
    props: {data}
  }
}


export default function Home({data}) {
  return <div className={styles.container}>
    <h1>Hanoi weather: {data.weather[0].main}</h1>
  </div>;
}
