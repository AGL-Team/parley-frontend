import { Header } from "../../shared/ui";
import styles from "./ChatPage.module.css";

export function ChatPage() {
	return (
		<>
			<Header />

			<main className={styles.page}>
				<aside className={styles.sidebar} aria-label="Список чатов">
					<div className={styles.sidebarHeader}>
						<h1>Чаты</h1>
						<div className={styles.searchPlaceholder}>Поиск по чатам</div>
					</div>

					<div className={styles.chatList}>
						<button
							className={`${styles.chatItem} ${styles.active}`}
							type="button"
						>
							<span className={styles.avatar}>Лого</span>
							<span className={styles.chatPreview}>
								<strong>Название компании</strong>
								<span>Последнее сообщение в переписке</span>
							</span>
							<time>12:40</time>
						</button>

						<button className={styles.chatItem} type="button">
							<span className={styles.avatar}>Лого</span>
							<span className={styles.chatPreview}>
								<strong>Другая компания</strong>
								<span>Краткий текст сообщения</span>
							</span>
							<time>Вчера</time>
						</button>

						<button className={styles.chatItem} type="button">
							<span className={styles.avatar}>Лого</span>
							<span className={styles.chatPreview}>
								<strong>Компания</strong>
								<span>Последнее сообщение</span>
							</span>
							<time>Пн</time>
						</button>
					</div>
				</aside>

				<section className={styles.openChat} aria-label="Открытый чат">
					<header className={styles.chatHeader}>
						<span className={styles.avatar}>Лого</span>
						<div>
							<h2>Название компании</h2>
							<span>Предложение компании</span>
						</div>
					</header>

					<div className={styles.messages}>
						<span className={styles.date}>Сегодня</span>

						<div className={styles.incomingMessage}>
							Здравствуйте! Это пример входящего сообщения.
							<time>12:35</time>
						</div>

						<div className={styles.outgoingMessage}>
							Здравствуйте! Это пример ответа.
							<time>12:38</time>
						</div>

						<div className={styles.incomingMessage}>
							Здесь в будущем будет настоящая переписка по предложению.
							<time>12:40</time>
						</div>
					</div>

					<div className={styles.composer}>
						<textarea placeholder="Напишите сообщение" rows={1} />
						<button type="button">Отправить</button>
					</div>
				</section>
			</main>
		</>
	);
}
