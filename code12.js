gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDcollision2Objects1_1final = [];

gdjs.New_32sceneCode.GDcollisionsObjects1_1final = [];

gdjs.New_32sceneCode.GDplayerTestBounceObjects1_1final = [];

gdjs.New_32sceneCode.GDEmilyObjects1= [];
gdjs.New_32sceneCode.GDEmilyObjects2= [];
gdjs.New_32sceneCode.GDPlayerObjects1= [];
gdjs.New_32sceneCode.GDPlayerObjects2= [];
gdjs.New_32sceneCode.GDbuttonsObjects1= [];
gdjs.New_32sceneCode.GDbuttonsObjects2= [];
gdjs.New_32sceneCode.GDhungerThirstObjects1= [];
gdjs.New_32sceneCode.GDhungerThirstObjects2= [];
gdjs.New_32sceneCode.GDhotspots2Objects1= [];
gdjs.New_32sceneCode.GDhotspots2Objects2= [];
gdjs.New_32sceneCode.GDhotspotsObjects1= [];
gdjs.New_32sceneCode.GDhotspotsObjects2= [];
gdjs.New_32sceneCode.GDfollowPlayerObjects1= [];
gdjs.New_32sceneCode.GDfollowPlayerObjects2= [];
gdjs.New_32sceneCode.GDcollisionsObjects1= [];
gdjs.New_32sceneCode.GDcollisionsObjects2= [];
gdjs.New_32sceneCode.GDFGObjects1= [];
gdjs.New_32sceneCode.GDFGObjects2= [];
gdjs.New_32sceneCode.GDBGObjects1= [];
gdjs.New_32sceneCode.GDBGObjects2= [];
gdjs.New_32sceneCode.GDCursorObjects1= [];
gdjs.New_32sceneCode.GDCursorObjects2= [];
gdjs.New_32sceneCode.GDIconbarHotspotObjects1= [];
gdjs.New_32sceneCode.GDIconbarHotspotObjects2= [];
gdjs.New_32sceneCode.GDempty_95slotObjects1= [];
gdjs.New_32sceneCode.GDempty_95slotObjects2= [];
gdjs.New_32sceneCode.GDinventory_95slotObjects1= [];
gdjs.New_32sceneCode.GDinventory_95slotObjects2= [];
gdjs.New_32sceneCode.GDinventory_95maskObjects1= [];
gdjs.New_32sceneCode.GDinventory_95maskObjects2= [];
gdjs.New_32sceneCode.GDinventory_95backgroundObjects1= [];
gdjs.New_32sceneCode.GDinventory_95backgroundObjects2= [];
gdjs.New_32sceneCode.GDhotspot_95name_95cursorObjects1= [];
gdjs.New_32sceneCode.GDhotspot_95name_95cursorObjects2= [];
gdjs.New_32sceneCode.GDhotspot_95nameObjects1= [];
gdjs.New_32sceneCode.GDhotspot_95nameObjects2= [];
gdjs.New_32sceneCode.GDFullscreenObjects1= [];
gdjs.New_32sceneCode.GDFullscreenObjects2= [];
gdjs.New_32sceneCode.GDnarrator_95text_95boxObjects1= [];
gdjs.New_32sceneCode.GDnarrator_95text_95boxObjects2= [];
gdjs.New_32sceneCode.GDnarrator_95textObjects1= [];
gdjs.New_32sceneCode.GDnarrator_95textObjects2= [];
gdjs.New_32sceneCode.GDcoin_95quantity_95storageObjects1= [];
gdjs.New_32sceneCode.GDcoin_95quantity_95storageObjects2= [];
gdjs.New_32sceneCode.GDremove_95coinObjects1= [];
gdjs.New_32sceneCode.GDremove_95coinObjects2= [];
gdjs.New_32sceneCode.GDinteractingWithObjects1= [];
gdjs.New_32sceneCode.GDinteractingWithObjects2= [];
gdjs.New_32sceneCode.GDanimationObjects1= [];
gdjs.New_32sceneCode.GDanimationObjects2= [];
gdjs.New_32sceneCode.GDNewObject2Objects1= [];
gdjs.New_32sceneCode.GDNewObject2Objects2= [];
gdjs.New_32sceneCode.GDplayerTestBounceObjects1= [];
gdjs.New_32sceneCode.GDplayerTestBounceObjects2= [];
gdjs.New_32sceneCode.GDcollision2Objects1= [];
gdjs.New_32sceneCode.GDcollision2Objects2= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_0 = {val:false};
gdjs.New_32sceneCode.conditionTrue_1 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_1 = {val:false};


gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDplayerTestBounceObjects2Objects = Hashtable.newFrom({"playerTestBounce": gdjs.New_32sceneCode.GDplayerTestBounceObjects2});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDcollisionsObjects2Objects = Hashtable.newFrom({"collisions": gdjs.New_32sceneCode.GDcollisionsObjects2});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDplayerTestBounceObjects2Objects = Hashtable.newFrom({"playerTestBounce": gdjs.New_32sceneCode.GDplayerTestBounceObjects2});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDcollision2Objects2Objects = Hashtable.newFrom({"collision2": gdjs.New_32sceneCode.GDcollision2Objects2});gdjs.New_32sceneCode.eventsList0 = function(runtimeScene) {

{



}


{



}


{



}


{



}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("playerTestBounce"), gdjs.New_32sceneCode.GDplayerTestBounceObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDplayerTestBounceObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDplayerTestBounceObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}}

}


{

gdjs.New_32sceneCode.GDcollision2Objects1.length = 0;

gdjs.New_32sceneCode.GDcollisionsObjects1.length = 0;

gdjs.New_32sceneCode.GDplayerTestBounceObjects1.length = 0;


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition0IsTrue_0;
gdjs.New_32sceneCode.GDcollision2Objects1_1final.length = 0;gdjs.New_32sceneCode.GDcollisionsObjects1_1final.length = 0;gdjs.New_32sceneCode.GDplayerTestBounceObjects1_1final.length = 0;gdjs.New_32sceneCode.condition0IsTrue_1.val = false;
gdjs.New_32sceneCode.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("collisions"), gdjs.New_32sceneCode.GDcollisionsObjects2);
gdjs.copyArray(runtimeScene.getObjects("playerTestBounce"), gdjs.New_32sceneCode.GDplayerTestBounceObjects2);
gdjs.New_32sceneCode.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDplayerTestBounceObjects2Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDcollisionsObjects2Objects, false, runtimeScene, false);
if( gdjs.New_32sceneCode.condition0IsTrue_1.val ) {
    gdjs.New_32sceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.New_32sceneCode.GDcollisionsObjects2.length;j<jLen;++j) {
        if ( gdjs.New_32sceneCode.GDcollisionsObjects1_1final.indexOf(gdjs.New_32sceneCode.GDcollisionsObjects2[j]) === -1 )
            gdjs.New_32sceneCode.GDcollisionsObjects1_1final.push(gdjs.New_32sceneCode.GDcollisionsObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.New_32sceneCode.GDplayerTestBounceObjects2.length;j<jLen;++j) {
        if ( gdjs.New_32sceneCode.GDplayerTestBounceObjects1_1final.indexOf(gdjs.New_32sceneCode.GDplayerTestBounceObjects2[j]) === -1 )
            gdjs.New_32sceneCode.GDplayerTestBounceObjects1_1final.push(gdjs.New_32sceneCode.GDplayerTestBounceObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("collision2"), gdjs.New_32sceneCode.GDcollision2Objects2);
gdjs.copyArray(runtimeScene.getObjects("playerTestBounce"), gdjs.New_32sceneCode.GDplayerTestBounceObjects2);
gdjs.New_32sceneCode.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDplayerTestBounceObjects2Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDcollision2Objects2Objects, false, runtimeScene, false);
if( gdjs.New_32sceneCode.condition1IsTrue_1.val ) {
    gdjs.New_32sceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.New_32sceneCode.GDcollision2Objects2.length;j<jLen;++j) {
        if ( gdjs.New_32sceneCode.GDcollision2Objects1_1final.indexOf(gdjs.New_32sceneCode.GDcollision2Objects2[j]) === -1 )
            gdjs.New_32sceneCode.GDcollision2Objects1_1final.push(gdjs.New_32sceneCode.GDcollision2Objects2[j]);
    }
    for(var j = 0, jLen = gdjs.New_32sceneCode.GDplayerTestBounceObjects2.length;j<jLen;++j) {
        if ( gdjs.New_32sceneCode.GDplayerTestBounceObjects1_1final.indexOf(gdjs.New_32sceneCode.GDplayerTestBounceObjects2[j]) === -1 )
            gdjs.New_32sceneCode.GDplayerTestBounceObjects1_1final.push(gdjs.New_32sceneCode.GDplayerTestBounceObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.New_32sceneCode.GDcollision2Objects1_1final, gdjs.New_32sceneCode.GDcollision2Objects1);
gdjs.copyArray(gdjs.New_32sceneCode.GDcollisionsObjects1_1final, gdjs.New_32sceneCode.GDcollisionsObjects1);
gdjs.copyArray(gdjs.New_32sceneCode.GDplayerTestBounceObjects1_1final, gdjs.New_32sceneCode.GDplayerTestBounceObjects1);
}
}
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition1IsTrue_0;
gdjs.New_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(29288140);
}
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDplayerTestBounceObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDplayerTestBounceObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDplayerTestBounceObjects1[i].getBehavior("Tween").addObjectPositionTween("bounce pedro", (gdjs.New_32sceneCode.GDplayerTestBounceObjects1[i].getPointX("")), (gdjs.New_32sceneCode.GDplayerTestBounceObjects1[i].getPointY("")) + 10, "easeOutBack", 50, false);
}
}}

}


