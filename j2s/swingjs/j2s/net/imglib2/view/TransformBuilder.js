(function(){var P$=Clazz.newPackage("net.imglib2.view"),I$=[[0,'java.util.LinkedList','net.imglib2.transform.integer.BoundingBox','net.imglib2.transform.integer.BoundingBoxTransform','net.imglib2.view.TransformedRandomAccessible','net.imglib2.view.ExtendedRandomAccessibleInterval','net.imglib2.view.IntervalView','net.imglib2.img.WrappedImg','net.imglib2.util.Intervals','net.imglib2.concatenate.ConcatenateUtils','net.imglib2.transform.integer.Mixed','net.imglib2.transform.integer.TranslationTransform','net.imglib2.transform.integer.SlicingTransform','net.imglib2.transform.integer.MixedTransform','net.imglib2.view.TransformRandomAccess','net.imglib2.view.FullSourceMapMixedRandomAccess','net.imglib2.view.MixedRandomAccess','net.imglib2.view.TranslationRandomAccess','net.imglib2.view.FullSourceMapSlicingRandomAccess','net.imglib2.view.SlicingRandomAccess']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TransformBuilder");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['source','net.imglib2.RandomAccessible','boundingBox','net.imglib2.transform.integer.BoundingBox','transforms','java.util.LinkedList']]]

Clazz.newMeth(C$, 'getEfficientRandomAccessible$net_imglib2_Interval$net_imglib2_RandomAccessible', function (interval, randomAccessible) {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_Interval$net_imglib2_RandomAccessible,[interval, randomAccessible]).build$();
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_Interval$net_imglib2_RandomAccessible', function (interval, randomAccessible) {
;C$.$init$.apply(this);
this.transforms=Clazz.new_(1,{E:"net.imglib2.transform.Transform"},$I$(1,1));
this.boundingBox=(interval == null ) ? null : Clazz.new_($I$(2,1).c$$net_imglib2_Interval,[interval]);
this.visit$net_imglib2_RandomAccessible(randomAccessible);
this.simplifyTransforms$();
}, 1);

Clazz.newMeth(C$, 'prependTransform$net_imglib2_transform_Transform', function (t) {
if (Clazz.getClass($I$(3),['transform$net_imglib2_transform_integer_BoundingBox']).isInstance$O(t) && (this.boundingBox != null ) ) this.boundingBox=(t).transform$(this.boundingBox);
 else this.boundingBox=null;
this.transforms.addFirst$TE(t);
});

Clazz.newMeth(C$, 'visit$net_imglib2_RandomAccessible', function (randomAccessible) {
if (Clazz.getClass($I$(4),['getSource$','getTransformToSource$']).isInstance$O(randomAccessible)) {
this.visitTransformed$net_imglib2_view_TransformedRandomAccessible(randomAccessible);
} else if (Clazz.getClass($I$(5)).isInstance$O(randomAccessible)) {
this.visitExtended$net_imglib2_view_ExtendedRandomAccessibleInterval(randomAccessible);
} else if (Clazz.getClass($I$(6)).isInstance$O(randomAccessible)) {
this.visit$net_imglib2_RandomAccessible((randomAccessible).getSource$());
} else if (Clazz.getClass($I$(7),['getImg$']).isInstance$O(randomAccessible)) {
this.visit$net_imglib2_RandomAccessible((randomAccessible).getImg$());
} else {
this.source=randomAccessible;
}});

Clazz.newMeth(C$, 'visitTransformed$net_imglib2_view_TransformedRandomAccessible', function (randomAccessible) {
this.prependTransform$net_imglib2_transform_Transform(randomAccessible.getTransformToSource$());
this.visit$net_imglib2_RandomAccessible(randomAccessible.getSource$());
});

Clazz.newMeth(C$, 'visitExtended$net_imglib2_view_ExtendedRandomAccessibleInterval', function (randomAccessible) {
var sourceInterval=randomAccessible.getSource$();
if ((this.boundingBox != null ) && $I$(8).contains$net_imglib2_Interval$net_imglib2_Interval(sourceInterval, this.boundingBox.getInterval$()) ) this.visit$net_imglib2_RandomAccessible(sourceInterval);
 else this.source=randomAccessible;
});

Clazz.newMeth(C$, 'isIdentity$net_imglib2_transform_integer_Mixed', function (t) {
var n=t.numSourceDimensions$();
var m=t.numTargetDimensions$();
if (n != m) return false;
for (var d=0; d < m; ++d) {
if (t.getTranslation$I(d) != 0) return false;
if (t.getComponentZero$I(d)) return false;
if (t.getComponentInversion$I(d)) return false;
if (t.getComponentMapping$I(d) != d) return false;
}
return true;
}, 1);

Clazz.newMeth(C$, 'isTranslation$net_imglib2_transform_integer_Mixed', function (t) {
var n=t.numSourceDimensions$();
var m=t.numTargetDimensions$();
if (n != m) return false;
for (var d=0; d < m; ++d) {
if (t.getComponentZero$I(d)) return false;
if (t.getComponentInversion$I(d)) return false;
if (t.getComponentMapping$I(d) != d) return false;
}
return true;
}, 1);

Clazz.newMeth(C$, 'isComponentMapping$net_imglib2_transform_integer_Mixed', function (t) {
var m=t.numTargetDimensions$();
for (var d=0; d < m; ++d) {
if (t.getTranslation$I(d) != 0) return false;
if (t.getComponentZero$I(d)) return false;
if (t.getComponentInversion$I(d)) return false;
}
return true;
}, 1);

Clazz.newMeth(C$, 'isSlicing$net_imglib2_transform_integer_Mixed', function (t) {
var n=t.numSourceDimensions$();
var m=t.numTargetDimensions$();
if (n > m) return false;
for (var d=0; d < m; ++d) {
if (t.getTranslation$I(d) != 0 && (!t.getComponentZero$I(d)) ) return false;
if (t.getComponentInversion$I(d)) return false;
}
return true;
}, 1);

Clazz.newMeth(C$, 'simplifyTransforms$', function () {
$I$(9).join$java_util_List(this.transforms);
for (var i=this.transforms.listIterator$(); i.hasNext$(); ) {
var t=i.next$();
if (Clazz.getClass($I$(10),['getComponentInversion$ZA','getComponentInversion$I','getComponentMapping$IA','getComponentMapping$I','getComponentZero$ZA','getComponentZero$I','getMatrix$','getTranslation$JA','getTranslation$I']).isInstance$O(t)) {
var mixed=t;
if (C$.isIdentity$net_imglib2_transform_integer_Mixed(mixed)) {
i.remove$();
} else if (C$.isTranslation$net_imglib2_transform_integer_Mixed(mixed)) {
var translation=Clazz.array(Long.TYPE, [mixed.numTargetDimensions$()]);
mixed.getTranslation$JA(translation);
i.set$TE(Clazz.new_($I$(11,1).c$$JA,[translation]));
} else if (C$.isSlicing$net_imglib2_transform_integer_Mixed(mixed)) {
var m=mixed.numTargetDimensions$();
var translation=Clazz.array(Long.TYPE, [m]);
var zero=Clazz.array(Boolean.TYPE, [m]);
var component=Clazz.array(Integer.TYPE, [m]);
mixed.getTranslation$JA(translation);
mixed.getComponentZero$ZA(zero);
mixed.getComponentMapping$IA(component);
var sl=Clazz.new_($I$(12,1).c$$I$I,[mixed.numSourceDimensions$(), m]);
sl.setTranslation$JA(translation);
sl.setComponentZero$ZA(zero);
sl.setComponentMapping$IA(component);
i.set$TE(sl);
}}}
});

Clazz.newMeth(C$, 'build$', function () {
var result=this.source;
for (var i=this.transforms.listIterator$(); i.hasNext$(); ) {
var t=i.next$();
if (Clazz.getClass($I$(13)).isInstance$O(t)) result=this.wrapMixedTransform$net_imglib2_RandomAccessible$net_imglib2_transform_integer_MixedTransform(result, t);
 else if (Clazz.getClass($I$(11)).isInstance$O(t)) result=this.wrapTranslationTransform$net_imglib2_RandomAccessible$net_imglib2_transform_integer_TranslationTransform(result, t);
 else if (Clazz.getClass($I$(12)).isInstance$O(t)) result=this.wrapSlicingTransform$net_imglib2_RandomAccessible$net_imglib2_transform_integer_SlicingTransform(result, t);
 else result=this.wrapGenericTransform$net_imglib2_RandomAccessible$net_imglib2_transform_Transform(result, t);
}
return result;
});

Clazz.newMeth(C$, 'wrapGenericTransform$net_imglib2_RandomAccessible$net_imglib2_transform_Transform', function (s, t) {
return ((P$.TransformBuilder$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TransformBuilder$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'net.imglib2.RandomAccessible', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.$finals$.t.numSourceDimensions$();
});

Clazz.newMeth(C$, 'randomAccess$', function () {
return Clazz.new_(1,{T:"Object"},$I$(14,1).c$$net_imglib2_RandomAccess$net_imglib2_transform_Transform,[this.$finals$.s.randomAccess$(), this.$finals$.t]);
});

Clazz.newMeth(C$, 'randomAccess$net_imglib2_Interval', function (interval) {
return Clazz.new_(1,{T:"Object"},$I$(14,1).c$$net_imglib2_RandomAccess$net_imglib2_transform_Transform,[this.$finals$.s.randomAccess$(), this.$finals$.t]);
});
})()
), Clazz.new_(P$.TransformBuilder$1.$init$, [this, {s:s,t:t}]));
});

