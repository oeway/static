(function(){var P$=Clazz.newPackage("net.imglib2.converter.readwrite"),p$1={},I$=[[0,'net.imglib2.converter.ColorChannelOrder',['net.imglib2.converter.readwrite.CompositeARGBSamplerConverter','.CompositeARGBAccess'],['net.imglib2.converter.readwrite.CompositeARGBSamplerConverter','.CompositeRGBAccess'],'net.imglib2.type.numeric.ARGBType']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CompositeARGBSamplerConverter", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'net.imglib2.converter.readwrite.SamplerConverter');
C$.$classes$=[['CompositeARGBAccess',26],['CompositeRGBAccess',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['factory','java.util.function.Function']]]

Clazz.newMeth(C$, 'c$$net_imglib2_converter_ColorChannelOrder', function (order) {
;C$.$init$.apply(this);
this.factory=p$1.getAccessFactory$net_imglib2_converter_ColorChannelOrder.apply(this, [order]);
}, 1);

Clazz.newMeth(C$, 'getAccessFactory$net_imglib2_converter_ColorChannelOrder', function (order) {
switch (order) {
case $I$(1).ARGB:
return ((P$.CompositeARGBSamplerConverter$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "CompositeARGBSamplerConverter$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$net_imglib2_Sampler,[t])});
})()
), Clazz.new_(1,{T:"net.imglib2.Sampler",R:"? extends net.imglib2.img.basictypeaccess.IntAccess"},P$.CompositeARGBSamplerConverter$lambda1.$init$, [this, null]));
case $I$(1).RGB:
return ((P$.CompositeARGBSamplerConverter$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "CompositeARGBSamplerConverter$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$net_imglib2_Sampler,[t])});
})()
), Clazz.new_(1,{T:"net.imglib2.Sampler",R:"? extends net.imglib2.img.basictypeaccess.IntAccess"},P$.CompositeARGBSamplerConverter$lambda2.$init$, [this, null]));
}
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Converter only supports ARGB and RGB channel order."]);
}, p$1);

Clazz.newMeth(C$, ['convert$net_imglib2_Sampler','convert$'], function (sampler) {
return Clazz.new_($I$(4,1).c$$net_imglib2_img_basictypeaccess_IntAccess,[this.factory.apply$(sampler)]);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.CompositeARGBSamplerConverter, "CompositeARGBAccess", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'net.imglib2.img.basictypeaccess.IntAccess');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['sampler','net.imglib2.Sampler']]]

Clazz.newMeth(C$, 'c$$net_imglib2_Sampler', function (sampler) {
;C$.$init$.apply(this);
this.sampler=sampler;
}, 1);

Clazz.newMeth(C$, 'getValue$I', function (index) {
var composite=this.sampler.get$();
return (composite.get$(0).get$() << 24) + (composite.get$(1).get$() << 16) + (composite.get$(2).get$() << 8) + composite.get$(3).get$() ;
});

Clazz.newMeth(C$, 'setValue$I$I', function (index, value) {
var composite=this.sampler.get$();
composite.get$(0).set$I(value >> 24);
composite.get$(1).set$I(value >> 16);
composite.get$(2).set$I(value >> 8);
composite.get$(3).set$I(value);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CompositeARGBSamplerConverter, "CompositeRGBAccess", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'net.imglib2.img.basictypeaccess.IntAccess');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['sampler','net.imglib2.Sampler']]]

Clazz.newMeth(C$, 'c$$net_imglib2_Sampler', function (sampler) {
;C$.$init$.apply(this);
this.sampler=sampler;
}, 1);

Clazz.newMeth(C$, 'getValue$I', function (index) {
var composite=this.sampler.get$();
return -16777216 + (composite.get$(0).get$() << 16) + (composite.get$(1).get$() << 8) + composite.get$(2).get$() ;
});

Clazz.newMeth(C$, 'setValue$I$I', function (index, value) {
var composite=this.sampler.get$();
composite.get$(0).set$I(value >> 16);
composite.get$(1).set$I(value >> 8);
composite.get$(2).set$I(value);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:05 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
