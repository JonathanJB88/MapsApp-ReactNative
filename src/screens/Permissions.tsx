import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PermissionsContext } from '../context';
import { BlackBtn } from '../components';

export const Permissions = () => {
  //
  const { permissions, askLocationPermission } = useContext(PermissionsContext);

  return (
    <View style={styles.container}>
      <Text style={styles.messageInfo}>
        GPS is a must to continue with Maps application
      </Text>

      <BlackBtn title="Permit" onPress={askLocationPermission} />

      <Text style={{ marginTop: 20 }}>
        {JSON.stringify(permissions, null, 5)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageInfo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    width: 250,
    marginBottom: 20,
  },
});
