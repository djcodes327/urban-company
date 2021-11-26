import { EntityRepository, Repository } from "typeorm";
import { ServiceEntity } from "../entity/service.entity";
import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

@EntityRepository(ServiceEntity)
export class ServiceRepository extends Repository<ServiceEntity> {
  //! ADD SERVICE
  async submitService(req: Request, res: Response) {
    let admin_token = req.headers.authorization as string;
    let base_admin_token = process.env.ADMIN_SECRET as string;
    if (admin_token === base_admin_token) {
      let {
        service_title,
        service_description,
        service_image,
        service_tagline,
        service_category,
        service_bookings,
      } = req.body;

      await this.createQueryBuilder("service")
        .insert()
        .values({
          service_title,
          service_description,
          service_image,
          service_tagline,
          service_category,
          service_bookings,
        })
        .execute()
        .then((data: any) => {
          return res.send({
            code: 200,
            message: `${service_title} Service Added Successfully`,
            added: true,
          });
        })
        .catch((error: any) => {
          console.log("Error Service Resuqest : ", error);
          return res.send({
            code: 401,
            message: "Something Went Wrong",
            added: false,
          });
        });
    } else {
      return res.send({
        code: 401,
        message: "Please Enter Valid Credentials",
        added: false,
      });
    }
  }

  //! GET SERVICE
  async fetchAllService(req: Request, res: Response) {
    try {
      let serviceData = await this.createQueryBuilder("service")
        .select()
        .getMany();
      if (serviceData !== undefined) {
        res.send({
          code: 200,
          received: true,
          data: serviceData,
        });
      }
    } catch (error: any) {
      console.log(`${error}`);
      res.send({
        code: 401,
        received: false,
        data: "Something Went Wrong",
      });
    }
  }
}
