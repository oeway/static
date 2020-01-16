(function(){var P$=Clazz.newPackage("org.rcsb.cif.generic"),I$=[[0,'java.util.ArrayList','org.rcsb.cif.api.TextFile','org.rcsb.cif.generic.BlockBuilder','org.rcsb.cif.api.BaseBlock']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CifBuilder");

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.cifFile=null;
this.blocks=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.blocks=Clazz.new_($I$(1,1));
this.cifFile=Clazz.new_($I$(2,1).c$$java_util_List,[this.blocks]);
}, 1);

Clazz.newMeth(C$, 'enterBlock$S', function (blockName) {
return Clazz.new_($I$(3,1).c$$S$org_rcsb_cif_generic_CifBuilder,[blockName, this]);
});

Clazz.newMeth(C$, 'digest$org_rcsb_cif_generic_BlockBuilder', function (blockBuilder) {
var block=Clazz.new_($I$(4,1).c$$java_util_Map$S,[blockBuilder.getCategories$(), blockBuilder.getBlockName$()]);
this.blocks.add$TE(block);
return this;
});

Clazz.newMeth(C$, 'leaveFile$', function () {
return this.build$();
});

Clazz.newMeth(C$, 'build$', function () {
return this.cifFile;
});

Clazz.newMeth(C$, 'addBlock$org_rcsb_cif_api_CifBlock', function (block) {
this.blocks.add$TE(block);
return this;
});
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:31 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
