import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 10,
    backgroundColor: '#f0f0f0',

    color: '#000',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  columnNames: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  columnElement: {
    flex: 1,
    marginRight: 5,
    borderRightWidth: 1,
    borderRightColor: '#ccc',
    padding: 10,
    justifyContent: 'center',
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', // Header text color
    textAlign: 'center', // Center header text
  },
});
