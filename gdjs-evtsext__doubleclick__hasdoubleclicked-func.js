gdjs.evtsExt__DoubleClick__HasDoubleClicked = {};

gdjs.evtsExt__DoubleClick__HasDoubleClicked.conditionTrue_0 = {val:false};
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition3IsTrue_0 = {val:false};
gdjs.evtsExt__DoubleClick__HasDoubleClicked.conditionTrue_1 = {val:false};
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition2IsTrue_1 = {val:false};
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition3IsTrue_1 = {val:false};


gdjs.evtsExt__DoubleClick__HasDoubleClicked.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition1IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__DoubleClick_LeftCount")) == 0;
}if ( gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__DoubleClick_LeftReleased")) == 0;
}if ( gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__DoubleClick__HasDoubleClicked.conditionTrue_1 = gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition2IsTrue_0;
gdjs.evtsExt__DoubleClick__HasDoubleClicked.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(20343348);
}
}}
}
if (gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "__DoubleClick_LeftClickTimer");
}{runtimeScene.getVariables().get("__DoubleClick_LeftCount").add(1);
}{runtimeScene.getVariables().get("__DoubleClick_LeftReleased").setNumber(1);
}}

}


{


gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition1IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__DoubleClick_LeftCount")) == 1;
}if ( gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__DoubleClick_LeftReleased")) == 0;
}if ( gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__DoubleClick__HasDoubleClicked.conditionTrue_1 = gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition2IsTrue_0;
gdjs.evtsExt__DoubleClick__HasDoubleClicked.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(20344932);
}
}}
}
if (gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition2IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}{runtimeScene.getVariables().get("__DoubleClick_LeftReleased").setNumber(1);
}}

}


};gdjs.evtsExt__DoubleClick__HasDoubleClicked.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__DoubleClick_MaxDelay")), "__DoubleClick_LeftClickTimer");
}if ( gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__DoubleClick__HasDoubleClicked.conditionTrue_1 = gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition1IsTrue_0;
gdjs.evtsExt__DoubleClick__HasDoubleClicked.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(20339988);
}
}}
if (gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "__DoubleClick_LeftClickTimer");
}{runtimeScene.getVariables().get("__DoubleClick_LeftCount").setNumber(0);
}}

}


{


gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("__DoubleClick_LeftReleased").setNumber(0);
}}

}


{


gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val = !(gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__DoubleClick_MaxDelay")), "__DoubleClick_LeftClickTimer"));
}if ( gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition1IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__DoubleClick__HasDoubleClicked.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__DoubleClick__HasDoubleClicked.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition1IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__DoubleClick_MiddleCount")) == 0;
}if ( gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__DoubleClick_MiddleReleased")) == 0;
}if ( gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__DoubleClick__HasDoubleClicked.conditionTrue_1 = gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition2IsTrue_0;
gdjs.evtsExt__DoubleClick__HasDoubleClicked.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(20349588);
}
}}
}
if (gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "__DoubleClick_MiddleClickTimer");
}{runtimeScene.getVariables().get("__DoubleClick_MiddleCount").add(1);
}{runtimeScene.getVariables().get("__DoubleClick_MiddleReleased").setNumber(1);
}}

}


{


gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition1IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__DoubleClick_MiddleCount")) == 1;
}if ( gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__DoubleClick_MiddleReleased")) == 0;
}if ( gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__DoubleClick__HasDoubleClicked.conditionTrue_1 = gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition2IsTrue_0;
gdjs.evtsExt__DoubleClick__HasDoubleClicked.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(20351212);
}
}}
}
if (gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition2IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}{runtimeScene.getVariables().get("__DoubleClick_MiddleReleased").setNumber(1);
}}

}


};gdjs.evtsExt__DoubleClick__HasDoubleClicked.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__DoubleClick_MaxDelay")), "__DoubleClick_MiddleClickTimer");
}if ( gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__DoubleClick__HasDoubleClicked.conditionTrue_1 = gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition1IsTrue_0;
gdjs.evtsExt__DoubleClick__HasDoubleClicked.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(20346532);
}
}}
if (gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "__DoubleClick_MiddleClickTimer");
}{runtimeScene.getVariables().get("__DoubleClick_MiddleCount").setNumber(0);
}}

}


{


gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Middle");
}if (gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("__DoubleClick_MiddleReleased").setNumber(0);
}}

}


{


gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val = !(gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__DoubleClick_MaxDelay")), "__DoubleClick_MiddleClickTimer"));
}if ( gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Middle");
}}
if (gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition1IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__DoubleClick__HasDoubleClicked.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__DoubleClick__HasDoubleClicked.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition1IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__DoubleClick_RightCount")) == 0;
}if ( gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__DoubleClick_RightReleased")) == 0;
}if ( gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__DoubleClick__HasDoubleClicked.conditionTrue_1 = gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition2IsTrue_0;
gdjs.evtsExt__DoubleClick__HasDoubleClicked.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(20355844);
}
}}
}
if (gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "__DoubleClick_RightClickTimer");
}{runtimeScene.getVariables().get("__DoubleClick_RightCount").add(1);
}{runtimeScene.getVariables().get("__DoubleClick_RightReleased").setNumber(1);
}}

}


{


gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition1IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__DoubleClick_RightCount")) == 1;
}if ( gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__DoubleClick_RightReleased")) == 0;
}if ( gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__DoubleClick__HasDoubleClicked.conditionTrue_1 = gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition2IsTrue_0;
gdjs.evtsExt__DoubleClick__HasDoubleClicked.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(20357428);
}
}}
}
if (gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition2IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}{runtimeScene.getVariables().get("__DoubleClick_RightReleased").setNumber(1);
}}

}


};gdjs.evtsExt__DoubleClick__HasDoubleClicked.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__DoubleClick_MaxDelay")), "__DoubleClick_RightClickTimer");
}if ( gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__DoubleClick__HasDoubleClicked.conditionTrue_1 = gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition1IsTrue_0;
gdjs.evtsExt__DoubleClick__HasDoubleClicked.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(20352484);
}
}}
if (gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "__DoubleClick_RightClickTimer");
}{runtimeScene.getVariables().get("__DoubleClick_RightCount").setNumber(0);
}}

}


{


gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
}if (gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("__DoubleClick_RightReleased").setNumber(0);
}}

}


{


gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val = false;
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val = !(gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__DoubleClick_MaxDelay")), "__DoubleClick_RightClickTimer"));
}if ( gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
}}
if (gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition1IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__DoubleClick__HasDoubleClicked.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__DoubleClick__HasDoubleClicked.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__DoubleClick__HasDoubleClicked.conditionTrue_1 = gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0;
gdjs.evtsExt__DoubleClick__HasDoubleClicked.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MouseButton") : "") == "Left");
}
}if (gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__DoubleClick__HasDoubleClicked.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__DoubleClick__HasDoubleClicked.conditionTrue_1 = gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0;
gdjs.evtsExt__DoubleClick__HasDoubleClicked.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MouseButton") : "") == "Middle");
}
}if (gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__DoubleClick__HasDoubleClicked.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__DoubleClick__HasDoubleClicked.conditionTrue_1 = gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0;
gdjs.evtsExt__DoubleClick__HasDoubleClicked.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MouseButton") : "") == "Right");
}
}if (gdjs.evtsExt__DoubleClick__HasDoubleClicked.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__DoubleClick__HasDoubleClicked.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__DoubleClick__HasDoubleClicked.func = function(runtimeScene, MouseButton, parentEventsFunctionContext) {
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
if (argName === "MouseButton") return MouseButton;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__DoubleClick__HasDoubleClicked.eventsList6(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}

