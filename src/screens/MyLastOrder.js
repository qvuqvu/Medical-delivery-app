import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, FlatList, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import firestore, { firebase } from '@react-native-firebase/firestore';
import auth from "@react-native-firebase/auth"
import HeaderSimple from '../components/HeaderSimple'
import Icon from 'react-native-vector-icons/Ionicons';
const SCREEN_WIDTH = Dimensions.get('window').width;
export default function MyLastOrder({ navigation }) {
  const user = auth().currentUser;
  const [isValue, setValue] = useState(false);
  const [getdoc, setdoc] = useState([]);
  const [getdoc1, setdoc1] = useState(
    {
      items: [{ "SL": "", "gia": "", "id": "", "image": null, "name": "", "nhathuoc": "" }],
      date: ""
    });
  const item = [];
  const [check, getcheck] = useState(false)
  firestore()
    .collection('lastorder' + user.uid).onSnapshot((snapshot) => {

    });
  useEffect(() => {
    getcheck(false)
    firestore()
      .collection('lastorder' + user.uid).onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          if (snapshot.size == 1) {
            getcheck(true)
            setdoc1(doc.data())
          }
          else {
            item.push(doc.data())
          }
        });
      });

  }, [getdoc]);
  const addd = (() => {
    setdoc(Math.random())
    if (check)
      getcheck(false)
  })
  const List = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => { navigation.push("ProductInfo", { id: item.id }) }}>
        <View style={{ flexDirection: 'row', marginTop: 15, backgroundColor: '#e1f8f8', height: 100, borderRadius: 10, width: SCREEN_WIDTH - 20, marginLeft: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15 }}>
            <Image
              style={{ width: 80, height: 80, resizeMode: "cover" }}
              source={{ uri: item.image }} />
          </View>
          <View style={{ marginLeft: 10, marginTop: 10 }}>
            <View style={{ width: 265, height: 20, }}>
              <Text style={{ color: 'black', fontSize: 15 }}>{item.name}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <Text style={{ color: 'red', fontSize: 15, fontWeight: 'bold' }}>{item.gia}</Text>
            </View>
          </View>
          <Text style={{ marginLeft: 'auto', fontWeight: 'bold', fontSize: 14, marginTop: 3, marginRight: 10, alignSelf: 'center', color: 'black' }}>x{item.SL}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  const ListItem = ({ item }) => {
    return (
      <View style={{ marginTop: 10, marginBottom: 10, backgroundColor: 'white' }}>
        <View style={{ justifyContent: 'center', }}>
          <View style={{ flexDirection: 'row', marginTop: 8, marginLeft: 15 }}>
            <View style={{ flexDirection: 'row', borderBottomWidth: 1 }}>
              <Image
                style={{ width: 20, height: 20, }}
                source={require('../global/image/store.png')} />
              <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 17, marginLeft: 10, }}>{item.nhathuocchung}</Text>
            </View>
            <Text style={{ color: 'red', fontSize: 14.5, marginLeft: 'auto', marginRight: 20, fontWeight: '500' }}>Đã giao</Text>
          </View>
          <FlatList data={item.items}
            renderItem={({ item, index }) => <List item={item} />}
            showsVerticalScrollIndicator={false}
            style={{ marginBottom: 15 }}
          />
        </View>
        <View>
          <View style={{ marginBottom: 20, height: 40 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', borderTopWidth: 0.5, borderBottomWidth: 0.5 }}>
              <View style={{ marginLeft: 15, marginTop: 10, marginBottom: 10 }}>
                <Text style={{ color: 'black', fontSize: 16 }}>Sản phẩm: {<Text style={{ color: 'red' }}>{item.items.length}</Text>}</Text>
                <Text style={{ color: 'black', fontSize: 16 }}>Ngày nhận hàng: {<Text style={{ color: 'red' }}>{item.date}</Text>}</Text>
              </View>
              <Text style={{ marginLeft: 'auto', marginRight: 15, color: 'black', fontSize: 16 }}>Tổng tiền: {<Text style={{ color: 'red' }}>{item.total}k</Text>} </Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
  const ListItem1 = (item) => {
    return (
      <View style={{ marginTop: 10, marginBottom: 10, backgroundColor: 'white' }}>
        <View style={{ justifyContent: 'center', }}>
          <View style={{ flexDirection: 'row', marginTop: 8, marginLeft: 15 }}>
            <View style={{ flexDirection: 'row', borderBottomWidth: 1 }}>
              <Image
                style={{ width: 20, height: 20, }}
                source={require('../global/image/store.png')} />
              <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 17, marginLeft: 10, }}>{item.nhathuocchung}</Text>
            </View>
            <Text style={{ color: 'red', fontSize: 14.5, marginLeft: 'auto', marginRight: 20, fontWeight: '500' }}>Đã giao</Text>
          </View>
          <FlatList data={item.items}
            renderItem={({ item, index }) => <List item={item} />}
            showsVerticalScrollIndicator={false}
            style={{ marginBottom: 15 }}
          />
        </View>
        <View>
          <View style={{ marginBottom: 20, height: 40 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', borderTopWidth: 0.5, borderBottomWidth: 0.5 }}>
              <View style={{ marginLeft: 15, marginTop: 10, marginBottom: 10 }}>
                <Text style={{ color: 'black', fontSize: 16 }}>Sản phẩm: {<Text style={{ color: 'red' }}>{item.items.length}</Text>}</Text>
                <Text style={{ color: 'black', fontSize: 16 }}>Ngày nhận hàng: {<Text style={{ color: 'red' }}>{item.date}</Text>}</Text>
              </View>
              <Text style={{ marginLeft: 'auto', marginRight: 15, color: 'black', fontSize: 16 }}>Tổng tiền: {<Text style={{ color: 'red' }}>{item.total}k</Text>} </Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <HeaderSimple title="Đã nhận hàng" navigation={navigation} />
      <View style={{ height: 50, backgroundColor: '#eff2cc', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold', marginLeft: 25 }}>Cảm ơn bạn đã đặt thuốc!</Text>
        <Icon
          name="reload"
          size={20}
          color="red"
          onPress={() => {
            addd()
          }}
          style={{ marginLeft: 'auto', marginRight: 20 }}
        />
      </View>
      <View style={{ height: '100%' }}>
        {check ?
          (
            ListItem1(getdoc1)
          )
          : (<FlatList data={item}
            renderItem={({ item, index }) => <ListItem item={item} />}
            contentContainerStyle={{ paddingBottom: 100 }}
            showsVerticalScrollIndicator={false}
          />)}
      </View>
    </SafeAreaView >
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listTab: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  btnTab: {
    width: Dimensions.get('window').width / 3.5,
    flexDirection: 'row',
    borderWidth: 0.5,
    padding: 10,
    borderColor: '#EBEBEB',
    justifyContent: 'center',
  },
  textTab: {
    fontSize: 16,
  },
  btnTabActive: {
    backgroundColor: '#E6838D',
  },
  textTabActive: {
    color: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 10,
  },
})