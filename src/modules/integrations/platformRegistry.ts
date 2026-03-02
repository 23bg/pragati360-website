export type IntegrationPlatform = "google" | "instagram" | "website";

export interface PlatformIntegration {
    platform: IntegrationPlatform;
    connected: boolean;
    accountId: string | null;
    tokenExpiresAt: Date | null;
    scopes: string[];
}

export function canSyncPlatform(integration: PlatformIntegration): boolean {
    if (!integration.connected) return false;
    if (!integration.tokenExpiresAt) return false;
    return integration.tokenExpiresAt.getTime() > Date.now();
}
