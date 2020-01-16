(function(){var P$=Clazz.newPackage("org.scijava.annotations.legacy"),p$1={},I$=[[0,'java.util.LinkedHashMap','Boolean','java.util.HashMap',['org.scijava.annotations.legacy.LegacyReader','.ClassDesc'],['org.scijava.annotations.legacy.LegacyReader','.BoxedPrimitiveClassDesc'],['org.scijava.annotations.legacy.LegacyReader','.InterfaceClassDesc'],'java.util.Comparator',['org.scijava.annotations.legacy.LegacyReader','.NonPrimitiveClassDesc'],'java.util.TreeMap','java.util.ArrayList','java.io.BufferedInputStream']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LegacyReader", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['ClassDesc',1026],['NonPrimitiveClassDesc',2],['BoxedPrimitiveClassDesc',2],['InterfaceClassDesc',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.classDescs=Clazz.new_(1,{K:"String",V:"org.scijava.annotations.legacy.LegacyReader.ClassDesc"},$I$(3,1));
{
((P$.LegacyReader$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LegacyReader$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['org.scijava.annotations.legacy.LegacyReader','.ClassDesc']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'read$', function () {
return new Long(($b$[0] = p$1.read8.apply(this.b$['org.scijava.annotations.legacy.LegacyReader'], []), $b$[0]));
});
var $b$ = new Int8Array(1);
})()
), Clazz.new_($I$(4,1).c$$S, [this, null, "B"],P$.LegacyReader$1));
((P$.LegacyReader$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "LegacyReader$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['org.scijava.annotations.legacy.LegacyReader','.ClassDesc']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'read$', function () {
return "" + String.fromCharCode(p$1.read16.apply(this.b$['org.scijava.annotations.legacy.LegacyReader'], []));
});
})()
), Clazz.new_($I$(4,1).c$$S, [this, null, "C"],P$.LegacyReader$2));
((P$.LegacyReader$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "LegacyReader$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['org.scijava.annotations.legacy.LegacyReader','.ClassDesc']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'read$', function () {
return new Double(Double.longBitsToDouble$J(p$1.read64.apply(this.b$['org.scijava.annotations.legacy.LegacyReader'], [])));
});
})()
), Clazz.new_($I$(4,1).c$$S, [this, null, "D"],P$.LegacyReader$3));
((P$.LegacyReader$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "LegacyReader$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['org.scijava.annotations.legacy.LegacyReader','.ClassDesc']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'read$', function () {
return new Double(Float.intBitsToFloat$I(p$1.read32.apply(this.b$['org.scijava.annotations.legacy.LegacyReader'], [])));
});
})()
), Clazz.new_($I$(4,1).c$$S, [this, null, "F"],P$.LegacyReader$4));
((P$.LegacyReader$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "LegacyReader$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['org.scijava.annotations.legacy.LegacyReader','.ClassDesc']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'read$', function () {
return new Long(p$1.read32.apply(this.b$['org.scijava.annotations.legacy.LegacyReader'], []));
});
})()
), Clazz.new_($I$(4,1).c$$S, [this, null, "I"],P$.LegacyReader$5));
((P$.LegacyReader$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "LegacyReader$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['org.scijava.annotations.legacy.LegacyReader','.ClassDesc']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'read$', function () {
return new Long(p$1.read64.apply(this.b$['org.scijava.annotations.legacy.LegacyReader'], []));
});
})()
), Clazz.new_($I$(4,1).c$$S, [this, null, "J"],P$.LegacyReader$6));
((P$.LegacyReader$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "LegacyReader$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['org.scijava.annotations.legacy.LegacyReader','.ClassDesc']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'read$', function () {
return new Long(($s$[0] = p$1.read16.apply(this.b$['org.scijava.annotations.legacy.LegacyReader'], []), $s$[0]));
});
var $s$ = new Int16Array(1);
})()
), Clazz.new_($I$(4,1).c$$S, [this, null, "S"],P$.LegacyReader$7));
((P$.LegacyReader$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "LegacyReader$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['org.scijava.annotations.legacy.LegacyReader','.ClassDesc']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'read$', function () {
return new Boolean(p$1.read8.apply(this.b$['org.scijava.annotations.legacy.LegacyReader'], []) != 0);
});
})()
), Clazz.new_($I$(4,1).c$$S, [this, null, "Z"],P$.LegacyReader$8));
((P$.LegacyReader$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "LegacyReader$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['org.scijava.annotations.legacy.LegacyReader','.ClassDesc']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'read$', function () {
return this.b$['org.scijava.annotations.legacy.LegacyReader'].readObject$.apply(this.b$['org.scijava.annotations.legacy.LegacyReader'], []);
});
})()
), Clazz.new_($I$(4,1).c$$S, [this, null, "Ljava/lang/String;"],P$.LegacyReader$9));
Clazz.new_($I$(5,1).c$$Class$S, [this, null, Clazz.getClass($I$(2)), "Z"]);
Clazz.new_($I$(5,1).c$$Class$S, [this, null, Clazz.getClass(Byte), "B"]);
Clazz.new_($I$(5,1).c$$Class$S, [this, null, Clazz.getClass(Short), "S"]);
Clazz.new_($I$(5,1).c$$Class$S, [this, null, Clazz.getClass(Integer), "I"]);
Clazz.new_($I$(5,1).c$$Class$S, [this, null, Clazz.getClass(Long), "J"]);
Clazz.new_($I$(5,1).c$$Class$S, [this, null, Clazz.getClass(Float), "F"]);
Clazz.new_($I$(5,1).c$$Class$S, [this, null, Clazz.getClass(Double), "D"]);
Clazz.new_($I$(6,1).c$$Class, [this, null, Clazz.getClass(Number)]);
Clazz.new_($I$(6,1).c$$Class, [this, null, Clazz.getClass($I$(7),['compare$TT$TT','comparing$java_util_function_Function','comparing$java_util_function_Function$java_util_Comparator','comparingDouble$java_util_function_ToDoubleFunction','comparingInt$java_util_function_ToIntFunction','comparingLong$java_util_function_ToLongFunction','equals$O','naturalOrder$','nullsFirst$java_util_Comparator','nullsLast$java_util_Comparator','reverseOrder$','reversed$','thenComparing$java_util_Comparator','thenComparing$java_util_function_Function','thenComparing$java_util_function_Function$java_util_Comparator','thenComparingDouble$java_util_function_ToDoubleFunction','thenComparingInt$java_util_function_ToIntFunction','thenComparingLong$java_util_function_ToLongFunction'])]);
((P$.LegacyReader$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "LegacyReader$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['org.scijava.annotations.legacy.LegacyReader','.NonPrimitiveClassDesc']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'readExtra$java_util_Map', function (map) {
return map.get$O("value");
});
})()
), Clazz.new_($I$(8,1).c$$S$OA, [this, null, C$.toSimpleName$Class(Clazz.getClass(Character)), ["value", "C"]],P$.LegacyReader$10));
((P$.LegacyReader$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "LegacyReader$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['org.scijava.annotations.legacy.LegacyReader','.NonPrimitiveClassDesc']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'readExtra$java_util_Map', function (map) {
if (map.size$() != 1 || !map.containsKey$O("comparator") ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Unexpected comparator"]);
}map.clear$();
p$1.expectToken$I.apply(this.b$['org.scijava.annotations.legacy.LegacyReader'], [119]);
p$1.expectToken$I.apply(this.b$['org.scijava.annotations.legacy.LegacyReader'], [4]);
var size=p$1.read32.apply(this.b$['org.scijava.annotations.legacy.LegacyReader'], []);
for (var i=0; i < size; i++) {
var key=this.b$['org.scijava.annotations.legacy.LegacyReader'].readObject$.apply(this.b$['org.scijava.annotations.legacy.LegacyReader'], []);
var value=this.b$['org.scijava.annotations.legacy.LegacyReader'].readObject$.apply(this.b$['org.scijava.annotations.legacy.LegacyReader'], []);
map.put$TK$TV(key, value);
}
p$1.expectToken$I.apply(this.b$['org.scijava.annotations.legacy.LegacyReader'], [120]);
return map;
});
})()
), Clazz.new_($I$(8,1).c$$S$OA, [this, null, C$.toSimpleName$Class(Clazz.getClass($I$(9))), ["comparator", "Ljava/util/Comparator;"]],P$.LegacyReader$11));
((P$.LegacyReader$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "LegacyReader$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['org.scijava.annotations.legacy.LegacyReader','.NonPrimitiveClassDesc']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'readExtra$java_util_Map', function (map) {
var size=(((map.get$O("size")).valueOf()|0)|0);
map.clear$();
p$1.expectToken$I.apply(this.b$['org.scijava.annotations.legacy.LegacyReader'], [119]);
p$1.expectToken$I.apply(this.b$['org.scijava.annotations.legacy.LegacyReader'], [4]);
var capacity=p$1.read32.apply(this.b$['org.scijava.annotations.legacy.LegacyReader'], []);
var list=Clazz.new_(1,{E:"java.lang.Object"},$I$(10,1).c$$I,[capacity]);
for (var i=0; i < size; i++) {
list.add$TE(this.b$['org.scijava.annotations.legacy.LegacyReader'].readObject$.apply(this.b$['org.scijava.annotations.legacy.LegacyReader'], []));
}
p$1.expectToken$I.apply(this.b$['org.scijava.annotations.legacy.LegacyReader'], [120]);
return list;
});
})()
), Clazz.new_($I$(8,1).c$$S$OA, [this, null, C$.toSimpleName$Class(Clazz.getClass($I$(10))), ["size", "I"]],P$.LegacyReader$12));
((P$.LegacyReader$13||
(function(){/*a*/var C$=Clazz.newClass(P$, "LegacyReader$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['org.scijava.annotations.legacy.LegacyReader','.NonPrimitiveClassDesc']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'readExtra$java_util_Map', function (map) {
map.put$TK$TV("class", map.get$O("className"));
return map;
});
})()
), Clazz.new_($I$(8,1).c$$S$OA, [this, null, "Lnet/java/sezpoz/impl/SerAnnotatedElement;", ["isMethod", "Z", "className", "Ljava/lang/String;", "memberName", "Ljava/lang/String;", "values", "Ljava/util/TreeMap;"]],P$.LegacyReader$13));
((P$.LegacyReader$14||
(function(){/*a*/var C$=Clazz.newClass(P$, "LegacyReader$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['org.scijava.annotations.legacy.LegacyReader','.NonPrimitiveClassDesc']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'readExtra$java_util_Map', function (map) {
return map.get$O("values");
});
})()
), Clazz.new_($I$(8,1).c$$S$OA, [this, null, "Lnet/java/sezpoz/impl/SerAnnConst;", ["name", "Ljava/lang/String;", "values", "Ljava/util/TreeMap;"]],P$.LegacyReader$14));
((P$.LegacyReader$15||
(function(){/*a*/var C$=Clazz.newClass(P$, "LegacyReader$15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['org.scijava.annotations.legacy.LegacyReader','.NonPrimitiveClassDesc']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'readExtra$java_util_Map', function (map) {
map.put$TK$TV("enum", map.get$O("enumName"));
map.put$TK$TV("value", map.get$O("constName"));
return map;
});
})()
), Clazz.new_($I$(8,1).c$$S$OA, [this, null, "Lnet/java/sezpoz/impl/SerEnumConst;", ["enumName", "Ljava/lang/String;", "constName", "Ljava/lang/String;"]],P$.LegacyReader$15));
((P$.LegacyReader$16||
(function(){/*a*/var C$=Clazz.newClass(P$, "LegacyReader$16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['org.scijava.annotations.legacy.LegacyReader','.NonPrimitiveClassDesc']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'readExtra$java_util_Map', function (map) {
return map.get$O("name");
});
})()
), Clazz.new_($I$(8,1).c$$S$OA, [this, null, "Lnet/java/sezpoz/impl/SerTypeConst;", ["name", "Ljava/lang/String;"]],P$.LegacyReader$16));
}
}, 1);

