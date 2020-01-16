(function(){var P$=Clazz.newPackage("net.imagej.axis"),I$=[[0,'java.util.HashMap','net.imagej.axis.DefaultAxisType','net.imagej.axis.AxisType']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Axes");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.axes=Clazz.new_(1,{K:"String",V:"net.imagej.axis.AxisType"},$I$(1,1));
C$.X=C$.get$S$Z("X", true);
C$.Y=C$.get$S$Z("Y", true);
C$.Z=C$.get$S$Z("Z", true);
C$.TIME=C$.get$S("Time");
C$.CHANNEL=C$.get$S("Channel");
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['axes','java.util.HashMap','X','net.imagej.axis.AxisType','+Y','+Z','+TIME','+CHANNEL']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'get$S', function (label) {
return C$.get$S$Z(label, false);
}, 1);

Clazz.newMeth(C$, 'get$S$Z', function (label, spatial) {
if ("Unknown".equals$O(label)) return C$.unknown$();
var axis=C$.axes.get$O(label);
if (axis == null ) {
{
axis=C$.axes.get$O(label);
if (axis == null ) {
axis=Clazz.new_($I$(2,1).c$$S$Z,[label, spatial]);
C$.axes.put$TK$TV(label, axis);
}}}return axis;
}, 1);

Clazz.newMeth(C$, 'knownTypes$', function () {
return C$.axes.values$().toArray$TTA(Clazz.array($I$(3), [0]));
}, 1);

Clazz.newMeth(C$, 'unknown$', function () {
return Clazz.new_($I$(2,1).c$$S,["Unknown"]);
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:57 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
