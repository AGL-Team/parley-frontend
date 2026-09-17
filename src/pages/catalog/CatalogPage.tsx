import { FiltersPanel, Header, OfferCard, Tag } from "../../shared/ui";
import styles from "./CatalogPage.module.css";

export function CatalogPage() {
	return (
		<>
			<div className={styles.companyHeader}>
				<Header />

				<section className={styles.companyIntro}>
					<div className={styles.companyLogo}>Логотип компании</div>

					<div className={styles.companyInfo}>
						<Tag>Категория компании</Tag>
						<h1 className={styles.companyName}>Название компании</h1>
						<p className={styles.companyDescription}>
							Краткое описание компании, её деятельности и основных направлений
							работы.
						</p>
					</div>
				</section>
			</div>

			<main className={styles.page}>
				<h2 className={styles.title}>Предложения компании</h2>

				<div className={styles.content}>
					<FiltersPanel />

					<section className={styles.results} aria-label="Предложения компании">
						<div className={styles.tags}>
							<Tag>Все предложения</Tag>
							<Tag>Категория</Tag>
							<Tag>Направление</Tag>
						</div>

						<div className={styles.cards}>
							<OfferCard
								title="Название предложения"
								description="Краткое описание предложения"
							/>
							<OfferCard
								title="Название предложения"
								description="Краткое описание предложения"
							/>
							<OfferCard
								title="Название предложения"
								description="Краткое описание предложения"
							/>
							<OfferCard
								title="Название предложения"
								description="Краткое описание предложения"
							/>
						</div>
					</section>
				</div>
			</main>
		</>
	);
}
