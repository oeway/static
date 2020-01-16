(function(){var P$=Clazz.newPackage("net.imglib2.converter"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "CompositeChannelConverter", null, null, 'net.imglib2.converter.Converter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['L',['i']]]

Clazz.newMeth(C$, 'c$$J', function (i) {
;C$.$init$.apply(this);
this.i=i;
}, 1);

Clazz.newMeth(C$, ['convert$TA$TT','convert$','convert$TA$TB'], function (input, output) {
output.set$TT(input.get$(this.i));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:05 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
