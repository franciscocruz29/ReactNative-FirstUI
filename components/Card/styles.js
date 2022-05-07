import { StatusBar, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    marginTop: StatusBar.currentHeight || 0,
  },
  infoContainer: {
    flex: 1,
  },
  tagContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 9,
  },
  picture: {
    width: 150,
    height: 150,
  },
  author: {
    fontSize: 14,
    paddingLeft: 20,
    paddingTop: 3,
  },
  about: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  tags: {
    color: '#ffffff',
    backgroundColor: '#ff286e',
    padding: 5,
    marginLeft: 5,
    borderRadius: 5,
  },
  comments: {
    fontSize: 14,
    paddingLeft: 20,
    paddingTop: 3,
  },
});

export default styles;