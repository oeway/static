(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.spi"),p$1={},I$=[[0,'ThreadLocal','org.apache.logging.log4j.spi.MutableThreadContextStack','java.util.Collections','org.apache.logging.log4j.util.StringBuilders']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultThreadContextStack", null, null, ['org.apache.logging.log4j.spi.ThreadContextStack', 'org.apache.logging.log4j.util.StringBuilderFormattable']);

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.STACK=Clazz.new_(1,{T:"org.apache.logging.log4j.spi.MutableThreadContextStack"},$I$(1,1));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['useStack']]
,['L',['serialVersionUID'],'O',['STACK','ThreadLocal']]]

Clazz.newMeth(C$, 'c$$Z', function (useStack) {
;C$.$init$.apply(this);
this.useStack=useStack;
}, 1);

Clazz.newMeth(C$, 'getNonNullStackCopy', function () {
var values=C$.STACK.get$();
return (values == null  ? Clazz.new_($I$(2,1)) : values.copy$());
}, p$1);

Clazz.newMeth(C$, ['add$S','add$TE'], function (s) {
if (!this.useStack) {
return false;
}var copy=p$1.getNonNullStackCopy.apply(this, []);
copy.add$S(s);
copy.freeze$();
C$.STACK.set$TT(copy);
return true;
});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (strings) {
if (!this.useStack || strings.isEmpty$() ) {
return false;
}var copy=p$1.getNonNullStackCopy.apply(this, []);
copy.addAll$java_util_Collection(strings);
copy.freeze$();
C$.STACK.set$TT(copy);
return true;
});

Clazz.newMeth(C$, 'asList$', function () {
var values=C$.STACK.get$();
if (values == null ) {
return $I$(3).emptyList$();
}return values.asList$();
});

Clazz.newMeth(C$, 'clear$', function () {
C$.STACK.remove$();
});

Clazz.newMeth(C$, 'contains$O', function (o) {
var values=C$.STACK.get$();
return values != null  && values.contains$O(o) ;
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (objects) {
if (objects.isEmpty$()) {
return true;
}var values=C$.STACK.get$();
return values != null  && values.containsAll$java_util_Collection(objects) ;
});

Clazz.newMeth(C$, 'copy$', function () {
var values=null;
if (!this.useStack || (values=C$.STACK.get$()) == null  ) {
return Clazz.new_($I$(2,1));
}return values.copy$();
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (this === obj ) {
return true;
}if (obj == null ) {
return false;
}if (Clazz.instanceOf(obj, "org.apache.logging.log4j.spi.DefaultThreadContextStack")) {
var other=obj;
if (this.useStack != other.useStack ) {
return false;
}}if (!(Clazz.instanceOf(obj, "org.apache.logging.log4j.spi.ThreadContextStack"))) {
return false;
}var other=obj;
var values=C$.STACK.get$();
if (values == null ) {
return false;
}return values.equals$O(other);
});

Clazz.newMeth(C$, 'getDepth$', function () {
var values=C$.STACK.get$();
return values == null  ? 0 : values.getDepth$();
});

Clazz.newMeth(C$, 'hashCode$', function () {
var values=C$.STACK.get$();
var prime=31;
var result=1;
result=31 * result + ((values == null ) ? 0 : values.hashCode$());
return result;
});

Clazz.newMeth(C$, 'isEmpty$', function () {
var values=C$.STACK.get$();
return values == null  || values.isEmpty$() ;
});

Clazz.newMeth(C$, 'iterator$', function () {
var values=C$.STACK.get$();
if (values == null ) {
var empty=$I$(3).emptyList$();
return empty.iterator$();
}return values.iterator$();
});

Clazz.newMeth(C$, 'peek$', function () {
var values=C$.STACK.get$();
if (values == null  || values.size$() == 0 ) {
return "";
}return values.peek$();
});

Clazz.newMeth(C$, 'pop$', function () {
if (!this.useStack) {
return "";
}var values=C$.STACK.get$();
if (values == null  || values.size$() == 0 ) {
return "";
}var copy=values.copy$();
var result=copy.pop$();
copy.freeze$();
C$.STACK.set$TT(copy);
return result;
});

Clazz.newMeth(C$, 'push$S', function (message) {
if (!this.useStack) {
return;
}this.add$S(message);
});

Clazz.newMeth(C$, 'remove$O', function (o) {
if (!this.useStack) {
return false;
}var values=C$.STACK.get$();
if (values == null  || values.size$() == 0 ) {
return false;
}var copy=values.copy$();
var result=copy.remove$O(o);
copy.freeze$();
C$.STACK.set$TT(copy);
return result;
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (objects) {
if (!this.useStack || objects.isEmpty$() ) {
return false;
}var values=C$.STACK.get$();
if (values == null  || values.isEmpty$() ) {
return false;
}var copy=values.copy$();
var result=copy.removeAll$java_util_Collection(objects);
copy.freeze$();
C$.STACK.set$TT(copy);
return result;
});

Clazz.newMeth(C$, 'retainAll$java_util_Collection', function (objects) {
if (!this.useStack || objects.isEmpty$() ) {
return false;
}var values=C$.STACK.get$();
if (values == null  || values.isEmpty$() ) {
return false;
}var copy=values.copy$();
var result=copy.retainAll$java_util_Collection(objects);
copy.freeze$();
C$.STACK.set$TT(copy);
return result;
});

Clazz.newMeth(C$, 'size$', function () {
var values=C$.STACK.get$();
return values == null  ? 0 : values.size$();
});

Clazz.newMeth(C$, 'toArray$', function () {
var result=C$.STACK.get$();
if (result == null ) {
return Clazz.array(String, [0]);
}return result.toArray$__TA(Clazz.array(java.lang.Object, [result.size$()]));
});

Clazz.newMeth(C$, 'toArray$__TA', function (ts) {
var result=C$.STACK.get$();
if (result == null ) {
if (ts.length > 0) {
ts[0]=null;
}return ts;
}return result.toArray$__TA(ts);
});

Clazz.newMeth(C$, 'toString', function () {
var values=C$.STACK.get$();
return values == null  ? "[]" : values.toString();
});

Clazz.newMeth(C$, ['formatTo$StringBuilder','formatTo$'], function (buffer) {
var values=C$.STACK.get$();
if (values == null ) {
buffer.append$S("[]");
} else {
$I$(4).appendValue$StringBuilder$O(buffer, values);
}});

Clazz.newMeth(C$, 'trim$I', function (depth) {
if (depth < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Maximum stack depth cannot be negative"]);
}var values=C$.STACK.get$();
if (values == null ) {
return;
}var copy=values.copy$();
copy.trim$I(depth);
copy.freeze$();
C$.STACK.set$TT(copy);
});

Clazz.newMeth(C$, 'getImmutableStackOrNull$', function () {
return C$.STACK.get$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:53 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
