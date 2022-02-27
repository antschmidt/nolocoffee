import fetch from "node-fetch"
import { writeFile } from "fs"
const bearer = process.env.CLOUDFLARE_BEARER
const account = process.env.CLOUDFLARE_IMAGES_ACCOUNT
const email = process.env.CLOUDFLARE_EMAIL

fetch(`https://api.cloudflare.com/client/v4/accounts/${account}/images/v1`, {
    headers: {
        'X-Auth-Email': email,
        'Authorization': `Bearer ${bearer}`,
        'Content-Type': 'application/json'
    }
}).then(async (v) => {
    const data = await v.json()
    writeFile('src/images.json', JSON.stringify(data, null, 2), (err)=>console.log(err))
});