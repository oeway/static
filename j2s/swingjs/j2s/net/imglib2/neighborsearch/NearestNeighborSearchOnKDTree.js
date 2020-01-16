(function(){var P$=Clazz.newPackage("net.imglib2.neighborsearch"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "NearestNeighborSearchOnKDTree", null, null, 'net.imglib2.neighborsearch.NearestNeighborSearch');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['D',['bestSquDistance'],'I',['n'],'O',['tree','net.imglib2.KDTree','pos','double[]','bestPoint','net.imglib2.KDTreeNode']]]

Clazz.newMeth(C$, 'c$$net_imglib2_KDTree', function (tree) {
;C$.$init$.apply(this);
this.n=tree.numDimensions$();
this.pos=Clazz.array(Double.TYPE, [this.n]);
this.tree=tree;
}, 1);

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.n;
});

Clazz.newMeth(C$, 'search$net_imglib2_RealLocalizable', function (p) {
p.localize$DA(this.pos);
this.bestSquDistance=1.7976931348623157E308;
this.searchNode$net_imglib2_KDTreeNode(this.tree.getRoot$());
});

Clazz.newMeth(C$, 'searchNode$net_imglib2_KDTreeNode', function (current) {
var distance=current.squDistanceTo$DA(this.pos);
if (distance < this.bestSquDistance ) {
this.bestSquDistance=distance;
this.bestPoint=current;
}var axisDiff=this.pos[current.getSplitDimension$()] - current.getSplitCoordinate$();
var axisSquDistance=axisDiff * axisDiff;
var leftIsNearBranch=axisDiff < 0 ;
var nearChild=leftIsNearBranch ? current.left : current.right;
var awayChild=leftIsNearBranch ? current.right : current.left;
if (nearChild != null ) this.searchNode$net_imglib2_KDTreeNode(nearChild);
if ((axisSquDistance <= this.bestSquDistance ) && (awayChild != null ) ) this.searchNode$net_imglib2_KDTreeNode(awayChild);
});

Clazz.newMeth(C$, 'getSampler$', function () {
return this.bestPoint;
});

Clazz.newMeth(C$, 'getPosition$', function () {
return this.bestPoint;
});

Clazz.newMeth(C$, 'getSquareDistance$', function () {
return this.bestSquDistance;
});

Clazz.newMeth(C$, 'getDistance$', function () {
return Math.sqrt(this.bestSquDistance);
});

Clazz.newMeth(C$, 'copy$', function () {
var copy=Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_KDTree,[this.tree]);
System.arraycopy$O$I$O$I$I(this.pos, 0, copy.pos, 0, this.pos.length);
copy.bestPoint=this.bestPoint;
copy.bestSquDistance=this.bestSquDistance;
return copy;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:10 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
