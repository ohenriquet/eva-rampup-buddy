import { useEffect, useRef } from 'react';

declare global {
    interface Window {
        hbspt?: {
            forms: {
                create: (options: {
                    portalId: string;
                    formId: string;
                    region: string;
                    target?: string;
                }) => void;
            };
        };
    }
}

interface HubSpotEmailCaptureProps {
    title?: string;
    containerId?: string;
}

export const HubSpotEmailCapture = ({
    title = "Receba a demo por e-mail",
    containerId = "hubspot-hero-form"
}: HubSpotEmailCaptureProps) => {
    const scriptLoaded = useRef(false);

    useEffect(() => {
        // Prevent multiple script loads
        if (scriptLoaded.current) {
            return;
        }

        const loadHubSpotForm = () => {
            // Check if HubSpot script is already loaded
            if (window.hbspt) {
                createForm();
                return;
            }

            // Load HubSpot script
            const script = document.createElement('script');
            script.src = '//js.hsforms.net/forms/embed/v2.js';
            script.charset = 'utf-8';
            script.type = 'text/javascript';
            script.async = true;

            script.onload = () => {
                createForm();
            };

            script.onerror = () => {
                console.error('Failed to load HubSpot form script');
            };

            document.body.appendChild(script);
        };

        const createForm = () => {
            if (window.hbspt && window.hbspt.forms) {
                try {
                    window.hbspt.forms.create({
                        portalId: "48245348",
                        formId: "7b9f92b3-78af-4ef2-a3e7-f1b4e2dc0749",
                        region: "na1",
                        target: `#${containerId}`
                    });
                    scriptLoaded.current = true;
                } catch (error) {
                    console.error('Error creating HubSpot form:', error);
                }
            }
        };

        loadHubSpotForm();

        // Cleanup function
        return () => {
            // HubSpot forms don't need explicit cleanup
            // The form will be removed when the container is unmounted
        };
    }, [containerId]);

    return (
        <div className="w-full max-w-[480px] mx-auto mt-6 lg:mt-8">
            {title && (
                <p className="text-sm font-semibold text-center text-foreground mb-3">
                    {title}
                </p>
            )}
            <div
                id={containerId}
                className="hubspot-form-container"
            />
        </div>
    );
};
