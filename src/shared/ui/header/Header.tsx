import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export function Header() {
	return (
		<header className={styles.header}>
			<Link className={styles.brand} to="/">
				<span className={styles.logo}>Logo</span>
				<span className={styles.name}>Parley</span>
			</Link>

			<nav className={styles.navigation} aria-label="Основная навигация">
				<Link className={styles.offersLink} to="/search">
					Предложения
				</Link>
				<Link className={styles.loginButton} to="/auth">
					Войти
				</Link>
			</nav>
		</header>
	);
}
