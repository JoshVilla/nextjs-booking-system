import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  FormField,
  FormLabel,
  FormItem,
  FormControl,
} from "@/components/ui/form";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button"; // Import Button for submission
import { ICinema } from "@/app/service/types";
import { useEffect, useState } from "react";
import { deleteCinema, editCinema } from "@/app/service/api";
import { toast } from "sonner";
const EditCinema = ({
  initOpen,
  setOpen,
  record,
  refreshCinemas,
}: {
  initOpen: boolean;
  setOpen: (open: boolean) => void;
  record: ICinema;
  refreshCinemas: () => void;
}) => {
  const form = useForm<ICinema>({
    defaultValues: {
      name: record.name,
      isOpen: record.isOpen,
    },
  });
  const [loading, setLoading] = useState(false);
  const [deleteCinemaName, setDeleteCinemaName] = useState("");

  const handleDeleteCinema = async () => {
    if (deleteCinemaName === record.name) {
      const response = await deleteCinema({ cinemaId: record._id });
      if (response.message) {
        refreshCinemas();
        toast.success("Cinema deleted successfully");
        setOpen(false);
        setDeleteCinemaName("");
      } else {
        toast.error("Failed to delete cinema");
      }
    } else {
      toast.error("Cinema name is incorrect");
    }
  };

  const handleEditCinema = async (data: ICinema) => {
    try {
      setLoading(true);
      const response = await editCinema({
        cinemaId: record._id,
        name: data.name,
        isOpen: data.isOpen,
      });
      if (response.message) {
        refreshCinemas();
        setLoading(false);
        toast.success("Cinema updated successfully");
        setOpen(false);
        setDeleteCinemaName("");
      } else {
        toast.error("Failed to edit cinema");
      }
    } catch (error) {
      toast.error("Failed to edit cinema");
      setLoading(false);
    }
  };

  useEffect(() => {
    form.reset({
      name: record.name,
      isOpen: record.isOpen,
    });
  }, [record]);
  return (
    <Dialog
      open={initOpen}
      onOpenChange={(open) => {
        if (!open) {
          setOpen(false);
          form.reset();
          setDeleteCinemaName("");
        }
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Cinema</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleEditCinema)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isOpen"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Open Cinema</FormLabel>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(checked)}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <div className="flex justify-end">
              <Button type="submit" disabled={loading}>
                {loading ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </form>
        </Form>
        <div>
          <div className="mb-2">
            <div className="text-red-500 font-bold">Delete Cinema</div>
            <div className="text-sm text-gray-500">
              Type <span className="font-bold">" {record.name} "</span> to
              delete
            </div>
          </div>
          <Input
            placeholder="Enter Cinema Name"
            value={deleteCinemaName}
            onChange={(e) => setDeleteCinemaName(e.target.value)}
          />
          <div className="flex justify-end mt-4">
            <Button
              size="sm"
              variant="destructive"
              onClick={() => handleDeleteCinema()}
            >
              Delete
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditCinema;
