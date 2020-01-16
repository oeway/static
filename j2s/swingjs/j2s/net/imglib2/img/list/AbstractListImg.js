(function(){var P$=Clazz.newPackage("net.imglib2.img.list"),I$=[[0,'net.imglib2.util.IntervalIndexer','net.imglib2.img.list.ListCursor','net.imglib2.img.list.ListLocalizingCursor','net.imglib2.img.list.ListRandomAccess','net.imglib2.img.list.ListImgFactory','net.imglib2.FlatIterationOrder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractListImg", null, 'net.imglib2.img.AbstractImg');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['step','int[]','+dim']]]

Clazz.newMeth(C$, 'c$$JA', function (dim) {
;C$.superclazz.c$$JA.apply(this,[dim]);C$.$init$.apply(this);
this.dim=Clazz.array(Integer.TYPE, [this.n]);
for (var d=0; d < this.n; ++d) this.dim[d]=(dim[d]|0);

this.step=Clazz.array(Integer.TYPE, [this.n]);
$I$(1).createAllocationSteps$IA$IA(this.dim, this.step);
}, 1);

Clazz.newMeth(C$, 'cursor$', function () {
return Clazz.new_(1,{T:"Object"},$I$(2,1).c$$net_imglib2_img_list_AbstractListImg,[this]);
});

Clazz.newMeth(C$, 'localizingCursor$', function () {
return Clazz.new_(1,{T:"Object"},$I$(3,1).c$$net_imglib2_img_list_AbstractListImg,[this]);
});

Clazz.newMeth(C$, 'randomAccess$', function () {
return Clazz.new_(1,{T:"Object"},$I$(4,1).c$$net_imglib2_img_list_AbstractListImg,[this]);
});

Clazz.newMeth(C$, 'factory$', function () {
return Clazz.new_(1,{T:"Object"},$I$(5,1).c$$TT,[this.get$I(0)]);
});

Clazz.newMeth(C$, 'iterationOrder$', function () {
return Clazz.new_($I$(6,1).c$$net_imglib2_Interval,[this]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:08 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
