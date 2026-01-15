import React from 'react';
import {
    MessageSquare,
    MessageCircle,
    Mail,
    Calendar,
    Webhook,
    Hash,
    Users2
} from 'lucide-react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const integrations = [
    { name: 'Slack', icon: Hash },
    { name: 'Microsoft Teams', icon: Users2 },
    { name: 'Google Chat', icon: MessageSquare },
    { name: 'WhatsApp', icon: MessageCircle },
    { name: 'E-mail', icon: Mail },
    { name: 'Calendário', icon: Calendar },
    { name: 'Webhooks', icon: Webhook },
];

export const IntegrationIcons = ({ className = "" }: { className?: string }) => {
    return (
        <TooltipProvider>
            <div className={`flex flex-wrap items-center gap-4 ${className}`}>
                {integrations.map((item) => (
                    <Tooltip key={item.name}>
                        <TooltipTrigger asChild>
                            <div className="group flex items-center gap-2 cursor-help transition-all duration-200">
                                <item.icon className="w-4 h-4 lg:w-5 lg:h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                <span className="text-[10px] lg:text-xs font-bold text-muted-foreground uppercase tracking-widest group-hover:text-primary group-hover:underline decoration-primary/30 transition-all">
                                    {item.name}
                                </span>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent side="bottom" className="bg-foreground text-background text-[10px] font-bold uppercase tracking-wider">
                            {item.name}
                        </TooltipContent>
                    </Tooltip>
                ))}
            </div>
        </TooltipProvider>
    );
};
