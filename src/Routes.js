import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import SearchScreen from '../src/pages/SearchScreen'
import DetailsScreen from '../src/pages/DetailsScreen'


const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="SearchScreen" >
        <Stack.Screen options={{title:'Businnes Search'}} name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes 