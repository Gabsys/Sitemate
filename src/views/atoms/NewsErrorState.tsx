import {StyleSheet, Text, View} from 'react-native';

const NewsErrorState = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.error}>Error searching for news.</Text>
      <Text style={styles.error}>Please try again later</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
  },
});
export default NewsErrorState;
