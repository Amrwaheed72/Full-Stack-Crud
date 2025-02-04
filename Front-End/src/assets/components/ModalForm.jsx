import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { addClient, updateClient } from "../../Fetching/ClientApi";
import toast from "react-hot-toast";

function ModalForm({ isOpened, onClose, mode, initialData }) {
  const { register, handleSubmit, reset, getValues } = useForm();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (isOpened) {
      if (mode === "edit" && initialData) {
        reset({
          name: initialData.name,
          email: initialData.email,
          job: initialData.job,
          rate: initialData.rate,
          status: initialData.isactive ? "Active" : "Inactive", // Map boolean to string
        });
      } else {
        reset({
          name: "",
          email: "",
          job: "",
          rate: 100.0, // Default rate
          status: "Active", // Default status
        });
      }
    }
  }, [isOpened, mode, initialData, reset]);

  const { isLoading: isCreating, mutate: addMutate } = useMutation({
    mutationFn: addClient,
    onSuccess: () => {
      toast.success("Client Added Successfully");
      queryClient.invalidateQueries({
        queryKey: ["clients"],
      });
      reset();
      onClose();
    },
    onError: (error) => toast.error(error.message),
  });

  const { isLoading: isUpdating, mutate: updateMutate } = useMutation({
    mutationFn: updateClient,
    onSuccess: () => {
      toast.success("Client Updated Successfully");
      queryClient.invalidateQueries({
        queryKey: ["clients"],
      });
      reset();
      onClose();
    },
    onError: (error) => toast.error(error.message),
  });

  const onSubmit = (data) => {
    const formData = {
      ...data,
      isactive: data.status === "Active",
    };

    if (mode === "add") {
      addMutate(formData);
    } else if (initialData) {
      const initialFormData = {
        name: initialData.name,
        email: initialData.email,
        job: initialData.job,
        rate: initialData.rate,
        status: initialData.isactive ? "Active" : "Inactive",
      };

      // Check if there are any changes
      if (JSON.stringify(formData) !== JSON.stringify(initialFormData)) {
        updateMutate({ ...formData, id: initialData.id });
      } else {
        toast.info("No changes made");
        onClose();
      }
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal" open={isOpened}>
        <div className="modal-box">
          <h3 className="font-bold text-lg py-4">
            {mode === "edit" ? "Edit Client" : "Client Details"}
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <label className="my-4 input input-bordered flex items-center gap-2">
              Name
              <input
                type="text"
                className="grow"
                placeholder="Full Name"
                {...register("name", { required: "This field is required" })}
              />
            </label>
            <label className="my-4 input input-bordered flex items-center gap-2">
              Email
              <input
                type="email"
                className="grow"
                placeholder="Email Address"
                {...register("email", { required: "This field is required" })}
              />
            </label>
            <label className="my-4 input input-bordered flex items-center gap-2">
              Job
              <input
                type="text"
                className="grow"
                placeholder="Your Job"
                {...register("job", { required: "This field is required" })}
              />
            </label>
            <div className="flex justify-between mb-4">
              <label className="input input-bordered flex items-center gap-2">
                Rate
                <input
                  type="number"
                  className="grow"
                  placeholder="Your Rate"
                  {...register("rate", { required: "This field is required" })}
                />
              </label>
              <select
                className="mx-2 select select-bordered w-full max-w-xs"
                {...register("status", { required: "This field is required" })}
              >
                <option disabled value="">
                  Select Your Status
                </option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault(); // Prevent form submission
                onClose(); // Close the modal
              }}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
            <button
              disabled={isCreating || isUpdating}
              type="submit"
              className="btn btn-success"
            >
              {mode === "edit" ? "Save Changes" : "Add Client"}
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default ModalForm;
