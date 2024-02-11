import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextBase
} from 'react-native';
import styles from './NewsCard.style';

const NewsCard = ({ news }) => {

    return (
        <View style={styles.container}>
            
            <Image
                style={styles.image}
                source={{
                    uri: news.imageUrl
                }}
                onError={(error) => console.log("Resim yüklenirken hata oluştu: ", error)}

            />
            <Text style={styles.title}>
                {' '}{news.title}
            </Text>

            <Text style={styles.description}>
                {' '}{news.description}
            </Text>

            <Text style={styles.author}>
                {news.author}
            </Text>

        </View>
    );
};

export default NewsCard;