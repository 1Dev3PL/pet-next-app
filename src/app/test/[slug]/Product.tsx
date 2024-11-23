"use client"
import {useParams, usePathname, useRouter} from "next/navigation";

export const Product = () => {
    const {push} = useRouter()
    const pathname = usePathname()
    const params = useParams<{ slug: string }>()

    return (
        <div className={"flex-col"}>
            <div>
                Current pathname: {pathname}
                <br/>
                Current param: {params.slug}
            </div>
            <button onClick={() => push("/aboba")}>Redirect to aboba</button>
        </div>
    )
}