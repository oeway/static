(function(){var P$=Clazz.newPackage("io.scif.img"),I$=[[0,'java.util.HashMap','net.imagej.ImgPlus','org.scijava.Context',['io.scif.img.ImgPlusCtxCleaningProvider','.ImgPlusCtxCleaner']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ImgPlusCtxCleaningProvider", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'io.scif.AbstractSCIFIOPlugin', 'io.scif.refs.RefProvider');
C$.$classes$=[['ImgPlusCtxCleaner',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'handles$O$OA', function (referent, params) {
var matches=Clazz.getClass($I$(2)).isAssignableFrom$Class(referent.getClass$());
matches=matches && params.length == 1 ;
matches=matches && Clazz.getClass($I$(3)).isAssignableFrom$Class(params[0].getClass$()) ;
return matches;
});

Clazz.newMeth(C$, 'makeRef$O$ref_ReferenceQueue$OA', function (referent, queue, params) {
var ref=Clazz.new_($I$(4,1).c$$O$ref_ReferenceQueue$OA,[referent, queue, params]);
return ref;
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.img.ImgPlusCtxCleaningProvider',null,['org.scijava.plugin.Plugin']],['type="io.scif.refs.RefProvider.class" ']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.ImgPlusCtxCleaningProvider, "ImgPlusCtxCleaner", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.lang.ref.PhantomReference', 'io.scif.refs.CleaningRef');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.ctxRefs=Clazz.new_(1,{K:"org.scijava.Context",V:"Integer"},$I$(1,1));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['ctx','org.scijava.Context']]
,['O',['ctxRefs','java.util.Map']]]

Clazz.newMeth(C$, 'c$$O$ref_ReferenceQueue$OA', function (imgPlus, queue, params) {
;C$.superclazz.c$$TT$ref_ReferenceQueue.apply(this,[imgPlus, queue]);C$.$init$.apply(this);
if (params.length != 1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["ImgPlusCleanerRef require 1 parameter: a scijava-common Context"]);
}try {
this.ctx=params[0];
} catch (e) {
if (Clazz.exceptionOf(e,"ClassCastException")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["ImgPlusCleanerRef: invalid parameter"]);
} else {
throw e;
}
}
{
var count=C$.ctxRefs.get$O(this.ctx);
if (count == null ) {
C$.ctxRefs.put$TK$TV(this.ctx, new Integer(1));
} else {
C$.ctxRefs.put$TK$TV(this.ctx, new Integer((C$.ctxRefs.get$O(this.ctx)).valueOf() + 1));
}}}, 1);

Clazz.newMeth(C$, 'cleanup$', function () {
if (this.ctx == null ) return;
{
var count=(C$.ctxRefs.get$O(this.ctx)).valueOf();
count--;
if (count == 0) {
C$.ctxRefs.remove$O(this.ctx);
this.ctx.dispose$();
} else {
C$.ctxRefs.put$TK$TV(this.ctx, new Integer(count));
}}});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:43 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
