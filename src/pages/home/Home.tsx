import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import Tab1 from '../Tab1';
import Tab2 from '../Tab2';
import Tab3 from '../Tab3';
import Details from '../Details';
import { flash, apps, send } from 'ionicons/icons';
const HomePage: React.FunctionComponent = () => {
  return (
    <IonPage>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/:tab(tab1)" component={Tab1} exact={true} />
          <Route path="/:tab(tab2)" component={Tab2} exact={true} />
          <Route path="/:tab(tab2)/details" component={Details} />
          <Route path="/:tab(tab3)" component={Tab3} />
          <Route exact path="/" render={() => <Redirect to="/tab1" />} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={flash} />
            <IonLabel>Tab One</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={apps} />
            <IonLabel>Tab Two</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={send} />
            <IonLabel>Tab Three</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonPage>
  );
};

export default HomePage;
