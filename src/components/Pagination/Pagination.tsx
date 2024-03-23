import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {swapiInit, nextPage, previousPage} from '../../features/swapiSlicer';
import * as swapiActions from '../../features/swapiSlicer';
import {styles} from './paginationStyles';
import {Character} from '../../types/Character';

type Props = {
  items: Character[];
};

const Pagination: React.FC<Props> = ({items}) => {
  const dispatch = useAppDispatch();
  const {totalItems, next, previous, currentPage} = useAppSelector(
    state => state.swapi,
  );

  const itemsPerPageLength = items.length;
  const startItem = (currentPage - 1) * itemsPerPageLength + 1;
  const endItem = Math.min(currentPage * itemsPerPageLength, totalItems);

  const loadNextPage = () => {
    if (next) {
      dispatch(nextPage());
      dispatch(swapiInit(next));
      dispatch(swapiActions.setCurrentPage(currentPage + 1));
    }
  };

  const loadPreviousPage = () => {
    if (previous) {
      dispatch(previousPage());
      dispatch(swapiInit(previous));
      dispatch(swapiActions.setCurrentPage(currentPage - 1));
    }
  };

  return (
    <View style={styles.container}>
      {previous ? (
        <TouchableOpacity onPress={loadPreviousPage}>
          <Image
            source={require('../../assets/previous_filled.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      ) : (
        <View>
          <Image
            source={require('../../assets/previous.png')}
            style={styles.icon}
          />
        </View>
      )}
      <Text>
        {startItem}-{endItem} of {totalItems}
      </Text>
      {next ? (
        <TouchableOpacity onPress={loadNextPage}>
          <Image
            source={require('../../assets/next_filled.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      ) : (
        <View>
          <Image
            source={require('../../assets/next.png')}
            style={styles.icon}
          />
        </View>
      )}
    </View>
  );
};

export default Pagination;
