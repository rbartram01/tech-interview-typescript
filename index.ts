import express, { Express, Request, Response } from "express";
import VehicleRepository from "./repositories/vehicle-repository";

const app: Express = express();
const port = 3000;

const vehicles = new VehicleRepository();

const upperCaseFirstLetter = (parameter: string) => {
  return parameter.charAt(0).toUpperCase() + parameter.slice(1);
} 

app.get("/getAllVehicles", (req: Request, res: Response) => {
  res.send(vehicles.getAllVehicles());
});

app.get("/getVehicleMake", (req: Request, res: Response) => {
  const make = req.query.make;

  if (make) {
    res.send(vehicles.getVehicleMake(`${make}`.toUpperCase()));
  } else {
    throw new Error('Error occurred due to missing vehicle make');
  }
});

app.get("/getVehicleModel", (req: Request, res: Response) => {
  const model = req.query.model;

  if (model) {
    res.send(vehicles.getVehicleModel(`${model}`.toUpperCase()));
  } else {
    throw new Error('Error occurred due to missing vehicle model');
  }
});

app.get("/getVehicleTransmission", (req: Request, res: Response) => {
  const transmission = req.query.transmission;

  if (transmission) {
    res.send(vehicles.getVehicleTransmission(upperCaseFirstLetter(`${transmission}`)));
  } else {
    throw new Error('Error occurred due to missing vehicle transmission');
  }
});

app.get("/getAllVehiclesPriceAscending", (req: Request, res: Response) => {
  res.send(vehicles.getAllVehiclesPriceAscending());
});
 
app.get("/getAllVehiclesPriceDescending", (req: Request, res: Response) => {
  res.send(vehicles.getAllVehiclesPriceDescending());
});
 
app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
}); 