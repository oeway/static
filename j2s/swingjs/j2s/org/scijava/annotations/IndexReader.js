(function(){var P$=Clazz.newPackage("org.scijava.annotations"),p$1={},I$=[[0,'java.io.PushbackInputStream','java.io.BufferedInputStream','java.util.LinkedHashMap','java.util.ArrayList','StringBuilder','org.scijava.annotations.legacy.LegacyReader']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IndexReader");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['originalISName'],'O',['$in','java.io.PushbackInputStream']]]

Clazz.newMeth(C$, 'c$$java_io_InputStream', function ($in) {
C$.c$$java_io_InputStream$S.apply(this, [$in, ""]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream$S', function ($in, isName) {
;C$.$init$.apply(this);
this.$in=Clazz.instanceOf($in, "java.io.PushbackInputStream") ? $in : Clazz.new_($I$(1,1).c$$java_io_InputStream,[Clazz.new_($I$(2,1).c$$java_io_InputStream,[$in])]);
this.originalISName=isName;
}, 1);

Clazz.newMeth(C$, 'next$', function () {
var c=this.$in.read$();
while (Character.isWhitespace$I(c))c=this.$in.read$();

if (c < 0) {
return null;
}if (c == 123 ) {
var map=Clazz.new_(1,{K:"String",V:"java.lang.Object"},$I$(3,1));
for (; ; ) {
if (p$1.expect$C$C.apply(this, ["\"", "}"]) == 1) {
return map;
}var key=p$1.readString.apply(this, []);
p$1.expect$C.apply(this, [":"]);
var value=this.next$();
if (key.startsWith$S("!")) {
System.out.println$S("IndexReader found " + key + ":" + value );
}map.put$TK$TV(key, value);
if (p$1.expect$C$C.apply(this, [",", "}"]) == 1) {
return map;
}}
}if (c == 91 ) {
var list=Clazz.new_(1,{E:"java.lang.Object"},$I$(4,1));
c=this.$in.read$();
if (c == 93 ) {
return list;
}this.$in.unread$I(c);
for (; ; ) {
var value=this.next$();
list.add$TE(value);
if (p$1.expect$C$C.apply(this, [",", "]"]) == 1) {
return list;
}}
}if (c == 116 ) {
p$1.expect$S.apply(this, ["rue"]);
return new Boolean(true);
}if (c == 102 ) {
p$1.expect$S.apply(this, ["alse"]);
return new Boolean(false);
}if (c == 110 ) {
p$1.expect$S.apply(this, ["ull"]);
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Invalid stream: contains null"]);
}if (c == 46  || c == 45   || (c >= 48  && c <= 57  ) ) {
var isInteger=true;
var builder=Clazz.new_($I$(5,1));
for (; ; ) {
builder.append$C(String.fromCharCode(c));
c=this.$in.read$();
if (c == 46  || c == 101   || c == 69  ) {
isInteger=false;
} else if (c < 48  || c > 57  ) {
this.$in.unread$I(c);
break;
}}
c=this.$in.read$();
if (c == 73  && "-".equals$O(builder.toString()) ) {
p$1.expect$S.apply(this, ["nfinity"]);
return new Double(-Infinity);
}this.$in.unread$I(c);
if (isInteger) {
return new Long(Long.parseLong$S(builder.toString()));
}return new Double(Double.parseDouble$S(builder.toString()));
}if (c == 73 ) {
p$1.expect$S.apply(this, ["nfinity"]);
return new Double(Infinity);
}if (c == 78 ) {
p$1.expect$S.apply(this, ["aN"]);
return new Double(NaN);
}if (c == 34 ) {
return p$1.readString.apply(this, []);
}throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Unexpected char: '" + String.fromCharCode(c) + "'" + ((this.originalISName.length$() > 0) ? " from " + this.originalISName : "") ]);
});

Clazz.newMeth(C$, 'close$', function () {
this.$in.close$();
});

Clazz.newMeth(C$, 'readString', function () {
var builder=Clazz.new_($I$(5,1));
for (; ; ) {
var c=this.$in.read$();
if (c == 34 ) {
return builder.toString();
}builder.append$C(String.fromCharCode(p$1.readCharacter$I.apply(this, [c])));
}
}, p$1);

Clazz.newMeth(C$, 'readCharacter$I', function (first) {
var c=first;
if (c == 92 ) {
c=this.$in.read$();
if (c == 117 ) {
var hex="" + (String.fromCharCode(this.$in.read$())) + (String.fromCharCode(this.$in.read$())) + (String.fromCharCode(this.$in.read$())) + (String.fromCharCode(this.$in.read$())) ;
c=Integer.parseInt$S$I(hex, 16);
} else if (c != 92  && c != 34  ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Expected '\"' or '\\', got '" + c + "'" ]);
}}return c;
}, p$1);

Clazz.newMeth(C$, 'expect$C', function (expect) {
var c=this.$in.read$();
if (c != expect.$c() ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Expected '" + expect + "', got '" + String.fromCharCode(c) + "'" ]);
}}, p$1);

Clazz.newMeth(C$, 'expect$C$C', function (a, b) {
var c=this.$in.read$();
if (c == a.$c() ) {
return 0;
}if (c == b.$c() ) {
return 1;
}throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Expected '" + a + "' or '" + b + "', got '" + String.fromCharCode(c) + "'" + ((this.originalISName.length$() > 0) ? " from " + this.originalISName : "") ]);
}, p$1);

Clazz.newMeth(C$, 'expect$S', function (match) {
for (var c, $c = 0, $$c = match.toCharArray$(); $c<$$c.length&&((c=($$c[$c])),1);$c++) {
p$1.expect$C.apply(this, [c]);
}
}, p$1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.$in=null;
this.originalISName="";
}, 1);

Clazz.newMeth(C$, 'getLegacyReader$java_io_InputStream', function ($in) {
var legacy=Clazz.new_($I$(6,1).c$$java_io_InputStream,[$in]);
return ((P$.IndexReader$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "IndexReader$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('org.scijava.annotations.IndexReader'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'next$', function () {
return this.$finals$.legacy.readObject$();
});

Clazz.newMeth(C$, 'close$', function () {
this.$finals$.legacy.close$();
});
})()
), Clazz.new_(C$, [this, {legacy:legacy}],P$.IndexReader$1));
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:22 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
