const cameraConstants = {
    fieldOfView: 75,
    width: 800,
    height: 600,
}

const scene = new THREE.Scene();

const boxGeo = new THREE.BoxGeometry(1, 1, 1);

const material = new THREE.MeshBasicMaterial({color: 'red'});

const mesh = new THREE.Mesh(boxGeo, material);

scene.add(mesh);

const camera = new THREE.PerspectiveCamera(cameraConstants.fieldOfView, cameraConstants.width/cameraConstants.height);

camera.position.z = 2;
camera.position.x = 2;

scene.add(camera);

const canvas = document.querySelector('.canvas');

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(cameraConstants.width, cameraConstants.height);

renderer.render(scene, camera);



