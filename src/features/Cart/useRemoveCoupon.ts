import { useMutation, useQueryClient } from '@tanstack/react-query';
import { removeCoupon as removeCouponApi } from "@/services/apiCakes";
import { toast } from 'sonner';

export function useRemoveCoupon() {
  const queryClient = useQueryClient();
  const { mutate: removeCoupon, isPending } = useMutation({
    mutationFn: removeCouponApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['coupon'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { removeCoupon, isPending };
}
