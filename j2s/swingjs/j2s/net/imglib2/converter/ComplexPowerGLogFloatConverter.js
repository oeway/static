(function(){var P$=Clazz.newPackage("net.imglib2.converter"),I$=[[0,'net.imglib2.util.Util']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ComplexPowerGLogFloatConverter", null, null, 'net.imglib2.converter.Converter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['convert$TR$net_imglib2_type_numeric_real_FloatType','convert$','convert$TA$TB'], function (input, output) {
output.set$F($I$(1).gLog$F$F(input.getPowerFloat$(), 2));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:05 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
