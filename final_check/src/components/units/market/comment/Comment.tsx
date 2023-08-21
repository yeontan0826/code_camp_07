import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import CommentList from "./list/CommentList.container";
import { FETCH_USED_ITEM_QUESTIONS } from "./list/CommentList.queries";
import CommentWrite from "./write/CommentWrite.container";

const Comment = () => {
    const router = useRouter();
    const { data, refetch, fetchMore } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
        variables: {
            useditemId: router.query.id,
        },
    });

    const loadMoreProducts = () => {
        if (!data) return;
        console.log(data);
        fetchMore({
            variables: { page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1 },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult?.fetchUseditemQuestions) {
                    return { fetchUseditems: [...prev.fetchUseditemQuestions] };
                }
                return {
                    fetchUseditemQuestions: [...prev.fetchUseditemQuestions, ...fetchMoreResult?.fetchUseditemQuestions],
                };
            },
        });
    };

    return (
        <>
            <CommentWrite refetch={refetch} />
            <CommentList data={data} loadMoreProducts={loadMoreProducts} refetch={refetch} />
        </>
    );
};

export default Comment;
