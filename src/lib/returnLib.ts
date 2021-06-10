export const returnLib = (stauts: number, message: string, data?: object | string) => {
	return {
		stauts,
		message,
		data,
	};
};