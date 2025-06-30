/* import { Prop, SchemaFactory } from "@nestjs/mongoose";

export class Schedule {
    @Prop()
    id: string;
    @Prop()
    daytime: string;
    @Prop()
    hall: string;
    @Prop()
    rows: number;
    @Prop()
    seats: number;
    @Prop()
    price: number;
    @Prop([String])
    taken: string[]
}

export class Film{
    @Prop()
    rating: number;
    @Prop()
    director: string;
    @Prop([String])
    tags: string[];
    @Prop()
    image: string;
    @Prop()
    cover: string;
    @Prop()
    title: string;
    @Prop()
    about: string;
    @Prop()
    description: string;
    @Prop({ type: [Schedule] })
    schedule: Schedule[];
};

export const FilmSchema = SchemaFactory.createForClass(Film); */

import mongoose from 'mongoose';

export interface ISchedule {
  id: string;
  daytime: string;
  hall: number;
  rows: number;
  seats: number;
  price: number;
  taken: string[];
}

export interface IFilm {
  id: string;
  title: string;
  rating: number;
  director: string;
  tags: string[];
  image: string;
  cover: string;
  about: string;
  description: string;
  schedule: ISchedule[];
}

export const FilmSchema = new mongoose.Schema<IFilm>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  schedule: [
    {
      id: {
        type: String,
        unique: true,
        required: true,
      },
      daytime: {
        type: String,
        required: true,
      },
      hall: {
        type: Number,
        required: true,
      },
      rows: {
        type: Number,
        required: true,
      },
      seats: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      taken: {
        type: [String],
        required: true,
      },
    },
  ],
});
