(function(){var P$=Clazz.newPackage("net.imglib2.neighborsearch"),I$=[[0,'net.imglib2.KDTreeNode']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "KNearestNeighborSearchOnKDTree", null, null, 'net.imglib2.neighborsearch.KNearestNeighborSearch');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['n','k'],'O',['tree','net.imglib2.KDTree','pos','double[]','bestPoints','net.imglib2.KDTreeNode[]','bestSquDistances','double[]']]]

Clazz.newMeth(C$, 'c$$net_imglib2_KDTree$I', function (tree, k) {
;C$.$init$.apply(this);
this.tree=tree;
this.n=tree.numDimensions$();
this.pos=Clazz.array(Double.TYPE, [this.n]);
this.k=k;
this.bestPoints=Clazz.array($I$(1), [k]);
this.bestSquDistances=Clazz.array(Double.TYPE, [k]);
for (var i=0; i < k; ++i) this.bestSquDistances[i]=1.7976931348623157E308;

}, 1);

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.n;
});

Clazz.newMeth(C$, 'getK$', function () {
return this.k;
});

Clazz.newMeth(C$, 'search$net_imglib2_RealLocalizable', function (reference) {
reference.localize$DA(this.pos);
for (var i=0; i < this.k; ++i) this.bestSquDistances[i]=1.7976931348623157E308;

this.searchNode$net_imglib2_KDTreeNode(this.tree.getRoot$());
});

Clazz.newMeth(C$, 'searchNode$net_imglib2_KDTreeNode', function (current) {
var squDistance=current.squDistanceTo$DA(this.pos);
if (squDistance < this.bestSquDistances[this.k - 1] ) {
var i=this.k - 1;
for (var j=i - 1; i > 0 && squDistance < this.bestSquDistances[j]  ; --i, --j) {
this.bestSquDistances[i]=this.bestSquDistances[j];
this.bestPoints[i]=this.bestPoints[j];
}
this.bestSquDistances[i]=squDistance;
this.bestPoints[i]=current;
}var axisDiff=this.pos[current.getSplitDimension$()] - current.getSplitCoordinate$();
var axisSquDistance=axisDiff * axisDiff;
var leftIsNearBranch=axisDiff < 0 ;
var nearChild=leftIsNearBranch ? current.left : current.right;
var awayChild=leftIsNearBranch ? current.right : current.left;
if (nearChild != null ) this.searchNode$net_imglib2_KDTreeNode(nearChild);
if ((axisSquDistance <= this.bestSquDistances[this.k - 1] ) && (awayChild != null ) ) this.searchNode$net_imglib2_KDTreeNode(awayChild);
});

Clazz.newMeth(C$, 'getSampler$I', function (i) {
return this.bestPoints[i];
});

Clazz.newMeth(C$, 'getPosition$I', function (i) {
return this.bestPoints[i];
});

Clazz.newMeth(C$, 'getSquareDistance$I', function (i) {
return this.bestSquDistances[i];
});

Clazz.newMeth(C$, 'getDistance$I', function (i) {
return Math.sqrt(this.bestSquDistances[i]);
});

Clazz.newMeth(C$, 'getPosition$', function () {
return this.getPosition$I(0);
});

Clazz.newMeth(C$, 'getSampler$', function () {
return this.getSampler$I(0);
});

Clazz.newMeth(C$, 'getSquareDistance$', function () {
return this.getSquareDistance$I(0);
});

Clazz.newMeth(C$, 'getDistance$', function () {
return this.getDistance$I(0);
});

Clazz.newMeth(C$, 'copy$', function () {
var copy=Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_KDTree$I,[this.tree, this.k]);
System.arraycopy$O$I$O$I$I(this.pos, 0, copy.pos, 0, this.pos.length);
for (var i=0; i < this.k; ++i) {
copy.bestPoints[i]=this.bestPoints[i];
copy.bestSquDistances[i]=this.bestSquDistances[i];
}
return copy;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:10 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
