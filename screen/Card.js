import { VStack } from 'native-base';
import React from 'react'
import { Image, View, SafeAreaView, StatusBar, Text, StyleSheet, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';

const Card = () => {

    var width = Dimensions.get('window').width; //full width
    var height = Dimensions.get('window').height; //full height

    return (
        // <SafeAreaView style={styles.container}>
        <SafeAreaView>
            <StatusBar backgroundColor="white" />
            <ScrollView>
                <View style={{ display: "flex", alignItems: "center", width: width }}>
                    <Text
                        style={{
                            textAlign: "center",
                            fontStyle: "normal",
                            fontWeight: '600',
                            fontSize: 24,
                            color: '#3C3C3C',
                            marginBottom: 20

                        }}>
                        Range Of Our service
                    </Text>
                    <View style={{
                        display: "flex",
                        // justifyContent: "center",
                        // alignItems: "center",
                        flexDirection: "row",
                        height: 100,
                        backgroundColor: "#0AA1EA",
                        width: '95%',
                        borderRadius: 10,
                        marginBottom: 20,
                        marginTop: 20
                    }}>
                        <View
                            style={{
                                width: '35%',
                                height: '100%',
                                padding: 6,
                            }}
                        >
                            <Image
                                source={require('../assets/image3.png')}
                                style={{ width: '100%', height: '100%', borderRadius: 10 }}
                                resizeMethod="auto"
                            />
                        </View>

                        <View>
                            <Text>Wash & Stream Ironing</Text>
                            <Text> ₹500 </Text>
                            <Text
                                style={{
                                    flexWrap: "wrap"
                                }}
                            > Offers best dry cleaning service by ensuring that the fabric retains its texture, color,
                                and freshness. Offers best dry cleaning service by ensuring that the fabric retains its
                                texture, color, and freshness. </Text>
                        </View>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    HeadingText: {
        textAlign: "center",
        fontSize: 24,
    }
})

export default Card;