(function(){var P$=Clazz.newPackage("net.imglib2.converter.readwrite"),I$=[[0,'net.imglib2.type.numeric.real.DoubleType',['net.imglib2.converter.readwrite.RealDoubleSamplerConverter','.RealConvertingDoubleAccess']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RealDoubleSamplerConverter", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'net.imglib2.converter.readwrite.SamplerConverter');
C$.$classes$=[['RealConvertingDoubleAccess',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['convert$net_imglib2_Sampler','convert$'], function (sampler) {
return Clazz.new_($I$(1,1).c$$net_imglib2_img_basictypeaccess_DoubleAccess,[Clazz.new_(1,{R:"Object"},$I$(2,1).c$$net_imglib2_Sampler,[sampler])]);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.RealDoubleSamplerConverter, "RealConvertingDoubleAccess", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'net.imglib2.img.basictypeaccess.DoubleAccess');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['sampler','net.imglib2.Sampler']]]

Clazz.newMeth(C$, 'c$$net_imglib2_Sampler', function (sampler) {
;C$.$init$.apply(this);
this.sampler=sampler;
}, 1);

Clazz.newMeth(C$, 'getValue$I', function (index) {
return this.sampler.get$().getRealDouble$();
});

Clazz.newMeth(C$, 'setValue$I$D', function (index, value) {
this.sampler.get$().setReal$D(value);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:06 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
