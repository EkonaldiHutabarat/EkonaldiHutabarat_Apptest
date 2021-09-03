import React, {useState, useEffect} from 'react'
import {View,Image, Text, StyleSheet, ScrollView, TouchableOpacity, Button, FlatList} from 'react-native'
import { setContacts } from '../../redux/actions/contactActions';
import { useDispatch, useSelector } from "react-redux";

const Contact =() =>{
    const contacts = useSelector((state) => state.allContacts.contacts);
    const dispatch = useDispatch();
    const fetchContacts = async () => {
      const response = await axios
        .get("https://simple-contact-crud.herokuapp.com/contact")
        .catch((err) => {
          console.log("Err: ", err);
        });
      dispatch(setContacts(response.data));
    };
  
    useEffect(() => {
      fetchContacts();
    }, []);
  
    console.log("Contacts :", contacts);

    const renderList = contacts.map(contact =>{
        const {id, firstName, lastName, age, photo} = contact;
        return(
            <View style={styles.container}>
            <Text style={styles.textTitle}>Daftar Kontak</Text>
                <View>
                <ScrollView>
                    <TouchableOpacity style={styles.wrapContact}
                    keyExtractor={({id}, index) => index.toString()}
                    >
                    <View style={styles.wrapImg}>
                        <Image url={photo}/>
                    </View>
                    <View style={styles.wrapText}>
                        <Text>{firstName}</Text>
                        <Text>{lastName}</Text>
                        <Text>{age}</Text>
                    </View>
                    </TouchableOpacity>
                </ScrollView>
                </View>
        <TouchableOpacity style={styles.btnAdd}>
            <Text>+</Text>
        </TouchableOpacity>
        </View>
        )
    })
    return <>{renderList}</>
}






// const Contact = () =>{
//     const [data, setData] = useState([]);

//     useEffect(() =>{
//         fetch("https://simple-contact-crud.herokuapp.com/contact")
//         .then((response)=> response.json())
//         .then((json)=>{
//             console.log(json.data)
//             setData(json.data)
//         }) 
//         .catch((error) => alert(error))
//     },[])
  
//     return(
//         <View style={styles.container}>
//             <Text style={styles.textTitle}>Daftar Kontak</Text>
//         <FlatList
//             data={data}
//             keyExtractor={({id}, index) => index.toString()}
//             renderItem={({item})=>(
//                 <View>
//                 <ScrollView>
//                     <TouchableOpacity style={styles.wrapContact}>
//                     <View style={styles.wrapImg}>
//                         <Image url={item.photo}/>
//                     </View>
//                     <View style={styles.wrapText}>
//                         <Text>{item.firstName}</Text>
//                         <Text>{item.lastName}</Text>
//                         <Text>{item.age}</Text>
//                     </View>
//                     </TouchableOpacity>
//                 </ScrollView>
//                 </View>
                
//             )}
//         />
//         <TouchableOpacity style={styles.btnAdd}>
//             <Text>+</Text>
//         </TouchableOpacity>
//     </View>
        
//     )
// }

export default Contact

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#123',
        justifyContent:'center',
    },
    textTitle:{
        textAlign:'center',
        color:"#fff",
        paddingTop:30,
    },
    wrapContact:{
        margin:'auto',
        flexDirection:'row',
        backgroundColor:'#ccc',
        marginTop:10,
        marginLeft:10,
        marginRight:10
    },
    wrapImg:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#cca',
        width:100,
        height:100,
    },
    wrapText:{
        //marginHorizontal:20,
        margin:'auto',
    },
    btnAdd:{
        backgroundColor:'#fff',
        borderRadius:50,
        width:50,
        height:50,
        marginBottom:50,
        marginHorizontal:320,
    }
})