import { globSync } from "glob";

export function getPhotoList() {
    const glob = globSync("public/assets/photos/*.{png,jpg,jpeg}");
    const paths = [];
    for(const file of glob) {
        const path = file.replaceAll("\\", "/").replace("public", "");
        paths.push(path);
    }
    return paths;
}