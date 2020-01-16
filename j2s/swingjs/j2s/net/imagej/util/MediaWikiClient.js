(function(){var P$=Clazz.newPackage("net.imagej.util"),I$=[[0,'java.util.HashSet','java.util.Arrays','java.util.LinkedHashMap','StringBuilder','java.net.URLEncoder','java.net.URL','java.io.PrintStream','org.scijava.util.XML']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MediaWikiClient");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.postActions=Clazz.new_(1,{E:"String"},$I$(1,1).c$$java_util_Collection,[$I$(2).asList$TTA(["login", "changeuploadpassword"])]);
this.cookies=Clazz.new_(1,{K:"String",V:"String"},$I$(3,1));
}, 1);

C$.$fields$=[['S',['baseURL','currentUser'],'O',['postActions','java.util.Set','cookies','java.util.Map']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$S.apply(this, ["http://wiki.imagej.net/"]);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (baseURL) {
;C$.$init$.apply(this);
if (baseURL.endsWith$S("/index.php")) this.baseURL=baseURL.substring$I$I(0, baseURL.length$() - 9);
 else if (baseURL.endsWith$S("/")) this.baseURL=baseURL;
 else this.baseURL=baseURL + "/";
}, 1);

Clazz.newMeth(C$, 'firstToUpperCase$S', function (word) {
if (word.length$() == 0) return String.fromCharCode(0);
var first=word.charAt$I(0);
if (Character.isLowerCase$C(first)) return Character.toUpperCase$C(first);
return String.fromCharCode(0);
}, 1);

Clazz.newMeth(C$, 'isCapitalized$S', function (word) {
return (C$.firstToUpperCase$S(word)).$c() == 0 ;
}, 1);

Clazz.newMeth(C$, 'capitalize$S', function (word) {
var first=C$.firstToUpperCase$S(word);
if (first.$c() == 0 ) return word;
var builder=Clazz.new_($I$(4,1));
builder.append$C(first);
builder.append$S(word.substring$I(1));
return builder.toString();
}, 1);

Clazz.newMeth(C$, 'getPageSource$S', function (title) {
var xml=this.query$SA(["titles", title, "export", "true", "exportnowrap", "true"]);
return xml.cdata$S("/mediawiki/page/revision/text");
});

Clazz.newMeth(C$, 'userExists$S', function (name) {
if (!C$.isCapitalized$S(name)) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["User name cannot start with a lower-case character: " + name]);
}var xml=this.query$SA(["list", "users", "ususers", name]);
var list=xml.xpath$S("/api/query/users/user");
var count=list.getLength$();
for (var i=0; i < count; i++) {
var node=list.item$I(i).getAttributes$();
if (node != null  && node.getNamedItem$S("missing") == null  ) return true;
}
return false;
});

Clazz.newMeth(C$, 'createUser$S$S$S$S', function (userName, realName, email, reason) {
var headers=Clazz.array(String, -1, ["Requested-User", userName]);
var xml=this.request$SA$S$SA(headers, "createimagejwikiaccount", ["name", userName, "email", email, "realname", realName, "reason", reason]);
var error=C$.getAttribute$org_w3c_dom_NodeList$S(xml.xpath$S("/api/error"), "info");
if (error != null ) {
System.err.println$S("Error creating user " + userName + ": " + error );
return false;
}if (userName.equals$O(C$.getAttribute$org_w3c_dom_NodeList$S(xml.xpath$S("/api/createimagejwikiaccount"), "created"))) {
return true;
}return false;
});

Clazz.newMeth(C$, 'changeUploadPassword$S', function (password) {
if (this.currentUser == null ) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Can only change the password for a logged-in user"]);
System.err.println$S("action: changeuploadpassword");
var xml=this.request$SA$S$SA(null, "changeuploadpassword", ["password", password]);
var error=C$.getAttribute$org_w3c_dom_NodeList$S(xml.xpath$S("/api/error"), "info");
if (error != null ) {
System.err.println$S("Error setting upload password for user '" + this.currentUser + "': " + error );
return false;
}var response=xml.xpath$S("/api/changeuploadpassword");
var result="0".equals$O(C$.getAttribute$org_w3c_dom_NodeList$S(response, "result"));
if (!result) {
System.err.println$S("a1: " + response.item$I(0));
System.err.println$S("Error: " + C$.getAttribute$org_w3c_dom_NodeList$S(response, "output"));
}return result;
});

