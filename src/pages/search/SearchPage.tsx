import { useNavigate } from "react-router-dom";
import { FiltersPanel, Header, OfferCard, Tag } from "../../shared/ui";
import styles from "./SearchPage.module.css";

export function SearchPage() {
	const navigate = useNavigate();
	return (
		<>
			<Header />

			<main className={styles.page}>
				<section className={styles.searchPanel} aria-label="Поиск предложений">
					<div className={styles.searchField}>
						<input
							className={styles.searchInput}
							type="search"
							placeholder="Опишите, какое предложение вы ищете"
							aria-label="Запрос для AI-агента"
						/>

						<div className={styles.searchActions}>
							<button
								className={styles.iconButton}
								type="button"
								popoverTarget="search-history"
								popoverTargetAction="toggle"
								aria-label="Развернуть историю сообщений"
								title="Расширить"
							>
								<svg viewBox="0 0 24 24" aria-hidden="true">
									<path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5" />
								</svg>
							</button>

							<button
								className={`${styles.iconButton} ${styles.searchButton}`}
								type="button"
								aria-label="Найти предложения"
								title="Поиск"
							>
								<svg viewBox="0 0 24 24" aria-hidden="true">
									<circle cx="11" cy="11" r="6" />
									<path d="m16 16 4 4" />
								</svg>
							</button>
						</div>
					</div>

					<div
						id="search-history"
						className={styles.historyPopup}
						popover="auto"
					>
						<header className={styles.historyHeader}>
							<div>
								<h2>История поиска</h2>
								<p>Диалог с AI-агентом по подбору предложений</p>
							</div>
							<button
								className={styles.closeButton}
								type="button"
								popoverTarget="search-history"
								popoverTargetAction="hide"
								aria-label="Закрыть историю"
							>
								<svg viewBox="0 0 24 24" aria-hidden="true">
									<path d="m6 6 12 12M18 6 6 18" />
								</svg>
							</button>
						</header>

						<div className={styles.historyMessages}>
							<div className={styles.userMessage}>
								Нужна CRM для небольшого отдела продаж
							</div>
							<div className={styles.agentMessage}>
								Уточните количество сотрудников, бюджет и необходимые
								интеграции.
							</div>
							<div className={styles.userMessage}>
								До десяти сотрудников. Нужна интеграция с телефонией и почтой,
								бюджет пока не определён.
							</div>
							<div className={styles.agentMessage}>
								Нашёл несколько вариантов. Часть решений ориентирована на
								быстрый старт, а часть предлагает более гибкую автоматизацию
								процессов.
							</div>
							<div className={styles.userMessage}>
								Покажи варианты с бесплатным тестовым периодом.
							</div>
							<div className={styles.agentMessage}>
								Подобрал предложения с пробным периодом. Их можно сравнить по
								стоимости, набору интеграций и сроку внедрения.
							</div>
						</div>

						<div className={styles.historyComposer}>
							<input
								type="text"
								placeholder="Уточните запрос или задайте вопрос"
								aria-label="Сообщение AI-агенту"
							/>
							<button
								type="button"
								aria-label="Отправить сообщение"
								title="Отправить"
							>
								<svg viewBox="0 0 24 24" aria-hidden="true">
									<path d="m5 12 14-7-4 14-3-6-7-1Z" />
								</svg>
							</button>
						</div>
					</div>
				</section>

				<div className={styles.content}>
					<FiltersPanel />

					<section className={styles.results} aria-label="Список предложений">
						<div className={styles.tags}>
							<Tag>Тег</Tag>
							<Tag>Категория</Tag>
							<Tag>Направление</Tag>
						</div>

						<div className={styles.cards}>
							<OfferCard
								title="title"
								description="description"
								onClick={() => navigate("/catalog")}
							/>
							<OfferCard
								title="title"
								description="description"
								onClick={() => navigate("/catalog")}
							/>
							<OfferCard
								title="title"
								description="description"
								onClick={() => navigate("/catalog")}
							/>
							<OfferCard
								title="title"
								description="description"
								onClick={() => navigate("/catalog")}
							/>
						</div>
					</section>
				</div>
			</main>
		</>
	);
}
