gdjs.evtsExt__SpriteMasking__Mask = {};
gdjs.evtsExt__SpriteMasking__Mask.GDMaskedObjects1= [];
gdjs.evtsExt__SpriteMasking__Mask.GDMaskObjects1= [];

gdjs.evtsExt__SpriteMasking__Mask.conditionTrue_0 = {val:false};
gdjs.evtsExt__SpriteMasking__Mask.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__SpriteMasking__Mask.userFunc0x2e19660 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const maskObject = eventsFunctionContext.getObjects("Mask")[0];
if (!maskObject) return;

const maskedObjects = eventsFunctionContext.getObjects("Masked");
for (const maskedObject of maskedObjects) {
    const maskedRenderer = maskedObject.getRendererObject(); 
    maskedRenderer.mask = maskObject.getRendererObject();
}


};
gdjs.evtsExt__SpriteMasking__Mask.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


var objects = [];
gdjs.evtsExt__SpriteMasking__Mask.userFunc0x2e19660(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__SpriteMasking__Mask.func = function(runtimeScene, Masked, Mask, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Masked": Masked
, "Mask": Mask
},
  _objectArraysMap: {
"Masked": gdjs.objectsListsToArray(Masked)
, "Mask": gdjs.objectsListsToArray(Mask)
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__SpriteMasking__Mask.GDMaskedObjects1.length = 0;
gdjs.evtsExt__SpriteMasking__Mask.GDMaskObjects1.length = 0;

gdjs.evtsExt__SpriteMasking__Mask.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

