import { Request, Response } from "express";
import { io } from '../../index';
import { Order } from "../../models/Order";

export async function createOrder(request: Request, response: Response) {
  try {
    const { products, total, address } = request.body;
    const order = await Order.create({
      products,
      total,
      address
    });

    io.emit('newOrder', order);

    return response.status(201).json(order);
  } catch (error) {
    console.error({ error });
    return response.sendStatus(500);
  }
}