Clazz.newMeth(C$, 'login$S$S', function (user, password) {
var xml=this.request$SA$S$SA(null, "login", ["lgname", user, "lgpassword", password]);
var loginToken=C$.getAttribute$org_w3c_dom_NodeList$S(xml.xpath$S("/api/login"), "token");
if (loginToken == null ) {
System.err.println$S("Did not get a token!");
return false;
}xml=this.request$SA$S$SA(null, "login", ["lgname", user, "lgpassword", password, "lgtoken", loginToken]);
var result="Success".equals$O(C$.getAttribute$org_w3c_dom_NodeList$S(xml.xpath$S("/api/login"), "result"));
this.currentUser=result ? user : null;
return result;
});

Clazz.newMeth(C$, 'logout$', function () {
if (this.currentUser == null ) return;
this.request$SA$S$SA(null, "logout", []);
this.cookies.clear$();
this.currentUser=null;
});

Clazz.newMeth(C$, 'request$SA$S$SA', function (headers, action, parameters) {
if (parameters.length % 2 != 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Requires key/value pairs"]);
var requiresPOST=this.postActions.contains$O(action);
try {
var url=Clazz.new_($I$(4,1));
url.append$S(this.baseURL).append$S("api.php?action=").append$S(action).append$S("&format=xml");
if (!requiresPOST) {
for (var i=0; i < parameters.length; i+=2) {
url.append$S("&").append$S($I$(5).encode$S$S(parameters[i], "UTF-8"));
url.append$S("=").append$S($I$(5).encode$S$S(parameters[i + 1], "UTF-8"));
}
}var connection=Clazz.new_($I$(6,1).c$$S,[url.toString()]).openConnection$();
for (var entry, $entry = this.cookies.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
connection.addRequestProperty$S$S("Cookie", entry.getKey$() + "=" + entry.getValue$() );
}
if (headers != null ) {
if (headers.length % 2 != 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Requires key/value pairs"]);
for (var i=0; i < headers.length; i+=2) {
connection.setRequestProperty$S$S(headers[i], headers[i + 1]);
}
}var http=(Clazz.instanceOf(connection, "java.net.HttpURLConnection")) ? connection : null;
if (http != null  && requiresPOST ) {
http.setRequestMethod$S("POST");
var boundary="---e69de29bb2d1d6434b8b29ae775ad8c2e48c5391";
http.setRequestProperty$S$S("Content-Type", "multipart/form-data; boundary=---e69de29bb2d1d6434b8b29ae775ad8c2e48c5391");
http.setDoOutput$Z(true);
http.connect$();
var ps=Clazz.new_($I$(7,1).c$$java_io_OutputStream,[http.getOutputStream$()]);
for (var i=0; i < parameters.length; i+=2) {
ps.print$S("--" + "---e69de29bb2d1d6434b8b29ae775ad8c2e48c5391" + "\r\n" + "Content-Disposition: " + "form-data; name=\"" + parameters[i] + "\"\r\n\r\n" + parameters[i + 1] + "\r\n" );
}
ps.println$S("-----e69de29bb2d1d6434b8b29ae775ad8c2e48c5391--");
ps.close$();
}var newCookies=http.getHeaderFields$().get$O("Set-Cookie");
if (newCookies != null ) {
for (var cookie, $cookie = newCookies.iterator$(); $cookie.hasNext$()&&((cookie=($cookie.next$())),1);) {
var equal=cookie.indexOf$S("=");
if (equal < 0) continue;
var key=cookie.substring$I$I(0, equal);
var value=cookie.substring$I(equal + 1);
if (value.startsWith$S("deleted; ")) this.cookies.remove$O(key);
 else this.cookies.put$TK$TV(key, value);
}
}return Clazz.new_($I$(8,1).c$$java_io_InputStream,[connection.getInputStream$()]);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"javax.xml.parsers.ParserConfigurationException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('java.io.IOException').c$$Throwable,[e]);
}
} else if (Clazz.exceptionOf(e$$,"org.xml.sax.SAXException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('java.io.IOException').c$$Throwable,[e]);
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'query$SA', function (parameters) {
return this.request$SA$S$SA(null, "query", parameters);
});

Clazz.newMeth(C$, 'getAttribute$org_w3c_dom_NodeList$S', function (list, attributeName) {
if (list == null  || list.getLength$() != 1 ) return null;
var attrs=list.item$I(0).getAttributes$();
if (attrs == null ) return null;
var node=attrs.getNamedItem$S(attributeName);
return node == null  ? null : node.getNodeValue$();
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:04 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
