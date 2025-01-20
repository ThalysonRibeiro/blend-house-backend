import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";
import { UploadedFile } from "express-fileupload";

import { v2 as cloudinary, UploadApiResponse } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRETE,
})

class CreateProductController {
  async handle(request: Request, response: Response) {
    const { name, price, description, banner, category_id } = request.body;

    const createProductService = new CreateProductService();

    if (!request.files || Object.keys(request.files).length === 0) {
      throw new Error("error upload file");
    } else {

      const uploadedFiles = request.files['file'];
      const file: UploadedFile = Array.isArray(uploadedFiles) ? uploadedFiles[0] : uploadedFiles;

      if (!file) {
        throw new Error("Error: File not found");
      }

      const resultFile: UploadApiResponse = await new Promise((resolve, refect) => {
        cloudinary.uploader.upload_stream({}, function (error, result) {
          if (error) {
            refect(error);
            return;
          }

          resolve(result);
        }).end(file.data);
      });

      const product = await createProductService.execute({
        name,
        price,
        description,
        banner: resultFile.url,
        category_id,
      });
      return response.json(product);
    }


  }
}

export { CreateProductController };