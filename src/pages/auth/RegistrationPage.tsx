import { useState } from "react";
import type { FormEvent } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthApiError, useAuth } from "../../entities/user";
import styles from "./AuthPage.module.css";

export function RegistrationPage() {
	const navigate = useNavigate();
	const { register, status } = useAuth();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	if (status === "authenticated") {
		return <Navigate replace to="/" />;
	}

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setErrorMessage(null);

		const formData = new FormData(event.currentTarget);
		const password = String(formData.get("password") ?? "");
		const passwordConfirmation = String(
			formData.get("passwordConfirmation") ?? "",
		);

		if (password !== passwordConfirmation) {
			setErrorMessage("Пароли не совпадают");
			return;
		}

		setIsSubmitting(true);

		try {
			await register({
				name: String(formData.get("name") ?? "").trim(),
				tag: String(formData.get("tag") ?? "").trim(),
				email: String(formData.get("email") ?? "").trim(),
				password,
			});
			navigate("/", { replace: true });
		} catch (error) {
			if (error instanceof AuthApiError && error.status === 409) {
				setErrorMessage("Этот тег или email уже используется");
			} else if (error instanceof AuthApiError && error.status === 422) {
				setErrorMessage("Проверьте правильность заполнения полей");
			} else if (error instanceof AuthApiError && error.status === 503) {
				setErrorMessage("Сервис авторизации временно недоступен");
			} else {
				setErrorMessage("Не удалось зарегистрироваться. Попробуйте ещё раз");
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
						<h1 className={styles.title}>Регистрация в Parley</h1>
						<p className={styles.subtitle}>Создайте новую учётную запись</p>
					</div>

					<form className={styles.form} onSubmit={handleSubmit}>
						<label className={styles.field}>
							<span>Имя</span>
							<input
								type="text"
								name="name"
								placeholder="Как к вам обращаться"
								autoComplete="name"
								maxLength={150}
								required
								disabled={isSubmitting}
							/>
						</label>

						<label className={styles.field}>
							<span>Тег</span>
							<input
								type="text"
								name="tag"
								placeholder="@username"
								autoComplete="username"
								minLength={6}
								maxLength={33}
								pattern="@[A-Za-z][A-Za-z0-9_]{4,31}"
								title="Тег должен начинаться с @ и содержать от 5 до 32 букв, цифр или знаков подчёркивания"
								required
								disabled={isSubmitting}
							/>
						</label>

						<label className={styles.field}>
							<span>Email</span>
							<input
								type="email"
								name="email"
								placeholder="name@example.com"
								autoComplete="email"
								maxLength={254}
								required
								disabled={isSubmitting}
							/>
						</label>

						<label className={styles.field}>
							<span>Пароль</span>
							<input
								type="password"
								name="password"
								placeholder="Минимум 8 символов"
								autoComplete="new-password"
								minLength={8}
								required
								disabled={isSubmitting}
							/>
						</label>

						<label className={styles.field}>
							<span>Повторите пароль</span>
							<input
								type="password"
								name="passwordConfirmation"
								placeholder="Введите пароль ещё раз"
								autoComplete="new-password"
								minLength={8}
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
							{isSubmitting ? "Регистрируем…" : "Зарегистрироваться"}
						</button>
					</form>

					<p className={styles.switchPrompt}>
						Уже есть аккаунт? <Link to="/login">Войти</Link>
					</p>
				</div>
			</section>
		</main>
	);
}
