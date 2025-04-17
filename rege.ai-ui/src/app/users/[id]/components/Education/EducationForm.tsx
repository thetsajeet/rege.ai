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

const formSchema = z
  .object({
    id: z.string().min(1),
    degree: z.string().min(1),
    university: z.string().min(1),
    startMonth: z.string(),
    endMonth: z.string().optional(),
    startYear: z.string(),
    endYear: z.string().optional(),
    points: z.array(z.string().min(1)),
    isPursuing: z.boolean(),
  })
  .refine((data) => data.isPursuing || !!data.endMonth, {
    message: "End month is required",
    path: ["endMonth"],
  })
  .refine((data) => data.isPursuing || !!data.endYear, {
    message: "End year is required",
    path: ["endYear"],
  });

type FormValues = z.infer<typeof formSchema>;

const months = [
  { value: 0, label: "Jan" },
  { value: 1, label: "Feb" },
  { value: 2, label: "Mar" },
  { value: 3, label: "Apr" },
  { value: 4, label: "May" },
  { value: 5, label: "Jun" },
  { value: 6, label: "Jul" },
  { value: 7, label: "Aug" },
  { value: 8, label: "Sep" },
  { value: 9, label: "Oct" },
  { value: 10, label: "Nov" },
  { value: 11, label: "Dec" },
];

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 20 }, (_, i) => `${currentYear - i}`);

export default function EducationForm({
  updateEducation,
  onDone,
  educationData,
}: {
  updateEducation?: any;
  onDone?: any;
  educationData?: EducationItem;
}) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id:
        educationData?.id ||
        Date.now().toString() + (Math.random() * 1000).toString(),
      degree: educationData?.degree || "",
      university: educationData?.university || "",
      startMonth: educationData?.startMonth,
      startYear: educationData?.startYear,
      endMonth: educationData?.endMonth,
      endYear: educationData?.endYear,
      isPursuing: educationData?.isPursuing || false,
      points: educationData?.points || [""],
    },
  });

  const watchIsWorkingHere = useWatch({
    control: form.control,
    name: "isPursuing",
  });

  function onSubmit(values: FormValues) {
    console.log(values);
    updateEducation(values);
    onDone();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="degree"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Degree</FormLabel>
              <FormControl>
                <Input placeholder="Enter your degree" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="university"
          render={({ field }) => (
            <FormItem>
              <FormLabel>University</FormLabel>
              <FormControl>
                <Input placeholder="Enter your university" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <div>Start Date</div>
        <div className="flex justify-start gap-2">
          <FormField
            control={form.control}
            name="startMonth"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex gap-2">
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-[100px]">
                        <SelectValue placeholder="Month" />
                      </SelectTrigger>
                      <SelectContent className="h-[200px]">
                        {months.map((m) => (
                          <SelectItem key={m.value} value={m.value.toString()}>
                            {m.label}
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
          <FormField
            control={form.control}
            name="startYear"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex gap-2">
                    <Select value={field.value} onValueChange={field.onChange}>
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
            name="isPursuing"
            render={({ field }) => (
              <FormItem className="flex items-end space-x-1">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Are you currently pursuing this course?</FormLabel>
                </div>
              </FormItem>
            )}
          />
        </div>

        <div>End Date</div>
        <div className="flex justify-start gap-2">
          <FormField
            control={form.control}
            name="endMonth"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex gap-2">
                    <Select
                      disabled={watchIsWorkingHere}
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <SelectTrigger className="w-[100px]">
                        <SelectValue placeholder="Month" />
                      </SelectTrigger>
                      <SelectContent className="h-[200px]">
                        {months.map((m) => (
                          <SelectItem key={m.value} value={m.value.toString()}>
                            {m.label}
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
          <FormField
            control={form.control}
            name="endYear"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex gap-2">
                    <Select
                      disabled={watchIsWorkingHere}
                      onValueChange={field.onChange}
                      value={field.value}
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
          <Button
            variant="outline"
            className="cursor-pointer"
            onClick={onDone}
            type="button"
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
