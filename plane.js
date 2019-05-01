/*global THREE, requestAnimationFrame, console*/

var camera, scene, renderer;

var geometry, material, mesh;

//USED
function createWings(wings,x,y,z) {
	'use strict';

	material = wings.light_material;
	geometry = new THREE.Geometry();
	//Back Left Wing
	geometry = divide_and_conquer(geometry, new THREE.Vector3(2,2,-20), new THREE.Vector3(10,3,-18), new THREE.Vector3(8,2,-20));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(10,3,-18), new THREE.Vector3(3,4,-16), new THREE.Vector3(6,4,-16));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(2,2,-20), new THREE.Vector3(3,4,-16), new THREE.Vector3(10,3,-18));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(2,0,-20), new THREE.Vector3(8,0,-20), new THREE.Vector3(10,1,-18));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(10,1,-18), new THREE.Vector3(6,2,-16), new THREE.Vector3(3,2,-16));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(2,0,-20), new THREE.Vector3(10,1,-18), new THREE.Vector3(3,2,-16));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(2,2,-20), new THREE.Vector3(8,2,-20), new THREE.Vector3(2,0,-20));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(8,2,-20), new THREE.Vector3(8,0,-20), new THREE.Vector3(2,0,-20));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(8,2,-20), new THREE.Vector3(10,3,-18), new THREE.Vector3(8,0,-20));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(10,3,-18), new THREE.Vector3(10,1,-18), new THREE.Vector3(8,0,-20));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(10,3,-18), new THREE.Vector3(6,4,-16), new THREE.Vector3(10,1,-18));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(6,4,-16), new THREE.Vector3(6,2,-16), new THREE.Vector3(10,1,-18));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(6,4,-16), new THREE.Vector3(3,4,-16), new THREE.Vector3(6,2,-16));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(3,4,-16), new THREE.Vector3(3,2,-16), new THREE.Vector3(6,2,-16));
	//Front Left Wing
	geometry = divide_and_conquer(geometry, new THREE.Vector3(6,1,-4), new THREE.Vector3(24,1,0), new THREE.Vector3(22,1,-4));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(24,1,0), new THREE.Vector3(6,1,4), new THREE.Vector3(22,1,4));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(6,1,-4), new THREE.Vector3(6,1,4), new THREE.Vector3(24,1,0));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(6,-2,-4), new THREE.Vector3(22,-2,-4), new THREE.Vector3(24,-2,0));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(24,-2,0), new THREE.Vector3(22,-2,4), new THREE.Vector3(6,-2,4));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(6,-2,-4), new THREE.Vector3(24,-2,0), new THREE.Vector3(6,-2,4));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(6,1,-4), new THREE.Vector3(22,1,-4), new THREE.Vector3(6,-2,-4));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(22,1,-4), new THREE.Vector3(22,-2,-4), new THREE.Vector3(6,-2,-4));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(22,1,-4), new THREE.Vector3(24,1,0), new THREE.Vector3(22,-2,-4));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(24,1,0), new THREE.Vector3(24,-2,0), new THREE.Vector3(22,-2,-4));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(24,1,0), new THREE.Vector3(22,1,4), new THREE.Vector3(24,-2,0)); 
	geometry = divide_and_conquer(geometry, new THREE.Vector3(22,1,4), new THREE.Vector3(22,-2,4), new THREE.Vector3(24,-2,0));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(22,1,4), new THREE.Vector3(6,1,4), new THREE.Vector3(22,-2,4));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(6,1,4), new THREE.Vector3(6,-2,4), new THREE.Vector3(22,-2,4));
	//Vertical Wing
	geometry = divide_and_conquer(geometry, new THREE.Vector3(1,4,-14), new THREE.Vector3(1,12,-20), new THREE.Vector3(1,8,-16));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(1,4,-14), new THREE.Vector3(1,2,-22), new THREE.Vector3(1,12,-20));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(-1,4,-14), new THREE.Vector3(-1,8,-16), new THREE.Vector3(-1,12,-20));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(-1,4,-14), new THREE.Vector3(-1,12,-20), new THREE.Vector3(-1,2,-22));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(1,4,-14), new THREE.Vector3(1,8,-16), new THREE.Vector3(-1,4,-14));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(1,8,-16), new THREE.Vector3(-1,8,-16), new THREE.Vector3(-1,4,-14));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(1,8,-16), new THREE.Vector3(1,12,-20), new THREE.Vector3(-1,8,-16));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(1,12,-20), new THREE.Vector3(-1,12,-20), new THREE.Vector3(-1,8,-16));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(1,2,-22), new THREE.Vector3(-1,12,-20), new THREE.Vector3(1,12,-20));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(1,2,-22), new THREE.Vector3(-1,2,-22), new THREE.Vector3(-1,12,-20));
	//Back Right Wing
	geometry = divide_and_conquer(geometry, new THREE.Vector3(-10,3,-18), new THREE.Vector3(-2,2,-20), new THREE.Vector3(-8,2,-20));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(-3,4,-16), new THREE.Vector3(-10,3,-18), new THREE.Vector3(-6,4,-16));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(-3,4,-16), new THREE.Vector3(-2,2,-20), new THREE.Vector3(-10,3,-18));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(-8,0,-20), new THREE.Vector3(-2,0,-20), new THREE.Vector3(-10,1,-18));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(-6,2,-16), new THREE.Vector3(-10,1,-18), new THREE.Vector3(-3,2,-16));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(-10,1,-18), new THREE.Vector3(-2,0,-20), new THREE.Vector3(-3,2,-16));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(-8,2,-20), new THREE.Vector3(-2,2,-20), new THREE.Vector3(-2,0,-20));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(-8,0,-20), new THREE.Vector3(-8,2,-20), new THREE.Vector3(-2,0,-20));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(-10,3,-18), new THREE.Vector3(-8,2,-20), new THREE.Vector3(-8,0,-20));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(-10,1,-18), new THREE.Vector3(-10,3,-18), new THREE.Vector3(-8,0,-20));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(-6,4,-16), new THREE.Vector3(-10,3,-18), new THREE.Vector3(-10,1,-18));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(-6,2,-16), new THREE.Vector3(-6,4,-16), new THREE.Vector3(-10,1,-18));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(-3,4,-16), new THREE.Vector3(-6,4,-16), new THREE.Vector3(-6,2,-16));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(-3,2,-16), new THREE.Vector3(-3,4,-16), new THREE.Vector3(-6,2,-16));
	//Front Right Wing
	geometry = divide_and_conquer(geometry, new THREE.Vector3(-24,1,0), new THREE.Vector3(-6,1,-4), new THREE.Vector3(-22,1,-4));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(-6,1,4), new THREE.Vector3(-24,1,0), new THREE.Vector3(-22,1,4));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(-6,1,4), new THREE.Vector3(-6,1,-4), new THREE.Vector3(-24,1,0));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(-22,-2,-4), new THREE.Vector3(-6,-2,-4), new THREE.Vector3(-24,-2,0));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(-22,-2,4), new THREE.Vector3(-24,-2,0), new THREE.Vector3(-6,-2,4));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(-24,-2,0), new THREE.Vector3(-6,-2,-4), new THREE.Vector3(-6,-2,4));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(-22,1,-4), new THREE.Vector3(-6,1,-4), new THREE.Vector3(-6,-2,-4));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(-22,-2,-4), new THREE.Vector3(-22,1,-4), new THREE.Vector3(-6,-2,-4));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(-24,1,0), new THREE.Vector3(-22,1,-4), new THREE.Vector3(-22,-2,-4));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(-24,-2,0), new THREE.Vector3(-24,1,0), new THREE.Vector3(-22,-2,-4));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(-22,1,4), new THREE.Vector3(-24,1,0), new THREE.Vector3(-24,-2,0)); 
	geometry = divide_and_conquer(geometry, new THREE.Vector3(-22,-2,4), new THREE.Vector3(-22,1,4), new THREE.Vector3(-24,-2,0));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(-6,1,4), new THREE.Vector3(-22,1,4), new THREE.Vector3(-22,-2,4));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(-6,-2,4), new THREE.Vector3(-6,1,4), new THREE.Vector3(-22,-2,4));

	for(var j = 0; j < geometry.vertices.length; j=j+6){
		geometry.faces.push(new THREE.Face3(j,j+3,j+5));
		geometry.faces.push(new THREE.Face3(j+3,j+1,j+4));
		geometry.faces.push(new THREE.Face3(j+3,j+4,j+5));
		geometry.faces.push(new THREE.Face3(j+5,j+4,j+2));
	}
	

	geometry.computeFaceNormals();
	geometry.computeVertexNormals();
	mesh = new THREE.Mesh(geometry, material);

	wings.add(mesh)
	wings.position.set(x,y,z);
}

