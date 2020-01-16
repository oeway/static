(function(){var P$=Clazz.newPackage("net.imglib2.display"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractLinearRange", null, null, 'net.imglib2.display.LinearRange');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.min=0;
this.max=1;
this.scale=1;
}, 1);

C$.$fields$=[['D',['min','max','scale']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$D$D', function (min, max) {
;C$.$init$.apply(this);
this.min=min;
this.max=max;
this.scale=max - min;
}, 1);

Clazz.newMeth(C$, 'roundPositive$D', function (a) {
return ((a + 0.5)|0);
}, 1);

Clazz.newMeth(C$, 'getMin$', function () {
return this.min;
});

Clazz.newMeth(C$, 'getMax$', function () {
return this.max;
});

Clazz.newMeth(C$, 'setMax$D', function (max) {
this.max=max;
this.scale=max - this.min;
});

Clazz.newMeth(C$, 'setMin$D', function (min) {
this.min=min;
this.scale=this.max - min;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:06 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
