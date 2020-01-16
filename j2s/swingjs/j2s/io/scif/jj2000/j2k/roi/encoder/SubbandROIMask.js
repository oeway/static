(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.roi.encoder"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SubbandROIMask");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['isNode'],'I',['ulx','uly','w','h'],'O',['ll','io.scif.jj2000.j2k.roi.encoder.SubbandROIMask','+lh','+hl','+hh']]]

Clazz.newMeth(C$, 'c$$I$I$I$I', function (ulx, uly, w, h) {
;C$.$init$.apply(this);
this.ulx=ulx;
this.uly=uly;
this.w=w;
this.h=h;
}, 1);

Clazz.newMeth(C$, 'getSubbandRectROIMask$I$I', function (x, y) {
var cur;
var hhs;
if (x < this.ulx || y < this.uly  || x >= this.ulx + this.w  || y >= this.uly + this.h ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}cur=this;
while (cur.isNode){
hhs=cur.hh;
if (x < hhs.ulx) {
if (y < hhs.uly) {
cur=cur.ll;
} else {
cur=cur.lh;
}} else {
if (y < hhs.uly) {
cur=cur.hl;
} else {
cur=cur.hh;
}}}
return cur;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:16 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
