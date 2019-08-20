import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

const WelcomePage: React.FunctionComponent = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent />
    </>
  );
};

export default WelcomePage;
