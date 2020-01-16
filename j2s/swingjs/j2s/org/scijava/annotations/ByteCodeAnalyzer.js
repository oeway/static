(function(){var P$=Clazz.newPackage("org.scijava.annotations"),p$1={},p$2={},I$=[[0,['org.scijava.annotations.ByteCodeAnalyzer','.Attribute'],'java.util.TreeMap','Boolean','java.io.FileInputStream','java.io.ByteArrayOutputStream']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ByteCodeAnalyzer", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Attribute',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['endOffset'],'O',['buffer','byte[]','poolOffsets','int[]','attributes','org.scijava.annotations.ByteCodeAnalyzer.Attribute[]']]]

Clazz.newMeth(C$, 'c$$BA', function (buffer) {
;C$.$init$.apply(this);
this.buffer=buffer;
if ((p$1.getU4$I.apply(this, [0])|0) != -889275714) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["No class"]);
p$1.getConstantPoolOffsets.apply(this, []);
this.endOffset+=8 + 2 * p$1.getU2$I.apply(this, [this.endOffset + 6]);
var fieldCount=p$1.getU2$I.apply(this, [this.endOffset]);
this.endOffset+=2;
for (var i=0; i < fieldCount; i++) {
this.endOffset=p$1.skipAttributes$I.apply(this, [this.endOffset + 6]);
}
var methodCount=p$1.getU2$I.apply(this, [this.endOffset]);
this.endOffset+=2;
for (var i=0; i < methodCount; i++) {
this.endOffset=p$1.skipAttributes$I.apply(this, [this.endOffset + 6]);
}
p$1.getAllAttributes.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'getStringConstant$I', function (index) {
return p$1.getString$I.apply(this, [this.poolOffsets[index - 1]]);
}, p$1);

Clazz.newMeth(C$, 'getIntegerConstant$I', function (index) {
var offset=this.poolOffsets[index - 1];
if (p$1.getU1$I.apply(this, [offset]) != 3) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Constant " + index + " does not refer to an integer" ]);
return p$1.getU4$I.apply(this, [offset + 1]);
}, p$1);

Clazz.newMeth(C$, 'getLongConstant$I', function (index) {
var offset=this.poolOffsets[index - 1];
if (p$1.getU1$I.apply(this, [offset]) != 5) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Constant " + index + " does not refer to a long" ]);
return (p$1.getU4$I.apply(this, [offset + 1]) << 32) | p$1.getU4$I.apply(this, [offset + 5]);
}, p$1);

Clazz.newMeth(C$, 'getFloatConstant$I', function (index) {
var offset=this.poolOffsets[index - 1];
if (p$1.getU1$I.apply(this, [offset]) != 4) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Constant " + index + " does not refer to a float" ]);
return Float.intBitsToFloat$I((p$1.getU4$I.apply(this, [offset + 1])|0));
}, p$1);

Clazz.newMeth(C$, 'getDoubleConstant$I', function (index) {
var offset=this.poolOffsets[index - 1];
if (p$1.getU1$I.apply(this, [offset]) != 6) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Constant " + index + " does not refer to a double" ]);
return Double.longBitsToDouble$J((p$1.getU4$I.apply(this, [offset + 1]) << 32) | p$1.getU4$I.apply(this, [offset + 5]));
}, p$1);

Clazz.newMeth(C$, 'getConstantPoolOffsets', function () {
var poolCount=p$1.getU2$I.apply(this, [8]) - 1;
this.poolOffsets=Clazz.array(Integer.TYPE, [poolCount]);
var offset=10;
for (var i=0; i < poolCount; i++) {
this.poolOffsets[i]=offset;
var tag=p$1.getU1$I.apply(this, [offset]);
if (tag == 7 || tag == 8  || tag == 16 ) offset+=3;
 else if (tag == 15) offset+=4;
 else if (tag == 3 || tag == 4  || tag == 9  || tag == 10  || tag == 11  || tag == 12  || tag == 18 ) offset+=5;
 else if (tag == 5 || tag == 6 ) {
this.poolOffsets[++i]=offset;
offset+=9;
} else if (tag == 1) offset+=3 + p$1.getU2$I.apply(this, [offset + 1]);
 else throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Unknown tag" + " " + tag ]);
}
this.endOffset=offset;
}, p$1);

Clazz.newMeth(C$, 'getU1$I', function (offset) {
return C$.getU1$BA$I(this.buffer, offset);
}, p$1);

Clazz.newMeth(C$, 'getU2$I', function (offset) {
return C$.getU2$BA$I(this.buffer, offset);
}, p$1);

Clazz.newMeth(C$, 'getU4$I', function (offset) {
return C$.getU4$BA$I(this.buffer, offset);
}, p$1);

Clazz.newMeth(C$, 'getU1$BA$I', function (buffer, offset) {
return buffer[offset] & 255;
}, 1);

Clazz.newMeth(C$, 'getU2$BA$I', function (buffer, offset) {
return C$.getU1$BA$I(buffer, offset) << 8 | C$.getU1$BA$I(buffer, offset + 1);
}, 1);

Clazz.newMeth(C$, 'getU4$BA$I', function (buffer, offset) {
return (C$.getU2$BA$I(buffer, offset)) << 16 | C$.getU2$BA$I(buffer, offset + 2);
}, 1);

Clazz.newMeth(C$, 'getString$I', function (offset) {
try {
return  String.instantialize(this.buffer, offset + 3, p$1.getU2$I.apply(this, [offset + 1]), "UTF-8");
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return "";
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'skipAttributes$I', function (offset) {
var count=p$1.getU2$I.apply(this, [offset]);
offset+=2;
for (var i=0; i < count; i++) {
offset+=6 + p$1.getU4$I.apply(this, [offset + 2]);
}
return offset;
}, p$1);

Clazz.newMeth(C$, 'getAllAttributes', function () {
this.attributes=p$1.getAttributes$I.apply(this, [this.endOffset]);
}, p$1);

Clazz.newMeth(C$, 'getAttributes$I', function (offset) {
var result=Clazz.array($I$(1), [p$1.getU2$I.apply(this, [offset])]);
for (var i=0; i < result.length; i++) result[i]=Clazz.new_($I$(1,1).c$$I, [this, null, i == 0 ? offset + 2 : result[i - 1].attributeEndOffset]);

return result;
}, p$1);

Clazz.newMeth(C$, 'getAnnotations', function () {
var annotations=Clazz.new_(1,{K:"String",V:"java.util.Map"},$I$(2,1));
for (var attr, $attr = 0, $$attr = this.attributes; $attr<$$attr.length&&((attr=($$attr[$attr])),1);$attr++) {
if ("RuntimeVisibleAnnotations".equals$O(p$2.getName.apply(attr, []))) {
var buf=attr.attribute;
var count=C$.getU2$BA$I(buf, 0);
var offset=2;
for (var i=0; i < count; i++) {
var className=C$.raw2className$S(p$1.getStringConstant$I.apply(this, [C$.getU2$BA$I(buf, offset)]));
offset+=2;
var values=Clazz.new_(1,{K:"String",V:"java.lang.Object"},$I$(2,1));
annotations.put$TK$TV(className, values);
offset=p$1.parseAnnotationValues$BA$I$java_util_Map.apply(this, [buf, offset, values]);
}
}}
return annotations;
}, p$1);

Clazz.newMeth(C$, 'parseAnnotationValues$BA$I$java_util_Map', function (buf, offset, values) {
var count=C$.getU2$BA$I(buf, offset);
offset+=2;
for (var i=0; i < count; i++) {
var key=p$1.getStringConstant$I.apply(this, [C$.getU2$BA$I(buf, offset)]);
offset+=2;
offset=p$1.parseAnnotationValue$BA$I$java_util_Map$S.apply(this, [buf, offset, values, key]);
}
return offset;
}, p$1);

Clazz.newMeth(C$, 'parseAnnotationValue$BA$I$java_util_Map$S', function (buf, offset, map, key) {
var value;
switch (C$.getU1$BA$I(buf, offset++)) {
case 90:
value=$I$(3).valueOf$Z(p$1.getIntegerConstant$I.apply(this, [C$.getU2$BA$I(buf, offset)]) != 0);
offset+=2;
break;
case 66:
value=Byte.valueOf$B(($b$[0] = (p$1.getIntegerConstant$I.apply(this, [C$.getU2$BA$I(buf, offset)])|0), $b$[0]));
offset+=2;
break;
case 67:
value=Character.valueOf$C(String.fromCharCode(p$1.getIntegerConstant$I.apply(this, [C$.getU2$BA$I(buf, offset)])));
offset+=2;
break;
case 83:
value=Short.valueOf$H(($s$[0] = p$1.getIntegerConstant$I.apply(this, [C$.getU2$BA$I(buf, offset)]), $s$[0]));
offset+=2;
break;
case 73:
value=Integer.valueOf$I((p$1.getIntegerConstant$I.apply(this, [C$.getU2$BA$I(buf, offset)])|0));
offset+=2;
break;
case 74:
value=Long.valueOf$J(p$1.getLongConstant$I.apply(this, [C$.getU2$BA$I(buf, offset)]));
offset+=2;
break;
case 70:
value=Float.valueOf$F(p$1.getFloatConstant$I.apply(this, [C$.getU2$BA$I(buf, offset)]));
offset+=2;
break;
case 68:
value=Double.valueOf$D(p$1.getDoubleConstant$I.apply(this, [C$.getU2$BA$I(buf, offset)]));
offset+=2;
break;
case 115:
value=p$1.getStringConstant$I.apply(this, [C$.getU2$BA$I(buf, offset)]);
offset+=2;
break;
case 99:
value=C$.raw2className$S(p$1.getStringConstant$I.apply(this, [C$.getU2$BA$I(buf, offset)]));
offset+=2;
break;
case 91:
{
var array=Clazz.array(java.lang.Object, [C$.getU2$BA$I(buf, offset)]);
offset+=2;
for (var i=0; i < array.length; i++) {
offset=p$1.parseAnnotationValue$BA$I$java_util_Map$S.apply(this, [buf, offset, map, key]);
array[i]=map.get$O(key);
}
value=array;
break;
}case 101:
{
var enumValue=Clazz.new_(1,{K:"String",V:"java.lang.Object"},$I$(2,1));
enumValue.put$TK$TV("enum", C$.raw2className$S(p$1.getStringConstant$I.apply(this, [C$.getU2$BA$I(buf, offset)])));
offset+=2;
enumValue.put$TK$TV("value", p$1.getStringConstant$I.apply(this, [C$.getU2$BA$I(buf, offset)]));
offset+=2;
value=enumValue;
break;
}case 64:
{
offset+=2;
var values=Clazz.new_(1,{K:"String",V:"java.lang.Object"},$I$(2,1));
offset=p$1.parseAnnotationValues$BA$I$java_util_Map.apply(this, [buf, offset, values]);
value=values;
break;
}default:
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Unhandled annotation value type: " + String.fromCharCode(C$.getU1$BA$I(buf, offset - 1))]);
}
if (value == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}map.put$TK$TV(key, value);
return offset;
}, p$1);

Clazz.newMeth(C$, 'raw2className$S', function (rawName) {
if (!rawName.startsWith$S("L") || !rawName.endsWith$S(";") ) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Invalid raw class name: " + rawName]);
}return rawName.substring$I$I(1, rawName.length$() - 1).replace$C$C("/", ".");
}, 1);

Clazz.newMeth(C$, 'readFile$java_io_File', function (file) {
var $in=Clazz.new_($I$(4,1).c$$java_io_File,[file]);
var out=Clazz.new_($I$(5,1));
var buffer=Clazz.array(Byte.TYPE, [16384]);
for (; ; ) {
var count=$in.read$BA(buffer);
if (count < 0) break;
out.write$BA$I$I(buffer, 0, count);
}
$in.close$();
out.close$();
return out.toByteArray$();
}, 1);

Clazz.newMeth(C$, 'getAnnotations$java_io_File', function (file) {
return p$1.getAnnotations.apply(Clazz.new_(C$.c$$BA,[C$.readFile$java_io_File(file)]), []);
}, 1);
var $b$ = new Int8Array(1);
var $s$ = new Int16Array(1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ByteCodeAnalyzer, "Attribute", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['nameIndex','attributeEndOffset'],'O',['attribute','byte[]']]]

Clazz.newMeth(C$, 'c$$I', function (offset) {
;C$.$init$.apply(this);
this.nameIndex=p$1.getU2$I.apply(this.this$0, [offset]);
this.attribute=Clazz.array(Byte.TYPE, [(p$1.getU4$I.apply(this.this$0, [offset + 2])|0)]);
System.arraycopy$O$I$O$I$I(this.this$0.buffer, offset + 6, this.attribute, 0, this.attribute.length);
this.attributeEndOffset=offset + 6 + this.attribute.length ;
}, 1);

Clazz.newMeth(C$, 'getName', function () {
return p$1.getStringConstant$I.apply(this.this$0, [this.nameIndex]);
}, p$2);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:22 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
