(function(){var P$=Clazz.newPackage("net.imglib2.converter"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "RealUnsignedByteConverter", null, 'net.imglib2.display.AbstractLinearRange', 'net.imglib2.converter.Converter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$D$D', function (min, max) {
;C$.superclazz.c$$D$D.apply(this,[min, max]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['convert$TR$net_imglib2_type_numeric_integer_UnsignedByteType','convert$','convert$TA$TB'], function (input, output) {
var a=input.getRealDouble$();
output.set$I(Math.min(255, net.imglib2.display.AbstractLinearRange.roundPositive$D(Math.max(0, ((a - this.min) / this.scale * 255.0)))));
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:05 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
