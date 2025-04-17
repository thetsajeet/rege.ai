"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  points: z.array(z.string().min(1)),
  // links: z.array(z.object({ label: z.string(), value: z.string() })).optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function ProjectForm({
  updateProject,
  onDone,
  projectData,
}: {
  updateProject?: any;
  onDone?: any;
  projectData?: ProjectItem;
}) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id:
        projectData?.id ||
        Date.now().toString() + (Math.random() * 1000).toString(),
      title: projectData?.title || "",
      points: projectData?.points || [""],
      // links: projectData?.links || [{}],
    },
  });

  function onSubmit(values: FormValues) {
    console.log(values);
    updateProject(values);
    onDone();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>title</FormLabel>
              <FormControl>
                <Input placeholder="Enter your title" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="points"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Work Highlights</FormLabel>
              <FormControl>
                <Textarea
                  rows={2}
                  className="resize-none"
                  placeholder="Presented unique contributions"
                  {...field}
                  onChange={(e) => field.onChange(e.target.value.split("\n"))}
                  value={field.value.join("\n")}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <div>Feature incoming to add links</div>

        <div className="flex justify-end gap-2">
          <Button
            variant="outline"
            className="cursor-pointer"
            type="button"
            onClick={onDone}
          >
            Cancel
          </Button>
          <Button className="cursor-pointer text-white bg-purple-600 hover:bg-purple-700">
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
}