Clazz.newMeth(C$, 'wrapMixedTransform$net_imglib2_RandomAccessible$net_imglib2_transform_integer_MixedTransform', function (s, t) {
var full=t.hasFullSourceMapping$();
return ((P$.TransformBuilder$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "TransformBuilder$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'net.imglib2.RandomAccessible', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.$finals$.t.numSourceDimensions$();
});

Clazz.newMeth(C$, 'randomAccess$', function () {
if (this.$finals$.full) return Clazz.new_(1,{T:"Object"},$I$(15,1).c$$net_imglib2_RandomAccess$net_imglib2_transform_integer_Mixed,[this.$finals$.s.randomAccess$(), this.$finals$.t]);
return Clazz.new_(1,{T:"Object"},$I$(16,1).c$$net_imglib2_RandomAccess$net_imglib2_transform_integer_Mixed,[this.$finals$.s.randomAccess$(), this.$finals$.t]);
});

Clazz.newMeth(C$, 'randomAccess$net_imglib2_Interval', function (interval) {
if (this.$finals$.full) return Clazz.new_(1,{T:"Object"},$I$(15,1).c$$net_imglib2_RandomAccess$net_imglib2_transform_integer_Mixed,[this.$finals$.s.randomAccess$(), this.$finals$.t]);
return Clazz.new_(1,{T:"Object"},$I$(16,1).c$$net_imglib2_RandomAccess$net_imglib2_transform_integer_Mixed,[this.$finals$.s.randomAccess$(), this.$finals$.t]);
});
})()
), Clazz.new_(P$.TransformBuilder$2.$init$, [this, {t:t,full:full,s:s}]));
});

