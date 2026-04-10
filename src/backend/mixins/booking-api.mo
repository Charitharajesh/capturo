import Types "../types/booking";
import BookingLib "../lib/booking";
import List "mo:core/List";
import Runtime "mo:core/Runtime";

mixin (bookings : List.List<Types.Booking>, nextBookingId : Nat) {

  public func submitBooking(input : Types.BookingInput) : async Types.BookingResult {
    Runtime.trap("not implemented");
  };

  public query func getBookings() : async [Types.Booking] {
    Runtime.trap("not implemented");
  };

  public query func getBookingById(id : Types.BookingId) : async ?Types.Booking {
    Runtime.trap("not implemented");
  };
};
