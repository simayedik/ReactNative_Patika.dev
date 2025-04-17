import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import useFetch from '../../hooks/useFetch';
import MealsCard from '../../components/MealsCard';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import Input from '../../components/Input/Input';

const url = 'https://themealdb.com/api/json/v1/1/filter.php?c=';

function Meals({navigation, route}) {
  const {category} = route.params;

  const {loading, error, data} = useFetch(url + category);

  const [search, setSearch] = useState('');
  const [filterData, setFilterData] = useState([]);

  useEffect(()=>{
    if(!search){
       setFilterData(data.meals);
    }else{
      const lowerSearch = search.toLowerCase();
      const filtered = data.meals.filter( item => (
        item.strMeal.toLowerCase().includes(lowerSearch)
      ));
      setFilterData(filtered);
    }
  },[search,data])

  if (loading) {
    return <Loading />;
  }
  if (error || !data.meals) {
    return <Error />;
  }

  const handleMealSelect = id => {
    navigation.navigate('DetailsPage', {id});
  };

  const renderItem = item => (
    <MealsCard
      data={item}
      onSelect={() => {
        handleMealSelect(item.idMeal);
      }}
    />
  );

  return (
    <View style={{flex:1}}>
      <Input value={search} onChangeText={setSearch} />
      <FlatList data={filterData} renderItem={({item}) => renderItem(item)} />
    </View>
  );
}

export default Meals;
