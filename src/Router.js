import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import Categories from "./pages/Categories/Categories";
import Config from 'react-native-config';
import Details from "./pages/Details";
import Meals from "./pages/Meals"


const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
    
        <Stack.Screen name="CategoriesPage" component={Categories} options={
          {
            title: 'Categories',
            headerTitleAlign: 'center',
            headerTitleStyle:{
              color:'orange'
            }
          }} />
          <Stack.Screen name="MealsPage" component={Meals} options={{
            title:'Meals',
          
            headerTitleAlign:'center',
            headerTitleStyle:{
              color:'orange'
            },
            headerTintColor:'orange'
          }}/>
          <Stack.Screen name="DetailsPage" component={Details} options={
            {
              title:'Detail',
              headerTitleAlign:'center',
              headerTitleStyle:{
                color:'orange'
              },
            headerTintColor:'orange'
            }
          }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;