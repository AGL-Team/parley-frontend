import { Link } from "react-router-dom";
import { useAuth } from "../../../entities/user";
import styles from "./Header.module.css";

export function Header() {
	const { status, user } = useAuth();

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
				{status === "authenticated" && user ? (
					<div className={styles.userPanel} title={user.email}>
						<span className={styles.avatar} aria-hidden="true">
							{user.name.charAt(0).toUpperCase() || "?"}
						</span>
						<span className={styles.userDetails}>
							<strong>{user.name}</strong>
							<small>{user.tag}</small>
						</span>
					</div>
				) : status === "loading" ? (
					<span className={styles.authStatus}>Проверяем вход…</span>
				) : (
					<Link className={styles.loginButton} to="/login">
						Войти
					</Link>
				)}
			</nav>
		</header>
	);
}
