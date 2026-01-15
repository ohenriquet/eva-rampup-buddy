import React from 'react';

interface EvidenceInlineProps {
    sourceName: string;
    href: string;
}

export const EvidenceInline: React.FC<EvidenceInlineProps> = ({ sourceName, href }) => {
    return (
        <span className="inline-flex items-baseline ml-1">
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground/60 hover:text-foreground hover:underline cursor-pointer transition-colors duration-200 font-normal"
            >
                {sourceName}
            </a>
        </span>
    );
};
