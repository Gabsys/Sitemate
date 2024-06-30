import {
  Button,
  FlatList,
  FlatListProps,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import NewsCard from '../organisms/NewsCard';
import NewsListSeparator from '../atoms/NewsListSeparator';
import useNewsQuery from '../../hooks/useNewsQuery';

const NewsScreen = () => {
  const {news} = useNewsQuery();

  const renderItem: FlatListProps<News>['renderItem'] = ({item}) => {
    return <NewsCard data={item} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput placeholder={'Search news..'} style={styles.input} />
        <Button title={'Search'} />
      </View>
      <FlatList
        data={news}
        renderItem={renderItem}
        ItemSeparatorComponent={NewsListSeparator}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
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
