import VehicleRepository from './vehicle-repository'
import {vehiclesMock} from '../repositories/__mocks__/vehicles';

jest.mock("fs", () => ({
  readFileSync: jest.fn(() => {
    return JSON.stringify(vehiclesMock);
  }),
}));

const obj = new VehicleRepository();

describe('testing api vehicles', () => {
  it('should call getAllVehicles and return the correct results', () => {
    const result = obj.getAllVehicles();
    expect(result).toEqual(vehiclesMock);
  });

  it('should call getVehicleMake with a vehicle make and return the correct results', () => {
    const result = obj.getVehicleMake('BMW');
    expect(result).toEqual([vehiclesMock[0], vehiclesMock[1]])
  });

  it('should call getVehicleModel with a vehicle model and return the correct results', () => {
    const result = obj.getVehicleModel('JUKE');
    expect(result).toEqual([vehiclesMock[4]])
  });

  it('should call getVehicleTransmission with the transmission and return the correct results', () => {
    const result = obj.getVehicleTransmission('Automatic');
    expect(result).toEqual([vehiclesMock[3]])
  });

  it('should call getAllVehiclesPriceAscending and sort the vehicles price ascending', () => {
    const result = obj.getAllVehiclesPriceAscending();
    expect(result).toEqual([vehiclesMock[4], vehiclesMock[2], vehiclesMock[0], vehiclesMock[1], vehiclesMock[3] ])
  });

  it('should call getAllVehiclesPriceDescending and sort the vehicles price descending', () => {
    const result = obj.getAllVehiclesPriceDescending();
    expect(result).toEqual([vehiclesMock[3], vehiclesMock[1], vehiclesMock[0], vehiclesMock[2], vehiclesMock[4] ])
  });
});


