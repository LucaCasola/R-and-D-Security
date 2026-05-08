// src/components/Footer.tsx

"use client";

import { phoneNumber, contactEmail } from "@/config/appConfig";

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
                <TooltipTrigger className="row group" onClick={() => window.open(`tel:${phoneNumber}`)}>
                  <Phone size={20} className="block group-hover:hidden" />
                  <PhoneCall size={20} className="hidden group-hover:block" />
                  <p className="group-hover:underline">{phoneNumber}</p>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Click to open phone dialer</p>
                </TooltipContent>
              </Tooltip>
              <Copy 
                size={15} className="cursor-pointer text-muted ml-1" 
                onClick={() => {
                  navigator.clipboard.writeText(phoneNumber);
                  toast("Phone number copied to clipboard")
                }} 
              />
            </div>
            <div className="row">
              <Tooltip>
                <TooltipTrigger className="row group" onClick={() => window.open(`mailto:${contactEmail}`)}>
                  <Mail size={20} className="block group-hover:hidden" />
                  <MailOpen size={20} className="hidden group-hover:block" />
                  <p className="group-hover:underline">{contactEmail}</p>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Click to open email</p>
                </TooltipContent>
              </Tooltip>
              <Copy 
                size={15} className="cursor-pointer text-muted ml-1" 
                onClick={() => {
                  navigator.clipboard.writeText(contactEmail);
                  toast("Email copied to clipboard")
                }} 
              />
            </div>
          </section>
        </div>
      </div>
    </footer>
  )
}