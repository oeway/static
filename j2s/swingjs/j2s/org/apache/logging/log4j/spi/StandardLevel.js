(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.spi"),I$=[[0,'java.util.EnumSet']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*e*/var C$=Clazz.newClass(P$, "StandardLevel", null, 'Enum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$I, "OFF", 0, [0]);
Clazz.newEnumConst($vals, C$.c$$I, "FATAL", 1, [100]);
Clazz.newEnumConst($vals, C$.c$$I, "ERROR", 2, [200]);
Clazz.newEnumConst($vals, C$.c$$I, "WARN", 3, [300]);
Clazz.newEnumConst($vals, C$.c$$I, "INFO", 4, [400]);
Clazz.newEnumConst($vals, C$.c$$I, "DEBUG", 5, [500]);
Clazz.newEnumConst($vals, C$.c$$I, "TRACE", 6, [600]);
Clazz.newEnumConst($vals, C$.c$$I, "ALL", 7, [2147483647]);
C$.LEVELSET=$I$(1).allOf$Class(Clazz.getClass(C$));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['intLevel']]
,['O',['LEVELSET','java.util.EnumSet']]]

Clazz.newMeth(C$, 'c$$I', function (val) {
;C$.$init$.apply(this);
this.intLevel=val;
}, 1);

Clazz.newMeth(C$, 'intLevel$', function () {
return this.intLevel;
});

Clazz.newMeth(C$, 'getStandardLevel$I', function (intLevel) {
var level=C$.OFF;
for (var lvl, $lvl = C$.LEVELSET.iterator$(); $lvl.hasNext$()&&((lvl=($lvl.next$())),1);) {
if (lvl.intLevel$() > intLevel) {
break;
}level=lvl;
}
return level;
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:55 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
