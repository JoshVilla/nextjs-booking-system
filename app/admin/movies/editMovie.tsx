"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { IMovies } from "@/app/service/types";
import { Edit } from "lucide-react";
import { editMovie } from "@/app/service/api";
import { toast } from "sonner";
const EditMovie = ({
  record,
  refreshMovies,
}: {
  record: IMovies;
  refreshMovies: () => void;
}) => {
  const form = useForm({
    defaultValues: {
      title: record.title,
      description: record.description,
      casts: record.casts.join(","),
      director: record.director,
      producer: record.producer,
      distributor: record.distributor,
      genres: record.genres.join(","),
      time: record.time,
      poster: "",
      cover: "",
    },
  });

  const [open, setOpen] = useState(false);
  const [posterPreview, setPosterPreview] = useState<string | null>(null);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const stringToArray = (value: string) => {
    return value.split(",").map((item) => item.trim());
  };

  const handleSubmit = async (data: any) => {
    try {
      const formData = new FormData();
      formData.append("movieId", record._id);
      setLoading(true);
      Object.keys(data).forEach((key) => {
        if (key === "casts" || key === "genres") {
          formData.append(key, JSON.stringify(stringToArray(data[key]))); // Convert to string
        } else if (data[key] instanceof File) {
          formData.append(key, data[key]); // Append files directly
        } else {
          formData.append(key, data[key]);
        }
      });

      const response = await editMovie(formData);
      if (response.message) {
        toast.success(response.message);
        setOpen(false);
        refreshMovies();
        setPosterPreview(null);
        setCoverPreview(null);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button variant="ghost" size="sm" onClick={() => setOpen(true)}>
        <Edit size={16} />
      </Button>
      <Dialog
        open={open}
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            form.reset(); // Reset the form when the dialog closes
            setPosterPreview(null);
            setCoverPreview(null);
          }
          setOpen(isOpen);
        }}
      >
        <DialogContent className="overflow-y-auto max-h-[80vh]">
          <DialogHeader>
            <DialogTitle>New Movie</DialogTitle>
            <DialogDescription>
              Fill in the movie details below.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form
              className="space-y-4"
              onSubmit={form.handleSubmit(handleSubmit)}
            >
              <FormField
                control={form.control}
                name="title"
                rules={{
                  validate: (value) => {
                    const trimmedValue = value.trim();
                    const isValidFormat = /^[A-Za-z0-9\s.,!'"?-]+$/.test(
                      trimmedValue
                    );
                    return isValidFormat || "Enter a valid movie title";
                  },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter movie title" />
                    </FormControl>
                    {form.formState.errors.title && (
                      <p className="text-red-500 text-sm">
                        {form.formState.errors.title.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                rules={{
                  validate: (value) => {
                    const trimmedValue = value.trim();
                    const isValidFormat = /^[A-Za-z0-9\s.,!'"?-]+$/.test(
                      trimmedValue
                    );
                    return isValidFormat || "Enter a valid movie description";
                  },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Enter movie description"
                      />
                    </FormControl>
                    {form.formState.errors.description && (
                      <p className="text-red-500 text-sm">
                        {form.formState.errors.description.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />
              <div className="flex gap-4 flex-col md:flex-row">
                <FormField
                  control={form.control}
                  name="director"
                  rules={{
                    validate: (value) => {
                      const trimmedValue = value.trim();
                      const isValidFormat = /^[A-Za-z0-9\s.,!'"?-]+$/.test(
                        trimmedValue
                      );
                      return isValidFormat || "Enter a director name";
                    },
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Director</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Enter director" />
                      </FormControl>
                      {form.formState.errors.director && (
                        <p className="text-red-500 text-sm">
                          {form.formState.errors.director.message}
                        </p>
                      )}
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="producer"
                  rules={{
                    validate: (value) => {
                      const trimmedValue = value.trim();
                      const isValidFormat = /^[\p{L}\p{N}\p{P}\p{Z}]+$/u.test(
                        trimmedValue
                      );
                      return isValidFormat || "Enter a producer name";
                    },
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Producer</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Enter producer" />
                      </FormControl>
                      {form.formState.errors.producer && (
                        <p className="text-red-500 text-sm">
                          {form.formState.errors.producer.message}
                        </p>
                      )}
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="distributor"
                rules={{
                  validate: (value) => {
                    const trimmedValue = value.trim();
                    const isValidFormat = /^[A-Za-z\s]+$/.test(trimmedValue);
                    return isValidFormat || "Enter a  distributor name";
                  },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Distributed by</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter distributor" />
                    </FormControl>
                    {form.formState.errors.distributor && (
                      <p className="text-red-500 text-sm">
                        {form.formState.errors.distributor.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="casts"
                rules={{
                  validate: (value) => {
                    const trimmedValue = value.trim();
                    const isValidFormat =
                      /^[A-Za-z\s]+(,\s*[A-Za-z\s]+)+$/.test(trimmedValue);
                    return (
                      isValidFormat ||
                      "Enter at least two names, separated by a comma (e.g., John Doe, Jane Doe)"
                    );
                  },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Casts</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Enter movie casts (e.g., John Doe, Jane Doe)"
                      />
                    </FormControl>
                    {form.formState.errors.casts && (
                      <p className="text-red-500 text-sm">
                        {form.formState.errors.casts.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="genres"
                rules={{
                  validate: (value) => {
                    const trimmedValue = value.trim();
                    const isValidFormat =
                      /^[A-Za-z\s]+(,\s*[A-Za-z\s]+)+$/.test(trimmedValue);
                    return (
                      isValidFormat ||
                      "Enter at least two genres, separated by a comma (e.g., Action, Comedy, Drama)"
                    );
                  },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Genres</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Enter movie genres (e.g., Action, Comedy, Drama)"
                      />
                    </FormControl>
                    {form.formState.errors.genres && (
                      <p className="text-red-500 text-sm">
                        {form.formState.errors.genres.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="time"
                rules={{
                  validate: (value) => {
                    // const trimmedValue = value.trim();?
                    const isValidFormat = /^\d+$/.test(value);
                    return isValidFormat || "Enter a valid movie duration";
                  },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter movie duration (in minutes)</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter movie duration"
                        onChange={(e) => {
                          field.onChange(e.target.value.replace(/\D/g, ""));
                        }}
                        value={
                          field.value
                            ? String(field.value).replace(/\D/g, "")
                            : ""
                        }
                      />
                    </FormControl>
                    {form.formState.errors.time && (
                      <p className="text-red-500 text-sm">
                        {form.formState.errors.time.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="poster"
                // rules={{
                //   validate: (value) => {
                //     return (
                //       // @ts-ignore
                //       value instanceof File || "Upload a valid movie poster"
                //     );
                //   },
                // }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Poster Image</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            // @ts-ignore
                            form.setValue("poster", file); // Set file value
                            form.trigger("poster"); // Manually trigger validation
                            setPosterPreview(URL.createObjectURL(file)); // Preview the image
                          } else {
                            // @ts-ignore
                            form.setValue("poster", null);
                            form.trigger("poster"); // Re-validate
                            setPosterPreview(null);
                          }
                        }}
                      />
                    </FormControl>
                    {posterPreview && (
                      <img
                        src={posterPreview}
                        alt="Poster Preview"
                        className="mt-2 w-32 h-48 object-cover"
                      />
                    )}
                    {form.formState.errors.poster && (
                      <p className="text-red-500 text-sm">
                        {form.formState.errors.poster.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cover"
                // rules={{
                //   validate: (value) => {
                //     return (
                //       // @ts-ignore
                //       value instanceof File || "Upload a valid movie cover"
                //     );
                //   },
                // }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cover Image</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            // @ts-ignore
                            form.setValue("cover", file); // Set file in form state
                            form.trigger("cover"); // Validate immediately
                            setCoverPreview(URL.createObjectURL(file)); // Show preview
                          } else {
                            // @ts-ignore
                            form.setValue("cover", null);
                            form.trigger("cover"); // Re-validate
                            setCoverPreview(null);
                          }
                        }}
                      />
                    </FormControl>
                    {coverPreview && (
                      <img
                        src={coverPreview}
                        alt="Cover Preview"
                        className="mt-2 w-full h-42 object-cover"
                      />
                    )}
                    {form.formState.errors.cover && (
                      <p className="text-red-500 text-sm">
                        {form.formState.errors.cover.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />

              <DialogFooter>
                <Button type="submit" disabled={loading}>
                  {loading ? "Updating..." : "Update Movie"}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditMovie;
