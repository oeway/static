(function(){var P$=Clazz.newPackage("net.imglib2.converter"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "RealARGBConverter", null, 'net.imglib2.display.AbstractLinearRange', 'net.imglib2.converter.Converter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.alpha=-16777216;
}, 1);

C$.$fields$=[['I',['alpha']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$D$D', function (min, max) {
;C$.superclazz.c$$D$D.apply(this,[min, max]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['convert$TR$net_imglib2_type_numeric_ARGBType','convert$','convert$TA$TB'], function (input, output) {
var a=input.getRealDouble$();
var b=Math.min(255, net.imglib2.display.AbstractLinearRange.roundPositive$D(Math.max(0, (a - this.min) / this.scale * 255.0)));
var argb=this.alpha | (b << 8 | b) << 8 | b;
output.set$I(argb);
});

Clazz.newMeth(C$, 'setAlpha$I', function (alpha) {
this.alpha=(alpha & 255) << 24;
});

Clazz.newMeth(C$, 'getAlpha$', function () {
return this.alpha >>> 24;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:05 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
