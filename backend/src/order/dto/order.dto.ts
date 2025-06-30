import { Type } from 'class-transformer';
import { IsArray, IsDefined, IsNumber, IsString, Min } from 'class-validator';

export class TicketDTO {
  @IsString()
  film: string;
  @IsString()
  session: string;
  @IsString()
  daytime: string;
  @IsNumber()
  @Min(1)
  row: number;
  @IsNumber()
  @IsDefined()
  @Min(1)
  seat: number;
  @IsNumber()
  price: number;

  public get seatPlacement() {
    return `${this.row}:${this.seat}`;
  }
}

export class createOrderDTO {
  @IsString()
  email: string;
  @IsString()
  phone: string;
  @IsArray()
  @Type(() => TicketDTO)
  tickets: TicketDTO[];
}
