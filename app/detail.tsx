import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Link } from 'expo-router';
export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      Details
      <Link style={styles.page} href='/page/1'>toPages1</Link>
      <Link style={styles.page} href='/page/2'>toPages2</Link>
      <Link style={styles.page} href='/page/3'>toPages3</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  page:{
    marginTop: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: 'blue',
  }
});
