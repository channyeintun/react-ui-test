import styles from './Activity.module.css';

export function Activity({
      id,
      name,
      avatar,
      action,
      target,
      created_at,
}) {
      return (
            <div key={id} className={styles.container}>
                  <img src={avatar} width={36} height={36} className={styles.avatar} />
                  <div className={styles.description}>
                        <div>
                              <span className={styles.name}>{name}{` `}</span>
                              <span className={styles.action}>{action}{` `}</span>
                              <span className={styles.target}>{target}</span>
                        </div>
                        <div className={styles.createdAt}>{created_at}</div>
                  </div>
            </div>
      );
}