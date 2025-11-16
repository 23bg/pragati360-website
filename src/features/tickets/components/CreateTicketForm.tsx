"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    ticketFormSchema,
    TicketFormData,
} from "@/features/tickets/validations/ticket.validation";

import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export function CreateTicketForm() {
    const form = useForm<TicketFormData>({
        resolver: zodResolver(ticketFormSchema),
        defaultValues: {
            title: "",
            description: "",
            status: "open",
            priority: "medium",
        },
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = form;

    const onSubmit = (data: TicketFormData) => {
        console.log("Ticket submitted:", data);
    };

    return (
        <Card className="w-full bg-neutral-900 border-white/10">
            <CardHeader>
                <CardTitle className="text-white">Create New Ticket</CardTitle>
            </CardHeader>

            <CardContent>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6 text-white"
                >
                    {/* Title */}
                    <div className="space-y-2">
                        <Label>Title</Label>
                        <Input
                            {...register("title")}
                            placeholder="Enter ticket title"
                            className="bg-neutral-800 border-white/10 text-white"
                        />
                        {errors.title && (
                            <p className="text-red-400 text-sm">{errors.title.message}</p>
                        )}
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                        <Label>Description</Label>
                        <Textarea
                            {...register("description")}
                            placeholder="Describe the issue"
                            className="bg-neutral-800 border-white/10 text-white min-h-[120px]"
                        />
                        {errors.description && (
                            <p className="text-red-400 text-sm">
                                {errors.description.message}
                            </p>
                        )}
                    </div>

                    {/* Status */}
                    <div className="space-y-2">
                        <Label>Status</Label>
                        <Select
                            onValueChange={(value) => setValue("status", value)}
                            defaultValue="open"
                        >
                            <SelectTrigger className="bg-neutral-800 border-white/10 text-white">
                                <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent className="bg-neutral-900 text-white">
                                <SelectItem value="open">Open</SelectItem>
                                <SelectItem value="in-progress">In Progress</SelectItem>
                                <SelectItem value="closed">Closed</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.status && (
                            <p className="text-red-400 text-sm">
                                {errors.status.message}
                            </p>
                        )}
                    </div>

                    {/* Priority */}
                    <div className="space-y-2">
                        <Label>Priority</Label>
                        <Select
                            onValueChange={(value) => setValue("priority", value)}
                            defaultValue="medium"
                        >
                            <SelectTrigger className="bg-neutral-800 border-white/10 text-white">
                                <SelectValue placeholder="Select priority" />
                            </SelectTrigger>
                            <SelectContent className="bg-neutral-900 text-white">
                                <SelectItem value="low">Low</SelectItem>
                                <SelectItem value="medium">Medium</SelectItem>
                                <SelectItem value="high">High</SelectItem>
                                <SelectItem value="urgent">Urgent</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.priority && (
                            <p className="text-red-400 text-sm">
                                {errors.priority.message}
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    >
                        Create Ticket
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
