import axios from 'axios';

// url на который мы ссылаемся 
const url = 'https://www.metaweather.com/api/location/';

// id города для которого нужно получить нужные данные
const queryId = '44418';

// Экспортируем функцию которая выполняет запрос
export const getData = async () => {
	const response = await axios.get(`${url}${queryId}/`, {
		method: 'GET',
	});

	const data = await response.data;

	return {
		data,
		response,
	};
};