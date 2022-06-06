import { useState } from 'react';
import styles from './Team.module.css';
import { Tabs, Input } from '../../component';
import { CreateButton } from '../CreateButton';
import { IconCompany, IconSearch } from '../../icon';
import { TabAll, TabArchived, TabFavorite } from '../Tabs';

export function Team() {
      const [selectedTab, setSelectedTab] = useState(null);
      return (
            <div className={styles.container}>
                  <div className={styles.header}>
                        <div className={styles.title}>
                              <IconCompany isActive={true} fill="#A4A6A8" />
                              <h1 className={styles.h1}>Teams</h1>
                        </div>
                        <CreateButton />
                  </div>
                  <div className={styles.tabAndSearch}>
                        <Tabs defaultActiveKey="1"
                              selectedKey={selectedTab}
                              hideContent={true}
                              onChange={(key) => setSelectedTab(key)}>
                              <Tabs.TabPane key="1" tabKey="1" label="All" />
                              <Tabs.TabPane key="2" tabKey="2" label="Favorites" />
                              <Tabs.TabPane key="3" tabKey="3" label="Archived" />
                        </Tabs>
                        <Input
                              onPressEnter={(e) => console.log(e.target.value)}
                              icon={<IconSearch />}
                              type="text"
                              placeholder={"Search team name ..."} />
                  </div>
                  <div className={styles.content}>
                        {RenderTab(selectedTab)}
                  </div>
            </div>
      );
}

function RenderTab(selectedKey) {
      switch (selectedKey) {
            case "1":
                  return <TabAll />;
            case "2":
                  return <TabFavorite />;
            case "3":
                  return <TabArchived />;
            default:
                  return <TabAll />;
      }
}