import styles from "./OfferCard.module.css";

export function OfferCard() {
	return (
		<article className={styles.card}>
			<div className={styles.image}>Изображение</div>
			<h2 className={styles.title}>Название предложения</h2>
			<p className={styles.description}>Краткое описание предложения</p>
			<div className={styles.meta}>Дополнительная информация</div>
		</article>
	);
}
