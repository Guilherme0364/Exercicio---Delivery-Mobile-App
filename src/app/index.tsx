import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner'
import Constants from 'expo-constants';
import '../styles/input.css'

const statusBarHeight = Constants.statusBarHeight;

export default function App() {
  return (
    <ScrollView style={{ flex: 1}} className='bg-slate-200' showsVerticalScrollIndicator={false}>
		<View className='w-full px-1' style={{ marginTop: statusBarHeight + 8}}>

			<Header/>
			<Banner/>
			
		</View>		
    </ScrollView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//   },
// });
