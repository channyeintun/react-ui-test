import styles from './Tabs.module.css';
import { fakeAPIService } from '../../helpers';
import { TeamCardContainer } from '../TeamCardContainer';
import { ActivityContainer } from '../ActivityContainer';

export function TabFavorite() {
      const teams = fakeAPIService.getFavoriteTeams();
      return (
            <div className={styles.taball}>
                  <TeamCardContainer title={"Favorite Teams"} teams={teams} />
                  <ActivityContainer ></ActivityContainer>
            </div>
      );
}