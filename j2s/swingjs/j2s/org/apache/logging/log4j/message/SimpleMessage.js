(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.message"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "SimpleMessage", null, null, ['org.apache.logging.log4j.message.Message', 'org.apache.logging.log4j.util.StringBuilderFormattable', 'CharSequence']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['message'],'O',['charSequence','CharSequence']]
,['L',['serialVersionUID']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$S.apply(this, [null]);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (message) {
;C$.$init$.apply(this);
this.message=message;
this.charSequence=message;
}, 1);

Clazz.newMeth(C$, 'c$$CharSequence', function (charSequence) {
;C$.$init$.apply(this);
this.charSequence=charSequence;
}, 1);

Clazz.newMeth(C$, 'getFormattedMessage$', function () {
return this.message=this.message == null  ? String.valueOf$O(this.charSequence) : this.message;
});

Clazz.newMeth(C$, ['formatTo$StringBuilder','formatTo$'], function (buffer) {
buffer.append$CharSequence(this.message != null  ? this.message : this.charSequence);
});

Clazz.newMeth(C$, 'getFormat$', function () {
return this.message;
});

Clazz.newMeth(C$, 'getParameters$', function () {
return null;
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (this === o ) {
return true;
}if (o == null  || this.getClass$() !== o.getClass$()  ) {
return false;
}var that=o;
return !(this.charSequence != null  ? !this.charSequence.equals$O(that.charSequence) : that.charSequence != null );
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.charSequence != null  ? this.charSequence.hashCode$() : 0;
});

Clazz.newMeth(C$, 'toString', function () {
return this.getFormattedMessage$();
});

Clazz.newMeth(C$, 'getThrowable$', function () {
return null;
});

Clazz.newMeth(C$, 'length$', function () {
return this.charSequence == null  ? 0 : this.charSequence.length$();
});

Clazz.newMeth(C$, 'charAt$I', function (index) {
return this.charSequence.charAt$I(index);
});

Clazz.newMeth(C$, 'subSequence$I$I', function (start, end) {
return this.charSequence.subSequence$I$I(start, end);
});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream', function (out) {
this.getFormattedMessage$();
out.defaultWriteObject$();
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function ($in) {
$in.defaultReadObject$();
this.charSequence=this.message;
}, p$1);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:57 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
