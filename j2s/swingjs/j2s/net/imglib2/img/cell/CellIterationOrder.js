(function(){var P$=Clazz.newPackage("net.imglib2.img.cell"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "CellIterationOrder");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['img','net.imglib2.img.cell.AbstractCellImg']]]

Clazz.newMeth(C$, 'c$$net_imglib2_img_cell_AbstractCellImg', function (img) {
;C$.$init$.apply(this);
this.img=img;
}, 1);

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (!(Clazz.instanceOf(obj, "net.imglib2.img.cell.CellIterationOrder"))) return false;
var other=(obj).img;
return other.getCellGrid$().equals$O(this.img.getCellGrid$()) && other.getCells$().iterationOrder$().equals$O(this.img.getCells$().iterationOrder$()) ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:08 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
