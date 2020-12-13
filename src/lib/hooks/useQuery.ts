import { NextRouter, useRouter } from "next/dist/client/router";

const useQuery = () => {
  const { query }: NextRouter = useRouter();
  return query;
};

export default useQuery;