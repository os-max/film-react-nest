import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { FilmsRepository } from 'src/repository/films.repository';
import { createOrderDTO } from './dto/order.dto';

@Injectable()
export class OrderService {
  constructor(private filmsRepository: FilmsRepository) {}

  async createOrder(order: createOrderDTO) {
    for (const ticket of order.tickets) {
      const { schedule } = await this.filmsRepository.findScheduleById(
        ticket.film,
      );
      const session = schedule.find((session) => session.id === ticket.session);

      if (!session) {
        throw new NotFoundException('Film session not found');
      }

      if (ticket.row > session.rows || ticket.seat > session.seats) {
        throw new BadRequestException('Wrong data for seat number');
      }

      const seatPlacement = `${ticket.row}:${ticket.seat}`;

      if (session.taken.includes(seatPlacement)) {
        throw new ConflictException('Seat taken');
      }

      await this.filmsRepository.reserveSeats(
        ticket.film,
        ticket.session,
        seatPlacement,
      );
    }

    return {
      total: order.tickets.length,
      items: order.tickets,
    };
  }
}
