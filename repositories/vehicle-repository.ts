import fs from "fs";

export type Vehicle = {
  price: number;
  make: string;
  model: string;
  trim: string;
  colour: string;
  co2_level?: number;
  transmission: string;
  fuel_type: string;
  engine_size: number;
  date_first_reg: string;
  mileage: number;
};

class VehicleRepository {
  private _vehicles: Vehicle[];
  
  constructor() {
    const file = fs.readFileSync("./repositories/vehicles.json", "utf8");
    this._vehicles = JSON.parse(file);
  }

  getAllVehicles(): Vehicle[] {
    return this._vehicles;
  }

  getVehicleMake(brand:string): Vehicle[] {
    const brandOfVehicle = this._vehicles.filter(vehicle => vehicle.make === brand);
    return brandOfVehicle;
  }

  getVehicleModel(carModel: string): Vehicle[] {
    const modelOfVehicle = this._vehicles.filter(vehicle => vehicle.model === carModel);
    return modelOfVehicle;
  }

  getVehicleTransmission(gearbox: string): Vehicle[] {
    const transmissionOfVehicle = this._vehicles.filter(vehicle => vehicle.transmission === gearbox);
    return transmissionOfVehicle;
  }

  getAllVehiclesPriceAscending(): Vehicle[] {
    return this._vehicles.sort((vehicle1, vehicle2) => {
      return vehicle1.price - vehicle2.price;
    })
  }

  getAllVehiclesPriceDescending(): Vehicle[] {
    return this._vehicles.sort((vehicle1, vehicle2) => {
      return vehicle2.price - vehicle1.price;
    })
  }
}

export default VehicleRepository;