module {
  public type BookingId = Nat;

  public type BookingInput = {
    eventName : Text;
    location : Text;
    budget : Nat;
    eventDate : Text;
  };

  public type Booking = {
    id : BookingId;
    eventName : Text;
    location : Text;
    budget : Nat;
    eventDate : Text;
    createdAt : Int;
  };

  public type BookingResult = {
    #ok : BookingId;
    #err : Text;
  };
};
