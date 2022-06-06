import { IconNotification, IconCaretDown } from '../../icon';
import { Header } from '../../component';
import styles from './Head.module.css';
import { fakeAPIService } from '../../helpers';
import { useLocation } from 'react-router-dom';

export function Head() {

      const user = fakeAPIService.getCurrentUser();

      return (
            <Header style={{
                  display: 'flex',
                  flexDirection: 'row',
                  minWidth: 'calc(100% - 120px)',
                  height: 80
            }}>
                  <Brand />
                  <div className={styles.headerRight}>
                        <BreadCrumb />
                        <div className={styles.notiAndCurrentUser}>
                              <IconNotification
                                    isNew={true}
                                    count={user.notifications_count} />
                              <Profile name={user.name}
                                    avatar={user.avatar} />
                        </div>
                  </div>
            </Header>
      );
}

function Profile({
      name,
      avatar
}) {
      return (
            <div className={styles.head}>
                  <div className={styles.username}>
                        Hello, {name}
                  </div>
                  <img src={avatar} style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%'
                  }} />
                  <IconCaretDown />
            </div>
      );
}

function Brand() {
      return (
            <div className={styles.logo}>
                  Narwhal
            </div>
      );
}

function BreadCrumb() {
      const { pathname } = useLocation();

      let splitPaths = pathname.split("/");
      splitPaths = splitPaths.filter(value => value);
      
      return (
            <div className={styles.breadCrumb}>
                  {splitPaths && splitPaths[0]}
            </div>
      );
}