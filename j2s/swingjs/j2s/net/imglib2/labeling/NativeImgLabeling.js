(function(){var P$=Clazz.newPackage("net.imglib2.labeling"),I$=[[0,'net.imglib2.labeling.DefaultROIStrategyFactory','net.imglib2.labeling.LabelingMapping','net.imglib2.labeling.LabelingConvertedRandomAccess','net.imglib2.labeling.LabelingConvertedCursor','net.imglib2.labeling.NativeImgLabeling','net.imglib2.labeling.LabelingFactory','net.imglib2.FlatIterationOrder','net.imglib2.view.Views']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "NativeImgLabeling", null, 'net.imglib2.labeling.AbstractNativeLabeling', 'net.imglib2.view.iteration.SubIntervalIterable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['generation','long[]','img','net.imglib2.img.Img']]]

Clazz.newMeth(C$, 'c$$net_imglib2_img_Img', function (img) {
;C$.superclazz.c$$JA$net_imglib2_labeling_LabelingROIStrategyFactory$net_imglib2_labeling_LabelingMapping.apply(this,[C$.dimensions$net_imglib2_Interval(img), Clazz.new_(1,{T:"Object"},$I$(1,1)), Clazz.new_(1,{T:"Object"},$I$(2,1).c$$net_imglib2_type_numeric_IntegerType,[img.firstElement$().createVariable$()])]);C$.$init$.apply(this);
this.img=img;
this.generation=Clazz.array(Long.TYPE, [1]);
}, 1);

Clazz.newMeth(C$, 'dimensions$net_imglib2_Interval', function (i) {
var dims=Clazz.array(Long.TYPE, [i.numDimensions$()]);
i.dimensions$JA(dims);
return dims;
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_labeling_LabelingROIStrategyFactory$net_imglib2_img_Img', function (strategyFactory, img) {
;C$.superclazz.c$$JA$net_imglib2_labeling_LabelingROIStrategyFactory$net_imglib2_labeling_LabelingMapping.apply(this,[C$.dimensions$net_imglib2_Interval(img), strategyFactory, Clazz.new_(1,{T:"Object"},$I$(2,1).c$$net_imglib2_type_numeric_IntegerType,[img.firstElement$().createVariable$()])]);C$.$init$.apply(this);
this.img=img;
this.generation=Clazz.array(Long.TYPE, [1]);
}, 1);

Clazz.newMeth(C$, 'randomAccess$', function () {
var rndAccess=this.img.randomAccess$();
return Clazz.new_(1,{I:"Object",T:"Object"},$I$(3,1).c$$net_imglib2_RandomAccess$JA$net_imglib2_labeling_LabelingMapping,[rndAccess, this.generation, this.mapping]);
});

Clazz.newMeth(C$, 'cursor$', function () {
var c=this.img.cursor$();
return Clazz.new_(1,{I:"Object",T:"Object"},$I$(4,1).c$$net_imglib2_Cursor$JA$net_imglib2_labeling_LabelingMapping,[c, this.generation, this.mapping]);
});

Clazz.newMeth(C$, 'localizingCursor$', function () {
var c=this.img.localizingCursor$();
return Clazz.new_(1,{I:"Object",T:"Object"},$I$(4,1).c$$net_imglib2_Cursor$JA$net_imglib2_labeling_LabelingMapping,[c, this.generation, this.mapping]);
});

Clazz.newMeth(C$, 'getStorageImg$', function () {
return this.img;
});

Clazz.newMeth(C$, 'copy$', function () {
var result=Clazz.new_(1,{T:"Object",I:"Object"},C$.c$$net_imglib2_img_Img,[this.img.factory$().create$net_imglib2_Dimensions(this.img)]);
var srcCursor=this.cursor$();
var resCursor=result.cursor$();
while (srcCursor.hasNext$()){
srcCursor.fwd$();
resCursor.fwd$();
resCursor.get$().set$net_imglib2_labeling_LabelingType(srcCursor.get$());
}
return result;
});

Clazz.newMeth(C$, 'firstElement$', function () {
return this.cursor$().next$();
});

Clazz.newMeth(C$, 'iterator$', function () {
return this.cursor$();
});

Clazz.newMeth(C$, 'randomAccess$net_imglib2_Interval', function (interval) {
return this.randomAccess$();
});

Clazz.newMeth(C$, 'iterationOrder$', function () {
return this.img.iterationOrder$();
});

Clazz.newMeth(C$, 'factory$', function () {
return ((P$.NativeImgLabeling$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "NativeImgLabeling$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('net.imglib2.labeling.LabelingFactory'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'create$JA', function (dim) {
return Clazz.new_(1,{T:"Object",I:"Object"},$I$(5,1).c$$net_imglib2_img_Img,[this.b$['net.imglib2.labeling.NativeImgLabeling'].img.factory$().create$JA$TT(dim, this.b$['net.imglib2.labeling.NativeImgLabeling'].img.firstElement$().createVariable$())]);
});
})()
), Clazz.new_(1,{T:"Object"},$I$(6,1), [this, null],P$.NativeImgLabeling$1));
});

Clazz.newMeth(C$, 'supportsOptimizedCursor$net_imglib2_Interval', function (interval) {
if (Clazz.instanceOf(this.img, "net.imglib2.view.iteration.SubIntervalIterable")) return (this.img).supportsOptimizedCursor$net_imglib2_Interval(interval);
 else return false;
});

Clazz.newMeth(C$, 'subIntervalIterationOrder$net_imglib2_Interval', function (interval) {
if (Clazz.instanceOf(this.img, "net.imglib2.view.iteration.SubIntervalIterable")) return (this.img).subIntervalIterationOrder$net_imglib2_Interval(interval);
 else return Clazz.new_($I$(7,1).c$$net_imglib2_Interval,[interval]);
});

Clazz.newMeth(C$, 'cursor$net_imglib2_Interval', function (interval) {
var c=null;
if (Clazz.instanceOf(this.img, "net.imglib2.view.iteration.SubIntervalIterable")) c=(this.img).cursor$net_imglib2_Interval(interval);
 else c=$I$(8).interval$net_imglib2_RandomAccessible$net_imglib2_Interval(this.img, interval).cursor$();
return Clazz.new_(1,{I:"Object",T:"Object"},$I$(4,1).c$$net_imglib2_Cursor$JA$net_imglib2_labeling_LabelingMapping,[c, this.generation, this.mapping]);
});

Clazz.newMeth(C$, 'localizingCursor$net_imglib2_Interval', function (interval) {
var c=null;
if (Clazz.instanceOf(this.img, "net.imglib2.view.iteration.SubIntervalIterable")) c=(this.img).localizingCursor$net_imglib2_Interval(interval);
 else c=$I$(8).interval$net_imglib2_RandomAccessible$net_imglib2_Interval(this.img, interval).localizingCursor$();
return Clazz.new_(1,{I:"Object",T:"Object"},$I$(4,1).c$$net_imglib2_Cursor$JA$net_imglib2_labeling_LabelingMapping,[c, this.generation, this.mapping]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:52 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
