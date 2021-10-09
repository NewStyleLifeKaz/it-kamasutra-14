import * as axios from "axios"


const instance = axios.create({
	withCredentials: true,
	headers: { 'API-KEY': 'b6244e81-2d5a-4d23-ba7e-ce942eedbdec' },
	baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});


export const userAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
			return response.data;
		});
	},
	follow(userId) {
		return instance.post(`follow/${userId}`,)
	},
	unfollow(userId) {
		return instance.delete(`follow/${userId}`,)
	},
	getProfile(userId) {
		console.warn('Smotret profileAPI tam vse yvidish, video 73');
		return profileAPI.getProfile(userId);
	}
};

export const profileAPI = {
	getProfile(userId) {
		return instance.get(`profile/` + userId)
	},
	getStatus(userId) {
		return instance.get(`profile/status/` + userId)
	},
	updateStatus(status) {
		return instance.put(`profile/status`, { status: status });
	}
};

export const authAPI = {
	me() {
		return instance.get(`auth/me`)
	}
};
