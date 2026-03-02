export interface SyncSnapshot {
    source: "INTERNAL" | "EXTERNAL";
    updatedAt: Date;
    payload: Record<string, unknown>;
}

export interface SyncConflictResult {
    winner: "INTERNAL" | "EXTERNAL";
    driftDetected: boolean;
    mergedPayload: Record<string, unknown>;
}

function shallowEqual(a: Record<string, unknown>, b: Record<string, unknown>): boolean {
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every((key) => a[key] === b[key]);
}

export function resolveSyncConflict(internal: SyncSnapshot, external: SyncSnapshot): SyncConflictResult {
    const driftDetected = !shallowEqual(internal.payload, external.payload);

    if (internal.updatedAt.getTime() >= external.updatedAt.getTime()) {
        return {
            winner: "INTERNAL",
            driftDetected,
            mergedPayload: { ...external.payload, ...internal.payload },
        };
    }

    return {
        winner: "EXTERNAL",
        driftDetected,
        mergedPayload: { ...internal.payload, ...external.payload },
    };
}
