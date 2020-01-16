(function(){var P$=Clazz.newPackage("io.scif.formats.tiff"),I$=[[0,'java.util.HashMap','java.util.EnumSet']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*e*/var C$=Clazz.newClass(P$, "PhotoInterp", null, 'Enum', 'io.scif.enumeration.CodedEnum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$I$S$S, "WHITE_IS_ZERO", 0, [0, "WhiteIsZero", "Monochrome"]);
Clazz.newEnumConst($vals, C$.c$$I$S$S, "BLACK_IS_ZERO", 1, [1, "BlackIsZero", "Monochrome"]);
Clazz.newEnumConst($vals, C$.c$$I$S$S, "RGB", 2, [2, "RGB", "RGB"]);
Clazz.newEnumConst($vals, C$.c$$I$S$S, "RGB_PALETTE", 3, [3, "Palette", "Monochrome"]);
Clazz.newEnumConst($vals, C$.c$$I$S$S, "TRANSPARENCY_MASK", 4, [4, "Transparency Mask", "RGB"]);
Clazz.newEnumConst($vals, C$.c$$I$S$S, "CMYK", 5, [5, "CMYK", "CMYK"]);
Clazz.newEnumConst($vals, C$.c$$I$S$S, "Y_CB_CR", 6, [6, "YCbCr", "RGB"]);
Clazz.newEnumConst($vals, C$.c$$I$S$S, "CIE_LAB", 7, [8, "CIELAB", "RGB"]);
Clazz.newEnumConst($vals, C$.c$$I$S$S, "CFA_ARRAY", 8, [32803, "Color Filter Array", "RGB"]);
C$.lookup=Clazz.new_(1,{K:"Integer",V:"io.scif.formats.tiff.PhotoInterp"},$I$(1,1));
{
for (var v, $v = $I$(2).allOf$Class(Clazz.getClass(C$)).iterator$(); $v.hasNext$()&&((v=($v.next$())),1);) {
C$.lookup.put$TK$TV(new Integer(v.getCode$()), v);
}
};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['code'],'S',['$name','metadataType']]
,['O',['lookup','java.util.Map']]]

Clazz.newMeth(C$, 'c$$I$S$S', function (code, name, metadataType) {
;C$.$init$.apply(this);
this.code=code;
this.$name=name;
this.metadataType=metadataType;
}, 1);

Clazz.newMeth(C$, 'get$I', function (code) {
var toReturn=C$.lookup.get$O(new Integer(code));
if (toReturn == null ) {
throw Clazz.new_(Clazz.load('io.scif.enumeration.EnumException').c$$S,["Unable to find PhotoInterp with code: " + code]);
}return toReturn;
}, 1);

Clazz.newMeth(C$, 'getCode$', function () {
return this.code;
});

Clazz.newMeth(C$, 'getName$', function () {
return this.$name;
});

Clazz.newMeth(C$, 'getMetadataType$', function () {
return this.metadataType;
});

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:42 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