function createCockpit(cockpit, x,y,z) {
    'use strict';
    var height = 2*(Math.sqrt(5)) + 0.1;
	material = cockpit.light_material;
	geometry = new THREE.Geometry();
	geometry = divide_and_conquer(geometry, new THREE.Vector3(4,4,6), new THREE.Vector3(3.75,8,2), new THREE.Vector3(-4,4,6));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(3.75,8,2), new THREE.Vector3(-3.75,8,2), new THREE.Vector3(-4,4,6));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(3.75,8,2), new THREE.Vector3(3.25,8,-6), new THREE.Vector3(-3.75,8,2));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(3.25,8,-6), new THREE.Vector3(-3.25,8,-6), new THREE.Vector3(-3.75,8,2));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(3.25,8,-6), new THREE.Vector3(3,6,-10), new THREE.Vector3(-3.25,8,-6));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(-3.25,8,-6), new THREE.Vector3(3,6,-10), new THREE.Vector3(-3,6,-10));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(4,4,6), new THREE.Vector3(3.25,8,-6), new THREE.Vector3(3.75,8,2));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(4,4,6), new THREE.Vector3(3.25,4,-6), new THREE.Vector3(3.25,8,-6));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(-4,4,6), new THREE.Vector3(-3.75,8,2), new THREE.Vector3(-3.25,8,-6));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(-4,4,6), new THREE.Vector3(-3.25,8,-6), new THREE.Vector3(-3.25,4,-6));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(3,6,-10), new THREE.Vector3(3.25,8,-6), new THREE.Vector3(3.25,4,-6));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(-3,6,-10), new THREE.Vector3(-3.25,4,-6), new THREE.Vector3(-3.25,8,-6));

	for(var j = 0; j < geometry.vertices.length; j=j+6){
		geometry.faces.push(new THREE.Face3(j,j+3,j+5));
		geometry.faces.push(new THREE.Face3(j+3,j+1,j+4));
		geometry.faces.push(new THREE.Face3(j+3,j+4,j+5));
		geometry.faces.push(new THREE.Face3(j+5,j+4,j+2));
	}

	geometry.computeFaceNormals();
	geometry.computeVertexNormals();
    mesh = new THREE.Mesh(geometry, material);

    cockpit.add(mesh)
    cockpit.position.set(x,y,z);
}

