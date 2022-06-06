import { Menu } from '../../component';
import { IconCompany, IconCampaign, IconLeads, IconReports, IconHelp } from '../../icon';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export function MenuBar() {

      const { pathname } = useLocation();

      const defaultKey = getSelectedKeyWithPathname(pathname);

      const [selectedKey, setSelectedKey] = useState(defaultKey);

      return (
            <Menu defaultSelectedKey="1"
                  selectedKey={selectedKey}
                  onChange={(key) => setSelectedKey(key)}
                  style={{ height: '100%' }}>
                  <Menu.MenuItem itemKey="1" icon={<IconCampaign />} link="/" />
                  <Menu.MenuItem itemKey="2" icon={<IconCompany />} link="/teams" />
                  <Menu.MenuItem itemKey="3" icon={<IconLeads />} />
                  <Menu.MenuItem itemKey="4" icon={<IconReports />} />
                  <Menu.MenuItem itemKey="5" icon={<IconHelp />}
                        style={{
                              marginTop: 'auto'
                        }} />
            </Menu>
      );
}

function getSelectedKeyWithPathname(pathname) {
      switch (pathname) {
            case "/":
                  return "1";
            case "/teams":
                  return "2";
            default:
                  return "1";
      }
}