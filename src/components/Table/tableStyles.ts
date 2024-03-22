import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',

    paddingHorizontal: 10,
  },
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    gap: 10,
  },
  columnNames: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,

    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  columnElement: {
    flex: 1,
    marginRight: 5,

    borderRightWidth: 1,
    borderRightColor: '#ccc',
  },
  searchInput: {
    flex: 1,
    padding: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  header: {
    marginTop: 10,
    fontSize: 30,
  },
});