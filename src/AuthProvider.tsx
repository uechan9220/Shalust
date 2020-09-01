import React, { useState, useEffect, createContext } from 'react';
import firebase from './Firebase';
import { User } from 'firebase';

// import LoadingOverlay from 'react-loading-overlay'

// Contextの型を用意
interface IAuthContext {
  currentUser: AuthProps;
}

// Contextを宣言。Contextの中身を {currentUser: undefined} と定義
const AuthContext = createContext<IAuthContext>({
  currentUser: { status: 'loading' },
});

interface userDataProps {
  user_id: string;
  user_name: string;
  follow: number;
  follower: number;
  icon_url: string;
}

interface AuthProps {
  status: string;
  user?: User;
  token?: string;
  userData?: userDataProps;
}

const AuthProvider = (props: any) => {
  const [currentUser, setCurrentUser] = useState<AuthProps>({
    status: 'loading',
  });

  useEffect(() => {
    // if (currentUser === undefined) history.push('/signin')
    firebase.auth().onAuthStateChanged(async (user: any) => {
      if (user) {
        const token = await user.getIdToken();
        const idTokenResult = await user.getIdTokenResult();
        const db = firebase.database();
        const userData = {
          user_id: 'yuuki_rinrin',
          user_name: 'Rin',
          follow: 20,
          follower: 10,
          icon_url: 'http://localhost:9000/mybucket/hoge/icon_sample.jpg',
        };

        // Check if refresh is required.
        const metadataRef = db.ref('metadata/' + user.uid + '/refreshTime');

        metadataRef.on('value', async () => {
          // Force refresh to pick up the latest custom claims changes.
          const token = await user.getIdToken(true);
          setCurrentUser({ status: 'in', user, token, userData });
        });
      } else {
        setCurrentUser({ status: 'out' });
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser: currentUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
