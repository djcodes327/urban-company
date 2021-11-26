import { getCustomRepository } from "typeorm";
import { ServiceRepository } from "../database/repository/service.repository";
import { Request, Response } from "express";

export class ServiceController {
  static async submitService(req: Request, res: Response) {
    let serviceRepository = getCustomRepository(ServiceRepository);
    await serviceRepository.submitService(req, res);
  }
  static async fetchAllService(req: Request, res: Response) {
    let serviceRepository = getCustomRepository(ServiceRepository);
    await serviceRepository.fetchAllService(req, res);
  }
}