function createBody(body,x,y,z) {
    'use strict';
    material = body.light_material;
	geometry = new THREE.Geometry();
	//Plane Top
	geometry = divide_and_conquer(geometry, new THREE.Vector3(0,0,17), new THREE.Vector3(4,2,15), new THREE.Vector3(-4,2,15));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(4,2,15), new THREE.Vector3(6,4,12), new THREE.Vector3(-4,2,15));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(6,4,12), new THREE.Vector3(-6,4,12), new THREE.Vector3(-4,2,15));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(6,4,12), new THREE.Vector3(6,4,-4), new THREE.Vector3(-6,4,12));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(6,4,-4), new THREE.Vector3(-6,4,-4), new THREE.Vector3(-6,4,12));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(1.5,2,-22), new THREE.Vector3(1.5,0,-22), new THREE.Vector3(-1.5,0,-22));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(1.5,2,-22), new THREE.Vector3(-1.5,0,-22), new THREE.Vector3(-1.5,2,-22));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(1.5,2,-22), new THREE.Vector3(-1.5,2,-22), new THREE.Vector3(4.25,6,-10));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(4.25,6,-10), new THREE.Vector3(-1.5,2,-22), new THREE.Vector3(-4.25,6,-10));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(6,4,-4), new THREE.Vector3(4.25,6,-10), new THREE.Vector3(-4.25,6,-10));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(6,4,-4), new THREE.Vector3(-4.25,6,-10), new THREE.Vector3(-6,4,-4));
	//Plane Bottom
	geometry = divide_and_conquer(geometry, new THREE.Vector3(0,0,17), new THREE.Vector3(-6,-4,11), new THREE.Vector3(6,-4,11));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(6,-4,11), new THREE.Vector3(-6,-4,11), new THREE.Vector3(6,-4,-4));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(6,-4,-4), new THREE.Vector3(-6,-4,11), new THREE.Vector3(-6,-4,-4));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(6,-4,-4), new THREE.Vector3(-6,-4,-4), new THREE.Vector3(3,-4,-16));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(3,-4,-16), new THREE.Vector3(-6,-4,-4), new THREE.Vector3(-3,-4,-16));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(3,-4,-16), new THREE.Vector3(-3,-4,-16), new THREE.Vector3(1.5,0,-22));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(-1.5,0,-22), new THREE.Vector3(1.5,0,-22), new THREE.Vector3(-3,-4,-16));
	//Plane Left side
	geometry = divide_and_conquer(geometry, new THREE.Vector3(0,0,17), new THREE.Vector3(6,-4,11), new THREE.Vector3(4,2,15));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(6,4,12), new THREE.Vector3(4,2,15), new THREE.Vector3(6,-4,11));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(6,4,12), new THREE.Vector3(6,-4,11), new THREE.Vector3(6,-4,-4));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(6,4,12), new THREE.Vector3(6,-4,-4), new THREE.Vector3(6,4,-4));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(6,4,-4), new THREE.Vector3(6,-4,-4), new THREE.Vector3(3,-4,-16));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(6,4,-4), new THREE.Vector3(3,-4,-16), new THREE.Vector3(4.25,6,-10));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(4.25,6,-10), new THREE.Vector3(3,-4,-16), new THREE.Vector3(1.5,0,-22));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(1.5,2,-22), new THREE.Vector3(4.25,6,-10), new THREE.Vector3(1.5,0,-22));
	//Plane Right side
	geometry = divide_and_conquer(geometry, new THREE.Vector3(-6,-4,11), new THREE.Vector3(0,0,17), new THREE.Vector3(-4,2,15));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(-4,2,15), new THREE.Vector3(-6,4,12), new THREE.Vector3(-6,-4,11));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(-6,-4,11), new THREE.Vector3(-6,4,12), new THREE.Vector3(-6,-4,-4));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(-6,-4,-4), new THREE.Vector3(-6,4,12), new THREE.Vector3(-6,4,-4));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(-6,-4,-4), new THREE.Vector3(-6,4,-4), new THREE.Vector3(-3,-4,-16));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(-3,-4,-16), new THREE.Vector3(-6,4,-4), new THREE.Vector3(-4.25,6,-10));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(-3,-4,-16), new THREE.Vector3(-4.25,6,-10), new THREE.Vector3(-1.5,0,-22));
	geometry = divide_and_conquer(geometry, new THREE.Vector3(-4.25,6,-10), new THREE.Vector3(-1.5,2,-22), new THREE.Vector3(-1.5,0,-22));
	for(var j = 0; j < geometry.vertices.length; j=j+6){
		geometry.faces.push(new THREE.Face3(j,j+3,j+5));
		geometry.faces.push(new THREE.Face3(j+3,j+1,j+4));
		geometry.faces.push(new THREE.Face3(j+3,j+4,j+5));
		geometry.faces.push(new THREE.Face3(j+5,j+4,j+2));
	}

	geometry.computeFaceNormals();
	geometry.computeVertexNormals();
    mesh = new THREE.Mesh(geometry, material);

    body.add(mesh)
    body.position.set(x,y,z);
}

