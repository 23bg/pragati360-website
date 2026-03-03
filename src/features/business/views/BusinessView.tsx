"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Loader2, Plus, Eye, Edit, Upload, Building2, MapPin, Phone, Mail, Globe } from 'lucide-react';
import { businessApi } from '../services/businessApi';
import { BusinessWithRole } from '../types/business.type';
import { appToast } from '@/components/common/AppToaster';

export function BusinessView() {
    const { data: businesses, isLoading, error } = businessApi.useGetBusinessesQuery();
    const [publishBusiness] = businessApi.usePublishBusinessMutation();

    const handlePublish = async (businessId: string) => {
        try {
            await publishBusiness(businessId).unwrap();
            appToast.success("Business published successfully!");
        } catch (error: any) {
            const errorMessage = error?.data?.message || error?.message || 'Failed to publish business';
            appToast.error(errorMessage);
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'ACTIVE': return 'bg-green-100 text-green-800';
            case 'DRAFT': return 'bg-yellow-100 text-yellow-800';
            case 'INACTIVE': return 'bg-zinc-100 text-zinc-800';
            case 'ARCHIVED': return 'bg-red-100 text-red-800';
            default: return 'bg-zinc-100 text-zinc-800';
        }
    };

    const getRoleColor = (role: string) => {
        switch (role) {
            case 'OWNER': return 'bg-blue-100 text-blue-800';
            case 'MANAGER': return 'bg-purple-100 text-purple-800';
            default: return 'bg-zinc-100 text-zinc-800';
        }
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin" />
                <span className="ml-2">Loading businesses...</span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-12">
                <h3 className="text-lg font-medium text-red-600">
                    Failed to load businesses
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                    Please try again later.
                </p>
            </div>
        );
    }

    if (!businesses || businesses.length === 0) {
        return (
            <div className="text-center py-12">
                <Building2 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-muted-foreground">
                    No businesses yet
                </h3>
                <p className="text-sm text-muted-foreground mt-2 mb-4">
                    Create your first business to get started.
                </p>
                <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Create Business
                </Button>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold">My Businesses</h2>
                    <p className="text-muted-foreground">
                        Manage your business profiles and settings
                    </p>
                </div>
                <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Create Business
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {businesses.map((business) => (
                    <Card key={business.id} className="relative">
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <CardTitle className="text-lg">{business.name}</CardTitle>
                                    <CardDescription className="mt-1">
                                        {business.description || 'No description'}
                                    </CardDescription>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Badge className={getStatusColor(business.status)}>
                                        {business.status}
                                    </Badge>
                                    <Badge className={getRoleColor(business.userRole)}>
                                        {business.userRole}
                                    </Badge>
                                </div>
                            </div>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            {/* Contact Info */}
                            <div className="space-y-2 text-sm">
                                {business.email && (
                                    <div className="flex items-center gap-2">
                                        <Mail className="h-4 w-4 text-muted-foreground" />
                                        <span className="truncate">{business.email}</span>
                                    </div>
                                )}
                                {business.phoneNumber1 && (
                                    <div className="flex items-center gap-2">
                                        <Phone className="h-4 w-4 text-muted-foreground" />
                                        <span>{business.phoneNumber1}</span>
                                    </div>
                                )}
                                {(business.city || business.state) && (
                                    <div className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-muted-foreground" />
                                        <span>{[business.city, business.state].filter(Boolean).join(', ')}</span>
                                    </div>
                                )}
                                {business.website && (
                                    <div className="flex items-center gap-2">
                                        <Globe className="h-4 w-4 text-muted-foreground" />
                                        <a
                                            href={business.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline truncate"
                                        >
                                            {business.website}
                                        </a>
                                    </div>
                                )}
                            </div>

                            {/* Outlets Summary */}
                            <div className="pt-2 border-t">
                                <p className="text-sm text-muted-foreground">
                                    {business.outlets.length} outlet{business.outlets.length !== 1 ? 's' : ''}
                                </p>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-2 pt-2">
                                <Button variant="outline" size="sm" className="flex-1">
                                    <Eye className="h-4 w-4 mr-1" />
                                    View
                                </Button>
                                {business.userRole === 'OWNER' && (
                                    <>
                                        <Button variant="outline" size="sm">
                                            <Edit className="h-4 w-4 mr-1" />
                                            Edit
                                        </Button>
                                        {business.status === 'DRAFT' && (
                                            <Button
                                                size="sm"
                                                onClick={() => handlePublish(business.id)}
                                            >
                                                <Upload className="h-4 w-4 mr-1" />
                                                Publish
                                            </Button>
                                        )}
                                    </>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}