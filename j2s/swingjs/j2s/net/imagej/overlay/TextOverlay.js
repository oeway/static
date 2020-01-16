(function(){var P$=Clazz.newPackage("net.imagej.overlay"),I$=[[0,'net.imglib2.roi.RectangleRegionOfInterest',['net.imagej.overlay.TextOverlay','.Justification']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TextOverlay", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'net.imagej.overlay.AbstractROIOverlay');
C$.$classes$=[['Justification',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['text'],'O',['just','net.imagej.overlay.TextOverlay.Justification']]]

Clazz.newMeth(C$, 'c$$org_scijava_Context$D$D$S$net_imagej_overlay_TextOverlay_Justification', function (context, x, y, text, j) {
;C$.superclazz.c$$org_scijava_Context$TR.apply(this,[context, Clazz.new_($I$(1,1).c$$DA$DA,[Clazz.array(Double.TYPE, -1, [x, y]), Clazz.array(Double.TYPE, -1, [0, 0])])]);C$.$init$.apply(this);
this.text=text;
this.just=j;
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_Context$D$D$S', function (context, x, y, text) {
C$.c$$org_scijava_Context$D$D$S$net_imagej_overlay_TextOverlay_Justification.apply(this, [context, x, y, text, $I$(2).LEFT]);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_Context$D$D', function (context, x, y) {
C$.c$$org_scijava_Context$D$D$S.apply(this, [context, x, y, "Default Text"]);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_Context', function (context) {
C$.c$$org_scijava_Context$D$D.apply(this, [context, 0, 0]);
}, 1);

Clazz.newMeth(C$, 'move$DA', function (deltas) {
this.getRegionOfInterest$().move$DA(deltas);
});

Clazz.newMeth(C$, 'getText$', function () {
return this.text;
});

Clazz.newMeth(C$, 'setText$S', function (text) {
this.text=text;
});

Clazz.newMeth(C$, 'getJustification$', function () {
return this.just;
});

Clazz.newMeth(C$, 'setJustification$net_imagej_overlay_TextOverlay_Justification', function (j) {
this.just=j;
});
;
(function(){/*e*/var C$=Clazz.newClass(P$.TextOverlay, "Justification", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "LEFT", 0, []);
Clazz.newEnumConst($vals, C$.c$, "CENTER", 1, []);
Clazz.newEnumConst($vals, C$.c$, "RIGHT", 2, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:02 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
