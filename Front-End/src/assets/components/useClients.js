import { useQuery } from "@tanstack/react-query";
import { fetchClients } from "../../Fetching/ClientApi";


export function useClients() {
    const { isPending, data: clients, error } = useQuery({
        queryKey: "clients",
        queryFn: fetchClients,
    });
    return { clients, isPending, error };
}
