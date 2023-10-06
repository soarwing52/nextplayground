import styles from './page.module.css';
import Welcome from './pages/Welcome/Welcome';

export default function Home() {
  return (
    <main className={styles.main}>
      <Welcome />
    </main>
  );
}
