import styles from "./FiltersPanel.module.css";

export function FiltersPanel() {
	return (
		<aside className={styles.panel}>
			<h2 className={styles.title}>Фильтры</h2>

			<div className={styles.group}>
				<span className={styles.label}>Категория</span>
				<div className={styles.placeholder}>Поле фильтра</div>
			</div>

			<div className={styles.group}>
				<span className={styles.label}>Стоимость</span>
				<div className={styles.placeholder}>Поле фильтра</div>
			</div>

			<div className={styles.group}>
				<span className={styles.label}>Формат</span>
				<div className={styles.placeholder}>Поле фильтра</div>
			</div>
		</aside>
	);
}
