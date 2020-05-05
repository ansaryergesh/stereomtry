import React, {Component} from 'react';
import * as THREE from "three";
import MTLLoader from "three-mtl-loader";
import OBJLoader from "three-obj-loader";
import OrbitControls from 'three-orbitcontrols';
OBJLoader(THREE);

class ThreeObj extends Component {
    componentDidMount() {
                var scene = new THREE.Scene();

        var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 100000 );
        camera.position.z = 995;

        var renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

        var controls = new  OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.enableZoom = true;

        var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 100%)'), 1.0);
        keyLight.position.set(-100, 0, 100);

        var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
        fillLight.position.set(100, 0, 100);

        var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
        backLight.position.set(100, 0, -100).normalize();

        scene.add(keyLight);
        scene.add(fillLight);
        scene.add(backLight);

        var mtlLoader = new MTLLoader();
        mtlLoader.setTexturePath('/src/assets/obj/');
        mtlLoader.setPath('/src/assets/obj/');
        mtlLoader.load('r2-d2.mtl', function (materials) {

            materials.preload();
            var objLoader = new OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.setPath('/src/assets/obj/');
            objLoader.load('1.obj', function (object) {

                scene.add(object);
                object.position.y -= 60;

            });

        });

        var animate = function () {
            requestAnimationFrame( animate );
            controls.update();
            renderer.render(scene, camera);
        };

        animate();
    }

    render() {
        return (
          <div ref={ref => (this.mount = ref)} />
        )
      }
    
}

export default ThreeObj;