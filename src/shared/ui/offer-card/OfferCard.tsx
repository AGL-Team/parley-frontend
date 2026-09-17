import styles from "./OfferCard.module.css";

type CardProps = {
	title: string;
	description: string;
	onClick?: () => void;
};

export function OfferCard({ title, description, onClick }: CardProps) {
	return (
		<article className={styles.card}>
			{onClick && (
				<button
					className={styles.action}
					type="button"
					onClick={onClick}
					aria-label={`Открыть предложение «${title}»`}
				/>
			)}
			<div className={styles.image}>Изображение</div>
			<h2 className={styles.title}>{title}</h2>
			<p className={styles.description}>{description}</p>
			<div className={styles.meta}>Дополнительная информация</div>
		</article>
	);
}
