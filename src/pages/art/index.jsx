import ArtCardGroup from "@/components/art/ArtCardGroup";
import RightSearch from "@/components/art/RightSearch";
export default function Index() {
  return (
    <>
      <section className="flex flex-row justify-center mt-5">
        <div className="w-2/3">
          <h2 className="">精選文章</h2>
          <div className="mx-2 card-group">
            <ArtCardGroup></ArtCardGroup>
          </div>
        </div>
        <RightSearch></RightSearch>
      </section>
    </>
  );
}
