import { cookies } from "next/headers";
import { verifyToken } from "@/shared/utils/jwt";
import { assertOrgScope, type JwtClaims } from "./rbac";

export async function getAuthenticatedClaims(): Promise<JwtClaims | null> {
    const cookieStore = await cookies();
    const token = cookieStore.get("access_token")?.value;
    if (!token) return null;

    const claims = verifyToken(token);
    if (!claims) return null;

    return claims as JwtClaims;
}

export function enforceOrgScope(claims: JwtClaims | null, orgId: string): void {
    if (!claims) {
        throw new Error("Unauthorized");
    }

    assertOrgScope(claims, orgId);
}
