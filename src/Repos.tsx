import { use } from "react";

import { ViewOption } from "./App";
import Repo from "./Repo";

const getRepos = async (view: ViewOption) => {
  const url = `https://api.gitterapp.com/repositories?since=${view}`;
  const resp = await fetch(url);
  const body = await resp.json();
  return body;
}

const Repos = ({ view: view }: { view: ViewOption }) => {
  const repos = use(getRepos(view));

  return repos.length ? (
    <div className="mx-auto w-full lg:w-1/2 flex flex-col gap-4">
      {repos.map((repo: any) => (
        <Repo key={repo.url} repo={repo} />
      ))}
    </div>
  ) : (
    <span>No repos found</span>
  );
};

export default Repos;
