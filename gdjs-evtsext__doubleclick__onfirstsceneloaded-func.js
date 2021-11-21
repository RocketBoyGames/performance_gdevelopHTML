gdjs.evtsExt__DoubleClick__onFirstSceneLoaded = {};

gdjs.evtsExt__DoubleClick__onFirstSceneLoaded.conditionTrue_0 = {val:false};
gdjs.evtsExt__DoubleClick__onFirstSceneLoaded.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DoubleClick__onFirstSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{runtimeScene.getGame().getVariables().get("__DoubleClick_MaxDelay").setNumber(0.5);
}}

}


};

gdjs.evtsExt__DoubleClick__onFirstSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
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


gdjs.evtsExt__DoubleClick__onFirstSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);
return;
}


gdjs.registerFirstRuntimeSceneLoadedCallback(function(runtimeScene) {
    gdjs.evtsExt__DoubleClick__onFirstSceneLoaded.func(runtimeScene, runtimeScene);
});
