(function(){var P$=Clazz.newPackage("net.imglib2.converter.readwrite"),I$=[[0,'net.imglib2.type.numeric.integer.UnsignedByteType',['net.imglib2.converter.readwrite.ARGBChannelSamplerConverter','.ARGBChannelConvertingAccess']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ARGBChannelSamplerConverter", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'net.imglib2.converter.readwrite.SamplerConverter');
C$.$classes$=[['ARGBChannelConvertingAccess',18]];

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.masks=Clazz.array(Integer.TYPE, -1, [16777215, -16711681, -65281, -256]);
C$.shifts=Clazz.array(Integer.TYPE, -1, [24, 16, 8, 0]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['mask','shift']]
,['O',['masks','int[]','+shifts']]]

Clazz.newMeth(C$, 'c$$I', function (channel) {
;C$.$init$.apply(this);
this.mask=C$.masks[channel];
this.shift=C$.shifts[channel];
}, 1);

Clazz.newMeth(C$, ['convert$net_imglib2_Sampler','convert$'], function (sampler) {
return Clazz.new_($I$(1,1).c$$net_imglib2_img_basictypeaccess_ByteAccess,[Clazz.new_($I$(2,1).c$$net_imglib2_Sampler, [this, null, sampler])]);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.ARGBChannelSamplerConverter, "ARGBChannelConvertingAccess", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'net.imglib2.img.basictypeaccess.ByteAccess');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['sampler','net.imglib2.Sampler']]]

Clazz.newMeth(C$, 'c$$net_imglib2_Sampler', function (sampler) {
;C$.$init$.apply(this);
this.sampler=sampler;
}, 1);

Clazz.newMeth(C$, 'getValue$I', function (index) {
return $b$[0] = (((this.sampler.get$().get$() >> this.this$0.shift) & 255)|0), $b$[0];
});

Clazz.newMeth(C$, 'setValue$I$B', function (index, value) {
var t=this.sampler.get$();
t.set$I((t.get$() & this.this$0.mask) | (value << this.this$0.shift));
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:05 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
