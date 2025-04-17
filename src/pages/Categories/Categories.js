import React, {useState} from 'react';
import {FlatList, View, TextInput} from 'react-native';
import useFetch from '../../hooks/useFetch';
import CategoriesCard from '../../components/CategoriesCard';
import styles from './Categoreis.style';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';


const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

export default function Categories({navigation}) {
  const [query, setQuery] = useState();
  // const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
  const {loading, error, data} = useFetch(url);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const handleCategoriesSelect = category => {
    navigation.navigate('MealsPage', {category});
  };

  const renderItem = ({item}) => (
    <CategoriesCard
      data={item}
      onSelect={() => handleCategoriesSelect(item.strCategory)}
    />
  );

  return (
    <View style={styles.container}>
   
      <FlatList
        data={data.categories} // `data` içinde `categories` dizisi var
        renderItem={renderItem}
        keyExtractor={item => item.idCategory}
      />
    </View>
  );
}
