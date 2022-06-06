import styles from './TeamCardContainer.module.css';
import { TeamCard } from '../../component';

export function TeamCardContainer({
      title,
      teams,
}) {
      return (
            <div className={styles.cardContainer}>
                  <div className={styles.header}>
                        <div className={styles.heading}>{title}</div>
                  </div>
                  <div className={styles.cardContainerBody}>
                        {teams.map(team => <TeamCard key={team.id}
                              name={team.name}
                              description={team.description}
                              campaignsCount={team.campaigns_count}
                              leadsCount={team.leads_count}
                              isArchived={team.is_archived}
                              isFavorited={team.is_favorited}
                              image={team.image}
                              createdAt={team.created_at} />)}
                  </div>
            </div>
      );
}

TeamCardContainer.defaultProps = {
      teams: []
}