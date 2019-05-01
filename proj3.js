var camera, camera_fixa, camera_cima, camera_lateral, scene, renderer;

var geometry, material, mesh;

var x_angle = 0.01, z_angle = 0.01, z_angle_neg = -0.01, x_angle_neg = -0.01, dirlight;
var keys =  [false, false, false, false];

var objectsgroup = new THREE.Group();

var hologroup = new THREE.Group();

var cockpit_materials = [   new THREE.MeshBasicMaterial({ color: 0x6600CC, wireframe: false }),
                            new THREE.MeshPhongMaterial({ color: 0x6600CC, wireframe: false, shininess: 100 }),
                            new THREE.MeshLambertMaterial({ color: 0x6600CC, wireframe: false })];

var wing_materials = [      new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: false }),
                            new THREE.MeshPhongMaterial({ color: 0x0000ff, wireframe: false, shininess: 100 }),
                            new THREE.MeshLambertMaterial({ color: 0x0000ff, wireframe: false })];

var body_materials = [      new THREE.MeshBasicMaterial({ color: 0x15FFFF, wireframe: false }),
                            new THREE.MeshPhongMaterial({ color: 0x15FFFF, wireframe: false, shininess: 100}),
                            new THREE.MeshLambertMaterial({ color: 0x15FFFF, wireframe: false })];

var holo_materials = [      new THREE.MeshBasicMaterial({ color: 0xC0C0C0, wireframe: false }),
                            new THREE.MeshPhongMaterial({ color: 0xC0C0C0, wireframe: false, shininess: 100}),
                            new THREE.MeshLambertMaterial({ color: 0xC0C0C0, wireframe: false })];

class holo extends THREE.Object3D{
    constructor(x,y,z){
        super();
        this.light_material = holo_materials[1];
        createHolo(this,x,y,z);
        hologroup.add(this);
    }
    /*changeMaterial(material) {
       this.children[0].material = material;
    }

    onOffLightCalc() {
        if (this.children[0].material == this.light_material) {
            this.changeMaterial(holo_materials[0]); //Basic
        }
        else {
            this.changeMaterial(this.light_material);
        }
    }

    changeLightMaterial() {
        var oldmat = this.light_material;
        if (this.light_material == holo_materials[1]) {
            this.light_material = holo_materials[2]; //Phong
        }
        else {
            this.light_material = holo_materials[1]; //Lambert (Gouraud Shadian)
        }

        if (this.children[0].material == oldmat) {
            this.changeMaterial(this.light_material);
        }
    }*/
}

class wings extends THREE.Object3D{
    constructor() {
        super();
        this.light_material = wing_materials[1];
        createWings(this,0,0,0);
        objectsgroup.add(this);
    }

    changeMaterial(material) {
       this.children[0].material = material;
    }

    onOffLightCalc() {
        if (this.children[0].material == this.light_material) {
            this.changeMaterial(wing_materials[0]); //Basic
        }
        else {
            this.changeMaterial(this.light_material);
        }
    }

    changeLightMaterial() {
        var oldmat = this.light_material;
        if (this.light_material == wing_materials[1]) {
            this.light_material = wing_materials[2]; //Phong
        }
        else {
            this.light_material = wing_materials[1]; //Lambert (Gouraud Shadian)
        }

        if (this.children[0].material == oldmat) {
            this.changeMaterial(this.light_material);
        }
    }
}

class cockpit extends THREE.Object3D{
    constructor() {
        super();
        this.light_material = cockpit_materials[1];
        createCockpit(this,0,0,0);
        objectsgroup.add(this);
    }

    changeMaterial(material) {
       this.children[0].material = material;
       console.log(this.children[0].material);
    }

    onOffLightCalc() {
        if (this.children[0].material == this.light_material) {
            this.changeMaterial(cockpit_materials[0]); //Basic
        }
        else {
            this.changeMaterial(this.light_material);
        }
    }

    changeLightMaterial() {
        var oldmat = this.light_material;
        if (this.light_material == cockpit_materials[1]) {
            this.light_material = cockpit_materials[2]; //Phong
        }
        else {
            this.light_material = cockpit_materials[1]; //Lambert (Gouraud Shadian)
        }

        if (this.children[0].material == oldmat) {
            this.changeMaterial(this.light_material);
        }
    }
}

class body extends THREE.Object3D{
    constructor() {
        super();
        this.light_material = body_materials[1];
        createBody(this,0,0,0);
        objectsgroup.add(this);
    }

    changeMaterial(material) {
       this.children[0].material = material;
    }

    onOffLightCalc() {
        if (this.children[0].material == this.light_material) {
            this.changeMaterial(body_materials[0]); //Basic
        }
        else {
            this.changeMaterial(this.light_material);
        }
    }

    changeLightMaterial() {
        var oldmat = this.light_material;
        if (this.light_material == body_materials[1]) {
            this.light_material = body_materials[2]; //Phong
        }
        else {
            this.light_material = body_materials[1]; //Lambert (Gouraud Shadian)
        }

        if (this.children[0].material == oldmat) {
            this.changeMaterial(this.light_material);
        }
    }
}

