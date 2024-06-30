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

const DUMMY_NEWS = [
  {
    source: {
      id: null,
      name: 'Hackaday',
    },
    author: 'Maya Posch',
    title: 'Apple May Use Electrical Debonding For Battery Replacement',
    description:
      'As a result of the European Union’s push for greater repairability of consumer devices like smartphones, Apple sees itself forced to make the batteries in the iPhone user-replaceable by 2027. …read more',
    url: 'https://hackaday.com/2024/06/29/apple-may-use-electrical-debonding-for-battery-replacement/',
    urlToImage:
      'https://hackaday.com/wp-content/uploads/2024/06/tesa_electrical_release_on_demand.jpg',
    publishedAt: '2024-06-30T02:00:27Z',
    content:
      'As a result of the European Union’s push for greater repairability of consumer devices like smartphones, Apple sees itself forced to make the batteries in the iPhone user-replaceable by 2027. Reporte… [+1680 chars]',
  },
  {
    source: {
      id: null,
      name: 'heise online',
    },
    author: 'Wolfgang Kreutz',
    title:
      'heise+ | Digitale Wetterfrösche: Wetter-Apps mit Datenquellen-Wahl für iPhone und iPad',
    description:
      'Der Wetterbericht eines Anbieters lässt Sie öfter im Regen stehen? Wir haben uns neun Wetter-Apps mit Zugriff auf mehrere Prognose-Dienstleister angesehen.',
    url: 'https://www.heise.de/tests/Digitale-Wetterfroesche-Wetter-Apps-mit-Datenquellen-Wahl-fuer-iPhone-und-iPad-9746349.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus',
    urlToImage:
      'https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/6/0/4/9/6/6/mi2403_wetter_apps_aufmacher_digital-69c93c7b8c239a45.jpg',
    publishedAt: '2024-06-30T06:00:00Z',
    content:
      'Inhaltsverzeichnis\r\nFür viele gehört der Blick in Apples Wetter-App oder auf die zugehörigen Widgets zur täglichen Routine. Spätestens, wenn sich die Prognose wiederholt als unzuverlässig erweist, dü… [+1907 chars]',
  },
  {
    source: {
      id: null,
      name: 'heise online',
    },
    author: 'Peter Siering',
    title: 'KI-Technik als zweifelhafter Messias – ein Kommentar',
    description:
      'KI wird als Lösung für Probleme angepriesen, die man mit guter Organisation nicht hätte. Wird Zeit für einen neuen Hype, der KI verdrängt, meint Peter Siering.',
    url: 'https://www.heise.de/meinung/KI-Technik-als-zweifelhafter-Messias-ein-Kommentar-9779535.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag',
    urlToImage:
      'https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/6/2/2/4/2/9/Overlay_KommentarV2_1_-0503c7c03785fcea.png',
    publishedAt: '2024-06-30T04:30:00Z',
    content:
      'Das Beste an KI ist, dass niemand mehr von Blockchain faselt, sagte ein gelegentlicher ct-Autor vor einiger Zeit. In mir wächst mittlerweile die Ungeduld, dass endlich ein neuer Hypermessias um die E… [+2620 chars]',
  },
] satisfies News[];

const NewsScreen = () => {
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
        data={DUMMY_NEWS}
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
