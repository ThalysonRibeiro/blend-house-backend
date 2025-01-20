"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductController = void 0;
const CreateProductService_1 = require("../../services/product/CreateProductService");
const cloudinary_1 = require("cloudinary");
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRETE,
});
class CreateProductController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, price, description, banner, category_id } = request.body;
            const createProductService = new CreateProductService_1.CreateProductService();
            if (!request.files || Object.keys(request.files).length === 0) {
                throw new Error("error upload file");
            }
            else {
                const uploadedFiles = request.files['file'];
                const file = Array.isArray(uploadedFiles) ? uploadedFiles[0] : uploadedFiles;
                if (!file) {
                    throw new Error("Error: File not found");
                }
                const resultFile = yield new Promise((resolve, refect) => {
                    cloudinary_1.v2.uploader.upload_stream({}, function (error, result) {
                        if (error) {
                            refect(error);
                            return;
                        }
                        resolve(result);
                    }).end(file.data);
                });
                const product = yield createProductService.execute({
                    name,
                    price,
                    description,
                    banner: resultFile.url,
                    category_id,
                });
                return response.json(product);
            }
        });
    }
}
exports.CreateProductController = CreateProductController;
