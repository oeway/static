(function(){var P$=Clazz.newPackage("net.imagej.display"),p$1={},I$=[[0,'org.scijava.util.RealCoords','java.util.ArrayList','java.util.Collections','org.scijava.input.MouseCursor','org.scijava.util.IntCoords','net.imagej.display.event.ViewportResizeEvent','net.imagej.display.event.MouseCursorEvent','net.imagej.display.event.PanZoomEvent','java.util.Arrays']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultImageCanvas", null, null, 'net.imagej.display.ImageCanvas');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.DATA_ZERO=Clazz.new_($I$(1,1).c$$D$D,[0, 0]);
{
var midLevelZooms=Clazz.new_(1,{E:"Double"},$I$(2,1));
midLevelZooms.add$TE(new Double(0.03125));
midLevelZooms.add$TE(new Double(0.041666666666666664));
midLevelZooms.add$TE(new Double(0.0625));
midLevelZooms.add$TE(new Double(0.08333333333333333));
midLevelZooms.add$TE(new Double(0.125));
midLevelZooms.add$TE(new Double(0.16666666666666666));
midLevelZooms.add$TE(new Double(0.25));
midLevelZooms.add$TE(new Double(0.3333333333333333));
midLevelZooms.add$TE(new Double(0.5));
midLevelZooms.add$TE(new Double(0.75));
midLevelZooms.add$TE(new Double(1.0));
midLevelZooms.add$TE(new Double(1.5));
midLevelZooms.add$TE(new Double(2.0));
midLevelZooms.add$TE(new Double(3.0));
midLevelZooms.add$TE(new Double(4.0));
midLevelZooms.add$TE(new Double(6.0));
midLevelZooms.add$TE(new Double(8.0));
midLevelZooms.add$TE(new Double(12.0));
midLevelZooms.add$TE(new Double(16.0));
midLevelZooms.add$TE(new Double(24.0));
midLevelZooms.add$TE(new Double(32.0));
var EXTRA_ZOOMS=30;
var loZooms=Clazz.new_(1,{E:"Double"},$I$(2,1));
var prevDenom=1 / (midLevelZooms.get$I(0)).valueOf();
for (var i=0; i < 30; i++) {
var newDenom=prevDenom + 16;
loZooms.add$TE(new Double(1 / newDenom));
prevDenom=newDenom;
}
$I$(3).reverse$java_util_List(loZooms);
var hiZooms=Clazz.new_(1,{E:"Double"},$I$(2,1));
var prevNumer=(midLevelZooms.get$I(midLevelZooms.size$() - 1)).valueOf();
for (var i=0; i < 30; i++) {
var newNumer=prevNumer + 16;
hiZooms.add$TE(new Double(newNumer / 1));
prevNumer=newNumer;
}
var combinedZoomLevels=Clazz.new_(1,{E:"Double"},$I$(2,1));
combinedZoomLevels.addAll$java_util_Collection(loZooms);
combinedZoomLevels.addAll$java_util_Collection(midLevelZooms);
combinedZoomLevels.addAll$java_util_Collection(hiZooms);
C$.defaultZooms=Clazz.array(Double.TYPE, [combinedZoomLevels.size$()]);
for (var i=0; i < C$.defaultZooms.length; i++) C$.defaultZooms[i]=(combinedZoomLevels.get$I(i)).valueOf();

C$.maxZoom=(hiZooms.get$I(hiZooms.size$() - 1)).valueOf();
};
}

Clazz.newMeth(C$, '$init$', function () {
this.initialScale=1;
this.scale=1.0;
}, 1);

C$.$fields$=[['D',['initialScale','scale'],'O',['display','net.imagej.display.ImageDisplay','viewportSize','org.scijava.util.IntCoords','zoomLevels','double[]','log','org.scijava.log.LogService','eventService','org.scijava.event.EventService','mouseCursor','org.scijava.input.MouseCursor','panCenter','org.scijava.util.RealCoords']]
,['D',['maxZoom'],'O',['DATA_ZERO','org.scijava.util.RealCoords','defaultZooms','double[]']]]

Clazz.newMeth(C$, 'c$$net_imagej_display_ImageDisplay', function (display) {
;C$.$init$.apply(this);
display.getContext$().inject$O(this);
this.display=display;
this.mouseCursor=$I$(4).DEFAULT;
this.viewportSize=Clazz.new_($I$(5,1).c$$I$I,[100, 100]);
this.zoomLevels=C$.validatedZoomLevels$DA(C$.defaultZooms);
}, 1);

Clazz.newMeth(C$, 'getDisplay$', function () {
return this.display;
});

Clazz.newMeth(C$, 'getViewportWidth$', function () {
return this.viewportSize.x;
});

Clazz.newMeth(C$, 'getViewportHeight$', function () {
return this.viewportSize.y;
});

Clazz.newMeth(C$, 'setViewportSize$I$I', function (width, height) {
this.viewportSize.x=width;
this.viewportSize.y=height;
if (this.eventService != null ) {
this.eventService.publish$TE(Clazz.new_($I$(6,1).c$$net_imagej_display_ImageCanvas,[this]));
}});

Clazz.newMeth(C$, 'isInImage$org_scijava_util_IntCoords', function (point) {
var dataCoords=this.panelToDataCoords$org_scijava_util_IntCoords(point);
return this.getDisplay$().getPlaneExtents$().contains$org_scijava_util_RealCoords(dataCoords);
});

Clazz.newMeth(C$, 'panelToDataCoords$org_scijava_util_IntCoords', function (panelCoords) {
var dataX=panelCoords.x / this.getZoomFactor$() + p$1.getLeftImageX.apply(this, []);
var dataY=panelCoords.y / this.getZoomFactor$() + p$1.getTopImageY.apply(this, []);
return Clazz.new_($I$(1,1).c$$D$D,[dataX, dataY]);
});

Clazz.newMeth(C$, 'dataToPanelCoords$org_scijava_util_RealCoords', function (dataCoords) {
var panelX=(Math.round(this.getZoomFactor$() * (dataCoords.x - p$1.getLeftImageX.apply(this, [])))|0);
var panelY=(Math.round(this.getZoomFactor$() * (dataCoords.y - p$1.getTopImageY.apply(this, [])))|0);
return Clazz.new_($I$(5,1).c$$I$I,[panelX, panelY]);
});

Clazz.newMeth(C$, 'getCursor$', function () {
return this.mouseCursor;
});

Clazz.newMeth(C$, 'setCursor$org_scijava_input_MouseCursor', function (cursor) {
this.mouseCursor=cursor;
if (this.eventService != null ) this.eventService.publish$TE(Clazz.new_($I$(7,1).c$$net_imagej_display_ImageCanvas,[this]));
});

Clazz.newMeth(C$, 'getPanCenter$', function () {
if (this.panCenter == null ) {
this.panReset$();
}if (this.panCenter == null ) throw Clazz.new_(Clazz.load('IllegalStateException'));
return Clazz.new_($I$(1,1).c$$D$D,[this.panCenter.x, this.panCenter.y]);
});

Clazz.newMeth(C$, 'getPanOffset$', function () {
var offset=this.dataToPanelCoords$org_scijava_util_RealCoords(C$.DATA_ZERO);
offset.x=-offset.x;
offset.y=-offset.y;
return offset;
});

Clazz.newMeth(C$, 'setPanCenter$org_scijava_util_RealCoords', function (center) {
if (this.panCenter == null ) {
this.panCenter=Clazz.new_($I$(1,1).c$$D$D,[center.x, center.y]);
} else {
this.panCenter.x=center.x;
this.panCenter.y=center.y;
}p$1.publishPanZoomEvent.apply(this, []);
});

Clazz.newMeth(C$, 'setPanCenter$org_scijava_util_IntCoords', function (center) {
this.setPanCenter$org_scijava_util_RealCoords(this.panelToDataCoords$org_scijava_util_IntCoords(center));
});

Clazz.newMeth(C$, 'pan$org_scijava_util_RealCoords', function (delta) {
var centerX=this.getPanCenter$().x + delta.x;
var centerY=this.getPanCenter$().y + delta.y;
this.setPanCenter$org_scijava_util_RealCoords(Clazz.new_($I$(1,1).c$$D$D,[centerX, centerY]));
});

Clazz.newMeth(C$, 'pan$org_scijava_util_IntCoords', function (delta) {
var centerX=this.getPanCenter$().x + delta.x / this.getZoomFactor$();
var centerY=this.getPanCenter$().y + delta.y / this.getZoomFactor$();
this.setPanCenter$org_scijava_util_RealCoords(Clazz.new_($I$(1,1).c$$D$D,[centerX, centerY]));
});

Clazz.newMeth(C$, 'panReset$', function () {
var extents=this.getDisplay$().getPlaneExtents$();
var centerX=extents.x + extents.width / 2.0;
var centerY=extents.y + extents.height / 2.0;
this.setPanCenter$org_scijava_util_RealCoords(Clazz.new_($I$(1,1).c$$D$D,[centerX, centerY]));
});

Clazz.newMeth(C$, 'setZoom$D', function (factor) {
this.setZoomAndCenter$D$org_scijava_util_RealCoords(factor, this.getPanCenter$());
});

Clazz.newMeth(C$, 'setZoomAtPoint$D$org_scijava_util_RealCoords', function (factor, pos) {
var newScale=factor == 0  ? this.initialScale : factor;
var center=this.getPanCenter$();
center.x=pos.x - (pos.x - center.x) * this.scale / newScale;
center.y=pos.y - (pos.y - center.y) * this.scale / newScale;
this.setZoomAndCenter$D$org_scijava_util_RealCoords(newScale, center);
});

Clazz.newMeth(C$, 'setZoomAtPoint$D$org_scijava_util_IntCoords', function (factor, pos) {
this.setZoomAtPoint$D$org_scijava_util_RealCoords(factor, this.panelToDataCoords$org_scijava_util_IntCoords(pos));
});

Clazz.newMeth(C$, 'setZoomAndCenter$D', function (factor) {
var x=this.getViewportWidth$() / this.getZoomFactor$() / 2.0 ;
var y=this.getViewportHeight$() / this.getZoomFactor$() / 2.0 ;
this.setZoomAndCenter$D$org_scijava_util_RealCoords(factor, Clazz.new_($I$(1,1).c$$D$D,[x, y]));
});

Clazz.newMeth(C$, 'setZoomAndCenter$D$org_scijava_util_RealCoords', function (factor, center) {
var newScale=factor == 0  ? this.initialScale : factor;
if (p$1.scaleOutOfBounds$D.apply(this, [newScale])) return;
this.scale=newScale;
this.setPanCenter$org_scijava_util_RealCoords(center);
});

Clazz.newMeth(C$, 'zoomIn$', function () {
var newScale=C$.nextLargerZoom$DA$D(this.zoomLevels, this.getZoomFactor$());
this.setZoom$D(newScale);
});

Clazz.newMeth(C$, 'zoomIn$org_scijava_util_RealCoords', function (pos) {
var desiredScale=C$.nextLargerZoom$DA$D(this.zoomLevels, this.getZoomFactor$());
this.setZoomAtPoint$D$org_scijava_util_RealCoords(desiredScale, pos);
});

Clazz.newMeth(C$, 'zoomIn$org_scijava_util_IntCoords', function (pos) {
var desiredScale=C$.nextLargerZoom$DA$D(this.zoomLevels, this.getZoomFactor$());
this.setZoomAtPoint$D$org_scijava_util_IntCoords(desiredScale, pos);
});

Clazz.newMeth(C$, 'zoomOut$', function () {
var desiredScale=C$.nextSmallerZoom$DA$D(this.zoomLevels, this.getZoomFactor$());
this.setZoom$D(desiredScale);
});

Clazz.newMeth(C$, 'zoomOut$org_scijava_util_RealCoords', function (pos) {
var newScale=C$.nextSmallerZoom$DA$D(this.zoomLevels, this.getZoomFactor$());
this.setZoomAtPoint$D$org_scijava_util_RealCoords(newScale, pos);
});

Clazz.newMeth(C$, 'zoomOut$org_scijava_util_IntCoords', function (pos) {
var newScale=C$.nextSmallerZoom$DA$D(this.zoomLevels, this.getZoomFactor$());
this.setZoomAtPoint$D$org_scijava_util_IntCoords(newScale, pos);
});

Clazz.newMeth(C$, 'zoomToFit$org_scijava_util_IntRect', function (viewportBox) {
var topLeft=viewportBox.getTopLeft$();
var bottomRight=viewportBox.getBottomRight$();
var dataTopLeft=this.panelToDataCoords$org_scijava_util_IntCoords(topLeft);
var dataBottomRight=this.panelToDataCoords$org_scijava_util_IntCoords(bottomRight);
var newCenterX=Math.abs(dataBottomRight.x + dataTopLeft.x) / 2.0;
var newCenterY=Math.abs(dataBottomRight.y + dataTopLeft.y) / 2.0;
var dataSizeX=Math.abs(dataBottomRight.x - dataTopLeft.x);
var dataSizeY=Math.abs(dataBottomRight.y - dataTopLeft.y);
var xZoom=this.getViewportWidth$() / dataSizeX;
var yZoom=this.getViewportHeight$() / dataSizeY;
var factor=Math.min(xZoom, yZoom);
this.setZoomAndCenter$D$org_scijava_util_RealCoords(factor, Clazz.new_($I$(1,1).c$$D$D,[newCenterX, newCenterY]));
});

Clazz.newMeth(C$, 'zoomToFit$org_scijava_util_RealRect', function (viewportBox) {
var newCenterX=(viewportBox.x + viewportBox.width / 2.0);
var newCenterY=(viewportBox.y + viewportBox.height / 2.0);
var minScale=Math.min(this.getViewportWidth$() / viewportBox.width, this.getViewportHeight$() / viewportBox.height);
this.setZoomAndCenter$D$org_scijava_util_RealCoords(minScale, Clazz.new_($I$(1,1).c$$D$D,[newCenterX, newCenterY]));
});

Clazz.newMeth(C$, 'getZoomFactor$', function () {
return this.scale;
});

Clazz.newMeth(C$, 'getInitialScale$', function () {
return this.initialScale;
});

Clazz.newMeth(C$, 'setInitialScale$D', function (zoomFactor) {
if (zoomFactor <= 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Initial scale must be > 0"]);
}this.initialScale=zoomFactor;
});

Clazz.newMeth(C$, 'getBestZoomLevel$D', function (fractionalScale) {
var levels=C$.defaultZooms;
var zoomIndex=C$.lookupZoomIndex$DA$D(levels, fractionalScale);
if (zoomIndex != -1) return levels[zoomIndex];
return C$.nextSmallerZoom$DA$D(levels, fractionalScale);
});

Clazz.newMeth(C$, 'publishPanZoomEvent', function () {
if (this.eventService != null ) this.eventService.publish$TE(Clazz.new_($I$(8,1).c$$net_imagej_display_ImageCanvas,[this]));
}, p$1);

Clazz.newMeth(C$, 'getLeftImageX', function () {
var viewportImageWidth=this.getViewportWidth$() / this.getZoomFactor$();
return this.getPanCenter$().x - viewportImageWidth / 2.0;
}, p$1);

Clazz.newMeth(C$, 'getTopImageY', function () {
var viewportImageHeight=this.getViewportHeight$() / this.getZoomFactor$();
return this.getPanCenter$().y - viewportImageHeight / 2.0;
}, p$1);

Clazz.newMeth(C$, 'scaleOutOfBounds$D', function (desiredScale) {
if (desiredScale <= 0 ) {
if (this.log != null ) this.log.warn$O("**** BAD SCALE: " + new Double(desiredScale).toString() + " ****" );
return true;
}if (desiredScale > C$.maxZoom ) return true;
if (desiredScale < this.getZoomFactor$() ) {
var planeExtents=this.getDisplay$().getPlaneExtents$();
var nearCornerPanel=this.dataToPanelCoords$org_scijava_util_RealCoords(Clazz.new_($I$(1,1).c$$D$D,[planeExtents.x, planeExtents.y]));
var farCornerPanel=this.dataToPanelCoords$org_scijava_util_RealCoords(Clazz.new_($I$(1,1).c$$D$D,[planeExtents.x + planeExtents.width, planeExtents.y + planeExtents.height]));
var panelX=farCornerPanel.x - nearCornerPanel.x;
var panelY=farCornerPanel.y - nearCornerPanel.y;
if (panelX < 25 && panelY < 25 ) {
return true;
}}return false;
}, p$1);

Clazz.newMeth(C$, 'nextSmallerZoom$DA$D', function (zoomLevels, currScale) {
var index=$I$(9).binarySearch$DA$D(zoomLevels, currScale);
var nextIndex;
if (index >= 0) nextIndex=index - 1;
 else nextIndex=-(index + 1) - 1;
if (nextIndex < 0) nextIndex=0;
if (nextIndex > zoomLevels.length - 1) nextIndex=zoomLevels.length - 1;
return zoomLevels[nextIndex];
}, 1);

Clazz.newMeth(C$, 'nextLargerZoom$DA$D', function (zoomLevels, currScale) {
var index=$I$(9).binarySearch$DA$D(zoomLevels, currScale);
var nextIndex;
if (index >= 0) nextIndex=index + 1;
 else nextIndex=-(index + 1);
if (nextIndex < 0) nextIndex=0;
if (nextIndex > zoomLevels.length - 1) nextIndex=zoomLevels.length - 1;
return zoomLevels[nextIndex];
}, 1);

Clazz.newMeth(C$, 'validatedZoomLevels$DA', function (levels) {
var validatedLevels=levels.clone$();
$I$(9).sort$DA(validatedLevels);
if (validatedLevels.length == 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["given zoom level array is empty"]);
}var prevEntry=validatedLevels[0];
if (prevEntry <= 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["zoom level array contains nonpositive entries"]);
}for (var i=1; i < validatedLevels.length; i++) {
var currEntry=validatedLevels[i];
if (currEntry == prevEntry ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["zoom level array contains duplicate entries"]);
}prevEntry=currEntry;
}
return validatedLevels;
}, 1);

Clazz.newMeth(C$, 'lookupZoomIndex$DA$D', function (levels, requestedZoom) {
var lo=0;
var hi=levels.length - 1;
do {
var mid=((lo + hi)/2|0);
var possibleZoom=levels[mid];
if (Math.abs(requestedZoom - possibleZoom) < 1.0E-5 ) return mid;
if (requestedZoom < possibleZoom ) hi=mid - 1;
 else lo=mid + 1;
} while (hi >= lo);
return -1;
}, 1);
C$.$getAnn$ = function(){ return [
[['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['required="false" ']],
  [['eventService','org.scijava.event.EventService',null,['org.scijava.plugin.Parameter']],['required="false" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:58 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
