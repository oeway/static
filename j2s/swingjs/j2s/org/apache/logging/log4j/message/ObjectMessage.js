(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.message"),p$1={},I$=[[0,'org.apache.logging.log4j.util.StringBuilders']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ObjectMessage", null, null, ['org.apache.logging.log4j.message.Message', 'org.apache.logging.log4j.util.StringBuilderFormattable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['objectString'],'O',['obj','java.lang.Object']]
,['L',['serialVersionUID']]]

Clazz.newMeth(C$, 'c$$O', function (obj) {
;C$.$init$.apply(this);
this.obj=obj == null  ? "null" : obj;
}, 1);

Clazz.newMeth(C$, 'getFormattedMessage$', function () {
if (this.objectString == null ) {
this.objectString=String.valueOf$O(this.obj);
}return this.objectString;
});

Clazz.newMeth(C$, ['formatTo$StringBuilder','formatTo$'], function (buffer) {
if (this.objectString != null ) {
buffer.append$S(this.objectString);
} else {
$I$(1).appendValue$StringBuilder$O(buffer, this.obj);
}});

Clazz.newMeth(C$, 'getFormat$', function () {
return this.getFormattedMessage$();
});

Clazz.newMeth(C$, 'getParameter$', function () {
return this.obj;
});

Clazz.newMeth(C$, 'getParameters$', function () {
return Clazz.array(java.lang.Object, -1, [this.obj]);
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (this === o ) {
return true;
}if (o == null  || this.getClass$() !== o.getClass$()  ) {
return false;
}var that=o;
return this.obj == null  ? that.obj == null  : p$1.equalObjectsOrStrings$O$O.apply(this, [this.obj, that.obj]);
});

Clazz.newMeth(C$, 'equalObjectsOrStrings$O$O', function (left, right) {
return left.equals$O(right) || String.valueOf$O(left).equals$O(String.valueOf$O(right)) ;
}, p$1);

Clazz.newMeth(C$, 'hashCode$', function () {
return this.obj != null  ? this.obj.hashCode$() : 0;
});

Clazz.newMeth(C$, 'toString', function () {
return this.getFormattedMessage$();
});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream', function (out) {
out.defaultWriteObject$();
if (Clazz.instanceOf(this.obj, "java.io.Serializable")) {
out.writeObject$O(this.obj);
} else {
out.writeObject$O(String.valueOf$O(this.obj));
}}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function ($in) {
$in.defaultReadObject$();
this.obj=$in.readObject$();
}, p$1);

Clazz.newMeth(C$, 'getThrowable$', function () {
return Clazz.instanceOf(this.obj, "java.lang.Throwable") ? this.obj : null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:53 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
