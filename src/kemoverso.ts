import * as BABYLON from "babylonjs";
import 'babylonjs-loaders';
import KemoversoEngine from "./KemoversoEngine";

export default class Kemoverso
{
    private kemoversoEngine:KemoversoEngine;

    constructor(canvasElement:HTMLCanvasElement){
        const kemoversoEngine:KemoversoEngine = new KemoversoEngine(new BABYLON.Engine(canvasElement,true),canvasElement);
        this.kemoversoEngine = kemoversoEngine;
    }

    public async loadSceneFile(sceneFilepath: string)
    {
        const sceneFolderpath:string = sceneFilepath.split("/").reverse().slice(1).reverse().join("/")+"/" ?? "";
        const sceneFilename:string = sceneFilepath.split('/')?.pop()?.split('\\')?.pop() ?? "";
        console.log("Loading...:",sceneFolderpath,sceneFilename);
        const scene:BABYLON.Scene = await BABYLON.SceneLoader.LoadAsync(sceneFolderpath,sceneFilename);
        return scene;
    }
    public async establish(scene:BABYLON.Scene)
    {
        await this.kemoversoEngine.createScene(scene);
        this.kemoversoEngine.render();
    }
    public makeUserScene(sceneMaker:(s:BABYLON.Scene)=>BABYLON.Scene){
        const scene:BABYLON.Scene = new BABYLON.Scene(this.kemoversoEngine.babylonEngine);
        return sceneMaker(scene);
    }
}