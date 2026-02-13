import { WeatherInterface } from "../interface";

type param = {
	[key: string]: string;
};

const WeatherModel = {
	create: jest.fn((_newData: WeatherInterface) => Promise.resolve(true)),
	findOne: jest.fn(({ zip: _paramZip }: param) => Promise.resolve(true)),
	updateOne: jest.fn(({ zip: _paramZip }: param, _newData: WeatherInterface) => Promise.resolve(true)),
	deleteOne: jest.fn(({ zip: _paramZip }: param) => Promise.resolve(true)),
};

export default WeatherModel;
