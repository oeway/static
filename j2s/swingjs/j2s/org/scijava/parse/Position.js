(function(){var P$=Clazz.newPackage("org.scijava.parse"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "Position");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['index']]]

Clazz.newMeth(C$, 'get$', function () {
return this.index;
});

Clazz.newMeth(C$, 'set$I', function (index) {
this.index=index;
});

Clazz.newMeth(C$, 'inc$', function () {
this.inc$I(1);
});

Clazz.newMeth(C$, 'inc$I', function (count) {
this.index+=count;
});

Clazz.newMeth(C$, 'ch$CharSequence', function (s) {
return this.ch$CharSequence$I(s, 0);
});

Clazz.newMeth(C$, 'ch$CharSequence$I', function (s, offset) {
var i=this.get$() + offset;
return i < s.length$() ? s.charAt$I(i) : "\u0000";
});

Clazz.newMeth(C$, 'die$S', function (message) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[p$1.messageWithDetails$S.apply(this, [message])]);
});

Clazz.newMeth(C$, 'assertThat$Z$S', function (condition, message) {
if (condition) return;
this.fail$S(message);
});

Clazz.newMeth(C$, 'fail$S', function (message) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[p$1.messageWithDetails$S.apply(this, [message])]);
});

Clazz.newMeth(C$, 'toString', function () {
return "" + this.get$();
});

Clazz.newMeth(C$, 'messageWithDetails$S', function (message) {
return message + " at index " + this.get$() ;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:21 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
