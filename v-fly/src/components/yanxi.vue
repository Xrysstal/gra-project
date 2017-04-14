<template>
  <div class="content">
      <!-- 顶部 -->
      <div class="logo"> </div>
      
      <!-- 底部 -->
      <footer>
        <a href="javascript:goApplication()">
          <img class="le-foot" src="images/2x/sqnc@2x.png">
        </a>
        <a href="/">
          <img class="ri-foot" src="images/2x/xnyc_a@2x.png">
        </a>
      </footer>
        <!-- live2d -->
        <canvas id="glcanvas"> </canvas>
      </div>
</template>
<!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
      <!-- build:js scripts/vendor.js -->
      <!-- bower:js -->
      <!-- endbower -->
      <!-- endbuild -->
      <!-- build:js scripts/plugins.js -->
      <script src="scripts/live2d.min.js"></script>
      <script src="scripts/Live2DFramework.js"></script>
      <script src="scripts/live2d/utils/MatrixStack.js"></script>
      <script src="scripts/live2d/utils/ModelSettingJson.js"></script>
      <script src="scripts/live2d/PlatformManager.js"></script>
      <script src="scripts/live2d/LAppDefine.js"></script>
      <script src="scripts/live2d/LAppModel.js"></script>
      <script src="scripts/live2d/LAppLive2DManager.js"></script>
      <!-- endbuild -->
      
      <!-- build:js scripts/main.js -->
      <script src="scripts/main.js"></script>
      <!-- endbuild -->
      <!-- build:js scripts/SampleApp1.js -->
      <script src="scripts/live2d/SampleApp1.js"></script>
      <!-- endbuild -->
<script>
import main from '../styles/main'
import live2d from '../scripts/live2d.min'
import Live2DFramework from '../scripts/Live2DFramework'
import MatrixStack from '../scripts/live2d/utils/MatrixStack'
import ModelSettingJson from '../scripts/live2d/utils/ModelSettingJson'
import PlatformManager from '../scripts/live2d/PlatformManager'
import LAppDefine from '../scripts/live2d/LAppDefine'
import LAppModel from '../scripts/live2d/LAppModel'
import LAppLive2DManager from '../scripts/live2d/LAppLive2DManager'
import main from '../scripts/main'
import SampleApp1 from '../scripts/live2d/SampleApp1'

    // "lint": "eslint --ext .js,.vue src test/unit/specs test/e2e/specs"
    // "babel-eslint": "^6.1.2",

    // "eslint": "^2.10.2",
    // "eslint-config-standard": "^5.1.0",
    // "eslint-friendly-formatter": "^2.0.5",
    // "eslint-loader": "^1.3.0",
    // "eslint-plugin-html": "^1.3.0",
    // "eslint-plugin-promise": "^1.0.8",
    // "eslint-plugin-standard": "^1.3.2",
</script>
