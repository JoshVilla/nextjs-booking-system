import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { FieldValues } from "react-hook-form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { addCinema } from "@/app/service/api";
import { ICinema } from "@/app/service/types";
import { toast } from "sonner";
const AddCinema = ({
  handleAddData,
}: {
  handleAddData: (data: ICinema) => void;
}) => {
  const form = useForm<FieldValues>({
    defaultValues: {
      name: "",
      isOpen: false,
    },
  });

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (data: FieldValues) => {
    try {
      setLoading(true);
      const response = await addCinema(data);
      if (response.message) {
        setOpen(false);
        // @ts-ignore
        handleAddData(response.data);
        toast.success(response.message);
      }
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <Button onClick={() => setOpen(true)} size={"sm"}>
        Add Cinema
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Cinema</DialogTitle>
            <DialogDescription>
              Fill in the cinema details below.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-4"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter cinema name" />
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
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button type="submit" disabled={loading}>
                  {loading ? "Adding..." : "Add Cinema"}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddCinema;
