import styles from './Tabs.module.css';
import { fakeAPIService } from '../../helpers';
import { TeamCardContainer } from '../TeamCardContainer';
import { ActivityContainer } from '../ActivityContainer';

export function TabAll() {
      const teams = fakeAPIService.getAllTeams();
      return (
            <div className={styles.taball}>
                  <TeamCardContainer title={"All Teams"} teams={teams} />
                  <ActivityContainer ></ActivityContainer>
            </div>
      );
}