import * as BABYLON from "babylonjs";
import 'babylonjs-loaders';
import KemoversoEngine from "./KemoversoEngine";

export default class Kemoverso
{
    public async establishWithCanvasFromFile(canvasElement:HTMLElement, sceneFilepath: string)
    {
        const sceneFolderpath:string = sceneFilepath.split("/").reverse().slice(1).reverse().join("/")+"/" ?? "";
        const sceneFilename:string = sceneFilepath.split('/')?.pop()?.split('\\')?.pop() ?? "";
        console.log("Loading...:",sceneFolderpath,sceneFilename);
        const scene:BABYLON.Scene = await BABYLON.SceneLoader.LoadAsync(sceneFolderpath,sceneFilename);
        this.establish(canvasElement as HTMLCanvasElement, scene);
    }
    public establishWithCanvas(canvasElement:HTMLElement, scene: BABYLON.Scene)
    {
        this.establish(canvasElement as HTMLCanvasElement, scene);
    }
    public async establish(canvasElement:HTMLCanvasElement, scene: BABYLON.Scene): Promise<void>
    {
        
        const kemoversoEngine:KemoversoEngine = new KemoversoEngine(new BABYLON.Engine(canvasElement,true),canvasElement);
        await kemoversoEngine.createScene(scene);
        kemoversoEngine.render();
    }
}