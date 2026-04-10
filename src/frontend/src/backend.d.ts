import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type BookingId = bigint;
export interface Booking {
    id: BookingId;
    createdAt: bigint;
    budget: bigint;
    location: string;
    eventDate: string;
    eventName: string;
}
export type BookingResult = {
    __kind__: "ok";
    ok: BookingId;
} | {
    __kind__: "err";
    err: string;
};
export interface BookingInput {
    budget: bigint;
    location: string;
    eventDate: string;
    eventName: string;
}
export interface backendInterface {
    getBookingById(id: BookingId): Promise<Booking | null>;
    getBookings(): Promise<Array<Booking>>;
    submitBooking(input: BookingInput): Promise<BookingResult>;
}
