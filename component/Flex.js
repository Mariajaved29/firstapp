import React from 'react';
import {View, Text, ScrollView, StyleSheet,SafeAreaView,StatusBar} from 'react-native';

const Flex = () => {
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <View style={{flex: 1, flexDirection: 'column' }}>
            <View style={{flex: .10, backgroundColor:'skyblue'}}>
            <Text style={{padding:16, fontSize:20, fontWeight:'bold', textAlign:'center'}}>Home</Text>
            </View>
         </View>
        <View style={{flex: 1, flexDirection:'row', margin:5, flexWrap:'wrap', flexShrink:40 }}>
            <View style={{flex:.60, backgroundColor:'orange', margin:1}}>
            <Text style={{padding:16, fontSize:20, fontWeight:'bold', textAlign:'center'}}>Chat</Text>
            </View>
            <View style={{flex:.60, backgroundColor:'orange', margin:1}}>
            <Text style={{padding:16, fontSize:20, fontWeight:'bold', textAlign:'center'}}>Status</Text>
            </View>
            <View style={{flex:.60, backgroundColor:'orange', margin:1}}>
            <Text style={{padding:16, fontSize:20, fontWeight:'bold', textAlign:'center'}}>Calls</Text>
            </View>
         </View>
         <View style={{flex: 1, flexDirection: 'column', }}>
         <View style={{flex: .60, backgroundColor:'aliceblue', margin:5}}>
             <Text style={{padding:16, fontSize:20, textAlign:'center'}}>This is list box</Text>
         </View>
         <View style={{flex: .60, backgroundColor:'aliceblue', margin:5}}>
             <Text style={{padding:16, fontSize:20, textAlign:'center'}}>This is list box</Text>
         </View>
         <View style={{flex: .60, backgroundColor:'aliceblue', margin:5}}>
             <Text style={{padding:16, fontSize:20, textAlign:'center'}}>This is list box</Text>
         </View>
         <View style={{flex: .60, backgroundColor:'aliceblue', margin:5}}>
             <Text style={{padding:16, fontSize:20, textAlign:'center'}}>This is list box</Text>
         </View>
         <View style={{flex: .60, backgroundColor:'aliceblue', margin:5}}>
             <Text style={{padding:16, fontSize:20, textAlign:'center'}}>This is list box</Text>
         </View>
         <View style={{flex: .60, backgroundColor:'aliceblue', margin:5}}>
             <Text style={{padding:16, fontSize:20, textAlign:'center'}}>This is list box</Text>
         </View>
         <View style={{flex: .60, backgroundColor:'aliceblue', margin:5}}>
             <Text style={{padding:16, fontSize:20, textAlign:'center'}}>This is list box</Text>
         </View>
         <View style={{flex: .60, backgroundColor:'aliceblue', margin:5}}>
             <Text style={{padding:16, fontSize:20, textAlign:'center'}}>This is list box</Text>
         </View>
         <View style={{flex: .60, backgroundColor:'aliceblue', margin:5}}>
             <Text style={{padding:16, fontSize:20, textAlign:'center'}}>This is list box</Text>
         </View>
         <View style={{flex: .60, backgroundColor:'aliceblue', margin:5}}>
             <Text style={{padding:16, fontSize:20, textAlign:'center'}}>This is list box</Text>
         </View>
         </View>
       
        </ScrollView>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
      backgroundColor: 'white',
    },
    text: {
      fontSize: 42,
    },
  });
export default Flex;
