import React, {useEffect} from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import styles from './DetailsCard.style';
import useFetch from '../../hooks/useFetch';
import axios from 'axios';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import LinkButton from '../LinkButton';

const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

function DetailsCard({id}) {
  const fetchUrl = url + id;

  const {loading, error, data} = useFetch(fetchUrl);

  console.log(data);

  if (loading) {
    return <Loading />;
  }
  if (error || data.meals == 'Invalid ID') {
    return <Error />;
  }

  return (
    <ScrollView >
      {data &&
        Array.isArray(data.meals) &&
        data.meals.map((meal, index) => (
          <View key={index}>
            <Image source={{uri: meal.strMealThumb}} style={styles.image} />
            <Text style={styles.title}>{meal.strMeal}</Text>
            <Text style={styles.areaText}>{meal.strArea}</Text>
            <Text style={styles.instructions}>{meal.strInstructions}</Text>
            <LinkButton url={meal.strYoutube}/>

          </View>
        ))}
    </ScrollView>
  );
}

export default DetailsCard;
