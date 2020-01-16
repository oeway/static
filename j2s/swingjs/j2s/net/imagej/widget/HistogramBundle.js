(function(){var P$=Clazz.newPackage("net.imagej.widget"),p$1={},I$=[[0,'java.util.ArrayList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "HistogramBundle");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.binMin=-1;
this.binMax=-1;
this.theoryMin=NaN;
this.theoryMax=NaN;
this.dataMin=NaN;
this.dataMax=NaN;
this.preferredSizeX=300;
this.preferredSizeY=150;
this.slope=NaN;
this.intercept=NaN;
}, 1);

C$.$fields$=[['Z',['hasChanges'],'D',['theoryMin','theoryMax','dataMin','dataMax','slope','intercept'],'I',['preferredSizeX','preferredSizeY'],'L',['binMin','binMax'],'O',['histograms','java.util.List']]]

Clazz.newMeth(C$, 'c$$net_imglib2_histogram_Histogram1d', function (hist) {
;C$.$init$.apply(this);
this.histograms=Clazz.new_(1,{E:"net.imglib2.histogram.Histogram1d"},$I$(1,1));
this.histograms.add$TE(hist);
this.hasChanges=true;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_List', function (histList) {
;C$.$init$.apply(this);
this.histograms=histList;
this.hasChanges=true;
}, 1);

Clazz.newMeth(C$, 'hasChanges$', function () {
return this.hasChanges;
});

Clazz.newMeth(C$, 'setHasChanges$Z', function (val) {
this.hasChanges=val;
});

Clazz.newMeth(C$, 'getHistogramCount$', function () {
return this.histograms.size$();
});

Clazz.newMeth(C$, 'setHistogram$I$net_imglib2_histogram_Histogram1d', function (index, hist) {
if (index < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["index number less than 0"]);
} else if (index > this.histograms.size$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["index number more than 1 beyond end"]);
} else if (index == this.histograms.size$()) {
if (hist == null ) return;
this.hasChanges=true;
this.histograms.add$TE(hist);
} else {
if (hist == null ) {
this.hasChanges=true;
this.histograms.remove$I(index);
} else {
this.hasChanges|=hist !== this.getHistogram$I(index) ;
this.histograms.set$I$TE(index, hist);
}}});

Clazz.newMeth(C$, 'getHistogram$I', function (index) {
if (index < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["index number less than 0"]);
} else if (index > this.histograms.size$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["index number beyond end"]);
}return this.histograms.get$I(index);
});

Clazz.newMeth(C$, 'setMinBin$J', function (min) {
this.hasChanges|=min != this.binMin;
this.binMin=min;
});

Clazz.newMeth(C$, 'getMinBin$', function () {
return this.binMin;
});

Clazz.newMeth(C$, 'setMaxBin$J', function (max) {
this.hasChanges|=max != this.binMax;
this.binMax=max;
});

Clazz.newMeth(C$, 'getMaxBin$', function () {
return this.binMax;
});

Clazz.newMeth(C$, 'setPreferredSize$I$I', function (x, y) {
this.hasChanges|=this.preferredSizeX != x;
this.hasChanges|=this.preferredSizeY != y;
this.preferredSizeX=x;
this.preferredSizeY=y;
});

Clazz.newMeth(C$, 'getPreferredSizeX$', function () {
return this.preferredSizeX;
});

Clazz.newMeth(C$, 'getPreferredSizeY$', function () {
return this.preferredSizeY;
});

Clazz.newMeth(C$, 'setLineSlopeIntercept$D$D', function (slope, intercept) {
this.hasChanges|=p$1.different$D$D.apply(this, [slope, this.slope]);
this.hasChanges|=p$1.different$D$D.apply(this, [intercept, this.intercept]);
this.slope=slope;
this.intercept=intercept;
});

Clazz.newMeth(C$, 'getLineSlope$', function () {
return this.slope;
});

Clazz.newMeth(C$, 'getLineIntercept$', function () {
return this.intercept;
});

Clazz.newMeth(C$, 'setDataMinMax$D$D', function (min, max) {
this.hasChanges|=p$1.different$D$D.apply(this, [min, this.dataMin]);
this.hasChanges|=p$1.different$D$D.apply(this, [max, this.dataMax]);
this.dataMin=min;
this.dataMax=max;
});

Clazz.newMeth(C$, 'getDataMin$', function () {
return this.dataMin;
});

Clazz.newMeth(C$, 'getDataMax$', function () {
return this.dataMax;
});

Clazz.newMeth(C$, 'setTheoreticalMinMax$D$D', function (min, max) {
this.hasChanges|=p$1.different$D$D.apply(this, [min, this.theoryMin]);
this.hasChanges|=p$1.different$D$D.apply(this, [max, this.theoryMax]);
this.theoryMin=min;
this.theoryMax=max;
});

Clazz.newMeth(C$, 'getTheoreticalMin$', function () {
return this.theoryMin;
});

Clazz.newMeth(C$, 'getTheoreticalMax$', function () {
return this.theoryMax;
});

Clazz.newMeth(C$, 'different$D$D', function (v1, v2) {
if (Double.isNaN$D(v1) && Double.isNaN$D(v2) ) return false;
return v1 != v2 ;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:04 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