function update_rot() {
      if (keys[0]){
        objectsgroup.rotateZ(z_angle);
      }
      if (keys[1]) {
        objectsgroup.rotateX(x_angle);
      }
      if (keys[2]) {
        z_angle_neg = -z_angle;
        objectsgroup.rotateZ(z_angle_neg);
      }
      if (keys[3]) {
        x_angle_neg = -x_angle;
        objectsgroup.rotateX(x_angle_neg);
      }
}

function createScene() {
    'use strict';

    scene = new THREE.Scene();


    scene.add(new THREE.AxesHelper(10));

    new wings;
    new cockpit;
    new body;
    new holo(24,15,24);
    new holo(-24,15,24);
    new holo(24,15,-24);
    new holo(-24,15,-24);
    scene.add(objectsgroup);
    scene.add(hologroup);
}

function createCamera() {
    'use strict';
    var aspect = window.innerWidth/window.innerHeight;

    camera = new THREE.PerspectiveCamera(45, aspect, 20, 1000);
     camera.position.x = 50;
     camera.position.y = 50;
     camera.position.z = 50;
     camera.lookAt(scene.position);
}

function onResize(){
	'use strict';

	renderer.setSize(window.innerWidth, window.innerHeight);
	if (window.innerHeight > 0 && window.innerWidth > 0 ) {
		var aspect = window.innerWidth/window.innerHeight;
		var num1, num2;
		if (aspect<1) {num1 = 30; num2 = (1/aspect)*30}
		else {num1 = aspect*30; num2 = 30}

		camera.aspect =  aspect;

		camera.updateProjectionMatrix();
	}
}

function createLight(){
    dirlight = new THREE.DirectionalLight(0xffffff, 0.7);
    dirlight.position.set(200, 200, 400);
    //dirlight.target.position.set( 75, 35, 0 );
    dirlight.target.updateMatrixWorld();

    light1 = new THREE.SpotLight(0xFFFFFF);
    light1.angle = Math.PI/4;
    light1.intensity = 0;
    light1.position.set(24,15,24);

    light2 = new THREE.SpotLight(0xFFFFFF);
    light2.angle = Math.PI/4;
    light2.intensity = 0;
    light2.position.set(-24,15,24);

    light3 = new THREE.SpotLight(0xFFFFFF);
    light3.angle = Math.PI/4;
    light3.intensity = 0;
    light3.position.set(-24,15,-24);

    light4 = new THREE.SpotLight(0xFFFFFF);
    light4.angle = Math.PI/4;
    light4.intensity = 0;
    light4.position.set(24,15,-24);

    scene.add(dirlight);
    //scene.add(dirlight.target)
    scene.add(light1);
    scene.add(light2);
    scene.add(light3);
    scene.add(light4);
}

function onOffLight() {
    for (var obj of objectsgroup.children) {
        obj.onOffLightCalc();
    }
    for (var obj of hologroup.children) {
        obj.onOffLightCalc();
    }
}

function changeShading() {
    for (var obj of objectsgroup.children) {
        obj.changeLightMaterial();
    }
    for (var obj of hologroup.children) {
        obj.changeLightMaterial();
    }
}

function onKeyDown(e) {
    'use strict';

    var keycode = e.keyCode;
  	switch(keycode){

    case 65: //A
    case 97: //a
        scene.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material.wireframe = !child.material.wireframe;
            }
        });
        break;

    case 69:  //E
    case 101: //e
        scene.traverse(function (child) {
            if (child instanceof THREE.AxesHelper) {
                child.visible = !child.visible;
            }
        });
        break;
    case 71: //G
    case 103: //g
        changeShading();
        break;
    case 76: //L
    case 108: //l
        onOffLight();
        break;
    case 78: //N
    case 110: //n
        dirlight.visible = !dirlight.visible;
        break;
    case 49: //1
        light1.intensity = 1-light1.intensity;
        break;
    case 50: //2
        light2.intensity = 1-light2.intensity;
        break;
	case 51: //3
        light3.intensity = 1-light3.intensity;
        break;
    case 52: //4
        light4.intensity = 1-light4.intensity;
        break;
    case 37: //esquerda
        keys[0] = true;
        break;
    case 38: //cima
        keys[1] = true;
      	break;
    case 39: //direita
        keys[2] = true;
        break;
    case 40: //baixo
        keys[3] = true;
      	break;
        }
        window.addEventListener('keyup',onKeyUp, false);
    }

    function onKeyUp(e){
    	'use strict';
        var keycode = e.keyCode;
        switch(keycode){
          case 37: //esquerda
              keys[0] = false;
              break;
          case 38: //cima
              keys[1] = false;
          	break;
          case 39: //direita
              keys[2] = false;
              break;
          case 40: //baixo
              keys[3] = false;
          	break;
    	}
    	//window.removeEventListener('keydown',onKeyDown, false);
    }


function update(){
    update_rot();
}

function animate() {
	'use strict';
  //window.addEventListener("keydown", onKeyDown);
	update();
	render();
	requestAnimationFrame(animate);
}

function render() {
    'use strict';
    renderer.render(scene, camera);
}

function init() {
    'use strict';
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    createScene();
    createCamera();
    createLight();

    animate();

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
}
