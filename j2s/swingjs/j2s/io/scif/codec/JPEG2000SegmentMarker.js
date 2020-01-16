(function(){var P$=Clazz.newPackage("io.scif.codec"),I$=[[0,'java.util.HashMap','java.util.EnumSet']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*e*/var C$=Clazz.newClass(P$, "JPEG2000SegmentMarker", null, 'Enum', 'io.scif.enumeration.CodedEnum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$I$S, "RESERVED_DELIMITER_MARKER_MIN", 0, [65328, "Reserved delimiter marker minimum"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "RESERVED_DELIMITER_MARKER_MAX", 1, [65343, "Reserved delimiter marker maximum"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "SOC", 2, [65359, "Start of codestream"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "SOC_WRONG_ENDIANNESS", 3, [20479, "Start of codestream (Wrong endianness)"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "SOT", 4, [65424, "Start of tile"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "SOD", 5, [65427, "Start of data"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "EOC", 6, [65497, "End of codestream"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "SIZ", 7, [65361, "Size"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "COD", 8, [65362, "Coding style default"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "COC", 9, [65363, "Coding style component"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "RGN", 10, [65374, "Region of interest"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "QCD", 11, [65372, "Quantization default"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "QCC", 12, [65373, "Quantization component"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "POC", 13, [65375, "Progression order change"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "TLM", 14, [65365, "Tile lengths"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "PLM", 15, [65367, "Packet length main"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "PLT", 16, [65368, "Packet length tile"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "PPM", 17, [65376, "Packed packet main"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "PPT", 18, [65377, "Packed packet tile"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "SOP", 19, [65425, "Start of packet"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "EPH", 20, [65426, "End of packet header"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "CRG", 21, [65379, "Component registration"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "COM", 22, [65380, "Comment"]);
C$.lookup=Clazz.new_(1,{K:"Integer",V:"io.scif.codec.JPEG2000SegmentMarker"},$I$(1,1));
{
for (var v, $v = $I$(2).allOf$Class(Clazz.getClass(C$)).iterator$(); $v.hasNext$()&&((v=($v.next$())),1);) {
C$.lookup.put$TK$TV(new Integer(v.getCode$()), v);
}
};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['code'],'S',['$name']]
,['O',['lookup','java.util.Map']]]

Clazz.newMeth(C$, 'get$I', function (code) {
return C$.lookup.get$O(new Integer(code));
}, 1);

Clazz.newMeth(C$, 'c$$I$S', function (code, name) {
;C$.$init$.apply(this);
this.code=code;
this.$name=name;
}, 1);

Clazz.newMeth(C$, 'getCode$', function () {
return this.code;
});

Clazz.newMeth(C$, 'getName$', function () {
return this.$name;
});

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:37 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
