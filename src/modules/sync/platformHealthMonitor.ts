export type PlatformConnectionState = "CONNECTED" | "TOKEN_EXPIRING" | "DISCONNECTED";

export interface PlatformHealthState {
    platform: "google" | "instagram" | "website";
    status: PlatformConnectionState;
    tokenExpiresAt: Date | null;
    lastSyncAt: Date | null;
    failedJobs: number;
}

export function evaluatePlatformHealth(input: {
    platform: "google" | "instagram" | "website";
    tokenExpiresAt: Date | null;
    lastSyncAt: Date | null;
    failedJobs: number;
    now?: Date;
}): PlatformHealthState {
    const now = input.now ?? new Date();
    const tokenExpiresAt = input.tokenExpiresAt;

    if (!tokenExpiresAt) {
        return {
            platform: input.platform,
            status: "DISCONNECTED",
            tokenExpiresAt,
            lastSyncAt: input.lastSyncAt,
            failedJobs: input.failedJobs,
        };
    }

    const hoursToExpiry = (tokenExpiresAt.getTime() - now.getTime()) / (60 * 60 * 1000);
    const status = hoursToExpiry <= 24 ? "TOKEN_EXPIRING" : "CONNECTED";

    return {
        platform: input.platform,
        status,
        tokenExpiresAt,
        lastSyncAt: input.lastSyncAt,
        failedJobs: input.failedJobs,
    };
}
