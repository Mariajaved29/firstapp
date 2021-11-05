import React from 'react';
import {View, Text, SectionList, Touchable} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Sectionlist extends React.Component{
    constructor(){
        super()
        this.state={
            Data:[
            {key:0, title: 'Cities', data:[{key:0, title:'Karachi'},{key:1, title:'Islamabad'},
                    {key:2, title:'Lahore'},{key:3, title:'Murree'},{key:4, title:'Hyderabad'}]},
            {key:1, title: 'Countries', data:[{key:0, title:'Pakistan'},{key:1, title:'India'}]},
            {key:2, title: 'Province', data:[{key:0, title:'Sindh'},{key:1, title:'Kpk'}]},
            {key:3, title: 'Students', data:[{key:0, title:'Anum'},{key:1, title:'Bushra'}]},
            {key:4, title: 'Colleges', data:[{key:0, title:'Government'},{key:1, title:'Private'}]},
            {key:5, title: 'schools', data:[{key:0, title:'Government'},{key:1, title:'Private'}]},
            {key:6, title: 'Subject', data:[{key:0, title:'Computer Science'},{key:1, title:'Biology'},
                    {key:2, title:'Computer Science'},{key:3, title:'Biology'}]}
        ]
        }
    }
    rowSelected(item){
        this.props.navigation.navigate('Menu',{
                sectionData: "Section data"
        })
    }
    render(){
    return (
        <View>  
            <Text style={{fontSize:30, padding:7, textAlign:'center', fontWeight: 'bold'}}>Section List</Text>
            <SectionList
                renderSectionHeader={({section}) =>
                <View style={{backgroundColor:'gray', height:35}}>
            <Text style={{color:'black', padding: 5, fontWeight:'bold', fontSize:18}}>{section.title}</Text>
            </View>
            }
            renderItem={({item, section})=>
            <TouchableOpacity onPress={()=> this.rowSelected(item,section)}>
            <View style={{backgroundColor:'lightgray', color: 'white'}}>
                <Text numberOfLines={1} style={{color:'black', padding: 5, fontSize:18}}>
                    {item.title}
                </Text>
            </View>
            </TouchableOpacity>
            }
            sections={this.state.Data}  />

    </View>
    )}
}

export default Sectionlist
