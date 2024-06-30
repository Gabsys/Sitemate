import {StyleSheet, View} from 'react-native';

const NewsListSeparator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    height: 20,
  },
});

export default NewsListSeparator;
