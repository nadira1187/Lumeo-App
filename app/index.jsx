import { StatusBar } from 'expo-status-bar';
import { Image, Text, View ,ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants'; // Ensure the path is correct
import CustomButton from '../components/CustomButton';
import { router } from 'expo-router';

export default function App() {
  return (
    <SafeAreaView className="bg-primary flex-1">
        
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
      {/* Container for the logo and text */}
      <View className="w-full min-h-[85vh]  items-center pt-12 px-4">
        {/* Logo */}
        <Image
          className="w-32 h-20"
          resizeMode="contain"
          source={images.logo}
        />
        {/* Text */}
        <Text className="text-white text-3xl font-semibold mt-1">Lumeo</Text>
      <Image 
      source={images.cards}
      className="max-w-[380px] w-full h-[298px]"
            resizeMode="contain"/>
       <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless{"\n"}
              Possibilities with{" "}
              <Text className="text-secondary-200">Lumeo</Text>
            </Text>

            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>

          {/* <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Lumeo
          </Text> */}
          <CustomButton   title="Continue with Email"
            handlePress={() => router.push('/sign-in') }
            containerStyles="w-full mt-7"></CustomButton>
      </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />

    </SafeAreaView>
  );
}
