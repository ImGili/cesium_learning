import * as Cesium from 'cesium';
import "/node_modules/cesium/Source/Widgets/widgets.css"

const cesiumContainer = document.createElement('div');
cesiumContainer.id = "cesiumContainer";
document.body.appendChild(cesiumContainer)

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzYmFjZGI5Ny0yM2RjLTRlZWUtYWVkMS1lODI0N2FiZjVlNTIiLCJpZCI6ODgxMDQsImlhdCI6MTY0ODg5ODM3Nn0.xbWbDzDLSjZNUgNTiV-ncvBRecBaYBiEM8SE6cC16kI';

const viewer = Cesium.Viewer("cesiumContainer")