(function(){var P$=Clazz.newPackage("io.scif.codec"),I$=[[0,'java.util.HashMap','java.util.EnumSet']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*e*/var C$=Clazz.newClass(P$, "JPEG2000BoxType", null, 'Enum', 'io.scif.enumeration.CodedEnum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$I$S, "SIGNATURE", 0, [1783636000, "Signature"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "SIGNATURE_WRONG_ENDIANNESS", 1, [538988650, "Signature (Wrong endianness)"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "FILE", 2, [1718909296, "File"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "HEADER", 3, [1785737832, "Header"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "IMAGE_HEADER", 4, [1768449138, "Image header"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "BITS_PER_COMPONENT", 5, [1651532643, "Bits per component"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "COLOUR_SPECIFICATION", 6, [1668246642, "Colour specification"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "PALETTE", 7, [1885564018, "Palette"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "COMPONENT_MAPPING", 8, [1668112752, "Component mapping"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "CHANNEL_DEFINITION", 9, [1667523942, "Channel definition"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "RESOLUTION", 10, [1919251232, "Resolution"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "CAPTURE_RESOLUTION", 11, [1919251299, "Capture resolution"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "DEFAULT_DISPLAY_RESOLUTION", 12, [1919251300, "Default display resolution"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "CONTIGUOUS_CODESTREAM", 13, [1785737827, "Contiguous codestream"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "INTELLECTUAL_PROPERTY", 14, [1785737833, "Intellectual property"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "XML", 15, [2020437024, "XML"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "UUID", 16, [1970628964, "UUID"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "UUID_INFO", 17, [1969843814, "UUID info"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "UUID_LIST", 18, [1970041716, "UUID list"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "URL", 19, [1970433056, "URL"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "ASSOCIATION", 20, [1634955107, "Association"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "LABEL", 21, [1818389536, "Label"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "PLACEHOLDER", 22, [1885891684, "Placeholder"]);
C$.lookup=Clazz.new_(1,{K:"Integer",V:"io.scif.codec.JPEG2000BoxType"},$I$(1,1));
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
