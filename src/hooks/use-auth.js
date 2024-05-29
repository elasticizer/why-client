import React, { useState, useContext, createContext, useEffect } from "react";
import { useRouter } from "next/router";
import chalk from "chalk";
// import { checkAuth, getFavs } from "@/services/user";
// 前端檢查權限
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [follow, setFollow] = useState(null);
  const [favArt, setFavArt] = useState(null);
  const [clapArt, setClapArt] = useState(null);
  // 我的最愛清單使用
  const [favorites, setFavorites] = useState([]);

  // 得到我的最愛
  const handleGetFavorites = async () => {
    const res = await getFavs();
    console.log(res.data);
    if (res.data.status === "success") {
      setFavorites(res.data.data.favorites);
    }
  };

  async function asyncGetFavList() {
    try {
      const res = await fetch("/api/art/action/like", {
        method: "POST",
        body: JSON.stringify({ user: auth.username }),
      });
      const r = await res.json();
      if (r.error) {
        throw new Error("出事了");
      }
      setFavArt(r.data);
    } catch (error) {
      console.log(chalk.bgRed("出事了"));
      return;
    }
  }
  async function asyncGetFollowList() {
    const res = await fetch("/api/art/action/follow", {
      method: "POST",
      body: JSON.stringify({ user: auth.username }),
    });
    const r = await res.json();
    if (r.error) {
      console.log(chalk.bgRed("出事了"));
      return;
    }
    if (r.data) {
      setFollow(r.data); //陣列
    }
  }
  async function asyncGetClapList() {
    const res = await fetch("/api/art/action/clap", {
      method: "POST",
      body: JSON.stringify({ user: auth.username }),
    });
    const r = await res.json();
    if (r.error) {
      console.log(chalk.bgRed("出事了"));
      return;
    }
    if (r.data) {
      setClapArt(r.data);
    }
  }
  // useEffect must not return anything besides a function, which is used for clean-up.
  // It looks like you wrote useEffect(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:
  useEffect(() => {
    if (auth) {
      // 成功登入後
      asyncGetFollowList();
      asyncGetFavList();
      asyncGetClapList();
      console.log(auth.id,"auth.id");
      if (auth.id === "637742b19d29c62bfd10e368") {
        localStorage.setItem("userInfo", "637742b19d29c62bfd10e368");
      }
      if (auth.id === "637742b19d29c62bfd10e367") {
        localStorage.setItem("userInfo", "637742b19d29c62bfd10e367");
      }
    } else {
      // 登出時要設回空
      setFollow(null);
      setFavArt(null);
      setClapArt(null);
    }
  }, [auth]);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo === "637742b19d29c62bfd10e368") {
      setAuth({
        id: "637742b19d29c62bfd10e368",
        username: "AME",
        img: "https://randomuser.me/api/portraits/women/79.jpg",
      });
    }
    if (userInfo === "637742b19d29c62bfd10e367") {
      setAuth({
        id: "637742b19d29c62bfd10e367",
        username: "NEO",
        img: "https://randomuser.me/api/portraits/men/51.jpg",
      });
    }
  }, []);
  const router = useRouter();

  // 登入頁路由
  const loginRoute = "/test/user";
  // 隱私頁面路由，未登入時會，檢查後跳轉至登入頁
  const protectedRoutes = [
    "/test/user/status",
    "/test/user/profile",
    "/test/user/profile-password",
  ];

  // 檢查會員認証用
  // 每次重新到網站中，或重新整理，都會執行這個函式，用於向伺服器查詢取回原本登入會員的資料
  const checkAuth = () => {
    // 設到全域狀態中
    return auth;
  };

  // didMount(初次渲染)後，向伺服器要求檢查會員是否登入中
  // useEffect(() => {
  //   if (router.isReady && !auth.isAuth) {
  //     checkAuth();
  //   }
  //   // 下面加入router.pathname，是為了要在向伺服器檢查後，
  //   // 如果有比對到是隱私路由，就執行跳轉到登入頁面工作
  //   // 注意有可能會造成向伺服器要求多次，此為簡單的實作範例
  //   // eslint-disable-next-line
  // }, [router.isReady, router.pathname]);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        follow,
        setFollow,
        favArt,
        setFavArt,
        clapArt,
        setClapArt,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