C$.$fields$=[['O',['$in','java.io.InputStream','references','java.util.List','classDescs','java.util.Map']]]

Clazz.newMeth(C$, 'c$$java_io_InputStream', function ($in) {
;C$.$init$.apply(this);
this.$in=Clazz.new_($I$(11,1).c$$java_io_InputStream,[$in]);
var signature=($s$[0] = p$1.read16.apply(this, []), $s$[0]);
if (signature != -21267) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Unrecognized signature: 0x" + Integer.toHexString$I(signature)]);
}var version=p$1.read16.apply(this, []);
if (version != 5) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Unsupported version: " + version]);
}this.references=Clazz.new_(1,{E:"java.lang.Object"},$I$(10,1));
}, 1);

Clazz.newMeth(C$, 'close$', function () {
this.$in.close$();
});

Clazz.newMeth(C$, 'readObject$', function () {
var c=p$1.read8.apply(this, []);
if (c == 112) {
return null;
}if (c == 116) {
var length=p$1.read16.apply(this, []);
var bytes=Clazz.array(Byte.TYPE, [length]);
p$1.readFully$BA.apply(this, [bytes]);
var s= String.instantialize(bytes, "UTF-8");
this.references.add$TE(s);
return s;
}if (c == 113) {
var handle=p$1.read32.apply(this, []) - 8257536;
return this.references.get$I(handle);
}if (c != 115) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Unexpected token: 0x" + Integer.toHexString$I(c)]);
}return p$1.readClassDesc.apply(this, []).readWithoutClassDesc$();
});

