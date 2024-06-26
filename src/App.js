import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';

import news_data from './news_data.json';
import news_banner_data from './news_banner_data.json';
import NewsCard from './components/NewsCard';

const App = () => {

  const renderNews = ({ item }) => <NewsCard news={item} />;
  const banner_Scroll = () => <ScrollView horizontal style={styles.scroll}>
  {
    news_banner_data.map(bannerNews => (
      <Image
        source={{ uri: bannerNews.imageUrl }}
        style={styles.banner_image}
      />
    ))
  }
</ScrollView>;


  return (
    <SafeAreaView style={styles.container}>
      <View>

      <Text  style={styles.baslik} >Miele</Text>

        <FlatList
          data={news_data}
          renderItem={renderNews}
          style={styles.flatScroll}
          ListHeaderComponent={banner_Scroll}
          ListFooterComponent={
            <View style={styles.bottomSpace}>

            </View>
          }
        />

        <View style={styles.bottomSpace}>

        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,

  },

  banner_image: {
    height: Dimensions.get('window').height / 4,
    width: Dimensions.get('window').width / 3,
  },

  scroll: {
    margin: 5,
  },

  bottomSpace: {

    backgroundColor: 'white',
    height:0,
    marginTop:100,

  },

  flatScroll: {

  },

  baslik:{
    fontSize:45,
    textAlign:'center',
    fontStyle:"italic",

    },
   // <3 <3 <3

});


export default App;