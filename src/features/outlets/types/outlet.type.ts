import { Business } from '../../business/types/business.type';
import { OutletStatus, GbpSyncStatus, GbpConnection, ManagerPermissions, PostStatus, PostSource, ReviewState } from '../../../shared/types';
import { Post } from '../../posts/types/post.type';
import { Review } from '../../reviews/types/review.type';

export interface Outlet {
    id: string;
    businessId: string;
    business: Business;
    name: string;
    address?: string;
    phone?: string;
    geoLat?: number;
    geoLng?: number;
    status: OutletStatus;
    gbp?: GbpConnection;
    managers?: ManagerPermissions[];
    createdAt: Date;
    updatedAt: Date;
    posts?: Post[];
    reviews?: Review[];
}

export interface CreateOutletPayload {
    businessId: string;
    name: string;
    address?: string;
    phone?: string;
    geoLat?: number;
    geoLng?: number;
    status?: OutletStatus;
    gbp?: GbpConnection;
    managers?: ManagerPermissions[];
}