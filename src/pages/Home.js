import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    Dimensions,
    View,
    Image
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';

const Home = () => {
    return (
        <SafeAreaView >
            <StatusBar backgroundColor="#77529f" />
            <ScrollView>
                <View style={styles.header}>
                    <View style={styles.headerHead}>
                        <View>
                            <Text style={{ color: '#FFF', fontSize: 15 }}>Hello</Text>
                            <Text style={{ color: '#FFF', fontSize: 22 }}>Manu M</Text>
                        </View>
                        <View style={{ height: 45, width: 45, borderRadius: 100, backgroundColor: '#9275b2', justifyContent: 'center' }}>
                            <AntDesign name="search1" size={24} color="white" style={{ alignSelf: 'center' }} />
                        </View>
                    </View>
                    <View style={styles.headerBody}>
                        <Text style={{ color: '#FFF', fontSize: 15 }}>This Week</Text>
                        <View style={{ width: '100%', height: 50, backgroundColor: '#FFF', borderRadius: 25, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15 }}>
                            <View style={{ justifyContent: 'center' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 22 }}>12</Text>
                                    <View style={{ justifyContent: 'flex-end', paddingBottom: 2 }}>
                                        <Text style={{ fontSize: 15 }}>/24</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ justifyContent: 'center' }}>
                                <Text style={{ fontSize: 15, color: "#666666" }}>games left to play</Text>
                            </View>
                            <View style={{ justifyContent: 'center' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 15 }}>Play Now</Text>
                                    <AntDesign name="arrowright" size={24} color="black" style={{ paddingLeft: 5 }} />
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ width: '25%' }}>
                                <View style={{ height: 115, backgroundColor: '#FFF', borderTopLeftRadius: 25, borderTopRightRadius: 25 }}>
                                    <Text style={{ fontSize: 20, alignSelf: 'center', marginTop: 10 }}>02h</Text>
                                    <Text style={{ fontSize: 15, alignSelf: 'center', color: "#666666" }}>time left</Text>
                                </View>
                                <View style={{ height: 85, backgroundColor: '#fb437f', borderBottomLeftRadius: 25, borderBottomRightRadius: 25 }}>
                                    <Text style={{ fontSize: 20, alignSelf: 'center', marginTop: 10, color: '#FFF' }}>10h</Text>
                                    <Text style={{ fontSize: 15, alignSelf: 'center', color: "#fcb4cc" }}>spent</Text>
                                </View>
                            </View>
                            <View style={{ height: 200, width: '70%', backgroundColor: '#FFF', borderRadius: 25, paddingHorizontal: 20, paddingVertical: 10 }}>
                                <View style={{ height: "60%", flexDirection: 'row' }}>
                                    <View>
                                        <Text style={{ color: '#fea000', fontSize: 28, fontWeight: '600' }}>2,450</Text>
                                        <Text style={{ fontWeight: '600' }}>total points</Text>
                                    </View>
                                    <View style={{ height: 150, width: 150 ,alignItems:'flex-end'}}>
                                        <View style={{ width: '80%', height: '70%', overflow: 'hidden' }}>
                                            <Image style={{ width: '100%', height: '100%' }} source={require("../images/coin_icon.png")} />
                                        </View>
                                    </View>
                                </View>
                                <View style={{ height: "40%" }}>
                                    <Text style={{ color: '#666666', fontSize: 16, fontWeight: '600' }}>Current Streak</Text>
                                    <View style={{ flexDirection: 'row', paddingTop: 4 }}>
                                        <View style={{ height: 35, width: 35, borderWidth: 5, borderColor: "#feb232", borderRadius: 100, justifyContent: 'center' }}>
                                            <Text style={{ color: '#feb232', alignSelf: 'center', fontSize: 17, fontWeight: '900' }}>1</Text>
                                        </View>
                                        <View style={{ padding: 3 }}></View>
                                        <View style={{ height: 35, width: 35, borderWidth: 5, borderColor: "#feb232", borderRadius: 100, justifyContent: 'center' }}>
                                            <Text style={{ color: '#feb232', alignSelf: 'center', fontSize: 17, fontWeight: '900' }}>2</Text>
                                        </View>
                                        <View style={{ padding: 3 }}></View>
                                        <View>
                                            <View style={{ height: 35, width: 35, borderWidth: 5, borderColor: "#feb232", borderRadius: 100, justifyContent: 'center' }}>
                                                <FontAwesome5 name="hotjar" size={17} color="#feb232" style={{ alignSelf: 'center' }} />
                                            </View>
                                            <View style={{ padding: 2 }}></View>
                                            <View style={{ height: 10, width: 10, backgroundColor: "#feb232", borderRadius: 100, alignSelf: 'center' }}></View>
                                        </View>
                                        <View style={{ padding: 3 }}></View>
                                        <View style={{ height: 35, width: 35, borderWidth: 5, borderColor: "#ffe3b3", borderRadius: 100, justifyContent: 'center' }}>
                                            <Text style={{ color: '#feb232', alignSelf: 'center', fontSize: 17, fontWeight: '900' }}>4</Text>
                                        </View>
                                        <View style={{ padding: 3 }}></View>
                                        <View style={{ height: 35, width: 35, borderWidth: 5, borderColor: "#ffe3b3", borderRadius: 100, justifyContent: 'center' }}>
                                            <Text style={{ color: '#feb232', alignSelf: 'center', fontSize: 17, fontWeight: '900' }}>5</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.headerBody}>
                        <Text style={{ color: '#FFF', fontSize: 17 }}>Rewards to redeem</Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ paddingVertical: 10 }}>
                            <View style={{ height: 50, width: 180, backgroundColor: '#543476', borderRadius: 20, justifyContent: 'center' }}>
                                <View style={{ flexDirection: 'row', paddingHorizontal: 20 }}>
                                    <Foundation name="calendar" size={35} color="#0084ea" style={{ paddingRight: 10 }} />
                                    <View style={{ justifyContent: 'center', paddingBottom: 2 }}>
                                        <Text style={{ color: '#FFF', fontSize: 18 }}>5/8 Events</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ padding: 3 }}></View>
                            <View style={{ height: 50, width: 180, backgroundColor: '#543476', borderRadius: 20, justifyContent: 'center' }}>
                                <View style={{ flexDirection: 'row', paddingHorizontal: 20 }}>
                                    <Foundation name="calendar" size={35} color="#0084ea" style={{ paddingRight: 10 }} />
                                    <View style={{ justifyContent: 'center', paddingBottom: 2 }}>
                                        <Text style={{ color: '#FFF', fontSize: 18 }}>5/8 Events</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ padding: 3 }}></View>
                            <View style={{ height: 50, width: 180, backgroundColor: '#543476', borderRadius: 20, justifyContent: 'center' }}>
                                <View style={{ flexDirection: 'row', paddingHorizontal: 20 }}>
                                    <Foundation name="calendar" size={35} color="#0084ea" style={{ paddingRight: 10 }} />
                                    <View style={{ justifyContent: 'center', paddingBottom: 2 }}>
                                        <Text style={{ color: '#FFF', fontSize: 18 }}>5/8 Events</Text>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#77529f",
        height: Dimensions.get('screen').height * .7,
        padding: 20
    },
    headerHead: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    headerBody: {
        paddingTop: 35
    },
});

export default Home;
