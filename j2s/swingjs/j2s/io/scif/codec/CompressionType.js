(function(){var P$=Clazz.newPackage("io.scif.codec"),I$=[[0,'java.util.HashMap','java.util.EnumSet']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*e*/var C$=Clazz.newClass(P$, "CompressionType", null, 'Enum', 'io.scif.enumeration.CodedEnum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$I$S, "UNCOMPRESSED", 0, [1, "Uncompressed"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "ZLIB", 1, [2, "zlib"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "CINEPAK", 2, [3, "Cinepak"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "ANIMATION", 3, [4, "Animation"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "H_263", 4, [5, "H.263"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "SORENSON", 5, [6, "Sorenson"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "SORENSON_3", 6, [7, "Sorenson 3"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "MPEG_4", 7, [8, "MPEG 4"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "LZW", 8, [9, "LZW"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "J2K", 9, [10, "JPEG-2000"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "J2K_LOSSY", 10, [11, "JPEG-2000 Lossy"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "JPEG", 11, [12, "JPEG"]);
C$.lookup=Clazz.new_(1,{K:"Integer",V:"io.scif.codec.CompressionType"},$I$(1,1));
{
for (var v, $v = $I$(2).allOf$Class(Clazz.getClass(C$)).iterator$(); $v.hasNext$()&&((v=($v.next$())),1);) {
C$.lookup.put$TK$TV(new Integer(v.getCode$()), v);
}
};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['code'],'S',['compression']]
,['O',['lookup','java.util.Map']]]

Clazz.newMeth(C$, 'get$I', function (code) {
var toReturn=C$.lookup.get$O(new Integer(code));
if (toReturn == null ) {
throw Clazz.new_(Clazz.load('io.scif.enumeration.EnumException').c$$S,["Unable to find CompressionType with code: " + "" + code ]);
}return toReturn;
}, 1);

Clazz.newMeth(C$, 'c$$I$S', function (code, compression) {
;C$.$init$.apply(this);
this.code=code;
this.compression=compression;
}, 1);

Clazz.newMeth(C$, 'getCode$', function () {
return this.code;
});

Clazz.newMeth(C$, 'getCompression$', function () {
return this.compression;
});

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:37 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
