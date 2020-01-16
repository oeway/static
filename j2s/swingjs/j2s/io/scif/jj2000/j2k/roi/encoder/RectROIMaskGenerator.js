(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.roi.encoder"),I$=[[0,'io.scif.jj2000.j2k.roi.encoder.SubbandRectROIMask']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RectROIMaskGenerator", null, 'io.scif.jj2000.j2k.roi.encoder.ROIMaskGenerator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['ulxs','int[]','+ulys','+lrxs','+lrys','+nrROIs','sMasks','io.scif.jj2000.j2k.roi.encoder.SubbandRectROIMask[]']]]

Clazz.newMeth(C$, 'c$$io_scif_jj2000_j2k_roi_encoder_ROIA$I', function (ROIs, nrc) {
;C$.superclazz.c$$io_scif_jj2000_j2k_roi_encoder_ROIA$I.apply(this,[ROIs, nrc]);C$.$init$.apply(this);
var nr=ROIs.length;
var r;
var c;
this.nrROIs=Clazz.array(Integer.TYPE, [nrc]);
this.sMasks=Clazz.array($I$(1), [nrc]);
for (r=nr - 1; r >= 0; r--) {
this.nrROIs[ROIs[r].comp]++;
}
}, 1);

Clazz.newMeth(C$, 'getROIMask$io_scif_jj2000_j2k_image_DataBlkInt$io_scif_jj2000_j2k_wavelet_Subband$I$I', function (db, sb, magbits, c) {
var x=db.ulx;
var y=db.uly;
var w=db.w;
var h=db.h;
var mask=db.getDataInt$();
var i;
var j;
var k;
var r;
var mink;
var minj;
var maxk;
var maxj;
var ulx=0;
var uly=0;
var lrx=0;
var lry=0;
var wrap;
var maxROI;
var culxs;
var culys;
var clrxs;
var clrys;
var srm;
if (!this.tileMaskMade[c]) {
this.makeMask$io_scif_jj2000_j2k_wavelet_Subband$I$I(sb, magbits, c);
this.tileMaskMade[c]=true;
}if (!this.roiInTile) {
return false;
}srm=this.sMasks[c].getSubbandRectROIMask$I$I(x, y);
culxs=srm.ulxs;
culys=srm.ulys;
clrxs=srm.lrxs;
clrys=srm.lrys;
maxROI=culxs.length - 1;
x-=srm.ulx;
y-=srm.uly;
for (r=maxROI; r >= 0; r--) {
ulx=culxs[r] - x;
if (ulx < 0) {
ulx=0;
} else if (ulx >= w) {
ulx=w;
}uly=culys[r] - y;
if (uly < 0) {
uly=0;
} else if (uly >= h) {
uly=h;
}lrx=clrxs[r] - x;
if (lrx < 0) {
lrx=-1;
} else if (lrx >= w) {
lrx=w - 1;
}lry=clrys[r] - y;
if (lry < 0) {
lry=-1;
} else if (lry >= h) {
lry=h - 1;
}i=w * lry + lrx;
maxj=(lrx - ulx);
wrap=w - maxj - 1 ;
maxk=lry - uly;
for (k=maxk; k >= 0; k--) {
for (j=maxj; j >= 0; j--, i--) mask[i]=magbits;

i-=wrap;
}
}
return true;
});

Clazz.newMeth(C$, 'toString', function () {
return ("Fast rectangular ROI mask generator");
});

Clazz.newMeth(C$, 'makeMask$io_scif_jj2000_j2k_wavelet_Subband$I$I', function (sb, magbits, n) {
var nr=this.nrROIs[n];
var r;
var ulx;
var uly;
var lrx;
var lry;
var tileulx=sb.ulcx;
var tileuly=sb.ulcy;
var tilew=sb.w;
var tileh=sb.h;
var ROIs=this.rois;
this.ulxs=Clazz.array(Integer.TYPE, [nr]);
this.ulys=Clazz.array(Integer.TYPE, [nr]);
this.lrxs=Clazz.array(Integer.TYPE, [nr]);
this.lrys=Clazz.array(Integer.TYPE, [nr]);
nr=0;
for (r=ROIs.length - 1; r >= 0; r--) {
if (ROIs[r].comp == n) {
ulx=ROIs[r].ulx;
uly=ROIs[r].uly;
lrx=ROIs[r].w + ulx - 1;
lry=ROIs[r].h + uly - 1;
if (ulx > (tileulx + tilew - 1) || uly > (tileuly + tileh - 1)  || lrx < tileulx  || lry < tileuly ) continue;
ulx-=tileulx;
lrx-=tileulx;
uly-=tileuly;
lry-=tileuly;
ulx=(ulx < 0) ? 0 : ulx;
uly=(uly < 0) ? 0 : uly;
lrx=(lrx > (tilew - 1)) ? tilew - 1 : lrx;
lry=(lry > (tileh - 1)) ? tileh - 1 : lry;
this.ulxs[nr]=ulx;
this.ulys[nr]=uly;
this.lrxs[nr]=lrx;
this.lrys[nr]=lry;
nr++;
}}
if (nr == 0) {
this.roiInTile=false;
} else {
this.roiInTile=true;
}this.sMasks[n]=Clazz.new_($I$(1,1).c$$io_scif_jj2000_j2k_wavelet_Subband$IA$IA$IA$IA$I,[sb, this.ulxs, this.ulys, this.lrxs, this.lrys, nr]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:16 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