Clazz.newMeth(C$, 'readClassDesc', function () {
var c=p$1.read8.apply(this, []);
if (c == 113) {
var handle=p$1.read32.apply(this, []) - 8257536;
return this.references.get$I(handle);
} else if (c == 114) {
return p$1.newClassDesc.apply(this, []);
} else {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Unexpected token: 0x" + Integer.toHexString$I(c)]);
}}, p$1);

Clazz.newMeth(C$, 'expectToken$I', function (token) {
var c=p$1.read8.apply(this, []);
if (c != token) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Unexpected token: 0x" + Integer.toHexString$I(c)]);
}}, p$1);

Clazz.newMeth(C$, 'read8', function () {
return this.$in.read$() & 255;
}, p$1);

Clazz.newMeth(C$, 'read16', function () {
return (p$1.read8.apply(this, []) << 8) | p$1.read8.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'read32', function () {
return (p$1.read16.apply(this, []) << 16) | p$1.read16.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'read64', function () {
return ((p$1.read32.apply(this, []) & 4294967295) << 32) | p$1.read32.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'readString', function () {
var length=p$1.read16.apply(this, []);
var array=Clazz.array(Byte.TYPE, [length]);
p$1.readFully$BA.apply(this, [array]);
return  String.instantialize(array);
}, p$1);

Clazz.newMeth(C$, 'readFully$BA', function (b) {
p$1.readFully$BA$I$I.apply(this, [b, 0, b.length]);
}, p$1);

Clazz.newMeth(C$, 'readFully$BA$I$I', function (b, offset, length) {
while (length > 0){
var count=this.$in.read$BA$I$I(b, offset, length);
if (count < 0) {
throw Clazz.new_(Clazz.load('java.io.EOFException').c$$S,["Reached EOF " + length + " bytes too early" ]);
}offset+=count;
length-=count;
}
}, p$1);

Clazz.newMeth(C$, 'newClassDesc', function () {
var className=p$1.readString.apply(this, []);
var serialVersionUID=p$1.read64.apply(this, []);
var rawName="L" + className.replace$C$C(".", "/") + ";" ;
var result=this.classDescs.get$O(rawName);
if (result == null ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Could not find class for " + className + ", serial " + serialVersionUID ]);
}this.references.add$TE(result);
var flags=p$1.read8.apply(this, []);
if ((flags & ~(3)) != 0) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Cannot handle flags: 0x" + Integer.toHexString$I(flags)]);
}var fieldCount=p$1.read16.apply(this, []);
if (fieldCount != result.fields.size$()) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Incompatible field count: " + fieldCount + " vs " + result.fields.size$() ]);
}result.order=Clazz.array(String, [fieldCount]);
for (var i=0; i < fieldCount; i++) {
var typeChar=p$1.read8.apply(this, []);
var fieldName=p$1.readString.apply(this, []);
if (!result.fields.containsKey$O(fieldName)) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Unexpected field " + fieldName]);
}result.order[i]=fieldName;
var type="" + String.fromCharCode(typeChar);
if (typeChar == 91  || typeChar == 76  ) {
type=this.readObject$();
}if (!type.equals$O(result.fields.get$O(fieldName).className)) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[fieldName + " has type " + type + " instead of expected " + result.fields.get$O(fieldName).className ]);
}}
p$1.expectToken$I.apply(this, [120]);
var c=p$1.read8.apply(this, []);
var superClassDesc=null;
if (c == 114) {
superClassDesc=p$1.newClassDesc.apply(this, []);
} else if (c == 113) {
var handle=p$1.read32.apply(this, []) - 8257536;
superClassDesc=this.references.get$I(handle);
} else if (c != 112) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Unexpected token: 0x" + Integer.toHexString$I(c)]);
}return result;
}, p$1);

