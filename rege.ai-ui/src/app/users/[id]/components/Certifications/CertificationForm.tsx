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
  label: z.string().min(1),
  issuedBy: z.string().min(1).optional(),
  issuedMonth: z.string().optional(),
  issuedYear: z.string().optional(),
  imageUrl: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const months = [
  { value: "0", label: "Jan" },
  { value: "1", label: "Feb" },
  { value: "2", label: "Mar" },
  { value: "3", label: "Apr" },
  { value: "4", label: "May" },
  { value: "5", label: "Jun" },
  { value: "6", label: "Jul" },
  { value: "7", label: "Aug" },
  { value: "8", label: "Sep" },
  { value: "9", label: "Oct" },
  { value: "10", label: "Nov" },
  { value: "11", label: "Dec" },
];

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 20 }, (_, i) => `${currentYear - i}`);

export default function CertfificationForm({
  updateCertfification,
  onDone,
  certificationData,
}: {
  updateCertfification?: any;
  onDone?: any;
  certificationData?: Certification;
}) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id:
        certificationData?.id ||
        Date.now().toString() + (Math.random() * 1000).toString(),
      label: certificationData?.label || "",
      issuedBy: certificationData?.issuedBy || "",
      issuedMonth: certificationData?.issuedMonth,
      issuedYear: certificationData?.issuedYear,
      imageUrl: certificationData?.imageUrl || "",
    },
  });

  function onSubmit(values: FormValues) {
    console.log(values);
    updateCertfification(values);
    onDone();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="label"
          render={({ field }) => (
            <FormItem>
              <FormLabel>label</FormLabel>
              <FormControl>
                <Input placeholder="Enter your certification name" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="issuedBy"
          render={({ field }) => (
            <FormItem>
              <FormLabel>issuedBy</FormLabel>
              <FormControl>
                <Input placeholder="Enter issued by authority" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <div>Issued Date</div>
        <div className="flex justify-issued gap-2">
          <FormField
            control={form.control}
            name="issuedMonth"
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
            name="issuedYear"
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

        <div>image url input</div>

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
