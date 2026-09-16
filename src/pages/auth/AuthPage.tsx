import { Link } from "react-router-dom";
import styles from "./AuthPage.module.css";

export function AuthPage() {
	return (
		<main className={styles.page}>
			<section
				className={styles.imagePlaceholder}
				aria-label="Место для изображения"
			>
				<Link className={styles.homeLink} to="/">
					← На главную
				</Link>
				<span>Изображение</span>
			</section>

			<section className={styles.formSection}>
				<div className={styles.formContainer}>
					<div className={styles.heading}>
						<span className={styles.logo}>Logo</span>
						<h1 className={styles.title}>Войти в Parley</h1>
						<p className={styles.subtitle}>
							Введите данные своей учётной записи
						</p>
					</div>

					<form className={styles.form}>
						<label className={styles.field}>
							<span>Email</span>
							<input type="email" placeholder="name@example.com" />
						</label>

						<label className={styles.field}>
							<span>Пароль</span>
							<input type="password" placeholder="Введите пароль" />
						</label>

						<button className={styles.submitButton} type="button">
							Войти
						</button>
					</form>

					<div className={styles.divider}>
						<span>или</span>
					</div>

					<button className={styles.googleButton} type="button">
						<span className={styles.googleIcon}>G</span>
						Войти через Google
					</button>
				</div>
			</section>
		</main>
	);
}
