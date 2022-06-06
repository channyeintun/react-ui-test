import styles from './Tabs.module.css';
import { fakeAPIService } from '../../helpers';
import { TeamCardContainer } from '../TeamCardContainer';
import { ActivityContainer } from '../ActivityContainer';

export function TabArchived() {
      const teams = fakeAPIService.getArchivedTeams();
      return (
            <div className={styles.taball}>
                  <TeamCardContainer title={"Archived Teams"} teams={teams} />
                  <ActivityContainer ></ActivityContainer>
            </div>
      );
}