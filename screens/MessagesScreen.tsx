import * as React from 'react';
import { Image, ScrollView, StyleSheet as Styles , TouchableHighlight} from 'react-native';
import StyleSheet from '../constants/Styles';
import { Text, View } from '../components/Themed';
import { useLinkProps } from '@react-navigation/native';

const { Container, Row, Col } = StyleSheet

export default function MessagesScreen(props) {
  const testArr = [0,1,2,4,5,6,7,8,9,107,8,9,10]

  return (
    <View style={[Container, {alignItems: "flex-start", justifyContent: "flex-start", paddingHorizontal: 0}]}>
      <View style={{ width: '100%' }}>
        <View style={{margin: 6, }}><Text>New Matches</Text></View>
        <ScrollView bounces={false} style={{flexGrow: 0}} horizontal>
          {testArr.map((val, i) => (
            <Image key={i} style={styles.img} source={require("../assets/images/pic1.jpg")} />
          ))}
        </ScrollView>
      </View>
      <View style={{ flex: 1, width: "100%" }}>
        <View style={{ margin: 6 }}><Text>Recent Matches</Text></View>
        <ScrollView bounces={false}>
          {testArr.map((val, i) => (
            <TouchableHighlight onPress={() => props.navigation.navigate('Conversation')}>
              <View key={i} style={[{display: 'flex', flexDirection: 'row', borderWidth: .2, paddingHorizontal: 6}]}>
                <View>
                  <Image style={styles.img} source={require("../assets/images/pic1.jpg")}/>
                </View>
                  <View style={{display: 'flex', justifyContent: 'space-around', padding: 16}}>
                    <Text>Firstname Lastname</Text>
                    <Text>Hello How are you? {i}</Text>
                  </View>
              </View>
            </TouchableHighlight>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = Styles.create({
  container: {
    flex: 1,
    paddingHorizontal: 0
    // justifyContent: 'center'
  },
  img: {
    width: 75,
    height: 75,
    margin: 6,
    borderRadius: 100,
  }
})

{/* <Container p-0">
<View>
  <View>
    <View>
      New Matches
    </View>
    <View text-nowrap">
      <Image  src={pic1} height={75} width={75} alt="Picture of Match" roundedCircle/>
      <Image  src={pic1} height={75} width={75} alt="Picture of Match" roundedCircle/>
      <Image  src={pic1} height={75} width={75} alt="Picture of Match" roundedCircle/>
      <Image  src={pic1} height={75} width={75} alt="Picture of Match" roundedCircle/>
      <Image  src={pic1} height={75} width={75} alt="Picture of Match" roundedCircle/>
    </View>
  </View>
</View>
<View>
  <View>
    <View >
      Conversations
    </View>
    <ListGroup Item p-2">
        <Image src={pic1} height={75} width={75} alt="Picture of Match" roundedCircle/>
        <View my-auto">
          <p >Maggie</p>
          <p >Hey How are you doing?</p>
        </View>
      </ListGroup.Item>
      <ListGroup.Item p-2">
        <Image src={pic1} height={75} width={75} alt="Picture of Match" roundedCircle/>
        <View my-auto">
          <p >Maggie</p>
          <p >Hey How are you doing?</p>
        </View>
      </ListGroup.Item>
      <ListGroup.Item p-2">
        <Image src={pic1} height={75} width={75} alt="Picture of Match" roundedCircle/>
        <View my-auto">
          <p >Maggie</p>
          <p >Hey How are you doing?</p>
        </View>
      </ListGroup.Item>
      <ListGroup.Item p-2">
        <Image src={pic1} height={75} width={75} alt="Picture of Match" roundedCircle/>
        <View my-auto">
          <p >Maggie</p>
          <p >Hey How are you doing?</p>
        </View>
      </ListGroup.Item>
      <ListGroup.Item p-2">
        <Image src={pic1} height={75} width={75} alt="Picture of Match" roundedCircle/>
        <View my-auto">
          <p >Maggie</p>
          <p >Hey How are you doing?</p>
        </View>
      </ListGroup.Item>
    </ListGroup>    
  </View>
</View>
</Container> */}