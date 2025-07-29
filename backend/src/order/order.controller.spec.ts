import { Test, TestingModule } from '@nestjs/testing';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { createOrderDTO } from './dto/order.dto';

describe('OrderController', () => {
  let controller: OrderController;
  let service: OrderService;

  const mockOrderService = {
    createOrder: jest.fn()
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderController],
      providers: [{
        provide: OrderService,
        useValue: mockOrderService
      }]
    }).compile();

    controller = module.get<OrderController>(OrderController);
    service = module.get<OrderService>(OrderService);
  });

  it('should call createOrder', () => {

    const testOrder: createOrderDTO = {
      email: 'test@test.ru',
      phone: '+79999999999',
      tickets: [{
        film: '92b8a2a7-ab6b-4fa9-915b-d27945865e39',
        session: '5274c89d-f39c-40f9-bea8-f22a22a50c8a',
        daytime: '2024-06-28T10:00:53+03:00',
        row: 5,
        seat: 5,
        price: 350,
        seatPlacement: '5:5'
      }]
    }
    
    jest.spyOn(service, 'createOrder');

    controller.createOrder(testOrder);

    expect(service.createOrder).toHaveBeenCalledWith(testOrder)

  });
});
