import React from 'react';
import { getData } from './src/server/index';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

	// Состояние в котором храним наши данные
	const [data, setData] = React.useState({});

	// Выполняем запрос и записываем данные в state для дальнейшего использования
	React.useEffect(() => {
		// Функция которая отвечает за получение данных
		getData()
			.catch((error) => {
				console.log(error);
			})
			.then((res) => {
				if (res.response?.status === 200) {
					// Если мы получаем данные, то записываем данные в state data
					setData(res.data);
					console.log('data', res.data);
				} else {
					console.warn(`Ошибка ${res.response.status}`);
				}
			})
	}, []);

	return (
	<View style={styles.container}>
		{/* Тут мы выводим нужные нам данные - в данном случаем вывели название города */}
		<Text>{ data.title }</Text>
		<StatusBar style="auto" />
	</View>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
