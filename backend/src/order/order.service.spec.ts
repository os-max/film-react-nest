import { Test, TestingModule } from '@nestjs/testing';
import { OrderService } from './order.service';
import { createOrderDTO } from './dto/order.dto';

describe('FilmsService', () => {
  let service: OrderService;

  const testData = [
    {
      "id": "92b8a2a7-ab6b-4fa9-915b-d27945865e39",
      "rating": 5,
      "director": "test director",
      "tags": [
        "test tag"
      ],
      "image": "/bg1s.jpg",
      "cover": "/bg1c.jpg",
      "title": "test title",
      "about": "test about",
      "description": "test description",
      "schedule": [
        {
          "id": "5274c89d-f39c-40f9-bea8-f22a22a50c8a",
          "daytime": "2024-06-28T10:00:53+03:00",
          "hall": 0,
          "rows": 5,
          "seats": 10,
          "price": 350,
          "taken": [
            "1:2",
            "1:5",
            "1:3"
          ]
        }
      ]
    }
  ]

  const mockFilmsRepository = {
    findScheduleById: (id: string) => {
      return testData.find(film => film.id === id).schedule
    },
    reserveSeats: jest.fn()
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderService,
        {
          provide: 'FilmsRepository',
          useValue: mockFilmsRepository
        }
      ],
    }).compile();

    service = module.get<OrderService>(OrderService);
  });

  it('should create order', async () => {

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
    
    const order = await service.createOrder(testOrder);

    expect(order).toEqual({
      items: testOrder.tickets,
      total: 1
    })
  });
});
