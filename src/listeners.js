import { Repo } from './repo.js'



import { logger } from "../lib/logger.js";

export const getRepos = () => {
    clear();

    fetch('https://api.github.com/users/22count22/repos')

    .then((res) => {
        res.json()
            .then((repos) => {
                logger.push({
                    repositories: repos
                })
                repos.map(repos => {
                    const divResult = new Repo(repos)
                    const view = divResult.render();
                    document.querySelector("#divResult").appendChild(view);



                })


            });
    })

    function clear() {
        while (divResult.firstChild)
            divResult.removeChild(divResult.firstChild)
    }

}