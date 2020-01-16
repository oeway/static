(function(){var P$=Clazz.newPackage("io.scif.formats.tiff"),I$=[[0,'java.util.HashMap','java.util.EnumSet']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*e*/var C$=Clazz.newClass(P$, "IFDType", null, 'Enum', 'io.scif.enumeration.CodedEnum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$I$I, "BYTE", 0, [1, 1]);
Clazz.newEnumConst($vals, C$.c$$I$I, "ASCII", 1, [2, 1]);
Clazz.newEnumConst($vals, C$.c$$I$I, "SHORT", 2, [3, 2]);
Clazz.newEnumConst($vals, C$.c$$I$I, "LONG", 3, [4, 4]);
Clazz.newEnumConst($vals, C$.c$$I$I, "RATIONAL", 4, [5, 8]);
Clazz.newEnumConst($vals, C$.c$$I$I, "SBYTE", 5, [6, 1]);
Clazz.newEnumConst($vals, C$.c$$I$I, "UNDEFINED", 6, [7, 1]);
Clazz.newEnumConst($vals, C$.c$$I$I, "SSHORT", 7, [8, 2]);
Clazz.newEnumConst($vals, C$.c$$I$I, "SLONG", 8, [9, 4]);
Clazz.newEnumConst($vals, C$.c$$I$I, "SRATIONAL", 9, [10, 8]);
Clazz.newEnumConst($vals, C$.c$$I$I, "FLOAT", 10, [11, 4]);
Clazz.newEnumConst($vals, C$.c$$I$I, "DOUBLE", 11, [12, 8]);
Clazz.newEnumConst($vals, C$.c$$I$I, "IFD", 12, [13, 4]);
Clazz.newEnumConst($vals, C$.c$$I$I, "LONG8", 13, [16, 8]);
Clazz.newEnumConst($vals, C$.c$$I$I, "SLONG8", 14, [17, 8]);
Clazz.newEnumConst($vals, C$.c$$I$I, "IFD8", 15, [18, 8]);
C$.lookup=Clazz.new_(1,{K:"Integer",V:"io.scif.formats.tiff.IFDType"},$I$(1,1));
{
for (var v, $v = $I$(2).allOf$Class(Clazz.getClass(C$)).iterator$(); $v.hasNext$()&&((v=($v.next$())),1);) {
C$.lookup.put$TK$TV(new Integer(v.getCode$()), v);
}
};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['code','bytesPerElement']]
,['O',['lookup','java.util.Map']]]

Clazz.newMeth(C$, 'get$I', function (code) {
var toReturn=C$.lookup.get$O(new Integer(code));
if (toReturn == null ) {
throw Clazz.new_(Clazz.load('io.scif.enumeration.EnumException').c$$S,["Unable to find IFDType with code: " + code]);
}return toReturn;
}, 1);

Clazz.newMeth(C$, 'c$$I$I', function (code, bytesPerElement) {
;C$.$init$.apply(this);
this.code=code;
this.bytesPerElement=bytesPerElement;
}, 1);

Clazz.newMeth(C$, 'getCode$', function () {
return this.code;
});

Clazz.newMeth(C$, 'getBytesPerElement$', function () {
return this.bytesPerElement;
});

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:42 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
