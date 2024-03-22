import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import {Character} from '../../types/Character';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {speciesInit} from '../../features/speciesSlicer';
import {homeWorldInit} from '../../features/homeWorldSlicer';
import {styles} from './characterInfoStyles';
import * as fansActions from '../../features/fansSlicer';

type Props = {
  character: Character;
};

const CharacterInfo: React.FC<Props> = ({character}) => {
  const dispatch = useAppDispatch();
  const speciesDetails = useAppSelector(state => state.species);
  const homeWorldDetails = useAppSelector(state => state.homeWorld);
  const fansArray = useAppSelector(state => state.fans.fans);
  const isFan = fansArray.find(fan => fan.name === character.name);

  const handleAddFan = () => {
    if (isFan) {
      dispatch(fansActions.removeFan(character));
    } else {
      dispatch(fansActions.setFans(character));
    }
  };

  useEffect(() => {
    dispatch(speciesInit(character.species));
    dispatch(homeWorldInit(character.homeworld));
  }, [dispatch]);

  const species = character.species.map(speciesUrl => {
    const species = speciesDetails.speciesDetails.find(
      s => s.url === speciesUrl,
    );

    return species?.name;
  });

  const homeWorld = homeWorldDetails.homeWorldDetails.find(
    world => world.url === character.homeworld,
  );

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#ccc',
        }}>
        <View style={styles.columnElement}>
          <TouchableOpacity onPress={handleAddFan}>
            <Text>{isFan ? '❤️' : '🤍'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.columnElement}>
          <Text style={styles.columnText}>{character.name}</Text>
        </View>
        <View style={styles.columnElement}>
          <Text style={styles.columnText}>{character.birth_year}</Text>
        </View>
        <View style={styles.columnElement}>
          <Text style={styles.columnText}>{character.gender}</Text>
        </View>
        <View style={styles.columnElement}>
          <Text style={styles.columnText}>{homeWorld?.name}</Text>
        </View>
        <View style={styles.columnElement}>
          <Text style={styles.columnText}>{species}</Text>
        </View>
      </View>
    </View>
  );
};

export default CharacterInfo;
