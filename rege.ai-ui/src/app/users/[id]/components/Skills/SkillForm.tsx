"use client";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
    id: z.string().min(1),
    label: z.string().min(1),
});
type FormValues = z.infer<typeof formSchema>;

export default function SkillForm({
    updateSkill,
    onDone,
    skillData,
}: {
    updateSkill?: any;
    onDone?: any;
    skillData?: Skill;
}) {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            id:
                skillData?.id ||
                Date.now().toString() + (Math.random() * 1000).toString(),
            label: skillData?.label || "",
        },
    });

    function onSubmit(values: FormValues) {
        updateSkill(values);
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
                            <FormLabel>Skill</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter a skill" {...field} />
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
