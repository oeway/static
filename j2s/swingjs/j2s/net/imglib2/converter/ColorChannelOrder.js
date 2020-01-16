(function(){var P$=Clazz.newPackage("net.imglib2.converter"),I$=[];
/*e*/var C$=Clazz.newClass(P$, "ColorChannelOrder", null, 'Enum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$I, "ARGB", 0, [4]);
Clazz.newEnumConst($vals, C$.c$$I, "RGB", 1, [3]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['channelCount']]]

Clazz.newMeth(C$, 'c$$I', function (channelCount) {
;C$.$init$.apply(this);
this.channelCount=channelCount;
}, 1);

Clazz.newMeth(C$, 'channelCount$', function () {
return this.channelCount;
});

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:05 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
