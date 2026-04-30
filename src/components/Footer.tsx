// src/components/Footer.tsx

"use client";

import Link from "next/link"

// UI components from shadcn/ui
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { toast } from "sonner"


// Icons
import { 
  MapPin,
  Clock,
  Phone,
  PhoneCall,
  Mail,
  MailOpen,
  Copy
} from 'lucide-react';

export default function NavBarDesktop({className}: {className?: string}) {
  return (
    <footer className={cn(className, "flex flex-col justify-center pb-4")}>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 justify-center justify-self-center-safe justify-items-center gap-y-10 gap-x-10 mx:gap-y-0 md:gap-x-2 lg:gap-24 xl:gap-32 my-8 mx-4 md:mx-10">


          <section className="footer-section col-span-2 md:col-span-1">
            <div className="row">
              <MapPin size={20} />
              <p>Vaughan, ON, L6A2A1, Canada</p>
            </div>
            <div className="row">
              <Clock size={20} />
              <p>Mon - Fri &nbsp; | &nbsp; 9 a.m - 5 p.m</p>
            </div>
            <div className="row">
              <Tooltip>
                <TooltipTrigger className="row group" onClick={() => window.open("tel:647-385-9692")}>
                  <Phone size={20} className="block group-hover:hidden" />
                  <PhoneCall size={20} className="hidden group-hover:block" />
                  <p className="group-hover:underline">(647) 385-9692</p>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Click to open phone dialer</p>
                </TooltipContent>
              </Tooltip>
              <Copy 
                size={15} className="cursor-pointer text-muted ml-1" 
                onClick={() => {
                  navigator.clipboard.writeText("416-523-5696");
                  toast("Phone number copied to clipboard")
                }} 
              />
            </div>
            <div className="row">
              <Tooltip>
                <TooltipTrigger className="row group" onClick={() => window.open("mailto:contact@randdsecurity.ca")}>
                  <Mail size={20} className="block group-hover:hidden" />
                  <MailOpen size={20} className="hidden group-hover:block" />
                  <p className="group-hover:underline">contact@randdsecurity.ca</p>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Click to open email</p>
                </TooltipContent>
              </Tooltip>
              <Copy 
                size={15} className="cursor-pointer text-muted ml-1" 
                onClick={() => {
                  navigator.clipboard.writeText("contact@randdsecurity.ca");
                  toast("Email copied to clipboard")
                }} 
              />
            </div>
          </section>
        </div>
      </div>
      <div className="flex justify-center">
        <p className="text-xs text-muted italic">Site logo by Ryan Duong - rduong.designs@gmail.com</p>
      </div>
    </footer>
  )
}