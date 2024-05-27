import { useAuth } from "@/hooks/use-auth";
export default function ArtSideBar() {
  const { auth, setAuth } = useAuth();
  return (
    <>
      <div className="fixed flex h-screen left-20  items-center z-50">
        <div className="h-fit flex flex-col items-center justify-center gap-5 bg-white shadow-lg   p-3 rounded-full">
          {auth && (
            <div className="avatar">
              <div className="w-14 rounded-full">
                <img src={auth.img} />
              </div>
            </div>
          )}
          {auth && (
            <button
              className="btn btn-ghost btn-circle"
              onClick={() => {
                setAuth(null);
                console.log(" setAuth(null);");
              }}
            >
              登出
            </button>
          )}
          {!auth && (
            <button className="btn btn-ghost btn-circle">已登出</button>
          )}
          {!auth && (
            <button
              className="btn btn-ghost btn-circle w-fit"
              onClick={() => {
                setAuth({
                  id: "637742b19d29c62bfd10e368",
                  username: "AME",
                  img: "https://randomuser.me/api/portraits/women/79.jpg",
                });
              }}
            >
              登入 AME
            </button>
          )}

          {!auth && (
            <button
              className="btn btn-ghost btn-circle w-fit"
              onClick={() => {
                setAuth({
                  id: "637742b19d29c62bfd10e367",
                  username: "NEO",
                  img: "https://randomuser.me/api/portraits/men/51.jpg",
                });
              }}
            >
              登入 NEO
            </button>
          )}
          <a
            className="btn btn-ghost btn-circle w-fit"
            href={`/art/author/637742b19d29c62bfd10e368`}
          >
            AME 主頁
          </a>

          <a
            className="btn btn-ghost btn-circle w-fit"
            href={`/art/author/637742b19d29c62bfd10e367`}
          >
            NEO 主頁
          </a>
        </div>
      </div>
    </>
  );
}
