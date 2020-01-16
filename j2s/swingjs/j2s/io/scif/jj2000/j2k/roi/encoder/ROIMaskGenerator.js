(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.roi.encoder"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ROIMaskGenerator");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['roiInTile'],'I',['nrc'],'O',['rois','io.scif.jj2000.j2k.roi.encoder.ROI[]','tileMaskMade','boolean[]']]]

Clazz.newMeth(C$, 'c$$io_scif_jj2000_j2k_roi_encoder_ROIA$I', function (rois, nrc) {
;C$.$init$.apply(this);
this.rois=rois;
this.nrc=nrc;
this.tileMaskMade=Clazz.array(Boolean.TYPE, [nrc]);
}, 1);

Clazz.newMeth(C$, 'getROIs$', function () {
return this.rois;
});

Clazz.newMeth(C$, 'tileChanged$', function () {
for (var i=0; i < this.nrc; i++) this.tileMaskMade[i]=false;

});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:16 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
