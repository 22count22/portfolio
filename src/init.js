import { getRepos } from './listeners.js'

const repos = document.getElementById("repos");
repos.addEventListener('click', getRepos);