import { TicketStatus, TicketPriority } from '../../../shared/types';

export interface Ticket {
    id: string;
    userId: string;
    businessId?: string;
    title: string;
    description: string;
    status: TicketStatus;
    priority: TicketPriority;
    assignedTo?: string;
    resolvedAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}

export interface CreateTicketPayload {
    userId: string;
    businessId?: string;
    title: string;
    description: string;
    status?: TicketStatus;
    priority?: TicketPriority;
    assignedTo?: string;
}

export interface UpdateTicketPayload {
    title?: string;
    description?: string;
    status?: TicketStatus;
    priority?: TicketPriority;
    assignedTo?: string;
    resolvedAt?: Date;
}