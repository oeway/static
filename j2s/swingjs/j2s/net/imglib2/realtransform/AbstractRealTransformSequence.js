(function(){var P$=Clazz.newPackage("net.imglib2.realtransform"),I$=[[0,'java.util.ArrayList','net.imglib2.RealPoint']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractRealTransformSequence", null, null, 'net.imglib2.realtransform.RealTransform');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.transforms=Clazz.new_(1,{E:"Object"},$I$(1,1));
this.tmp=Clazz.array(Double.TYPE, [0]);
this.ptmp=$I$(2).wrap$DA(this.tmp);
this.nSource=0;
this.nTarget=0;
}, 1);

C$.$fields$=[['I',['nSource','nTarget'],'O',['transforms','java.util.ArrayList','tmp','double[]','ptmp','net.imglib2.RealPoint']]]

Clazz.newMeth(C$, 'add$TR', function (transform) {
this.transforms.add$TE(transform);
if (this.transforms.size$() == 1) {
this.nSource=transform.numSourceDimensions$();
this.tmp=Clazz.array(Double.TYPE, [this.nSource]);
this.ptmp=$I$(2).wrap$DA(this.tmp);
}this.nTarget=transform.numTargetDimensions$();
if (this.tmp.length < this.nTarget) {
this.tmp=Clazz.array(Double.TYPE, [this.nTarget]);
this.ptmp=$I$(2).wrap$DA(this.tmp);
}});

Clazz.newMeth(C$, 'numSourceDimensions$', function () {
return this.nSource;
});

Clazz.newMeth(C$, 'numTargetDimensions$', function () {
return this.nTarget;
});

Clazz.newMeth(C$, 'apply$DA$DA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.nSource && target.length >= this.nTarget }, function(){return "Input dimensions too small."});
var s=this.transforms.size$() - 1;
if (s > -1) {
if (s > 0) {
this.transforms.get$I(0).apply$DA$DA(source, this.tmp);
for (var i=1; i < s; ++i) this.transforms.get$I(i).apply$DA$DA(this.tmp, this.tmp);

this.transforms.get$I(s).apply$DA$DA(this.tmp, target);
} else this.transforms.get$I(0).apply$DA$DA(source, target);
}});

Clazz.newMeth(C$, 'apply$FA$FA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.nSource && target.length >= this.nTarget }, function(){return "Input dimensions too small."});
var s=this.transforms.size$() - 1;
if (s > -1) {
for (var d=0; d < this.nSource; ++d) this.tmp[d]=source[d];

for (var t, $t = this.transforms.iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) t.apply$DA$DA(this.tmp, this.tmp);

for (var d=0; d < this.nTarget; ++d) target[d]=this.tmp[d];

}});

Clazz.newMeth(C$, 'apply$net_imglib2_RealLocalizable$net_imglib2_RealPositionable', function (source, target) {
Clazz.assert(C$, this, function(){return source.numDimensions$() >= this.nSource && target.numDimensions$() >= this.nTarget }, function(){return "Input dimensions too small."});
var s=this.transforms.size$() - 1;
if (s > -1) {
if (s > 0) {
this.transforms.get$I(0).apply$net_imglib2_RealLocalizable$net_imglib2_RealPositionable(source, this.ptmp);
for (var i=1; i < s; ++i) this.transforms.get$I(i).apply$DA$DA(this.tmp, this.tmp);

this.transforms.get$I(s).apply$net_imglib2_RealLocalizable$net_imglib2_RealPositionable(this.ptmp, target);
} else this.transforms.get$I(0).apply$net_imglib2_RealLocalizable$net_imglib2_RealPositionable(source, target);
}});

Clazz.newMeth(C$, 'copy$', function () {
var copy=Clazz.new_(1,{R:"Object"},C$);
for (var t, $t = this.transforms.iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) copy.add$TR(t.copy$());

return copy;
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:55 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
