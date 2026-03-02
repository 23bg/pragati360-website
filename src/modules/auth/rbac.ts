export interface JwtClaims {
    id: string;
    email: string;
    orgId: string;
    role?: "OWNER" | "MANAGER";
    outletScope?: string[];
}

export function requireOrgId(claims: Partial<JwtClaims>): string {
    if (!claims.orgId || claims.orgId.trim() === "") {
        throw new Error("Missing orgId in JWT claims");
    }

    return claims.orgId;
}

export function assertOrgScope(claims: Partial<JwtClaims>, orgId: string): void {
    const tokenOrgId = requireOrgId(claims);

    if (tokenOrgId !== orgId) {
        throw new Error("Forbidden: org scope mismatch");
    }
}

export function assertOutletScope(claims: Partial<JwtClaims>, outletId: string): void {
    const scope = claims.outletScope ?? [];
    if (!scope.includes(outletId) && claims.role !== "OWNER") {
        throw new Error("Forbidden: outlet scope mismatch");
    }
}
