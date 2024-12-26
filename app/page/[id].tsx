import {  ActivityIndicator, Button, StyleSheet } from 'react-native';
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import { Text, View } from '@/components/Themed';
import { useEffect, useState } from 'react';

export default function DetailsScreen() {
    const { id } = useLocalSearchParams(); // 获取动态路径参数
    const router = useRouter();
    const navigation = useNavigation(); // 用于动态设置导航栏标题
    const [product, setProduct] = useState(null); // 存储商品信息
    const [loading, setLoading] = useState(true); // 加载状态
     // 模拟接口请求
    useEffect(() => {
        const fetchProduct = async () => {
        try {
            // 模拟一个接口请求，替换成真实的接口调用
            const response = await fetch(`https://api.example.com/products/${id}`);
            const data = await response.json();
            setProduct(data);

            // 动态设置导航栏的标题为商品信息的 title
            navigation.setOptions({ title: data.title || '商品详情' });
        } catch (error) {
            console.error('Error fetching product:', error);
            navigation.setOptions({ title: '商品未找到' }); // 如果发生错误，设置默认标题
        } finally {
            setLoading(false);
        }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
        );
    }
    return (
        <View style={styles.container}>
            <Text style={styles.fontwz}>Page ID: {id}</Text>
            <Text style={styles.fontwz}>2222</Text>
            <Button title="Go Back" onPress={() => router.push('/')} />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fontwz: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
