import React from 'react';
import {Text, ScrollView, ImageBackground, View, StyleSheet} from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
const LoginScreen =({navigation}) => {
    return(
        <ScrollView
          style={{flex: 1, backgroundColor: '#ffffff'}}
          showsVerticalScrollIndicator={false}>
        <ImageBackground
        source={require('./images/piclogin.jpg')}
        style={{height:Dimensions.get('window').height / 2.5,
        }}>
          <View style={styles.brandView}>
            <Icon
            name="Smart-market"
            style={{color:'#ffffff', fontsize: 100}}
            />
            <Text style={styles.brandViewText}>Smart Market</Text>
          </View>
        </ImageBackground>
        <View style={styles.bottomView}>
          <View style={{padding:40}}>
            <Text style={{color: '#4632A1', fontSize: 34}}>Welcome</Text>
            <Text>
              Don't have an account?
              <Text style={{color:'red' ,fontStyle:'italic'}}>Register now
              </Text>
            </Text>
            <View style={{marginTop: 50}}>
              <Item floatingLabel style={{borderColor: '#4632A1'}}>
                <Label>Username</Label>
                <Input value="okay@gmail.com" keyboardType="email-address"/>
                <Icon name="checkmark" style={{'#4632A1'}}/>
              </Item>
              <Item floatingLabel style={{borderColor: '#4632A1'}}>
                <Label>password</Label>
                <Input  keyboardType="email"/>
                <Icon name="checkmark" style={{'#4632A1'}}/>
              </Item> 
            </View>
            <View style={styles.forgotpasswordView}>
              <View style={{flex:1,marginLeft:-20}}>
                <ListItem noBorder>
                  <CheckBox checked={true} color="#4632A1"/>
                  <Body>
                    <Text style={{color: '#4632A1', alignSelf: 'flex-start'}}>Remember Me</Text>
                  </Body>
                </ListItem>
              </View>
              <View style={{flex:1,marginRight:-20}}>
                <ListItem noBorder>
                  <Body>
                    <Text style={{color: '#4632A1', alignSelf: 'flex-end'}}>Forgot Password</Text>
                  </Body>
                </ListItem>
              </View>
            </View>
            <View style={{height:100,justifyContent:'center',alignItems:'center',}}>
              <Button rounded style={styles.loginBtn}>
                <Text style={{color: '#ffffff'}}>Login</Text>
              </Button>
            </View>
          </View>
        </View>
        </ScrollView>
    );
};

export default LoginScreen;
const styles = StyleSheet.create({
  brandView: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center',

  },
  brandViewText: {
    color: '#ffffff',
    fontSize:40,
    fontWeight: 'bold',
    textTransform: 'uppercase',

  },
  bottomView: {
    flex: 1.5,
    backgroundColor: '#ffffff',
    bottom: 50,
    borderBottomStartRadius:60,
    borderBottomEndRadius: 60,

  },
  forgotpasswordView: {
    height:50,
    marginTop:20,
    flexDirection:'row',


  },
  loginBtn: {
    alignSelf:'center',
    backgroundColor:'#4632A1',
    width: Dimensions.get('window').width / 2,
    justifyContent: 'center',

  }

});