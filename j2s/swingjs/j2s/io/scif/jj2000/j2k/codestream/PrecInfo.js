(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.codestream"),I$=[[0,'io.scif.jj2000.j2k.codestream.CBlkCoordInfo']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PrecInfo");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['rgulx','rguly','rgw','rgh','ulx','uly','w','h','r'],'O',['cblk','io.scif.jj2000.j2k.codestream.CBlkCoordInfo[][][]','nblk','int[]']]]

Clazz.newMeth(C$, 'c$$I$I$I$I$I$I$I$I$I', function (r, ulx, uly, w, h, rgulx, rguly, rgw, rgh) {
;C$.$init$.apply(this);
this.r=r;
this.ulx=ulx;
this.uly=uly;
this.w=w;
this.h=h;
this.rgulx=rgulx;
this.rguly=rguly;
this.rgw=rgw;
this.rgh=rgh;
if (r == 0) {
this.cblk=Clazz.array($I$(1), [1, null, null]);
this.nblk=Clazz.array(Integer.TYPE, [1]);
} else {
this.cblk=Clazz.array($I$(1), [4, null, null]);
this.nblk=Clazz.array(Integer.TYPE, [4]);
}}, 1);

Clazz.newMeth(C$, 'toString', function () {
return "ulx=" + this.ulx + ",uly=" + this.uly + ",w=" + this.w + ",h=" + this.h + ",rgulx=" + this.rgulx + ",rguly=" + this.rguly + ",rgw=" + this.rgw + ",rgh=" + this.rgh ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:14 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
