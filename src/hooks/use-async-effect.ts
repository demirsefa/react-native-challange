import { useEffect } from "react";

//cp from old projects
export default function useAsyncEffect<T>(cb: () => Promise<T>, dependencies?: any) {
    useEffect(() => {
        let isMounted = false;
        cb().then((data) => {
            if (isMounted) {
                return Promise.resolve(data);
            }
        });
        return () => {
            isMounted = false;
        };
    }, [...dependencies]);
}