{



}


};

gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDEmilyObjects1.length = 0;
gdjs.New_32sceneCode.GDEmilyObjects2.length = 0;
gdjs.New_32sceneCode.GDPlayerObjects1.length = 0;
gdjs.New_32sceneCode.GDPlayerObjects2.length = 0;
gdjs.New_32sceneCode.GDbuttonsObjects1.length = 0;
gdjs.New_32sceneCode.GDbuttonsObjects2.length = 0;
gdjs.New_32sceneCode.GDhungerThirstObjects1.length = 0;
gdjs.New_32sceneCode.GDhungerThirstObjects2.length = 0;
gdjs.New_32sceneCode.GDhotspots2Objects1.length = 0;
gdjs.New_32sceneCode.GDhotspots2Objects2.length = 0;
gdjs.New_32sceneCode.GDhotspotsObjects1.length = 0;
gdjs.New_32sceneCode.GDhotspotsObjects2.length = 0;
gdjs.New_32sceneCode.GDfollowPlayerObjects1.length = 0;
gdjs.New_32sceneCode.GDfollowPlayerObjects2.length = 0;
gdjs.New_32sceneCode.GDcollisionsObjects1.length = 0;
gdjs.New_32sceneCode.GDcollisionsObjects2.length = 0;
gdjs.New_32sceneCode.GDFGObjects1.length = 0;
gdjs.New_32sceneCode.GDFGObjects2.length = 0;
gdjs.New_32sceneCode.GDBGObjects1.length = 0;
gdjs.New_32sceneCode.GDBGObjects2.length = 0;
gdjs.New_32sceneCode.GDCursorObjects1.length = 0;
gdjs.New_32sceneCode.GDCursorObjects2.length = 0;
gdjs.New_32sceneCode.GDIconbarHotspotObjects1.length = 0;
gdjs.New_32sceneCode.GDIconbarHotspotObjects2.length = 0;
gdjs.New_32sceneCode.GDempty_95slotObjects1.length = 0;
gdjs.New_32sceneCode.GDempty_95slotObjects2.length = 0;
gdjs.New_32sceneCode.GDinventory_95slotObjects1.length = 0;
gdjs.New_32sceneCode.GDinventory_95slotObjects2.length = 0;
gdjs.New_32sceneCode.GDinventory_95maskObjects1.length = 0;
gdjs.New_32sceneCode.GDinventory_95maskObjects2.length = 0;
gdjs.New_32sceneCode.GDinventory_95backgroundObjects1.length = 0;
gdjs.New_32sceneCode.GDinventory_95backgroundObjects2.length = 0;
gdjs.New_32sceneCode.GDhotspot_95name_95cursorObjects1.length = 0;
gdjs.New_32sceneCode.GDhotspot_95name_95cursorObjects2.length = 0;
gdjs.New_32sceneCode.GDhotspot_95nameObjects1.length = 0;
gdjs.New_32sceneCode.GDhotspot_95nameObjects2.length = 0;
gdjs.New_32sceneCode.GDFullscreenObjects1.length = 0;
gdjs.New_32sceneCode.GDFullscreenObjects2.length = 0;
gdjs.New_32sceneCode.GDnarrator_95text_95boxObjects1.length = 0;
gdjs.New_32sceneCode.GDnarrator_95text_95boxObjects2.length = 0;
gdjs.New_32sceneCode.GDnarrator_95textObjects1.length = 0;
gdjs.New_32sceneCode.GDnarrator_95textObjects2.length = 0;
gdjs.New_32sceneCode.GDcoin_95quantity_95storageObjects1.length = 0;
gdjs.New_32sceneCode.GDcoin_95quantity_95storageObjects2.length = 0;
gdjs.New_32sceneCode.GDremove_95coinObjects1.length = 0;
gdjs.New_32sceneCode.GDremove_95coinObjects2.length = 0;
gdjs.New_32sceneCode.GDinteractingWithObjects1.length = 0;
gdjs.New_32sceneCode.GDinteractingWithObjects2.length = 0;
gdjs.New_32sceneCode.GDanimationObjects1.length = 0;
gdjs.New_32sceneCode.GDanimationObjects2.length = 0;
gdjs.New_32sceneCode.GDNewObject2Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject2Objects2.length = 0;
gdjs.New_32sceneCode.GDplayerTestBounceObjects1.length = 0;
gdjs.New_32sceneCode.GDplayerTestBounceObjects2.length = 0;
gdjs.New_32sceneCode.GDcollision2Objects1.length = 0;
gdjs.New_32sceneCode.GDcollision2Objects2.length = 0;

gdjs.New_32sceneCode.eventsList0(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
