(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.wavelet.analysis"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "CBlkWTData");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.wmseScaling=1.0;
this.convertFactor=1.0;
this.stepSize=1.0;
this.nROIcoeff=0;
this.nROIbp=0;
}, 1);

C$.$fields$=[['D',['convertFactor','stepSize'],'F',['wmseScaling'],'I',['ulx','uly','n','m','w','h','offset','scanw','magbits','nROIcoeff','nROIbp'],'O',['sb','io.scif.jj2000.j2k.wavelet.analysis.SubbandAn']]]

Clazz.newMeth(C$, 'toString', function () {
var typeString="";
switch (this.getDataType$()) {
case 0:
typeString="Unsigned Byte";
break;
case 1:
typeString="Short";
break;
case 3:
typeString="Integer";
break;
case 4:
typeString="Float";
break;
}
return "CBlkWTData: ulx= " + this.ulx + ", uly= " + this.uly + ", code-block(" + this.m + "," + this.n + "), width= " + this.w + ", height= " + this.h + ", offset= " + this.offset + ", scan-width=" + this.scanw + ", type= " + typeString + ", sb= " + this.sb + ", num. ROI coeff=" + this.nROIcoeff + ", num. ROI bit-planes=" + this.nROIbp ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:17 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
