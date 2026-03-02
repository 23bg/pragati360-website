import jwt from "jsonwebtoken";
import type { SignOptions } from "jsonwebtoken";
import { getRequiredEnv } from "./env";

const JWT_SECRET = getRequiredEnv("JWT_SECRET");

interface JwtPayload {
    id: string;
    email: string;
    orgId: string;
    role?: "OWNER" | "MANAGER";
    outletScope?: string[];
}

/**
 * Generate a signed JWT token
 */
export function generateToken(payload: JwtPayload, expiresIn: SignOptions["expiresIn"] = "7d") {
    return jwt.sign(payload, JWT_SECRET, { expiresIn });
}

/**
 * Verify and decode a JWT token
 */
export function verifyToken(token: string): JwtPayload | null {
    try {
        return jwt.verify(token, JWT_SECRET) as JwtPayload;
    } catch (err) {
        console.error("JWT verification failed:", err);
        return null;
    }
}

/**
 * Decode a JWT token without verifying signature (useful for non-sensitive inspection)
 */
export function decodeToken(token: string): JwtPayload | null {
    try {
        return jwt.decode(token) as JwtPayload;
    } catch (err) {
        console.error("JWT decode failed:", err);
        return null;
    }
}