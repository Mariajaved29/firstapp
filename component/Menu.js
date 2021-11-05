import React from 'react';
import {View, Text, FlatList }  from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

class Menu extends React.Component {
    constructor(){
        super()
        this.state ={
            data: []
        }
    }
    componentDidMount(){
        this.Callapi();
    }
   async Callapi(){
      let res=await fetch('https://reactnative.dev/movies.json')
        let resapi =await res.json();
        this.setState({data:resapi.movies})
        // console.warn("api called",resapi)
    }
    rowSelected(item){
        this.props.navigation.navigate('Flex',{
                finalData: "final data"
        })
    }
    render(){
    return (
        <View style={{flex: 1, flexDirection: 'column' }}>
            <Text style={{padding:16, fontSize:20, fontWeight:'bold', textAlign:'center'}}>Top Moies List</Text>
            <FlatList 
            data={this.state.data}
            numColumns={1}
            renderItem={({item})=>
            <TouchableOpacity onPress={()=> this.rowSelected(item)}> 
            <Text style={{padding:16, fontSize:20, textAlign:'center', backgroundColor:'darkkhaki', margin:4}}>
                {item.id} 
                {item.title}
                {item.releaseYear}
           </Text>
           </TouchableOpacity>
            } />    
        </View>
    )}
}

export default Menu
