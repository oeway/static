(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.roi.encoder"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ROI");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.maskPGM=null;
}, 1);

C$.$fields$=[['Z',['arbShape','rect'],'I',['comp','ulx','uly','w','h','x','y','r'],'O',['maskPGM','io.scif.jj2000.j2k.image.input.ImgReaderPGM']]]

Clazz.newMeth(C$, 'c$$I$io_scif_jj2000_j2k_image_input_ImgReaderPGM', function (comp, maskPGM) {
;C$.$init$.apply(this);
this.arbShape=true;
this.rect=false;
this.comp=comp;
this.maskPGM=maskPGM;
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I$I', function (comp, ulx, uly, w, h) {
;C$.$init$.apply(this);
this.arbShape=false;
this.comp=comp;
this.ulx=ulx;
this.uly=uly;
this.w=w;
this.h=h;
this.rect=true;
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I', function (comp, x, y, rad) {
;C$.$init$.apply(this);
this.arbShape=false;
this.comp=comp;
this.x=x;
this.y=y;
this.r=rad;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
if (this.arbShape) {
return "ROI with arbitrary shape, PGM file= " + this.maskPGM;
} else if (this.rect) return "Rectangular ROI, comp=" + this.comp + " ulx=" + this.ulx + " uly=" + this.uly + " w=" + this.w + " h=" + this.h ;
 else return "Circular ROI,  comp=" + this.comp + " x=" + this.x + " y=" + this.y + " radius=" + this.r ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:16 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
