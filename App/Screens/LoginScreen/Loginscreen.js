import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/colors'
import { useWarmUpBrowser } from "../../../hooks/warmUpBrowser";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();
export default function Loginscreen() {
    
    useWarmUpBrowser();
 
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
    const onPress = async() =>{
        try {
            const { createdSessionId, signIn, signUp, setActive } =
              await startOAuthFlow();
       
            if (createdSessionId) {
              setActive({ session: createdSessionId });
            } else {
              // Use signIn or signUp for next steps such as MFA
            }
          } catch (err) {
            console.error("OAuth error", err);
          }
    }

    return (
        <View style={{
            display: 'flex',
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            <Image
                source={require('./../../../assets/evLogo.png')}
                style={styles.LogoImage} />

            <Image
                source={require('./../../../assets/cover1.png')}
                style={styles.coverImage} />

            <View style={{ padding: 20 }}>
                <Text style={styles.heading}> Your Ultimate EV Charging Station Finder </Text>
                <Text style={styles.subheading}> Find Charging Station Near You, Plan Your Trip in Just One Click </Text>

                <TouchableOpacity style={styles.buton}
                onPress={onPress}
                >
                    
                    <Text style={{
                        color:Colors.WHITE,
                        textAlign:'center',
                        fontSize:17
                        }}> Login with Google </Text>
                </TouchableOpacity>
            </View>



        </View>
    )
}

const styles = StyleSheet.create({
    LogoImage: {
        width: 200,
        height: 160,
        objectFit: 'contain'

    },

    coverImage: {
        width: '100%',
        objectFit: 'cover',
        height: 280,
        marginTop: 5,

    },

    heading: {
        fontSize: 25,
        fontFamily: 'sans-serif',
        fontWeight: '900',
        textAlign: 'center',
        marginTop: 10
    },
    subheading: {
        fontSize: 17,
        fontFamily: 'sans-serif',
        fontWeight: '400',
        textAlign: 'center',
        marginTop: 10,
        color: Colors.BLACK
    },
    buton:{
        backgroundColor:Colors.PRIMARY,
        padding:16,
        display:'flex',
        borderRadius:99,
        marginTop:10
    }

});