Clazz.newMeth(C$, 'toSimpleName$Class', function (clazz) {
return "L" + clazz.getName$().replace$C$C(".", "/") + ";" ;
}, 1);
var $s$ = new Int16Array(1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.LegacyReader, "ClassDesc", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['className'],'O',['order','String[]','fields','java.util.Map']]]

Clazz.newMeth(C$, 'c$$S', function (className) {
;C$.$init$.apply(this);
this.className=className;
this.this$0.classDescs.put$TK$TV(className, this);
}, 1);

Clazz.newMeth(C$, 'readWithoutClassDesc$', function () {
return this.read$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LegacyReader, "NonPrimitiveClassDesc", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.scijava.annotations.legacy.LegacyReader','.ClassDesc']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$OA', function (className, fields) {
;C$.superclazz.c$$S.apply(this,[className]);C$.$init$.apply(this);
if ((fields.length % 2) != 0) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["That's odd: " + fields.length]);
}this.fields=Clazz.new_(1,{K:"String",V:"org.scijava.annotations.legacy.LegacyReader.ClassDesc"},$I$(1,1));
for (var i=0; i < fields.length; i+=2) {
var name=fields[i];
var classDesc;
if (Clazz.instanceOf(fields[i + 1], "org.scijava.annotations.legacy.LegacyReader.ClassDesc")) {
classDesc=fields[i + 1];
} else if (Clazz.instanceOf(fields[i + 1], "java.lang.String")) {
classDesc=this.this$0.classDescs.get$O(fields[i + 1]);
if (classDesc == null ) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Could not find class desc for " + fields[i + 1]]);
}} else {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Invalid class desc: " + fields[i + 1]]);
}this.fields.put$TK$TV(name, classDesc);
}
}, 1);

