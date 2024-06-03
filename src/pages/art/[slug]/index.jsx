import ArtDetailLeft from "@/components/art/ArtDetailLeft";
import RightSearch from "@/components/art/RightSearch";
import { useRouter } from "next/router";


export default function Index({}) {
  const router = useRouter();

  const id = router.query.slug;

  return (
    <>
      <section className="flex flex-row justify-center mt-5 gap-5  mb-20">
        <ArtDetailLeft id={id}></ArtDetailLeft>
        <RightSearch id={id}></RightSearch>
      </section>
    </>
  );
}
