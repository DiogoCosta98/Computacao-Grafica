var camera, camera_fixa, camera_cima, camera_lateral, controls, scene, renderer;

var light, directionalLight;

var geometry, material, mesh;

var cube_mesh, table_mesh, sphere_mesh, ball, max_angular_speed, acceleration, stop_flag;

var table_materials, sphere_materials, cube_materials;

var objectsgroup, clock;

class scene_obj extends THREE.Object3D{
	constructor() {
        super();

        table_materials = [   new THREE.MeshBasicMaterial({ color: 0x6600CC, wireframe: false }),
                            new THREE.MeshPhongMaterial({ color: 0x6600CC, wireframe: false, shininess: 100 })];
        sphere_materials = [      new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: false }),
                            new THREE.MeshPhongMaterial({ color: 0x0000ff, wireframe: false, shininess: 100 })];
        cube_materials = [      new THREE.MeshBasicMaterial({ color: 0x15FFFF, wireframe: false }),
                            new THREE.MeshPhongMaterial({ color: 0x15FFFF, wireframe: false })];

        max_angular_speed = 10; 
        acceleration = -0.8; 
        stop_flag = false;

        clock = new THREE.Clock();
        objectsgroup = new THREE.Group();
        this.scene = new THREE.Scene();
        createLight(this.scene);

    	new table 
    	new cube
    	ball = new sphere

    	this.scene.add(new THREE.AxesHelper(10));
    	this.scene.add(objectsgroup);
    }
}

class table extends THREE.Object3D{
    constructor() {
        super();
        geometry = new THREE.BoxGeometry( 80, 1, 80, 30, 30, 30);
		this.light_material = table_materials[1];
		table_mesh = new THREE.Mesh( geometry, this.light_material );
		table_mesh.receiveShadow = true; //default is false
		this.add(table_mesh);
        objectsgroup.add(this);
    }

    changeMaterial(material) {
       this.children[0].material = material;
    }

    onOffLightCalc() {
        if (this.children[0].material == this.light_material) {
            this.changeMaterial(table_materials[0]); //Basic
        }
        else {
            this.changeMaterial(this.light_material);
        }
    }
}

class cube extends THREE.Object3D{
    constructor() {
        super();
        geometry = new THREE.BoxGeometry(12, 12, 12, 5, 5, 5);
		this.light_material = cube_materials[1];
		cube_mesh = new THREE.Mesh( geometry, this.light_material );
		cube_mesh.castShadow = true; //default is false
		cube_mesh.receiveShadow = true; //default is false
		this.add(cube_mesh);
		this.position.set(-6, 6, -6);
        objectsgroup.add(this);
    }

    changeMaterial(material) {
       this.children[0].material = material;
    }

    onOffLightCalc() {
        if (this.children[0].material == this.light_material) {
            this.changeMaterial(cube_materials[0]); //Basic
        }
        else {
            this.changeMaterial(this.light_material);
        }
    }
}

class sphere extends THREE.Object3D{
    constructor() {
        super();
        geometry = new THREE.SphereGeometry(6, 10, 10);
		this.light_material = sphere_materials[1];
		sphere_mesh = new THREE.Mesh( geometry, this.light_material );
		sphere_mesh.castShadow = true; //default is false
		sphere_mesh.receiveShadow = true; //default is false
		sphere_mesh.add(new THREE.AxesHelper(10));
		this.position.set(-6, 6, -26);
		this.angular_speed = 0; // w = delta_teta/delta_time7
		this.teta = 0;
		this.add(sphere_mesh);
        objectsgroup.add(this);
    }
    
    changeMaterial(material) {
       this.children[0].material = material;
    }

    onOffLightCalc() {
        if (this.children[0].material == this.light_material) {
            this.changeMaterial(sphere_materials[0]); //Basic
        }
        else {
            this.changeMaterial(this.light_material);
        }
    }

    updateposition(delta) {
    	//s = Rθ
    	//s = pfinal-pinicial
    	//θ = (pfinal-pinicial)/R [Rad]
    	var attempt_angular_speed = this.angular_speed + acceleration*delta;
    	var oldpos = new THREE.Vector3().copy(this.position);
    	if(attempt_angular_speed < max_angular_speed && attempt_angular_speed>=0){
    		this.angular_speed = attempt_angular_speed;
    	}
		this.teta = this.teta + this.angular_speed*delta;
		this.position.copy(new THREE.Vector3(-6+20*Math.cos(this.teta), 6, -6+20*Math.sin(this.teta)));
		this.rotation.y = -this.teta;
		this.rotation.x -= 0.01;

	}
}

function onOffLight() {
    for (var obj of objectsgroup.children) {
        obj.onOffLightCalc();
    }
}

function createLight(active_scene){
  	light = new THREE.PointLight( 0xffffff, 4, 100, 2 );
  	light.castShadow = true;
	light.position.set( -20, 30, -20 );
	active_scene.add( light );

	directionalLight = new THREE.DirectionalLight( 0xffffff, 2 );
	directionalLight.position.set( -40, 30, 40 );
	active_scene.add( directionalLight );
}

function createScene() {
    'use strict';

    var active_scene_obj = new scene_obj;
    scene = active_scene_obj.scene;


}

function createCamera() {
    'use strict';
    var aspect = window.innerWidth/window.innerHeight;

    camera = new THREE.PerspectiveCamera(45, aspect, 20, 1000);
    camera.position.set(50,50,50);
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

function onKeyDown(e) {
    'use strict';

    var keycode = e.keyCode;
  	switch(keycode){

    case 87: //W
    case 119: //w
        scene.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material.wireframe = !child.material.wireframe;
            }
        });
        break;
    case 66:  //B
    case 98: //b
        acceleration = -acceleration;
        break;
    case 68:  //D
    case 100: //d
        directionalLight.intensity = 1-directionalLight.intensity;
        break;       
    case 69:  //E
    case 101: //e
        scene.traverse(function (child) {
            if (child instanceof THREE.AxesHelper) {
                child.visible = !child.visible;
            }
        });
        break;
    case 80:  //P
    case 112: //p
        light.intensity = 1-light.intensity;
        light.castShadow = !light.castShadow;
        break;
    case 82: //R
    case 114: //r
    	if(stop_flag){
    		var active_scene_obj = new scene_obj;
    		scene = active_scene_obj.scene;
    	}
        break;
    case 83: //S
    case 115: //s
    	stop_flag = !stop_flag;
        break;
    case 76: //L
    case 108: //l
    	onOffLight();
        break;
    case 78: //N
    case 110: //n
        break;
    case 49: //1
        break;
    case 50: //2
        break;
	case 51: //3
        break;
    case 52: //4
        break;
    case 37: //esquerda
        break;
    case 38: //cima
      	break;
    case 39: //direita
        break;
    case 40: //baixo
      	break;
        }
        window.addEventListener('keyup',onKeyUp, false);
    }

    function onKeyUp(e){
    	'use strict';
        var keycode = e.keyCode;
        switch(keycode){
          case 37: //esquerda
              break;
          case 38: //cima
          	break;
          case 39: //direita
              break;
          case 40: //baixo
          	break;
    	}
    	//window.removeEventListener('keydown',onKeyDown, false);
    }


function update(){
	var delta_time = clock.getDelta();
	if(stop_flag){
		delta_time = 0;
	}
	ball.updateposition(delta_time);
}

function animate() {
	'use strict';
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
    renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
    document.body.appendChild(renderer.domElement);

    createScene();
    createCamera();

    animate();

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
}
