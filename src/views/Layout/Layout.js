import styles from './Layout.module.css';
import { BrandLogo } from '../../icon';
import { Main, SideBar } from '../../component';
import { Outlet } from 'react-router-dom';
import { Head, MenuBar } from '..';

export function Layout() {

      return (
            <div className={styles.container}>
                  <SideBar>
                        <BrandLogo />
                        <MenuBar />
                  </SideBar>
                  <Main>
                        <Head />
                        <Outlet />
                  </Main>
            </div>
      );
}