import { Request, Response } from "express";
import { RemoveOrdeService } from "../../services/order/RemoveOrdeService";

class RemoveOrderController {
  async handle(req: Request, res: Response) {
    const order_id = req.query.order_id as string;

    const removeOrder = new RemoveOrdeService();

    const order = await removeOrder.excute({
      order_id
    });

    return res.json(order);

  }
}

export { RemoveOrderController };