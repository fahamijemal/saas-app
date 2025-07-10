"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { subjects } from "@/constants";

// Schema definition using Zod
const formSchema = z.object({
    name: z.string().min(1, { message: "Companion name is required" }),
    subject: z.string().min(1, { message: "Subject is required" }),
    topic: z.string().min(1, { message: "Topic is required" }),
    voice: z.string().min(1, { message: "Voice is required" }),
    style: z.string().min(1, { message: "Style is required" }),
    duration: z.coerce.number().min(1, { message: "Duration is required" }),
});

const CompanionForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            subject: "",
            topic: "",
            voice: "",
            style: "",
            duration: 15,
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log("Form Values:", values);
    };

    return (
        <>
            <h2 className="text-2xl font-bold mt-6 mb-2">Companion Builder</h2>
            <p className="text-muted-foreground mb-6">
                Customize your learning companion by filling out the form below.
            </p>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                    {/* Companion Name */}
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Companion Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter companion name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Subject */}
                    <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Subject</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                        defaultValue={field.value}
                                    >
                                        <SelectTrigger className="capitalize">
                                            <SelectValue placeholder="Select the subject" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {subjects.map((subject) => (
                                                <SelectItem
                                                    value={subject}
                                                    key={subject}
                                                    className="capitalize"
                                                >
                                                    {subject}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Topic */}
                    <FormField
                        control={form.control}
                        name="topic"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Topic</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="e.g., Derivatives and Integrals"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Voice */}
                    <FormField
                        control={form.control}
                        name="voice"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Voice</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                        defaultValue={field.value}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select the voice" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="male">Male</SelectItem>
                                            <SelectItem value="female">Female</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Style */}
                    <FormField
                        control={form.control}
                        name="style"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Style</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                        defaultValue={field.value}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select the style" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="casual">Casual</SelectItem>
                                            <SelectItem value="formal">Formal</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Duration */}
                    <FormField
                        control={form.control}
                        name="duration"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Session Duration (minutes)</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        min={1}
                                        placeholder="e.g., 30"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="w-full">
                        Build Your Companion
                    </Button>
                </form>
            </Form>
        </>
    );
};

export default CompanionForm;
