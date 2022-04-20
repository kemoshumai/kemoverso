import * as BABYLON from "babylonjs";
import KemoversoEngine from "./KemoversoEngine";

export default class Kemoverso
{
    public establishWithCanvas(canvasElement:HTMLElement)
    {
        this.establish(canvasElement as HTMLCanvasElement);
    }
    public async establish(canvasElement:HTMLCanvasElement): Promise<void>
    {
        const kemoversoEngine:KemoversoEngine = new KemoversoEngine(new BABYLON.Engine(canvasElement,true),canvasElement);
        await kemoversoEngine.createScene();
        kemoversoEngine.render();
    }
}