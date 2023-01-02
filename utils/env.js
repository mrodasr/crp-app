const config = require('../config')
const { writeFile, appendFile } = require('fs/promises')

const writeEnvFile = async (file, config) => {
    await writeFile(file, '')
    Object.entries(config).forEach(async ([key, val]) => await appendFile(file, `${key}=${val}\n`))
}

writeEnvFile('.env', config[process.argv[2].slice(2)])