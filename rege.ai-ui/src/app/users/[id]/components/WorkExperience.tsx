"use client";

import { Button } from "@/components/ui/button";
import {
  DialogTitle,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { Pencil, Trash, WatchIcon, X } from "lucide-react";
import EditDialog from "@/components/shared/EditDialog";
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

const formSchema = z.object({
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

function ExperienceForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      isWorkingHere: false,
      points: [""],
    },
  });

  const watchIsWorkingHere = useWatch({
    control: form.control,
    name: "isWorkingHere",
  });

  function onSubmit(values: FormValues) {
    console.log(values);
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
                <FormLabel>startdate</FormLabel>
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
              <FormItem className="flex items-start space-x-1">
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
                <FormLabel>startdate</FormLabel>
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
                  placeholder="• Built an internal dashboard\n• Improved API performance\n• Mentored 2 junior devs"
                  {...field}
                  onChange={(e) => field.onChange(e.target.value.split("\n"))}
                  value={field.value.join("\n")}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

function ExperienceItem() {
  return (
    <>
      <div className="space-y-1">
        <div className="flex justify-start items-center gap-2 relative">
          <EditDialog
            trigger={
              <Pencil className="size-4 text-yellow-400 cursor-pointer" />
            }
            content={
              <DialogHeader>
                <DialogTitle>Editing exp-1</DialogTitle>
                <DialogDescription />
                <div className="mt-2">
                  <ExperienceForm />
                </div>
              </DialogHeader>
            }
            close={
              <div className="flex justify-start gap-2">
                <Button variant="outline" className="cursor-pointer">
                  Cancel
                </Button>
                <Button variant="destructive" className="cursor-pointer">
                  Yes
                </Button>
              </div>
            }
          />
          <EditDialog
            trigger={<Trash className="size-4 text-red-400 cursor-pointer" />}
            content={
              <DialogHeader>
                <DialogTitle>Are you sure?</DialogTitle>
                <DialogDescription>editting</DialogDescription>
              </DialogHeader>
            }
            close={
              <div className="flex justify-start gap-2">
                <Button variant="outline" className="cursor-pointer">
                  Cancel
                </Button>
                <Button variant="destructive" className="cursor-pointer">
                  Yes
                </Button>
              </div>
            }
          />
        </div>
        <div className="flex justify-between items-start">
          <div className="flex gap-1">
            <span>sde</span>
            <span>&middot;</span>
            <span>citi</span>
          </div>
          <p className="flex italic gap-1 text-sm text-zinc-500 dark:text-zinc-400 relative">
            <span>Jan 2023</span>
            <span>-</span>
            <span>Jan 2023</span>
          </p>
        </div>

        <ul className="my-3 list-disc list-inside space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
          <li>Built AI resume tools with React 19 & Tailwind v4</li>
          <li>Implemented shadcn UI components for rapid prototyping</li>
          <li>Integrated LLM-based JD parsing and resume matching</li>
        </ul>
      </div>

      <hr className="border-zinc-300 dark:border-zinc-800" />
    </>
  );
}

export default function WorkExperience() {
  return (
    <div className="mt-4">
      <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-md shadow-sm p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
            Work Experience
          </h2>
          <Button
            variant="outline"
            size="icon"
            className="cursor-pointer rounded-full"
          >
            <Pencil />
          </Button>
        </div>

        <hr className="border-zinc-400 dark:border-zinc-700" />

        <div className="space-y-6">
          {[1, 2].map((item: any, key: any) => (
            <ExperienceItem key={key} />
          ))}
        </div>

        <button className="w-full mt-4 text-sm text-white bg-purple-600 hover:bg-purple-700 py-2 rounded-md transition">
          + Add New Experience
        </button>
      </div>
    </div>
  );
}
