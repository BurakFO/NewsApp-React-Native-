
import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({

    container:{

        margin: 5,
        padding: 10,
        display:"flex",


    },

    image:{ 
        height: Dimensions.get('window').height /4,
        //resizeMode: 'contain', // it provides to show all the image exactly
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    title:{
        fontWeight: "700",
        margin: 5,
        marginTop: 10,

        
    }, 
     
    description:{
        fontStyle: 'italic',
        fontSize:15,

    },
    
    author:{
        margin: 2,
        textAlign: "right", // Metni sağa hizala
        fontStyle: 'italic',

    },

});