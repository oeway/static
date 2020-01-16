(function(){var P$=Clazz.newPackage("net.imglib2.neighborsearch"),I$=[[0,'java.util.ArrayList','java.util.Collections','net.imglib2.util.ValuePair']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RadiusNeighborSearchOnKDTree", null, null, 'net.imglib2.neighborsearch.RadiusNeighborSearch');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['n'],'O',['tree','net.imglib2.KDTree','pos','double[]','resultPoints','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$$net_imglib2_KDTree', function (tree) {
;C$.$init$.apply(this);
this.tree=tree;
this.n=tree.numDimensions$();
this.pos=Clazz.array(Double.TYPE, [this.n]);
this.resultPoints=Clazz.new_(1,{E:"net.imglib2.util.ValuePair"},$I$(1,1));
}, 1);

Clazz.newMeth(C$, 'search$net_imglib2_RealLocalizable$D$Z', function (reference, radius, sortResults) {
Clazz.assert(C$, this, function(){return radius >= 0 });
reference.localize$DA(this.pos);
this.resultPoints.clear$();
this.searchNode$net_imglib2_KDTreeNode$D(this.tree.getRoot$(), radius * radius);
if (sortResults) {
$I$(2).sort$java_util_List$java_util_Comparator(this.resultPoints, ((P$.RadiusNeighborSearchOnKDTree$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "RadiusNeighborSearchOnKDTree$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['compare$net_imglib2_util_ValuePair$net_imglib2_util_ValuePair','compare$','compare$TT$TT'], function (o1, o2) {
return Double.compare$D$D((o1.b).valueOf(), (o2.b).valueOf());
});
})()
), Clazz.new_(P$.RadiusNeighborSearchOnKDTree$1.$init$, [this, null])));
}});

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.n;
});

Clazz.newMeth(C$, 'searchNode$net_imglib2_KDTreeNode$D', function (current, squRadius) {
var squDistance=current.squDistanceTo$DA(this.pos);
if (squDistance <= squRadius ) {
this.resultPoints.add$TE(Clazz.new_(1,{A:"net.imglib2.KDTreeNode",B:"Double"},$I$(3,1).c$$TA$TB,[current, new Double(squDistance)]));
}var axisDiff=this.pos[current.getSplitDimension$()] - current.getSplitCoordinate$();
var axisSquDistance=axisDiff * axisDiff;
var leftIsNearBranch=axisDiff < 0 ;
var nearChild=leftIsNearBranch ? current.left : current.right;
var awayChild=leftIsNearBranch ? current.right : current.left;
if (nearChild != null ) this.searchNode$net_imglib2_KDTreeNode$D(nearChild, squRadius);
if ((axisSquDistance <= squRadius ) && (awayChild != null ) ) this.searchNode$net_imglib2_KDTreeNode$D(awayChild, squRadius);
});

Clazz.newMeth(C$, 'numNeighbors$', function () {
return this.resultPoints.size$();
});

Clazz.newMeth(C$, 'getSampler$I', function (i) {
return this.resultPoints.get$I(i).a;
});

Clazz.newMeth(C$, 'getPosition$I', function (i) {
return this.resultPoints.get$I(i).a;
});

Clazz.newMeth(C$, 'getSquareDistance$I', function (i) {
return (this.resultPoints.get$I(i).b).valueOf();
});

Clazz.newMeth(C$, 'getDistance$I', function (i) {
return Math.sqrt((this.resultPoints.get$I(i).b).valueOf());
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:10 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
