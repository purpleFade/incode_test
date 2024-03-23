import React from 'react';
import {Pressable, Text, TouchableOpacity, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {Character} from '../../types/Character';
import * as fansActions from '../../features/fansSlicer';
import {styles} from './fansComponentStyles';

const FansComponent = () => {
  const dispatch = useAppDispatch();
  const fansArray = useAppSelector(state => state.fans.fans);

  const genderFans = (fans: Character[], gender: string) => {
    if (gender === 'male' || gender === 'female') {
      return fans.filter(fan => fan.gender === gender);
    } else {
      return fans.filter(
        fan => fan.gender !== 'male' && fan.gender !== 'female',
      );
    }
  };

  const handleResetFans = () => {
    dispatch(fansActions.resetFan());
  };

  return (
    <View style={styles.container}>
      <View style={styles.fansBlock}>
        <Text style={styles.fansBlock__number}>
          {genderFans(fansArray, 'female').length}
        </Text>
        <Text>Female Fans</Text>
      </View>
      <View style={styles.fansBlock}>
        <Text style={styles.fansBlock__number}>
          {genderFans(fansArray, 'male').length}
        </Text>
        <Text>Male Fans</Text>
      </View>
      <View style={styles.fansBlock}>
        <Text style={styles.fansBlock__number}>
          {genderFans(fansArray, 'others').length}
        </Text>
        <Text>Others</Text>
      </View>
      <TouchableOpacity>
        <Pressable style={styles.button} onPress={handleResetFans}>
          <Text style={styles.button__text}>Clear fans</Text>
        </Pressable>
      </TouchableOpacity>
    </View>
  );
};

export default FansComponent;