Clazz.newMeth(C$, 'read$', function () {
var c=p$1.read8.apply(this.this$0, []);
if (c == 112) {
return null;
} else if (c != 115) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Unexpected token: " + Integer.toHexString$I(c)]);
}var classDesc=p$1.readClassDesc.apply(this.this$0, []);
if (classDesc !== this ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["ClassDesc mismatch: " + this.className + " was expected, but got " + classDesc.className ]);
}return this.readWithoutClassDesc$();
});

Clazz.newMeth(C$, 'readWithoutClassDesc$', function () {
var map=Clazz.new_(1,{K:"String",V:"java.lang.Object"},$I$(1,1));
var index=this.this$0.references.size$();
this.this$0.references.add$TE(map);
for (var fieldName, $fieldName = 0, $$fieldName = this.order; $fieldName<$$fieldName.length&&((fieldName=($$fieldName[$fieldName])),1);$fieldName++) {
var classDesc=this.fields.get$O(fieldName);
map.put$TK$TV(fieldName, classDesc.read$());
}
var o=this.readExtra$java_util_Map(map);
if (o !== map ) {
this.this$0.references.set$I$TE(index, o);
}return o;
});

Clazz.newMeth(C$, 'readExtra$java_util_Map', function (o) {
return o;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LegacyReader, "BoxedPrimitiveClassDesc", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.scijava.annotations.legacy.LegacyReader','.NonPrimitiveClassDesc']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['clazz','Class']]]

Clazz.newMeth(C$, 'c$$Class$S', function (clazz, simpleName) {
;C$.superclazz.c$$S$OA.apply(this,[P$.LegacyReader.toSimpleName$Class(clazz), ["value", simpleName]]);C$.$init$.apply(this);
this.clazz=clazz === Clazz.getClass(Double)  || clazz === Clazz.getClass(Float)   ? Clazz.getClass(Double) : clazz === Clazz.getClass($I$(2))  ? Clazz.getClass($I$(2)) : Clazz.getClass(Long);
}, 1);

Clazz.newMeth(C$, 'readExtra$java_util_Map', function (map) {
return this.clazz.cast$O(map.get$O("value"));
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LegacyReader, "InterfaceClassDesc", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.scijava.annotations.legacy.LegacyReader','.NonPrimitiveClassDesc']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$Class', function (clazz) {
;C$.superclazz.c$$S$OA.apply(this,[P$.LegacyReader.toSimpleName$Class(clazz), []]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'read$', function () {
return this.this$0.readObject$.apply(this.this$0, []);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:22 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
