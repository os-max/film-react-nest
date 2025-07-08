import { Body, Controller, Post } from '@nestjs/common';
/* eslint-disable-next-line */
import { createOrderDTO } from './dto/order.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post()
  async createOrder(@Body() createOrderDTO: createOrderDTO) {
    return await this.orderService.createOrder(createOrderDTO);
  }
}
