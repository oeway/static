(function(){var P$=Clazz.newPackage("net.imglib2.img.sparse"),I$=[[0,'net.imglib2.img.sparse.Ntree']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LongNtree", null, null, ['net.imglib2.img.basictypeaccess.LongAccess', 'net.imglib2.img.sparse.NtreeAccess']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['position','long[]','data','net.imglib2.img.sparse.Ntree']]]

Clazz.newMeth(C$, 'c$$JA$JA$J', function (dimensions, position, value) {
;C$.$init$.apply(this);
this.data=Clazz.new_(1,{T:"Long"},$I$(1,1).c$$JA$TT,[dimensions, new Long(value)]);
this.position=position;
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_sparse_Ntree$JA', function (data, position) {
;C$.$init$.apply(this);
this.data=data;
this.position=position;
}, 1);

Clazz.newMeth(C$, 'getValue$I', function (index) {
return (this.data.getNode$JA(this.position).getValue$()).valueOf();
});

Clazz.newMeth(C$, 'setValue$I$J', function (index, value) {
this.data.createNodeWithValue$JA$TT(this.position, new Long(value));
});

Clazz.newMeth(C$, 'getCurrentStorageNtree$', function () {
return this.data;
});

Clazz.newMeth(C$, 'createInstance$JA', function (pos) {
return Clazz.new_(C$.c$$net_imglib2_img_sparse_Ntree$JA,[this.data, pos]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:09 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
