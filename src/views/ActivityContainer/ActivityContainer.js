import { Activity } from '../Activity';
import { fakeAPIService } from '../../helpers';
import styles from './ActivityContainer.module.css';

export function ActivityContainer() {
      const activities = fakeAPIService.getActivities();
      return (
            <div className={styles.activityContainer}>
                  <div className={styles.header}>
                        <div className={styles.heading}>Activity</div>
                  </div>
                  <div className={styles.activityContainerBody}>
                        {activities.map(activity => <Activity key={activity.id} 
                        {...activity}
                              {...activity.person} />)}
                  </div>
            </div>
      );
}