function createHolo(holo,x,y,z){

	var cone = new THREE.Object3D();
	geometry = new THREE.ConeGeometry( 2, 5, 32, 1, true );
	material = holo.light_material;
	mesh = new THREE.Mesh( geometry, material );
	cone.add( mesh );
	cone.position.set(0,0,0);

	var sphere = new THREE.Object3D();
	geometry = new THREE.SphereGeometry( 1, 32, 32 );
	material = holo.light_material;
	mesh = new THREE.Mesh( geometry, material );
	sphere.add( mesh );
	sphere.position.set(0,-1,0);


	holo.add(cone);
	holo.add(sphere);
	if(x > 0){
		holo.rotateZ(-Math.PI/4);
	}
	else { holo.rotateZ(Math.PI/4); }
	if(z > 0){
		holo.rotateX(Math.PI/4);
	}
	else { holo.rotateX(-Math.PI/4); }
	holo.position.set(x,y,z);
}

function divide_and_conquer(smaller_geometry,vI,vII,vIII){
	var v1 = new THREE.Vector3((vI.getComponent(0)+vII.getComponent(0))/2,(vI.getComponent(1)+vII.getComponent(1))/2,(vI.getComponent(2)+vII.getComponent(2))/2);
	var v2 = new THREE.Vector3((vII.getComponent(0)+vIII.getComponent(0))/2,(vII.getComponent(1)+vIII.getComponent(1))/2,(vII.getComponent(2)+vIII.getComponent(2))/2);
	var v3 = new THREE.Vector3((vIII.getComponent(0)+vI.getComponent(0))/2,(vIII.getComponent(1)+vI.getComponent(1))/2,(vIII.getComponent(2)+vI.getComponent(2))/2);

	smaller_geometry.vertices.push(vI, vII, vIII, v1, v2, v3);
	return smaller_geometry;
}