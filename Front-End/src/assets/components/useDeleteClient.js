import toast from "react-hot-toast";
import { deleteClient } from "../../Fetching/ClientApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteClient() {
    const queryClient = useQueryClient();
    const { isLoading: isDeleting, mutate: deletingClient } = useMutation({
        mutationFn: deleteClient,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["clients"],
            });
            toast.success("Client deleted successfully");
        },
        onError: (error) => {
            toast.error("An error occurred: " + error.message);
        },
    });
    return { isDeleting, deletingClient };
}