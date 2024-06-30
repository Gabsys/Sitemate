import {Image, StyleSheet, Text, View} from 'react-native';

interface NewsCardProps {
  data: News;
}

const NewsCard = (props: NewsCardProps) => {
  const {data} = props;
  const {author, title, description, publishedAt, urlToImage} = data;

  return (
    <View style={styles.container}>
      {urlToImage && (
        <Image
          source={{uri: urlToImage}}
          style={styles.image}
          resizeMode={'cover'}
        />
      )}
      <Text style={styles.title}>{title}</Text>
      <Text>{description}</Text>
      <View style={styles.footerContainer}>
        <Text style={styles.footer}>Author: {author}</Text>
        <Text style={styles.footer}>Published at: {publishedAt}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'black',
    borderRadius: 8,
    borderWidth: 1,
    padding: 12,
  },
  image: {
    height: 150,
    marginBottom: 12,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerContainer: {
    marginTop: 8,
  },
  footer: {
    color: 'gray',
    fontSize: 12,
  },
});

export default NewsCard;
