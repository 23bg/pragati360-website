// 'use client'

import data from "./data.json"

import { ChartAreaInteractive } from '@/components/dashboard/chart-area-interactive'
import { DataTable } from '@/components/dashboard/data-table'
import { SectionCards } from '@/components/dashboard/section-cards'
import { Metadata } from "next"
import React from 'react'
// import { metadata } from "../layout"


export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Join StackOS early access - an AI-powered growth intelligence suite for modern businesses.",
}


export default function page() {
  return (
    <div className="pb-20">
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <SectionCards />
            <div className="px-4 lg:px-6">
              <ChartAreaInteractive />
            </div>
            <DataTable data={data} />
          </div>
        </div>
      </div>
    </div>
  )
}
