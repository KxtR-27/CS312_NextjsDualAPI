import mongoose, { model } from "mongoose";
import { WeatherInterface } from "./interface";
import { WeatherSchema } from "./schema";

const weatherModel = mongoose.models.Weather || model<WeatherInterface>("Weather", WeatherSchema);

export default weatherModel;
