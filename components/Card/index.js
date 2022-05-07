import { SafeAreaView, View, FlatList, Text, Image } from "react-native";
import styles from './styles';
import testData from "../../assets/data/testData";

const Item = ({ picture, author, about, tags, comments }) => (
  <View style={styles.container}>
    <Image style={styles.picture} source={{ uri: picture }} />
    <View style={styles.infoContainer}>
      <Text style={styles.about}>{about.split(' ').slice(0, 10).join(' ')}</Text>
      <Text style={styles.author}>
        {`by ${author}`}
        {'\n'}
      </Text>
      <View style={styles.tagContainer}>
        {tags.slice(0, 2).map((word) => {
          return <Text style={styles.tags}>{word}</Text>;
        })}
      </View>
      <Text style={styles.comments}>{`${comments.length} Comments`}</Text>
    </View>
  </View>
);

const Card = () => {
  const renderItem = ({ item }) => (
    <Item
      picture={item.picture}
      author={item.author}
      about={item.about}
      tags={item.tags}
      comments={item.comments}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={testData} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </SafeAreaView>
  );
};

export default Card;