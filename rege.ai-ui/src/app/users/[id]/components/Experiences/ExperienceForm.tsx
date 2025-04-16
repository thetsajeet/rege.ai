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
import { DialogClose } from "@/components/ui/dialog";

const formSchema = z.object({
  id: z.string().min(1),
  role: z.string().min(1),
  company: z.string().min(1),
  startDate: z.string(),
  endDate: z.string(),
  points: z.array(z.string().min(1)),
  isWorkingHere: z.boolean(),
});

type FormValues = z.infer<typeof formSchema>;

const months = [
  { value: "01", label: "Jan" },
  { value: "02", label: "Feb" },
  { value: "03", label: "Mar" },
  { value: "04", label: "Apr" },
  { value: "05", label: "May" },
  { value: "06", label: "Jun" },
  { value: "07", label: "Jul" },
  { value: "08", label: "Aug" },
  { value: "09", label: "Sep" },
  { value: "10", label: "Oct" },
  { value: "11", label: "Nov" },
  { value: "12", label: "Dec" },
];

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 20 }, (_, i) => `${currentYear - i}`);

export default function ExperienceForm({
  addExperience,
  onDone,
  experienceData,
}: {
  addExperience?: any;
  onDone?: any;
  experienceData?: ExperienceItem;
}) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id:
        experienceData?.id ||
        Date.now().toString() + (Math.random() * 1000).toString(),
      role: experienceData?.role || "",
      company: experienceData?.company || "",
      startDate: experienceData?.startDate || "",
      endDate: experienceData?.endDate || "",
      isWorkingHere: experienceData?.isWorkingHere || false,
      points: experienceData?.points || [""],
    },
  });

  const watchIsWorkingHere = useWatch({
    control: form.control,
    name: "isWorkingHere",
  });

  function onSubmit(values: FormValues) {
    addExperience(values);
    onDone();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <FormControl>
                <Input placeholder="Software Engineer" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company</FormLabel>
              <FormControl>
                <Input placeholder="ACME Inc." {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="grid">
          <FormField
            control={form.control}
            name="startDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Start Date</FormLabel>
                <FormControl>
                  <div className="flex gap-2">
                    <Select
                    // onValueChange={(month) =>
                    // field.onChange({ ...field.value, month })
                    // }
                    >
                      <SelectTrigger className="w-[100px]">
                        <SelectValue placeholder="Month" />
                      </SelectTrigger>
                      <SelectContent className="h-[200px]">
                        {months.map((m) => (
                          <SelectItem key={m.value} value={m.value}>
                            {m.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Select
                    // onValueChange={(year) =>
                    // field.onChange({ ...field.value, year })
                    // }
                    >
                      <SelectTrigger className="w-[100px]">
                        <SelectValue placeholder="Year" />
                      </SelectTrigger>
                      <SelectContent className="h-[200px]">
                        {years.map((y) => (
                          <SelectItem key={y} value={y}>
                            {y}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div>
          <FormField
            control={form.control}
            name="isWorkingHere"
            render={({ field }) => (
              <FormItem className="flex items-end space-x-1">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Are you currently working in this role?</FormLabel>
                </div>
              </FormItem>
            )}
          />
        </div>

        <div className="grid">
          <FormField
            control={form.control}
            name="endDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>End Date</FormLabel>
                <FormControl>
                  <div className="flex gap-2">
                    <Select
                      disabled={watchIsWorkingHere}
                      // onValueChange={(month) =>
                      // field.onChange({ ...field.value, month })
                      // }
                    >
                      <SelectTrigger className="w-[100px]">
                        <SelectValue placeholder="Month" />
                      </SelectTrigger>
                      <SelectContent className="h-[200px]">
                        {months.map((m) => (
                          <SelectItem key={m.value} value={m.value}>
                            {m.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Select
                      disabled={watchIsWorkingHere}
                      // onValueChange={(year) =>
                      // field.onChange({ ...field.value, year })
                      // }
                    >
                      <SelectTrigger className="w-[100px]">
                        <SelectValue placeholder="Year" />
                      </SelectTrigger>
                      <SelectContent className="h-[200px]">
                        {years.map((y) => (
                          <SelectItem key={y} value={y}>
                            {y}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

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

        <div className="flex justify-end gap-2">
          <Button variant="outline" className="cursor-pointer">
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
