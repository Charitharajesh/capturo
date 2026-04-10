import { createActor } from "@/backend";
import type { BookingFormData } from "@/types";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useBackendActor() {
  return useActor(createActor);
}

export function useBookings() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<unknown[]>({
    queryKey: ["bookings"],
    queryFn: async () => {
      if (!actor) return [];
      // Will call actor.getBookings() when backend exposes it
      return [];
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitBooking() {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: BookingFormData) => {
      if (!actor) throw new Error("Not connected");
      // Will call actor.submitBooking() when backend is ready
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
  });
}
