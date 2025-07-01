// types/globals.d.ts
export { };

declare global {
    interface Window {
        Tawk_API?: {
            setAttributes?: (
                attributes: { [key: string]: any },
                callback?: (error?: any) => void
            ) => void;
        };
        Tawk_LoadStart?: Date;
    }
}