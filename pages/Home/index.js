import React from 'react';
import { ThemeProvider, Tile, PricingCard  } from 'react-native-elements';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';


const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%'
  },

  overlay: {
    backgroundColor:'rgba(255,0,0,0.5)',
  },

  image: {
    flex: 1
  }
})

const Home = ({navigation}) => {

  return(
    <ThemeProvider>

      <SafeAreaView style={styles.container}>
        
      <View style={{flex: 1, flexDirection: 'column', paddingTop: 0}}>
            <View style={{ height: 300, backgroundColor: 'powderblue'}}>
                <Swiper autoplay style={styles.wrapper} showsButtons={true} activeDotColor="powderblue">
                  <View style={styles.slide1}>
                    <Tile
                      imageSrc={require('../../assets/banner/banner-1.jpg')}
                      title="Slide1"
                      featured
                      caption="Order now"
                      
                    />
                  </View>
                  <View style={styles.slide2}>
                    <Tile
                      imageSrc={require('../../assets/banner/banner-2.jpg')}
                      title="Slide2"
                      featured
                      caption="Order now"
                    />
                  </View>
                  <View style={styles.slide3}>
                    <Tile
                      imageSrc={require('../../assets/banner/banner-3.jpg')}
                      title="Slide3"
                      featured
                      caption="Order now"
                    />
                  </View>
                </Swiper>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', height: 100}}>

                <PricingCard
                  containerStyle={[{ width:'40%', height: '45%' }]}
                  titleStyle={[{ fontSize: 12 }]}
                  pricingStyle={[{ fontSize: 16 }]}
                  infoStyle={[{ fontSize: 12 }]}
                  button={[{ fontSize: 12 }]}
                  color="#4f9deb"
                  title="Free"
                  price="$0"
                  info={['1 User', 'Basic Support']}
                  button={{ title: ' Order now', icon: 'flight-takeoff' }}
                />

                <PricingCard
                  containerStyle={[{ width:'40%', height: '45%' }]}
                  titleStyle={[{ fontSize: 12 }]}
                  pricingStyle={[{ fontSize: 16 }]}
                  infoStyle={[{ fontSize: 12 }]}
                  button={[{ fontSize: 12 }]}
                  color="#4f9deb"
                  title="Paid"
                  price="$10"
                  info={['1 User', 'Basic Support']}
                  button={{ title: ' Order now', icon: 'flight-takeoff' }}
                />

            </View>



            
          </View>
        
      </SafeAreaView>

      
    </ThemeProvider>
  )
}

export default Home;