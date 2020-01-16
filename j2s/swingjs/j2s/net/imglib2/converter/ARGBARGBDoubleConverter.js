(function(){var P$=Clazz.newPackage("net.imglib2.converter"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ARGBARGBDoubleConverter", null, null, 'net.imglib2.converter.Converter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['convert$net_imglib2_type_numeric_ARGBType$TT','convert$','convert$TA$TB'], function (input, output) {
var argb=input.get$();
output.set$D$D$D$D(((argb >> 24) & 255) * 0.00392156862745098, ((argb >> 16) & 255) * 0.00392156862745098, ((argb >> 8) & 255) * 0.00392156862745098, (argb & 255) * 0.00392156862745098);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:05 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
