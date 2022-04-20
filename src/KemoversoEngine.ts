import * as BABYLON from "babylonjs";

export default class KemoversoEngine
{
    private babylonEngine: BABYLON.Engine;
    private canvasElement: HTMLCanvasElement;
    private scene?: BABYLON.Scene;
    
    constructor(babylonEngine : BABYLON.Engine, canvasElement:HTMLCanvasElement){
        this.babylonEngine = babylonEngine;
        this.canvasElement = canvasElement;
    }

    public async createScene(): Promise<void>{
        // Scene
        const scene:BABYLON.Scene = new BABYLON.Scene(this.babylonEngine);

        // Camera
        const camera = new BABYLON.FreeCamera("KMCamera", new BABYLON.Vector3(0,5,-10), scene);
        camera.setTarget(BABYLON.Vector3.Zero());
        camera.attachControl(this.canvasElement, false);

        // light
        const light = new BABYLON.HemisphericLight("KMlight", new BABYLON.Vector3(0,1,0), scene);

        // sphere
        const sphere = BABYLON.MeshBuilder.CreateSphere("testobject", { segments: 16, diameter: 2 }, scene);
        sphere.position.y = 1;

        BABYLON.MeshBuilder.CreateGround("ground", { width: 6, height: 6, subdivisions: 2 }, scene);
        
        this.scene = scene;
    }

    public render(): void{
        this.babylonEngine.runRenderLoop(():void=>this.scene?.render());
    }

    public stopRender(): void{
        this.babylonEngine.stopRenderLoop();
    }

}