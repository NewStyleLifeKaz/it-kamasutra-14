import * as axios from "axios"

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
	withCredentials: true,
	headers: { 'API-KEY': 'b6244e81-2d5a-4d23-ba7e-ce942eedbdec' },
	baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


export const userAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(baseUrl + `users?page=${currentPage}&count=${pageSize}`).then(response => {
			return response.data;
		});
	}
};

