(function(){var P$=Clazz.newPackage("net.imglib2.view"),I$=[[0,'net.imglib2.view.HyperSlice','java.util.Arrays',['net.imglib2.view.HyperSlicesView','.HyperSlicesViewRandomAccess']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "HyperSlicesView", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'net.imglib2.RandomAccessible');
C$.$classes$=[['HyperSlicesViewRandomAccess',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['numDimensions'],'O',['source','net.imglib2.RandomAccessible','accessAxes','int[]']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccessible$IA', function (source, axes) {
;C$.$init$.apply(this);
this.source=source;
var sortedAxes=axes.clone$();
$I$(2).sort$IA(sortedAxes);
this.numDimensions=source.numDimensions$() - sortedAxes.length;
this.accessAxes=Clazz.array(Integer.TYPE, [this.numDimensions]);
for (var d=0, da=0, db=0; d < source.numDimensions$(); ++d) {
if (da < sortedAxes.length && sortedAxes[da] == d ) ++da;
 else this.accessAxes[db++]=d;
}
}, 1);

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.numDimensions;
});

Clazz.newMeth(C$, 'randomAccess$', function () {
return Clazz.new_($I$(3,1), [this, null]);
});

Clazz.newMeth(C$, 'randomAccess$net_imglib2_Interval', function (interval) {
return this.randomAccess$();
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.HyperSlicesView, "HyperSlicesViewRandomAccess", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'net.imglib2.Point', 'net.imglib2.RandomAccess');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$I.apply(this,[this.this$0.numDimensions]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'get$', function () {
var position=Clazz.array(Long.TYPE, [this.this$0.source.numDimensions$()]);
for (var d=0; d < this.this$0.numDimensions; ++d) position[this.this$0.accessAxes[d]]=this.getLongPosition$I(d);

return Clazz.new_(1,{T:"Object"},$I$(1,1).c$$net_imglib2_RandomAccessible$IA$JA,[this.this$0.source, this.this$0.accessAxes, position]);
});

Clazz.newMeth(C$, 'copy$', function () {
var copy=Clazz.new_(C$, [this, null]);
copy.setPosition$net_imglib2_Localizable(this);
return copy;
});

Clazz.newMeth(C$, 'copyRandomAccess$', function () {
return this.copy$();
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:13 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
