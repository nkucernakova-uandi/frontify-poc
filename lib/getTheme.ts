const Token = "Bearer 3bc2b4a11ac65d6f0cc2721928067dade2fa7f33527e39d1a8f404f9dc36b6d2e3d6034cc03fb945"
const CompanyNumber = "240014"

async function getFirstBrandId(): Promise<string> {
    const req = await fetch(`https://company-${CompanyNumber}.frontify.com/graphql`, {
        method: "POST",
        headers: new Headers({
            "authorization": Token,
            "content-type": "application/json"
        }),
        body: `{"query":"{brands {name id}}"}`
    })
    const data = await req.json()
    return data.data.brands[0].id
}
async function getFirstProjectId(brandId: string): Promise<string> {
    const req = await fetch(`https://company-${CompanyNumber}.frontify.com/v1/guidelines/${brandId}`, {
        method: "GET",
        headers: new Headers({
            "authorization": Token
        }),
    })
    const data = await req.json()
    return data.data.guidelines[0].project_id
}

// Get project id
async function setup(): Promise<string> {
    return getFirstProjectId(await getFirstBrandId())
}

type ColorDict = {[key: string]: string}
async function getColors(projectId: string): Promise<ColorDict> {
    const req = await fetch(`https://company-${CompanyNumber}.frontify.com/v1/color/library/${projectId}`, {
        method: "GET",
        headers: new Headers({
            "authorization": Token
        })
    })
    // ! Not checked for exceptions

    const data = await req.json()
    const palettes = data.palettes.map((x: any) => x.colors) as unknown[]
    const colors = palettes.flat()
    const formatted = colors
        .map((x: any) => ({name: x.name, hex: x.hex}))

    const colorDict: ColorDict = {}
    for (let color of formatted) {
        colorDict[color.name] = "#"+color.hex
    }
    return colorDict
}

export {setup, getColors}