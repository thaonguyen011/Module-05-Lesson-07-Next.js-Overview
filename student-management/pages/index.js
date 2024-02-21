import { getStudents } from "./mock-data/data";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.tr}>ID</th>
            <th className={styles.tr}>Name</th>
            <th className={styles.tr}>Action</th>
          </tr>
        </thead>
        <tbody>
          {getStudents().map((student) => (
            <tr className={styles.tr} key={student.id}>
              <td className={styles.td}>{student.id}</td>
              <td className={styles.td}>{student.name}</td>
              <td className={styles.td}>
                <Link href={`/student/${encodeURIComponent(student.id)}`}>
                  Show
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
