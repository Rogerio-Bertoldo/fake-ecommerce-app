import { Order } from "../../domain/order";

export interface OrderContextService {
  order: Order;
  updateOrder(order: Order): void;
  deleteOrder(order: Order): void;
}
