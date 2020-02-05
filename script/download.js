const stream = require('stream')
const fs = require('fs')
const got = require('got')
const { promisify } = require('util')
const path = require('path')

const pipeline = promisify(stream.pipeline)
const address = [
    'https://raw.githubusercontent.com/dwmkerr/hacker-laws/master/README.md',
    'https://raw.githubusercontent.com/umutphp/hacker-laws-tr/master/README.md',
    'https://raw.githubusercontent.com/nusr/hacker-laws-zh/master/README.md',
    'https://raw.githubusercontent.com/dwmkerr/hacker-laws/master/translations/pt-BR.md',
    'https://raw.githubusercontent.com/dwmkerr/hacker-laws/master/translations/it-IT.md',
    'https://raw.githubusercontent.com/dwmkerr/hacker-laws/master/translations/es-ES.md',
    'https://raw.githubusercontent.com/codeanddonuts/hacker-laws-kr/master/README.md',
]

;(async () => {
    await pipeline(
        got.stream(address[0]),
        fs.createWriteStream(
            path.join(
                path.join(__dirname, 'assets'),
                '/dowloaded-hacker-laws.md',
            ),
        ),
    )
})()
