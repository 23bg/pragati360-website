import { UserStatus, BusinessRole, BusinessRoleAssignment } from '../../../shared/types';

export interface UserRole {
    businessId: string;
    role: BusinessRole;
    outletId?: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    phoneNumber?: string;
    avatarUrl?: string;
    status: UserStatus;
    googleAccountId?: string;
    isVerified: boolean;

    // OTP for phone verification
    otp?: string;
    otpExpires?: Date;

    // Google OAuth data
    googleEmail?: string;
    googleName?: string;
    googleAvatar?: string;
    googleAccessToken?: string;
    googleRefreshToken?: string;
    googleTokenExpiry?: Date;

    // User preferences
    isNotificationEnable: boolean;
    isWhatsappAlertsEnable: boolean;
    isEmailAlertsEnable: boolean;
    preferredTheme?: string;

    // Embedded business roles
    businessRoles: BusinessRoleAssignment[];

    // Timestamps
    createdAt: Date;
    lastLoginAt?: Date;
    updatedAt: Date;
}
