import { useRouter } from "next/router";
import LikeArtCardGroup from "../../../../components/art/(author)/LikeArtCardGroup";
import { useEffect, useState } from "react";
import clsx from "clsx";
import AuthorPage from "../../../../components/art/(author)/AuthorPage";

export default function Index({}) {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [tab, setTab] = useState("default");
  const id = router.query.slug;

  useEffect(() => {
    if (router.isReady) {
      setReady(true);
    }
  }, [router.isReady]);

  if (!ready) {
    return <div>loading...</div>;
  }

  if (ready)
    return (
      <>
        <AuthorPage id={id}></AuthorPage>
        <section className="flex flex-row justify-center mt-5 gap-5 ">
          <section className="w-[350px]">
            <ul className="menu rounded-box w-full text-2xl">
              <li
                onClick={() => {
                  setTab("default");
                }}
              >
                <a
                  className={clsx(
                    "h-20 flex items-center author-tab",
                    tab === "default" && "author-tab-active"
                  )}
                >
                  動態
                </a>
              </li>
              <li
                onClick={() => {
                  setTab("released");
                }}
              >
                <a
                  className={clsx(
                    "h-20 flex items-center author-tab",
                    tab === "released" && "author-tab-active"
                  )}
                >
                  發布的文章
                </a>
              </li>
              <li
                onClick={() => {
                  setTab("clapped");
                }}
              >
                <a
                  className={clsx(
                    "h-20 flex items-center author-tab",
                    tab === "clapped" && "author-tab-active"
                  )}
                >
                  贊同的文章
                </a>
              </li>
              <li
                onClick={() => {
                  setTab("liked");
                }}
              >
                <a
                  className={clsx(
                    "h-20 flex items-center author-tab",
                    tab === "liked" && "author-tab-active"
                  )}
                >
                  收藏的文章
                </a>
              </li>
            </ul>
          </section>
          <section className="max-w-[1200px]">
            <LikeArtCardGroup tab={tab} author_id={id}></LikeArtCardGroup>
          </section>
        </section>
      </>
    );
}
