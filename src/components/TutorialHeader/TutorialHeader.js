import React from 'react';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from 'carbon-components-react';

import {
  AppSwitcher20,
  Notification20,
  UserAvatar20,
} from '@carbon/icons-react';

import { Link } from 'react-router-dom';

const TutorialHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Samouczek Carbon">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Otwórz menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <HeaderName element={Link} to="/" prefix="IBM">
          Samouczek Carbon
        </HeaderName>

        <HeaderNavigation aria-label="Samouczek Carbon">
          <HeaderMenuItem element={Link} to="/repos">
            Repozytoria
          </HeaderMenuItem>
        </HeaderNavigation>

        <SideNav
          aria-label="Boczna nawigacja"
          expanded={isSideNavExpanded}
          isPersistent={false}>
          <SideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem element={Link} to="/repos">
                Repozytoria
              </HeaderMenuItem>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
        <HeaderGlobalBar>
          <HeaderGlobalAction aria-label="Powiadomienia">
            <Notification20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="Awatar Gucia">
            <UserAvatar20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="Przełącz App">
            <AppSwitcher20 />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    )}
  />
);

export default TutorialHeader;
