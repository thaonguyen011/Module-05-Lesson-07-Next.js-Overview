import { useRouter } from "next/router";
import styles from "../styles/Login.module.css";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <div className={styles.formContent}>
        <h2>Login</h2>
        <form>
          <input
            className={styles.input}
            type="text"
            id="login"
            name="login"
            placeholder="login"
          />
          <input
            className={styles.input}
            type="text"
            id="password"
            name="login"
            placeholder="password"
          />
          <Link href="/">Dashboard</Link>
          <button type="button" onClick={() => router.push("/")}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
