import styles from './CreateButton.module.css';

export function CreateButton() {
      return (
            <div className={styles.button}>
                  <div className={styles.icon}>+</div>
                  <div className={styles.title}>Create New Team</div>
            </div>
      );
}