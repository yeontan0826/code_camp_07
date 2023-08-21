import { useRouter } from "next/router";

export const useMoveToPage = () => {
    const router = useRouter();

    const onMoveToPage = (path: string) => () => {
        router.push(path);
    };

    const onMoveToBack = () => {
        router.back();
    };

    const onReplaceToPage = (path: string) => () => {
        router.replace(path);
    };

    return { onMoveToPage, onMoveToBack, onReplaceToPage };
};
