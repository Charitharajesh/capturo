import Types "types/booking";
import BookingMixin "mixins/booking-api";
import List "mo:core/List";

actor {
  let bookings = List.empty<Types.Booking>();
  var nextBookingId : Nat = 1;

  include BookingMixin(bookings, nextBookingId);
};
