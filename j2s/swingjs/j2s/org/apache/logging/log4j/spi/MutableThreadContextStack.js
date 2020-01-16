(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.spi"),p$1={},I$=[[0,'java.util.ArrayList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MutableThreadContextStack", null, null, ['org.apache.logging.log4j.spi.ThreadContextStack', 'org.apache.logging.log4j.util.StringBuilderFormattable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['frozen'],'O',['list','java.util.List']]
,['L',['serialVersionUID']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$java_util_List.apply(this, [Clazz.new_(1,{E:"String"},$I$(1,1))]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_List', function (list) {
;C$.$init$.apply(this);
this.list=Clazz.new_(1,{E:"String"},$I$(1,1).c$$java_util_Collection,[list]);
}, 1);

Clazz.newMeth(C$, 'c$$org_apache_logging_log4j_spi_MutableThreadContextStack', function (stack) {
;C$.$init$.apply(this);
this.list=Clazz.new_(1,{E:"String"},$I$(1,1).c$$java_util_Collection,[stack.list]);
}, 1);

Clazz.newMeth(C$, 'checkInvariants', function () {
if (this.frozen) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["context stack has been frozen"]);
}}, p$1);

Clazz.newMeth(C$, 'pop$', function () {
p$1.checkInvariants.apply(this, []);
if (this.list.isEmpty$()) {
return null;
}var last=this.list.size$() - 1;
var result=this.list.remove$I(last);
return result;
});

Clazz.newMeth(C$, 'peek$', function () {
if (this.list.isEmpty$()) {
return null;
}var last=this.list.size$() - 1;
return this.list.get$I(last);
});

Clazz.newMeth(C$, 'push$S', function (message) {
p$1.checkInvariants.apply(this, []);
this.list.add$TE(message);
});

Clazz.newMeth(C$, 'getDepth$', function () {
return this.list.size$();
});

Clazz.newMeth(C$, 'asList$', function () {
return this.list;
});

Clazz.newMeth(C$, 'trim$I', function (depth) {
p$1.checkInvariants.apply(this, []);
if (depth < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Maximum stack depth cannot be negative"]);
}if (this.list == null ) {
return;
}var copy=Clazz.new_(1,{E:"String"},$I$(1,1).c$$I,[this.list.size$()]);
var count=Math.min(depth, this.list.size$());
for (var i=0; i < count; i++) {
copy.add$TE(this.list.get$I(i));
}
this.list.clear$();
this.list.addAll$java_util_Collection(copy);
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$org_apache_logging_log4j_spi_MutableThreadContextStack,[this]);
});

Clazz.newMeth(C$, 'clear$', function () {
p$1.checkInvariants.apply(this, []);
this.list.clear$();
});

Clazz.newMeth(C$, 'size$', function () {
return this.list.size$();
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.list.isEmpty$();
});

Clazz.newMeth(C$, 'contains$O', function (o) {
return this.list.contains$O(o);
});

Clazz.newMeth(C$, 'iterator$', function () {
return this.list.iterator$();
});

Clazz.newMeth(C$, 'toArray$', function () {
return this.list.toArray$();
});

Clazz.newMeth(C$, 'toArray$__TA', function (ts) {
return this.list.toArray$__TA(ts);
});

Clazz.newMeth(C$, ['add$S','add$TE'], function (s) {
p$1.checkInvariants.apply(this, []);
return this.list.add$TE(s);
});

Clazz.newMeth(C$, 'remove$O', function (o) {
p$1.checkInvariants.apply(this, []);
return this.list.remove$O(o);
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (objects) {
return this.list.containsAll$java_util_Collection(objects);
});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (strings) {
p$1.checkInvariants.apply(this, []);
return this.list.addAll$java_util_Collection(strings);
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (objects) {
p$1.checkInvariants.apply(this, []);
return this.list.removeAll$java_util_Collection(objects);
});

Clazz.newMeth(C$, 'retainAll$java_util_Collection', function (objects) {
p$1.checkInvariants.apply(this, []);
return this.list.retainAll$java_util_Collection(objects);
});

Clazz.newMeth(C$, 'toString', function () {
return String.valueOf$O(this.list);
});

Clazz.newMeth(C$, ['formatTo$StringBuilder','formatTo$'], function (buffer) {
buffer.append$C("[");
for (var i=0; i < this.list.size$(); i++) {
if (i > 0) {
buffer.append$C(",").append$C(" ");
}buffer.append$S(this.list.get$I(i));
}
buffer.append$C("]");
});

Clazz.newMeth(C$, 'hashCode$', function () {
var prime=31;
var result=1;
result=31 * result + ((this.list == null ) ? 0 : this.list.hashCode$());
return result;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (this === obj ) {
return true;
}if (obj == null ) {
return false;
}if (!(Clazz.instanceOf(obj, "org.apache.logging.log4j.spi.ThreadContextStack"))) {
return false;
}var other=obj;
var otherAsList=other.asList$();
if (this.list == null ) {
if (otherAsList != null ) {
return false;
}} else if (!this.list.equals$O(otherAsList)) {
return false;
}return true;
});

Clazz.newMeth(C$, 'getImmutableStackOrNull$', function () {
return this.copy$();
});

Clazz.newMeth(C$, 'freeze$', function () {
this.frozen=true;
});

Clazz.newMeth(C$, 'isFrozen$', function () {
return this.frozen;
});
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:55 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
