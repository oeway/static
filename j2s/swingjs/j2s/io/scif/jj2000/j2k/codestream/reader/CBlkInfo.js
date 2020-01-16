(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.codestream.reader"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "CBlkInfo");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['ulx','uly','w','h','msbSkipped','ctp'],'O',['len','int[]','+off','+ntp','segLen','int[][]','pktIdx','int[]']]]

Clazz.newMeth(C$, 'c$$I$I$I$I$I', function (ulx, uly, w, h, nl) {
;C$.$init$.apply(this);
this.ulx=ulx;
this.uly=uly;
this.w=w;
this.h=h;
this.off=Clazz.array(Integer.TYPE, [nl]);
this.len=Clazz.array(Integer.TYPE, [nl]);
this.ntp=Clazz.array(Integer.TYPE, [nl]);
this.segLen=Clazz.array(Integer.TYPE, [nl, null]);
this.pktIdx=Clazz.array(Integer.TYPE, [nl]);
for (var i=nl - 1; i >= 0; i--) this.pktIdx[i]=-1;

}, 1);

Clazz.newMeth(C$, 'addNTP$I$I', function (l, newtp) {
this.ntp[l]=newtp;
this.ctp=0;
for (var lIdx=0; lIdx <= l; lIdx++) {
this.ctp+=this.ntp[lIdx];
}
});

Clazz.newMeth(C$, 'toString', function () {
var string="(ulx,uly,w,h)= " + this.ulx + "," + this.uly + "," + this.w + "," + this.h ;
string += ", " + this.msbSkipped + " MSB bit(s) skipped\n" ;
if (this.len != null ) for (var i=0; i < this.len.length; i++) {
string += "\tl:" + i + ", start:" + this.off[i] + ", len:" + this.len[i] + ", ntp:" + this.ntp[i] + ", pktIdx=" + this.pktIdx[i] ;
if (this.segLen != null  && this.segLen[i] != null  ) {
string += " { ";
for (var j=0; j < this.segLen[i].length; j++) string += this.segLen[i][j] + " ";

string += "}";
}string += "\n";
}
string += "\tctp=" + this.ctp;
return string;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:14 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
