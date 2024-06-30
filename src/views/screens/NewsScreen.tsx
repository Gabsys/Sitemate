import {Button, StyleSheet, TextInput, View} from 'react-native';

const NewsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput placeholder={'Search news..'} style={styles.input} />
        <Button title={'Search'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderRadius: 4,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 12,
    flex: 1,
  },
});

export default NewsScreen;
