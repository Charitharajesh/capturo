import Types "../types/booking";
import List "mo:core/List";
import Runtime "mo:core/Runtime";

module {
  public type Booking = Types.Booking;
  public type BookingInput = Types.BookingInput;
  public type BookingId = Types.BookingId;

  public func create(
    bookings : List.List<Booking>,
    nextId : Nat,
    input : BookingInput,
  ) : Booking {
    Runtime.trap("not implemented");
  };

  public func getAll(bookings : List.List<Booking>) : [Booking] {
    Runtime.trap("not implemented");
  };

  public func getById(bookings : List.List<Booking>, id : BookingId) : ?Booking {
    Runtime.trap("not implemented");
  };
};
