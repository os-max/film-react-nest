import {
  BadRequestException,
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { createOrderDTO } from './dto/order.dto';

@Injectable()
export class OrderService {
  constructor(@Inject('FilmsRepository') private filmsRepository) {}

  async createOrder(order: createOrderDTO) {
    for (const ticket of order.tickets) {
      const schedule = await this.filmsRepository.findScheduleById(
        ticket.film,
      );

      const session = schedule.find((session) => session.id === ticket.session);

      if (!session) {
        throw new NotFoundException('Film session not found');
      }

      if (ticket.row > session.rows || ticket.seat > session.seats) {
        throw new BadRequestException('Wrong data for seat number');
      }

      if (session.taken.includes(ticket.seatPlacement)) {
        throw new ConflictException('Seat taken');
      }

      await this.filmsRepository.reserveSeats(
        ticket.film,
        ticket.session,
        ticket.seatPlacement,
      );
    }

    return {
      total: order.tickets.length,
      items: order.tickets,
    };
  }
}
