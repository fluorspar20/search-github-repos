const axios = require('axios')

const getRepos = async ({
    username = 'fluorspar20',
    page = 1,
    per_page = 40
}= {}) => {
    try {
        const repos = await axios.get(`https://api.github.com/users/${username}/repos?page=${page}&per_page=${per_page}&sort=updated`)
        return repos.data.map((repo) => {
            return {
                name: repo.name,
                url: repo.url,
                description: repo.description,
            }
        })

    } catch (error) {
        return []
    }
}

module.exports = {getRepos: getRepos}