import { useRouter } from "next/router"
import useSWR from "swr";

const UserPage = () => {
    const router = useRouter();
    const username = router.query.username;

    const { data, error } = useSWR(username ? `/users/${username}` : null);
    if (!data) return null;
    return (
        <div className="flex max-w-5xl px-4 pt-5 mx-auto">
            {/* {유저 포스트 댓글 리스트} */}
        </div>
    )
}