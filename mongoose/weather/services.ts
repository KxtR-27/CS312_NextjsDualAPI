import { WeatherInterface } from "./interface";
import weatherModel from "./model";

const storeDocument = async (doc: WeatherInterface): Promise<boolean> => {
	try {
		await weatherModel.create(doc);
		return true;
	} catch (error) {
		console.log(error);
		return false;
	}
};

const findByZip = async (paramZip: string): Promise<Array<WeatherInterface> | null> => {
	try {
		return await weatherModel.findOne({ zip: paramZip });
	} catch (error) {
		console.log(error);
		return [];
	}
};

const updateByZip = async (paramZip: string, newData: WeatherInterface): Promise<boolean> => {
	try {
		await weatherModel.updateOne({ zip: paramZip }, newData);
		return true;
	} catch (error) {
		console.log(error);
		return false;
	}
};

const deleteByZip = async (paramZip: string): Promise<boolean> => {
    try {
        await weatherModel.deleteOne({ zip: paramZip });
        return true;
    } catch (error) {
        console.log(error)
        return false
    }
}

export { storeDocument, findByZip, updateByZip, deleteByZip };
