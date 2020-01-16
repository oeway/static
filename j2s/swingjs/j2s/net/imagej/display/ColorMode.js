(function(){var P$=Clazz.newPackage("net.imagej.display"),I$=[[0,'java.util.Hashtable']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*e*/var C$=Clazz.newClass(P$, "ColorMode", null, 'Enum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$S, "COLOR", 0, ["Color"]);
Clazz.newEnumConst($vals, C$.c$$S, "COMPOSITE", 1, ["Composite"]);
Clazz.newEnumConst($vals, C$.c$$S, "GRAYSCALE", 2, ["Grayscale"]);
C$.colorModes=Clazz.new_(1,{K:"String",V:"net.imagej.display.ColorMode"},$I$(1,1));
{
for (var colorMode, $colorMode = 0, $$colorMode = C$.values$(); $colorMode<$$colorMode.length&&((colorMode=($$colorMode[$colorMode])),1);$colorMode++) {
C$.colorModes.put$TK$TV(colorMode.getLabel$(), colorMode);
}
};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['label']]
,['O',['colorModes','java.util.Hashtable']]]

Clazz.newMeth(C$, 'get$S', function (label) {
return C$.colorModes.get$O(label);
}, 1);

Clazz.newMeth(C$, 'getLabels$', function () {
return C$.colorModes.keySet$().toArray$TTA(Clazz.array(String, [0]));
}, 1);

Clazz.newMeth(C$, 'c$$S', function (label) {
;C$.$init$.apply(this);
this.label=label;
}, 1);

Clazz.newMeth(C$, 'getLabel$', function () {
return this.label;
});

Clazz.newMeth(C$, 'toString', function () {
return this.label;
});

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:58 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
