import { useNavigate } from "react-router-dom";
import { FiltersPanel, Header, OfferCard, Tag } from "../../shared/ui";
import styles from "./SearchPage.module.css";

export function SearchPage() {
	const navigate = useNavigate();
	return (
		<>
			<Header />

			<main className={styles.page}>
				<h1 className={styles.title}>Предложения</h1>

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