Clazz.newMeth(C$, 'wrapTranslationTransform$net_imglib2_RandomAccessible$net_imglib2_transform_integer_TranslationTransform', function (s, t) {
return ((P$.TransformBuilder$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "TransformBuilder$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'net.imglib2.RandomAccessible', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.$finals$.t.numSourceDimensions$();
});

Clazz.newMeth(C$, 'randomAccess$', function () {
return Clazz.new_(1,{T:"Object"},$I$(17,1).c$$net_imglib2_RandomAccess$net_imglib2_transform_integer_Translation,[this.$finals$.s.randomAccess$(), this.$finals$.t]);
});

Clazz.newMeth(C$, 'randomAccess$net_imglib2_Interval', function (interval) {
return Clazz.new_(1,{T:"Object"},$I$(17,1).c$$net_imglib2_RandomAccess$net_imglib2_transform_integer_Translation,[this.$finals$.s.randomAccess$(), this.$finals$.t]);
});
})()
), Clazz.new_(P$.TransformBuilder$3.$init$, [this, {t:t,s:s}]));
});

Clazz.newMeth(C$, 'wrapSlicingTransform$net_imglib2_RandomAccessible$net_imglib2_transform_integer_SlicingTransform', function (s, t) {
var full=t.hasFullSourceMapping$();
return ((P$.TransformBuilder$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "TransformBuilder$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'net.imglib2.RandomAccessible', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.$finals$.t.numSourceDimensions$();
});

Clazz.newMeth(C$, 'randomAccess$', function () {
if (this.$finals$.full) return Clazz.new_(1,{T:"Object"},$I$(18,1).c$$net_imglib2_RandomAccess$net_imglib2_transform_integer_Slicing,[this.$finals$.s.randomAccess$(), this.$finals$.t]);
return Clazz.new_(1,{T:"Object"},$I$(19,1).c$$net_imglib2_RandomAccess$net_imglib2_transform_integer_Slicing,[this.$finals$.s.randomAccess$(), this.$finals$.t]);
});

Clazz.newMeth(C$, 'randomAccess$net_imglib2_Interval', function (interval) {
if (this.$finals$.full) return Clazz.new_(1,{T:"Object"},$I$(18,1).c$$net_imglib2_RandomAccess$net_imglib2_transform_integer_Slicing,[this.$finals$.s.randomAccess$(), this.$finals$.t]);
return Clazz.new_(1,{T:"Object"},$I$(19,1).c$$net_imglib2_RandomAccess$net_imglib2_transform_integer_Slicing,[this.$finals$.s.randomAccess$(), this.$finals$.t]);
});
})()
), Clazz.new_(P$.TransformBuilder$4.$init$, [this, {t:t,full:full,s:s}]));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:14 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
