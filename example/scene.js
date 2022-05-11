const sceneMaker = (scene) => {

    // light
    const light = new BABYLON.HemisphericLight("KMlight", new BABYLON.Vector3(0,1,0), scene);

    // spheres
    const sphere = BABYLON.MeshBuilder.CreateSphere("testobject_1", { segments: 16, diameter: 2 }, scene);
    sphere.position.y = 1;
    const sphere2 = BABYLON.MeshBuilder.CreateSphere("testobject_2", { segments: 16, diameter: 2 }, scene);
    sphere2.position.y = 1.5;

    BABYLON.MeshBuilder.CreateGround("ground", { width: 6, height: 6, subdivisions: 2 }, scene);

    return scene;
}