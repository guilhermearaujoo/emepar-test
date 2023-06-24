import EnqueteModel from '../models/EnqueteModel';
import { Enquete } from '../interfaces/enquete/Enquete';
import { IEnqueteModel } from '../interfaces/enquete/IEnqueteModel';
import { ServiceResponse } from '../interfaces/ServiceResponse';

export default class EnqueteService {
  constructor(
    private enqueteModel: IEnqueteModel = new EnqueteModel(),
  ) { }

  public async getAllEnquetes(): Promise<ServiceResponse<Enquete[]>> {
    const allEnquetes = await this.enqueteModel.findAll();
    return { status: 'SUCCESSFUL', data: allEnquetes };
  }

  public async getEnqueteById(id: number): Promise<ServiceResponse<Enquete>> {
    const enquete = await this.enqueteModel.findById(id);
    if (!enquete) return { status: 'NOT_FOUND', data: { message: `Enquete ${id} not found` } };
    return { status: 'SUCCESSFUL', data: enquete };
  }
}
