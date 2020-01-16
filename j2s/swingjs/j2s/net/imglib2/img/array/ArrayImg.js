(function(){var P$=Clazz.newPackage("net.imglib2.img.array"),p$1={},I$=[[0,'net.imglib2.util.IntervalIndexer','net.imglib2.img.array.ArrayCursor','net.imglib2.img.array.ArrayLocalizingCursor','net.imglib2.img.array.ArrayRandomAccess','net.imglib2.FlatIterationOrder','net.imglib2.img.array.ArrayImgFactory','net.imglib2.img.array.ArraySubIntervalCursor','net.imglib2.util.Intervals','net.imglib2.img.array.ArrayLocalizingSubIntervalCursor']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ArrayImg", null, 'net.imglib2.img.AbstractNativeImg', 'net.imglib2.view.iteration.SubIntervalIterable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['steps','int[]','+dim','data','<A>']]]

Clazz.newMeth(C$, ['c$$TA$JA$net_imglib2_util_Fraction'], function (data, dim, entitiesPerPixel) {
;C$.superclazz.c$$JA$net_imglib2_util_Fraction.apply(this,[dim, entitiesPerPixel]);C$.$init$.apply(this);
this.dim=Clazz.array(Integer.TYPE, [this.n]);
for (var d=0; d < this.n; ++d) this.dim[d]=(dim[d]|0);

this.steps=Clazz.array(Integer.TYPE, [this.n]);
$I$(1).createAllocationSteps$IA$IA(this.dim, this.steps);
this.data=data;
}, 1);

Clazz.newMeth(C$, 'update$O', function (o) {
return this.data;
});

Clazz.newMeth(C$, 'cursor$', function () {
return Clazz.new_(1,{T:"Object"},$I$(2,1).c$$net_imglib2_img_array_ArrayImg,[this]);
});

Clazz.newMeth(C$, 'localizingCursor$', function () {
return Clazz.new_(1,{T:"Object"},$I$(3,1).c$$net_imglib2_img_array_ArrayImg,[this]);
});

Clazz.newMeth(C$, 'randomAccess$', function () {
return Clazz.new_(1,{T:"Object"},$I$(4,1).c$$net_imglib2_img_array_ArrayImg,[this]);
});

Clazz.newMeth(C$, 'randomAccess$net_imglib2_Interval', function (interval) {
return this.randomAccess$();
});

Clazz.newMeth(C$, 'iterationOrder$', function () {
return Clazz.new_($I$(5,1).c$$net_imglib2_Interval,[this]);
});

Clazz.newMeth(C$, 'factory$', function () {
return Clazz.new_(1,{T:"Object"},$I$(6,1).c$$TT,[this.linkedType]);
});

Clazz.newMeth(C$, 'copy$', function () {
var copy=this.factory$().create$JA(this.dimension);
var source=this.cursor$();
var target=copy.cursor$();
while (source.hasNext$())target.next$().set$TT(source.next$());

return copy;
});

Clazz.newMeth(C$, 'cursor$net_imglib2_Interval', function (interval) {
var dimLength=p$1.fastCursorAvailable$net_imglib2_Interval.apply(this, [interval]);
Clazz.assert(C$, this, function(){return dimLength > 0});
return Clazz.new_(1,{T:"Object"},$I$(7,1).c$$net_imglib2_img_array_ArrayImg$I$I,[this, (p$1.offset$net_imglib2_Interval.apply(this, [interval])|0), (p$1.size$net_imglib2_Interval$I.apply(this, [interval, dimLength])|0)]);
});

Clazz.newMeth(C$, 'size$net_imglib2_Interval$I', function (interval, length) {
var size=interval.dimension$I(0);
for (var d=1; d < length; ++d) {
size*=interval.dimension$I(d);
}
return size;
}, p$1);

Clazz.newMeth(C$, 'offset$net_imglib2_Interval', function (interval) {
var maxDim=this.numDimensions$() - 1;
var i=interval.min$I(maxDim);
for (var d=maxDim - 1; d >= 0; --d) {
i=i * this.dimension$I(d) + interval.min$I(d);
}
return i;
}, p$1);

Clazz.newMeth(C$, 'fastCursorAvailable$net_imglib2_Interval', function (interval) {
if (!$I$(8).contains$net_imglib2_Interval$net_imglib2_Interval(this, interval)) return -1;
var dimIdx=0;
for (; dimIdx < this.n; ++dimIdx) if (interval.dimension$I(dimIdx) != this.dimension$I(dimIdx)) break;

if (dimIdx == this.n) return dimIdx;
++dimIdx;
for (var d=dimIdx; d < this.n; ++d) if (interval.dimension$I(d) != 1) return -1;

return dimIdx;
}, p$1);

Clazz.newMeth(C$, 'localizingCursor$net_imglib2_Interval', function (interval) {
var dimLength=p$1.fastCursorAvailable$net_imglib2_Interval.apply(this, [interval]);
Clazz.assert(C$, this, function(){return dimLength > 0});
return Clazz.new_(1,{T:"Object"},$I$(9,1).c$$net_imglib2_img_array_ArrayImg$I$I,[this, (p$1.offset$net_imglib2_Interval.apply(this, [interval])|0), (p$1.size$net_imglib2_Interval$I.apply(this, [interval, dimLength])|0)]);
});

Clazz.newMeth(C$, 'supportsOptimizedCursor$net_imglib2_Interval', function (interval) {
return p$1.fastCursorAvailable$net_imglib2_Interval.apply(this, [interval]) > 0;
});

Clazz.newMeth(C$, 'subIntervalIterationOrder$net_imglib2_Interval', function (interval) {
return Clazz.new_($I$(5,1).c$$net_imglib2_Interval,[interval]);
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:07 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
