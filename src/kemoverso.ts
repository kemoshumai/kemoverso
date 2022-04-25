import * as BABYLON from "babylonjs";
import KemoversoEngine from "./KemoversoEngine";

export default class Kemoverso
{
    public establishWithCanvas(canvasElement:HTMLElement, sceneFilepath: string)
    {
        this.establish(canvasElement as HTMLCanvasElement, sceneFilepath);
    }
    public async establish(canvasElement:HTMLCanvasElement, sceneFilepath: string): Promise<void>
    {
        const sceneFolderpath:string = sceneFilepath.split("/").reverse().slice(1).reverse().join("/")+"/" ?? "";
        const sceneFilename:string = sceneFilepath.split('/')?.pop()?.split('\\')?.pop() ?? "";
        console.log("Loading...:",sceneFolderpath,sceneFilename);
        const kemoversoEngine:KemoversoEngine = new KemoversoEngine(new BABYLON.Engine(canvasElement,true),canvasElement);
        await kemoversoEngine.createScene(await BABYLON.SceneLoader.LoadAsync(sceneFolderpath,sceneFilename, kemoversoEngine.babylonEngine));
        kemoversoEngine.render();
    }
}