import axios from 'axios';
import type {
	AxiosInstance,
	AxiosError,
	AxiosResponse,
	AxiosRequestConfig,
} from 'axios';

type ErrorCatch = (response?: AxiosResponse) => void;

export class Request {
	instance: AxiosInstance;

	constructor(errorCatch: ErrorCatch) {
		this.instance = axios.create();

		this.instance.interceptors.request.use(
			(config) => config,
			Promise.reject
		);
		this.instance.interceptors.response.use(
			(response) => response.data,
			(e: AxiosError) => {
				errorCatch(e.response);
				return Promise.reject(e);
			}
		);
	}

	get<T>(
		url: string,
		params = {},
		config: AxiosRequestConfig = {}
	): Promise<T> {
		return this.instance.get(url, { params, ...config });
	}

	post<T>(
		url: string,
		data?: object,
		config?: AxiosRequestConfig
	): Promise<T> {
		return this.instance.post(url, data, config);
	}

	put<T>(
		url: string,
		data?: object,
		config?: AxiosRequestConfig
	): Promise<T> {
		return this.instance.put(url, data, config);
	}

	patch<T>(
		url: string,
		data?: object,
		config?: AxiosRequestConfig
	): Promise<T> {
		return this.instance.patch(url, data, config);
	}

	delete<T>(
		url: string,
		params = {},
		config: AxiosRequestConfig = {}
	): Promise<T> {
		return this.instance.delete(url, { params, ...config });
	}

	request<T>(config: AxiosRequestConfig): Promise<T> {
		return this.instance.request(config);
	}
}
