(function(){var P$=Clazz.newPackage("net.imglib2.type"),I$=[];
/*e*/var C$=Clazz.newClass(P$, "PrimitiveType", null, 'Enum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$I, "BOOLEAN", 0, [1]);
Clazz.newEnumConst($vals, C$.c$$I, "BYTE", 1, [1]);
Clazz.newEnumConst($vals, C$.c$$I, "CHAR", 2, [2]);
Clazz.newEnumConst($vals, C$.c$$I, "SHORT", 3, [2]);
Clazz.newEnumConst($vals, C$.c$$I, "INT", 4, [4]);
Clazz.newEnumConst($vals, C$.c$$I, "LONG", 5, [8]);
Clazz.newEnumConst($vals, C$.c$$I, "FLOAT", 6, [4]);
Clazz.newEnumConst($vals, C$.c$$I, "DOUBLE", 7, [8]);
Clazz.newEnumConst($vals, C$.c$$I, "UNDEFINED", 8, [-1]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['byteCount']]]

Clazz.newMeth(C$, 'c$$I', function (byteCount) {
;C$.$init$.apply(this);
this.byteCount=byteCount;
}, 1);

Clazz.newMeth(C$, 'getByteCount$', function () {
return this.byteCount;
});

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:11 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
