(function(){var P$=Clazz.newPackage("net.imglib2.realtransform"),I$=[[0,'net.imglib2.realtransform.InverseRealTransform']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "InvertibleRealTransformSequence", null, 'net.imglib2.realtransform.AbstractRealTransformSequence', 'net.imglib2.realtransform.InvertibleRealTransform');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'applyInverse$DA$DA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.nSource && target.length >= this.nTarget }, function(){return "Input dimensions too small."});
var s=this.transforms.size$() - 1;
if (s > -1) {
if (s > 0) {
this.transforms.get$I(s).applyInverse$DA$DA(this.tmp, target);
for (var i=s - 1; i > 0; --i) this.transforms.get$I(i).applyInverse$DA$DA(this.tmp, this.tmp);

this.transforms.get$I(0).applyInverse$DA$DA(source, this.tmp);
} else this.transforms.get$I(0).applyInverse$DA$DA(source, target);
}});

Clazz.newMeth(C$, 'applyInverse$FA$FA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.nSource && target.length >= this.nTarget }, function(){return "Input dimensions too small."});
var s=this.transforms.size$() - 1;
if (s > -1) {
for (var d=0; d < this.nTarget; ++d) this.tmp[d]=target[d];

for (var i=s; i > -1; --i) this.transforms.get$I(i).applyInverse$DA$DA(this.tmp, this.tmp);

for (var d=0; d < this.nSource; ++d) source[d]=this.tmp[d];

}});

Clazz.newMeth(C$, 'applyInverse$net_imglib2_RealPositionable$net_imglib2_RealLocalizable', function (source, target) {
Clazz.assert(C$, this, function(){return source.numDimensions$() >= this.nSource && target.numDimensions$() >= this.nTarget }, function(){return "Input dimensions too small."});
var s=this.transforms.size$() - 1;
if (s > -1) {
if (s > 0) {
this.transforms.get$I(s).applyInverse$net_imglib2_RealPositionable$net_imglib2_RealLocalizable(this.ptmp, target);
for (var i=s - 1; i > 0; --i) this.transforms.get$I(i).applyInverse$DA$DA(this.tmp, this.tmp);

this.transforms.get$I(0).applyInverse$net_imglib2_RealPositionable$net_imglib2_RealLocalizable(source, this.ptmp);
} else this.transforms.get$I(0).applyInverse$net_imglib2_RealPositionable$net_imglib2_RealLocalizable(source, target);
}});

Clazz.newMeth(C$, 'inverse$', function () {
return Clazz.new_($I$(1,1).c$$net_imglib2_realtransform_InvertibleRealTransform,[this]);
});

Clazz.newMeth(C$, 'copy$', function () {
var copy=Clazz.new_(C$);
for (var t, $t = this.transforms.iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) copy.add$TR(t.copy$());

return copy;
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:55 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
