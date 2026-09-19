import { useState } from "react";
import type { FormEvent } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthApiError, useAuth } from "../../entities/user";
import styles from "./AuthPage.module.css";

export function LoginPage() {
	const navigate = useNavigate();
	const { login, status } = useAuth();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	if (status === "authenticated") {
		return <Navigate replace to="/" />;
	}

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setErrorMessage(null);
		setIsSubmitting(true);

		const formData = new FormData(event.currentTarget);

		try {
			await login({
				login: String(formData.get("login") ?? "").trim(),
				password: String(formData.get("password") ?? ""),
			});
			navigate("/", { replace: true });
		} catch (error) {
			if (error instanceof AuthApiError && error.status === 401) {
				setErrorMessage("Неверный email, тег или пароль");
			} else if (error instanceof AuthApiError && error.status === 503) {
				setErrorMessage("Сервис авторизации временно недоступен");
			} else {
				setErrorMessage("Не удалось войти. Попробуйте ещё раз");
			}
		} finally {
			setIsSubmitting(false);
		}
	}

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

					<form className={styles.form} onSubmit={handleSubmit}>
						<label className={styles.field}>
							<span>Email или тег</span>
							<input
								type="text"
								name="login"
								placeholder="name@example.com или @username"
								autoComplete="username"
								required
								disabled={isSubmitting}
							/>
						</label>

						<label className={styles.field}>
							<span>Пароль</span>
							<input
								type="password"
								name="password"
								placeholder="Введите пароль"
								autoComplete="current-password"
								required
								disabled={isSubmitting}
							/>
						</label>

						{errorMessage && (
							<p className={styles.formError} role="alert">
								{errorMessage}
							</p>
						)}

						<button
							className={styles.submitButton}
							type="submit"
							disabled={isSubmitting}
						>
							{isSubmitting ? "Входим…" : "Войти"}
						</button>
					</form>

					<p className={styles.switchPrompt}>
						Нет аккаунта? <Link to="/registration">Зарегистрироваться</Link>
					</p>
				</div>
			</section>
		</main>
	);
}
