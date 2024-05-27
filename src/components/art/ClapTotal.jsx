import { useAuth } from "../../hooks/use-auth";
import useSWR from "swr";
import { fetcher } from "@/utils/utils";
import { useEffect, useState } from "react";

export default function ClapTotal({ total, art_id }) {
  const { clapArt, auth } = useAuth();
  const [totalClap, setTotalClap] = useState(total);
  async function updateTotal() {
    try {
      const res = await fetch(`/api/art/${art_id}/clap_total`);
      const data=await res.json();
    //   console.log(data.data.clap_total);
      setTotalClap(data.data.clap_total);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    updateTotal();
  }, [auth,clapArt]);

  //   更新

  return <span>已有{totalClap}人贊同</span>;
}
