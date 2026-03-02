import { BusinessStatus, OutletStatus, GbpSyncStatus, GbpConnection, ManagerPermissions, BusinessRole } from '../../../shared/types';
import { Outlet } from '../../outlets/types/outlet.type';

export interface Business {
    id: string;
    slug: string;
    name: string;
    description?: string;
    category?: string;
    logoUrl?: string;
    coverImageUrl?: string;
    website?: string;
    contactName?: string;
    email?: string;
    phoneNumber1?: string;
    phoneNumber2?: string;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    pincode?: string;
    geoLat?: number;
    geoLng?: number;
    isPublic: boolean;
    status: BusinessStatus;
    createdAt: Date;
    updatedAt: Date;
    outlets?: Outlet[];
}

export interface BusinessWithRole {
    id: string;
    slug: string;
    name: string;
    description?: string;
    category?: string;
    logoUrl?: string;
    coverImageUrl?: string;
    website?: string;
    contactName?: string;
    email?: string;
    phoneNumber1?: string;
    phoneNumber2?: string;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    pincode?: string;
    geoLat?: number;
    geoLng?: number;
    isPublic: boolean;
    status: BusinessStatus;
    createdAt: Date;
    updatedAt: Date;
    userRole: BusinessRole;
    memberSince: string;
    outlets: Array<{
        id: string;
        name: string;
        status: OutletStatus;
    }>;
}

export interface CreateBusinessPayload {
    name: string;
    description?: string;
    category?: string;
    email?: string;
    phoneNumber1?: string;
    phoneNumber2?: string;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    pincode?: string;
    website?: string;
}

export interface UpdateBusinessPayload {
    name?: string;
    description?: string;
    category?: string;
    email?: string;
    phoneNumber1?: string;
    phoneNumber2?: string;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    pincode?: string;
    website?: string;
    logoUrl?: string;
    coverImageUrl?: string;
    geoLat?: number;
    geoLng?: number;
    isPublic?: boolean;
}