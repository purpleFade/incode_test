import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './tableStyles';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {swapiInit} from '../../features/swapiSlicer';
import CharacterInfo from '../CharacterInfo/CharacterInfo';
import {Character} from '../../types/Character';
import Pagination from '../Pagination/Pagination';
import FansComponent from '../FansComponent/FansComponent';

const swapiUrl: string = 'https://swapi.dev/api/people/';

const Table: React.FC = () => {
  const dispatch = useAppDispatch();
  const {results, loading} = useAppSelector(state => state.swapi);
  const [query, setQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<'ASC' | 'DESC' | 'NONE'>('NONE');

  const filteredResults = results.filter((character: Character) =>
    character.name.toLowerCase().includes(query.toLowerCase()),
  );

  useEffect(() => {
    dispatch(swapiInit(swapiUrl));
  }, [dispatch]);

  const handleSort = () => {
    switch (sortOrder) {
      case 'ASC':
        setSortOrder('DESC');
        break;
      case 'DESC':
        setSortOrder('NONE');
        break;
      case 'NONE':
        setSortOrder('ASC');
        break;
      default:
        setSortOrder('NONE');
        break;
    }
  };

  const sortedResults = () => {
    if (sortOrder === 'ASC') {
      return filteredResults
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === 'DESC') {
      return filteredResults
        .slice()
        .sort((a, b) => b.name.localeCompare(a.name));
    } else {
      return filteredResults;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Fans</Text>
      <FansComponent />
      <View style={styles.searchContainer}>
        <Image
          source={require('../../assets/search.png')}
          style={{width: 20, height: 20}}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          onChangeText={text => setQuery(text)}
        />
      </View>
      <View style={styles.columnNames}>
        <View style={styles.columnElement}>
          <Text>Icon</Text>
        </View>
        <View style={styles.columnElement}>
          <TouchableOpacity onPress={handleSort}>
            <Text>Name</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.columnElement}>
          <Text>Birth Year</Text>
        </View>
        <View style={styles.columnElement}>
          <Text>Gender</Text>
        </View>
        <View style={styles.columnElement}>
          <Text>Home World</Text>
        </View>
        <View style={styles.columnElement}>
          <Text>Species</Text>
        </View>
      </View>
      {loading ? (
        <ActivityIndicator size="small" />
      ) : (
        sortedResults().map((character, index) => (
          <CharacterInfo key={index} character={character} />
        ))
      )}
      <Pagination items={filteredResults} />
    </ScrollView>
  );
};

export default Table;
