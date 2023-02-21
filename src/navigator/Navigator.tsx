import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PermissionsContext } from '../context/PermissionsContext';
import { Maps, Permissions, Loading } from '../screens';

const Stack = createStackNavigator();

export const Navigator = () => {
  //
  const { permissions } = useContext(PermissionsContext);

  if (permissions.locationStatus === 'unavailable') return <Loading />;

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      {permissions.locationStatus === 'granted' ? (
        <Stack.Screen name="Home" component={Maps} />
      ) : (
        <Stack.Screen name="Permissions" component={Permissions} />
      )}
    </Stack.Navigator>
  );
};
