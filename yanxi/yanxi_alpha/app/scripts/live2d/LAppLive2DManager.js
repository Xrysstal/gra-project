function LAppLive2DManager() {
    // console.log("--> LAppLive2DManager()");


    this.models = [];


    this.count = -1;
    this.reloadFlg = false;

    Live2D.init();
    Live2DFramework.setPlatformManager(new PlatformManager);

}

LAppLive2DManager.prototype.createModel = function() {


var model = new LAppModel();
this.models.push(model);

return model;
}


LAppLive2DManager.prototype.changeModel = function(gl) {
// console.log("--> LAppLive2DManager.update(gl)");

if (this.reloadFlg) {

    this.reloadFlg = false;
    var no = parseInt(this.count % 5);

    var thisRef = this;
    switch (no) {
    case 0:
        this.releaseModel(1, gl);
        this.releaseModel(0, gl);

        this.createModel();
        this.models[0].load(gl, LAppDefine.MODEL_YANXI);
        break;
    default:
        break;
    }
}
};


LAppLive2DManager.prototype.getModel = function(no) {
// console.log("--> LAppLive2DManager.getModel(" + no + ")");

if (no >= this.models.length) return null;

return this.models[no];
};



LAppLive2DManager.prototype.releaseModel = function(no, gl) {
// console.log("--> LAppLive2DManager.releaseModel(" + no + ")");

if (this.models.length <= no) return;

this.models[no].release(gl);

delete this.models[no];
this.models.splice(no, 1);
};



LAppLive2DManager.prototype.numModels = function() {
return this.models.length;
};



LAppLive2DManager.prototype.setDrag = function(x, y) {
for (var i = 0; i < this.models.length; i++) {
    this.models[i].setDrag(x, y);
}
}



LAppLive2DManager.prototype.maxScaleEvent = function() {
if (LAppDefine.DEBUG_LOG)
    console.log('Max scale event.');
for (var i = 0; i < this.models.length; i++) {
    this.models[i].startRandomMotion(LAppDefine.HIT_AREA_BREAST,
        LAppDefine.PRIORITY_NORMAL);
}
}



LAppLive2DManager.prototype.minScaleEvent = function() {
if (LAppDefine.DEBUG_LOG)
    console.log('Min scale event.');
for (var i = 0; i < this.models.length; i++) {
    this.models[i].startRandomMotion(LAppDefine.HIT_AREA_SKIRT,
        LAppDefine.PRIORITY_NORMAL);
}
}



LAppLive2DManager.prototype.tapEvent = function(x, y) {
if (LAppDefine.DEBUG_LOG)
    console.log('tapEvent view x:' + x + ' y:' + y);

for (var i = 0; i < this.models.length; i++) {

    if (this.models[i].hitTest(LAppDefine.HIT_AREA_HEAD, x, y)) {

        if (LAppDefine.DEBUG_LOG)
            console.log('Tap face.');

        // this.models[i].setRandomExpression();
        this.models[i].startRandomMotion(LAppDefine.HIT_AREA_HEAD,
            LAppDefine.PRIORITY_NORMAL);
    } else if (this.models[i].hitTest(LAppDefine.HIT_AREA_BREAST, x, y)) {

        if (LAppDefine.DEBUG_LOG)
            console.log('Tap HIT_AREA_BREAST.');

        this.models[i].startRandomMotion(LAppDefine.HIT_AREA_BREAST,
            LAppDefine.PRIORITY_NORMAL);
    } else if (this.models[i].hitTest(LAppDefine.HIT_AREA_SKIRT, x, y)) {

        if (LAppDefine.DEBUG_LOG)
            console.log('Tap HIT_AREA_SKIRT.');

        this.models[i].startRandomMotion(LAppDefine.HIT_AREA_SKIRT,
            LAppDefine.PRIORITY_NORMAL);
    } else if (this.models[i].hitTest(LAppDefine.HIT_AREA_HAIR, x, y)) {

        if (LAppDefine.DEBUG_LOG)
            console.log('Tap HIT_AREA_HAIR.');

        this.models[i].startRandomMotion(LAppDefine.HIT_AREA_HAIR,
            LAppDefine.PRIORITY_NORMAL);
    } else if (this.models[i].hitTest(LAppDefine.HIT_AREA_RLEG, x, y)) {

        if (LAppDefine.DEBUG_LOG)
            console.log('Tap HIT_AREA_RLEG.');

        this.models[i].startRandomMotion(LAppDefine.HIT_AREA_RLEG,
            LAppDefine.PRIORITY_NORMAL);
    } else if (this.models[i].hitTest(LAppDefine.HIT_AREA_LLEG, x, y)) {

        if (LAppDefine.DEBUG_LOG)
            console.log('Tap HIT_AREA_LLEG.');

        this.models[i].startRandomMotion(LAppDefine.HIT_AREA_LLEG,
            LAppDefine.PRIORITY_NORMAL);
    } else if (this.models[i].hitTest(LAppDefine.HIT_AREA_ARMR, x, y)) {

        if (LAppDefine.DEBUG_LOG)
            console.log('Tap HIT_AREA_ARMR.');

        this.models[i].startRandomMotion(LAppDefine.HIT_AREA_ARMR,
            LAppDefine.PRIORITY_NORMAL);
    } else if (this.models[i].hitTest(LAppDefine.HIT_AREA_ARML, x, y)) {

        if (LAppDefine.DEBUG_LOG)
            console.log('Tap HIT_AREA_ARML.');

        this.models[i].startRandomMotion(LAppDefine.HIT_AREA_ARML,
            LAppDefine.PRIORITY_NORMAL);
    }
}

return true;
};

