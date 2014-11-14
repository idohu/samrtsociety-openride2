/*!
 * jQuery JavaScript Library v1.4.2
 * http://jquery.com/
 *
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Sat Feb 13 22:33:48 2010 -0500
 */
(function(A,w){
    function ma(){
        if(!c.isReady){
            try{
                s.documentElement.doScroll("left")
            }catch(a){
                setTimeout(ma,1);
                return
            }
            c.ready()
        }
    }
    function Qa(a,b){
        b.src?c.ajax({
            url:b.src,
            async:false,
            dataType:"script"
        }):c.globalEval(b.text||b.textContent||b.innerHTML||"");
        b.parentNode&&b.parentNode.removeChild(b)
    }
    function X(a,b,d,f,e,j){
        var i=a.length;
        if(typeof b==="object"){
            for(var o in b)X(a,o,b[o],f,e,d);return a
        }
        if(d!==w){
            f=!j&&f&&c.isFunction(d);
            for(o=0;o<i;o++)e(a[o],b,f?d.call(a[o],o,e(a[o],b)):d,j);
            return a
        }
        return i?
        e(a[0],b):w
    }
    function J(){
        return(new Date).getTime()
    }
    function Y(){
        return false
    }
    function Z(){
        return true
    }
    function na(a,b,d){
        d[0].type=a;
        return c.event.handle.apply(b,d)
    }
    function oa(a){
        var b,d=[],f=[],e=arguments,j,i,o,k,n,r;
        i=c.data(this,"events");
        if(!(a.liveFired===this||!i||!i.live||a.button&&a.type==="click")){
            a.liveFired=this;
            var u=i.live.slice(0);
            for(k=0;k<u.length;k++){
                i=u[k];
                i.origType.replace(O,"")===a.type?f.push(i.selector):u.splice(k--,1)
            }
            j=c(a.target).closest(f,a.currentTarget);
            n=0;
            for(r=
                j.length;n<r;n++)for(k=0;k<u.length;k++){
                i=u[k];
                if(j[n].selector===i.selector){
                    o=j[n].elem;
                    f=null;
                    if(i.preType==="mouseenter"||i.preType==="mouseleave")f=c(a.relatedTarget).closest(i.selector)[0];
                    if(!f||f!==o)d.push({
                        elem:o,
                        handleObj:i
                    })
                }
            }
            n=0;
            for(r=d.length;n<r;n++){
                j=d[n];
                a.currentTarget=j.elem;
                a.data=j.handleObj.data;
                a.handleObj=j.handleObj;
                if(j.handleObj.origHandler.apply(j.elem,e)===false){
                    b=false;
                    break
                }
            }
            return b
        }
    }
    function pa(a,b){
        return"live."+(a&&a!=="*"?a+".":"")+b.replace(/\./g,"`").replace(/ /g,
            "&")
    }
    function qa(a){
        return!a||!a.parentNode||a.parentNode.nodeType===11
    }
    function ra(a,b){
        var d=0;
        b.each(function(){
            if(this.nodeName===(a[d]&&a[d].nodeName)){
                var f=c.data(a[d++]),e=c.data(this,f);
                if(f=f&&f.events){
                    delete e.handle;
                    e.events={};

                    for(var j in f)for(var i in f[j])c.event.add(this,j,f[j][i],f[j][i].data)
                }
            }
        })
    }
    function sa(a,b,d){
        var f,e,j;
        b=b&&b[0]?b[0].ownerDocument||b[0]:s;
        if(a.length===1&&typeof a[0]==="string"&&a[0].length<512&&b===s&&!ta.test(a[0])&&(c.support.checkClone||!ua.test(a[0]))){
            e=true;
            if(j=c.fragments[a[0]])if(j!==1)f=j
        }
        if(!f){
            f=b.createDocumentFragment();
            c.clean(a,b,f,d)
        }
        if(e)c.fragments[a[0]]=j?f:1;
        return{
            fragment:f,
            cacheable:e
        }
    }
    function K(a,b){
        var d={};

        c.each(va.concat.apply([],va.slice(0,b)),function(){
            d[this]=a
        });
        return d
    }
    function wa(a){
        return"scrollTo"in a&&a.document?a:a.nodeType===9?a.defaultView||a.parentWindow:false
    }
    var c=function(a,b){
        return new c.fn.init(a,b)
    },Ra=A.jQuery,Sa=A.$,s=A.document,T,Ta=/^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,Ua=/^.[^:#\[\.,]*$/,Va=/\S/,
    Wa=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,Xa=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,P=navigator.userAgent,xa=false,Q=[],L,$=Object.prototype.toString,aa=Object.prototype.hasOwnProperty,ba=Array.prototype.push,R=Array.prototype.slice,ya=Array.prototype.indexOf;
    c.fn=c.prototype={
        init:function(a,b){
            var d,f;
            if(!a)return this;
            if(a.nodeType){
                this.context=this[0]=a;
                this.length=1;
                return this
            }
            if(a==="body"&&!b){
                this.context=s;
                this[0]=s.body;
                this.selector="body";
                this.length=1;
                return this
            }
            if(typeof a==="string")if((d=Ta.exec(a))&&
                (d[1]||!b))if(d[1]){
                f=b?b.ownerDocument||b:s;
                if(a=Xa.exec(a))if(c.isPlainObject(b)){
                    a=[s.createElement(a[1])];
                    c.fn.attr.call(a,b,true)
                }else a=[f.createElement(a[1])];
                else{
                    a=sa([d[1]],[f]);
                    a=(a.cacheable?a.fragment.cloneNode(true):a.fragment).childNodes
                }
                return c.merge(this,a)
            }else{
                if(b=s.getElementById(d[2])){
                    if(b.id!==d[2])return T.find(a);
                    this.length=1;
                    this[0]=b
                }
                this.context=s;
                this.selector=a;
                return this
            }else if(!b&&/^\w+$/.test(a)){
                this.selector=a;
                this.context=s;
                a=s.getElementsByTagName(a);
                return c.merge(this,
                    a)
            }
            else return!b||b.jquery?(b||T).find(a):c(b).find(a);
            else if(c.isFunction(a))return T.ready(a);
            if(a.selector!==w){
                this.selector=a.selector;
                this.context=a.context
            }
            return c.makeArray(a,this)
        },
        selector:"",
        jquery:"1.4.2",
        length:0,
        size:function(){
            return this.length
        },
        toArray:function(){
            return R.call(this,0)
        },
        get:function(a){
            return a==null?this.toArray():a<0?this.slice(a)[0]:this[a]
        },
        pushStack:function(a,b,d){
            var f=c();
            c.isArray(a)?ba.apply(f,a):c.merge(f,a);
            f.prevObject=this;
            f.context=this.context;
            if(b===
                "find")f.selector=this.selector+(this.selector?" ":"")+d;
            else if(b)f.selector=this.selector+"."+b+"("+d+")";
            return f
        },
        each:function(a,b){
            return c.each(this,a,b)
        },
        ready:function(a){
            c.bindReady();
            if(c.isReady)a.call(s,c);else Q&&Q.push(a);
            return this
        },
        eq:function(a){
            return a===-1?this.slice(a):this.slice(a,+a+1)
        },
        first:function(){
            return this.eq(0)
        },
        last:function(){
            return this.eq(-1)
        },
        slice:function(){
            return this.pushStack(R.apply(this,arguments),"slice",R.call(arguments).join(","))
        },
        map:function(a){
            return this.pushStack(c.map(this,
                function(b,d){
                    return a.call(b,d,b)
                }))
        },
        end:function(){
            return this.prevObject||c(null)
        },
        push:ba,
        sort:[].sort,
        splice:[].splice
    };

    c.fn.init.prototype=c.fn;
    c.extend=c.fn.extend=function(){
        var a=arguments[0]||{},b=1,d=arguments.length,f=false,e,j,i,o;
        if(typeof a==="boolean"){
            f=a;
            a=arguments[1]||{};

            b=2
        }
        if(typeof a!=="object"&&!c.isFunction(a))a={};

        if(d===b){
            a=this;
            --b
        }
        for(;b<d;b++)if((e=arguments[b])!=null)for(j in e){
            i=a[j];
            o=e[j];
            if(a!==o)if(f&&o&&(c.isPlainObject(o)||c.isArray(o))){
                i=i&&(c.isPlainObject(i)||
                    c.isArray(i))?i:c.isArray(o)?[]:{};

                a[j]=c.extend(f,i,o)
            }else if(o!==w)a[j]=o
        }
        return a
    };

    c.extend({
        noConflict:function(a){
            A.$=Sa;
            if(a)A.jQuery=Ra;
            return c
        },
        isReady:false,
        ready:function(){
            if(!c.isReady){
                if(!s.body)return setTimeout(c.ready,13);
                c.isReady=true;
                if(Q){
                    for(var a,b=0;a=Q[b++];)a.call(s,c);
                    Q=null
                }
                c.fn.triggerHandler&&c(s).triggerHandler("ready")
            }
        },
        bindReady:function(){
            if(!xa){
                xa=true;
                if(s.readyState==="complete")return c.ready();
                if(s.addEventListener){
                    s.addEventListener("DOMContentLoaded",
                        L,false);
                    A.addEventListener("load",c.ready,false)
                }else if(s.attachEvent){
                    s.attachEvent("onreadystatechange",L);
                    A.attachEvent("onload",c.ready);
                    var a=false;
                    try{
                        a=A.frameElement==null
                    }catch(b){}
                    s.documentElement.doScroll&&a&&ma()
                }
            }
        },
        isFunction:function(a){
            return $.call(a)==="[object Function]"
        },
        isArray:function(a){
            return $.call(a)==="[object Array]"
        },
        isPlainObject:function(a){
            if(!a||$.call(a)!=="[object Object]"||a.nodeType||a.setInterval)return false;
            if(a.constructor&&!aa.call(a,"constructor")&&!aa.call(a.constructor.prototype,
                "isPrototypeOf"))return false;
            var b;
            for(b in a);return b===w||aa.call(a,b)
        },
        isEmptyObject:function(a){
            for(var b in a)return false;return true
        },
        error:function(a){
            throw a;
        },
        parseJSON:function(a){
            if(typeof a!=="string"||!a)return null;
            a=c.trim(a);
            if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return A.JSON&&A.JSON.parse?A.JSON.parse(a):(new Function("return "+
                a))();else c.error("Invalid JSON: "+a)
        },
        noop:function(){},
        globalEval:function(a){
            if(a&&Va.test(a)){
                var b=s.getElementsByTagName("head")[0]||s.documentElement,d=s.createElement("script");
                d.type="text/javascript";
                if(c.support.scriptEval)d.appendChild(s.createTextNode(a));else d.text=a;
                b.insertBefore(d,b.firstChild);
                b.removeChild(d)
            }
        },
        nodeName:function(a,b){
            return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()
        },
        each:function(a,b,d){
            var f,e=0,j=a.length,i=j===w||c.isFunction(a);
            if(d)if(i)for(f in a){
                if(b.apply(a[f],
                    d)===false)break
            }else for(;e<j;){
                if(b.apply(a[e++],d)===false)break
            }else if(i)for(f in a){
                if(b.call(a[f],f,a[f])===false)break
            }
            else for(d=a[0];e<j&&b.call(d,e,d)!==false;d=a[++e]);
            return a
        },
        trim:function(a){
            return(a||"").replace(Wa,"")
        },
        makeArray:function(a,b){
            b=b||[];
            if(a!=null)a.length==null||typeof a==="string"||c.isFunction(a)||typeof a!=="function"&&a.setInterval?ba.call(b,a):c.merge(b,a);
            return b
        },
        inArray:function(a,b){
            if(b.indexOf)return b.indexOf(a);
            for(var d=0,f=b.length;d<f;d++)if(b[d]===
                a)return d;return-1
        },
        merge:function(a,b){
            var d=a.length,f=0;
            if(typeof b.length==="number")for(var e=b.length;f<e;f++)a[d++]=b[f];else for(;b[f]!==w;)a[d++]=b[f++];
            a.length=d;
            return a
        },
        grep:function(a,b,d){
            for(var f=[],e=0,j=a.length;e<j;e++)!d!==!b(a[e],e)&&f.push(a[e]);
            return f
        },
        map:function(a,b,d){
            for(var f=[],e,j=0,i=a.length;j<i;j++){
                e=b(a[j],j,d);
                if(e!=null)f[f.length]=e
            }
            return f.concat.apply([],f)
        },
        guid:1,
        proxy:function(a,b,d){
            if(arguments.length===2)if(typeof b==="string"){
                d=a;
                a=d[b];
                b=w
            }else if(b&&
                !c.isFunction(b)){
                d=b;
                b=w
            }
            if(!b&&a)b=function(){
                return a.apply(d||this,arguments)
            };

            if(a)b.guid=a.guid=a.guid||b.guid||c.guid++;
            return b
        },
        uaMatch:function(a){
            a=a.toLowerCase();
            a=/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||!/compatible/.test(a)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(a)||[];
            return{
                browser:a[1]||"",
                version:a[2]||"0"
            }
        },
        browser:{}
    });
    P=c.uaMatch(P);
    if(P.browser){
        c.browser[P.browser]=true;
        c.browser.version=P.version
    }
    if(c.browser.webkit)c.browser.safari=
        true;
    if(ya)c.inArray=function(a,b){
        return ya.call(b,a)
    };

    T=c(s);
    if(s.addEventListener)L=function(){
        s.removeEventListener("DOMContentLoaded",L,false);
        c.ready()
    };
    else if(s.attachEvent)L=function(){
        if(s.readyState==="complete"){
            s.detachEvent("onreadystatechange",L);
            c.ready()
        }
    };
    (function(){
        c.support={};

        var a=s.documentElement,b=s.createElement("script"),d=s.createElement("div"),f="script"+J();
        d.style.display="none";
        d.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
        var e=d.getElementsByTagName("*"),j=d.getElementsByTagName("a")[0];
        if(!(!e||!e.length||!j)){
            c.support={
                leadingWhitespace:d.firstChild.nodeType===3,
                tbody:!d.getElementsByTagName("tbody").length,
                htmlSerialize:!!d.getElementsByTagName("link").length,
                style:/red/.test(j.getAttribute("style")),
                hrefNormalized:j.getAttribute("href")==="/a",
                opacity:/^0.55$/.test(j.style.opacity),
                cssFloat:!!j.style.cssFloat,
                checkOn:d.getElementsByTagName("input")[0].value==="on",
                optSelected:s.createElement("select").appendChild(s.createElement("option")).selected,
                parentNode:d.removeChild(d.appendChild(s.createElement("div"))).parentNode===null,
                deleteExpando:true,
                checkClone:false,
                scriptEval:false,
                noCloneEvent:true,
                boxModel:null
            };

            b.type="text/javascript";
            try{
                b.appendChild(s.createTextNode("window."+f+"=1;"))
            }catch(i){}
            a.insertBefore(b,a.firstChild);
            if(A[f]){
                c.support.scriptEval=true;
                delete A[f]
            }
            try{
                delete b.test
            }catch(o){
                c.support.deleteExpando=false
            }
            a.removeChild(b);
            if(d.attachEvent&&d.fireEvent){
                d.attachEvent("onclick",function k(){
                    c.support.noCloneEvent=
                    false;
                    d.detachEvent("onclick",k)
                });
                d.cloneNode(true).fireEvent("onclick")
            }
            d=s.createElement("div");
            d.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";
            a=s.createDocumentFragment();
            a.appendChild(d.firstChild);
            c.support.checkClone=a.cloneNode(true).cloneNode(true).lastChild.checked;
            c(function(){
                var k=s.createElement("div");
                k.style.width=k.style.paddingLeft="1px";
                s.body.appendChild(k);
                c.boxModel=c.support.boxModel=k.offsetWidth===2;
                s.body.removeChild(k).style.display="none"
            });
            a=function(k){
                var n=
                s.createElement("div");
                k="on"+k;
                var r=k in n;
                if(!r){
                    n.setAttribute(k,"return;");
                    r=typeof n[k]==="function"
                }
                return r
            };

            c.support.submitBubbles=a("submit");
            c.support.changeBubbles=a("change");
            a=b=d=e=j=null
        }
    })();
    c.props={
        "for":"htmlFor",
        "class":"className",
        readonly:"readOnly",
        maxlength:"maxLength",
        cellspacing:"cellSpacing",
        rowspan:"rowSpan",
        colspan:"colSpan",
        tabindex:"tabIndex",
        usemap:"useMap",
        frameborder:"frameBorder"
    };

    var G="jQuery"+J(),Ya=0,za={};

    c.extend({
        cache:{},
        expando:G,
        noData:{
            embed:true,
            object:true,
            applet:true
        },
        data:function(a,b,d){
            if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){
                a=a==A?za:a;
                var f=a[G],e=c.cache;
                if(!f&&typeof b==="string"&&d===w)return null;
                f||(f=++Ya);
                if(typeof b==="object"){
                    a[G]=f;
                    e[f]=c.extend(true,{},b)
                }else if(!e[f]){
                    a[G]=f;
                    e[f]={}
                }
                a=e[f];
                if(d!==w)a[b]=d;
                return typeof b==="string"?a[b]:a
            }
        },
        removeData:function(a,b){
            if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){
                a=a==A?za:a;
                var d=a[G],f=c.cache,e=f[d];
                if(b){
                    if(e){
                        delete e[b];
                        c.isEmptyObject(e)&&c.removeData(a)
                    }
                }
                else{
                    if(c.support.deleteExpando)delete a[c.expando];
                    else a.removeAttribute&&a.removeAttribute(c.expando);
                    delete f[d]
                }
            }
        }
    });
    c.fn.extend({
        data:function(a,b){
            if(typeof a==="undefined"&&this.length)return c.data(this[0]);
            else if(typeof a==="object")return this.each(function(){
                c.data(this,a)
            });
            var d=a.split(".");
            d[1]=d[1]?"."+d[1]:"";
            if(b===w){
                var f=this.triggerHandler("getData"+d[1]+"!",[d[0]]);
                if(f===w&&this.length)f=c.data(this[0],a);
                return f===w&&d[1]?this.data(d[0]):f
            }
            else return this.trigger("setData"+d[1]+"!",[d[0],b]).each(function(){
                c.data(this,
                    a,b)
            })
        },
        removeData:function(a){
            return this.each(function(){
                c.removeData(this,a)
            })
        }
    });
    c.extend({
        queue:function(a,b,d){
            if(a){
                b=(b||"fx")+"queue";
                var f=c.data(a,b);
                if(!d)return f||[];
                if(!f||c.isArray(d))f=c.data(a,b,c.makeArray(d));else f.push(d);
                return f
            }
        },
        dequeue:function(a,b){
            b=b||"fx";
            var d=c.queue(a,b),f=d.shift();
            if(f==="inprogress")f=d.shift();
            if(f){
                b==="fx"&&d.unshift("inprogress");
                f.call(a,function(){
                    c.dequeue(a,b)
                })
            }
        }
    });
    c.fn.extend({
        queue:function(a,b){
            if(typeof a!=="string"){
                b=a;
                a="fx"
            }
            if(b===
                w)return c.queue(this[0],a);
            return this.each(function(){
                var d=c.queue(this,a,b);
                a==="fx"&&d[0]!=="inprogress"&&c.dequeue(this,a)
            })
        },
        dequeue:function(a){
            return this.each(function(){
                c.dequeue(this,a)
            })
        },
        delay:function(a,b){
            a=c.fx?c.fx.speeds[a]||a:a;
            b=b||"fx";
            return this.queue(b,function(){
                var d=this;
                setTimeout(function(){
                    c.dequeue(d,b)
                },a)
            })
        },
        clearQueue:function(a){
            return this.queue(a||"fx",[])
        }
    });
    var Aa=/[\n\t]/g,ca=/\s+/,Za=/\r/g,$a=/href|src|style/,ab=/(button|input)/i,bb=/(button|input|object|select|textarea)/i,
    cb=/^(a|area)$/i,Ba=/radio|checkbox/;
    c.fn.extend({
        attr:function(a,b){
            return X(this,a,b,true,c.attr)
        },
        removeAttr:function(a){
            return this.each(function(){
                c.attr(this,a,"");
                this.nodeType===1&&this.removeAttribute(a)
            })
        },
        addClass:function(a){
            if(c.isFunction(a))return this.each(function(n){
                var r=c(this);
                r.addClass(a.call(this,n,r.attr("class")))
            });
            if(a&&typeof a==="string")for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){
                var e=this[d];
                if(e.nodeType===1)if(e.className){
                    for(var j=" "+e.className+" ",
                        i=e.className,o=0,k=b.length;o<k;o++)if(j.indexOf(" "+b[o]+" ")<0)i+=" "+b[o];e.className=c.trim(i)
                }else e.className=a
            }
            return this
        },
        removeClass:function(a){
            if(c.isFunction(a))return this.each(function(k){
                var n=c(this);
                n.removeClass(a.call(this,k,n.attr("class")))
            });
            if(a&&typeof a==="string"||a===w)for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){
                var e=this[d];
                if(e.nodeType===1&&e.className)if(a){
                    for(var j=(" "+e.className+" ").replace(Aa," "),i=0,o=b.length;i<o;i++)j=j.replace(" "+b[i]+" ",
                        " ");
                    e.className=c.trim(j)
                }else e.className=""
            }
            return this
        },
        toggleClass:function(a,b){
            var d=typeof a,f=typeof b==="boolean";
            if(c.isFunction(a))return this.each(function(e){
                var j=c(this);
                j.toggleClass(a.call(this,e,j.attr("class"),b),b)
            });
            return this.each(function(){
                if(d==="string")for(var e,j=0,i=c(this),o=b,k=a.split(ca);e=k[j++];){
                    o=f?o:!i.hasClass(e);
                    i[o?"addClass":"removeClass"](e)
                }
                else if(d==="undefined"||d==="boolean"){
                    this.className&&c.data(this,"__className__",this.className);
                    this.className=
                    this.className||a===false?"":c.data(this,"__className__")||""
                }
            })
        },
        hasClass:function(a){
            a=" "+a+" ";
            for(var b=0,d=this.length;b<d;b++)if((" "+this[b].className+" ").replace(Aa," ").indexOf(a)>-1)return true;return false
        },
        val:function(a){
            if(a===w){
                var b=this[0];
                if(b){
                    if(c.nodeName(b,"option"))return(b.attributes.value||{}).specified?b.value:b.text;
                    if(c.nodeName(b,"select")){
                        var d=b.selectedIndex,f=[],e=b.options;
                        b=b.type==="select-one";
                        if(d<0)return null;
                        var j=b?d:0;
                        for(d=b?d+1:e.length;j<d;j++){
                            var i=
                            e[j];
                            if(i.selected){
                                a=c(i).val();
                                if(b)return a;
                                f.push(a)
                            }
                        }
                        return f
                    }
                    if(Ba.test(b.type)&&!c.support.checkOn)return b.getAttribute("value")===null?"on":b.value;
                    return(b.value||"").replace(Za,"")
                }
                return w
            }
            var o=c.isFunction(a);
            return this.each(function(k){
                var n=c(this),r=a;
                if(this.nodeType===1){
                    if(o)r=a.call(this,k,n.val());
                    if(typeof r==="number")r+="";
                    if(c.isArray(r)&&Ba.test(this.type))this.checked=c.inArray(n.val(),r)>=0;
                    else if(c.nodeName(this,"select")){
                        var u=c.makeArray(r);
                        c("option",this).each(function(){
                            this.selected=
                            c.inArray(c(this).val(),u)>=0
                        });
                        if(!u.length)this.selectedIndex=-1
                    }
                    else this.value=r
                }
            })
        }
    });
    c.extend({
        attrFn:{
            val:true,
            css:true,
            html:true,
            text:true,
            data:true,
            width:true,
            height:true,
            offset:true
        },
        attr:function(a,b,d,f){
            if(!a||a.nodeType===3||a.nodeType===8)return w;
            if(f&&b in c.attrFn)return c(a)[b](d);
            f=a.nodeType!==1||!c.isXMLDoc(a);
            var e=d!==w;
            b=f&&c.props[b]||b;
            if(a.nodeType===1){
                var j=$a.test(b);
                if(b in a&&f&&!j){
                    if(e){
                        b==="type"&&ab.test(a.nodeName)&&a.parentNode&&c.error("type property can't be changed");
                        a[b]=d
                    }
                    if(c.nodeName(a,"form")&&a.getAttributeNode(b))return a.getAttributeNode(b).nodeValue;
                    if(b==="tabIndex")return(b=a.getAttributeNode("tabIndex"))&&b.specified?b.value:bb.test(a.nodeName)||cb.test(a.nodeName)&&a.href?0:w;
                    return a[b]
                }
                if(!c.support.style&&f&&b==="style"){
                    if(e)a.style.cssText=""+d;
                    return a.style.cssText
                }
                e&&a.setAttribute(b,""+d);
                a=!c.support.hrefNormalized&&f&&j?a.getAttribute(b,2):a.getAttribute(b);
                return a===null?w:a
            }
            return c.style(a,b,d)
        }
    });
    var O=/\.(.*)$/,db=function(a){
        return a.replace(/[^\w\s\.\|`]/g,
            function(b){
                return"\\"+b
            })
    };
    c.event={
        add:function(a,b,d,f){
            if(!(a.nodeType===3||a.nodeType===8)){
                if(a.setInterval&&a!==A&&!a.frameElement)a=A;
                var e,j;
                if(d.handler){
                    e=d;
                    d=e.handler
                }
                if(!d.guid)d.guid=c.guid++;
                if(j=c.data(a)){
                    var i=j.events=j.events||{},o=j.handle;
                    if(!o)j.handle=o=function(){
                        return typeof c!=="undefined"&&!c.event.triggered?c.event.handle.apply(o.elem,arguments):w
                    };
                    o.elem=a;
                    b=b.split(" ");
                    for(var k,n=0,r;k=b[n++];){
                        j=e?c.extend({},e):{
                            handler:d,
                            data:f
                        };
                        if(k.indexOf(".")>-1){
                            r=k.split(".");
                            k=r.shift();
                            j.namespace=r.slice(0).sort().join(".")
                        }else{
                            r=[];
                            j.namespace=""
                        }
                        j.type=k;
                        j.guid=d.guid;
                        var u=i[k],z=c.event.special[k]||{};

                        if(!u){
                            u=i[k]=[];
                            if(!z.setup||z.setup.call(a,f,r,o)===false)if(a.addEventListener)a.addEventListener(k,o,false);else a.attachEvent&&a.attachEvent("on"+k,o)
                        }
                        if(z.add){
                            z.add.call(a,j);
                            if(!j.handler.guid)j.handler.guid=d.guid
                        }
                        u.push(j);
                        c.event.global[k]=true
                    }
                    a=null
                }
            }
        },
        global:{},
        remove:function(a,b,d,f){
            if(!(a.nodeType===3||a.nodeType===8)){
                var e,j=0,i,o,k,n,r,u,z=c.data(a),
                C=z&&z.events;
                if(z&&C){
                    if(b&&b.type){
                        d=b.handler;
                        b=b.type
                    }
                    if(!b||typeof b==="string"&&b.charAt(0)==="."){
                        b=b||"";
                        for(e in C)c.event.remove(a,e+b)
                    }else{
                        for(b=b.split(" ");e=b[j++];){
                            n=e;
                            i=e.indexOf(".")<0;
                            o=[];
                            if(!i){
                                o=e.split(".");
                                e=o.shift();
                                k=new RegExp("(^|\\.)"+c.map(o.slice(0).sort(),db).join("\\.(?:.*\\.)?")+"(\\.|$)")
                            }
                            if(r=C[e])if(d){
                                n=c.event.special[e]||{};

                                for(B=f||0;B<r.length;B++){
                                    u=r[B];
                                    if(d.guid===u.guid){
                                        if(i||k.test(u.namespace)){
                                            f==null&&r.splice(B--,1);
                                            n.remove&&n.remove.call(a,u)
                                        }
                                        if(f!=
                                            null)break
                                    }
                                }
                                if(r.length===0||f!=null&&r.length===1){
                                    if(!n.teardown||n.teardown.call(a,o)===false)Ca(a,e,z.handle);
                                    delete C[e]
                                }
                            }else for(var B=0;B<r.length;B++){
                                u=r[B];
                                if(i||k.test(u.namespace)){
                                    c.event.remove(a,n,u.handler,B);
                                    r.splice(B--,1)
                                }
                            }
                        }
                        if(c.isEmptyObject(C)){
                            if(b=z.handle)b.elem=null;
                            delete z.events;
                            delete z.handle;
                            c.isEmptyObject(z)&&c.removeData(a)
                        }
                    }
                }
            }
        },
        trigger:function(a,b,d,f){
            var e=a.type||a;
            if(!f){
                a=typeof a==="object"?a[G]?a:c.extend(c.Event(e),a):c.Event(e);
                if(e.indexOf("!")>=0){
                    a.type=
                    e=e.slice(0,-1);
                    a.exclusive=true
                }
                if(!d){
                    a.stopPropagation();
                    c.event.global[e]&&c.each(c.cache,function(){
                        this.events&&this.events[e]&&c.event.trigger(a,b,this.handle.elem)
                    })
                }
                if(!d||d.nodeType===3||d.nodeType===8)return w;
                a.result=w;
                a.target=d;
                b=c.makeArray(b);
                b.unshift(a)
            }
            a.currentTarget=d;
            (f=c.data(d,"handle"))&&f.apply(d,b);
            f=d.parentNode||d.ownerDocument;
            try{
                if(!(d&&d.nodeName&&c.noData[d.nodeName.toLowerCase()]))if(d["on"+e]&&d["on"+e].apply(d,b)===false)a.result=false
            }catch(j){}
            if(!a.isPropagationStopped()&&
                f)c.event.trigger(a,b,f,true);
            else if(!a.isDefaultPrevented()){
                f=a.target;
                var i,o=c.nodeName(f,"a")&&e==="click",k=c.event.special[e]||{};

                if((!k._default||k._default.call(d,a)===false)&&!o&&!(f&&f.nodeName&&c.noData[f.nodeName.toLowerCase()])){
                    try{
                        if(f[e]){
                            if(i=f["on"+e])f["on"+e]=null;
                            c.event.triggered=true;
                            f[e]()
                        }
                    }catch(n){}
                    if(i)f["on"+e]=i;
                    c.event.triggered=false
                }
            }
        },
        handle:function(a){
            var b,d,f,e;
            a=arguments[0]=c.event.fix(a||A.event);
            a.currentTarget=this;
            b=a.type.indexOf(".")<0&&!a.exclusive;
            if(!b){
                d=a.type.split(".");
                a.type=d.shift();
                f=new RegExp("(^|\\.)"+d.slice(0).sort().join("\\.(?:.*\\.)?")+"(\\.|$)")
            }
            e=c.data(this,"events");
            d=e[a.type];
            if(e&&d){
                d=d.slice(0);
                e=0;
                for(var j=d.length;e<j;e++){
                    var i=d[e];
                    if(b||f.test(i.namespace)){
                        a.handler=i.handler;
                        a.data=i.data;
                        a.handleObj=i;
                        i=i.handler.apply(this,arguments);
                        if(i!==w){
                            a.result=i;
                            if(i===false){
                                a.preventDefault();
                                a.stopPropagation()
                            }
                        }
                        if(a.isImmediatePropagationStopped())break
                    }
                }
            }
            return a.result
        },
        props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        fix:function(a){
            if(a[G])return a;
            var b=a;
            a=c.Event(b);
            for(var d=this.props.length,f;d;){
                f=this.props[--d];
                a[f]=b[f]
            }
            if(!a.target)a.target=a.srcElement||s;
            if(a.target.nodeType===3)a.target=a.target.parentNode;
            if(!a.relatedTarget&&a.fromElement)a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;
            if(a.pageX==null&&a.clientX!=null){
                b=s.documentElement;
                d=s.body;
                a.pageX=a.clientX+(b&&b.scrollLeft||d&&d.scrollLeft||0)-(b&&b.clientLeft||d&&d.clientLeft||0);
                a.pageY=a.clientY+(b&&b.scrollTop||
                    d&&d.scrollTop||0)-(b&&b.clientTop||d&&d.clientTop||0)
            }
            if(!a.which&&(a.charCode||a.charCode===0?a.charCode:a.keyCode))a.which=a.charCode||a.keyCode;
            if(!a.metaKey&&a.ctrlKey)a.metaKey=a.ctrlKey;
            if(!a.which&&a.button!==w)a.which=a.button&1?1:a.button&2?3:a.button&4?2:0;
            return a
        },
        guid:1E8,
        proxy:c.proxy,
        special:{
            ready:{
                setup:c.bindReady,
                teardown:c.noop
            },
            live:{
                add:function(a){
                    c.event.add(this,a.origType,c.extend({},a,{
                        handler:oa
                    }))
                },
                remove:function(a){
                    var b=true,d=a.origType.replace(O,"");
                    c.each(c.data(this,
                        "events").live||[],function(){
                        if(d===this.origType.replace(O,""))return b=false
                    });
                    b&&c.event.remove(this,a.origType,oa)
                }
            },
            beforeunload:{
                setup:function(a,b,d){
                    if(this.setInterval)this.onbeforeunload=d;
                    return false
                },
                teardown:function(a,b){
                    if(this.onbeforeunload===b)this.onbeforeunload=null
                }
            }
        }
    };

    var Ca=s.removeEventListener?function(a,b,d){
        a.removeEventListener(b,d,false)
    }:function(a,b,d){
        a.detachEvent("on"+b,d)
    };

    c.Event=function(a){
        if(!this.preventDefault)return new c.Event(a);
        if(a&&a.type){
            this.originalEvent=
            a;
            this.type=a.type
        }else this.type=a;
        this.timeStamp=J();
        this[G]=true
    };

    c.Event.prototype={
        preventDefault:function(){
            this.isDefaultPrevented=Z;
            var a=this.originalEvent;
            if(a){
                a.preventDefault&&a.preventDefault();
                a.returnValue=false
            }
        },
        stopPropagation:function(){
            this.isPropagationStopped=Z;
            var a=this.originalEvent;
            if(a){
                a.stopPropagation&&a.stopPropagation();
                a.cancelBubble=true
            }
        },
        stopImmediatePropagation:function(){
            this.isImmediatePropagationStopped=Z;
            this.stopPropagation()
        },
        isDefaultPrevented:Y,
        isPropagationStopped:Y,
        isImmediatePropagationStopped:Y
    };

    var Da=function(a){
        var b=a.relatedTarget;
        try{
            for(;b&&b!==this;)b=b.parentNode;
            if(b!==this){
                a.type=a.data;
                c.event.handle.apply(this,arguments)
            }
        }catch(d){}
    },Ea=function(a){
        a.type=a.data;
        c.event.handle.apply(this,arguments)
    };

    c.each({
        mouseenter:"mouseover",
        mouseleave:"mouseout"
    },function(a,b){
        c.event.special[a]={
            setup:function(d){
                c.event.add(this,b,d&&d.selector?Ea:Da,a)
            },
            teardown:function(d){
                c.event.remove(this,b,d&&d.selector?Ea:Da)
            }
        }
    });
    if(!c.support.submitBubbles)c.event.special.submit=

    {
            setup:function(){
                if(this.nodeName.toLowerCase()!=="form"){
                    c.event.add(this,"click.specialSubmit",function(a){
                        var b=a.target,d=b.type;
                        if((d==="submit"||d==="image")&&c(b).closest("form").length)return na("submit",this,arguments)
                    });
                    c.event.add(this,"keypress.specialSubmit",function(a){
                        var b=a.target,d=b.type;
                        if((d==="text"||d==="password")&&c(b).closest("form").length&&a.keyCode===13)return na("submit",this,arguments)
                    })
                }else return false
            },
            teardown:function(){
                c.event.remove(this,".specialSubmit")
            }
        };
    if(!c.support.changeBubbles){
        var da=/textarea|input|select/i,ea,Fa=function(a){
            var b=a.type,d=a.value;
            if(b==="radio"||b==="checkbox")d=a.checked;
            else if(b==="select-multiple")d=a.selectedIndex>-1?c.map(a.options,function(f){
                return f.selected
            }).join("-"):"";
            else if(a.nodeName.toLowerCase()==="select")d=a.selectedIndex;
            return d
        },fa=function(a,b){
            var d=a.target,f,e;
            if(!(!da.test(d.nodeName)||d.readOnly)){
                f=c.data(d,"_change_data");
                e=Fa(d);
                if(a.type!=="focusout"||d.type!=="radio")c.data(d,"_change_data",
                    e);
                if(!(f===w||e===f))if(f!=null||e){
                    a.type="change";
                    return c.event.trigger(a,b,d)
                }
            }
        };

        c.event.special.change={
            filters:{
                focusout:fa,
                click:function(a){
                    var b=a.target,d=b.type;
                    if(d==="radio"||d==="checkbox"||b.nodeName.toLowerCase()==="select")return fa.call(this,a)
                },
                keydown:function(a){
                    var b=a.target,d=b.type;
                    if(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(d==="checkbox"||d==="radio")||d==="select-multiple")return fa.call(this,a)
                },
                beforeactivate:function(a){
                    a=a.target;
                    c.data(a,
                        "_change_data",Fa(a))
                }
            },
            setup:function(){
                if(this.type==="file")return false;
                for(var a in ea)c.event.add(this,a+".specialChange",ea[a]);return da.test(this.nodeName)
            },
            teardown:function(){
                c.event.remove(this,".specialChange");
                return da.test(this.nodeName)
            }
        };

        ea=c.event.special.change.filters
    }
    s.addEventListener&&c.each({
        focus:"focusin",
        blur:"focusout"
    },function(a,b){
        function d(f){
            f=c.event.fix(f);
            f.type=b;
            return c.event.handle.call(this,f)
        }
        c.event.special[b]={
            setup:function(){
                this.addEventListener(a,
                    d,true)
            },
            teardown:function(){
                this.removeEventListener(a,d,true)
            }
        }
    });
    c.each(["bind","one"],function(a,b){
        c.fn[b]=function(d,f,e){
            if(typeof d==="object"){
                for(var j in d)this[b](j,f,d[j],e);return this
            }
            if(c.isFunction(f)){
                e=f;
                f=w
            }
            var i=b==="one"?c.proxy(e,function(k){
                c(this).unbind(k,i);
                return e.apply(this,arguments)
            }):e;
            if(d==="unload"&&b!=="one")this.one(d,f,e);
            else{
                j=0;
                for(var o=this.length;j<o;j++)c.event.add(this[j],d,i,f)
            }
            return this
        }
    });
    c.fn.extend({
        unbind:function(a,b){
            if(typeof a==="object"&&
                !a.preventDefault)for(var d in a)this.unbind(d,a[d]);else{
                d=0;
                for(var f=this.length;d<f;d++)c.event.remove(this[d],a,b)
            }
            return this
        },
        delegate:function(a,b,d,f){
            return this.live(b,d,f,a)
        },
        undelegate:function(a,b,d){
            return arguments.length===0?this.unbind("live"):this.die(b,null,d,a)
        },
        trigger:function(a,b){
            return this.each(function(){
                c.event.trigger(a,b,this)
            })
        },
        triggerHandler:function(a,b){
            if(this[0]){
                a=c.Event(a);
                a.preventDefault();
                a.stopPropagation();
                c.event.trigger(a,b,this[0]);
                return a.result
            }
        },
        toggle:function(a){
            for(var b=arguments,d=1;d<b.length;)c.proxy(a,b[d++]);
            return this.click(c.proxy(a,function(f){
                var e=(c.data(this,"lastToggle"+a.guid)||0)%d;
                c.data(this,"lastToggle"+a.guid,e+1);
                f.preventDefault();
                return b[e].apply(this,arguments)||false
            }))
        },
        hover:function(a,b){
            return this.mouseenter(a).mouseleave(b||a)
        }
    });
    var Ga={
        focus:"focusin",
        blur:"focusout",
        mouseenter:"mouseover",
        mouseleave:"mouseout"
    };

    c.each(["live","die"],function(a,b){
        c.fn[b]=function(d,f,e,j){
            var i,o=0,k,n,r=j||this.selector,
            u=j?this:c(this.context);
            if(c.isFunction(f)){
                e=f;
                f=w
            }
            for(d=(d||"").split(" ");(i=d[o++])!=null;){
                j=O.exec(i);
                k="";
                if(j){
                    k=j[0];
                    i=i.replace(O,"")
                }
                if(i==="hover")d.push("mouseenter"+k,"mouseleave"+k);
                else{
                    n=i;
                    if(i==="focus"||i==="blur"){
                        d.push(Ga[i]+k);
                        i+=k
                    }else i=(Ga[i]||i)+k;
                    b==="live"?u.each(function(){
                        c.event.add(this,pa(i,r),{
                            data:f,
                            selector:r,
                            handler:e,
                            origType:i,
                            origHandler:e,
                            preType:n
                        })
                    }):u.unbind(pa(i,r),e)
                }
            }
            return this
        }
    });
    c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),
        function(a,b){
            c.fn[b]=function(d){
                return d?this.bind(b,d):this.trigger(b)
            };

            if(c.attrFn)c.attrFn[b]=true
        });
    A.attachEvent&&!A.addEventListener&&A.attachEvent("onunload",function(){
        for(var a in c.cache)if(c.cache[a].handle)try{
            c.event.remove(c.cache[a].handle.elem)
        }catch(b){}
    });
    (function(){
        function a(g){
            for(var h="",l,m=0;g[m];m++){
                l=g[m];
                if(l.nodeType===3||l.nodeType===4)h+=l.nodeValue;
                else if(l.nodeType!==8)h+=a(l.childNodes)
            }
            return h
        }
        function b(g,h,l,m,q,p){
            q=0;
            for(var v=m.length;q<v;q++){
                var t=m[q];
                if(t){
                    t=t[g];
                    for(var y=false;t;){
                        if(t.sizcache===l){
                            y=m[t.sizset];
                            break
                        }
                        if(t.nodeType===1&&!p){
                            t.sizcache=l;
                            t.sizset=q
                        }
                        if(t.nodeName.toLowerCase()===h){
                            y=t;
                            break
                        }
                        t=t[g]
                    }
                    m[q]=y
                }
            }
        }
        function d(g,h,l,m,q,p){
            q=0;
            for(var v=m.length;q<v;q++){
                var t=m[q];
                if(t){
                    t=t[g];
                    for(var y=false;t;){
                        if(t.sizcache===l){
                            y=m[t.sizset];
                            break
                        }
                        if(t.nodeType===1){
                            if(!p){
                                t.sizcache=l;
                                t.sizset=q
                            }
                            if(typeof h!=="string"){
                                if(t===h){
                                    y=true;
                                    break
                                }
                            }else if(k.filter(h,[t]).length>0){
                                y=t;
                                break
                            }
                        }
                        t=t[g]
                    }
                    m[q]=y
                }
            }
        }
        var f=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
        e=0,j=Object.prototype.toString,i=false,o=true;
        [0,0].sort(function(){
            o=false;
            return 0
        });
        var k=function(g,h,l,m){
            l=l||[];
            var q=h=h||s;
            if(h.nodeType!==1&&h.nodeType!==9)return[];
            if(!g||typeof g!=="string")return l;
            for(var p=[],v,t,y,S,H=true,M=x(h),I=g;(f.exec(""),v=f.exec(I))!==null;){
                I=v[3];
                p.push(v[1]);
                if(v[2]){
                    S=v[3];
                    break
                }
            }
            if(p.length>1&&r.exec(g))if(p.length===2&&n.relative[p[0]])t=ga(p[0]+p[1],h);else for(t=n.relative[p[0]]?[h]:k(p.shift(),h);p.length;){
                g=p.shift();
                if(n.relative[g])g+=p.shift();
                t=ga(g,t)
            }else{
                if(!m&&p.length>1&&h.nodeType===9&&!M&&n.match.ID.test(p[0])&&!n.match.ID.test(p[p.length-1])){
                    v=k.find(p.shift(),h,M);
                    h=v.expr?k.filter(v.expr,v.set)[0]:v.set[0]
                }
                if(h){
                    v=m?{
                        expr:p.pop(),
                        set:z(m)
                    }:k.find(p.pop(),p.length===1&&(p[0]==="~"||p[0]==="+")&&h.parentNode?h.parentNode:h,M);
                    t=v.expr?k.filter(v.expr,v.set):v.set;
                    if(p.length>0)y=z(t);else H=false;
                    for(;p.length;){
                        var D=p.pop();
                        v=D;
                        if(n.relative[D])v=p.pop();else D="";
                        if(v==null)v=h;
                        n.relative[D](y,v,M)
                    }
                }else y=[]
            }
            y||(y=t);
            y||k.error(D||
                g);
            if(j.call(y)==="[object Array]")if(H)if(h&&h.nodeType===1)for(g=0;y[g]!=null;g++){
                if(y[g]&&(y[g]===true||y[g].nodeType===1&&E(h,y[g])))l.push(t[g])
            }
            else for(g=0;y[g]!=null;g++)y[g]&&y[g].nodeType===1&&l.push(t[g]);else l.push.apply(l,y);else z(y,l);
            if(S){
                k(S,q,l,m);
                k.uniqueSort(l)
            }
            return l
        };

        k.uniqueSort=function(g){
            if(B){
                i=o;
                g.sort(B);
                if(i)for(var h=1;h<g.length;h++)g[h]===g[h-1]&&g.splice(h--,1)
            }
            return g
        };

        k.matches=function(g,h){
            return k(g,null,null,h)
        };

        k.find=function(g,h,l){
            var m,q;
            if(!g)return[];
            for(var p=0,v=n.order.length;p<v;p++){
                var t=n.order[p];
                if(q=n.leftMatch[t].exec(g)){
                    var y=q[1];
                    q.splice(1,1);
                    if(y.substr(y.length-1)!=="\\"){
                        q[1]=(q[1]||"").replace(/\\/g,"");
                        m=n.find[t](q,h,l);
                        if(m!=null){
                            g=g.replace(n.match[t],"");
                            break
                        }
                    }
                }
            }
            m||(m=h.getElementsByTagName("*"));
            return{
                set:m,
                expr:g
            }
        };

        k.filter=function(g,h,l,m){
            for(var q=g,p=[],v=h,t,y,S=h&&h[0]&&x(h[0]);g&&h.length;){
                for(var H in n.filter)if((t=n.leftMatch[H].exec(g))!=null&&t[2]){
                    var M=n.filter[H],I,D;
                    D=t[1];
                    y=false;
                    t.splice(1,1);
                    if(D.substr(D.length-
                        1)!=="\\"){
                        if(v===p)p=[];
                        if(n.preFilter[H])if(t=n.preFilter[H](t,v,l,p,m,S)){
                            if(t===true)continue
                        }else y=I=true;
                        if(t)for(var U=0;(D=v[U])!=null;U++)if(D){
                            I=M(D,t,U,v);
                            var Ha=m^!!I;
                            if(l&&I!=null)if(Ha)y=true;else v[U]=false;
                            else if(Ha){
                                p.push(D);
                                y=true
                            }
                        }
                        if(I!==w){
                            l||(v=p);
                            g=g.replace(n.match[H],"");
                            if(!y)return[];
                            break
                        }
                    }
                }
                if(g===q)if(y==null)k.error(g);else break;
                q=g
            }
            return v
        };

        k.error=function(g){
            throw"Syntax error, unrecognized expression: "+g;
        };

        var n=k.selectors={
            order:["ID","NAME","TAG"],
            match:{
                ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
                CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
                NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,
                ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
                TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,
                CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,
                POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,
                PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch:{},
            attrMap:{
                "class":"className",
                "for":"htmlFor"
            },
            attrHandle:{
                href:function(g){
                    return g.getAttribute("href")
                }
            },
            relative:{
                "+":function(g,h){
                    var l=typeof h==="string",m=l&&!/\W/.test(h);
                    l=l&&!m;
                    if(m)h=h.toLowerCase();
                    m=0;
                    for(var q=g.length,p;m<q;m++)if(p=g[m]){
                        for(;(p=p.previousSibling)&&p.nodeType!==1;);
                        g[m]=l||p&&p.nodeName.toLowerCase()===h?p||false:p===h
                    }
                    l&&k.filter(h,g,true)
                },
                ">":function(g,h){
                    var l=typeof h==="string";
                    if(l&&!/\W/.test(h)){
                        h=h.toLowerCase();
                        for(var m=0,q=g.length;m<q;m++){
                            var p=g[m];
                            if(p){
                                l=p.parentNode;
                                g[m]=l.nodeName.toLowerCase()===h?l:false
                            }
                        }
                    }else{
                        m=0;
                        for(q=g.length;m<q;m++)if(p=g[m])g[m]=
                            l?p.parentNode:p.parentNode===h;l&&k.filter(h,g,true)
                    }
                },
                "":function(g,h,l){
                    var m=e++,q=d;
                    if(typeof h==="string"&&!/\W/.test(h)){
                        var p=h=h.toLowerCase();
                        q=b
                    }
                    q("parentNode",h,m,g,p,l)
                },
                "~":function(g,h,l){
                    var m=e++,q=d;
                    if(typeof h==="string"&&!/\W/.test(h)){
                        var p=h=h.toLowerCase();
                        q=b
                    }
                    q("previousSibling",h,m,g,p,l)
                }
            },
            find:{
                ID:function(g,h,l){
                    if(typeof h.getElementById!=="undefined"&&!l)return(g=h.getElementById(g[1]))?[g]:[]
                },
                NAME:function(g,h){
                    if(typeof h.getElementsByName!=="undefined"){
                        var l=[];
                        h=h.getElementsByName(g[1]);
                        for(var m=0,q=h.length;m<q;m++)h[m].getAttribute("name")===g[1]&&l.push(h[m]);
                        return l.length===0?null:l
                    }
                },
                TAG:function(g,h){
                    return h.getElementsByTagName(g[1])
                }
            },
            preFilter:{
                CLASS:function(g,h,l,m,q,p){
                    g=" "+g[1].replace(/\\/g,"")+" ";
                    if(p)return g;
                    p=0;
                    for(var v;(v=h[p])!=null;p++)if(v)if(q^(v.className&&(" "+v.className+" ").replace(/[\t\n]/g," ").indexOf(g)>=0))l||m.push(v);
                        else if(l)h[p]=false;return false
                },
                ID:function(g){
                    return g[1].replace(/\\/g,"")
                },
                TAG:function(g){
                    return g[1].toLowerCase()
                },
                CHILD:function(g){
                    if(g[1]==="nth"){
                        var h=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(g[2]==="even"&&"2n"||g[2]==="odd"&&"2n+1"||!/\D/.test(g[2])&&"0n+"+g[2]||g[2]);
                        g[2]=h[1]+(h[2]||1)-0;
                        g[3]=h[3]-0
                    }
                    g[0]=e++;
                    return g
                },
                ATTR:function(g,h,l,m,q,p){
                    h=g[1].replace(/\\/g,"");
                    if(!p&&n.attrMap[h])g[1]=n.attrMap[h];
                    if(g[2]==="~=")g[4]=" "+g[4]+" ";
                    return g
                },
                PSEUDO:function(g,h,l,m,q){
                    if(g[1]==="not")if((f.exec(g[3])||"").length>1||/^\w/.test(g[3]))g[3]=k(g[3],null,null,h);
                        else{
                            g=k.filter(g[3],h,l,true^q);
                            l||m.push.apply(m,
                                g);
                            return false
                        }else if(n.match.POS.test(g[0])||n.match.CHILD.test(g[0]))return true;
                    return g
                },
                POS:function(g){
                    g.unshift(true);
                    return g
                }
            },
            filters:{
                enabled:function(g){
                    return g.disabled===false&&g.type!=="hidden"
                },
                disabled:function(g){
                    return g.disabled===true
                },
                checked:function(g){
                    return g.checked===true
                },
                selected:function(g){
                    return g.selected===true
                },
                parent:function(g){
                    return!!g.firstChild
                },
                empty:function(g){
                    return!g.firstChild
                },
                has:function(g,h,l){
                    return!!k(l[3],g).length
                },
                header:function(g){
                    return/h\d/i.test(g.nodeName)
                },
                text:function(g){
                    return"text"===g.type
                },
                radio:function(g){
                    return"radio"===g.type
                },
                checkbox:function(g){
                    return"checkbox"===g.type
                },
                file:function(g){
                    return"file"===g.type
                },
                password:function(g){
                    return"password"===g.type
                },
                submit:function(g){
                    return"submit"===g.type
                },
                image:function(g){
                    return"image"===g.type
                },
                reset:function(g){
                    return"reset"===g.type
                },
                button:function(g){
                    return"button"===g.type||g.nodeName.toLowerCase()==="button"
                },
                input:function(g){
                    return/input|select|textarea|button/i.test(g.nodeName)
                }
            },
            setFilters:{
                first:function(g,h){
                    return h===0
                },
                last:function(g,h,l,m){
                    return h===m.length-1
                },
                even:function(g,h){
                    return h%2===0
                },
                odd:function(g,h){
                    return h%2===1
                },
                lt:function(g,h,l){
                    return h<l[3]-0
                },
                gt:function(g,h,l){
                    return h>l[3]-0
                },
                nth:function(g,h,l){
                    return l[3]-0===h
                },
                eq:function(g,h,l){
                    return l[3]-0===h
                }
            },
            filter:{
                PSEUDO:function(g,h,l,m){
                    var q=h[1],p=n.filters[q];
                    if(p)return p(g,l,h,m);
                    else if(q==="contains")return(g.textContent||g.innerText||a([g])||"").indexOf(h[3])>=0;
                    else if(q==="not"){
                        h=
                        h[3];
                        l=0;
                        for(m=h.length;l<m;l++)if(h[l]===g)return false;return true
                    }else k.error("Syntax error, unrecognized expression: "+q)
                },
                CHILD:function(g,h){
                    var l=h[1],m=g;
                    switch(l){
                        case "only":case "first":
                            for(;m=m.previousSibling;)if(m.nodeType===1)return false;if(l==="first")return true;
                            m=g;
                        case "last":
                            for(;m=m.nextSibling;)if(m.nodeType===1)return false;return true;
                        case "nth":
                            l=h[2];
                            var q=h[3];
                            if(l===1&&q===0)return true;
                            h=h[0];
                            var p=g.parentNode;
                            if(p&&(p.sizcache!==h||!g.nodeIndex)){
                                var v=0;
                                for(m=p.firstChild;m;m=
                                    m.nextSibling)if(m.nodeType===1)m.nodeIndex=++v;p.sizcache=h
                            }
                            g=g.nodeIndex-q;
                            return l===0?g===0:g%l===0&&g/l>=0
                    }
                },
                ID:function(g,h){
                    return g.nodeType===1&&g.getAttribute("id")===h
                },
                TAG:function(g,h){
                    return h==="*"&&g.nodeType===1||g.nodeName.toLowerCase()===h
                },
                CLASS:function(g,h){
                    return(" "+(g.className||g.getAttribute("class"))+" ").indexOf(h)>-1
                },
                ATTR:function(g,h){
                    var l=h[1];
                    g=n.attrHandle[l]?n.attrHandle[l](g):g[l]!=null?g[l]:g.getAttribute(l);
                    l=g+"";
                    var m=h[2];
                    h=h[4];
                    return g==null?m==="!=":m===
                    "="?l===h:m==="*="?l.indexOf(h)>=0:m==="~="?(" "+l+" ").indexOf(h)>=0:!h?l&&g!==false:m==="!="?l!==h:m==="^="?l.indexOf(h)===0:m==="$="?l.substr(l.length-h.length)===h:m==="|="?l===h||l.substr(0,h.length+1)===h+"-":false
                },
                POS:function(g,h,l,m){
                    var q=n.setFilters[h[2]];
                    if(q)return q(g,l,h,m)
                }
            }
        },r=n.match.POS;
        for(var u in n.match){
            n.match[u]=new RegExp(n.match[u].source+/(?![^\[]*\])(?![^\(]*\))/.source);
            n.leftMatch[u]=new RegExp(/(^(?:.|\r|\n)*?)/.source+n.match[u].source.replace(/\\(\d+)/g,function(g,
                h){
                return"\\"+(h-0+1)
            }))
        }
        var z=function(g,h){
            g=Array.prototype.slice.call(g,0);
            if(h){
                h.push.apply(h,g);
                return h
            }
            return g
        };

        try{
            Array.prototype.slice.call(s.documentElement.childNodes,0)
        }catch(C){
            z=function(g,h){
                h=h||[];
                if(j.call(g)==="[object Array]")Array.prototype.push.apply(h,g);
                else if(typeof g.length==="number")for(var l=0,m=g.length;l<m;l++)h.push(g[l]);else for(l=0;g[l];l++)h.push(g[l]);
                return h
            }
        }
        var B;
        if(s.documentElement.compareDocumentPosition)B=function(g,h){
            if(!g.compareDocumentPosition||
                !h.compareDocumentPosition){
                if(g==h)i=true;
                return g.compareDocumentPosition?-1:1
            }
            g=g.compareDocumentPosition(h)&4?-1:g===h?0:1;
            if(g===0)i=true;
            return g
        };
        else if("sourceIndex"in s.documentElement)B=function(g,h){
            if(!g.sourceIndex||!h.sourceIndex){
                if(g==h)i=true;
                return g.sourceIndex?-1:1
            }
            g=g.sourceIndex-h.sourceIndex;
            if(g===0)i=true;
            return g
        };
        else if(s.createRange)B=function(g,h){
            if(!g.ownerDocument||!h.ownerDocument){
                if(g==h)i=true;
                return g.ownerDocument?-1:1
            }
            var l=g.ownerDocument.createRange(),m=
            h.ownerDocument.createRange();
            l.setStart(g,0);
            l.setEnd(g,0);
            m.setStart(h,0);
            m.setEnd(h,0);
            g=l.compareBoundaryPoints(Range.START_TO_END,m);
            if(g===0)i=true;
            return g
        };
        (function(){
            var g=s.createElement("div"),h="script"+(new Date).getTime();
            g.innerHTML="<a name='"+h+"'/>";
            var l=s.documentElement;
            l.insertBefore(g,l.firstChild);
            if(s.getElementById(h)){
                n.find.ID=function(m,q,p){
                    if(typeof q.getElementById!=="undefined"&&!p)return(q=q.getElementById(m[1]))?q.id===m[1]||typeof q.getAttributeNode!=="undefined"&&
                        q.getAttributeNode("id").nodeValue===m[1]?[q]:w:[]
                };

                n.filter.ID=function(m,q){
                    var p=typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id");
                    return m.nodeType===1&&p&&p.nodeValue===q
                }
            }
            l.removeChild(g);
            l=g=null
        })();
        (function(){
            var g=s.createElement("div");
            g.appendChild(s.createComment(""));
            if(g.getElementsByTagName("*").length>0)n.find.TAG=function(h,l){
                l=l.getElementsByTagName(h[1]);
                if(h[1]==="*"){
                    h=[];
                    for(var m=0;l[m];m++)l[m].nodeType===1&&h.push(l[m]);
                    l=h
                }
                return l
            };

            g.innerHTML="<a href='#'></a>";
            if(g.firstChild&&typeof g.firstChild.getAttribute!=="undefined"&&g.firstChild.getAttribute("href")!=="#")n.attrHandle.href=function(h){
                return h.getAttribute("href",2)
            };

            g=null
        })();
        s.querySelectorAll&&function(){
            var g=k,h=s.createElement("div");
            h.innerHTML="<p class='TEST'></p>";
            if(!(h.querySelectorAll&&h.querySelectorAll(".TEST").length===0)){
                k=function(m,q,p,v){
                    q=q||s;
                    if(!v&&q.nodeType===9&&!x(q))try{
                        return z(q.querySelectorAll(m),p)
                    }
                    catch(t){}
                    return g(m,q,p,v)
                };

                for(var l in g)k[l]=g[l];h=null
            }
        }();
        (function(){
            var g=s.createElement("div");
            g.innerHTML="<div class='test e'></div><div class='test'></div>";
            if(!(!g.getElementsByClassName||g.getElementsByClassName("e").length===0)){
                g.lastChild.className="e";
                if(g.getElementsByClassName("e").length!==1){
                    n.order.splice(1,0,"CLASS");
                    n.find.CLASS=function(h,l,m){
                        if(typeof l.getElementsByClassName!=="undefined"&&!m)return l.getElementsByClassName(h[1])
                    };

                    g=null
                }
            }
        })();
        var E=s.compareDocumentPosition?function(g,h){
            return!!(g.compareDocumentPosition(h)&16)
        }:
        function(g,h){
            return g!==h&&(g.contains?g.contains(h):true)
        },x=function(g){
            return(g=(g?g.ownerDocument||g:0).documentElement)?g.nodeName!=="HTML":false
        },ga=function(g,h){
            var l=[],m="",q;
            for(h=h.nodeType?[h]:h;q=n.match.PSEUDO.exec(g);){
                m+=q[0];
                g=g.replace(n.match.PSEUDO,"")
            }
            g=n.relative[g]?g+"*":g;
            q=0;
            for(var p=h.length;q<p;q++)k(g,h[q],l);
            return k.filter(m,l)
        };

        c.find=k;
        c.expr=k.selectors;
        c.expr[":"]=c.expr.filters;
        c.unique=k.uniqueSort;
        c.text=a;
        c.isXMLDoc=x;
        c.contains=E
    })();
    var eb=/Until$/,fb=/^(?:parents|prevUntil|prevAll)/,
    gb=/,/;
    R=Array.prototype.slice;
    var Ia=function(a,b,d){
        if(c.isFunction(b))return c.grep(a,function(e,j){
            return!!b.call(e,j,e)===d
        });
        else if(b.nodeType)return c.grep(a,function(e){
            return e===b===d
        });
        else if(typeof b==="string"){
            var f=c.grep(a,function(e){
                return e.nodeType===1
            });
            if(Ua.test(b))return c.filter(b,f,!d);else b=c.filter(b,f)
        }
        return c.grep(a,function(e){
            return c.inArray(e,b)>=0===d
        })
    };

    c.fn.extend({
        find:function(a){
            for(var b=this.pushStack("","find",a),d=0,f=0,e=this.length;f<e;f++){
                d=b.length;
                c.find(a,this[f],b);
                if(f>0)for(var j=d;j<b.length;j++)for(var i=0;i<d;i++)if(b[i]===b[j]){
                    b.splice(j--,1);
                    break
                }
            }
            return b
        },
        has:function(a){
            var b=c(a);
            return this.filter(function(){
                for(var d=0,f=b.length;d<f;d++)if(c.contains(this,b[d]))return true
            })
        },
        not:function(a){
            return this.pushStack(Ia(this,a,false),"not",a)
        },
        filter:function(a){
            return this.pushStack(Ia(this,a,true),"filter",a)
        },
        is:function(a){
            return!!a&&c.filter(a,this).length>0
        },
        closest:function(a,b){
            if(c.isArray(a)){
                var d=[],f=this[0],e,j=

                {},i;
                if(f&&a.length){
                    e=0;
                    for(var o=a.length;e<o;e++){
                        i=a[e];
                        j[i]||(j[i]=c.expr.match.POS.test(i)?c(i,b||this.context):i)
                    }
                    for(;f&&f.ownerDocument&&f!==b;){
                        for(i in j){
                            e=j[i];
                            if(e.jquery?e.index(f)>-1:c(f).is(e)){
                                d.push({
                                    selector:i,
                                    elem:f
                                });
                                delete j[i]
                            }
                        }
                        f=f.parentNode
                    }
                }
                return d
            }
            var k=c.expr.match.POS.test(a)?c(a,b||this.context):null;
            return this.map(function(n,r){
                for(;r&&r.ownerDocument&&r!==b;){
                    if(k?k.index(r)>-1:c(r).is(a))return r;
                    r=r.parentNode
                }
                return null
            })
        },
        index:function(a){
            if(!a||typeof a===
                "string")return c.inArray(this[0],a?c(a):this.parent().children());
            return c.inArray(a.jquery?a[0]:a,this)
        },
        add:function(a,b){
            a=typeof a==="string"?c(a,b||this.context):c.makeArray(a);
            b=c.merge(this.get(),a);
            return this.pushStack(qa(a[0])||qa(b[0])?b:c.unique(b))
        },
        andSelf:function(){
            return this.add(this.prevObject)
        }
    });
    c.each({
        parent:function(a){
            return(a=a.parentNode)&&a.nodeType!==11?a:null
        },
        parents:function(a){
            return c.dir(a,"parentNode")
        },
        parentsUntil:function(a,b,d){
            return c.dir(a,"parentNode",
                d)
        },
        next:function(a){
            return c.nth(a,2,"nextSibling")
        },
        prev:function(a){
            return c.nth(a,2,"previousSibling")
        },
        nextAll:function(a){
            return c.dir(a,"nextSibling")
        },
        prevAll:function(a){
            return c.dir(a,"previousSibling")
        },
        nextUntil:function(a,b,d){
            return c.dir(a,"nextSibling",d)
        },
        prevUntil:function(a,b,d){
            return c.dir(a,"previousSibling",d)
        },
        siblings:function(a){
            return c.sibling(a.parentNode.firstChild,a)
        },
        children:function(a){
            return c.sibling(a.firstChild)
        },
        contents:function(a){
            return c.nodeName(a,"iframe")?
            a.contentDocument||a.contentWindow.document:c.makeArray(a.childNodes)
        }
    },function(a,b){
        c.fn[a]=function(d,f){
            var e=c.map(this,b,d);
            eb.test(a)||(f=d);
            if(f&&typeof f==="string")e=c.filter(f,e);
            e=this.length>1?c.unique(e):e;
            if((this.length>1||gb.test(f))&&fb.test(a))e=e.reverse();
            return this.pushStack(e,a,R.call(arguments).join(","))
        }
    });
    c.extend({
        filter:function(a,b,d){
            if(d)a=":not("+a+")";
            return c.find.matches(a,b)
        },
        dir:function(a,b,d){
            var f=[];
            for(a=a[b];a&&a.nodeType!==9&&(d===w||a.nodeType!==1||!c(a).is(d));){
                a.nodeType===
                1&&f.push(a);
                a=a[b]
            }
            return f
        },
        nth:function(a,b,d){
            b=b||1;
            for(var f=0;a;a=a[d])if(a.nodeType===1&&++f===b)break;return a
        },
        sibling:function(a,b){
            for(var d=[];a;a=a.nextSibling)a.nodeType===1&&a!==b&&d.push(a);
            return d
        }
    });
    var Ja=/ jQuery\d+="(?:\d+|null)"/g,V=/^\s+/,Ka=/(<([\w:]+)[^>]*?)\/>/g,hb=/^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,La=/<([\w:]+)/,ib=/<tbody/i,jb=/<|&#?\w+;/,ta=/<script|<object|<embed|<option|<style/i,ua=/checked\s*(?:[^=]|=\s*.checked.)/i,Ma=function(a,b,d){
        return hb.test(d)?
        a:b+"></"+d+">"
    },F={
        option:[1,"<select multiple='multiple'>","</select>"],
        legend:[1,"<fieldset>","</fieldset>"],
        thead:[1,"<table>","</table>"],
        tr:[2,"<table><tbody>","</tbody></table>"],
        td:[3,"<table><tbody><tr>","</tr></tbody></table>"],
        col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],
        area:[1,"<map>","</map>"],
        _default:[0,"",""]
    };

    F.optgroup=F.option;
    F.tbody=F.tfoot=F.colgroup=F.caption=F.thead;
    F.th=F.td;
    if(!c.support.htmlSerialize)F._default=[1,"div<div>","</div>"];
    c.fn.extend({
        text:function(a){
            if(c.isFunction(a))return this.each(function(b){
                var d=
                c(this);
                d.text(a.call(this,b,d.text()))
            });
            if(typeof a!=="object"&&a!==w)return this.empty().append((this[0]&&this[0].ownerDocument||s).createTextNode(a));
            return c.text(this)
        },
        wrapAll:function(a){
            if(c.isFunction(a))return this.each(function(d){
                c(this).wrapAll(a.call(this,d))
            });
            if(this[0]){
                var b=c(a,this[0].ownerDocument).eq(0).clone(true);
                this[0].parentNode&&b.insertBefore(this[0]);
                b.map(function(){
                    for(var d=this;d.firstChild&&d.firstChild.nodeType===1;)d=d.firstChild;
                    return d
                }).append(this)
            }
            return this
        },
        wrapInner:function(a){
            if(c.isFunction(a))return this.each(function(b){
                c(this).wrapInner(a.call(this,b))
            });
            return this.each(function(){
                var b=c(this),d=b.contents();
                d.length?d.wrapAll(a):b.append(a)
            })
        },
        wrap:function(a){
            return this.each(function(){
                c(this).wrapAll(a)
            })
        },
        unwrap:function(){
            return this.parent().each(function(){
                c.nodeName(this,"body")||c(this).replaceWith(this.childNodes)
            }).end()
        },
        append:function(){
            return this.domManip(arguments,true,function(a){
                this.nodeType===1&&this.appendChild(a)
            })
        },
        prepend:function(){
            return this.domManip(arguments,true,function(a){
                this.nodeType===1&&this.insertBefore(a,this.firstChild)
            })
        },
        before:function(){
            if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){
                this.parentNode.insertBefore(b,this)
            });
            else if(arguments.length){
                var a=c(arguments[0]);
                a.push.apply(a,this.toArray());
                return this.pushStack(a,"before",arguments)
            }
        },
        after:function(){
            if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){
                this.parentNode.insertBefore(b,
                    this.nextSibling)
            });
            else if(arguments.length){
                var a=this.pushStack(this,"after",arguments);
                a.push.apply(a,c(arguments[0]).toArray());
                return a
            }
        },
        remove:function(a,b){
            for(var d=0,f;(f=this[d])!=null;d++)if(!a||c.filter(a,[f]).length){
                if(!b&&f.nodeType===1){
                    c.cleanData(f.getElementsByTagName("*"));
                    c.cleanData([f])
                }
                f.parentNode&&f.parentNode.removeChild(f)
            }
            return this
        },
        empty:function(){
            for(var a=0,b;(b=this[a])!=null;a++)for(b.nodeType===1&&c.cleanData(b.getElementsByTagName("*"));b.firstChild;)b.removeChild(b.firstChild);
            return this
        },
        clone:function(a){
            var b=this.map(function(){
                if(!c.support.noCloneEvent&&!c.isXMLDoc(this)){
                    var d=this.outerHTML,f=this.ownerDocument;
                    if(!d){
                        d=f.createElement("div");
                        d.appendChild(this.cloneNode(true));
                        d=d.innerHTML
                    }
                    return c.clean([d.replace(Ja,"").replace(/=([^="'>\s]+\/)>/g,'="$1">').replace(V,"")],f)[0]
                }else return this.cloneNode(true)
            });
            if(a===true){
                ra(this,b);
                ra(this.find("*"),b.find("*"))
            }
            return b
        },
        html:function(a){
            if(a===w)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(Ja,
                ""):null;
            else if(typeof a==="string"&&!ta.test(a)&&(c.support.leadingWhitespace||!V.test(a))&&!F[(La.exec(a)||["",""])[1].toLowerCase()]){
                a=a.replace(Ka,Ma);
                try{
                    for(var b=0,d=this.length;b<d;b++)if(this[b].nodeType===1){
                        c.cleanData(this[b].getElementsByTagName("*"));
                        this[b].innerHTML=a
                    }
                }catch(f){
                    this.empty().append(a)
                }
            }else c.isFunction(a)?this.each(function(e){
                var j=c(this),i=j.html();
                j.empty().append(function(){
                    return a.call(this,e,i)
                })
            }):this.empty().append(a);
            return this
        },
        replaceWith:function(a){
            if(this[0]&&
                this[0].parentNode){
                if(c.isFunction(a))return this.each(function(b){
                    var d=c(this),f=d.html();
                    d.replaceWith(a.call(this,b,f))
                });
                if(typeof a!=="string")a=c(a).detach();
                return this.each(function(){
                    var b=this.nextSibling,d=this.parentNode;
                    c(this).remove();
                    b?c(b).before(a):c(d).append(a)
                })
            }else return this.pushStack(c(c.isFunction(a)?a():a),"replaceWith",a)
        },
        detach:function(a){
            return this.remove(a,true)
        },
        domManip:function(a,b,d){
            function f(u){
                return c.nodeName(u,"table")?u.getElementsByTagName("tbody")[0]||
                u.appendChild(u.ownerDocument.createElement("tbody")):u
            }
            var e,j,i=a[0],o=[],k;
            if(!c.support.checkClone&&arguments.length===3&&typeof i==="string"&&ua.test(i))return this.each(function(){
                c(this).domManip(a,b,d,true)
            });
            if(c.isFunction(i))return this.each(function(u){
                var z=c(this);
                a[0]=i.call(this,u,b?z.html():w);
                z.domManip(a,b,d)
            });
            if(this[0]){
                e=i&&i.parentNode;
                e=c.support.parentNode&&e&&e.nodeType===11&&e.childNodes.length===this.length?{
                    fragment:e
                }:sa(a,this,o);
                k=e.fragment;
                if(j=k.childNodes.length===
                    1?(k=k.firstChild):k.firstChild){
                    b=b&&c.nodeName(j,"tr");
                    for(var n=0,r=this.length;n<r;n++)d.call(b?f(this[n],j):this[n],n>0||e.cacheable||this.length>1?k.cloneNode(true):k)
                }
                o.length&&c.each(o,Qa)
            }
            return this
        }
    });
    c.fragments={};

    c.each({
        appendTo:"append",
        prependTo:"prepend",
        insertBefore:"before",
        insertAfter:"after",
        replaceAll:"replaceWith"
    },function(a,b){
        c.fn[a]=function(d){
            var f=[];
            d=c(d);
            var e=this.length===1&&this[0].parentNode;
            if(e&&e.nodeType===11&&e.childNodes.length===1&&d.length===1){
                d[b](this[0]);
                return this
            }else{
                e=0;
                for(var j=d.length;e<j;e++){
                    var i=(e>0?this.clone(true):this).get();
                    c.fn[b].apply(c(d[e]),i);
                    f=f.concat(i)
                }
                return this.pushStack(f,a,d.selector)
            }
        }
    });
    c.extend({
        clean:function(a,b,d,f){
            b=b||s;
            if(typeof b.createElement==="undefined")b=b.ownerDocument||b[0]&&b[0].ownerDocument||s;
            for(var e=[],j=0,i;(i=a[j])!=null;j++){
                if(typeof i==="number")i+="";
                if(i){
                    if(typeof i==="string"&&!jb.test(i))i=b.createTextNode(i);
                    else if(typeof i==="string"){
                        i=i.replace(Ka,Ma);
                        var o=(La.exec(i)||["",
                            ""])[1].toLowerCase(),k=F[o]||F._default,n=k[0],r=b.createElement("div");
                        for(r.innerHTML=k[1]+i+k[2];n--;)r=r.lastChild;
                        if(!c.support.tbody){
                            n=ib.test(i);
                            o=o==="table"&&!n?r.firstChild&&r.firstChild.childNodes:k[1]==="<table>"&&!n?r.childNodes:[];
                            for(k=o.length-1;k>=0;--k)c.nodeName(o[k],"tbody")&&!o[k].childNodes.length&&o[k].parentNode.removeChild(o[k])
                        }!c.support.leadingWhitespace&&V.test(i)&&r.insertBefore(b.createTextNode(V.exec(i)[0]),r.firstChild);
                        i=r.childNodes
                    }
                    if(i.nodeType)e.push(i);else e=
                        c.merge(e,i)
                }
            }
            if(d)for(j=0;e[j];j++)if(f&&c.nodeName(e[j],"script")&&(!e[j].type||e[j].type.toLowerCase()==="text/javascript"))f.push(e[j].parentNode?e[j].parentNode.removeChild(e[j]):e[j]);
                else{
                    e[j].nodeType===1&&e.splice.apply(e,[j+1,0].concat(c.makeArray(e[j].getElementsByTagName("script"))));
                    d.appendChild(e[j])
                }
            return e
        },
        cleanData:function(a){
            for(var b,d,f=c.cache,e=c.event.special,j=c.support.deleteExpando,i=0,o;(o=a[i])!=null;i++)if(d=o[c.expando]){
                b=f[d];
                if(b.events)for(var k in b.events)e[k]?
                    c.event.remove(o,k):Ca(o,k,b.handle);if(j)delete o[c.expando];else o.removeAttribute&&o.removeAttribute(c.expando);
                delete f[d]
            }
        }
    });
    var kb=/z-?index|font-?weight|opacity|zoom|line-?height/i,Na=/alpha\([^)]*\)/,Oa=/opacity=([^)]*)/,ha=/float/i,ia=/-([a-z])/ig,lb=/([A-Z])/g,mb=/^-?\d+(?:px)?$/i,nb=/^-?\d/,ob={
        position:"absolute",
        visibility:"hidden",
        display:"block"
    },pb=["Left","Right"],qb=["Top","Bottom"],rb=s.defaultView&&s.defaultView.getComputedStyle,Pa=c.support.cssFloat?"cssFloat":"styleFloat",ja=
    function(a,b){
        return b.toUpperCase()
    };

    c.fn.css=function(a,b){
        return X(this,a,b,true,function(d,f,e){
            if(e===w)return c.curCSS(d,f);
            if(typeof e==="number"&&!kb.test(f))e+="px";
            c.style(d,f,e)
        })
    };

    c.extend({
        style:function(a,b,d){
            if(!a||a.nodeType===3||a.nodeType===8)return w;
            if((b==="width"||b==="height")&&parseFloat(d)<0)d=w;
            var f=a.style||a,e=d!==w;
            if(!c.support.opacity&&b==="opacity"){
                if(e){
                    f.zoom=1;
                    b=parseInt(d,10)+""==="NaN"?"":"alpha(opacity="+d*100+")";
                    a=f.filter||c.curCSS(a,"filter")||"";
                    f.filter=
                    Na.test(a)?a.replace(Na,b):b
                }
                return f.filter&&f.filter.indexOf("opacity=")>=0?parseFloat(Oa.exec(f.filter)[1])/100+"":""
            }
            if(ha.test(b))b=Pa;
            b=b.replace(ia,ja);
            if(e)f[b]=d;
            return f[b]
        },
        css:function(a,b,d,f){
            if(b==="width"||b==="height"){
                var e,j=b==="width"?pb:qb;
                function i(){
                    e=b==="width"?a.offsetWidth:a.offsetHeight;
                    f!=="border"&&c.each(j,function(){
                        f||(e-=parseFloat(c.curCSS(a,"padding"+this,true))||0);
                        if(f==="margin")e+=parseFloat(c.curCSS(a,"margin"+this,true))||0;else e-=parseFloat(c.curCSS(a,
                            "border"+this+"Width",true))||0
                    })
                }
                a.offsetWidth!==0?i():c.swap(a,ob,i);
                return Math.max(0,Math.round(e))
            }
            return c.curCSS(a,b,d)
        },
        curCSS:function(a,b,d){
            var f,e=a.style;
            if(!c.support.opacity&&b==="opacity"&&a.currentStyle){
                f=Oa.test(a.currentStyle.filter||"")?parseFloat(RegExp.$1)/100+"":"";
                return f===""?"1":f
            }
            if(ha.test(b))b=Pa;
            if(!d&&e&&e[b])f=e[b];
            else if(rb){
                if(ha.test(b))b="float";
                b=b.replace(lb,"-$1").toLowerCase();
                e=a.ownerDocument.defaultView;
                if(!e)return null;
                if(a=e.getComputedStyle(a,null))f=
                    a.getPropertyValue(b);
                if(b==="opacity"&&f==="")f="1"
            }else if(a.currentStyle){
                d=b.replace(ia,ja);
                f=a.currentStyle[b]||a.currentStyle[d];
                if(!mb.test(f)&&nb.test(f)){
                    b=e.left;
                    var j=a.runtimeStyle.left;
                    a.runtimeStyle.left=a.currentStyle.left;
                    e.left=d==="fontSize"?"1em":f||0;
                    f=e.pixelLeft+"px";
                    e.left=b;
                    a.runtimeStyle.left=j
                }
            }
            return f
        },
        swap:function(a,b,d){
            var f={};

            for(var e in b){
                f[e]=a.style[e];
                a.style[e]=b[e]
            }
            d.call(a);
            for(e in b)a.style[e]=f[e]
        }
    });
    if(c.expr&&c.expr.filters){
        c.expr.filters.hidden=function(a){
            var b=
            a.offsetWidth,d=a.offsetHeight,f=a.nodeName.toLowerCase()==="tr";
            return b===0&&d===0&&!f?true:b>0&&d>0&&!f?false:c.curCSS(a,"display")==="none"
        };

        c.expr.filters.visible=function(a){
            return!c.expr.filters.hidden(a)
        }
    }
    var sb=J(),tb=/<script(.|\s)*?\/script>/gi,ub=/select|textarea/i,vb=/color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,N=/=\?(&|$)/,ka=/\?/,wb=/(\?|&)_=.*?(&|$)/,xb=/^(\w+:)?\/\/([^\/?#]+)/,yb=/%20/g,zb=c.fn.load;
    c.fn.extend({
        load:function(a,b,d){
            if(typeof a!==
                "string")return zb.call(this,a);
            else if(!this.length)return this;
            var f=a.indexOf(" ");
            if(f>=0){
                var e=a.slice(f,a.length);
                a=a.slice(0,f)
            }
            f="GET";
            if(b)if(c.isFunction(b)){
                d=b;
                b=null
            }else if(typeof b==="object"){
                b=c.param(b,c.ajaxSettings.traditional);
                f="POST"
            }
            var j=this;
            c.ajax({
                url:a,
                type:f,
                dataType:"html",
                data:b,
                complete:function(i,o){
                    if(o==="success"||o==="notmodified")j.html(e?c("<div />").append(i.responseText.replace(tb,"")).find(e):i.responseText);
                    d&&j.each(d,[i.responseText,o,i])
                }
            });
            return this
        },
        serialize:function(){
            return c.param(this.serializeArray())
        },
        serializeArray:function(){
            return this.map(function(){
                return this.elements?c.makeArray(this.elements):this
            }).filter(function(){
                return this.name&&!this.disabled&&(this.checked||ub.test(this.nodeName)||vb.test(this.type))
            }).map(function(a,b){
                a=c(this).val();
                return a==null?null:c.isArray(a)?c.map(a,function(d){
                    return{
                        name:b.name,
                        value:d
                    }
                }):{
                    name:b.name,
                    value:a
                }
            }).get()
        }
    });
    c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
        function(a,b){
            c.fn[b]=function(d){
                return this.bind(b,d)
            }
        });
    c.extend({
        get:function(a,b,d,f){
            if(c.isFunction(b)){
                f=f||d;
                d=b;
                b=null
            }
            return c.ajax({
                type:"GET",
                url:a,
                data:b,
                success:d,
                dataType:f
            })
        },
        getScript:function(a,b){
            return c.get(a,null,b,"script")
        },
        getJSON:function(a,b,d){
            return c.get(a,b,d,"json")
        },
        post:function(a,b,d,f){
            if(c.isFunction(b)){
                f=f||d;
                d=b;
                b={}
            }
            return c.ajax({
                type:"POST",
                url:a,
                data:b,
                success:d,
                dataType:f
            })
        },
        ajaxSetup:function(a){
            c.extend(c.ajaxSettings,a)
        },
        ajaxSettings:{
            url:location.href,
            global:true,
            type:"GET",
            contentType:"application/x-www-form-urlencoded",
            processData:true,
            async:true,
            xhr:A.XMLHttpRequest&&(A.location.protocol!=="file:"||!A.ActiveXObject)?function(){
                return new A.XMLHttpRequest
            }:function(){
                try{
                    return new A.ActiveXObject("Microsoft.XMLHTTP")
                }catch(a){}
            },
            accepts:{
                xml:"application/xml, text/xml",
                html:"text/html",
                script:"text/javascript, application/javascript",
                json:"application/json, text/javascript",
                text:"text/plain",
                _default:"*/*"
            }
        },
        lastModified:{},
        etag:{},
        ajax:function(a){
            function b(){
                e.success&&
                e.success.call(k,o,i,x);
                e.global&&f("ajaxSuccess",[x,e])
            }
            function d(){
                e.complete&&e.complete.call(k,x,i);
                e.global&&f("ajaxComplete",[x,e]);
                e.global&&!--c.active&&c.event.trigger("ajaxStop")
            }
            function f(q,p){
                (e.context?c(e.context):c.event).trigger(q,p)
            }
            var e=c.extend(true,{},c.ajaxSettings,a),j,i,o,k=a&&a.context||e,n=e.type.toUpperCase();
            if(e.data&&e.processData&&typeof e.data!=="string")e.data=c.param(e.data,e.traditional);
            if(e.dataType==="jsonp"){
                if(n==="GET")N.test(e.url)||(e.url+=(ka.test(e.url)?
                    "&":"?")+(e.jsonp||"callback")+"=?");
                else if(!e.data||!N.test(e.data))e.data=(e.data?e.data+"&":"")+(e.jsonp||"callback")+"=?";
                e.dataType="json"
            }
            if(e.dataType==="json"&&(e.data&&N.test(e.data)||N.test(e.url))){
                j=e.jsonpCallback||"jsonp"+sb++;
                if(e.data)e.data=(e.data+"").replace(N,"="+j+"$1");
                e.url=e.url.replace(N,"="+j+"$1");
                e.dataType="script";
                A[j]=A[j]||function(q){
                    o=q;
                    b();
                    d();
                    A[j]=w;
                    try{
                        delete A[j]
                    }catch(p){}
                    z&&z.removeChild(C)
                }
            }
            if(e.dataType==="script"&&e.cache===null)e.cache=false;
            if(e.cache===
                false&&n==="GET"){
                var r=J(),u=e.url.replace(wb,"$1_="+r+"$2");
                e.url=u+(u===e.url?(ka.test(e.url)?"&":"?")+"_="+r:"")
            }
            if(e.data&&n==="GET")e.url+=(ka.test(e.url)?"&":"?")+e.data;
            e.global&&!c.active++&&c.event.trigger("ajaxStart");
            r=(r=xb.exec(e.url))&&(r[1]&&r[1]!==location.protocol||r[2]!==location.host);
            if(e.dataType==="script"&&n==="GET"&&r){
                var z=s.getElementsByTagName("head")[0]||s.documentElement,C=s.createElement("script");
                C.src=e.url;
                if(e.scriptCharset)C.charset=e.scriptCharset;
                if(!j){
                    var B=
                    false;
                    C.onload=C.onreadystatechange=function(){
                        if(!B&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){
                            B=true;
                            b();
                            d();
                            C.onload=C.onreadystatechange=null;
                            z&&C.parentNode&&z.removeChild(C)
                        }
                    }
                }
                z.insertBefore(C,z.firstChild);
                return w
            }
            var E=false,x=e.xhr();
            if(x){
                e.username?x.open(n,e.url,e.async,e.username,e.password):x.open(n,e.url,e.async);
                try{
                    if(e.data||a&&a.contentType)x.setRequestHeader("Content-Type",e.contentType);
                    if(e.ifModified){
                        c.lastModified[e.url]&&x.setRequestHeader("If-Modified-Since",
                            c.lastModified[e.url]);
                        c.etag[e.url]&&x.setRequestHeader("If-None-Match",c.etag[e.url])
                    }
                    r||x.setRequestHeader("X-Requested-With","XMLHttpRequest");
                    x.setRequestHeader("Accept",e.dataType&&e.accepts[e.dataType]?e.accepts[e.dataType]+", */*":e.accepts._default)
                }catch(ga){}
                if(e.beforeSend&&e.beforeSend.call(k,x,e)===false){
                    e.global&&!--c.active&&c.event.trigger("ajaxStop");
                    x.abort();
                    return false
                }
                e.global&&f("ajaxSend",[x,e]);
                var g=x.onreadystatechange=function(q){
                    if(!x||x.readyState===0||q==="abort"){
                        E||
                        d();
                        E=true;
                        if(x)x.onreadystatechange=c.noop
                    }else if(!E&&x&&(x.readyState===4||q==="timeout")){
                        E=true;
                        x.onreadystatechange=c.noop;
                        i=q==="timeout"?"timeout":!c.httpSuccess(x)?"error":e.ifModified&&c.httpNotModified(x,e.url)?"notmodified":"success";
                        var p;
                        if(i==="success")try{
                            o=c.httpData(x,e.dataType,e)
                        }catch(v){
                            i="parsererror";
                            p=v
                        }
                        if(i==="success"||i==="notmodified")j||b();else c.handleError(e,x,i,p);
                        d();
                        q==="timeout"&&x.abort();
                        if(e.async)x=null
                    }
                };

                try{
                    var h=x.abort;
                    x.abort=function(){
                        x&&h.call(x);
                        g("abort")
                    }
                }catch(l){}
                e.async&&e.timeout>0&&setTimeout(function(){
                    x&&!E&&g("timeout")
                },e.timeout);
                try{
                    x.send(n==="POST"||n==="PUT"||n==="DELETE"?e.data:null)
                }catch(m){
                    c.handleError(e,x,null,m);
                    d()
                }
                e.async||g();
                return x
            }
        },
        handleError:function(a,b,d,f){
            if(a.error)a.error.call(a.context||a,b,d,f);
            if(a.global)(a.context?c(a.context):c.event).trigger("ajaxError",[b,a,f])
        },
        active:0,
        httpSuccess:function(a){
            try{
                return!a.status&&location.protocol==="file:"||a.status>=200&&a.status<300||a.status===304||a.status===
                1223||a.status===0
            }catch(b){}
            return false
        },
        httpNotModified:function(a,b){
            var d=a.getResponseHeader("Last-Modified"),f=a.getResponseHeader("Etag");
            if(d)c.lastModified[b]=d;
            if(f)c.etag[b]=f;
            return a.status===304||a.status===0
        },
        httpData:function(a,b,d){
            var f=a.getResponseHeader("content-type")||"",e=b==="xml"||!b&&f.indexOf("xml")>=0;
            a=e?a.responseXML:a.responseText;
            e&&a.documentElement.nodeName==="parsererror"&&c.error("parsererror");
            if(d&&d.dataFilter)a=d.dataFilter(a,b);
            if(typeof a==="string")if(b===
                "json"||!b&&f.indexOf("json")>=0)a=c.parseJSON(a);
                else if(b==="script"||!b&&f.indexOf("javascript")>=0)c.globalEval(a);
            return a
        },
        param:function(a,b){
            function d(i,o){
                if(c.isArray(o))c.each(o,function(k,n){
                    b||/\[\]$/.test(i)?f(i,n):d(i+"["+(typeof n==="object"||c.isArray(n)?k:"")+"]",n)
                });else!b&&o!=null&&typeof o==="object"?c.each(o,function(k,n){
                    d(i+"["+k+"]",n)
                }):f(i,o)
            }
            function f(i,o){
                o=c.isFunction(o)?o():o;
                e[e.length]=encodeURIComponent(i)+"="+encodeURIComponent(o)
            }
            var e=[];
            if(b===w)b=c.ajaxSettings.traditional;
            if(c.isArray(a)||a.jquery)c.each(a,function(){
                f(this.name,this.value)
            });else for(var j in a)d(j,a[j]);return e.join("&").replace(yb,"+")
        }
    });
    var la={},Ab=/toggle|show|hide/,Bb=/^([+-]=)?([\d+-.]+)(.*)$/,W,va=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];
    c.fn.extend({
        show:function(a,b){
            if(a||a===0)return this.animate(K("show",3),a,b);
            else{
                a=0;
                for(b=this.length;a<b;a++){
                    var d=c.data(this[a],"olddisplay");
                    this[a].style.display=d||"";
                    if(c.css(this[a],"display")==="none"){
                        d=this[a].nodeName;
                        var f;
                        if(la[d])f=la[d];
                        else{
                            var e=c("<"+d+" />").appendTo("body");
                            f=e.css("display");
                            if(f==="none")f="block";
                            e.remove();
                            la[d]=f
                        }
                        c.data(this[a],"olddisplay",f)
                    }
                }
                a=0;
                for(b=this.length;a<b;a++)this[a].style.display=c.data(this[a],"olddisplay")||"";
                return this
            }
        },
        hide:function(a,b){
            if(a||a===0)return this.animate(K("hide",3),a,b);
            else{
                a=0;
                for(b=this.length;a<b;a++){
                    var d=c.data(this[a],"olddisplay");
                    !d&&d!=="none"&&c.data(this[a],
                        "olddisplay",c.css(this[a],"display"))
                }
                a=0;
                for(b=this.length;a<b;a++)this[a].style.display="none";
                return this
            }
        },
        _toggle:c.fn.toggle,
        toggle:function(a,b){
            var d=typeof a==="boolean";
            if(c.isFunction(a)&&c.isFunction(b))this._toggle.apply(this,arguments);else a==null||d?this.each(function(){
                var f=d?a:c(this).is(":hidden");
                c(this)[f?"show":"hide"]()
            }):this.animate(K("toggle",3),a,b);
            return this
        },
        fadeTo:function(a,b,d){
            return this.filter(":hidden").css("opacity",0).show().end().animate({
                opacity:b
            },a,d)
        },
        animate:function(a,b,d,f){
            var e=c.speed(b,d,f);
            if(c.isEmptyObject(a))return this.each(e.complete);
            return this[e.queue===false?"each":"queue"](function(){
                var j=c.extend({},e),i,o=this.nodeType===1&&c(this).is(":hidden"),k=this;
                for(i in a){
                    var n=i.replace(ia,ja);
                    if(i!==n){
                        a[n]=a[i];
                        delete a[i];
                        i=n
                    }
                    if(a[i]==="hide"&&o||a[i]==="show"&&!o)return j.complete.call(this);
                    if((i==="height"||i==="width")&&this.style){
                        j.display=c.css(this,"display");
                        j.overflow=this.style.overflow
                    }
                    if(c.isArray(a[i])){
                        (j.specialEasing=
                            j.specialEasing||{})[i]=a[i][1];
                        a[i]=a[i][0]
                    }
                }
                if(j.overflow!=null)this.style.overflow="hidden";
                j.curAnim=c.extend({},a);
                c.each(a,function(r,u){
                    var z=new c.fx(k,j,r);
                    if(Ab.test(u))z[u==="toggle"?o?"show":"hide":u](a);
                    else{
                        var C=Bb.exec(u),B=z.cur(true)||0;
                        if(C){
                            u=parseFloat(C[2]);
                            var E=C[3]||"px";
                            if(E!=="px"){
                                k.style[r]=(u||1)+E;
                                B=(u||1)/z.cur(true)*B;
                                k.style[r]=B+E
                            }
                            if(C[1])u=(C[1]==="-="?-1:1)*u+B;
                            z.custom(B,u,E)
                        }else z.custom(B,u,"")
                    }
                });
                return true
            })
        },
        stop:function(a,b){
            var d=c.timers;
            a&&this.queue([]);
            this.each(function(){
                for(var f=d.length-1;f>=0;f--)if(d[f].elem===this){
                    b&&d[f](true);
                    d.splice(f,1)
                }
            });
            b||this.dequeue();
            return this
        }
    });
    c.each({
        slideDown:K("show",1),
        slideUp:K("hide",1),
        slideToggle:K("toggle",1),
        fadeIn:{
            opacity:"show"
        },
        fadeOut:{
            opacity:"hide"
        }
    },function(a,b){
        c.fn[a]=function(d,f){
            return this.animate(b,d,f)
        }
    });
    c.extend({
        speed:function(a,b,d){
            var f=a&&typeof a==="object"?a:{
                complete:d||!d&&b||c.isFunction(a)&&a,
                duration:a,
                easing:d&&b||b&&!c.isFunction(b)&&b
            };

            f.duration=c.fx.off?0:typeof f.duration===
            "number"?f.duration:c.fx.speeds[f.duration]||c.fx.speeds._default;
            f.old=f.complete;
            f.complete=function(){
                f.queue!==false&&c(this).dequeue();
                c.isFunction(f.old)&&f.old.call(this)
            };

            return f
        },
        easing:{
            linear:function(a,b,d,f){
                return d+f*a
            },
            swing:function(a,b,d,f){
                return(-Math.cos(a*Math.PI)/2+0.5)*f+d
            }
        },
        timers:[],
        fx:function(a,b,d){
            this.options=b;
            this.elem=a;
            this.prop=d;
            if(!b.orig)b.orig={}
        }
    });
    c.fx.prototype={
        update:function(){
            this.options.step&&this.options.step.call(this.elem,this.now,this);
            (c.fx.step[this.prop]||
                c.fx.step._default)(this);
            if((this.prop==="height"||this.prop==="width")&&this.elem.style)this.elem.style.display="block"
        },
        cur:function(a){
            if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];
            return(a=parseFloat(c.css(this.elem,this.prop,a)))&&a>-10000?a:parseFloat(c.curCSS(this.elem,this.prop))||0
        },
        custom:function(a,b,d){
            function f(j){
                return e.step(j)
            }
            this.startTime=J();
            this.start=a;
            this.end=b;
            this.unit=d||this.unit||"px";
            this.now=this.start;
            this.pos=this.state=0;
            var e=this;
            f.elem=this.elem;
            if(f()&&c.timers.push(f)&&!W)W=setInterval(c.fx.tick,13)
        },
        show:function(){
            this.options.orig[this.prop]=c.style(this.elem,this.prop);
            this.options.show=true;
            this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());
            c(this.elem).show()
        },
        hide:function(){
            this.options.orig[this.prop]=c.style(this.elem,this.prop);
            this.options.hide=true;
            this.custom(this.cur(),0)
        },
        step:function(a){
            var b=J(),d=true;
            if(a||b>=this.options.duration+this.startTime){
                this.now=
                this.end;
                this.pos=this.state=1;
                this.update();
                this.options.curAnim[this.prop]=true;
                for(var f in this.options.curAnim)if(this.options.curAnim[f]!==true)d=false;if(d){
                    if(this.options.display!=null){
                        this.elem.style.overflow=this.options.overflow;
                        a=c.data(this.elem,"olddisplay");
                        this.elem.style.display=a?a:this.options.display;
                        if(c.css(this.elem,"display")==="none")this.elem.style.display="block"
                    }
                    this.options.hide&&c(this.elem).hide();
                    if(this.options.hide||this.options.show)for(var e in this.options.curAnim)c.style(this.elem,
                        e,this.options.orig[e]);this.options.complete.call(this.elem)
                }
                return false
            }else{
                e=b-this.startTime;
                this.state=e/this.options.duration;
                a=this.options.easing||(c.easing.swing?"swing":"linear");
                this.pos=c.easing[this.options.specialEasing&&this.options.specialEasing[this.prop]||a](this.state,e,0,1,this.options.duration);
                this.now=this.start+(this.end-this.start)*this.pos;
                this.update()
            }
            return true
        }
    };

    c.extend(c.fx,{
        tick:function(){
            for(var a=c.timers,b=0;b<a.length;b++)a[b]()||a.splice(b--,1);
            a.length||
            c.fx.stop()
        },
        stop:function(){
            clearInterval(W);
            W=null
        },
        speeds:{
            slow:600,
            fast:200,
            _default:400
        },
        step:{
            opacity:function(a){
                c.style(a.elem,"opacity",a.now)
            },
            _default:function(a){
                if(a.elem.style&&a.elem.style[a.prop]!=null)a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit;else a.elem[a.prop]=a.now
            }
        }
    });
    if(c.expr&&c.expr.filters)c.expr.filters.animated=function(a){
        return c.grep(c.timers,function(b){
            return a===b.elem
        }).length
    };

    c.fn.offset="getBoundingClientRect"in s.documentElement?
    function(a){
        var b=this[0];
        if(a)return this.each(function(e){
            c.offset.setOffset(this,a,e)
        });
        if(!b||!b.ownerDocument)return null;
        if(b===b.ownerDocument.body)
            return c.offset.bodyOffset(b);
        var d=b.getBoundingClientRect(),f=b.ownerDocument;
        b=f.body;
        f=f.documentElement;
        return{
            top:d.top+(self.pageYOffset||c.support.boxModel&&f.scrollTop||b.scrollTop)-(f.clientTop||b.clientTop||0),
            left:d.left+(self.pageXOffset||c.support.boxModel&&f.scrollLeft||b.scrollLeft)-(f.clientLeft||b.clientLeft||0)
        }
    }:function(a){
        var b=
        this[0];
        if(a)return this.each(function(r){
            c.offset.setOffset(this,a,r)
        });
        if(!b||!b.ownerDocument)return null;
        if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);
        c.offset.initialize();
        var d=b.offsetParent,f=b,e=b.ownerDocument,j,i=e.documentElement,o=e.body;
        f=(e=e.defaultView)?e.getComputedStyle(b,null):b.currentStyle;
        for(var k=b.offsetTop,n=b.offsetLeft;(b=b.parentNode)&&b!==o&&b!==i;){
            if(c.offset.supportsFixedPosition&&f.position==="fixed")break;
            j=e?e.getComputedStyle(b,null):b.currentStyle;
            k-=b.scrollTop;
            n-=b.scrollLeft;
            if(b===d){
                k+=b.offsetTop;
                n+=b.offsetLeft;
                if(c.offset.doesNotAddBorder&&!(c.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(b.nodeName))){
                    k+=parseFloat(j.borderTopWidth)||0;
                    n+=parseFloat(j.borderLeftWidth)||0
                }
                f=d;
                d=b.offsetParent
            }
            if(c.offset.subtractsBorderForOverflowNotVisible&&j.overflow!=="visible"){
                k+=parseFloat(j.borderTopWidth)||0;
                n+=parseFloat(j.borderLeftWidth)||0
            }
            f=j
        }
        if(f.position==="relative"||f.position==="static"){
            k+=o.offsetTop;
            n+=o.offsetLeft
        }
        if(c.offset.supportsFixedPosition&&
            f.position==="fixed"){
            k+=Math.max(i.scrollTop,o.scrollTop);
            n+=Math.max(i.scrollLeft,o.scrollLeft)
        }
        return{
            top:k,
            left:n
        }
    };

    c.offset={
        initialize:function(){
            var a=s.body,b=s.createElement("div"),d,f,e,j=parseFloat(c.curCSS(a,"marginTop",true))||0;
            c.extend(b.style,{
                position:"absolute",
                top:0,
                left:0,
                margin:0,
                border:0,
                width:"1px",
                height:"1px",
                visibility:"hidden"
            });
            b.innerHTML="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            a.insertBefore(b,a.firstChild);
            d=b.firstChild;
            f=d.firstChild;
            e=d.nextSibling.firstChild.firstChild;
            this.doesNotAddBorder=f.offsetTop!==5;
            this.doesAddBorderForTableAndCells=e.offsetTop===5;
            f.style.position="fixed";
            f.style.top="20px";
            this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15;
            f.style.position=f.style.top="";
            d.style.overflow="hidden";
            d.style.position="relative";
            this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5;
            this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==j;
            a.removeChild(b);
            c.offset.initialize=c.noop
        },
        bodyOffset:function(a){
            var b=a.offsetTop,d=a.offsetLeft;
            c.offset.initialize();
            if(c.offset.doesNotIncludeMarginInBodyOffset){
                b+=parseFloat(c.curCSS(a,"marginTop",true))||0;
                d+=parseFloat(c.curCSS(a,"marginLeft",true))||0
            }
            return{
                top:b,
                left:d
            }
        },
        setOffset:function(a,b,d){
            if(/static/.test(c.curCSS(a,"position")))a.style.position="relative";
            var f=c(a),e=f.offset(),j=parseInt(c.curCSS(a,"top",true),10)||0,i=parseInt(c.curCSS(a,"left",true),10)||0;
            if(c.isFunction(b))b=b.call(a,
                d,e);
            d={
                top:b.top-e.top+j,
                left:b.left-e.left+i
            };

            "using"in b?b.using.call(a,d):f.css(d)
        }
    };

    c.fn.extend({
        position:function(){
            if(!this[0])return null;
            var a=this[0],b=this.offsetParent(),d=this.offset(),f=/^body|html$/i.test(b[0].nodeName)?{
                top:0,
                left:0
            }:b.offset();
            d.top-=parseFloat(c.curCSS(a,"marginTop",true))||0;
            d.left-=parseFloat(c.curCSS(a,"marginLeft",true))||0;
            f.top+=parseFloat(c.curCSS(b[0],"borderTopWidth",true))||0;
            f.left+=parseFloat(c.curCSS(b[0],"borderLeftWidth",true))||0;
            return{
                top:d.top-
                f.top,
                left:d.left-f.left
            }
        },
        offsetParent:function(){
            return this.map(function(){
                for(var a=this.offsetParent||s.body;a&&!/^body|html$/i.test(a.nodeName)&&c.css(a,"position")==="static";)a=a.offsetParent;
                return a
            })
        }
    });
    c.each(["Left","Top"],function(a,b){
        var d="scroll"+b;
        c.fn[d]=function(f){
            var e=this[0],j;
            if(!e)return null;
            if(f!==w)return this.each(function(){
                if(j=wa(this))j.scrollTo(!a?f:c(j).scrollLeft(),a?f:c(j).scrollTop());else this[d]=f
            });else return(j=wa(e))?"pageXOffset"in j?j[a?"pageYOffset":
                "pageXOffset"]:c.support.boxModel&&j.document.documentElement[d]||j.document.body[d]:e[d]
        }
    });
    c.each(["Height","Width"],function(a,b){
        var d=b.toLowerCase();
        c.fn["inner"+b]=function(){
            return this[0]?c.css(this[0],d,false,"padding"):null
        };

        c.fn["outer"+b]=function(f){
            return this[0]?c.css(this[0],d,false,f?"margin":"border"):null
        };

        c.fn[d]=function(f){
            var e=this[0];
            if(!e)return f==null?null:this;
            if(c.isFunction(f))return this.each(function(j){
                var i=c(this);
                i[d](f.call(this,j,i[d]()))
            });
            return"scrollTo"in
            e&&e.document?e.document.compatMode==="CSS1Compat"&&e.document.documentElement["client"+b]||e.document.body["client"+b]:e.nodeType===9?Math.max(e.documentElement["client"+b],e.body["scroll"+b],e.documentElement["scroll"+b],e.body["offset"+b],e.documentElement["offset"+b]):f===w?c.css(e,d):this.css(d,typeof f==="string"?f:f+"px")
        }
    });
    A.jQuery=A.$=c
})(window);
// Copyright 2007, Google Inc.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//  1. Redistributions of source code must retain the above copyright notice,
//     this list of conditions and the following disclaimer.
//  2. Redistributions in binary form must reproduce the above copyright notice,
//     this list of conditions and the following disclaimer in the documentation
//     and/or other materials provided with the distribution.
//  3. Neither the name of Google Inc. nor the names of its contributors may be
//     used to endorse or promote products derived from this software without
//     specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR IMPLIED
// WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
// EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
// OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
// WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
// OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
// ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
// Sets up google.gears.*, which is *the only* supported way to access Gears.
//
// Circumvent this file at your own risk!
//
// In the future, Gears may automatically define google.gears.* without this
// file. Gears may use these objects to transparently fix bugs and compatibility
// issues. Applications that use the code below will continue to work seamlessly
// when that happens.

(function() {
    // We are already defined. Hooray!
    if (window.google && google.gears) {
        return;
    }

    var factory = null;

    // Firefox
    if (typeof GearsFactory != 'undefined') {
        factory = new GearsFactory();
    } else {
        // IE
        try {
        /*
		 * commented out to avoid firebug error, as we don't support IE currently anyway
		if(ActiveXObject){
			factory = new ActiveXObject('Gears.Factory');
      		// privateSetGlobalObject is only required and supported on IE Mobile on
      		// WinCE.
      		if (factory.getBuildInfo().indexOf('ie_mobile') != -1) {
        	factory.privateSetGlobalObject(this);
      	}
		}*/

        }catch (e) {
            // Safari
            if ((typeof navigator.mimeTypes != 'undefined')
                && navigator.mimeTypes["application/x-googlegears"]) {
                factory = document.createElement("object");
                factory.style.display = "none";
                factory.width = 0;
                factory.height = 0;
                factory.type = "application/x-googlegears";
                document.documentElement.appendChild(factory);
            }
        }
    }

    // *Do not* define any objects if Gears is not installed. This mimics the
    // behavior of Gears defining the objects in the future.
    if (!factory) {
        return;
    }

    // Now set up the objects, being careful not to overwrite anything.
    //
    // Note: In Internet Explorer for Windows Mobile, you can't add properties to
    // the window object. However, global objects are automatically added as
    // properties of the window object in all browsers.
    if (!window.google) {
        google = {};
    }

    if (!google.gears) {
        google.gears = {
            factory: factory
        };
    }
})();
/*
    OpenRide -- Car Sharing 2.0
    Copyright (C) 2010  Fraunhofer Institute for Open Communication Systems (FOKUS)

    Fraunhofer FOKUS
    Kaiserin-Augusta-Allee 31
    10589 Berlin
    Tel: +49 30 3463-7000
    info@fokus.fraunhofer.de

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License Version 3 as
    published by the Free Software Foundation.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

var tabListActiveRideId;
var tabListActiveRefreshTimer;
var updateCountRefreshTimer;
var ridePlan;
var rideRequests = [];
var ridePlans = [];
var rides = [];
var unratedRidePlans = [];
var submitted_rides = [];
var parseOffer;
var parseSearch;
var parseUnmatchedOffer;
var parseUnmatchedSearch;
var user;
var pass;
var DimitrisLocal = "localhost:3000";
var DimitrisRemote = "168.144.202.152:3000";
var PeerMenager = "168.144.202.152:3002";
var usermode = 0;
var username = '';
var password = '';
var DRIVERMODE = 0;
var RIDERMODE = 1;
var offerAccessCounter=0;

function slidingUITabListClick(objClicked) {

    clearInterval(tabListActiveRefreshTimer);

    // Get DIV containing the match rows
    var contentdiv = $(objClicked).next('.slide_0');

    // Toggle CSS of the clicked item
    $(objClicked).toggleClass("active");

    // Clicked item now != previous
    $(objClicked).removeClass("previous");

    // Previous active items now become inactive + their content is hidden
    if($(".previous").is('.active')) {
        $(".previous").next('.slide_0').slideToggle("slow");
        $(".previous").toggleClass("active");
        $(".previous").removeClass("previous");
    }

    // If the click activated this item, mark it "previous" so we can
    // hide it once the next item is clicked + get the content
    if ($(objClicked).is('.active')) {

        $(objClicked).addClass("previous");

        // Before showing the item's content: Retreive it!
        fokus.openride.mobclient.controller.modules.modulemanager.receiveMatches(objClicked.id, contentdiv);
        // Refresh content infinitely...
        tabListActiveRefreshTimer = setInterval("fokus.openride.mobclient.controller.modules.modulemanager.receiveMatches('"+objClicked.id+"', false)", 15000);

        //currentHref = window.location.href;
        //window.location.href = currentHref.substr(0, currentHref.lastIndexOf("#")) + "#"+this.id;

        tabListActiveRideId = objClicked.id;
        // All done; finally toggle height of the content DIV + scroll
        contentdiv.slideToggle("slow", function() {

            // Compute distance we need to scroll downwards
            heightWindowDiffBottom  = $("#"+tabListActiveRideId).offset().top - $('html,body').scrollTop() + $("#"+tabListActiveRideId).parent().height() - window.innerHeight;
            // Compute distance we need to scroll upwards
            heightWindowDiffTop = $("#"+tabListActiveRideId).offset().top - $('html,body').scrollTop();

            // Only do the scrolling if part of the element is actually hidden - not otherwise
            scrollDiff = 0;

            if (heightWindowDiffTop < 0)
                scrollDiff = heightWindowDiffTop;
            else if (heightWindowDiffBottom > 0)
                scrollDiff = heightWindowDiffBottom;
            //DEBUG:
            //alert($("#"+tabListActiveRideId).offset().top +" - "+ $('html,body').scrollTop())

            scrollTop = 0;
            if ($('html,body').scrollTop() + scrollDiff > $("#"+tabListActiveRideId).offset().top)
                scrollTop = $("#"+tabListActiveRideId).offset().top;
            else
                scrollTop = $('html,body').scrollTop() + scrollDiff;

            if (scrollDiff != 0)
                $('html,body').animate({
                    scrollTop: scrollTop
                }, "slow");

        });

    }
    else {
        contentdiv.slideToggle("slow");
    }

    return false;
     
}

function slidingUIComplTripsTabListClick(objClicked) {

    clearInterval(tabListActiveRefreshTimer);

    // Get DIV containing the match rows
    var contentdiv = $(objClicked).next('.slide_0');

    // Toggle CSS of the clicked item
    $(objClicked).toggleClass("active");

    // Clicked item now != previous
    $(objClicked).removeClass("previous");

    // Previous active items now become inactive + their content is hidden
    if($(".previous").is('.active')) {
        $(".previous").next('.slide_0').slideToggle("slow");
        $(".previous").toggleClass("active");
        $(".previous").removeClass("previous");
    }

    // If the click activated this item, mark it "previous" so we can
    // hide it once the next item is clicked + get the content
    if ($(objClicked).is('.active')) {

        $(objClicked).addClass("previous");

        // Before showing the item's content: Retreive it!
        fokus.openride.mobclient.controller.modules.modulemanager.receiveInactiveMatches(objClicked.id, contentdiv);
        // Refresh content infinitely...
        tabListActiveRefreshTimer = setInterval("fokus.openride.mobclient.controller.modules.modulemanager.receiveMatches('"+objClicked.id+"', false)", 20000);

        //currentHref = window.location.href;
        //window.location.href = currentHref.substr(0, currentHref.lastIndexOf("#")) + "#"+this.id;

        tabListActiveRideId = objClicked.id;
        // All done; finally toggle height of the content DIV + scroll
        contentdiv.slideToggle("slow", function() {

            // Compute distance we need to scroll downwards
            heightWindowDiffBottom  = $("#"+tabListActiveRideId).offset().top - $('html,body').scrollTop() + $("#"+tabListActiveRideId).parent().height() - window.innerHeight;
            // Compute distance we need to scroll upwards
            heightWindowDiffTop = $("#"+tabListActiveRideId).offset().top - $('html,body').scrollTop();

            // Only do the scrolling if part of the element is actually hidden - not otherwise
            scrollDiff = 0;

            if (heightWindowDiffTop < 0)
                scrollDiff = heightWindowDiffTop;
            else if (heightWindowDiffBottom > 0)
                scrollDiff = heightWindowDiffBottom;
            //DEBUG:
            //alert($("#"+tabListActiveRideId).offset().top +" - "+ $('html,body').scrollTop())

            if (scrollDiff != 0)
                $('html,body').animate({
                    scrollTop: $('html,body').scrollTop() + scrollDiff
                }, "slow");

        });

    }
    else {
        contentdiv.slideToggle("slow");
    }
    return false;    
}

function setupUITabList(){
    $(".linkslide_0").click( function() {
        slidingUITabListClick(this);
    } );
}

function setupCompletedTripUITabList(){
    $(".linkslide_0").click( function() {
        slidingUIComplTripsTabListClick(this);
    } );
}/* 
 * Helperclass to build strings.
 */
function StringBuilder(value)
{
    this.strings = new Array("");
    this.append(value);
}

// Appends the given value to the end of this instance.

StringBuilder.prototype.append = function (value)
{
    if (value)
    {
        this.strings.push(value);
    }
}

// Clears the string buffer

StringBuilder.prototype.clear = function ()
{
    this.strings.length = 1;
}

// Converts this instance to a String.

StringBuilder.prototype.toString = function ()
{
    return this.strings.join("");
}/*
 * jQuery UI @VERSION
 *
 * Copyright (c) 2008 Paul Bakaus (ui.jquery.com)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI
 */
;
(function($) {

    /** jQuery core modifications and additions **/
    $.keyCode = {
        BACKSPACE: 8,
        CAPS_LOCK: 20,
        COMMA: 188,
        CONTROL: 17,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        INSERT: 45,
        LEFT: 37,
        NUMPAD_ADD: 107,
        NUMPAD_DECIMAL: 110,
        NUMPAD_DIVIDE: 111,
        NUMPAD_ENTER: 108,
        NUMPAD_MULTIPLY: 106,
        NUMPAD_SUBTRACT: 109,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SHIFT: 16,
        SPACE: 32,
        TAB: 9,
        UP: 38
    };

    //Temporary mappings
    var _remove = $.fn.remove;
    var isFF2 = $.browser.mozilla && (parseFloat($.browser.version) < 1.9);


    //Helper functions and ui object
    $.ui = {
	
        version: "@VERSION",
	
        // $.ui.plugin is deprecated.  Use the proxy pattern instead.
        plugin: {
            add: function(module, option, set) {
                var proto = $.ui[module].prototype;
                for(var i in set) {
                    proto.plugins[i] = proto.plugins[i] || [];
                    proto.plugins[i].push([option, set[i]]);
                }
            },
            call: function(instance, name, args) {
                var set = instance.plugins[name];
                if(!set) {
                    return;
                }
			
                for (var i = 0; i < set.length; i++) {
                    if (instance.options[set[i][0]]) {
                        set[i][1].apply(instance.element, args);
                    }
                }
            }
        },
	
        cssCache: {},
        css: function(name) {
            if ($.ui.cssCache[name]) {
                return $.ui.cssCache[name];
            }
            var tmp = $('<div class="ui-gen">').addClass(name).css({
                position:'absolute',
                top:'-5000px',
                left:'-5000px',
                display:'block'
            }).appendTo('body');
		
            //if (!$.browser.safari)
            //tmp.appendTo('body');
		
            //Opera and Safari set width and height to 0px instead of auto
            //Safari returns rgba(0,0,0,0) when bgcolor is not set
            $.ui.cssCache[name] = !!(
                (!(/auto|default/).test(tmp.css('cursor')) || (/^[1-9]/).test(tmp.css('height')) || (/^[1-9]/).test(tmp.css('width')) ||
                    !(/none/).test(tmp.css('backgroundImage')) || !(/transparent|rgba\(0, 0, 0, 0\)/).test(tmp.css('backgroundColor')))
                );
            try {
                $('body').get(0).removeChild(tmp.get(0));
            }catch(e){}
            return $.ui.cssCache[name];
        },

        hasScroll: function(e, a) {
		
            //If overflow is hidden, the element might have extra content, but the user wants to hide it
            if ($(e).css('overflow') == 'hidden') {
                return false;
            }
		
            var scroll = (a && a == 'left') ? 'scrollLeft' : 'scrollTop',
            has = false;
		
            if (e[scroll] > 0) {
                return true;
            }
		
            // TODO: determine which cases actually cause this to happen
            // if the element doesn't have the scroll set, see if it's possible to
            // set the scroll
            e[scroll] = 1;
            has = (e[scroll] > 0);
            e[scroll] = 0;
            return has;
        }
    };


    //jQuery plugins
    $.fn.extend({
	
        remove: function() {
            // Safari has a native remove event which actually removes DOM elements,
            // so we have to use triggerHandler instead of trigger (#3037).
            $("*", this).add(this).each(function() {
                $(this).triggerHandler("remove");
            });
            return _remove.apply(this, arguments );
        },
	
        enableSelection: function() {
            return this
            .attr('unselectable', 'off')
            .css('MozUserSelect', '')
            .unbind('selectstart.ui');
        },
	
        disableSelection: function() {
            return this
            .attr('unselectable', 'on')
            .css('MozUserSelect', 'none')
            .bind('selectstart.ui', function() {
                return false;
            });
        },
	
        // WAI-ARIA Semantics
        ariaRole: function(role) {
            return (role !== undefined
			
                // setter
                ? this.attr("role", isFF2 ? "wairole:" + role : role)
			
                // getter
                : (this.attr("role") || "").replace(/^wairole:/, ""));
        },
	
        ariaState: function(state, value) {
            return (value !== undefined
			
                // setter
                ? this.each(function(i, el) {
                    (isFF2
                        ? el.setAttributeNS("http://www.w3.org/2005/07/aaa",
                            "aaa:" + state, value)
                        : $(el).attr("aria-" + state, value));
                })
			
                // getter
                : this.attr(isFF2 ? "aaa:" + state : "aria-" + state));
        }
	
    });


    //Additional selectors
    $.extend($.expr[':'], {
	
        data: function(a, i, m) {
            return $.data(a, m[3]);
        },
	
        // TODO: add support for object, area
        tabbable: function(a, i, m) {

            var nodeName = a.nodeName.toLowerCase();
            var isVisible = function(element) {
                function checkStyles(element) {
                    var style = element.style;
                    return (style.display != 'none' && style.visibility != 'hidden');
                }
			
                var visible = checkStyles(element);
			
                (visible && $.each($.dir(element, 'parentNode'), function() {
                    return (visible = checkStyles(this));
                }));
			
                return visible;
            };
		
            return (
                // in tab order
                a.tabIndex >= 0 &&
			
                ( // filter node types that participate in the tab order
				
                    // anchor tag
                    ('a' == nodeName && a.href) ||
				
                    // enabled form element
                    (/input|select|textarea|button/.test(nodeName) &&
                        'hidden' != a.type && !a.disabled)
                    ) &&
			
                // visible on page
                isVisible(a)
                );
		
        }
	
    });


    // $.widget is a factory to create jQuery plugins
    // taking some boilerplate code out of the plugin code
    // created by Scott GonzÃ¡lez and JÃ¶rn Zaefferer
    function getter(namespace, plugin, method, args) {
        function getMethods(type) {
            var methods = $[namespace][plugin][type] || [];
            return (typeof methods == 'string' ? methods.split(/,?\s+/) : methods);
        }
	
        var methods = getMethods('getter');
        if (args.length == 1 && typeof args[0] == 'string') {
            methods = methods.concat(getMethods('getterSetter'));
        }
        return ($.inArray(method, methods) != -1);
    }

    $.widget = function(name, prototype) {
        var namespace = name.split(".")[0];
        name = name.split(".")[1];
	
        // create plugin method
        $.fn[name] = function(options) {
            var isMethodCall = (typeof options == 'string'),
            args = Array.prototype.slice.call(arguments, 1);
		
            // prevent calls to internal methods
            if (isMethodCall && options.substring(0, 1) == '_') {
                return this;
            }
		
            // handle getter methods
            if (isMethodCall && getter(namespace, name, options, args)) {
                var instance = $.data(this[0], name);
                return (instance ? instance[options].apply(instance, args)
                    : undefined);
            }
		
            // handle initialization and non-getter methods
            return this.each(function() {
                var instance = $.data(this, name);
			
                // constructor
                (!instance && !isMethodCall &&
                    $.data(this, name, new $[namespace][name](this, options)));
			
                // method call
                (instance && isMethodCall && $.isFunction(instance[options]) &&
                    instance[options].apply(instance, args));
            });
        };
	
        // create widget constructor
        $[namespace] = $[namespace] || {};
        $[namespace][name] = function(element, options) {
            var self = this;
		
            this.widgetName = name;
            this.widgetEventPrefix = $[namespace][name].eventPrefix || name;
            this.widgetBaseClass = namespace + '-' + name;
		
            this.options = $.extend({},
                $.widget.defaults,
                $[namespace][name].defaults,
                $.metadata && $.metadata.get(element)[name],
                options);
		
            this.element = $(element)
            .bind('setData.' + name, function(e, key, value) {
                return self._setData(key, value);
            })
            .bind('getData.' + name, function(e, key) {
                return self._getData(key);
            })
            .bind('remove', function() {
                return self.destroy();
            });
		
            this._init();
        };
	
        // add widget prototype
        $[namespace][name].prototype = $.extend({}, $.widget.prototype, prototype);
	
        // TODO: merge getter and getterSetter properties from widget prototype
        // and plugin prototype
        $[namespace][name].getterSetter = 'option';
    };

    $.widget.prototype = {
        _init: function() {},
        destroy: function() {
            this.element.removeData(this.widgetName);
        },
	
        option: function(key, value) {
            var options = key,
            self = this;
		
            if (typeof key == "string") {
                if (value === undefined) {
                    return this._getData(key);
                }
                options = {};
                options[key] = value;
            }
		
            $.each(options, function(key, value) {
                self._setData(key, value);
            });
        },
        _getData: function(key) {
            return this.options[key];
        },
        _setData: function(key, value) {
            this.options[key] = value;
		
            if (key == 'disabled') {
                this.element[value ? 'addClass' : 'removeClass'](
                    this.widgetBaseClass + '-disabled');
            }
        },
	
        enable: function() {
            this._setData('disabled', false);
        },
        disable: function() {
            this._setData('disabled', true);
        },
	
        _trigger: function(type, e, data) {
            var eventName = (type == this.widgetEventPrefix
                ? type : this.widgetEventPrefix + type);
            e = e  || $.event.fix({
                type: eventName,
                target: this.element[0]
            });
            return this.element.triggerHandler(eventName, [e, data], this.options[type]);
        }
    };

    $.widget.defaults = {
        disabled: false
    };


    /** Mouse Interaction Plugin **/

    $.ui.mouse = {
        _mouseInit: function() {
            var self = this;
	
            this.element
            .bind('mousedown.'+this.widgetName, function(e) {
                return self._mouseDown(e);
            })
            .bind('click.'+this.widgetName, function(e) {
                if(self._preventClickEvent) {
                    self._preventClickEvent = false;
                    return false;
                }
            });
		
            // Prevent text selection in IE
            if ($.browser.msie) {
                this._mouseUnselectable = this.element.attr('unselectable');
                this.element.attr('unselectable', 'on');
            }
		
            this.started = false;
        },
	
        // TODO: make sure destroying one instance of mouse doesn't mess with
        // other instances of mouse
        _mouseDestroy: function() {
            this.element.unbind('.'+this.widgetName);
		
            // Restore text selection in IE
            ($.browser.msie
                && this.element.attr('unselectable', this._mouseUnselectable));
        },
	
        _mouseDown: function(e) {
            // we may have missed mouseup (out of window)
            (this._mouseStarted && this._mouseUp(e));
		
            this._mouseDownEvent = e;
		
            var self = this,
            btnIsLeft = (e.which == 1),
            elIsCancel = (typeof this.options.cancel == "string" ? $(e.target).parents().add(e.target).filter(this.options.cancel).length : false);
            if (!btnIsLeft || elIsCancel || !this._mouseCapture(e)) {
                return true;
            }
		
            this.mouseDelayMet = !this.options.delay;
            if (!this.mouseDelayMet) {
                this._mouseDelayTimer = setTimeout(function() {
                    self.mouseDelayMet = true;
                }, this.options.delay);
            }
		
            if (this._mouseDistanceMet(e) && this._mouseDelayMet(e)) {
                this._mouseStarted = (this._mouseStart(e) !== false);
                if (!this._mouseStarted) {
                    e.preventDefault();
                    return true;
                }
            }
		
            // these delegates are required to keep context
            this._mouseMoveDelegate = function(e) {
                return self._mouseMove(e);
            };
            this._mouseUpDelegate = function(e) {
                return self._mouseUp(e);
            };
            $(document)
            .bind('mousemove.'+this.widgetName, this._mouseMoveDelegate)
            .bind('mouseup.'+this.widgetName, this._mouseUpDelegate);
		
            return false;
        },
	
        _mouseMove: function(e) {
            // IE mouseup check - mouseup happened when mouse was out of window
            if ($.browser.msie && !e.button) {
                return this._mouseUp(e);
            }
		
            if (this._mouseStarted) {
                this._mouseDrag(e);
                return false;
            }
		
            if (this._mouseDistanceMet(e) && this._mouseDelayMet(e)) {
                this._mouseStarted =
                (this._mouseStart(this._mouseDownEvent, e) !== false);
                (this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e));
            }
		
            return !this._mouseStarted;
        },
	
        _mouseUp: function(e) {
            $(document)
            .unbind('mousemove.'+this.widgetName, this._mouseMoveDelegate)
            .unbind('mouseup.'+this.widgetName, this._mouseUpDelegate);
		
            if (this._mouseStarted) {
                this._mouseStarted = false;
                this._preventClickEvent = true;
                this._mouseStop(e);
            }
		
            return false;
        },
	
        _mouseDistanceMet: function(e) {
            return (Math.max(
                Math.abs(this._mouseDownEvent.pageX - e.pageX),
                Math.abs(this._mouseDownEvent.pageY - e.pageY)
                ) >= this.options.distance
            );
        },
	
        _mouseDelayMet: function(e) {
            return this.mouseDelayMet;
        },
	
        // These are placeholder methods, to be overriden by extending plugin
        _mouseStart: function(e) {},
        _mouseDrag: function(e) {},
        _mouseStop: function(e) {},
        _mouseCapture: function(e) {
            return true;
        }
    };

    $.ui.mouse.defaults = {
        cancel: null,
        distance: 1,
        delay: 0
    };

})(jQuery);
/*
    http://www.JSON.org/json2.js
    2010-03-20

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, strict: false */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (!this.JSON) {
    this.JSON = {};
}

(function () {

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf()) ?
            this.getUTCFullYear()   + '-' +
            f(this.getUTCMonth() + 1) + '-' +
            f(this.getUTCDate())      + 'T' +
            f(this.getUTCHours())     + ':' +
            f(this.getUTCMinutes())   + ':' +
            f(this.getUTCSeconds())   + 'Z' : null;
        };

        String.prototype.toJSON =
        Number.prototype.toJSON =
        Boolean.prototype.toJSON = function (key) {
            return this.valueOf();
        };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    gap,
    indent,
    meta = {    // table of character substitutions
        '\b': '\\b',
        '\t': '\\t',
        '\n': '\\n',
        '\f': '\\f',
        '\r': '\\r',
        '"' : '\\"',
        '\\': '\\\\'
    },
    rep;


    function quote(string) {

        // If the string contains no control characters, no quote characters, and no
        // backslash characters, then we can safely slap some quotes around it.
        // Otherwise we must also replace the offending characters with safe escape
        // sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ?
        '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string' ? c :
            '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' :
        '"' + string + '"';
    }


    function str(key, holder) {

        // Produce a string from holder[key].

        var i,          // The loop counter.
        k,          // The member key.
        v,          // The member value.
        length,
        mind = gap,
        partial,
        value = holder[key];

        // If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
            typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

        // If we were called with a replacer function, then call the replacer to
        // obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

        // What happens next depends on the value's type.

        switch (typeof value) {
            case 'string':
                return quote(value);

            case 'number':

                // JSON numbers must be finite. Encode non-finite numbers as null.

                return isFinite(value) ? String(value) : 'null';

            case 'boolean':
            case 'null':

                // If the value is a boolean or null, convert it to a string. Note:
                // typeof null does not produce 'null'. The case is included here in
                // the remote chance that this gets fixed someday.

                return String(value);

            // If the type is 'object', we might be dealing with an object or an array or
            // null.

            case 'object':

                // Due to a specification blunder in ECMAScript, typeof null is 'object',
                // so watch out for that case.

                if (!value) {
                    return 'null';
                }

                // Make an array to hold the partial results of stringifying this object value.

                gap += indent;
                partial = [];

                // Is the value an array?

                if (Object.prototype.toString.apply(value) === '[object Array]') {

                    // The value is an array. Stringify every element. Use null as a placeholder
                    // for non-JSON values.

                    length = value.length;
                    for (i = 0; i < length; i += 1) {
                        partial[i] = str(i, value) || 'null';
                    }

                    // Join all of the elements together, separated with commas, and wrap them in
                    // brackets.

                    v = partial.length === 0 ? '[]' :
                    gap ? '[\n' + gap +
                    partial.join(',\n' + gap) + '\n' +
                    mind + ']' :
                    '[' + partial.join(',') + ']';
                    gap = mind;
                    return v;
                }

                // If the replacer is an array, use it to select the members to be stringified.

                if (rep && typeof rep === 'object') {
                    length = rep.length;
                    for (i = 0; i < length; i += 1) {
                        k = rep[i];
                        if (typeof k === 'string') {
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ': ' : ':') + v);
                            }
                        }
                    }
                } else {

                    // Otherwise, iterate through all of the keys in the object.

                    for (k in value) {
                        if (Object.hasOwnProperty.call(value, k)) {
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ': ' : ':') + v);
                            }
                        }
                    }
                }

                // Join all of the member texts together, separated with commas,
                // and wrap them in braces.

                v = partial.length === 0 ? '{}' :
                gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' +
                mind + '}' : '{' + partial.join(',') + '}';
                gap = mind;
                return v;
        }
    }

    // If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

            // The stringify method takes a value and an optional replacer, and an optional
            // space parameter, and returns a JSON text. The replacer can be a function
            // that can replace values, or an array of strings that will select the keys.
            // A default replacer method can be provided. Use of the space parameter can
            // produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

            // If the space parameter is a number, make an indent string containing that
            // many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

            // If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

            // If there is a replacer, it must be a function or an array.
            // Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

            // Make a fake root object containing our value under the key of ''.
            // Return the result of stringifying the value.

            return str('', {
                '': value
            });
        };
    }


    // If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

            // The parse method takes a text and an optional reviver function, and returns
            // a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

                // The walk method is used to recursively walk the resulting structure so
                // that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


            // Parsing happens in four stages. In the first stage, we replace certain
            // Unicode characters with escape sequences. JavaScript handles many characters
            // incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                    ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

            // In the second stage, we run the text against regular expressions that look
            // for non-JSON patterns. We are especially concerned with '()' and 'new'
            // because they can cause invocation, and '=' because it can cause mutation.
            // But just to be safe, we want to reject all unexpected forms.

            // We split the second stage into 4 regexp operations in order to work around
            // crippling inefficiencies in IE's and Safari's regexp engines. First we
            // replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
            // replace all simple value tokens with ']' characters. Third, we delete all
            // open brackets that follow a colon or comma or that begin the text. Finally,
            // we look to see that the remaining characters are only whitespace or ']' or
            // ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/.
                test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').
                    replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
                    replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

                // In the third stage we use the eval function to compile the text into a
                // JavaScript structure. The '{' operator is subject to a syntactic ambiguity
                // in JavaScript: it can begin a block or an object literal. We wrap the text
                // in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

                // In the optional fourth stage, we recursively walk the new structure, passing
                // each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function' ?
                walk({
                    '': j
                }, '') : j;
            }

            // If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());
/*
 * jQuery UI Tabs @VERSION
 *
 * Copyright (c) 2007, 2008 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Tabs
 *
 * Depends:
 *	ui.core.js
 */
(function($) {

    $.widget("ui.tabs", {
        _init: function() {
            // create tabs
            this._tabify(true);
        },
        _setData: function(key, value) {
            if ((/^selected/).test(key))
                this.select(value);
            else {
                this.options[key] = value;
                this._tabify();
            }
        },
        length: function() {
            return this.$tabs.length;
        },
        _tabId: function(a) {
            return a.title && a.title.replace(/\s/g, '_').replace(/[^A-Za-z0-9\-_:\.]/g, '')
            || this.options.idPrefix + $.data(a);
        },
        ui: function(tab, panel) {
            return {
                options: this.options,
                tab: tab,
                panel: panel,
                index: this.$tabs.index(tab)
            };
        },
        _sanitizeSelector: function(hash) {
            return hash.replace(/:/g, '\\:'); // we need this because an id may contain a ":"
        },
        _cookie: function() {
            var cookie = this.cookie || (this.cookie = 'ui-tabs-' + $.data(this.element[0]));
            return $.cookie.apply(null, [cookie].concat($.makeArray(arguments)));
        },
        _tabify: function(init) {
		
            this.$lis = $('li:has(a[href])', this.element);
            this.$tabs = this.$lis.map(function() {
                return $('a', this)[0];
            });
            this.$panels = $([]);
		
            var self = this, o = this.options;
		
            this.$tabs.each(function(i, a) {
                // inline tab
                if (a.hash && a.hash.replace('#', '')) // Safari 2 reports '#' for an empty hash
                    self.$panels = self.$panels.add(self._sanitizeSelector(a.hash));
                // remote tab
                else if ($(a).attr('href') != '#') { // prevent loading the page itself if href is just "#"
                    $.data(a, 'href.tabs', a.href); // required for restore on destroy
                    $.data(a, 'load.tabs', a.href); // mutable
                    var id = self._tabId(a);
                    a.href = '#' + id;
                    var $panel = $('#' + id);
                    if (!$panel.length) {
                        $panel = $(o.panelTemplate).attr('id', id).addClass(o.panelClass)
                        .insertAfter(self.$panels[i - 1] || self.element);
                        $panel.data('destroy.tabs', true);
                    }
                    self.$panels = self.$panels.add($panel);
                }
                // invalid tab href
                else
                    o.disabled.push(i + 1);
            });
		
            // initialization from scratch
            if (init) {
			
                // attach necessary classes for styling if not present
                this.element.addClass(o.navClass);
                this.$panels.addClass(o.panelClass);
			
                // Selected tab
                // use "selected" option or try to retrieve:
                // 1. from fragment identifier in url
                // 2. from cookie
                // 3. from selected class attribute on <li>
                if (o.selected === undefined) {
                    if (location.hash) {
                        this.$tabs.each(function(i, a) {
                            if (a.hash == location.hash) {
                                o.selected = i;
                                return false; // break
                            }
                        });
                    }
                    else if (o.cookie) {
                        var index = parseInt(self._cookie(), 10);
                        if (index && self.$tabs[index]) o.selected = index;
                    }
                    else if (self.$lis.filter('.' + o.selectedClass).length)
                        o.selected = self.$lis.index( self.$lis.filter('.' + o.selectedClass)[0] );
                }
                o.selected = o.selected === null || o.selected !== undefined ? o.selected : 0; // first tab selected by default
			
                // Take disabling tabs via class attribute from HTML
                // into account and update option properly.
                // A selected tab cannot become disabled.
                o.disabled = $.unique(o.disabled.concat(
                    $.map(this.$lis.filter('.' + o.disabledClass),
                        function(n, i) {
                            return self.$lis.index(n);
                        } )
                    )).sort();
                if ($.inArray(o.selected, o.disabled) != -1)
                    o.disabled.splice($.inArray(o.selected, o.disabled), 1);
			
                // highlight selected tab
                this.$panels.addClass(o.hideClass);
                this.$lis.removeClass(o.selectedClass);
                if (o.selected !== null) {
                    this.$panels.eq(o.selected).removeClass(o.hideClass);
                    var classes = [o.selectedClass];
                    if (o.deselectable) classes.push(o.deselectableClass);
                    this.$lis.eq(o.selected).addClass(classes.join(' '));
				
                    // seems to be expected behavior that the show callback is fired
                    var onShow = function() {
                        self._trigger('show', null,
                            self.ui(self.$tabs[o.selected], self.$panels[o.selected]));
                    };
				
                    // load if remote tab
                    if ($.data(this.$tabs[o.selected], 'load.tabs'))
                        this.load(o.selected, onShow);
                    // just trigger show event
                    else onShow();
                }
			
                // clean up to avoid memory leaks in certain versions of IE 6
                $(window).bind('unload', function() {
                    self.$tabs.unbind('.tabs');
                    self.$lis = self.$tabs = self.$panels = null;
                });
			
            }
            // update selected after add/remove
            else
                o.selected = this.$lis.index( this.$lis.filter('.' + o.selectedClass)[0] );
		
            // set or update cookie after init and add/remove respectively
            if (o.cookie) this._cookie(o.selected, o.cookie);
		
            // disable tabs
            for (var i = 0, li; li = this.$lis[i]; i++)
                $(li)[$.inArray(i, o.disabled) != -1 && !$(li).hasClass(o.selectedClass) ? 'addClass' : 'removeClass'](o.disabledClass);
		
            // reset cache if switching from cached to not cached
            if (o.cache === false) this.$tabs.removeData('cache.tabs');
		
            // set up animations
            var hideFx, showFx;
            if (o.fx) {
                if (o.fx.constructor == Array) {
                    hideFx = o.fx[0];
                    showFx = o.fx[1];
                }
                else hideFx = showFx = o.fx;
            }
		
            // Reset certain styles left over from animation
            // and prevent IE's ClearType bug...
            function resetStyle($el, fx) {
                $el.css({
                    display: ''
                });
                if ($.browser.msie && fx.opacity) $el[0].style.removeAttribute('filter');
            }

            // Show a tab...
            var showTab = showFx ?
            function(clicked, $show) {
                $show.animate(showFx, showFx.duration || 'normal', function() {
                    $show.removeClass(o.hideClass);
                    resetStyle($show, showFx);
                    self._trigger('show', null, self.ui(clicked, $show[0]));
                });
            } :
            function(clicked, $show) {
                $show.removeClass(o.hideClass);
                self._trigger('show', null, self.ui(clicked, $show[0]));
            };
		
            // Hide a tab, $show is optional...
            var hideTab = hideFx ?
            function(clicked, $hide, $show) {
                $hide.animate(hideFx, hideFx.duration || 'normal', function() {
                    $hide.addClass(o.hideClass);
                    resetStyle($hide, hideFx);
                    if ($show) showTab(clicked, $show, $hide);
                });
            } :
            function(clicked, $hide, $show) {
                $hide.addClass(o.hideClass);
                if ($show) showTab(clicked, $show);
            };
		
            // Switch a tab...
            function switchTab(clicked, $li, $hide, $show) {
                var classes = [o.selectedClass];
                if (o.deselectable) classes.push(o.deselectableClass);
                $li.addClass(classes.join(' ')).siblings().removeClass(classes.join(' '));
                hideTab(clicked, $hide, $show);
            }
		
            // attach tab event handler, unbind to avoid duplicates from former tabifying...
            this.$tabs.unbind('.tabs').bind(o.event + '.tabs', function() {
			
                //var trueClick = e.clientX; // add to history only if true click occured, not a triggered click
                var $li = $(this).parents('li:eq(0)'),
                $hide = self.$panels.filter(':visible'),
                $show = $(self._sanitizeSelector(this.hash));
			
                // If tab is already selected and not deselectable or tab disabled or
                // or is already loading or click callback returns false stop here.
                // Check if click handler returns false last so that it is not executed
                // for a disabled or loading tab!
                if (($li.hasClass(o.selectedClass) && !o.deselectable)
                    || $li.hasClass(o.disabledClass)
                    || $(this).hasClass(o.loadingClass)
                    || self._trigger('select', null, self.ui(this, $show[0])) === false
                    ) {
                    this.blur();
                    return false;
                }
			
                o.selected = self.$tabs.index(this);
			
                // if tab may be closed
                if (o.deselectable) {
                    if ($li.hasClass(o.selectedClass)) {
                        self.options.selected = null;
                        $li.removeClass([o.selectedClass, o.deselectableClass].join(' '));
                        self.$panels.stop();
                        hideTab(this, $hide);
                        this.blur();
                        return false;
                    } else if (!$hide.length) {
                        self.$panels.stop();
                        var a = this;
                        self.load(self.$tabs.index(this), function() {
                            $li.addClass([o.selectedClass, o.deselectableClass].join(' '));
                            showTab(a, $show);
                        });
                        this.blur();
                        return false;
                    }
                }
			
                if (o.cookie) self._cookie(o.selected, o.cookie);
			
                // stop possibly running animations
                self.$panels.stop();
			
                // show new tab
                if ($show.length) {
                    var a = this;
                    self.load(self.$tabs.index(this), $hide.length ?
                        function() {
                            switchTab(a, $li, $hide, $show);
                        } :
                        function() {
                            $li.addClass(o.selectedClass);
                            showTab(a, $show);
                        }
                        );
                } else
                    throw 'jQuery UI Tabs: Mismatching fragment identifier.';
				
                // Prevent IE from keeping other link focussed when using the back button
                // and remove dotted border from clicked link. This is controlled via CSS
                // in modern browsers; blur() removes focus from address bar in Firefox
                // which can become a usability and annoying problem with tabs('rotate').
                if ($.browser.msie) this.blur();
			
                return false;
			
            });
		
            // disable click if event is configured to something else
            if (o.event != 'click') this.$tabs.bind('click.tabs', function(){
                return false;
            });
		
        },
        add: function(url, label, index) {
            if (index == undefined)
                index = this.$tabs.length; // append by default
		
            var o = this.options;
            var $li = $(o.tabTemplate.replace(/#\{href\}/g, url).replace(/#\{label\}/g, label));
            $li.data('destroy.tabs', true);
		
            var id = url.indexOf('#') == 0 ? url.replace('#', '') : this._tabId( $('a:first-child', $li)[0] );
		
            // try to find an existing element before creating a new one
            var $panel = $('#' + id);
            if (!$panel.length) {
                $panel = $(o.panelTemplate).attr('id', id)
                .addClass(o.hideClass)
                .data('destroy.tabs', true);
            }
            $panel.addClass(o.panelClass);
            if (index >= this.$lis.length) {
                $li.appendTo(this.element);
                $panel.appendTo(this.element[0].parentNode);
            }else {
                $li.insertBefore(this.$lis[index]);
                $panel.insertBefore(this.$panels[index]);
            }
		
            o.disabled = $.map(o.disabled,
                function(n, i) {
                    return n >= index ? ++n : n
                });
		
            this._tabify();
		
            if (this.$tabs.length == 1) {
                $li.addClass(o.selectedClass);
                $panel.removeClass(o.hideClass);
                var href = $.data(this.$tabs[0], 'load.tabs');
                if (href)
                    this.load(index, href);
            }
		
            // callback
            this._trigger('add', null, this.ui(this.$tabs[index], this.$panels[index]));
        },
        remove: function(index) {
            var o = this.options, $li = this.$lis.eq(index).remove(),
            $panel = this.$panels.eq(index).remove();
		
            // If selected tab was removed focus tab to the right or
            // in case the last tab was removed the tab to the left.
            if ($li.hasClass(o.selectedClass) && this.$tabs.length > 1)
                this.select(index + (index + 1 < this.$tabs.length ? 1 : -1));
		
            o.disabled = $.map($.grep(o.disabled, function(n, i) {
                return n != index;
            }),
            function(n, i) {
                return n >= index ? --n : n
            });
		
            this._tabify();
		
            // callback
            this._trigger('remove', null, this.ui($li.find('a')[0], $panel[0]));
        },
        enable: function(index) {
            var o = this.options;
            if ($.inArray(index, o.disabled) == -1)
                return;
		
            var $li = this.$lis.eq(index).removeClass(o.disabledClass);
            if ($.browser.safari) { // fix disappearing tab (that used opacity indicating disabling) after enabling in Safari 2...
                $li.css('display', 'inline-block');
                setTimeout(function() {
                    $li.css('display', 'block');
                }, 0);
            }
		
            o.disabled = $.grep(o.disabled, function(n, i) {
                return n != index;
            });
		
            // callback
            this._trigger('enable', null, this.ui(this.$tabs[index], this.$panels[index]));
        },
        disable: function(index) {
            var self = this, o = this.options;
            if (index != o.selected) { // cannot disable already selected tab
                this.$lis.eq(index).addClass(o.disabledClass);
			
                o.disabled.push(index);
                o.disabled.sort();
			
                // callback
                this._trigger('disable', null, this.ui(this.$tabs[index], this.$panels[index]));
            }
        },
        select: function(index) {
            // TODO make null as argument work
            if (typeof index == 'string')
                index = this.$tabs.index( this.$tabs.filter('[href$=' + index + ']')[0] );
            this.$tabs.eq(index).trigger(this.options.event + '.tabs');
        },
        load: function(index, callback) { // callback is for internal usage only
		
            var self = this, o = this.options, $a = this.$tabs.eq(index), a = $a[0],
            bypassCache = callback == undefined || callback === false, url = $a.data('load.tabs');
		
            callback = callback || function() {};
		
            // no remote or from cache - just finish with callback
            if (!url || !bypassCache && $.data(a, 'cache.tabs')) {
                callback();
                return;
            }
		
            // load remote from here on
		
            var inner = function(parent) {
                var $parent = $(parent), $inner = $parent.find('*:last');
                return $inner.length && $inner.is(':not(img)') && $inner || $parent;
            };
            var cleanup = function() {
                self.$tabs.filter('.' + o.loadingClass).removeClass(o.loadingClass)
                .each(function() {
                    if (o.spinner)
                        inner(this).parent().html(inner(this).data('label.tabs'));
                });
                self.xhr = null;
            };
		
            if (o.spinner) {
                var label = inner(a).html();
                inner(a).wrapInner('<em></em>')
                .find('em').data('label.tabs', label).html(o.spinner);
            }
		
            var ajaxOptions = $.extend({}, o.ajaxOptions, {
                url: url,
                success: function(r, s) {
                    $(self._sanitizeSelector(a.hash)).html(r);
                    cleanup();
				
                    if (o.cache)
                        $.data(a, 'cache.tabs', true); // if loaded once do not load them again
				
                    // callbacks
                    self._trigger('load', null, self.ui(self.$tabs[index], self.$panels[index]));
                    try {
                        o.ajaxOptions.success(r, s);
                    }
                    catch (e) {}
				
                    // This callback is required because the switch has to take
                    // place after loading has completed. Call last in order to
                    // fire load before show callback...
                    callback();
                }
            });
            if (this.xhr) {
                // terminate pending requests from other tabs and restore tab label
                this.xhr.abort();
                cleanup();
            }
            $a.addClass(o.loadingClass);
            self.xhr = $.ajax(ajaxOptions);
        },
        url: function(index, url) {
            this.$tabs.eq(index).removeData('cache.tabs').data('load.tabs', url);
        },
        destroy: function() {
            var o = this.options;
            this.element.unbind('.tabs')
            .removeClass(o.navClass).removeData('tabs');
            this.$tabs.each(function() {
                var href = $.data(this, 'href.tabs');
                if (href)
                    this.href = href;
                var $this = $(this).unbind('.tabs');
                $.each(['href', 'load', 'cache'], function(i, prefix) {
                    $this.removeData(prefix + '.tabs');
                });
            });
            this.$lis.add(this.$panels).each(function() {
                if ($.data(this, 'destroy.tabs'))
                    $(this).remove();
                else
                    $(this).removeClass([o.selectedClass, o.deselectableClass,
                        o.disabledClass, o.panelClass, o.hideClass].join(' '));
            });
            if (o.cookie)
                this._cookie(null, o.cookie);
        }
    });

    $.extend($.ui.tabs, {
        version: '@VERSION',
        getter: 'length',
        defaults: {
            // basic setup
            deselectable: false,
            event: 'click',
            disabled: [],
            cookie: null, // e.g. { expires: 7, path: '/', domain: 'jquery.com', secure: true }
            // Ajax
            spinner: 'Loading&#8230;',
            cache: false,
            idPrefix: 'ui-tabs-',
            ajaxOptions: null,
            // animations
            fx: null, // e.g. { height: 'toggle', opacity: 'toggle', duration: 200 }
            // templates
            tabTemplate: '<li><a href="#{href}"><span>#{label}</span></a></li>',
            panelTemplate: '<div></div>',
            // CSS class names
            navClass: 'ui-tabs-nav',
            selectedClass: 'ui-tabs-selected',
            deselectableClass: 'ui-tabs-deselectable',
            disabledClass: 'ui-tabs-disabled',
            panelClass: 'ui-tabs-panel',
            hideClass: 'ui-tabs-hide',
            loadingClass: 'ui-tabs-loading'
        }
    });

    /*
 * Tabs Extensions
 */

    /*
 * Rotate
 */
    $.extend($.ui.tabs.prototype, {
        rotation: null,
        rotate: function(ms, continuing) {
		
            continuing = continuing || false;
		
            var self = this, t = this.options.selected;
		
            function start() {
                self.rotation = setInterval(function() {
                    t = ++t < self.$tabs.length ? t : 0;
                    self.select(t);
                }, ms);
            }
		
            function stop(e) {
                if (!e || e.clientX) { // only in case of a true click
                    clearInterval(self.rotation);
                }
            }
		
            // start interval
            if (ms) {
                start();
                if (!continuing)
                    this.$tabs.bind(this.options.event + '.tabs', stop);
                else
                    this.$tabs.bind(this.options.event + '.tabs', function() {
                        stop();
                        t = self.options.selected;
                        start();
                    });
            }
            // stop interval
            else {
                stop();
                this.$tabs.unbind(this.options.event + '.tabs', stop);
            }
        }
    });

})(jQuery);
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/// Create the Namespace Manager that we'll use to
/// make creating namespaces a little easier.

if (typeof Namespace == 'undefined') var Namespace = {};
if (!Namespace.Manager) Namespace.Manager = {};

Namespace.Manager = {
    Register:function(namespace){
        namespace = namespace.split('.');

        if(!window[namespace[0]]) window[namespace[0]] = {};

        var strFullNamespace = namespace[0];
        for(var i = 1; i < namespace.length; i++)
        {
            strFullNamespace += "." + namespace[i];
            eval("if(!window." + strFullNamespace + ")window." + strFullNamespace + "={};");
        }
    }
};

//
Namespace.Manager.Register("fokus.openride.mobclient.controller");
Namespace.Manager.Register("fokus.openride.mobclient.controller.modules");

fokus.openride.mobclient.controller.serverconnector = function(){
    
    /* ------ private variabeles and methods ------ */

    callbackWrapper = function(response, cbFunction) {
        // Check whether the session has expired, i.e. if the reponse contains an HTML #loginForm element:
        if (typeof response == "string" && response.indexOf("loginForm") != -1) {
            // Need to reload -> require the user to login again
            location.href="./";       
        }else if (typeof cbFunction == 'function'){

            // Coninue with actual callback function
            cbFunction(response, "error");
        }
    }

    /* ------ public variabeles and methods ------ */
    
    return {
        // Base URI - Leave empty for clients runnning on the same host:
        baseURI : '',
        // ..or set server IP + port number for other scenarios, e.g. for iPhone/PhoneGap client:
        //baseURI : 'http://193.174.152.244:3003',

        POST : function(scopeURI, asynch, data, successcallback, errorcallback){
            $.ajax({
                url: fokus.openride.mobclient.controller.serverconnector.baseURI+scopeURI,
                async: asynch,
                data: JSON.stringify(data),
                //                beforeSend: function() {
                //                    showProgressDialog();
                //                },
                //                complete: function() {
                //                    hideProgressDialog();
                //                },
                success: function(response) {
                    callbackWrapper(response, successcallback);
                },
                error: function(response) {
                    callbackWrapper(response, errorcallback);
                },
                type: 'POST'
            });

        },

        GET : function(scopeURI, asynch, successcallback, errorcallback){
            $.ajax({
                url: fokus.openride.mobclient.controller.serverconnector.baseURI+scopeURI,
                async: asynch,
                //                beforeSend: function() {
                //                    showProgressDialog();
                //                },
                //                complete: function() {
                //                    hideProgressDialog();
                //                },
                success: function(response) {
                    callbackWrapper(response, successcallback);
                },
                error: function(response) {
                    callbackWrapper(response, errorcallback);
                },
                type: 'GET'
            });
        },

        PUT : function(scopeURI, asynch, data, successcallback, errorcallback){
            $.ajax({
                url: fokus.openride.mobclient.controller.serverconnector.baseURI+scopeURI,
                async: asynch,
                data: JSON.stringify(data),
                //                beforeSend: function() {
                //                    showProgressDialog();
                //                },
                //                complete: function() {
                //                    hideProgressDialog();
                //                },
                success: function(response) {
                    callbackWrapper(response, successcallback);
                },
                error: function(response) {
                    callbackWrapper(response, errorcallback);
                },
                type: 'PUT'
            });
        },

        PUTaction : function(scopeURI, asynch, successcallback, errorcallback){
            $.ajax({
                url: fokus.openride.mobclient.controller.serverconnector.baseURI+scopeURI,
                async: asynch,
                //                beforeSend: function() {
                //                    showProgressDialog();
                //                },
                //                complete: function() {
                //                    hideProgressDialog();
                //                },
                success: function(response) {
                    callbackWrapper(response, successcallback);
                },
                error: function(response) {
                    callbackWrapper(response, errorcallback);
                },
                type: 'PUT'
            });
        },

        DELETE : function(scopeURI, asynch, successcallback, errorcallback){
            $.ajax({
                url: fokus.openride.mobclient.controller.serverconnector.baseURI+scopeURI,
                async: asynch,
                //                beforeSend: function() {
                //                    showProgressDialog();
                //                },
                //                complete: function() {
                //                    hideProgressDialog();
                //                },
                success: function(response) {
                    callbackWrapper(response, successcallback);
                },
                error: function(response) {
                    callbackWrapper(response, errorcallback);
                },
                type: 'DELETE'
            });
        }
    };
}();


/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

fokus.openride.mobclient.controller.modules.nativemodule = function(){

    /* ------ private variabeles and methods ------ */
    var userlocation;

    function processlocation(location){
        userlocation = location;
    }

    function processgearslocation(location){
        userlocation = new Object();
        userlocation.coords = {};
        userlocation.coords.latitude = location.latitude;
        userlocation.coords.longitude = location.longitude;
    }

    function processerror(){
        return null;
    }

    /* ------ public variabeles and methods ------ */
    return {

        getUserLocation: function(){

            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(processlocation, processerror);
            }else if(window.google && google.gears){
                try {
                    var geolocation = google.gears.factory.create('beta.geolocation');
                    geolocation.getCurrentPosition(processgearslocation, processerror,
                    {
                        enableHighAccuracy: true,
                        gearsRequestAddress: true
                    });
                }catch (e) {
                    return null;
                }
            }else{
                return null;
            }
            return userlocation;
        }
    };
}();
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

fokus.openride.mobclient.controller.modules.mapmanager = function(){
    
    // --- --- private variables
    var srvconn = fokus.openride.mobclient.controller.serverconnector;
	
    // --- main map entities
    var map;
    var geocoder;
    var marker;
    var startmarker;
    var destmarker;
    var mapCenter;
    var usedAdressInput;
    var maximalZoom = 17;
    
    // --- icon resources
	
    //default icon vars
    var defIconPath = "../img/defaultpinicon.png";
    var defIconSizeX = 40;
    var defIconSizeY = 40;
    var defShadowPath = "../img/thumbshadow.png";
	
    //route-start icon var
    var mainstartIconPath = "../img/startred.png";
    var mainstartIconSizeX = 40;
    var mainstartIconSizeY = 40;
    
    //route destination point vars
    var maindstIconPath = "../img/zielred.png";
    var maindstIconSizeX = 40;
    var maindstIconSizeY = 40;
    
    //viapt start point vars
    var mainviaptstartIconPath = "../img/mapicon2.png";
    var mainviaptstartIconSizeX = 21;
    var mainviaptstartIconSizeY = 30;
    
    //via destination point vars
    var mainviaptdstIconPath = "../img/flagrdicon.png";
    var mainviaptdstIconSizeX = 20;
    var mainviaptdstIconSizeY = 15;
	
    //via destination point vars
    var wayPtIconPath = "../img/waypoint.png";
    var wayPtIconSizeX = 28;
    var wayPtIconSizeY = 40;
	
    var riderStartIconSizeX = 21;
    var riderStartIconSizeY = 30;
	
    var riderDestIconSizeX = 23;
    var riderDestIconSizeY = 17;
    
    var thumbiconpaths = ["../img/thumbcol1.png", "../img/thumbcol2.png", "../img/thumbcol3.png", "../img/thumbcol4.png", "../img/thumbcol5.png", "../img/thumbcol6.png"];
    var flagiconpaths = ["../img/flagcol1.png", "../img/flagcol2.png", "../img/flagcol3.png", "../img/flagcol4.png", "../img/flagcol5.png", "../img/flagcol6.png"];
	
    var ridermarkers = new Array();
	
    // --- state vars
	
    var mapMode = 0;//default
    var PICK_LOC_MODE = 0;
    var SIMPLE_ROUTE_MODE = 1;
    var VIAPT_ROUTE_MODE = 2;
	
    var routepathlatlns;
    var route;//PolyLine
    var routeopts//PolylineOptions
    var viastartptlatlns;
    var viadestptlatlns;
	
    var combinedlatlns;
    var mappolyline = '';
    var routecorrectionptlatlns = '';
    var partialroutes = '';
    var partialroutesloaded = false;
    var markerposindex = 1;

    var DUMMYPOSITION = new google.maps.LatLng(47.66029,9.432982);
	
    /*** define inner class DivMarker, which extends google.maps.OverlayView()
	 * and allows adding text-or image based markers as overlay onto our map*/
	
    /*function DivMarker(divPosLatLng, overlayMap){

    	google.maps.OverlayView.call(this);

    	this.latlng_ = divPosLatLng;

    	// trigger a call to panes_changed -> calls draw().

    	//this.setMap(overlayMap);
  	}

  	DivMarker.prototype = new google.maps.OverlayView();

  	DivMarker.prototype.draw = function() { 

    	var me = this;

	    // Check if the div has been created.
	
	    var div = this.div_;

	    if (!div) {
			// Create a overlay text DIV
      		div = this.div_ = document.createElement('DIV');

      		// Create the DIV representing our DivMarker

      		div.style.border = "0px solid none";
			div.style.position = "absolute";
			div.style.paddingLeft = "0px";
			div.style.cursor = 'pointer';
	        google.maps.event.addDomListener(div, "click", function(event) {
        		google.maps.event.trigger(me, "click");
      		});

			// Then add the overlay to the DOM
			var panes = this.get_panes();
			panes.overlayLayer.appendChild(div);
    	}

	    // Position the overlay 
    	var point = this.get_projection().fromLatLngToDivPixel(this.latlng_);

    	if(point){
			div.style.left = point.x + 'px';
			div.style.top = point.y + 'px';
		}
  	};


	DivMarker.prototype.remove = function() {

	    // Check if the overlay was on the map and needs to be removed.
	    if (this.div_){
			this.div_.parentNode.removeChild(this.div_);
			this.div_ = null;
	    }
	};
		
	DivMarker.setText = function(text){
		
		// Check if the div has been created.
	    var div = this.div_;
	    if (!div) {
			// Create a overlay text DIV
			div = this.div_ = document.createElement('DIV');
		}
		div.innerHTML = this.text_ = text;
	}
		
	DivMarker.setImage = function(imgPath){		
		// Check if the div has been created.
	    var div = this.div_;
	    if (!div) {
			// Create a overlay text DIV
			div = this.div_ = document.createElement('DIV');
		}
		var img = document.createElement("img");
		img.src = imgPath;
		div.appendChild(img);
	}*/
	
    /** end of DivMarker code*/

    // --- --- public variables / methods

    return {
		
        username : 'user',

        currentFormattedAddress: "1",
        revgeocodedAddr : "",

        updateAddressInfo: function (addressdivid){

            //avoid collision with "this" from google maps namespace"
            var mapmanagerTHIS = this;

            var addr = document.getElementById(addressdivid);
            /*if(!geocoder)geocoder = new google.maps.Geocoder();*/
            if (geocoder) {
                geocoder.geocode({
                    'latLng': mapCenter
                }, function(results, status) {
                    if (status == google.maps.GeocoderStatus.OK){
                        if (results[0]){
                            addr.value = results[0].formatted_address;
                            mapmanagerTHIS.currentFormattedAddress = results[0].formatted_address;
                        }else {
                            addr.value = "No address Found!   ";
                        }
                    }
                    else {
                        addr.value = "No address Found!   ";
                    /*addr.value = "keine Adresse gefunden, status: " + status;*/
                    }

                });
            }
        },
    
        //initialize map with draggable icon etc.
        initialize: function (mapdivid, addressinputid, userlocation){
			
            usedAdressInput = addressinputid;

            //avoid collision with "this" from google maps namespace"
            var mapmanagerTHIS = this;

            geocoder = new google.maps.Geocoder();
            //mapCenter = new google.maps.LatLng(52.525798, 13.314266);
            mapCenter = userlocation;

            //parametrize map
            var mapOptions = {
                zoom:13,
                center: mapCenter,
                disableDefaultUI: true,
                mapTypeControl: false,
                navigationControl: false,
                /*navigationControlOptions: {
                    style: google.maps.NavigationControlStyle.DEFAULT,*/
                /*position: google.maps.ControlPosition.TOP_LEFT
                },*/
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                disableDoubleClickZoom: true
            }

            //create map
            map = new google.maps.Map(document.getElementById(mapdivid), mapOptions);
			
            //configure map ui corresponding to current state
            if(mapMode==PICK_LOC_MODE){
                mapmanagerTHIS.updateAddressInfo(addressinputid);
                createMarker('default', mapCenter);

                google.maps.event.addListener(marker, "dragstart", function() {
                    });

                google.maps.event.addListener(marker, "dragend", function() {
                    setCenter(marker.getPosition());
                    mapmanagerTHIS.updateAddressInfo(addressinputid);
                });

                google.maps.event.addListener(marker, "click", function() {
                    map.setZoom(15);
					
                });

                google.maps.event.addListener(map, "click", function(event) {
                    setCenter(event.latLng);
                    mapmanagerTHIS.updateAddressInfo(addressinputid);
                });
            }
			
            if(mapMode==SIMPLE_ROUTE_MODE){
                this.drawSimpleRoute();
            }else if(mapMode==VIAPT_ROUTE_MODE){
                this.drawRouteWithViaPts();
            }
        },
		
        setMapMode : function(mode){
            if(mode>=0)//caller takes care of upper bound, to allow adding more states
                mapMode = mode;
            else{
        //handle error
        }
        },
		
        setRoutePath : function(routeArray){
            routepathlatlns = routeArray;
        },
		
        setViaStartPoints : function(viaptArray){
            viastartptlatlns = viaptArray;
        },
		
        resetViaStartPoints : function(){
            viastartptlatlns = '';
        },
		
        setViaDestPoints : function(viaptArray){
            viadestptlatlns = viaptArray;
        },
		
        resetViaDestPoints : function(){
            viadestptlatlns = '';
        },
		
        getRoutePath : function(){
            return routepathlatlns;
        },
		
        getViaStartPoints : function(){
            return viaptstartlatlns;
        },
		
        getViaDestPoints : function(){
            return viadestptlatlns;
        },
		
        fitToBounds : function(bounds){
            map.fitBounds(bounds);
        },
		
        parsesimpleroutecoords : function(routexml){
            var routearr = new Array();
            var routeExists = $(routexml).find('hasroute').text();
            if(routeExists!= null && routeExists != 'undefined' && typeof routeExists != 'undefined'){
                if(routeExists == 'true'){
                    $(routexml).find('coordinates').each(function(){
                        var latlnstr = $(this).text();
                        var latlnstrarr = latlnstr.split(' ');
                        for(var i=0;i<latlnstrarr.length-1;i++){
                            var coordstr = latlnstrarr[i];

                            var separatorindex = coordstr.indexOf(',');
                            var latstr = coordstr.substr(0, separatorindex);
                            var lnstr = coordstr.substr(separatorindex+1, coordstr.length-separatorindex+1);
	
                            var lat = parseFloat(latstr);
                            var ln = parseFloat(lnstr);
	
                            var latlnObj = new google.maps.LatLng(lat, ln);
                            routearr.push(latlnObj);
                        }
                    });
                    return routearr;
                }else{//no route
                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(null,'validateError',null,'There was no route found.');
                    return false;
                }
            }
        },
		
        getPartialRoutes : function(){

            partialroutes = new Array();

            partialroutesloaded = true;
	
            if(routecorrectionptlatlns.length && routecorrectionptlatlns.length>0){
                for(var i= 0; i<routecorrectionptlatlns.length; i++ ){
                    var startlat = '';
                    var startln = '';
                    var dstlat = '';
                    var dstln = '';
                    var corrpt	= '';
	
                    if(i==0){
                        corrpt = routecorrectionptlatlns[i].getPosition();
                        startlat = routepathlatlns[0].lat();
                        startln = routepathlatlns[0].lng();
                        dstlat = corrpt.lat();
                        dstln = corrpt.lng();
                    }
                    else if(i != 0 && i == routecorrectionptlatlns.length-1){
                        corrpt = routecorrectionptlatlns[i].getPosition();
                        startlat = corrpt.lat();
                        startln = corrpt.lng();
                        dstlat = routepathlatlns[routepathlatlns.length-1].lat();
                        dstln = routepathlatlns[routepathlatlns.length-1].lng();
                    }else{
                        var lastcorrpt = routecorrectionptlatlns[i-1].getPosition();
                        startlat = lastcorrpt.lat();
                        startln = lastcorrpt.lng();
                        corrpt = routecorrectionptlatlns[i].getPosition();
                        dstlat = corrpt.lat();
                        dstln = corrpt.lng();
                    }
					

                    var mapmanagerTHIS = this;
                    srvconn.GET('/OpenRideServer-RS/resources/users/'+this.username+'/routes/new,'+startlat+','+startln+','+dstlat+','+dstln, false, function(routexml){
                        var route = mapmanagerTHIS.parsesimpleroutecoords(routexml);
                        if(route != false)
                            partialroutes.push(route);
                    }, function(){
                        partialroutesloaded = false;
                        alert('The route could not be generated with this waypoint!');
                    });
                }

				
                if(routecorrectionptlatlns.length==1){
                    corrpt = routecorrectionptlatlns[0].getPosition();
                    startlat = corrpt.lat();
                    startln = corrpt.lng();
                    dstlat = routepathlatlns[routepathlatlns.length-1].lat();
                    dstln = routepathlatlns[routepathlatlns.length-1].lng();
                }
				
                var mapmanagerTHIS = this;
                srvconn.GET('/OpenRideServer-RS/resources/users/'+this.username+'/routes/new,'+startlat+','+startln+','+dstlat+','+dstln, false, function(routexml){
                    var route = mapmanagerTHIS.parsesimpleroutecoords(routexml);
                    if(route != false)
                        partialroutes.push(route);
                }, function(){
                    partialroutesloaded = false;
                    alert('The route could not be generated with this waypoint!');
                });
            }
        },


        drawPartialRoutes : function(partialroutearr){
			
            if(partialroutesloaded){
                combinedlatlns = new Array();
				
                for(var j=0;j<partialroutearr.length;j++){
                    var partialroute = partialroutearr[j];
					
                    for(var k=0; k<partialroute.length; k++){

                        combinedlatlns.push(partialroute[k]);
                    //	                	if(!(j>0 && k==0)){
                    //	                    }
                    }
                }
				
                //configure and draw polyline from route points
                mappolyline.setMap(null);
                mappolyline.setPath(combinedlatlns);
                //draw polyline onto map
                mappolyline.setMap(map);
					
                //create bounds object
                var latlngbounds = new google.maps.LatLngBounds();
                //add all route points to the bounds, to allow zooming to route span
                var len = combinedlatlns.length;
                for(var l=0; l<len;l++){
                    latlngbounds.extend(combinedlatlns[l]);
                }
					
                //adjust map zoom and center
                map.fitBounds(latlngbounds);
            //map.setCenter(latlngbounds.getCenter());
            }
            else{
        //draw something, if partial routes cannot be loaded - currently route stays unchanged + infomsg
        }
        },
		
        addCorrectionPoint : function(){
	
            var pos = '';
			
            /*if(routecorrectionptlatlns!='' && routecorrectionptlatlns.length > 0)
			
			if(routecorrectionptlatlns.length && routecorrectionptlatlns.length>2){
				markerposindex+=1;
				if(markerposindex<routepathlatlns.length-1);
					pos = routepathlatlns[1];
			}*/
            pos = routepathlatlns[routepathlatlns.length-2];
	            
            var ptimage = new google.maps.MarkerImage(wayPtIconPath,
                new google.maps.Size(wayPtIconSizeX, wayPtIconSizeY),
                new google.maps.Point(0,0),
                new google.maps.Point(wayPtIconSizeX/2+2, (wayPtIconSizeY)));
            
            var ptshadow = new google.maps.MarkerImage(defShadowPath,
                new google.maps.Size(29, 34),
                new google.maps.Point(0,0),
                new google.maps.Point(-6, 35));
            
            var ptmarker = new google.maps.Marker({
                position: pos,
                map: map,
                shadow: ptshadow,
                icon: ptimage,
                //shape: shape,
                draggable: true,
                clickable: false
            });
            
            var lastpos = ptmarker.getPosition();

            google.maps.event.addListener(ptmarker, "dragstart", function() {
                lastpos = ptmarker.getPosition();
            });
			
            var mapmanagerTHIS = this;
            google.maps.event.addListener(ptmarker, "dragend", function() {
                mapmanagerTHIS.getPartialRoutes();
                if(partialroutesloaded){
                    setCenter(ptmarker.getPosition());
                    mapmanagerTHIS.drawPartialRoutes(partialroutes);
                }else ptmarker.setPosition(lastpos);
            });


            if(routecorrectionptlatlns == ''){
                routecorrectionptlatlns = new Array();
            }

            routecorrectionptlatlns.push(ptmarker);

        //            mapmanagerTHIS.getPartialRoutes();
        //            mapmanagerTHIS.drawPartialRoutes(partialroutes);
        },
		
        drawSimpleRoute : function(){
            //check, if route has been fetched from OR-Server
            if(routepathlatlns != 'undefined' && typeof routepathlatlns != 'undefined'){
                if(routepathlatlns.length>=2){
					
                    //configure and draw polyline from route points
                    mappolyline = new google.maps.Polyline({
                        path : routepathlatlns,
                        strokeColor: "#96bd0d",
                        strokeOpacity: 1.0,
                        strokeWeight: 2
                    });
					
                    //create and add start and destination marker
                    createMarker('mainstart', routepathlatlns[0]);
                    createMarker('maindst', routepathlatlns[routepathlatlns.length-1]);
					
                    //create bounds object
                    var bounds = new google.maps.LatLngBounds();
					
                    //add all route points to the bounds, to allow zooming to route span
                    var len = routepathlatlns.length;
                    for(var i=0; i<len;i++)
                    {
                        bounds.extend(routepathlatlns[i]);
                    }
					
                    //adjust map zoom and center
                    map.fitBounds(bounds);
                    //map.setCenter(bounds.getCenter());
					
                    //draw polyline onto map
                    mappolyline.setMap(map);
                }
            }else{// no route
                fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(null,'validateError',null,'no route (in draw)');
            }
			
        //overlay debug test
        /*var textMarker = DivMarker(map.getCenter(), map);
			textMarker.setText("test");*/
        },
		
        drawRouteWithViaPts : function(){
            //draw route of drive
            this.drawSimpleRoute();
			
            //add marker at rider fetch positions
            if (viastartptlatlns != 'undefined' && typeof viastartptlatlns != 'undefined') {
                for(var index=0;index<viastartptlatlns.length;index++){
                    
                    var mystartimage = new google.maps.MarkerImage(thumbiconpaths[(index%thumbiconpaths.length)],
                        new google.maps.Size(riderStartIconSizeX, riderStartIconSizeY),
                        new google.maps.Point(0,0),
                        new google.maps.Point(5, riderStartIconSizeY));
                        
                    var mystartshadow = new google.maps.MarkerImage(defShadowPath,
                        new google.maps.Size(29, 34),
                        new google.maps.Point(0,0),
                        new google.maps.Point(-6, 35));
                        
                    var mystartmarker = new google.maps.Marker({
                        position: viastartptlatlns[index],
                        map: map,
                        shadow: mystartshadow,
                        icon: mystartimage,
                        //shape: shape,
                        draggable: false,
                        clickable: false,
                        zIndex: index
                    });
                    ridermarkers.push(mystartmarker);
                }
            }
            else{
            //no via start points
            }
            if (viadestptlatlns != 'undefined' && typeof viadestptlatlns != 'undefined') {
                for(var index=0;index<viadestptlatlns.length;index++){
					
                    var mydestimage = new google.maps.MarkerImage(flagiconpaths[(index%flagiconpaths.length)],
                        new google.maps.Size(riderDestIconSizeX, riderDestIconSizeY),
                        new google.maps.Point(0,0),
                        new google.maps.Point(5, riderDestIconSizeY));
                        
                    var mydestshadow = new google.maps.MarkerImage(defShadowPath,
                        new google.maps.Size(29, 34),
                        new google.maps.Point(0,0),
                        new google.maps.Point(-6, 35));
                        
                    var mydestmarker = new google.maps.Marker({
                        position: viadestptlatlns[index],
                        map: map,
                        shadow: mydestshadow,
                        icon: mydestimage,
                        //shape: shape,
                        draggable: false,
                        clickable: false,
                        zIndex: index
                    });
                        
                    ridermarkers.push(mydestmarker);
                }
            }
            else{
        //no via dest points
        }
        },
		
        resetRiderMarkers : function(){
            for(var i=0;i<ridermarkers.length;i++){
                ridermarkers[i].setMap(null);
            }
            this.resetViaStartPoints();
            this.resetViaDestPoints();
            ridermarkers.length=0;
        },

        geocodeAddressFromInput: function (addressInputDivId){

            //avoid collision with "this" from google maps namespace"
            var mapmanagerTHIS = this;

            var address = document.getElementById(addressInputDivId).value;
            if(!geocoder)geocoder = new google.maps.Geocoder();
            if (geocoder) {
                geocoder.geocode( {
                    'address': address
                }, function(results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        mapCenter = results[0].geometry.location;
                        setCenter(mapCenter);
                        mapmanagerTHIS.updateAddressInfo(addressInputDivId);
                    } else {
                        address = "Geocode was not successful for the following reason: " + status;
                    }
                });
            }
        },

        insertRevGeocodedAddr : function(latLn, htmlelemid){
        	
            //var latLng = correctPosition(new google.maps.LatLng(latLn.coords.latitude, latLn.coords.longitude));
            var latLng = new google.maps.LatLng(latLn.coords.latitude, latLn.coords.longitude);
            geocoder = new google.maps.Geocoder();
            if (geocoder) {
                geocoder.geocode({
                    'latLng': latLng
                }, function(results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[0]){
                            document.getElementById(htmlelemid).innerHTML = "Location:" + results[0].formatted_address;
                            document.getElementById(htmlelemid).latln = results[0].geometry.location.lat() + ',' + results[0].geometry.location.lng();
                        }
                    }else {
                        document.getElementById(htmlelemid).innerHTML = "Location: undetermined!"
                        document.getElementById(htmlelemid).latln = 'none';
                    }
                });
            }
            document.getElementById(htmlelemid).innerHTML = "Location: undetermined!"
            document.getElementById(htmlelemid).latln = 'none';
        },

        setRevGeocodedAddr : function(lat, ln){

            //avoid collision with "this" from google maps namespace"
            var mapmanagerTHIS = this;

            var latLng = new google.maps.LatLng(lat, ln);
            if(!geocoder)geocoder = new google.maps.Geocoder();
            if (geocoder) {
                geocoder.geocode({
                    'latLng': latLng
                }, function(results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[0]){
                            mapmanagerTHIS.revgeocodedAddr = results[0].formatted_address;
                        }
                    }else {
                        mapmanagerTHIS.revgeocodedAddr = "Location: undetermined!"
                    }
                });
            }
            mapmanagerTHIS.revgeocodedAddr = "Location: undetermined!"
        },



        getLocationFromString : function(locationAsString){
            if(!geocoder)geocoder = new google.maps.Geocoder();
            if (geocoder) {
                geocoder.geocode( {
                    'address': locationAsString
                }, function(results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        return results[0].geometry.location;
                    } else {
                        return DUMMYPOSITION;
                    }
                });
            }
        },

        getCenterPosition : function(){
            return mapCenter;
        },

        getLocationLatFromString : function(locationAsString){
            this.getLocationFromString(locationAsString).lat();
        },

        getLocationLonFromString : function(locationAsString){
            this.getLocationFromString(locationAsString).lng();
        },
		
        setMapToLocation : function(centerLatLon){
            setCenter(centerLatLon);
            this.updateAddressInfo(usedAdressInput);
        },
		
        zoomIn : function(){
            var currentZoom = map.getZoom();
            if(currentZoom < maximalZoom)
                map.setZoom(currentZoom + 1);
        },
		
        zoomOut : function(){
            var currentZoom = map.getZoom();
            if(currentZoom > 0)
                map.setZoom(currentZoom - 1);
        }

    };

    /**
     * Checks wether the given position is inside the used map material or not.
     * If so, the function returns the positions.
     * If not, a new valid position near to the given position is returned.
     */
    function correctPosition (latLng) {
        var correctedLatLng = DUMMYPOSITION;

        try{
            srvconn.GET('/OpenRideServer-RS/resources/users/'+fokus.openride.mobclient.controller.modules.mapmanager.username+'/routes/validate/'+latLng.lat()+','+latLng.lng(), false, function(coords) {
                /************* CHANGE **************/
                var lat = //coords.split(",")[0];
                latLng.lat();
                var lng = //coords.split(",")[1].split(";")[0];
                latLng.lng();
                /************* CHANGE **************/

                correctedLatLng = new google.maps.LatLng(lat,lng);

            }, function(x,s,e) {
                fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'The coordinates were able to validate unfortunately not be delivered. Error: '+s)
            });
        }catch(e){
	
        }
        finally{
            var lat = //coords.split(",")[0];
            latLng.lat();
            var lng = //coords.split(",")[1].split(";")[0];
            latLng.lng();
            /************* CHANGE **************/
            correctedLatLng = new google.maps.LatLng(lat,lng);
            return correctedLatLng;
        }
    }

    function createMarker(type, position){
        if(type == "default"){
            // Marker sizes are expressed as a Size of X,Y
            // where the origin of the image (0,0) is located
            // in the top left of the image.

            // Origins, anchor positions and coordinates of the marker
            // increase in the X direction to the right and in
            // the Y direction down.
            var image = new google.maps.MarkerImage(defIconPath,
                // This marker is 20 pixels wide by 32 pixels tall.
                new google.maps.Size(defIconSizeX, defIconSizeY),
                // The origin for this image is 0,0.
                new google.maps.Point(0,0),
                // The anchor for this image
                new google.maps.Point(0, (defIconSizeY)));
            var shadow = new google.maps.MarkerImage(defShadowPath,
                // The shadow image is larger in the horizontal dimension
                // while the position and offset are the same as for the main image.
                new google.maps.Size(29, 34),
                new google.maps.Point(0,0),
                new google.maps.Point(-6, 35));
            // Shapes define the clickable region of the icon.
            // The type defines an HTML <area> element 'poly' which
            // traces out a polygon as a series of X,Y points. The final
            // coordinate closes the poly by connecting to the first
            // coordinate.
            /*var shape = {
        coord: [1, 1, 1, 20, 18, 20, 18 , 1],
        type: 'poly'
        };*/
            marker = new google.maps.Marker({
                position: position,
                map: map,
                shadow: shadow,
                icon: image,
                //shape: shape,
                draggable: true,
                clickable: true,
                zIndex: 5
            });
        }
        
        else if(type == 'mainstart'){
            
            var image = new google.maps.MarkerImage(mainstartIconPath,
                new google.maps.Size(mainstartIconSizeX, mainstartIconSizeY),
                new google.maps.Point(0,0),
                new google.maps.Point(mainstartIconSizeX/2, mainstartIconSizeY));
			
            var shadow = new google.maps.MarkerImage(defShadowPath,
                new google.maps.Size(29, 34),
                new google.maps.Point(0,0),
                new google.maps.Point(5, 35));
            
            startmarker = new google.maps.Marker({
                position: position,
                map: map,
                shadow: shadow,
                icon: image,
                //shape: shape,
                draggable: false,
                clickable: false,
                zIndex: 100
            });
            marker = startmarker;
        }
        
        else if(type == 'maindst'){
            
            var image = new google.maps.MarkerImage(maindstIconPath,
                new google.maps.Size(maindstIconSizeX, maindstIconSizeY),
                new google.maps.Point(0,0),
                new google.maps.Point((maindstIconSizeX/2), maindstIconSizeY));
            
            var shadow = new google.maps.MarkerImage(defShadowPath,
                new google.maps.Size(29, 34),
                new google.maps.Point(0,0),
                new google.maps.Point(-6, 35));
            
            destmarker = new google.maps.Marker({
                position: position,
                map: map,
                shadow: shadow,
                icon: image,
                //shape: shape,
                draggable: false,
                clickable: false,
                zIndex: 100
            });
        }
        
        else if(type == 'viastart'){
            
            var image = new google.maps.MarkerImage(mainviaptstartIconPath,
                new google.maps.Size(mainviaptstartIconSizeX, mainviaptstartIconSizeY),
                new google.maps.Point(0,0),
                new google.maps.Point(0, (mainviaptstartIconSizeY)));
            
            var shadow = new google.maps.MarkerImage(defShadowPath,
                new google.maps.Size(29, 34),
                new google.maps.Point(0,0),
                new google.maps.Point(-6, 35));
            
            startmarker = new google.maps.Marker({
                position: position,
                map: map,
                shadow: shadow,
                icon: image,
                //shape: shape,
                title: 'test_username',
                draggable: false,
                clickable: false,
                zIndex: 10
            });
            
            marker = startmarker;
        }
        
        else if(type == 'viadst'){
            
            var image = new google.maps.MarkerImage(mainviaptdstIconPath,
                new google.maps.Size(mainviaptdstIconSizeX, mainviaptdstIconSizeY),
                new google.maps.Point(0,0),
                new google.maps.Point(0, (mainviaptdstIconSizeY)));
            
            var shadow = new google.maps.MarkerImage(defShadowPath,
                new google.maps.Size(29, 34),
                new google.maps.Point(0,0),
                new google.maps.Point(-6, 35));
            
            destmarker = new google.maps.Marker({
                position: position,
                map: map,
                shadow: shadow,
                icon: image,
                //shape: shape,
                draggable: false,
                clickable: false,
                zIndex: 10
            });
        }
    }
    
    function createViaPt(position){
    	
        var newMarker;
    	
        var image = new google.maps.MarkerImage(mainviaptstartIconPath,
            new google.maps.Size(mainviaptstartIconSizeX, mainviaptstartIconSizeY),
            new google.maps.Point(0,0),
            new google.maps.Point(0, (mainviaptstartIconSizeY)));
            
        var shadow = new google.maps.MarkerImage(defShadowPath,
            new google.maps.Size(29, 34),
            new google.maps.Point(0,0),
            new google.maps.Point(-6, 35));
            
        newMarker = new google.maps.Marker({
            position: position,
            map: map,
            shadow: shadow,
            icon: image,
            //shape: shape,
            draggable: true,
            clickable: false
        });
        return newMarker;
    }
	
    function setCenter (centerLatLon){
        //mapCenter = correctPosition(centerLatLon);
        mapCenter = centerLatLon;
        map.setCenter(mapCenter);
        marker.setPosition(mapCenter);
    }

}();
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


fokus.openride.mobclient.controller.modules.offer = function(){

    /* ------ private variabeles and methods ------ */

    /* ------ public variabeles and methods ------ */

    var newoffer = {
        'Offer':[
        {
            'rideId'                    : -1,
            'ridestartPtLat'            : 52.525798,
            'ridestartPtLon'            : 13.314266,
            'rideendPtLat'              : 52.5225,
            'rideendPtLon'              : 13.4123,
            'ridestartTime'             : new Date().getMilliseconds(),
            'rideprice'                 : 20,//8.2,
            'rideComment'               :'Das Fahrtkommentar.',
            'acceptableDetourInMin'     : 10,
            'acceptableDetourInKm'      : 10,
            'acceptableDetourInPercent' : 10,
            'offeredSeatsNo'            : 4,
            'startptAddress'            : 'Weg 1, 10001 Berlin',
            'endptAddress'              : 'Weg 900, 10002 Berlin'
        }
        ]
    }


    return {
        validateOfferRequest : function(){
            return newoffer;
        },

        setStartLat : function(latitude){
            newoffer.Offer[0].ridestartPtLat = latitude;
        },

        setStartLon : function(longitude){
            newoffer.Offer[0].ridestartPtLon = longitude;
        },

        setStartLatLn : function(latlnstr){
            if(latlnstr.indexOf(',') != -1){
                newoffer.Offer[0].ridestartPtLat = parseFloat(latlnstr.substr(0, latlnstr.indexOf(',')));
                newoffer.Offer[0].ridestartPtLon = parseFloat(latlnstr.substr(latlnstr.indexOf(',')+1, latlnstr.length-(latlnstr.indexOf(',')+1)));
            }else{
                newoffer.Offer[0].ridestartPtLat = 52.525798;
                newoffer.Offer[0].ridestartPtLon = 13.314266;
            }
        },

        getStartLat : function(){
            return newoffer.Offer[0].ridestartPtLat;
        },

        getStartLon : function(){
            return newoffer.Offer[0].ridestartPtLon;
        },

        setStartAddr : function(startaddr){
            newoffer.Offer[0].startptAddress = startaddr;
        },

        getStartAddr : function(){
            return newoffer.Offer[0].startptAddress;
        },

        setDestLat : function(latitude){
            newoffer.Offer[0].rideendPtLat = latitude;
        },

        setDestLon : function(longitude){
            newoffer.Offer[0].rideendPtLon = longitude;
        },

        setDestLatLn : function(latlnstr){
            if(latlnstr.indexOf(',') != -1){
                newoffer.Offer[0].rideendPtLat = parseFloat(latlnstr.substr(0, latlnstr.indexOf(',')));
                newoffer.Offer[0].rideendPtLon = parseFloat(latlnstr.substr(latlnstr.indexOf(',')+1, latlnstr.length-(latlnstr.indexOf(',')+1)));
            }else{
                newoffer.Offer[0].rideendPtLat = 52.525798;
                newoffer.Offer[0].rideendPtLon = 13.314266;
            }
        },

        getDestLat : function(){
            return newoffer.Offer[0].rideendPtLat;
        },

        getDestLon : function(){
            return newoffer.Offer[0].rideendPtLon;
        },

        setDestAddr : function(destaddr){
            newoffer.Offer[0].endptAddress = destaddr;
        },

        getDestAddr : function(){
            return newoffer.Offer[0].endptAddress;
        },

        setStartTime : function(starttime){
            newoffer.Offer[0].ridestartTime = starttime.getTime();
        },

        getStartTime : function(){
            return newoffer.Offer[0].ridestartTime;
        },

        setPrice : function(price){
            newoffer.Offer[0].rideprice = price;
        },

        getPrice : function(){
            return newoffer.Offer[0].rideprice;
        },

        setComment : function(comment){
            newoffer.Offer[0].rideComment = comment;
        },

        getComment : function(){
            return newoffer.Offer[0].rideComment;
        },

        setDetour : function(km){
            newoffer.Offer[0].acceptableDetourInKm = km;
        },

        getDetour : function(){
            return newoffer.Offer[0].acceptableDetourInMin;
        },

        setCurrency : function(offeredcurrency){
            newoffer.Offer[0].offeredCurrency = offeredcurrency;
        },

        getCurrency : function(){
            return newoffer.Offer[0].offeredCurrency;
        },

        setOfferedSeatsNo : function(offeredseats){
            newoffer.Offer[0].offeredSeatsNo = offeredseats;
        },

        getOfferedSeatsNo : function(){
            return newoffer.Offer[0].offeredSeatsNo;
        },

        setSaveTemplate : function(savetmpl){
            newoffer.Offer[0].savetemplate = savetmpl;
        },

        getSaveTemplate : function(){
            return newoffer.Offer[0].savetemplate;
        }

    };
}();/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


fokus.openride.mobclient.controller.modules.search = function(){

    /* ------ private variabeles and methods ------ */
    var newsearch = {
        'Search':[
        {
            'ridestartPtLat':52.525798,
            'ridestartPtLon':13.314266,
            'rideendPtLat':52.525798,
            'rideendPtLon':13.314266,
            'ridestartTimeLatest':new Date().getTime(),
            'rideComment':'My dear Comment!',
            'maxwaitingtime':20,
            'searchedSeatsNo':1,
            'savetemplate':false,
            'ridestartTimeEarliest':new Date().getTime(),
            'price':5.12,
            'startptAddress'            : 'Weg 1, 10001 Berlin',
            'endptAddress'              : 'Weg 900, 10002 Berlin'
        }
        ]
    }
                
    return {
        validateSearchRequest : function(){
            return newsearch;
        },

        setTripName : function(ridename){
            newsearch.Search[0].rideName = ridename;
        },

        getTripName : function(){
            return newsearch.Search[0].rideName;
        },

        setStartLat : function(latitude){
            newsearch.Search[0].ridestartPtLat = latitude;
        },

        setStartLon : function(longitude){
            newsearch.Search[0].ridestartPtLon = longitude;
        },

        setStartLatLn : function(latlnstr){
            if(latlnstr.indexOf(',') != -1){
                newsearch.Search[0].ridestartPtLat = parseFloat(latlnstr.substr(0, latlnstr.indexOf(',')));
                newsearch.Search[0].ridestartPtLon = parseFloat(latlnstr.substr(latlnstr.indexOf(',')+1, latlnstr.length-(latlnstr.indexOf(',')+1)));
            }else{
                newsearch.Search[0].ridestartPtLat = 52.525798;
                newsearch.Search[0].ridestartPtLon = 13.314266;
            }
        },

        getStartLat : function(){
            return newsearch.Search[0].ridestartPtLat;
        },

        getStartLon : function(){
            return newsearch.Search[0].ridestartPtLon;
        },
		
        setStartAddr : function(startaddr){
            newsearch.Search[0].startptAddress = startaddr;
        },

        getStartAddr : function(){
            return newsearch.Search[0].startptAddress;
        },

        setDestLat : function(latitude){
            newsearch.Search[0].rideendPtLat = latitude;
        },

        setDestLon : function(longitude){
            newsearch.Search[0].rideendPtLon = longitude;
        },

        setDestLatLn : function(latlnstr){
            if(latlnstr.indexOf(',') != -1){
                newsearch.Search[0].rideendPtLat = parseFloat(latlnstr.substr(0, latlnstr.indexOf(',')));
                newsearch.Search[0].rideendPtLon = parseFloat(latlnstr.substr(latlnstr.indexOf(',')+1, latlnstr.length-(latlnstr.indexOf(',')+1)));
            }else{
                newsearch.Search[0].rideendPtLat = 52.525798;
                newsearch.Search[0].rideendPtLon = 13.314266;
            }
        },

        getDestLat : function(){
            return newsearch.Search[0].rideendPtLat;
        },

        getDestLon : function(){
            return newsearch.Search[0].rideendPtLon;
        },
		
        setDestAddr : function(destaddr){
            newsearch.Search[0].endptAddress = destaddr;
        },

        getDestAddr : function(){
            return newsearch.Search[0].endptAddress;
        },

        setStartTime : function(starttime){
            newsearch.Search[0].ridestartTimeEarliest = starttime.getTime();
        },

        getStartTime : function(){
            return newsearch.Search[0].ridestartTimeEarliest;
        },

        setPrice : function(price){
            newsearch.Search[0].rideprice = price;
        },

        getPrice : function(){
            return newsearch.Search[0].rideprice;
        },

        setMaxWaitingTime : function(min){
            newsearch.Search[0].maxwaitingtime = min;
            var waitingmillsec = min * 60 * 1000;
            newsearch.Search[0].ridestartTimeLatest = newsearch.Search[0].ridestartTimeEarliest + waitingmillsec;
        },

        getMaxWaitingTime : function(){
            return newsearch.Search[0].maxwaitingtime;
        },

        setComment : function(comment){
            newsearch.Search[0].rideComment = comment;
        },

        getComment : function(){
            return newsearch.Search[0].rideComment;
        },

        setSearchedSeatsNo : function(searchedseats){
            newsearch.Search[0].searchedSeatsNo = searchedseats;
        },

        getSearchedSeatsNo : function(){
            return newsearch.Search[0].searchedSeatsNo;
        },

        setSaveTemplate : function(savetmpl){
            newsearch.Search[0].savetemplate = savetmpl;
        },

        getSaveTemplate : function(){
            return newsearch.Search[0].savetemplate;
        }
    };
}();/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


fokus.openride.mobclient.controller.modules.favorites = function(){

    /* ------ private variabeles and methods ------ */
    var favpt = {
        'FavoritePointRequest':[
        {
            'favptAddress':'Bitte Strasse eingben!',
            'favptGeoCoords':'0,0',
            'favptDisplayName':'Bitte Namen eingeben'
        }
        ]
    }

    /*{"list":[{"FavoritePointResponse":[{"favptId":9652,"favptAddress":"Brandenburg Gate, Pariser Platz 7, 10117 Berlin, Germany","favptDisplayName":"Brandenburg Gate"},
						{"favptId":9653,"favptAddress":"Kaiserin-Augusta-Allee 31, 10589 Berlin, Germany","favptDisplayName":"Kaiserin-Augusta-Allee 31"},
						{"favptId":9654,"favptAddress":"Technical University of Berlin","favptDisplayName":"Technical University of Berlin"}]}]}*/
                
    return {

        setAddress : function(addrstr){
            favpt.FavoritePointRequest[0].favptAddress = addrstr;
        },

        getAdress : function(){
            return favpt.FavoritePointRequest[0].favptAddress;
        },

        setGeoCoordStr : function(coordstr){
            favpt.FavoritePointRequest[0].favptGeoCoords = coordstr;
        },

        getGeoCoordStr : function(){
            return favpt.FavoritePointRequest[0].favptGeoCoords;
        },

        setGeoCoords : function(lat, ln){
            favpt.FavoritePointRequest[0].favptGeoCoords = lat + ',' + ln;
        },

        setDisplayName : function(name){
            favpt.FavoritePointRequest[0].favptDisplayName = name;
        },

        getDisplayName : function(){
            return favpt.FavoritePointRequest[0].favptDisplayName;
        },

        getFavPt : function(){
            return favpt;
        }
    };
}();
fokus.openride.mobclient.controller.modules.ratings = function(){

    /* ------ private variabeles and methods ------ */

    /*var respRatingsSummary = {
        'RatingsSummaryResponse':[
        {
            'ratingsTotal': '',
            'ratingsRatioPercent': '',
            'ratingsLatestPositive': '',
            'ratingsLatestNeutral': '',
            'ratingsLatestNegative': ''
        }
        ]
    }
    
    var respReceivedRating = {
        'ReceivedRatingResponse':[
        {
            'custId': '',
            'custNickname': '',
            'custGender': '',
            'custRole': '',
            'timestamprealized': '',
            'receivedRating': '',
            'receivedRatingComment': ''
        }
        ]
    }

    var respOpenRating = {
        'OpenRatingResponse':[
        {
            'riderRouteId': '',
            'custId': '',
            'custNickname': '',
            'custGender': '',
            'custRole': '',
            'timestamprealized': ''
        }
        ]
    }*/

    var reqGivenRating = {
        'GivenRatingRequest':[
        {
            'riderRouteId': '',
            'givenRating': '',
            'givenRatingComment': ''
        }
        ]
    }


    return {

        setRiderRouteId : function(id){
            reqGivenRating.GivenRatingRequest[0].riderRouteId = id;
        },

        getRiderRouteId : function(){
            return reqGivenRating.GivenRatingRequest[0].riderRouteId;
        },

        setGivenRating : function(rating){
            reqGivenRating.GivenRatingRequest[0].givenRating = rating;
        },

        getGivenRating : function(){
            return reqGivenRating.GivenRatingRequest[0].givenRating;
        },

        setGivenRatingComment : function(comment){
            reqGivenRating.GivenRatingRequest[0].givenRatingComment = comment;
        },

        getGivenRatingComment : function(){
            return reqGivenRating.GivenRatingRequest[0].givenRatingComment;
        },

        getGivenRatingRequest : function(){
            return reqGivenRating;
        }

    };
}();
fokus.openride.mobclient.controller.modules.profile = function(){


    /* ------ private variabeles and methods ------ */
    var reqProfile = {
        'ProfileRequest':[
        {
            '_id'               : '',
            'preferences'       : '',
            'pictures'          : '',
            'favouritesList'    : '',
            'firstName'         : "",
            'lastName'          : "",
            'dateOfBirth'       : "",
            'email'             : '',
            'mobilePhoneNumber' : '',
            'fixedPhoneNumber'  : '',
            'streetAddress'     : '',
            'zipCode'           : '',
            'city'              : '',
            'isSmoker'          : '',
            'licenseDate'       : '',
            'carColour'         : '',
            'carBrand'          : '',
            'carBuildYear'      : '',
            'carPlateNo'        : '',
            'gender'            : "-",
            '_revision'         : 0,
            '__v'               : 0
        }
        ]
    }

    var reqPreferences = {
        'PreferencesRequest':[
        {
            'prefIsSmoker'      : '',
            'prefGender'        : ''
        }
        ]
    }

    var reqPassword = {
        'PasswordRequest':[
        {
            'passwordOld'       : '',
            'password'          : ''
        }
        ]
    }

    /* ------ public variabeles and methods ------ */
    return {
        setAllData : function (profile){
            reqProfile.ProfileRequest[0]._id = profile._id;
            reqProfile.ProfileRequest[0].preferences = profile.preferences;
            reqProfile.ProfileRequest[0].pictures = profile.pictures;
            reqProfile.ProfileRequest[0].favouritesList = profile.favouritesList;
            reqProfile.ProfileRequest[0].firstName = profile.firstName;
            reqProfile.ProfileRequest[0].lastName = profile.lastName;
            reqProfile.ProfileRequest[0].dateOfBirth = profile.dateOfBirth;
            reqProfile.ProfileRequest[0].email = profile.email;
            reqProfile.ProfileRequest[0].mobilePhoneNumber = profile.mobilePhoneNumber;
            reqProfile.ProfileRequest[0].fixedPhoneNumber = profile.fixedPhoneNumber;
            reqProfile.ProfileRequest[0].streetAddress = profile.streetAddress;
            reqProfile.ProfileRequest[0].zipCode = profile.zipCode;
            reqProfile.ProfileRequest[0].city = profile.city;
            reqProfile.ProfileRequest[0].isSmoker = profile.isSmoker;
            reqProfile.ProfileRequest[0].licenseDate = profile.licenseDate;
            reqProfile.ProfileRequest[0].carColour = profile.carColour;
            reqProfile.ProfileRequest[0].carBrand = profile.carBrand;
            reqProfile.ProfileRequest[0].carBuildYear = profile.carBuildYear;
            reqProfile.ProfileRequest[0].carPlateNo = profile.carPlateNo;
            reqProfile.ProfileRequest[0].gender = profile.gender;
            reqProfile.ProfileRequest[0]._revision = profile._revision;
            reqProfile.ProfileRequest[0]._v = profile._v;
        },
        setDateOfBirth : function(dateofbirth){
            reqProfile.ProfileRequest[0].dateOfBirth = dateofbirth;
        },

        getDateOfBirth : function(){
            return reqProfile.ProfileRequest[0].dateOfBirth;
        },

        setEmail : function(mailaddress){
            reqProfile.ProfileRequest[0].email = mailaddress;
        },

        getEmail : function(){
            return reqProfile.ProfileRequest[0].email;
        },

        setMobilePhoneNumber : function(mobileno){
            reqProfile.ProfileRequest[0].mobilePhoneNumber = mobileno;
        },

        getMobilePhoneNumber : function(){
            return reqProfile.ProfileRequest[0].mobilePhoneNumber;
        },

        setFixedPhoneNumber : function(phoneno){
            reqProfile.ProfileRequest[0].fixedPhoneNumber = phoneno;
        },

        getFixedPhoneNumber : function(){
            return reqProfile.ProfileRequest[0].fixedPhoneNumber;
        },

        setStreetAddress : function(street){
            reqProfile.ProfileRequest[0].streetAddress = street;
        },

        getStreetAddress : function(){
            return reqProfile.ProfileRequest[0].streetAddress;
        },

        setZipCode : function(zip){
            reqProfile.ProfileRequest[0].zipCode = ""+zip;
        },

        getZipCode : function(){
            return reqProfile.ProfileRequest[0].zipCode;
        },

        setCity : function(city){
            reqProfile.ProfileRequest[0].city = city;
        },

        getCity : function(){
            return reqProfile.ProfileRequest[0].city;
        },

        setIsSmoker : function(issmoker){
            reqProfile.ProfileRequest[0].isSmoker = issmoker;
        },

        getIsSmkoker : function(){
            return reqProfile.ProfileRequest[0].isSmoker;
        },

        setLicenseDate : function(licensedate){
            reqProfile.ProfileRequest[0].licenseDate = licensedate;
        },

        getLicenseDate : function(){
            return reqProfile.ProfileRequest[0].licenseDate;
        },

        setCarColour : function(carColour){
            reqProfile.ProfileRequest[0].carColour = carColour;
        },

        getCarColour : function(){
            return reqProfile.ProfileRequest[0].carColour;
        },

        setCarBrand : function(carBrand){
            reqProfile.ProfileRequest[0].carBrand = carBrand;
        },

        getCarBrand : function(){
            return reqProfile.ProfileRequest[0].carBrand;
        },

        setCarBuildYear : function(carBuildYear){
            reqProfile.ProfileRequest[0].carBuildYear = carBuildYear;
        },

        getCarBuildYear : function(){
            return reqProfile.ProfileRequest[0].carBuildYear;
        },

        setCarPlateNo : function(carPlateNo){
            reqProfile.ProfileRequest[0].carPlateNo = carPlateNo;
        },

        getCarPlateNo : function(){
            return reqProfile.ProfileRequest[0].carPlateNo;
        },

        getProfileRequest : function(){
            return reqProfile.ProfileRequest[0];
        },


        setPrefIsSmoker : function (prefissmoker){
            reqPreferences.PreferencesRequest[0].prefIsSmoker = prefissmoker;
        },

        getPrefIsSmoker : function (){
            return reqPreferences.PreferencesRequest[0].prefIsSmoker;
        },

        setPrefGender : function (prefgender){
            reqPreferences.PreferencesRequest[0].prefGender = prefgender;
        },

        getPrefGender : function (){
            return reqPreferences.PreferencesRequest[0].prefGender;
        },

        getPreferencesRequest : function(){
            return reqPreferences;
        },

        setPasswordOld : function (passwordold){
            reqPassword.PasswordRequest[0].passwordOld = passwordold;
        },

        getPasswordOld : function (){
            return reqPassword.PasswordRequest[0].passwordOld;
        },

        setPassword : function (password){
            reqPassword.PasswordRequest[0].password = password;
        },

        getPassword : function (){
            return reqPassword.PasswordRequest[0].password;
        },

        getPasswordRequest : function(){
            return reqPassword;
        }

    };
}();

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


fokus.openride.mobclient.controller.modules.calendar = function(){

    /* ------ private variabeles and methods ------ */
    var initDate = new Date();
    var endDate = new Date();
    endDate.setHours(endDate.getHours()+1);

    /* ------ public variabeles and methods ------ */
    return {
        date : initDate,
        endDate: endDate,

        getDate : function(){
            return this.date;
        },
        getDateEnd : function(){
            return this.endDate;
        },

        getDay : function(){
            return this.date.getDate();
        },

        getMonth : function(){
            return this.date.getMonth()+1;
        },

        getYear : function(){
            return this.date.getFullYear();
        },

        getHour : function(){
            return this.date.getHours();
        },

        getMin : function(){
            return this.date.getMinutes();
        },
        getHourEnd : function(){
            return this.endDate.getHours();
        },

        getMinEnd : function(){
            return this.endDate.getMinutes();
        },

        getDateString : function(){
            return ''+this.getDay()+'.'+this.getMonth()+'.'+this.getYear()+' '+this.getHours()+':'+this.getMinutes()+' Uhr';
        },

        //setters

        setDay : function(day){
            this.date.setDate(day);
        },

        setHour : function(hour){
            this.date.setHours(hour);
        },

        setMin : function(min){
            this.date.setMinutes(min);
        },

        setMonth : function(month){
            this.date.setMonth(month);
        },

        setYear : function(year){
            this.date.setYear(year);
        },

        increaseYear : function(){
            this.date.setFullYear(this.date.getFullYear()+1);
        },

        decreaseYear : function(){
            this.date.setFullYear(this.date.getFullYear()-1);
        },

        increaseMonth : function(){
            this.date.setMonth(this.date.getMonth()+1);
        },

        decreaseMonth : function(){
            this.date.setMonth(this.date.getMonth()-1);
        },

        increaseDay : function(){
            this.date.setDate(this.date.getDate()+1);
        },

        decreaseDay : function(){
            this.date.setDate(this.date.getDate()-1);
        },

        increaseHour : function(){
            this.date.setHours(this.date.getHours()+1);
        },

        decreaseHour : function(){
            this.date.setHours(this.date.getHours()-1);
        },

        increaseMin : function(min){
            if(min < 0)min = 0;

            var rest = this.date.getMinutes() % 5;

            // Round to 5
            if (rest != 0){
                min = 0;
                do {
                    min += 1;
                    rest = (this.date.getMinutes() + min) % 5;
                } while (rest != 0);
            }

            this.date.setMinutes(this.date.getMinutes()+min);
        },

        decreaseMin : function(min){
            if(min < 0)min = 0;

            var rest = this.date.getMinutes() % 5;

            // Round to 5
            if (rest != 0){
                min = 0;
                do {
                    min += 1;
                    rest = (this.date.getMinutes() - min) % 5;
                } while (rest != 0);
            }

            this.date.setMinutes(this.date.getMinutes()-min);
        },
        increaseHourEnd : function(){
            this.endDate.setHours(this.endDate.getHours()+1);
        },

        decreaseHourEnd : function(){
            this.endDate.setHours(this.endDate.getHours()-1);
        },

        increaseMinEnd : function(min){
            if(min < 0)min = 0;

            var rest = this.endDate.getMinutes() % 5;

            // Round to 5
            if (rest != 0){
                min = 0;
                do {
                    min += 1;
                    rest = (this.endDate.getMinutes() + min) % 5;
                } while (rest != 0);
            }

            this.endDate.setMinutes(this.endDate.getMinutes()+min);
        },

        decreaseMinEnd : function(min){
            if(min < 0)min = 0;

            var rest = this.endDate.getMinutes() % 5;

            // Round to 5
            if (rest != 0){
                min = 0;
                do {
                    min += 1;
                    rest = (this.endDate.getMinutes() - min) % 5;
                } while (rest != 0);
            }

            this.endDate.setMinutes(this.endDate.getMinutes()-min);
        },

        reset : function(){
            this.date = new Date();
            this.endDate = new Date();
            this.endDate.setHours(endDate.getHours()+1);
        }
    };
}();

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
fokus.openride.mobclient.controller.modules.modulemanager = function(){

    /* ------ private variabeles and methods ------ */

    //   const eDiv = '</div>';

    var mapmod = fokus.openride.mobclient.controller.modules.mapmanager;
    var nativemod = fokus.openride.mobclient.controller.modules.nativemodule;
    var srvconn = fokus.openride.mobclient.controller.serverconnector;
    var calendar = fokus.openride.mobclient.controller.modules.calendar;
    var userProfile =fokus.openride.mobclient.controller.modules.profile;

    
    usermode = DRIVERMODE;

    var offerstartdropdownid = 'offerstartdropd';
    var offerdestdropdownid = 'offerdestdropd';
    var searchstartdropdownid = 'searchstartdropd';
    var searchdestdropdownid = 'searchdestdropd';

    //option elemt id's for setting user position address, when screen gets set to offer/search ui
    var offerstartselectcurrpos = 'offerstartselectcurrpos';
    var offerdestselectcurrpos = 'offerdestselectcurrpos';
    var searchstartselectcurrpos = 'searchstartselectcurrpos';
    var searchdestselectcurrpos = 'searchdestselectcurrpos';

    // Determin wether create a new service or modify an existing
    var modifyService = "modify";
    var newService = "new";
    var serviceType = '';

    var rideId = '';

    var initialviewid = 'newofferUI';

    var activeMatchContentDiv;

    //arrays for the tab-related dom elements
    var tablinkslvl_0 = ['tab01link', 'tab02link', 'tab03link', 'tab04link', 'tab05link'];
    var tabimgslvl_0 = ['tabimg01', 'tabimg02', 'tabimg03', 'tabimg04'];
    var tabcontentdivslvl_0 = ['tab01link', 'tab02link', 'tab03link', 'tab04link'];

    var tablinkslvl_1 = ['tab11link', 'tab12link', 'tab13link', 'tab14link'];
    var tabimgslvl_1 = ['tabimg11', 'tabimg12', 'tabimg13', 'tabimg14'];
    var tabcontentdivslvl_1 = ['tab01link', 'tab02link', 'tab03link', 'tab04link'];

    var tmpRideId = '';
    var tmpRide = '';

    var driverupdatecount = '';
    var riderupdatecount = '';

    /* ------ data structure for tab menu tree - for driver and rider usermode ------ */

    //driver mode tree data

    var drivernode0 = {
        imgsrc : '../img/tab0home_inact_wide.png',
        imgactivesrc : '../img/tab0home_act_wide.png',
        isavtive : false,
        leafs : [
        {
            imgsrc : '../img/home1green_wide.png',
            imgactivesrc : '../img/home1white_wide.png',
            contentdivid : 'homeUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1profilegreen_wide.png',
            imgactivesrc : '../img/tab1profilewhite_wide.png',
            contentdivid : 'profileUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1greentempl.png',
            imgactivesrc : '../img/tab1whitetempl.png',
            contentdivid : 'dummyUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1greentempl.png',
            imgactivesrc : '../img/tab1whitetempl.png',
            contentdivid : 'dummyUI',
            isactive : false
        }
        ]
    };

    var drivernode1 = {
        imgsrc : '../img/tab0driver_inact_wide.png',
        imgactivesrc : '../img/tab0driver_act_wide.png',
        isavtive : false,
        leafs : [
        {
            imgsrc : '../img/tab1NeuesAngebot_wide.png',
            imgactivesrc : '../img/tab1NeuesAngebotActive_wide.png',
            contentdivid : 'newofferUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1MeineAngebote_wide.png',
            imgactivesrc : '../img/tab1MeineAngeboteActive_wide.png',
            contentdivid : 'activeofferUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1AlteAngebote_wide.png',
            imgactivesrc : '../img/tab1AlteAngeboteActive_wide.png',
            contentdivid : 'completedtripsUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1greentempl.png',
            imgactivesrc : '../img/tab1whitetempl.png',
            contentdivid : 'dummyUI',
            isactive : false
        }
        ]
    };

    var drivernode2 = {
        imgsrc : '../img/tab0thumb_inact_wide.png',
        imgactivesrc : '../img/tab0ride_act_wide.png',
        isavtive : false,
        leafs : [
        {
            imgsrc : '../img/tab1ratinggreen_wide.png',
            imgactivesrc : '../img/tab1ratingwhite_wide.png',
            contentdivid : 'ratingsUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1openratsgreen_wide.png',
            imgactivesrc : '../img/tab1openratswhite_wide.png',
            contentdivid : 'openratingsUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1receivedratsgreen_wide.png',
            imgactivesrc : '../img/tab1receivedratswhite_wide.png',
            contentdivid : 'receivedratingsUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1greentempl.png',
            imgactivesrc : '../img/tab1whitetempl.png',
            contentdivid : 'dummyUI',
            isactive : false
        }
        ]
    };

    var drivernode3 = {
        imgsrc : '../img/tab0star_inact_wide.png',
        imgactivesrc : '../img/tab0star_act_wide.png',
        isavtive : false,
        leafs : [
        {
            imgsrc : '../img/tab1favlistgreen_wide.png',
            imgactivesrc : '../img/tab1favlistwhite_wide.png',
            contentdivid : 'favlistUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1newfavgreen_wide.png',
            imgactivesrc : '../img/tab1newfavwhite_wide.png',
            contentdivid : 'newfavoritepickerUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1greentempl.png',
            imgactivesrc : '../img/tab1whitetempl.png',
            contentdivid : 'dummyUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1greentempl.png',
            imgactivesrc : '../img/tab1whitetempl.png',
            contentdivid : 'dummyUI',
            isactive : false
        }
        ]
    };

    var drivernode4 = {
        imgsrc : '../img/tab0euro_inact.png',
        imgactivesrc : '../img/tab0euro_act.png',
        isavtive : false,
        leafs : [
        {
            imgsrc : '../img/tab1greentempl.png',
            imgactivesrc : '../img/tab1whitetempl.png',
            contentdivid : 'accountUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1greentempl.png',
            imgactivesrc : '../img/tab1whitetempl.png',
            contentdivid : 'accountUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1greentempl.png',
            imgactivesrc : '../img/tab1whitetempl.png',
            contentdivid : 'accountUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1greentempl.png',
            imgactivesrc : '../img/tab1whitetempl.png',
            contentdivid : 'accountUI',
            isactive : false
        }
        ]
    };

    //rider mode tree data
    var ridernode0 = {
        imgsrc : '../img/tab0home_inact_wide.png',
        imgactivesrc : '../img/tab0home_act_wide.png',
        isavtive : false,
        leafs : [
        {
            imgsrc : '../img/home1green_wide.png',
            imgactivesrc : '../img/home1white_wide.png',
            contentdivid : 'homeUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1profilegreen_wide.png',
            imgactivesrc : '../img/tab1profilewhite_wide.png',
            contentdivid : 'profileUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1greentempl.png',
            imgactivesrc : '../img/tab1whitetempl.png',
            contentdivid : 'dummyUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1greentempl.png',
            imgactivesrc : '../img/tab1whitetempl.png',
            contentdivid : 'dummyUI',
            isactive : false
        }
        ]
    };

    var ridernode1 = {
        imgsrc : '../img/tab0rider_inact_wide.png',
        imgactivesrc : '../img/tab0rider_act_wide.png',
        isavtive : false,
        leafs : [
        {
            imgsrc : '../img/tab1NeuesGesuch_wide.png',
            imgactivesrc : '../img/tab1NeuesGesuchActive_wide.png',
            contentdivid : 'newsearchUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1MeineGesuche_wide.png',
            imgactivesrc : '../img/tab1MeineGesucheActive_wide.png',
            contentdivid : 'activesearchUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1AlteGesuche_wide.png',
            imgactivesrc : '../img/tab1AlteGesucheActive_wide.png',
            contentdivid : 'completedtripsUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1greentempl.png',
            imgactivesrc : '../img/tab1whitetempl.png',
            contentdivid : 'dummyUI',
            isactive : false
        }
        ]
    };

    var ridernode2 = {
        imgsrc : '../img/tab0thumb_inact_wide.png',
        imgactivesrc : '../img/tab0ride_act_wide.png',
        isavtive : false,
        leafs : [
        {
            imgsrc : '../img/tab1ratinggreen_wide.png',
            imgactivesrc : '../img/tab1ratingwhite_wide.png',
            contentdivid : 'ratingsUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1openratsgreen_wide.png',
            imgactivesrc : '../img/tab1openratswhite_wide.png',
            contentdivid : 'openratingsUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1receivedratsgreen_wide.png',
            imgactivesrc : '../img/tab1receivedratswhite_wide.png',
            contentdivid : 'receivedratingsUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1greentempl.png',
            imgactivesrc : '../img/tab1whitetempl.png',
            contentdivid : 'dummyUI',
            isactive : false
        }
        ]
    };

    var ridernode3 = {
        imgsrc : '../img/tab0star_inact_wide.png',
        imgactivesrc : '../img/tab0star_act_wide.png',
        isavtive : false,
        leafs : [
        {
            imgsrc : '../img/tab1favlistgreen_wide.png',
            imgactivesrc : '../img/tab1favlistwhite_wide.png',
            contentdivid : 'favlistUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1newfavgreen_wide.png',
            imgactivesrc : '../img/tab1newfavwhite_wide.png',
            contentdivid : 'newfavoritepickerUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1greentempl.png',
            imgactivesrc : '../img/tab1whitetempl.png',
            contentdivid : 'dummyUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1greentempl.png',
            imgactivesrc : '../img/tab1whitetempl.png',
            contentdivid : 'dummyUI',
            isactive : false
        }
        ]
    };

    var ridernode4 = {
        imgsrc : '../img/tab0euro_inact.png',
        imgactivesrc : '../img/tab0euro_act.png',
        isavtive : false,
        leafs : [
        {
            imgsrc : '../img/tab1greentempl.png',
            imgactivesrc : '../img/tab1whitetempl.png',
            contentdivid : 'accountUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1greentempl.png',
            imgactivesrc : '../img/tab1whitetempl.png',
            contentdivid : 'accountUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1greentempl.png',
            imgactivesrc : '../img/tab1whitetempl.png',
            contentdivid : 'accountUI',
            isactive : false
        },
        {
            imgsrc : '../img/tab1greentempl.png',
            imgactivesrc : '../img/tab1whitetempl.png',
            contentdivid : 'accountUI',
            isactive : false
        }
        ]
    };

    var drivernodes = [drivernode0, drivernode1, drivernode2, drivernode3];
    var ridernodes = [ridernode0, ridernode1, ridernode2, ridernode3];

    var DUMMYPOSITION; /*new google.maps.LatLng(52.525798, 13.314266);*/

    var dummyTHIS = this;
    var activeofferlist = '';
    var activesearchlist = '';
    var simpleroutexml = '';
    var matchlist = '';
    var inactsearchmatchlist = '';
    var inactoffermatchlist = '';
    var ridelist = '';
    var favoritelist = '';
    var ratingssummary = '';
    var openratingslist = '';
    var receivedratingslist = '';
    var favnames = new Array();
    var personalDetails;
    var modulemanagerTHIS = this;

    /* ------ public variabeles and methods ------ */
    return {
        displayedFullScreenMapId: '',

        username : "nick",

        offerfavsset : false,
        searchfavsset : false,
        modifyfavsset : false,

        activeofferlistdiv : 'activeofferlist',
        activeofferlisthtml : '',

        activesearchlistdiv : 'activesearchlist',
        activesearchlisthtml : '',

        completedtrips : 'completedtrips',
        completedtriplisthtml : '',

        favoritelistdiv : 'favlistUI',
        favoritelisthtml : '',

        ratingssummarydiv : 'ratingsUI',
        ratingssummaryhtml : '',

        openratingslistdiv : 'openratingsUI',
        openratingslisthtml : '',

        receivedratingslistdiv : 'receivedratingsUI',
        receivedratingslisthtml : '',

        currentdisplayedview : initialviewid,

        currentactivenodeindex : 0,
        currentactiveleafindex : 0,

        detailsClicked : false,

        clone : function (o) {
            function OneShotConstructor(){}
            OneShotConstructor.prototype = o;
            return new OneShotConstructor();
        },

        setupTabs: function(){
            //select tab tree depending on usermode
            var nodes;
            if(usermode==DRIVERMODE){
                nodes = drivernodes;
            }else if(usermode==RIDERMODE){
                nodes = ridernodes;
            }

            //traverse tree and set up dom elements
            for(var i=0; i< tabimgslvl_0.length; i++){
                if(i<nodes.length){
                    if(i==this.currentactivenodeindex){
                        document.getElementById(tabimgslvl_0[i]).src = nodes[i].imgactivesrc;
                        for(var j=0;j<tabimgslvl_1.length; j++){
                            if(i < nodes[i].leafs.length){
                                if(j==0){
                                    document.getElementById(tabimgslvl_1[j]).src = nodes[i].leafs[j].imgactivesrc;
                                }else
                                    document.getElementById(tabimgslvl_1[j]).src = nodes[i].leafs[j].imgsrc;
                            }
                        }
                    }else
                        document.getElementById(tabimgslvl_0[i]).src = nodes[i].imgsrc;
                }
            }
            this.setTabContent(0, 0);
        },

        setTabContent: function(acticvenodeindex, activeleafindex){

            //select tab tree depending on usermode
            var nodes;
            if(usermode==DRIVERMODE){
                nodes = drivernodes;
            }else if(usermode==RIDERMODE){
                nodes = ridernodes;
            }

            if(this.currentactivenodeindex==acticvenodeindex){
                if(this.currentactiveleafindex!=activeleafindex){
                    //set current leaf tab inactive
                    nodes[this.currentactivenodeindex].leafs[this.currentactiveleafindex].isactive = false;
                    //set current leaf tab image inactive
                    document.getElementById(tabimgslvl_1[this.currentactiveleafindex]).src = nodes[this.currentactivenodeindex].leafs[this.currentactiveleafindex].imgsrc;

                    //set new leaf tab active
                    nodes[acticvenodeindex].leafs[activeleafindex].isactive = true;
                    //set new leaf tab active image
                    document.getElementById(tabimgslvl_1[activeleafindex]).src = nodes[acticvenodeindex].leafs[activeleafindex].imgactivesrc;
                }
            }else {
                //set current node tab inactive
                nodes[this.currentactivenodeindex].isactive = false;
                //set current node tab image inactive
                document.getElementById(tabimgslvl_0[this.currentactivenodeindex]).src = nodes[this.currentactivenodeindex].imgsrc;

                //set new node tab active
                nodes[acticvenodeindex].isactive = true;
                //set new node tab active image
                document.getElementById(tabimgslvl_0[acticvenodeindex]).src = nodes[acticvenodeindex].imgactivesrc;

                //set current leaf tab inactive
                nodes[this.currentactivenodeindex].leafs[this.currentactiveleafindex].isactive = false;
                //set current leaf tab image inactive
                document.getElementById(tabimgslvl_1[this.currentactiveleafindex]).src = nodes[this.currentactivenodeindex].leafs[this.currentactiveleafindex].imgsrc;

                //set new leaf tab active
                nodes[acticvenodeindex].leafs[activeleafindex].isactive = true;
                //set new leaf tab active image
                document.getElementById(tabimgslvl_1[activeleafindex]).src = nodes[acticvenodeindex].leafs[activeleafindex].imgactivesrc;

                for(var i=0; i<nodes[acticvenodeindex].leafs.length;i++ ){
                    if(i != activeleafindex){
                        //set inactive leaf tab images
                        document.getElementById(tabimgslvl_1[i]).src = nodes[acticvenodeindex].leafs[i].imgsrc;
                    }
                }
            }

            //            //temporarily switch to fav-list (tab 3,1) instead of new favrotite (tab 3,0) for FOKUS DAY
            //            if(acticvenodeindex==3 && activeleafindex==0 && (this.currentactivenodeindex != 3 || this.currentactiveleafindex != 1) ){
            //                this.setTabContent(3,1);
            //                return false;
            //            }
            this.setView(nodes[acticvenodeindex].leafs[activeleafindex].contentdivid);
            this.currentactivenodeindex = acticvenodeindex;
            this.currentactiveleafindex = activeleafindex;
        },

        setActiveOfferList : function(list){
            activeofferlist = JSON.stringify(list);
        },

        setActiveSearchList : function(list){
            activesearchlist = JSON.stringify(list);
        },

        setMatches : function(list){
            matchlist = JSON.stringify(list);
        },

        setInactiveOfferMatches : function(list){
            inactoffermatchlist = 'undefined';
            inactoffermatchlist = JSON.stringify(list);
        },

        setInactiveSearchMatches : function(list){
            inactsearchmatchlist = 'undefined';
            inactsearchmatchlist = JSON.stringify(list);
        },

        setRide : function(offer){
            ridelist = JSON.stringify(offer);
        },

        setFavoriteList : function(list){
            favoritelist = JSON.stringify(list);
        },

        setRatingsSummary : function(list){
            ratingssummary = JSON.stringify(list);
        },

        setOpenRatingsList : function(list){
            openratingslist = JSON.stringify(list);
        },

        setReceivedRatingsList : function(list){
            receivedratingslist = JSON.stringify(list);
        },

        parsesimpleroute : function(routexml){
            var routearr = new Array();
            var routeExists = $(routexml).find('hasroute').text();
            if(routeExists!= null && routeExists != 'undefined' && typeof routeExists != 'undefined'){
                if(routeExists == 'true'){
                    $(routexml).find('coordinates').each(function(){
                        var latlnstr = $(this).text();
                        var latlnstrarr = latlnstr.split(' ');
                        for(var i=0;i<latlnstrarr.length-1;i++){
                            var coordstr = latlnstrarr[i];

                            var separatorindex = coordstr.indexOf(',');
                            var latstr = coordstr.substr(0, separatorindex);
                            var lnstr = coordstr.substr(separatorindex+1, coordstr.length-separatorindex+1);

                            var lat = parseFloat(latstr);
                            var ln = parseFloat(lnstr);

                            var latlnObj = new google.maps.LatLng(lat, ln);
                            routearr.push(latlnObj);
                        }
                    });

                    mapmod.setRoutePath(routearr);
                    return true;
                }
                else{//no route
                    showOverlayDialog('No Route Found!', '', 'OK', '', '', '');//('Es wurde keine Route gefunden!', '', 'OK', '', '', '');
                    return false;
                }
            }
        },

        parseUnmatchedRideRequest: function(flag){
            //alert('parseUnmatchedRideRequest');
            //var result = JSON.parse(activesearchlist);
            var sb = new StringBuilder();
            var RideShareSB = new StringBuilder();
            var updatecount = 0;
            for (var i=0; i<rideRequests.length; i++)
            {
                var prp = JSON.parse(rideRequests[i]);
                var color = 'orange';
                var d = new Date();
                d.setTime(parseInt((prp.depDateTimeWindow.depDateTimeLow) , 10));
                if (d<=(new Date())) continue;
                var months = d.getMonth() + 1;
                var mins = d.getMinutes();
                if (mins < 10) mins = '0' + mins;
                var hours = d.getHours();
                if (hours < 10) hours = '0' + hours;
                RideShareSB.append('<li><a name="u100'+i+'"></a>');
                RideShareSB.append('<h3 class="linkslide_0" id="u100'+i+'" style="border: 2px '+ color + ';">');
                RideShareSB.append(d.getDate() +"."+months+"."+d.getFullYear()+", "+hours+":"+mins+' Hour<br /><small style="display: block; margin-left: 34px;"><span style="margin-left: -34px;">Start:</span> '+prp.departureCity+'<br /><span style="margin-left: -34px;">End:</span> '+prp.destinationCity+'</small></h3>');
                RideShareSB.append('<div class="slide_0"></div>');
                RideShareSB.append('</li>');
            }
            //RIDESHARE
            if (flag == 0) //rider
            {
                dummyTHIS.setriderupdatecount(updatecount);
                document.getElementById(dummyTHIS.activesearchlistdiv).innerHTML = RideShareSB.toString();
            }
            else
            {
                dummyTHIS.setdriverupdatecount(updatecount);
                document.getElementById(dummyTHIS.activeofferlistdiv).innerHTML = RideShareSB.toString();
            }

            setupUITabList();
        },

        parseactiveofferlist : function(){
            //var result = JSON.parse(activeofferlist);
            var sb = new StringBuilder();
            var RideShareSB = new StringBuilder();
            //var array = JSON.parse(rides);
            var updatecount = 0;
            /*if(typeof (result.list) != 'undefined' && typeof (result.list[0].Offer) != 'undefined'){
                if(typeof (result.list[0].Offer.length) == 'undefined'){
                    result.list[0].Offer = [result.list[0].Offer];
                }
                for(var i=0;i< result.list[0].Offer.length; i++){
                    var entry = result.list[0].Offer[i];

                    var startDate = new Date(entry.ridestartTime);
                    var oday = startDate.getDate();
                    if(oday < 10)oday = '0'+oday;
                    var omonth = startDate.getMonth()+1;
                    if(omonth < 10)omonth = '0'+omonth;
                    var oyear = startDate.getFullYear();
                    var ohours = startDate.getHours();
                    if(ohours < 10)ohours = '0'+ohours;
                    var omin = startDate.getMinutes();
                    if(omin < 10)omin = '0'+omin;

                    sb.append('<li><a name="r'+entry.rideId+'"></a>');                    
                    if (entry.updated == true) {
                        sb.append('<h3 class="linkslide_0 updated" id="r'+entry.rideId+'">');
                        sb.append('<span class="update" style="float: right; background: red; color: #fff; border: 0px solid #fff; -moz-border-radius: 8px; border-radius: 8px; font-size: 12px; line-height: 18px; text-align: center; font-weight: bold; width: auto; padding: 0 6px; margin-right: 10px;">Update!</span>');
                        updatecount++;
                    }
                    else {
                        sb.append('<h3 class="linkslide_0" id="r'+entry.rideId+'">');
                    }
                    sb.append(oday +"."+omonth+"."+oyear+", "+ohours+":"+omin+' Hour<br /><small style="display: block; margin-left: 34px;"><span style="margin-left: -34px;">Start:</span> '+entry.startptAddress+'<br /><span style="margin-left: -34px;">Ziel:</span> '+entry.endptAddress+'</small></h3>');
                    sb.append('<div class="slide_0"></div>');
                    sb.append('</li>');
                }
            }else{
                sb.clear();
                sb.append('<p>No active listings available.</p>');
            }*/

            //RIDESHARE
            // alert('parseactiveofferlist');
            offerAccessCounter++;
            //alert('rides.length='+rides.length);
            for (var i=0; i<rides.length; i++)
            {
                // if (!rides.hasOwnProperty(i)) continue;
                var prp = JSON.parse(rides[i]);
                //alert(rides[i]);
                var color = '';
                if (prp.driver!=user)
                    continue;
                //if (prp.agreedDriver == "" && prp.agreedCommuters.length == 0) color = 'solid orange'; //negotiation not initiated yet
                if (prp.agreedDriver != "" && prp.potentiallyAgreedCommuters.length == 0 && prp.agreedCommuters.length != 0) color = 'solid green';  //ride booked
                if (prp.agreedDriver != "" && prp.potentiallyAgreedCommuters.length != 0) color = 'dotted green'; //negotiation started
                if (prp.rejectedDriver != "" || prp.rejectedCommuters != "") color = 'solid red'; //ride rejected
                var d = new Date();
                d.setTime(parseInt((prp.depDateTimeWindow.depDateTimeLow) , 10));
                if (d<=(new Date())){
                    continue;
                }
                //alert('2');
                var months = d.getMonth() + 1;
                var hours = d.getHours();
                if (hours < 10) hours = '0' + hours;
                var mins = d.getMinutes();
                if (mins < 10) mins = '0' + mins;
                RideShareSB.append('<li><a name="r'+i+'"></a>');
                RideShareSB.append('<h3 class="linkslide_0" id="r'+i+'" style="border: 2px '+ color + ';">');
                var day="";
                //alert(d.getDay())
                switch (d.getDay()){
                    case 0:
                        day="Sunday";
                        break;
                    case 1:
                        day="Monday";
                        break;
                    case 2:
                        day="Tuesday";
                        break;
                    case 3:
                        day="Wendesday";
                        break;
                    case 4:
                        day="Thursday";
                        break;
                    case 5:
                        day="Friday";
                        break;
                    case 6:
                        day="Saturday";
                        break;
                }
                var commuters = prp.commuters.toString().replace(",",", ");
                RideShareSB.append(day+", "+d.getDate() +"."+months+"."+d.getFullYear()+", "+hours+":"+mins+
                    '<br /><small style="display: block; margin-left: 50px;"><span style="margin-left: -50px;">Start:</span> '+
                    prp.departureCity+'<br /><span style="margin-left: -50px;">End:</span> '+prp.destinationCity+'<br />'+
                    '<span style="margin-left: -50px;">Commuters: <strong style="color:black;">'+prp.commuters+'</strong></span> </small></h3>');
                //                RideShareSB.append(d.getDate() +"."+months+"."+d.getFullYear()+", "+hours+":"+mins+
                //                    ' Hour<br /><small style="display: block; margin-left: 34px;"><span style="margin-left: -34px;">Start:</span> '+
                //                    prp.departureCity+'<br /><span style="margin-left: -34px;">End:</span> '+prp.destinationCity+'</small></h3>');
                RideShareSB.append('<div class="slide_0"></div>');
                RideShareSB.append('</li>');
            }
            for (var i=0; i<rideRequests.length; i++)
            {
                if (!rideRequests.hasOwnProperty(i))
                    continue;
                var prp = JSON.parse(rideRequests[i]);
                //alert(prp.potentiallyAgreedRidePlans.length+' , '+prp.driverAgreedRidePlans.length+' , '+prp.potentialRidePlans.length+' , \''+prp.agreedRidePlan+'\'');
                if (prp.potentiallyAgreedRidePlans.length!=0 || prp.driverAgreedRidePlans.length!=0 || prp.potentialRidePlans.length!=0 || prp.agreedRidePlan!="" || prp.mode=="commuter"){
                    //alert('nothing is wrong');
                    continue;
                }
                //alert('halala ' + rideRequests.length + ' ' + rideRequests[i] + ' ' + i);
                var color = 'orange';
                var d = new Date();
                d.setTime(parseInt((prp.depDateTimeWindow.depDateTimeLow) , 10));
                if (d<=(new Date())) continue;
                var months = d.getMonth() + 1;
                var mins = d.getMinutes();
                if (mins < 10) mins = '0' + mins;
                var hours = d.getHours();
                if (hours < 10) hours = '0' + hours;
                var id = rides.length+i;
                RideShareSB.append('<li><a name="u'+id+'"></a>');
                RideShareSB.append('<h3 class="linkslide_0" id="u'+id+'" style="border: 2px '+ color + ';">');
                var day="";
                //alert(d.getDay())
                switch (d.getDay()){
                    case 0:
                        day="Sunday";
                        break;
                    case 1:
                        day="Monday";
                        break;
                    case 2:
                        day="Tuesday";
                        break;
                    case 3:
                        day="Wendesday";
                        break;
                    case 4:
                        day="Thursday";
                        break;
                    case 5:
                        day="Friday";
                        break;
                    case 6:
                        day="Saturday";
                        break;
                }
                RideShareSB.append('<small><style="color: black">'+day+', '+d.getDate() +"."+months+"."+d.getFullYear()+", "+hours+":"+mins+'</small><br /><small style="display: block; margin-left: 34px;"><span style="margin-left: -34px;">Start:</span> '+prp.departureCity+'<br /><span style="margin-left: -34px;">End:</span> '+prp.destinationCity+'</small></h3>');
                //                RideShareSB.append('<small><style="color: black">'+d.getDate() +"."+months+"."+d.getFullYear()+", "+hours+":"+mins+' Hour</small><br /><small style="display: block; margin-left: 34px;"><span style="margin-left: -34px;">Start:</span> '+prp.departureCity+'<br /><span style="margin-left: -34px;">End:</span> '+prp.destinationCity+'</small></h3>');
                RideShareSB.append('<div class="slide_0"></div>');
                RideShareSB.append('</li>');
            }
            //RIDESHARE
            dummyTHIS.setdriverupdatecount(updatecount);        //dummyTHIS replaces this

            document.getElementById(dummyTHIS.activeofferlistdiv).innerHTML = RideShareSB.toString();
            setupUITabList();
        //hideOverlayDialog();
        //alert('rides length=' + rides.length+', rideRequests length='+rideRequests.length);
        },

        parseactivesearcheslist : function(){
            var result = JSON.parse(activesearchlist);
            var sb = new StringBuilder();
            var RideShareSB = new StringBuilder();
            var updatecount = 0;
            //alert('rides.length='+rides.length);
            //RIDESHARE
            for (var i=0; i<rides.length; i++)
            {
                // if (!rides.hasOwnProperty(i))
                //    continue;
                var prp = JSON.parse(rides[i]);
                //alert('1 ' + rides.length + ' ' + rides[i] + ' ' + i);
                var color = '';
                if(prp.driver==user)
                    continue;
                //if (prp.agreedDriver == "" && prp.agreedCommuters.length == 0) color = 'solid orange'; //negotiation not initiated yet
                if (prp.agreedDriver != "" && prp.potentiallyAgreedCommuters.length == 0 && prp.agreedCommuters.length != 0) color = 'solid green';  //ride booked
                if (prp.agreedDriver != "" && prp.potentiallyAgreedCommuters.length != 0) color = 'dotted green'; //negotiation started
                if (prp.rejectedDriver != "" || prp.rejectedCommuters != "") color = 'solid red'; //ride rejected
                var d = new Date();
                d.setTime(parseInt((prp.depDateTimeWindow.depDateTimeLow) , 10));
                if (d<(new Date()))
                    continue;
                var months = d.getMonth() + 1;
                var mins = d.getMinutes();
                if (mins < 10) mins = '0' + mins;
                var hours = d.getHours();
                if (hours < 10) hours = '0' + hours;
                var day="";
                //alert(d.getDay())
                switch (d.getDay()){
                    case 0:
                        day="Sunday";
                        break;
                    case 1:
                        day="Monday";
                        break;
                    case 2:
                        day="Tuesday";
                        break;
                    case 3:
                        day="Wendesday";
                        break;
                    case 4:
                        day="Thursday";
                        break;
                    case 5:
                        day="Friday";
                        break;
                    case 6:
                        day="Saturday";
                        break;
                }
                var driverstr=prp.driver+" ( + "+prp.commuters.length+" commuter)";
                RideShareSB.append('<li><a name="r'+i+'"></a>');
                RideShareSB.append('<h3 class="linkslide_0" id="r'+i+'" style="border: 2px '+ color + ';">');
                RideShareSB.append(day+", "+d.getDate() +"."+months+"."+d.getFullYear()+", "+hours+":"+mins+
                    '<br /><small style="display: block; margin-left: 50px;"><span style="margin-left: -50px;">Start:</span> '+
                    prp.departureCity+'<br /><span style="margin-left: -50px;">End:</span> '+prp.destinationCity+'<br />'+
                    '<span style="margin-left: -60px;">Driver: </span>&nbsp;&nbsp;&nbsp;&nbsp;'+driverstr+' </small></h3>');
                //                RideShareSB.append(day+", "+d.getDate() +"."+months+"."+d.getFullYear()+", "+hours+":"+mins+
                //                    ' <br /><small style="display: block; margin-left: 34px;"><span style="margin-left: -34px;">Start:</span> '+
                //                    prp.departureCity+'<br /><span style="margin-left: -34px;">End:</span> '+prp.destinationCity+'</small></h3>');
                RideShareSB.append('<div class="slide_0"></div>');
                RideShareSB.append('</li>');
            }
            for (var i=0; i<rideRequests.length; i++)
            {
                if (!rideRequests.hasOwnProperty(i))
                    continue;
                var prp = JSON.parse(rideRequests[i]);
                //alert('1halala ' + rideRequests.length + ' ' + rideRequests[i] + ' ' + i);
                if (prp.potentiallyAgreedRidePlans.length!=0 || prp.driverAgreedRidePlans.length!=0 || prp.potentialRidePlans.length!=0 || prp.agreedRidePlan!="" || prp.mode=="driver"){
                    //alert('nothing is wrong');
                    continue;
                }
                var color = 'orange';
                var d = new Date();
                d.setTime(parseInt((prp.depDateTimeWindow.depDateTimeLow) , 10));
                if (d<(new Date()))
                    continue;
                var months = d.getMonth() + 1;
                var mins = d.getMinutes();
                if (mins < 10) mins = '0' + mins;
                var hours = d.getHours();
                if (hours < 10) hours = '0' + hours;
                var id = rides.length+i;
                var day="";
                //alert(d.getDay())
                switch (d.getDay()){
                    case 0:
                        day="Sunday";
                        break;
                    case 1:
                        day="Monday";
                        break;
                    case 2:
                        day="Tuesday";
                        break;
                    case 3:
                        day="Wendesday";
                        break;
                    case 4:
                        day="Thursday";
                        break;
                    case 5:
                        day="Friday";
                        break;
                    case 6:
                        day="Saturday";
                        break;
                }
                RideShareSB.append('<li><a name="u'+id+'"></a>');
                RideShareSB.append('<h3 class="linkslide_0" id="u'+id+'" style="border: 2px '+ color + ';">');
                RideShareSB.append('<small><style="color: black">'+day+', '+d.getDate() +"."+months+"."+d.getFullYear()+", "+hours+":"+mins+'</small><br /><small style="display: block; margin-left: 34px;"><span style="margin-left: -34px;">Start:</span> '+prp.departureCity+'<br /><span style="margin-left: -34px;">End:</span> '+prp.destinationCity+'</small></h3>');
                RideShareSB.append('<div class="slide_0"></div>');
                RideShareSB.append('</li>');
            }
            //RIDESHARE

            dummyTHIS.setriderupdatecount(updatecount);

            document.getElementById(dummyTHIS.activesearchlistdiv).innerHTML = RideShareSB.toString();
            setupUITabList();
        },

        parsecompletedtriplist : function(){
            //alert('completed');
            var sb = new StringBuilder();
            var RideShareSB = new StringBuilder();
            var updatecount = 0;
            /* try {
                alert(activesearchlist);
                if(usermode==RIDERMODE)
                    var completedrides = JSON.parse(activesearchlist);
                
            } catch (e) {
                alert('rider unable to parse JSON');
            }

            try {
                alert(activeofferlist);
                if(usermode==DRIVERMODE)
                    var completeddrives = JSON.parse(activeofferlist);
            } catch (e) {
                alert('driver unable to parse JSON');
            }

            var completedtriplist = new Array();

            var completedridesarr = new Array();
            var completeddrivesarr = new Array();

            //generating html list from completedtriplist
            var sb = new StringBuilder();

            if(usermode == RIDERMODE){

                sb.append('<h3>Old Searches</h3>');
                alert(completedrides.list.toString() +' - '+ completedrides.list[0].Search);
                //add completed rides to completedtriplist
                if(typeof (completedrides.list) != 'undefined' && typeof (completedrides.list[0].Search) != 'undefined'){
                    if(typeof (completedrides.list[0].Search.length) == 'undefined'){
                        completedrides.list[0].Search = [completedrides.list[0].Search];
                    }
                    for(var i=0;i< completedrides.list[0].Search.length; i++){
                        var entry = completedrides.list[0].Search[i];
                        //completedridesarr.push(entry);

                        var startDate = new Date(entry.ridestartTimeEarliest);
                        var oday = startDate.getDate();
                        if(oday < 10)oday = '0'+oday;
                        var omonth = startDate.getMonth()+1;
                        if(omonth < 10)omonth = '0'+omonth;
                        var oyear = startDate.getFullYear();
                        var ohours = startDate.getHours();
                        if(ohours < 10)ohours = '0'+ohours;
                        var omin = startDate.getMinutes();
                        if(omin < 10)omin = '0'+omin;

                        sb.append('<li>');
                        sb.append('<h3 class="linkslide_0" id="r'+entry.riderRouteId+'">');
                        sb.append(oday +"."+omonth+"."+oyear+", "+ohours+":"+omin+' Hour<br />');

                        sb.append('<small><table>');
                        sb.append('<tr>');
                        sb.append('<td valign="top" align="right" style="color:#666666;">Start point:</td>');
                        sb.append('<td valign="top">'+entry.startptAddress+'</td>');
                        sb.append('</tr>');
                        sb.append('<tr>');
                        sb.append('<td valign="top" align="right" style="color:#666666;">End time:</td>');
                        sb.append('<td valign="top">'+entry.endptAddress+'</td>');
                        sb.append('</tr>');
                        sb.append('</table></small></h3>');

                        //                        sb.append('<small style="display: block; margin-left: 34px;"><span style="margin-left: -34px;">Abholort:</span> '+entry.startptAddress+'<br /><span style="margin-left: -34px;">Ziel:</span> '+entry.endptAddress+'</small></h3>');
                        sb.append('<div class="slide_0"></div>');
                        sb.append('</li>');
                    }
                }else{
                    sb.clear();
                    sb.append('<h3>No active searches available.</h3>');
                }
            }
            else if(usermode == DRIVERMODE){
                sb.append('<h3>Old Offers</h3>');

                //add completed drives to completedtriplist
                if(typeof (completeddrives.list) != 'undefined' && typeof (completeddrives.list[0].Offer) != 'undefined'){
                    if(typeof (completeddrives.list[0].Offer.length) == 'undefined'){
                        completeddrives.list[0].Offer = [completeddrives.list[0].Offer];
                    }
                    for(var i=0;i< completeddrives.list[0].Offer.length; i++){
                        var entry = completeddrives.list[0].Offer[i];
                        completeddrivesarr.push(entry);

                        var startDate = new Date(entry.ridestartTime);
                        var oday = startDate.getDate();
                        if(oday < 10)oday = '0'+oday;
                        var omonth = startDate.getMonth()+1;
                        if(omonth < 10)omonth = '0'+omonth;
                        var oyear = startDate.getFullYear();
                        var ohours = startDate.getHours();
                        if(ohours < 10)ohours = '0'+ohours;
                        var omin = startDate.getMinutes();
                        if(omin < 10)omin = '0'+omin;

                        sb.append('<li><a name="r'+entry.rideId+'"></a>');
                        sb.append('<h3 class="linkslide_0" id="r'+entry.rideId+'">');
                        sb.append(oday +"."+omonth+"."+oyear+", "+ohours+":"+omin+' Hour<br /><small style="display: block; margin-left: 34px;"><span style="margin-left: -34px;">Start:</span> '+entry.startptAddress+'<br /><span style="margin-left: -34px;">End:</span> '+entry.endptAddress+'</small></h3>');
                        sb.append('<div class="slide_0"></div>');
                        sb.append('</li>');
                    }
                }else{
                    sb.clear();
                    sb.append('<h3>No old offers available.</h3>');
                }
            
            }
            document.getElementById(this.completedtrips).innerHTML = sb.toString();

            setupCompletedTripUITabList(); */
            //RIDESHARE
            
            for (var i=0; i<rides.length; i++)
            {
                if (!rides.hasOwnProperty(i)) continue;
                var prp = JSON.parse(rides[i]);
                //alert(rides[i]);
                var color = '';

                //if (prp.agreedDriver == "" && prp.agreedCommuters.length == 0) color = 'solid orange'; //negotiation not initiated yet
                if (prp.agreedDriver != "" && prp.potentiallyAgreedCommuters.length == 0 && prp.agreedCommuters.length != 0) color = 'solid green';  //ride booked
                if (prp.agreedDriver != "" && prp.potentiallyAgreedCommuters.length != 0) color = 'dotted green'; //negotiation started
                if (prp.rejectedDriver != "" || prp.rejectedCommuters != "") color = 'solid red'; //ride rejected
                var d = new Date();
                d.setTime(parseInt((prp.depDateTimeWindow.depDateTimeLow) , 10));
                if (d>(new Date())) continue;
                var months = d.getMonth() + 1;
                var mins = d.getMinutes();
                if (mins < 10) mins = '0' + mins;
                var hours = d.getHours();
                if (hours < 10) hours = '0' + hours;
                var day="";
                //alert(d.getDay())
                switch (d.getDay()){
                    case 0:
                        day="Sunday";
                        break;
                    case 1:
                        day="Monday";
                        break;
                    case 2:
                        day="Tuesday";
                        break;
                    case 3:
                        day="Wendesday";
                        break;
                    case 4:
                        day="Thursday";
                        break;
                    case 5:
                        day="Friday";
                        break;
                    case 6:
                        day="Saturday";
                        break;
                }
                var driverstr=prp.driver+" ( + "+prp.commuters.length+" commuter)";
                RideShareSB.append('<li><a name="r'+i+'"></a>');
                RideShareSB.append('<h3 class="linkslide_0" id="r'+i+'" style="border: 2px '+ color + ';">');
                RideShareSB.append(day+", "+d.getDate() +"."+months+"."+d.getFullYear()+", "+hours+":"+mins+
                    '<br /><small style="display: block; margin-left: 50px;"><span style="margin-left: -50px;">Start:</span> '+
                    prp.departureCity+'<br /><span style="margin-left: -50px;">End:</span> '+prp.destinationCity+'<br />'+
                    '<span style="margin-left: -60px;">Driver: </span>&nbsp;&nbsp;&nbsp;&nbsp;'+driverstr+' </small></h3>');
                //                RideShareSB.append(day+", "+d.getDate() +"."+months+"."+d.getFullYear()+", "+hours+":"+mins+
                //                    ' <br /><small style="display: block; margin-left: 34px;"><span style="margin-left: -34px;">Start:</span> '+
                //                    prp.departureCity+'<br /><span style="margin-left: -34px;">End:</span> '+prp.destinationCity+'</small></h3>');
                RideShareSB.append('<div class="slide_0"></div>');
                RideShareSB.append('</li>');
            }
            for (var i=0; i<rideRequests.length; i++)
            {
                if (!rideRequests.hasOwnProperty(i)) continue;
                var prp = JSON.parse(rideRequests[i]);
                if (prp.mode=='driver' && usermode==RIDERMODE)
                    continue;
                if (prp.potentiallyAgreedRidePlans.length!=0 || prp.driverAgreedRidePlans.length!=0 || prp.potentialRidePlans.length!=0 || prp.agreedRidePlan!="" || prp.mode=="driver"){
                    //alert('nothing is wrong');
                    continue;
                }
                //alert('1halala ' + rideRequests.length + ' ' + rideRequests[i] + ' ' + i);
                var color = 'orange';
                var d = new Date();
                d.setTime(parseInt((prp.depDateTimeWindow.depDateTimeLow) , 10));
                if (d>(new Date()))
                    continue;
                var months = d.getMonth() + 1;
                var mins = d.getMinutes();
                if (mins < 10) mins = '0' + mins;
                var hours = d.getHours();
                if (hours < 10) hours = '0' + hours;
                var id = rides.length+i;
                var day="";
                //alert(d.getDay())
                switch (d.getDay()){
                    case 0:
                        day="Sunday";
                        break;
                    case 1:
                        day="Monday";
                        break;
                    case 2:
                        day="Tuesday";
                        break;
                    case 3:
                        day="Wendesday";
                        break;
                    case 4:
                        day="Thursday";
                        break;
                    case 5:
                        day="Friday";
                        break;
                    case 6:
                        day="Saturday";
                        break;
                }
                RideShareSB.append('<li><a name="u'+id+'"></a>');
                RideShareSB.append('<h3 class="linkslide_0" id="u'+id+'" style="border: 2px '+ color + ';">');
                RideShareSB.append('<small><style="color: black">'+day+', '+d.getDate() +"."+months+"."+d.getFullYear()+", "+hours+":"+mins+'</small><br /><small style="display: block; margin-left: 34px;"><span style="margin-left: -34px;">Start:</span> '+prp.departureCity+'<br /><span style="margin-left: -34px;">End:</span> '+prp.destinationCity+'</small></h3>');
                RideShareSB.append('<div class="slide_0"></div>');
                RideShareSB.append('</li>');
            }
            //RIDESHARE

            dummyTHIS.setriderupdatecount(updatecount);

            document.getElementById(dummyTHIS.completedtrips).innerHTML = RideShareSB.toString();

            setupCompletedTripUITabList();
        },

        setupViaPtRoute : function(rideID){
            //
            srvconn.GET('/OpenRideServer-RS/resources/users/'+ this.username +'/rides/offers/'+ rideID +'/route', false, function(routeResult){
                //implement success callback here

                //parse route coords
                var routearr = new Array();
                if(typeof (routeResult.list) != 'undefined' && typeof (routeResult.list[0].list[0].Coordinate) != 'undefined'){
                    /*if(typeof (routeResult.list[0].FavoritePointResponse.length) == 'undefined'){
                    	routeResult.list[0].FavoritePointResponse = [routeResult.list[0].FavoritePointResponse];
                	}*/
                    for(var i=0;i< routeResult.list[0].list[0].Coordinate.length; i++){
                        var entry = routeResult.list[0].list[0].Coordinate[i];

                        var coordLat = entry.latititude;
                        var coordLon = entry.longitude;

                        var latlnObj = new google.maps.LatLng(coordLat, coordLon);
                        routearr.push(latlnObj);
                    }
                    mapmod.setRoutePath(routearr);
                }else{//no route
                    showOverlayDialog('No route found!', '', 'OK', '', '', '');
                    return false;
                }

                //parse viapoint start coords
                var viastartptarr = new Array();
                if(typeof (routeResult.list[0].list[1].Coordinate) != 'undefined'){
                    if(typeof (routeResult.list[0].list[1].Coordinate.length) == 'undefined'){
                        routeResult.list[0].list[1].Coordinate = [routeResult.list[0].list[1].Coordinate];
                    }
                    for(var i=0;i< routeResult.list[0].list[1].Coordinate.length; i++){
                        var entry = routeResult.list[0].list[1].Coordinate[i];

                        var coordLat1 = entry.latititude;
                        var coordLon1 = entry.longitude;

                        var latlnObj1 = new google.maps.LatLng(coordLat1, coordLon1);
                        viastartptarr.push(latlnObj1);
                    }
                    mapmod.setViaStartPoints(viastartptarr);

                }
                else{//no route
                //return false;
                }
                
                //parse viapoint destination coords
                var viadestptarr = new Array();
                if(routeResult.list[0].list[2]){
                    if(typeof (routeResult.list[0].list[2].Coordinate) != 'undefined'){
                        if(typeof (routeResult.list[0].list[2].Coordinate.length) == 'undefined'){
                            routeResult.list[0].list[2].Coordinate = [routeResult.list[0].list[2].Coordinate];
                        }
                        for(var i=0;i< routeResult.list[0].list[2].Coordinate.length; i++){
                            var entry = routeResult.list[0].list[2].Coordinate[i];
	
                            var coordLat1 = entry.latititude;
                            var coordLon1 = entry.longitude;

                            var latlnObj1 = new google.maps.LatLng(coordLat1, coordLon1);
                            viadestptarr.push(latlnObj1);
                        }
                        mapmod.setViaDestPoints(viadestptarr);

                    }else{//no route
                //return false;
                }
                }

                fokus.openride.mobclient.controller.modules.modulemanager.setFullScreenMapView('viaptroutegmapscreencontainer');
                return true;
            }, function(){
                //implemet error callback here
                showOverlayDialog('Route could not be determined. Please check your internet connection!', '', 'OK', '', '', '');
                return false; 
            });
        },

        parsematcheslist : function(rideId, contentDiv){
            //alert('parsematcheslist');
            //alert(rideId);
            var myflag = 0;
            if (myflag == 0) this.myparselist(rideId , contentDiv);
            else
            {
                //alert('in here');
                try {
                    var result = JSON.parse(matchlist);
                } catch (e) {
                    result = 'undefined';
                }
                var sb = new StringBuilder();
                this.tmpRide = '';
                //alert(matchlist);
                if(typeof (result.list) != 'undefined' && typeof (result.list[0].MatchResponse) != 'undefined'){
                    if(typeof (result.list[0].MatchResponse.length) == 'undefined'){
                        result.list[0].MatchResponse = [result.list[0].MatchResponse];
                    }
                    else {
                        // We have more than 1 match --> sort them by state (1st: booked, 2nd: undecided, 3rd: rejected + n/a)
                        result.list[0].MatchResponse = $(result.list[0].MatchResponse).sort(function(a, b) {
                            acc_a = a.driverState == 1 && a.riderState == 1;
                            acc_b = b.driverState == 1 && b.riderState == 1;
                            rej_a = fokus.openride.mobclient.controller.modules.modulemanager.isrejectedmatch(a.driverState, a.riderState);
                            rej_b = fokus.openride.mobclient.controller.modules.modulemanager.isrejectedmatch(b.driverState, b.riderState);
                            if ((acc_a && acc_b) || (rej_a && rej_b)) {
                                return 0;
                            }
                            if (acc_a) return -1;
                            if (acc_b) return 1;
                            if (rej_a) return 1;
                            if (rej_b) return -1;
                            return 0;

                        });
                    }
                   
                    for(var i=0;i< result.list[0].MatchResponse.length; i++){
                        var entry = result.list[0].MatchResponse[i];
                        this.tmpRide = entry;

                        var startDate = new Date(entry.matchExpectedStartTime);
                        var oday = startDate.getDate();
                        if(oday < 10)oday = '0'+oday;
                        var omonth = startDate.getMonth()+1;
                        if(omonth < 10)omonth = '0'+omonth;
                        var oyear = startDate.getFullYear();
                        var ohours = startDate.getHours();
                        if(ohours < 10)ohours = '0'+ohours;
                        var omin = startDate.getMinutes();
                        if(omin < 10)omin = '0'+omin;

                        var priceEuro = entry.matchPriceCents/100;
                        priceEuro = priceEuro.toFixed(2).replace('.',',');

                        //DEBUG
                        //entry.riderState=1
                        //entry.driverState=0

                        var isrejected = this.isrejectedmatch(entry.driverState, entry.riderState);

                        var stateHighlightColor = '#fffacd'; // yellow
                        if (entry.driverState == 1 && entry.riderState == 1)
                            stateHighlightColor = '#f0fff0'; // green
                        else if (isrejected)
                            stateHighlightColor = '#ffe4e1'; // red

                    
                    
                        // Beginning of matching row:
                        sb.append('<div class="matching-row" style="padding: 5px; border-top: 1px solid #e2e2e2;">');

                        // Show details only for unrejected matches:
                        if (!isrejected) {
                            sb.append('  <div class="profile-info-short" style="margin: 0 15px 0 0; float: left; text-align: right;">');
                            if (usermode == DRIVERMODE) {
                                sb.append('    <img src="../../OpenRideWeb/img/profile/' + entry.riderNickname + '_' + entry.riderCustId + '_thumb.jpg" alt="Profilbild von ' + entry.riderNickname + '" style="background: rgb(221, 221, 221); width: 60px; height: 60px; display: block; margin: 0 0 3px 0;" /><small>' + entry.riderRatingsRatioPercent + '% <img src="../img/rated_1.png" style="vertical-align: -3px;" /></small>');
                            }
                            else {
                                sb.append('    <img src="../../OpenRideWeb/img/profile/' + entry.driverNickname + '_' + entry.driverCustId + '_thumb.jpg" alt="Profilbild von ' + entry.driverNickname + '" style="background: rgb(221, 221, 221); width: 60px; height: 60px; display: block; margin: 0 0 3px 0;" /><small>' + entry.driverRatingsRatioPercent + '% <img src="../img/rated_1.png" style="vertical-align: -3px;" /></small>');
                            }
                            sb.append('  </div>');
                        }

                        sb.append('  <div style="margin: -5px -5px 3px 0; padding: 1px 5px 0px 5px; float: right; text-align: center; background: '+stateHighlightColor+'; min-width: 85px;">');
                        sb.append('    <form class="ride">');
                        sb.append(this.getMatchStateInfoControls(entry.rideid, entry.riderRouteId, entry.driverState, entry.riderState, contentDiv));
                        sb.append('    </form>');
                        sb.append('  </div>');

                        // Show details only for unrejected matches:
                        if (!isrejected) {

                            if (usermode == DRIVERMODE) {
                                var sharedDistanceKm = entry.matchSharedDistanceMeters/1000;
                                sharedDistanceKm = round(sharedDistanceKm,2);
                                var detourKm = entry.matchDetourMeters/1000;
                                detourKm = round(detourKm,2);

                                var start = entry.startPtAddress;
                                var end = entry.endPtAddress;

                                if (start.match("^.*:.*$")) {
                                    start = start.split(':')[1];
                                }

                                if (end.match("^.*:.*$")) {
                                    end = end.split(':')[1];
                                }

                                sb.append('  <div style="line-height: 150%; padding-left: 75px;">');
                                sb.append('    <strong>' + entry.riderNickname + '</strong> &ndash;<br />');
                                sb.append('    <small>Estimated drving time: ' + ohours + ':' + omin + ' Hour, driving distance: '+sharedDistanceKm+' km, Detour: '+detourKm+' km, Best offer: ' + round(entry.matchPriceCents/100,2) + ' &euro;, Anz. Pers.: ' + entry.noOfPassengers);
                                if (typeof (entry.riderMobilePhoneNo) != 'undefined') {
                                    sb.append(', Mobile: <a href="tel:' + entry.riderMobilePhoneNo + '" class="phone">' + entry.riderMobilePhoneNo + '</a>');
                                }

                                sb.append('</small><small><table>');
                                sb.append('<tr>');
                                sb.append('<td valign="top" align="right" style="color:#666666;">Abholort:</td>');
                                sb.append('<td valign="top">'+start+'</td>');
                                sb.append('</tr>');
                                sb.append('<tr>');
                                sb.append('<td valign="top" align="right" style="color:#666666;">End:</td>');
                                sb.append('<td valign="top">'+end+'</td>');
                                sb.append('</tr>');
                                sb.append('</table></small>');

                                //                            sb.append('</small><br style="clear: right;" /><small style="display: block; margin-left: 34px;"><span style="margin-left: -34px;">Start:</span> '+start+'<br /><span style="margin-left: -34px;">Ziel:</span> '+end+'</small>');
                                sb.append('  </div>');
                            }
                            else {
                                sb.append(' <div style="line-height: 140%; padding-left: 75px;">');
                                sb.append('   <strong>' + entry.driverNickname + '</strong> &ndash;<br />');
                                sb.append('   <small>Estimated driving time: ' + ohours + ':' + omin + ' Hour, driving distance: ' + round(entry.matchPriceCents/100,2) + ' &euro;');
                                if (typeof (entry.driverMobilePhoneNo) != 'undefined') {
                                    sb.append('<br />Mobile: <a href="tel:' + entry.driverMobilePhoneNo + '" class="phone">' + entry.driverMobilePhoneNo + '</a>');
                                    sb.append('<br />Car: ' + entry.driverCarBrand + ', ' + entry.driverCarColour);
                                    if (typeof (entry.driverCarBuildYear) != 'undefined' && entry.driverCarBuildYear != '') {
                                        sb.append(', Bj. ' + entry.driverCarBuildYear);
                                    }
                                    if (typeof (entry.driverCarPlateNo) != 'undefined' && entry.driverCarPlateNo != '') {
                                        sb.append(', Kennz. ' + entry.driverCarPlateNo);
                                    }
                                }
                                sb.append('</small><br style="clear: both;" />');
                                sb.append(' </div>');
                            }
                        }
                        else {
                            sb.append(' <div style="line-height: 140%;">');
                            if (usermode == DRIVERMODE) {
                                sb.append('   <small><strong>' + entry.riderNickname + '</strong></small>');
                            }
                            else {
                                sb.append('   <small><strong>' + entry.driverNickname + '</strong></small>');
                            }
                            sb.append(' </div>');
                        }
                        sb.append('</div>');
                    }
                }
                else{
                    sb.clear();
                    if (usermode == DRIVERMODE) {
                        sb.append('<p>Unfortunately, no suitable rider was found.</p>');
                    }
                    else {
                        var searchExternalLink = 'javascript:href="http://www.efa-bw.de/nvbw/XSLT_TRIP_REQUEST2?language=de"';
                        sb.append('<p>Unfortunately, no suitable driver was found.</p>');
                    }
                }

                // Buttons to change or delete a ride. Show buttons only if driver and ride not accapted/declined the offer/search.
                var showRouteInvocation;
                var realRideId = rideId.replace('r','');
                var deleteRideInvocation = "javascript:showOverlayDialog('Are you sure you want to delete this trip?', '', '      yes      ', 'fokus.openride.mobclient.controller.modules.modulemanager.deleteRide("+realRideId+");', '     no     ', '');";
                showRouteInvocation = "javascript:fokus.openride.mobclient.controller.modules.modulemanager.setupViaPtRoute(\'"+realRideId+"\');";
                var modRide = "fokus.openride.mobclient.controller.modules.modulemanager.modifyRide("+realRideId+")";
                if ((typeof (this.tmpRide.driverState) == 'undefined') && (typeof (this.tmpRide.riderState) == 'undefined')) {
                    sb.append('<form>');
                    sb.append('  <div style="padding: 5px 0; text-align: center; clear: both;">');

                    if(usermode == DRIVERMODE) {
                        sb.append('    <input type="button" class="rounded compact" value="&Auml;ndern" onclick="'+modRide+'" style="width: 72px;" />');
                        sb.append('    <input type="button" class="rounded compact" value="L&ouml;schen" onclick="'+deleteRideInvocation+'" style="width: 80px;" />');
                        sb.append('    <input type="button" class="rounded compact" value="Route anzeigen" onclick="'+showRouteInvocation+'" style="width: 130px;" />');
                    }
                    else {
                        sb.append('  <a href="http://www.efa-bw.de/nvbw/XSLT_TRIP_REQUEST2?language=de">Alternativ &uuml;ber die &Ouml;PNV-Fahrplanauskunft Ba-W&uuml; search</a><br /><br />');
                        sb.append('    <input type="button" class="rounded compact" value="&Auml;ndern" onclick="'+modRide+'" style="width: 141px;" />');
                        sb.append('    <input type="button" class="rounded compact" value="L&ouml;schen" onclick="'+deleteRideInvocation+'" style="width: 141px;" />');
                
                        var searchExternalLink = "javascript:window.location.href='http://www.efa-bw.de/nvbw/XSLT_TRIP_REQUEST2?language=de'";
                        sb.append('    <br /><br /><input type="button" class="rounded compact" value="Im &Ouml;PNV suchen" onclick="'+searchExternalLink+'" style="width: 290px;" />');
                	
                        /*Here the rider route (centered on the fetch point) wlil be linked to the button*/
                        var showFetchPtInvocation = "fokus.openride.mobclient.controller.modules.modulemanager.setFullScreenMapView('searchroutegmapscreencontainer');"
                        sb.append('  <div style="padding: 5px 0; text-align: center;">');
                        sb.append('    <input type="button" class="rounded compact" value="Abholpunkt anzeigen" onclick="'+showFetchPtInvocation+'" style="width: 290px;" />');
                        sb.append('  </div>');
                    }
                    sb.append('  </div>');
                    sb.append('</form>');
                } else {
                    realRideId = rideId.replace('r','');
                    showRouteInvocation = "javascript:fokus.openride.mobclient.controller.modules.modulemanager.setupViaPtRoute(\'"+realRideId+"\');";
                    if(usermode == DRIVERMODE) {
                        sb.append('  <div style="padding: 5px 0; text-align: center;">');
                        sb.append('    <input type="button" class="rounded compact" value="Route anzeigen" onclick="'+showRouteInvocation+'" style="width: 290px;" />');
                        sb.append('  </div>');
                    }
                }

                if (contentDiv) {
                    activeMatchContentDiv = contentDiv;
                }

                activeMatchContentDiv[0].innerHTML = sb.toString();

                // Remove update notification
                if (activeMatchContentDiv.prev("h3").is(".updated")) {
                    activeMatchContentDiv.prev("h3").removeClass("updated");
                    activeMatchContentDiv.prev("h3").find("span.update").remove();
                    if(usermode == DRIVERMODE) {
                        this.reducedriverupdatecount();
                    }
                    else {
                        this.reduceriderupdatecount();
                    }
                }
            }
        },
        myparselist : function(rideId , contentDiv)
        {
            var prp;
            var unmatched = false;
            var RideShareSB = new StringBuilder();
            //alert(prp.agreedDriver + ' ' + user);
            /*for (var t=0; t<rides.length; t++)
                    {*/
            //alert(rideId);
            var id1 = parseInt(rideId.substring(1));
            var id = id1;
            //alert(id + ' hello from us ' + rides[id]);
            if (rideId.charAt(0) == 'u') unmatched = true;
            else prp = JSON.parse(rides[id]);
            
            //alert('id '+id+' '+rides[id]);
            var stateHighlightColor = '#fffacd';
            var acc = "myaccept('"+id+"')";
            var rej = "myreject('"+id+"')";
            var currency = '';
            //if (prp.agreedDriver != "") stateHighlightColor = '#7cfc00'; // driver already agreed to this ride

            //var myaccept = "fokus.openride.mobclient.controller.modules.modulemanager.myaccept("+ ridePlan +")";
            //var myreject = "fokus.openride.mobclient.controller.modules.modulemanager.myreject("+ ridePlan +")";
            RideShareSB.append('<div class="matching-row" style="padding: 12px; border-top: 1px solid #e2e2e2;">');
            RideShareSB.append('  <div class="profile-info-short" style="margin: 0 10px 0 0; float: left; text-align: right; ">');
            RideShareSB.append('    <small>' + 100 + '% <img src="../img/rated_1.png" style="vertical-align: -3px;" /></small>');
            RideShareSB.append('  </div>');

            RideShareSB.append('  <div style="margin: -5px -5px 3px 0; padding: 5px 5px 0px 5px; float: right; text-align: center; background: '+stateHighlightColor+'; min-width: 85px;">');
            RideShareSB.append('    <form class="ride">');
            if (!unmatched)
            {

                var index1 = $.inArray(user, prp.potentiallyAgreedCommuters);
                var index2 = $.inArray(user, prp.agreedCommuters);
                if (usermode == DRIVERMODE && prp.agreedDriver == "")
                    RideShareSB.append('<small>Take this ride?</small><br><input type="button" class="rounded compact" value="Accept" onclick="'+acc+'" /><br><input type="button" class="rounded compact" value="Reject" onclick="'+rej+'" />');
                else if (usermode == RIDERMODE && prp.agreedDriver != "" && index1>-1){
                    RideShareSB.append('<small>Take this ride?</small><br><input type="button" class="rounded compact" value="Accept" onclick="'+acc+'" /><br><input type="button" class="rounded compact" value="Reject" onclick="'+rej+'" />');

                }
                else if (prp.agreedDriver != "" && prp.potentiallyAgreedCommuters.length == 0)
                    RideShareSB.append('<small>Ride booked! </small>');
                else if ((prp.agreedDriver == "" && prp.potentiallyAgreedDriver == "") ||
                    (prp.agreedCommuters.length == 0 && prp.potentiallyAgreedCommuters.length == 0))
                    RideShareSB.append('<small>Ride rejected! </small>');
                else{
                    if (usermode==DRIVERMODE)
                        RideShareSB.append('<small>Waiting for confirmation of commuters! </small>');
                    else
                        RideShareSB.append('<small>Waiting for confirmation of driver! </small>');
                }
                    
            }
            else
            {
                //alert(id);
                prp = JSON.parse(rideRequests[id - rides.length]);
                //alert(rideRequests[id-rides.length]);
                RideShareSB.append('<small>No matches found for this ride! </small><br>');
                RideShareSB.append('<input type="button" class="rounded compact" value="Delete Ride" onclick="rideDelete('+id+')" />');
            }
            //alert(JSON.stringify(prp));
            RideShareSB.append('    </form>');
            RideShareSB.append('  </div>');
            var counterparts = '';
            
            if (usermode == DRIVERMODE) counterparts = prp.commuters;
            else    counterparts = prp.driver;
            if (typeof counterparts === "undefined") counterparts = 'none';
            if (usermode == DRIVERMODE)
                RideShareSB.append('  <div style="line-height: 150%; padding-left: 75px;">Commuters:<br/>');
            else
                RideShareSB.append('  <div style="line-height: 150%; padding-left: 75px;">Driver:<br/>');

            var ratingsPopUp;
            var userID;
            //alert(counterparts);
            counterparts=counterparts.toString();
            //if (counterparts.indexOf(",")!=-1){
            var counterpartlist = counterparts.split(",");
            //alert(counterpartlist.length + ' ' + JSON.stringify(counterpartlist));
            for (var i=0;i<counterpartlist.length;i++){
                var counterpart = counterpartlist[i];
                //alert(counterpart);
                if (counterpart=="none"){
                    RideShareSB.append("<input type=\"button\" class=\"rounded compact\" value=\""+counterpart+"\" />");
                    continue;
                }
                $.ajax({//get subject id
                    type:"GET",
                    url:"http://"+DimitrisRemote+"/subject/byURI/"+counterpart,
                    async:false,
                    crossDomain:true,
                    username:user,
                    password:pass,
                    beforeSend : function(xhr) {
                        xhr.withCredentials = true;
                        xhr.setRequestHeader("Authorization", "Basic " + user + ":" + pass);
                    },
                    accepts: "application/json",
                    dataType: "json",
                    success:function(data, textStatus, jqXHR){
                        //alert('success1 '+JSON.stringify(data));
                        if (data["versionInfo"]["previousVersion"]=="none" || typeof(data["currentReputationReport"])=='undefined'){
                            RideShareSB.append("<input type=\"button\" class=\"rounded compact\" onclick=\"showOverlayDialog('Rating For "+counterpart+"', 'No Rating Avialble', 'X', '', '', '');\" value=\""+counterpart+"\" />");

                        }
                        else{
                            //alert(JSON.stringify(data.subject_id));
                            //get profile
                            var personal;
                            srvconn.GET('/OpenRideServer-RS/resources/users/'+ counterpart +'/profile', false,function(data){
                                //alert(JSON.stringify(data));
                                personal = data;
                            //alert(personal.ProfileResponse.mobilePhoneNumber);
                            }, function(x,s,e) {
                                fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Unfortunately, your profile information could not be loaded.')
                            });
                            $.ajax({//get subject reputation
                                type:"GET",
                                url:"http://"+DimitrisRemote+"/"+data["currentReputationReport"]["uri"],
                                async:false,
                                crossDomain:true,
                                username:user,
                                password:pass,
                                beforeSend : function(xhr) {
                                    xhr.withCredentials = true;
                                    xhr.setRequestHeader("Authorization", "Basic " + user + ":" + pass);
                                },
                                accepts: "application/json",
                                dataType: "json",
                                success:function(data, textStatus, jqXHR){
                                    if (usermode == RIDERMODE)
                                        RideShareSB.append("<input type=\"button\" class=\"rounded compact\" onclick=\"showRatingDialog('"+counterpart+"',"
                                            +data.json.average_StarRating+","
                                            +(data.json.total_StarRating/data.json.average_StarRating)+","
                                            +data.json.average_OnTime+","
                                            +data.json.average_Friendly+","
                                            +personal.ProfileResponse.mobilePhoneNumber+",'"
                                            +personal.ProfileResponse.carColour+ " " + personal.ProfileResponse.carBrand
                                            +"');\" value=\""+counterpart+"\" />");
                                    else
                                        RideShareSB.append("<input type=\"button\" class=\"rounded compact\" onclick=\"showRatingDialog('"+counterpart+"',"
                                            +data.json.average_StarRating+","
                                            +(data.json.total_StarRating/data.json.average_StarRating)+","
                                            +data.json.average_OnTime+","
                                            +data.json.average_Friendly+","
                                            +personal.ProfileResponse.mobilePhoneNumber+",'"
                                            +"undefined undefined"
                                            +"');\" value=\""+counterpart+"\" />");
                                //                                    RideShareSB.append("<input type=\"button\" class=\"rounded compact\" onclick=\"showOverlayDialog('Rating For "+counterpart+"', '"
                                //                                        +ratingsPopUp
                                //                                        +"', 'X', '', '', '');\" value=\""+counterpart+"\" />");

                                },
                                error:function(jq,textStatus,errorThrown){
                                    //alert('fail');
                                    RideShareSB.append("<input type=\"button\" class=\"rounded compact\" value=\""+counterpart+"\" />");

                                }
                            });
                        }
                    },
                    error:function(jq,textStatus,errorThrown){
                        //alert('fail1');
                        //fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, Something went wrong. Please try again later.');
                        RideShareSB.append("<input type=\"button\" class=\"rounded compact\" value=\""+counterpart+"\" />");
                    }
                });
            }
            //            }
            //            else{
            //                $.ajax({//get subject id
            //                    type:"GET",
            //                    url:"http://"+DimitrisRemote+"/subject/byURI/"+counterparts,
            //                    async:false,
            //                    crossDomain:true,
            //                    username:user,
            //                    password:pass,
            //                    beforeSend : function(xhr) {
            //                        xhr.withCredentials = true;
            //                        xhr.setRequestHeader("Authorization", "Basic " + user + ":" + pass);
            //                    },
            //                    accepts: "application/json",
            //                    dataType: "json",
            //                    success:function(data, textStatus, jqXHR){
            //                        //alert('success1 '+JSON.stringify(data));
            //
            //                        //alert(JSON.stringify(data.subject_id));
            //                        $.ajax({//get subject reputation
            //                            type:"GET",
            //                            url:"http://"+DimitrisRemote+"/"+data["currentReputationReport"]["uri"],
            //                            async:false,
            //                            crossDomain:true,
            //                            username:user,
            //                            password:pass,
            //                            beforeSend : function(xhr) {
            //                                xhr.withCredentials = true;
            //                                xhr.setRequestHeader("Authorization", "Basic " + user + ":" + pass);
            //                            },
            //                            accepts: "application/json",
            //                            dataType: "json",
            //                            success:function(data, textStatus, jqXHR){
            //                                //alert('success ' + JSON.stringify(data));
            //                                ratingsPopUp='<table><tr><td ><b>Overall Rating:</b></td><td> '+data.json.average_StarRating+'</td></tr><tr><td></td></tr><tr><td></td></tr>'
            //                                +'<tr><td > <b>Detailed Rating:</b></td><tr>'
            //                                +'<tr><td>Price:</td><td>5</td></tr>'
            //                                +'<tr><td>Reliability: </td><td>'+data.json.average_OnTime+'</td></tr>'
            //                                +'<tr><td>Communication:</td><td> 5</td></tr>'
            //                                +'<tr><td>Friendliness:</td><td>'+data.json.average_Friendly+'</td></tr></table>    ';
            //
            //                                RideShareSB.append("<input type=\"button\" class=\"rounded compact\" onclick=\"showOverlayDialog('Rating For "+counterparts+"', '"+ratingsPopUp+"', 'X', '', '', '');\" value=\""+counterparts+"\" />");
            //
            //                            },
            //                            error:function(jq,textStatus,errorThrown){
            //                                //alert('fail');
            //                                RideShareSB.append("<input type=\"button\" class=\"rounded compact\" value=\""+counterparts+"\" />");
            //
            //                            }
            //                        });
            //                    },
            //                    error:function(jq,textStatus,errorThrown){
            //                    //alert('fail1');
            //                    }
            //                });
            //            }
            //RideShareSB.append('<dialog id="myDialog">this is dialog</dialog>');
            //RideShareSB.append('<script> function myFunction() {alert("0");var x = document.getElementById("myDialog");alert("1");x.open = true;}</script>');
            //RideShareSB.append('    <small>Estimated drving time: ' + ohours + ':' + omin + ' Hour, driving distance: '+sharedDistanceKm+' km, Detour: '+detourKm+' km, Best offer: ' + round(entry.matchPriceCents/100,2) + ' &euro;, Anz. Pers.: ' + entry.noOfPassengers);

            RideShareSB.append('</small><small><table>');
            if (usermode==DRIVERMODE){
                RideShareSB.append('<tr>');
                RideShareSB.append('<td valign="top" align="right" style="color:#666666;">Price:</td>');
                //                switch(prp.currency){
                //                    case 'Shekel':
                //                        currency='&#8362;';
                //                        break;
                //                    case 'Euro':
                //                        currency='&#128;';
                //                        break;
                //                    case 'Dollar':
                //                        currency='$';
                //                        break;
                //                    case 'Pound':
                //                        currency='&#163;';
                //                        break;
                //                }
                if (typeof (prp.priceBound) == 'undefined')
                    RideShareSB.append('<td valign="top">'+prp.priceRange[0]+' &#8362;</td>');
                else
                    RideShareSB.append('<td valign="top">'+prp.priceBound+' &#8362;</td>');

                RideShareSB.append('</tr>');
            }
            else if(usermode == RIDERMODE && (!unmatched)){
                RideShareSB.append('<tr>');
                RideShareSB.append('<td valign="top" align="right" style="color:#666666;">Price:</td>');
                //                switch(prp.currency){
                //                    case 'Shekel':
                //                        currency='&#8362;';
                //                        break;
                //                    case 'Euro':
                //                        currency='&#128;';
                //                        break;
                //                    case 'Dollar':
                //                        currency='$';
                //                        break;
                //                    case 'Pound':
                //                        currency='&#163;';
                //                        break;
                //                }
                //alert(prp.index + ' typeof(pricebound) is ' + typeof (prp.priceBound));
                if (typeof (prp.priceBound) == 'undefined')
                    RideShareSB.append('<td valign="top">'+prp.priceRange[0]+' &#8362;</td>');
                else
                    RideShareSB.append('<td valign="top">'+prp.priceBound+' &#8362;</td>');

                RideShareSB.append('</tr>');
            }

            RideShareSB.append('<tr>');
            RideShareSB.append('<td valign="top" align="right" style="color:#666666;">Smoking:</td>');
            RideShareSB.append('<td valign="top">'+prp.smoking+'</td>');
            RideShareSB.append('</tr>');
            RideShareSB.append('<tr>');
            RideShareSB.append('<td valign="top" align="right" style="color:#666666;">Pets:</td>');
            RideShareSB.append('<td valign="top">'+prp.pets+'</td>');
            RideShareSB.append('</tr>');
            RideShareSB.append('</table></small>');
            RideShareSB.append('  </div>');
            //RideShareSB.append('    <input type="button" class="rounded compact" value="Accept" onclick="" style="width: 72px;" />');
            //RideShareSB.append('    <input type="button" class="rounded compact" value="Reject" onclick="" style="width: 80px;" />');
            //RideShareSB.append('    <input type="button" class="rounded compact" value="Show Route " onclick="" style="width: 130px;" />');
            //}
            if (contentDiv) {
                activeMatchContentDiv = contentDiv;
            }
            activeMatchContentDiv[0].innerHTML = RideShareSB.toString();
                
                
        },
      
        parseinactivematcheslist : function(rideId, contentDiv){

            var sb = new StringBuilder();
            this.tmpRide = '';

            if(usermode == DRIVERMODE){
                var inactofferresult = '';
                try {
                    inactofferresult = JSON.parse(inactoffermatchlist);
                }
                catch (e) {
                    inactofferresult = 'undefined';
                }

                if(typeof (inactofferresult.list) != 'undefined' && typeof (inactofferresult.list[0].MatchResponse) != 'undefined'){
                    if(typeof (inactofferresult.list[0].MatchResponse.length) == 'undefined'){
                        inactofferresult.list[0].MatchResponse = [inactofferresult.list[0].MatchResponse];
                    }

                    for(var i=0;i< inactofferresult.list[0].MatchResponse.length; i++){
                        var entry = inactofferresult.list[0].MatchResponse[i];
                        this.tmpRide = entry;

                        var startDate = new Date(entry.matchExpectedStartTime);
                        var oday = startDate.getDate();
                        if(oday < 10)oday = '0'+oday;
                        var omonth = startDate.getMonth()+1;
                        if(omonth < 10)omonth = '0'+omonth;
                        var oyear = startDate.getFullYear();
                        var ohours = startDate.getHours();
                        if(ohours < 10)ohours = '0'+ohours;
                        var omin = startDate.getMinutes();
                        if(omin < 10)omin = '0'+omin;

                        var priceEuro = entry.matchPriceCents/100;
                        priceEuro = priceEuro.toFixed(2).replace('.',',');

                        //DEBUG
                        //entry.riderState=1
                        //entry.driverState=1

                        var isrejected = this.isrejectedmatch(entry.driverState, entry.riderState);

                        var stateHighlightColor = '#fffacd'; // yellow
                        if (entry.driverState == 1 && entry.riderState == 1)
                            stateHighlightColor = '#f0fff0'; // green
                        else if (isrejected)
                            stateHighlightColor = '#ffe4e1'; // red

                        // Beginning of matching row:
                        sb.append('<div class="matching-row" style="padding: 5px; border-top: 1px solid #e2e2e2;">');

                        // Show details only for unrejected matches:
                        if (entry.riderNickname) {
                            sb.append('  <div class="profile-info-short" style="margin: 0 15px 0 0; float: left; text-align: right;">');
                            if (entry.riderNickname) {
                                sb.append('    <img src="../../OpenRideWeb/pictures/profile/' + entry.riderNickname + '_' + entry.riderCustId + '_thumb.jpg" alt="Profilbild von ' + entry.riderNickname + '" style="background: rgb(221, 221, 221); width: 60px; height: 60px; display: block; margin: 0 0 3px 0;" /><small>' + entry.riderRatingsRatioPercent + '% <img src="../img/rated_1.png" style="vertical-align: -3px;" /></small>');
                            }
                            else {
                                sb.append('    <img src="../../OpenRideWeb/pictures/profile/' + entry.driverNickname + '_' + entry.driverCustId + '_thumb.jpg" alt="Profilbild von ' + entry.driverNickname + '" style="background: rgb(221, 221, 221); width: 60px; height: 60px; display: block; margin: 0 0 3px 0;" /><small>' + entry.driverRatingsRatioPercent + '% <img src="../img/rated_1.png" style="vertical-align: -3px;" /></small>');
                            }
                            sb.append('  </div>');
                        }

                        sb.append('  <div style="margin: -5px -5px 3px 0; padding: 1px 5px 0px 5px; float: right; text-align: center; background: '+stateHighlightColor+'; min-width: 85px;">');
                        sb.append('    <form class="ride">');
                        sb.append(this.getRatingStateInfoControls(entry.riderRouteId));
                        sb.append('    </form>');
                        sb.append('  </div>');

                        if (entry.riderNickname) {
                            var sharedDistanceKm = entry.matchSharedDistanceMeters/1000;
                            sharedDistanceKm = round(sharedDistanceKm,2);
                            var detourKm = entry.matchDetourMeters/1000;
                            detourKm = round(detourKm,2);

                            var start = entry.startPtAddress;
                            var end = entry.endPtAddress;

                            if (start.match("^.*:.*$")) {
                                start = start.split(':')[1];
                            }

                            if (end.match("^.*:.*$")) {
                                end = end.split(':')[1];
                            }

                            sb.append('  <div style="line-height: 150%; padding-left: 75px;">');
                            sb.append('    <strong>' + entry.riderNickname + '</strong> &ndash;<br />');
                            sb.append('    <small>' + ohours + ':' + omin + ' Uhr, Mitnahmestrecke: '+sharedDistanceKm+' km, Umweg: '+detourKm+' km, Preisvorschlag: ' + round(entry.matchPriceCents/100,2) + ' &euro;, Anz. Pers.: ' + entry.noOfPassengers);
                            if (typeof (entry.riderMobilePhoneNo) != 'undefined') {
                                sb.append(', Handy: <a href="tel:' + entry.riderMobilePhoneNo + '" class="phone">' + entry.riderMobilePhoneNo + '</a>');
                            }

                            sb.append('</small><small><table>');
                            sb.append('<tr>');
                            sb.append('<td valign="top" align="right" style="color:#666666;">Pick-up Point:</td>');
                            sb.append('<td valign="top">'+start+'</td>');
                            sb.append('</tr>');
                            sb.append('<tr>');
                            sb.append('<td valign="top" align="right" style="color:#666666;">End:</td>');
                            sb.append('<td valign="top">'+end+'</td>');
                            sb.append('</tr>');
                            sb.append('</table></small>');

                            //                            sb.append('</small><br style="clear: right;" /><small style="display: block; margin-left: 34px;"><span style="margin-left: -34px;">Start:</span> '+entry.startPtAddress+'<br /><span style="margin-left: -34px;">Ziel:</span> '+entry.endPtAddress+'</small>');
                            sb.append('  </div>');
                        }
                        else {
                            sb.append(' <div style="line-height: 140%; padding-left: 75px;">');
                            sb.append('   <strong>' + entry.driverNickname + '</strong> &ndash;<br />');
                            sb.append('   <small>' + ohours + ':' + omin + ' Uhr');
                            if (typeof (entry.driverMobilePhoneNo) != 'undefined') {
                                sb.append('<br />Handy: <a href="tel:' + entry.driverMobilePhoneNo + '" class="phone">' + entry.driverMobilePhoneNo + '</a>');
                                sb.append('<br />Auto: ' + entry.driverCarBrand + ', ' + entry.driverCarColour);
                                if (typeof (entry.driverCarBuildYear) != 'undefined' && entry.driverCarBuildYear != '') {
                                    sb.append(', Bj. ' + entry.driverCarBuildYear);
                                }
                                if (typeof (entry.driverCarPlateNo) != 'undefined' && entry.driverCarPlateNo != '') {
                                    sb.append(', Kennz. ' + entry.driverCarPlateNo);
                                }
                            }
                            sb.append('</small><br style="clear: both;" />');
                            sb.append(' </div>');
                        }
                        sb.append('</div>');
                    }
                }
                else{
            //sb.append('<p>Leider wurden f&uuml;r diese Fahrt keine passenden Mitfahrer gefunden.</p>');
            }
            }
            else if(usermode == RIDERMODE){
                var inactsearchresult = '';

                try {
                    inactsearchresult = JSON.parse(inactsearchmatchlist);
                }
                catch (e) {
                    inactsearchresult = 'undefined';
                }

                if(typeof (inactsearchresult.list) != 'undefined' && typeof (inactsearchresult.list[0].MatchResponse) != 'undefined'){
                    if(typeof (inactsearchresult.list[0].MatchResponse.length) == 'undefined'){
                        inactsearchresult.list[0].MatchResponse = [inactsearchresult.list[0].MatchResponse];
                    }

                    for(var i=0;i< inactsearchresult.list[0].MatchResponse.length; i++){
                        var entry = inactsearchresult.list[0].MatchResponse[i];
                        this.tmpRide = entry;

                        var startDate = new Date(entry.matchExpectedStartTime);
                        var oday = startDate.getDate();
                        if(oday < 10)oday = '0'+oday;
                        var omonth = startDate.getMonth()+1;
                        if(omonth < 10)omonth = '0'+omonth;
                        var oyear = startDate.getFullYear();
                        var ohours = startDate.getHours();
                        if(ohours < 10)ohours = '0'+ohours;
                        var omin = startDate.getMinutes();
                        if(omin < 10)omin = '0'+omin;

                        var priceEuro = entry.matchPriceCents/100;
                        priceEuro = priceEuro.toFixed(2).replace('.',',');

                        //DEBUG
                        //entry.riderState=1
                        //entry.driverState=1

                        var isrejected = this.isrejectedmatch(entry.driverState, entry.riderState);

                        var stateHighlightColor = '#fffacd'; // yellow
                        if (entry.driverState == 1 && entry.riderState == 1)
                            stateHighlightColor = '#f0fff0'; // green
                        else if (isrejected)
                            stateHighlightColor = '#ffe4e1'; // red

                        // Beginning of matching row:
                        sb.append('<div class="matching-row" style="padding: 5px; border-top: 1px solid #e2e2e2;">');

                        sb.append('  <div class="profile-info-short" style="margin: 0 15px 0 0; float: left; text-align: right;">');
                        if (entry.riderNickname) {
                            sb.append('    <img src="../../OpenRideWeb/pictures/profile/' + entry.riderNickname + '_' + entry.riderCustId + '_thumb.jpg" alt="Profilbild von ' + entry.riderNickname + '" style="background: rgb(221, 221, 221); width: 60px; height: 60px; display: block; margin: 0 0 3px 0;" /><small>' + entry.riderRatingsRatioPercent + '% <img src="../img/rated_1.png" style="vertical-align: -3px;" /></small>');
                        }
                        else {
                            sb.append('    <img src="../../OpenRideWeb/pictures/profile/' + entry.driverNickname + '_' + entry.driverCustId + '_thumb.jpg" alt="Profilbild von ' + entry.driverNickname + '" style="background: rgb(221, 221, 221); width: 60px; height: 60px; display: block; margin: 0 0 3px 0;" /><small>' + entry.driverRatingsRatioPercent + '% <img src="../img/rated_1.png" style="vertical-align: -3px;" /></small>');
                        }
                        sb.append('  </div>');

                        sb.append('  <div style="margin: -5px -5px 3px 0; padding: 1px 5px 0px 5px; float: right; text-align: center; background: '+stateHighlightColor+'; min-width: 85px;">');
                        sb.append('    <form class="ride">');
                        sb.append(this.getRatingStateInfoControls(entry.riderRouteId));
                        sb.append('    </form>');
                        sb.append('  </div>');

                        if (entry.riderNickname) {
                            var sharedDistanceKm = entry.matchSharedDistanceMeters/1000;
                            sharedDistanceKm = round(sharedDistanceKm,2);
                            var detourKm = entry.matchDetourMeters/1000;
                            detourKm = round(detourKm,2);

                            sb.append('  <div style="line-height: 150%; padding-left: 75px;">');
                            sb.append('    <strong>' + entry.riderNickname + '</strong> &ndash;<br />');
                            sb.append('    <small>' + ohours + ':' + omin + ' Uhr, Strecke: '+sharedDistanceKm+' km, Umweg: '+detourKm+' km, Preisvorschlag: ' + round(entry.matchPriceCents/100,2) + ' &euro;');
                            if (typeof (entry.riderMobilePhoneNo) != 'undefined') {
                                sb.append(', Handy: <a href="tel:' + entry.riderMobilePhoneNo + '" class="phone">' + entry.riderMobilePhoneNo + '</a>');
                            }
                            sb.append('</small><br style="clear: right;" /><small style="display: block; margin-left: 34px;"><span style="margin-left: -34px;">Start:</span> '+entry.startPtAddress+'<br /><span style="margin-left: -34px;">End:</span> '+entry.endPtAddress+'</small>');
                            sb.append('  </div>');
                        }
                        else {
                            sb.append(' <div style="line-height: 140%; padding-left: 75px;">');
                            sb.append('   <strong>' + entry.driverNickname + '</strong> &ndash;<br />');
                            sb.append('   <small>' + ohours + ':' + omin + ' Uhr, Preisvorschlag: ' + round(entry.matchPriceCents/100,2) + ' &euro;');
                            if (typeof (entry.driverMobilePhoneNo) != 'undefined') {
                                sb.append('<br />Handy: <a href="tel:' + entry.driverMobilePhoneNo + '" class="phone">' + entry.driverMobilePhoneNo + '</a>');
                                sb.append('<br />Auto: ' + entry.driverCarBrand + ', ' + entry.driverCarColour);
                                if (typeof (entry.driverCarBuildYear) != 'undefined' && entry.driverCarBuildYear != '') {
                                    sb.append(', Bj. ' + entry.driverCarBuildYear);
                                }
                                if (typeof (entry.driverCarPlateNo) != 'undefined' && entry.driverCarPlateNo != '') {
                                    sb.append(', Kennz. ' + entry.driverCarPlateNo);
                                }
                            }
                            sb.append('</small><br style="clear: both;" />');
                            sb.append(' </div>');
                        }
                        sb.append('</div>');
                    }
                }
                else{
                    sb.clear();
                    sb.append('');
                //sb.append('<p>Leider wurde keine passenden Fahrer gefunden.</p>');
                }
            }

            // Buttons to change or delete a ride. Show buttons only if driver and ride not accapted/declined the offer/search.
            var showRouteInvocation;
            if ((typeof (this.tmpRide.driverState) == 'undefined') && (typeof (this.tmpRide.riderState) == 'undefined') && (usermode != RIDERMODE)) {
                var realRideId = rideId.replace('r','');
                //                var deleteRideInvocation = "javascript:showOverlayDialog('Diese Fahrt wirklich l&ouml;schen?', '', '      Ja      ', 'fokus.openride.mobclient.controller.modules.modulemanager.deleteRide("+realRideId+");', '     Nein     ', '');";
                showRouteInvocation = "javascript:fokus.openride.mobclient.controller.modules.modulemanager.setupViaPtRoute(\'"+realRideId+"\');";
                //                var modRide = "fokus.openride.mobclient.controller.modules.modulemanager.modifyRide("+realRideId+")";
                sb.append('<form>');
                sb.append('  <div style="padding: 5px 0; text-align: center; clear: both;">');
                //sb.append('    <input type="button" class="rounded compact" value="L&ouml;schen" onclick="'+deleteRideInvocation+'" style="width: 80px;" />');
                sb.append('    <input type="button" class="rounded compact" value="Route anzeigen" onclick="'+showRouteInvocation+'" style="width: 290px;" />');

                sb.append('  </div>');
                sb.append('</form>');
            }
            if (contentDiv) {
                activeMatchContentDiv = contentDiv;
            }

            activeMatchContentDiv[0].innerHTML = sb.toString();
        },

        isrejectedmatch : function(driverState, riderState) {
            return (driverState==0 || driverState==2 || driverState==3 || riderState==0 ||  riderState==2 || riderState==3);
        },

        getMatchStateInfoControls : function(rideId, riderRouteId, driverState, riderState, contentDiv) {

            var htmlInfoControls = '';

            if (driverState == 1 && riderState == 1) {
                // It is settled => Passenger / Driver view
                htmlInfoControls = '<small>Fahrt gebucht!</small>';
            }
            else if (driverState == 2 || riderState == 2) {
                // At least one of the parties canceled => canceled match view
                if (usermode == DRIVERMODE) {
                    if (driverState == 2) {
                        htmlInfoControls = '<small>Storniert</small>';
                    }
                    else {
                        htmlInfoControls = '<small>Hat storniert</small>';
                    }
                }
                else if (usermode == RIDERMODE) {
                    if (riderState == 2) {
                        htmlInfoControls = '<small>Storniert</small>';
                    }
                    else {
                        htmlInfoControls = '<small>Hat storniert</small>';
                    }
                }
            }
            else if (driverState == 3 || riderState == 3) {
                // At least one of the parties became unavailable
                if (usermode == DRIVERMODE) {
                    if (driverState == 3) {
                        htmlInfoControls = '<small>Ausgebucht</small>';
                    }
                    else {
                        htmlInfoControls = '<small>Schon vergeben</small>';
                    }
                }
                else if (usermode == RIDERMODE) {
                    if (riderState == 3) {
                        htmlInfoControls = '<small>Schon vergeben</small>';
                    }
                    else {
                        htmlInfoControls = '<small>Ausgebucht</small>';
                    }
                }
            }
            else if (driverState == 0 || riderState == 0) {
                // At least one of the parties rejected => rejected match view
                if (usermode == DRIVERMODE) {
                    if (driverState == 0) {
                        htmlInfoControls = '<small>Abgelehnt</small>';
                    }
                    else {
                        htmlInfoControls = '<small>Hat abgelehnt</small>';
                    }
                }
                else if (usermode == RIDERMODE) {
                    if (riderState == 0) {
                        htmlInfoControls = '<small>Abgelehnt</small>';
                    }
                    else {
                        htmlInfoControls = '<small>Hat abgelehnt</small>';
                    }
                }
            }
            else {
                // We're still awaiting a response => candidate match view
                if (usermode == DRIVERMODE) {
                    
                    acceptOnClickAction = 'fokus.openride.mobclient.controller.serverconnector.PUTaction(\'/OpenRideServer-RS/resources/users/'+ this.username +'/rides/offers/'+ rideId +'/matches/'+ riderRouteId +'/accept\', false, function() {fokus.openride.mobclient.controller.modules.modulemanager.receiveMatches(\'r'+rideId+'\', false)}, function(x,s,e) { fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,\'This inquiry is sadly no longer available.\')})';
                    rejectOnClickAction = 'fokus.openride.mobclient.controller.serverconnector.PUTaction(\'/OpenRideServer-RS/resources/users/'+ this.username +'/rides/offers/'+ rideId +'/matches/'+ riderRouteId +'/reject\', false, function() {fokus.openride.mobclient.controller.modules.modulemanager.receiveMatches(\'r'+rideId+'\', false)}, function(x,s,e) { fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,\'This inquiry is sadly no longer available.\')})';

                    if (riderState == 1) {
                        // Offer [Accept] and [Reject] buttons
                        htmlInfoControls = '<small>Will mitfahren</small><br />'
                        + '<input type="button" class="adjustleft" value="Annehmen" onclick="'+acceptOnClickAction+'" /><br />'
                        + '<input type="button" value="Ablehnen" onclick="'+rejectOnClickAction+'" />';
                    }
                    else if (driverState == 1) {
                        // Offer [Reject] button
                        htmlInfoControls = '<small>Angefragt</small><br />'
                        + '<input type="button" value="Ablehnen" onclick="'+rejectOnClickAction+'" />';
                    }
                    else {
                        // Offer [Request] and [Reject] buttons
                        htmlInfoControls = '<input type="button" value="Anfragen" onclick="'+acceptOnClickAction+'" /><br />'
                        + '<input type="button" value="Ablehnen" onclick="'+rejectOnClickAction+'" />';
                    }

                }
                else if (usermode == RIDERMODE) {

                    acceptOnClickAction = 'fokus.openride.mobclient.controller.serverconnector.PUTaction(\'/OpenRideServer-RS/resources/users/'+ this.username +'/rides/searches/'+ riderRouteId +'/matches/'+ rideId +'/accept\', false, function() {fokus.openride.mobclient.controller.modules.modulemanager.receiveMatches(\'r'+rideId+'\', false)}, function(x,s,e) { fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,\'This ride offer is sadly no longer available.\')})';
                    rejectOnClickAction = 'fokus.openride.mobclient.controller.serverconnector.PUTaction(\'/OpenRideServer-RS/resources/users/'+ this.username +'/rides/searches/'+ riderRouteId +'/matches/'+ rideId +'/reject\', false, function() {fokus.openride.mobclient.controller.modules.modulemanager.receiveMatches(\'r'+rideId+'\', false)}, function(x,s,e) { fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,\'This ride offer is sadly no longer available.\')})';

                    if (riderState == 1) {
                        // Offer [Reject] button
                        htmlInfoControls = '<small>Angefragt</small><br />'
                        + '<input type="button" value="Ablehnen" onclick="'+rejectOnClickAction+'" />';
                    }
                    else if (driverState == 1) {
                        // Offer [Book] and [Reject] buttons
                        htmlInfoControls = '<small>Bietet Fahrt an</small><br />'
                        + '<input type="button" value="Buchen" onclick="'+acceptOnClickAction+'" /><br />'
                        + '<input type="button" value="Ablehnen" onclick="'+rejectOnClickAction+'" />';
                    }
                    else {
                        // Offer [Request] and [Reject] buttons
                        htmlInfoControls = '<input type="button" value="Anfragen" onclick="'+acceptOnClickAction+'" /><br /> '
                        + '<input type="button" value="Ablehnen" onclick="'+rejectOnClickAction+'" />';
                    }
                }
            }

            return htmlInfoControls;
        },

        getRatingStateInfoControls: function(matchRiderRouteID){

            var openratings = '';
            try{
                openratings = JSON.parse(openratingslist);
            }
            catch(e){
                openratings = '';
            }

            var htmlInfoControls = '';

            rateOnClickAction = 'fokus.openride.mobclient.controller.modules.modulemanager.setTabContent(2, 1)';

            //check open ratings
            //if match has open ratings, show button linked to open rating UI
            if(typeof (openratings.list[0].OpenRatingResponse) != 'undefined'){
                if(typeof (openratings.list[0].OpenRatingResponse.length) == 'undefined'){
                    openratings.list[0].OpenRatingResponse = [openratings.list[0].OpenRatingResponse];
                }
                for(var i=0;i< openratings.list[0].OpenRatingResponse.length; i++){
                    var entry = openratings.list[0].OpenRatingResponse[i];
                    if(entry.riderRouteId == matchRiderRouteID)
                        htmlInfoControls =  '<input type="button" value="Bewerten" onclick="'+rateOnClickAction+'" />';
                }
            }

            return htmlInfoControls;
        },

        receiveMatches : function(rideId, contentDiv){
            // Create dynamic list depending on usermode
            if (usermode == DRIVERMODE) {
            // Get all matches for ride.
                
            /*srvconn.GET('/OpenRideServer-RS/resources/users/'+ this.username +'/rides/offers/'+rideId.replace('r','')+'/matches',
                    false, this.setMatches, function(x,s,e) {
                        clearInterval(tabListActiveRefreshTimer);
                        fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Dieses Fahrtangebot ist nicht mehr verf&uuml;gbar.')
                    });*/
            } else {
            // Get all matches for search.
            /*srvconn.GET('/OpenRideServer-RS/resources/users/'+ this.username +'/rides/searches/'+rideId.replace('r','')+'/matches',
                    false, this.setMatches, function(x,s,e) {
                        clearInterval(tabListActiveRefreshTimer);
                        fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Dieses Gesuch ist nicht mehr verf&uuml;gbar.')
                    });*/
            }
            this.parsematcheslist(rideId, contentDiv);
        },

        receiveInactiveMatches : function(rideId, contentDiv){
            if(usermode == DRIVERMODE){
                srvconn.GET('/OpenRideServer-RS/resources/users/'+ this.username +'/rides/offers/'+rideId.replace('r','')+'/matches',
                    false, this.setInactiveOfferMatches, function(x,s,e) {
                        fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'This ride offer is no longer available.')
                    });
            }
            else if(usermode == RIDERMODE){
                // Get all matches for search.
                srvconn.GET('/OpenRideServer-RS/resources/users/'+ this.username +'/rides/searches/'+rideId.replace('r','')+'/matches',
                    false, this.setInactiveSearchMatches, function(x,s,e) {
                        fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'This offer is no longer available.')
                    });
            }

            this.parseinactivematcheslist(rideId, contentDiv);
        },

        receiveUpdates : function(){
            srvconn.GET('/OpenRideServer-RS/resources/configuration/updates',
                false, function(updateData) {
                    fokus.openride.mobclient.controller.modules.modulemanager.setriderupdatecount(updateData.UpdateResponse.updatedsearches);
                    fokus.openride.mobclient.controller.modules.modulemanager.setdriverupdatecount(updateData.UpdateResponse.updatedoffers);
                }, function(x,s,e) {
                    clearInterval(updateCountRefreshTimer);
                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Error receiving update data.')
                });
        },

        getServiceType : function() {
            return serviceType;
        },

        setServiceType : function(type) {
            serviceType = type;
        },

        getRideId : function() {
            return rideId;
        },

        deleteModAdrFromBox : function(ddBoxId) {
            var ddBox = document.getElementById(ddBoxId);
            if (ddBox.length > 0) {
                for (var i = 0; i < ddBox.length; i++) {
                    if (ddBox[i].mod) {
                        ddBox[i] = null;
                    }
                }
            }
        },

        modifyRide : function (rideid) {
            var ride = this.tmpRide;

            rideId = rideid;

            var optionStartAdr;
            var adrStartBox;
            var optionDestAdr;
            var adrDestBox;
            var startDate;
            var oday;
            var omonth;
            var oyear;
            var ohours;
            var omin;

            this.deleteModAdrFromBox(offerstartdropdownid);
            this.deleteModAdrFromBox(offerdestdropdownid);
            this.deleteModAdrFromBox(searchstartdropdownid);
            this.deleteModAdrFromBox(searchdestdropdownid);

            if (usermode == DRIVERMODE) {

                if (ride != '') {
                    rideid = ride.rideid;
                }
                srvconn.GET('/OpenRideServer-RS/resources/users/'+ this.username +'/rides/offers/'+rideid,
                    false, this.setRide, function(x,s,e) {
                        fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Sorry, the offer to edit could not be loaded from the server.')
                    });

                var rideList = JSON.parse(ridelist).Offer;

                optionStartAdr = document.createElement('option');
                adrStartBox = document.getElementById(offerstartdropdownid);
                optionStartAdr.latln = rideList.ridestartPtLat+','+rideList.ridestartPtLon;
                optionStartAdr.innerHTML = rideList.startptAddress;
                optionStartAdr.mod = true;
                adrStartBox.add(optionStartAdr, null);
                adrStartBox.selectedIndex = adrStartBox.length - 1;

                optionDestAdr = document.createElement('option');
                adrDestBox = document.getElementById(offerdestdropdownid);
                optionDestAdr.latln = rideList.rideendPtLat+','+rideList.rideendPtLon;
                optionDestAdr.innerHTML = rideList.endptAddress;
                optionDestAdr.mod = true;
                adrDestBox.add(optionDestAdr, null);
                adrDestBox.selectedIndex = adrDestBox.length - 1;

                //Für FOKUS-DAY
                //                document.getElementById('offercommentta').value = rideList.rideComment;
                //
                //                switch (rideList.acceptableDetourInKm) {
                //                    case 1:
                //                        document.getElementById('offerdetourselect').selectedIndex = 0;
                //                        break;
                //                    case 2:
                //                        document.getElementById('offerdetourselect').selectedIndex = 1;
                //                        break;
                //                    case 5:
                //                        document.getElementById('offerdetourselect').selectedIndex = 2;
                //                        break;
                //                    case 10:
                //                        document.getElementById('offerdetourselect').selectedIndex = 3;
                //                        break;
                //                    case 20:
                //                        document.getElementById('offerdetourselect').selectedIndex = 4;
                //                        break
                //                    case 30:
                //                        document.getElementById('offerdetourselect').selectedIndex = 5;
                //                        break;
                //                }
                //
                //                switch (rideList.acceptableDetourInKm) {
                //                    case "Euro":
                //                        document.getElementById('offerdetourselect').selectedIndex = 0;
                //                        break;
                //                    case "Shekel":
                //                        document.getElementById('offerdetourselect').selectedIndex = 1;
                //                        break;
                //                    case "Dollar":
                //                        document.getElementById('offerdetourselect').selectedIndex = 2;
                //                        break;
                //                    case "Pound":
                //                        document.getElementById('offerdetourselect').selectedIndex = 3;
                //                        break;
                //
                //                }

                document.getElementById('offerseatsselect').selectedIndex = rideList.offeredSeatsNo - 1;
                // document.getElementById('offerCurrency').selectedIndex = rideList.offeredCurrency;
                switch (rideList.rideprice) {
                    case 1.8:
                        document.getElementById('offerpriceselect').selectedIndex = 0;
                        break;
                    case 1.9:
                        document.getElementById('offerpriceselect').selectedIndex = 1;
                        break;
                    case 2.0:
                        document.getElementById('offerpriceselect').selectedIndex = 2;
                        break;
                    case 2.1:
                        document.getElementById('offerpriceselect').selectedIndex = 3;
                        break;
                    case 2.2:
                        document.getElementById('offerpriceselect').selectedIndex = 4;
                        break;
                    case 2.3:
                        document.getElementById('offerpriceselect').selectedIndex = 5;
                        break;
                }

                startDate = new Date(rideList.ridestartTime);
                oday = startDate.getDate();
                if(oday < 10)oday = '0'+oday;
                omonth = startDate.getMonth()+1;
                if(omonth < 10)omonth = '0'+omonth;
                oyear = startDate.getFullYear();
                ohours = startDate.getHours();
                if(ohours < 10)ohours = '0'+ohours;
                omin = startDate.getMinutes();
                if(omin < 10)omin = '0'+omin;

                document.getElementById('dayLabel').innerHTML = oday;
                document.getElementById('monthLabel').innerHTML = omonth;
                document.getElementById('yearLabel').innerHTML = oyear;
                document.getElementById('hourLabel').innerHTML = ohours;
                document.getElementById('minuteLabel').innerHTML = omin;

                calendar.setDay(startDate.getDate());
                calendar.setMin(startDate.getMinutes());
                calendar.setHour(startDate.getHours());
                calendar.setMonth(startDate.getMonth());
                calendar.setYear(startDate.getFullYear());


            } else {
                if (ride != '') {
                    rideid = ride.riderRouteId;
                }
                srvconn.GET('/OpenRideServer-RS/resources/users/'+ this.username +'/rides/searches/'+rideid,
                    false, this.setRide, function(x,s,e) {
                        fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Sorry, the ad you want to edit could not be loaded from the server.')
                    });

                var searchRideList = JSON.parse(ridelist).Search;

                optionStartAdr = document.createElement('option');
                adrStartBox = document.getElementById(searchstartdropdownid);
                optionStartAdr.latln = searchRideList.ridestartPtLat+','+searchRideList.ridestartPtLon;
                optionStartAdr.innerHTML = searchRideList.startptAddress;
                optionStartAdr.mod = true;
                adrStartBox.add(optionStartAdr, null);
                adrStartBox.selectedIndex = adrStartBox.length - 1;

                optionDestAdr = document.createElement('option');
                adrDestBox = document.getElementById(searchdestdropdownid);
                optionDestAdr.latln = searchRideList.rideendPtLat+','+searchRideList.rideendPtLon;
                optionDestAdr.innerHTML = searchRideList.endptAddress;
                optionDestAdr.mod = true;
                adrDestBox.add(optionDestAdr, null);
                adrDestBox.selectedIndex = adrDestBox.length - 1;

                //Für FOKUS-DAY
                //                document.getElementById('searchcommentta').value = searchRideList.rideComment;

                var watingTime = ((searchRideList.ridestartTimeLatest - searchRideList.ridestartTimeEarliest) / 1000) / 60;

                switch (watingTime) {
                    case 10:
                        document.getElementById('searchwaitimeselect').selectedIndex = 0;
                        break;
                    case 15:
                        document.getElementById('searchwaitimeselect').selectedIndex = 1;
                        break;
                    case 20:
                        document.getElementById('searchwaitimeselect').selectedIndex = 2;
                        break;
                    case 30:
                        document.getElementById('searchwaitimeselect').selectedIndex = 3;
                        break;
                    case 45:
                        document.getElementById('searchwaitimeselect').selectedIndex = 4;
                        break
                    case 60:
                        document.getElementById('searchwaitimeselect').selectedIndex = 5;
                        break;
                    case 120:
                        document.getElementById('searchwaitimeselect').selectedIndex = 6;
                        break;
                    case 180:
                        document.getElementById('searchwaitimeselect').selectedIndex = 7;
                        break;
                    case 240:
                        document.getElementById('searchwaitimeselect').selectedIndex = 8;
                        break;
                }

                document.getElementById('searchseatsselect').selectedIndex = searchRideList.searchedSeatsNo - 1;

                startDate = new Date(searchRideList.ridestartTimeEarliest);
                oday = startDate.getDate();
                if(oday < 10)oday = '0'+oday;
                omonth = startDate.getMonth()+1;
                if(omonth < 10)omonth = '0'+omonth;
                oyear = startDate.getFullYear();
                ohours = startDate.getHours();
                if(ohours < 10)ohours = '0'+ohours;
                omin = startDate.getMinutes();
                if(omin < 10)omin = '0'+omin;

                document.getElementById('searchdayLabel').innerHTML = oday;
                document.getElementById('searchmonthLabel').innerHTML = omonth;
                document.getElementById('searchyearLabel').innerHTML = oyear;
                document.getElementById('searchhourLabel').innerHTML = ohours;
                document.getElementById('searchminuteLabel').innerHTML = omin;

                calendar.setDay(startDate.getDate());
                calendar.setMin(startDate.getMinutes());
                calendar.setHour(startDate.getHours());
                calendar.setMonth(startDate.getMonth());
                calendar.setYear(startDate.getFullYear());
            }

            serviceType = modifyService;
            this.setTabContent(1, 0);
        },

        deleteRide : function (rideId) {

            if (usermode == DRIVERMODE) {
                srvconn.DELETE('/OpenRideServer-RS/resources/users/'+ this.username +'/rides/offers/'+rideId,
                    false,
                    showOverlayDialog('Your offer was successfully deleted.', '', 'OK', fokus.openride.mobclient.controller.modules.modulemanager.setView('activeofferUI'), '', ''),
                    function(x,s,e) {
                        fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Sorry, the offer could not be deleted.')
                    });
                fokus.openride.mobclient.controller.modules.modulemanager.setView('activeofferUI');

            } else {
                srvconn.DELETE('/OpenRideServer-RS/resources/users/'+ this.username +'/rides/searches/'+rideId,
                    false,
                    showOverlayDialog('Your request has been successfully deleted.', '', 'OK', fokus.openride.mobclient.controller.modules.modulemanager.setView('activesearchUI'), '', ''),
                    function(x,s,e) {
                        fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Unfortunately, this request could not be deleted.')
                    });

                fokus.openride.mobclient.controller.modules.modulemanager.setView('activesearchUI');

            }
        },

        setFullScreenMapView: function(viewId){

            var currViewId = document.getElementById(viewId);

            /* hide complete body content */
            document.getElementById('tabmenu').style.display = 'none';
            document.getElementById('content').style.display = 'none';

            /* show selected fullscreen map */
            currViewId.style.display = 'block';

            var position = nativemod.getUserLocation();
            if (position == null){
                position = new google.maps.LatLng(52.525798, 13.314266);
            } /*DUMMYPOSITION;*/
            else {
                var pos = position;
                position = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
            }

            if (viewId == 'offerstartgmapscreencontainer') {
                mapmod.setMapMode(0);
                mapmod.initialize('offerstartgmap', 'offerstartgmapaddressinput', position);
            }

            else if (viewId == 'offerdestgmapscreencontainer') {
                mapmod.setMapMode(0);
                mapmod.initialize('offerdestgmap', 'offerdestgmapaddressinput', position);
            }

            else if (viewId == 'searchstartgmapscreencontainer') {
                mapmod.setMapMode(0);
                mapmod.initialize('searchstartgmap', 'searchstartgmapaddressinput', position);
            }

            else if (viewId == 'searchdestgmapscreencontainer') {
                mapmod.setMapMode(0);
                mapmod.initialize('searchdestgmap', 'searchdestgmapaddressinput', position);
            }

            else if (viewId == 'offerroutegmapscreencontainer') {

                mapmod.setMapMode(1);
                if(!(document.getElementById('dummyaddrinput')) ){
                    var dummydiv = document.createElement('div');
                    dummydiv.id = "dummyaddrinput";
                }

                var routearr = mapmod.getRoutePath();
                var center;

                if (routearr != null && routearr != 'undefined') {
                    if (routearr.length >= 2) {
                        mapmod.initialize('offerroutegmap', 'dummyaddrinput', routearr[0]);
                    }
                    else
                        showOverlayDialog('Get Directions', '<br />The route can not currently be determined! Please check your Internet connection and try again!<br />', 'OK', 'fokus.openride.mobclient.controller.modules.modulemanager.setTabContent(1, 0)', '', '');
                }
            }

            else if (viewId == 'searchroutegmapscreencontainer') {

                mapmod.setMapMode(1);
                if(!(document.getElementById('dummyaddrinput')) ){
                    var dummydiv = document.createElement('div');
                    dummydiv.id = "dummyaddrinput";
                }
                var routearr = mapmod.getRoutePath();
                var center;
                if (routearr != null && routearr != 'undefined') {
                    if (routearr.length >= 2) {
                        mapmod.initialize('searchroutegmap', 'dummyaddrinput', routearr[0]);
                    }
                    else
                        showOverlayDialog('Get Directions', '<br />The route can not currently be determined! Please check your Internet connection and try again!<br />', 'OK', 'fokus.openride.mobclient.controller.modules.modulemanager.setTabContent(1, 0)', '', '');
                }
            }

            else if (viewId == 'viaptroutegmapscreencontainer') {
                mapmod.setMapMode(2);
                if(!(document.getElementById('dummyaddrinput')) ){
                    var dummydiv = document.createElement('div');
                    dummydiv.id = "dummyaddrinput";
                }
                var routearr = mapmod.getRoutePath();
                var center;
                if (routearr != null && routearr != 'undefined') {
                    if (routearr.length >= 2) {
                        mapmod.initialize('viaptroutegmap', 'dummyaddrinput', routearr[0]);
                    }
                    else
                        showOverlayDialog('Get Directions', '<br />Start and finish must be different!<br />', 'OK', 'fokus.openride.mobclient.controller.modules.modulemanager.setTabContent(1, 0)', '', '');
                }
            }

            else if (viewId == 'favoritesgmapscreencontainer') {
                mapmod.setMapMode(0);
                mapmod.initialize('favoritesgmap', 'favoritesgmapaddressinput', position);
            }

            this.displayedFullScreenMapId = viewId;
        },

        returnFromFullscreenMapView: function(){

            /* hide full screen map */
            document.getElementById(this.displayedFullScreenMapId).style.display = 'none';

            /* show previous content */

            /* hide complete body content */
            document.getElementById('tabmenu').style.display = 'block';
            document.getElementById('content').style.display = 'block';

        },

        parsefavoriteslist : function(favoriteslistdiv, resultlist){
            var result = JSON.parse(resultlist);
            var listhtml = '';
            favnames = new Array();

            if(typeof (result.list[0].FavoritePointResponse) != 'undefined'){
                if(typeof (result.list[0].FavoritePointResponse.length) == 'undefined'){
                    result.list[0].FavoritePointResponse = [result.list[0].FavoritePointResponse];
                }
                for(var i=0;i< result.list[0].FavoritePointResponse.length; i++){
                    var entry = result.list[0].FavoritePointResponse[i];

                    var favname = entry.favptDisplayName;
                    favnames.push(favname);
                    var favaddress = entry.favptAddress;
                    var favid = entry.favptId;

                    listhtml += "<div class='fav-row' style='border-bottom: 1px solid #ccc; padding: 5px;'>"+
                    "<div style='float: right; margin: 2px 0px 0 0;'><input type=\"button\" class=\"rounded compact\" onclick=\"showOverlayDialog('Really want to delete this bookmark?', '', 'Ja', 'fokus.openride.mobclient.controller.modules.modulemanager.deleteFavPt("+i+");', 'Nein', '');\" value=\"X\" /></div>"+
                    "<div style='line-height: 140%'>"+
                    "<strong>"+favname+"</strong><br />"+
                    favaddress+
                    "</div>"+
                    "</div>"
                }
            }else{
                listhtml = "<span style='font-weight:bold;padding:10px;'>No favorites to show!</span>";
            }

            document.getElementById(favoriteslistdiv).innerHTML = listhtml;
        },

        deleteFavPt : function(nameindex){
            srvconn.DELETE('/OpenRideServer-RS/resources/users/'+this.username+'/favoritepoints/'+encodeURI($("<div />").html(favnames[nameindex]).text()), true, function() {
                fokus.openride.mobclient.controller.modules.modulemanager.setView('favlistUI')
            }, function(x,s,e) {
                fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Unfortunately, the favorite could not be deleted.')
            });
        },

        parseprofilepersonaldata : function(result){
            //alert(result);
            
            //if(typeof (result.ProfileResponse) != 'undefined'){
            //                var personalData = result;//result.ProfileResponse;
            //                personalDetails = result;//result.ProfileResponse;
            var personalData = userProfile.getProfileRequest();
            personalDetails = userProfile;
            document.getElementById('profilepersonaldatafirstname').innerHTML = personalData.firstName;
            document.getElementById('profilepersonaldatalastname').innerHTML = personalData.lastName;
            if (personalData.gender == 'm') {
                genderString = 'male';
            }
            else {
                genderString = 'female';
            }
            document.getElementById('profilepersonaldatagender').innerHTML = genderString;
            var dateOfBirth;
            var dateOfBirthString ="";
            if (typeof (personalData.dateOfBirth) != 'undefined' && personalData.dateOfBirth.indexOf('/')!=-1) {
                dateOfBirth = new Date(personalData.dateOfBirth);
                dateOfBirthString = dateOfBirth.toLocaleDateString();//getDate() + '.' + (dateOfBirth.getMonth() + 1) + '.' + dateOfBirth.getFullYear()
            }
            else {
                dateOfBirthString = ''; //<em>nicht angegeben</em>';
            }
            //alert(dateOfBirth);

            document.getElementById('profilepersonaldatadateofbirth').value = dateOfBirthString;
            document.getElementById('profilepersonaldataemail').value = $("<div />").html(personalData.email).text();
            document.getElementById('profilepersonaldatamobilephonenumber').value = personalData.mobilePhoneNumber || '';
            //document.getElementById('profilepersonaldatafixedphonenumber').value = personalData.fixedPhoneNumber || '';
            if (personalData.streetAddress) {
                document.getElementById('profilepersonaldatastreetaddress').value = $("<div />").html(personalData.streetAddress).text() || '';
            }
            document.getElementById('profilepersonaldatazipcode').value = personalData.zipCode || '';
            if (personalData.city) {
                document.getElementById('profilepersonaldatacity').value = $("<div />").html(personalData.city).text() || '';
            }
            //alert(personalData.isSmoker);
            if (personalData.isSmoker == 'n') {
                isSmokerOption = 'profilepersonaldataissmoker-no';
            }
            else if (personalData.isSmoker == 'y') {
                isSmokerOption = 'profilepersonaldataissmoker-yes';
            }
            else {
                isSmokerOption = 'profilepersonaldataissmoker-null';
            }
            document.getElementById(isSmokerOption).checked = 'checked';
                
            //document.getElementById('profilepersonaldatalicensedate').value = personalData.licenseDate || '';
            if (personalData.carColour) {
                document.getElementById('profilepersonaldatacarcolour').value = $("<div />").html(personalData.carColour).text() || '';
            }
            if (personalData.carBrand) {
                document.getElementById('profilepersonaldatacarbrand').value = $("<div />").html(personalData.carBrand).text() || '';
            }
            //document.getElementById('profilepersonaldatacarbuildyear').value = personalData.carBuildYear || '';
            if (personalData.carPlateNo) {
                document.getElementById('profilepersonaldatacarplateno').value = $("<div />").html(personalData.carPlateNo).text() || '';
            }

        // }
        },

        validateDate : function(inputDateString) {
            validMonth = false;
            if (inputDateString.split(".").length==3 && inputDateString.split(".")[1] > 0 && inputDateString.split(".")[1] <= 12 && inputDateString.split(".")[0] > 0 && inputDateString.split(".")[0] <= 31 && inputDateString.split(".")[2] > 1900) {
                validMonth = true;
            }
            parsedDate = this.parsedate(inputDateString);
            if (!validMonth || !parsedDate) {
                return false;
            }
            else {
                return parsedDate;
            }
        },

        putprofilepersonaldata : function(){
            //alert('putprofilepersonaldata');
            /* Validation */

            // email address: required
            if (document.getElementById('profilepersonaldataemail').value == '') {
                //TODO: check for valid email address...
                showOverlayDialog('Specifying an email address is mandatory.', '', 'OK', '', '', '');
                return;
            }
            // email address: @ZU
            /*if (document.getElementById('profilepersonaldataemail').value.indexOf("zeppelin-university.de") == -1 && document.getElementById('profilepersonaldataemail').value.indexOf("zeppelin-university.net") == -1) {
                showOverlayDialog('E-Mail-Adresse muss auf "zeppelin-university.[net|de]" enden.', '', 'OK', '', '', '');
                return;
            }*/
            // mobile phone no.: required in valid format
            if (document.getElementById('profilepersonaldatamobilephonenumber').value == '') {
                showOverlayDialog('Specifying a mobile phone number is mandatory.', '', 'OK', '', '', '');
                return;
            }
            /*else if (document.getElementById('profilepersonaldatamobilephonenumber').value.match(/^[(]?0[ ]?1[5-7][0-9][ ]?[-/)]?[ ]?[1-9][-0-9 ]{6,16}$/) == null) {
                showOverlayDialog('Bitte tragen Sie eine g&uuml;ltige deutsche Handynummer ein.', '', 'OK', '', '', '');*/
            //return;
            //}
            // date of birth: not required, but if provided needs valid format
            var dateOfBirthValue;
            if (document.getElementById('profilepersonaldatadateofbirth').value != '') {
                dateOfBirthValue = new Date(this.validateDate(document.getElementById('profilepersonaldatadateofbirth').value)).toLocaleDateString();

                if (!dateOfBirthValue | !isValidDate(document.getElementById('profilepersonaldatadateofbirth').value, "DMY")) {
                    showOverlayDialog('Please specify a valid date of birth in the format "dd.mm.yyyy". The date must not be in the future.', '', 'OK', '', '', '');
                    return;
                }
            }
            // license date: not required, but if provided needs valid format
            /*var licenseDateValue = document.getElementById('profilepersonaldatalicensedate').value;
            if (licenseDateValue != '') {
                var today = new Date();
                if (licenseDateValue < 1900 || licenseDateValue > today.getFullYear()) {
                    showOverlayDialog('Bitte ein gültiges Jahr der Führerscheinausstellung im Format "JJJJ" angeben.', '', 'OK', '', '', '');
                    return;
                }
            }*/
            // carBuildYear: not required, but if provided needs valid format
            /*var carBuildYearValue = document.getElementById('profilepersonaldatacarbuildyear').value;
            if (carBuildYearValue != '') {
                today = new Date();
                if (carBuildYearValue < 1900 || carBuildYearValue > today.getFullYear()) {
                    showOverlayDialog('Bitte ein gültiges Baujahr im Format "JJJJ" angeben.', '', 'OK', '', '', '');
                    return;
                }
            }*/

            function isValidDate(dateStr, format) {
                if (format == null) {
                    format = "MDY";
                }
                format = format.toUpperCase();
                if (format.length != 3) {
                    format = "MDY";
                }
                if ( (format.indexOf("M") == -1) || (format.indexOf("D") == -1) ||
                    (format.indexOf("Y") == -1) ) {
                    format = "MDY";
                }
                if (format.substring(0, 1) == "Y") { // If the year is first
                    var reg1 = /^\d{2}(\-|\/|\.)\d{1,2}\1\d{1,2}$/
                    var reg2 = /^\d{4}(\-|\/|\.)\d{1,2}\1\d{1,2}$/
                } else if (format.substring(1, 2) == "Y") { // If the year is second
                    var reg1 = /^\d{1,2}(\-|\/|\.)\d{2}\1\d{1,2}$/
                    var reg2 = /^\d{1,2}(\-|\/|\.)\d{4}\1\d{1,2}$/
                } else { // The year must be third
                    var reg1 = /^\d{1,2}(\-|\/|\.)\d{1,2}\1\d{2}$/
                    var reg2 = /^\d{1,2}(\-|\/|\.)\d{1,2}\1\d{4}$/
                }
                // If it doesn't conform to the right format (with either a 2 digit year or 4 digit year), fail
                if ( (reg1.test(dateStr) == false) && (reg2.test(dateStr) == false) ) {
                    return false;
                }
                var parts = dateStr.split(RegExp.$1); // Split into 3 parts based on what the divider was
                // Check to see if the 3 parts end up making a valid date
                if (format.substring(0, 1) == "M") {
                    var mm = parts[0];
                } else
                if (format.substring(1, 2) == "M") {
                    var mm = parts[1];
                }else {
                    var mm = parts[2];
                }
                if (format.substring(0, 1) == "D") {
                    var dd = parts[0];
                } else
                if (format.substring(1, 2) == "D") {
                    var dd = parts[1];
                } else {
                    var dd = parts[2];
                }
                if (format.substring(0, 1) == "Y") {
                    var yy = parts[0];
                } else
                if (format.substring(1, 2) == "Y") {
                    var yy = parts[1];
                }else {
                    var yy = parts[2];
                }
                if (parseFloat(yy) <= 50) {
                    yy = (parseFloat(yy) + 2000).toString();
                }
                if (parseFloat(yy) <= 99) {
                    yy = (parseFloat(yy) + 1900).toString();
                }
                var dt = new Date(parseFloat(yy), parseFloat(mm)-1, parseFloat(dd), 0, 0, 0, 0);
                if (parseFloat(dd) != dt.getDate()) {
                    return false;
                }
                if (parseFloat(mm)-1 != dt.getMonth()) {
                    return false;
                }

                var now = new Date();
                if (dt.getTime() >= now.getTime()) {
                    return false;
                }

                return true;
            }


            //alert('Build request');
            /* Build the request */

            var emptyvar;
            var profilemod = fokus.openride.mobclient.controller.modules.profile;
            //
            //            profilemod.setDateOfBirth(dateOfBirthValue);
            //            profilemod.setEmail(document.getElementById('profilepersonaldataemail').value);
            //            profilemod.setMobilePhoneNumber(document.getElementById('profilepersonaldatamobilephonenumber').value);
            //            //profilemod.setFixedPhoneNumber(document.getElementById('profilepersonaldatafixedphonenumber').value);
            //            profilemod.setStreetAddress(document.getElementById('profilepersonaldatastreetaddress').value);
            //            profilemod.setZipCode(document.getElementById('profilepersonaldatazipcode').value || 0);
            //            profilemod.setCity(document.getElementById('profilepersonaldatacity').value);
            //            if (document.getElementById('profilepersonaldataissmoker-yes').checked) {
            //                isSmokerValue = 'y';
            //            }
            //            else if (document.getElementById('profilepersonaldataissmoker-no').checked) {
            //                isSmokerValue = 'n';
            //            }
            //            else {
            //                isSmokerValue = '-';
            //            }
            //            profilemod.setIsSmoker(isSmokerValue);
            //            //if (licenseDateValue == "") {
            //            profilemod.setLicenseDate(emptyvar);
            //            /*} else {
            //                profilemod.setLicenseDate(licenseDateValue);
            //            }*/
            //            profilemod.setCarColour(document.getElementById('profilepersonaldatacarcolour').value || emptyvar);
            //            profilemod.setCarBrand(document.getElementById('profilepersonaldatacarbrand').value || emptyvar);
            //            //profilemod.setCarBuildYear(document.getElementById('profilepersonaldatacarbuildyear').value || emptyvar);
            //            profilemod.setCarBuildYear(emptyvar);
            //            // profilemod.setCarPlateNo(document.getElementById('profilepersonaldatacarplateno').value || emptyvar);
            //            profilemod._revision = profilemod._revision+1;
            //alert(dateOfBirthValue);
            userProfile.setDateOfBirth(dateOfBirthValue);
            userProfile.setEmail(document.getElementById('profilepersonaldataemail').value);
            userProfile.setMobilePhoneNumber(document.getElementById('profilepersonaldatamobilephonenumber').value);
            //profilemod.setFixedPhoneNumber(document.getElementById('profilepersonaldatafixedphonenumber').value);
            userProfile.setStreetAddress(document.getElementById('profilepersonaldatastreetaddress').value);
            userProfile.setZipCode(document.getElementById('profilepersonaldatazipcode').value || 0);
            userProfile.setCity(document.getElementById('profilepersonaldatacity').value);
            if (document.getElementById('profilepersonaldataissmoker-yes').checked) {
                isSmokerValue = 'y';
            }
            else if (document.getElementById('profilepersonaldataissmoker-no').checked) {
                isSmokerValue = 'n';
            }
            else {
                isSmokerValue = '-';
            }
            userProfile.setIsSmoker(isSmokerValue);
            //if (licenseDateValue == "") {
            userProfile.setLicenseDate(emptyvar);
            /*} else {
                profilemod.setLicenseDate(licenseDateValue);
            }*/
            userProfile.setCarColour(document.getElementById('profilepersonaldatacarcolour').value || emptyvar);
            userProfile.setCarBrand(document.getElementById('profilepersonaldatacarbrand').value || emptyvar);
            //profilemod.setCarBuildYear(document.getElementById('profilepersonaldatacarbuildyear').value || emptyvar);
            userProfile.setCarBuildYear(emptyvar);
            // profilemod.setCarPlateNo(document.getElementById('profilepersonaldatacarplateno').value || emptyvar);
            userProfile.getProfileRequest()._revision = userProfile.getProfileRequest()._revision+1;

            // Submit PUT request
            //            srvconn.PUT('/OpenRideServer-RS/resources/users/'+this.username+'/profile', true, profilemod.getProfileRequest(), function() {
            //                showOverlayDialog('Personal data was saved successfully!', '', 'OK', '', '', '')
            //            }, function(x,s,e) {
            //                fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Unfortunately, your data could not be stored.')
            //            } );

            $.ajax({
                type: "PUT",
                url: 'https://' + PeerMenager + '/users/'+username+'/profile',//'/api/register/' + user,
                data: JSON.stringify(userProfile.getProfileRequest()),//"{username="+user+"&password="+pass+"}",
                crossDomain: true,
                contentType:  "application/json; charset=UTF-8",
                accepts: "application/json",
                dataType: "json",
                username: username,
                password: password,
                beforeSend: function (xhr)
                {
                    xhr.withCredentials = true,
                    xhr.setRequestHeader('Authorization' , 'Basic ' + username+':'+password);
                    xhr.setRequestHeader("APP_KEY" , "RIDE-SHARING-CLIENT-APPLICATION");
                    xhr.setRequestHeader("APP_SECRET", "508e8d50-ab80-11e3-a5e2-0800200c9a66");
                },
                async: false,
                //accepts: "application/json",
                success: function(data, textStatus, jqXHR){
                    showOverlayDialog('Personal data was saved successfully!', '', 'OK', '', '', '')
                },
                error: function(jq , textStatus , errorThrown){
                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, your data could not be stored.')
                }
            });
        //alert('save finished');

        },

        parsedate : function(inputvalue){
            var components = inputvalue.split('.'); // assuming date is entered in format dd.mm.yyyy
            if (components.length != 3) return false; // must include day, month, year
            var thedate = new Date(components[2], components[1]-1, components[0]);
            return thedate.getTime();
        },

        parseprofilepreferences : function(result){

            if(typeof (result.PreferencesResponse) != 'undefined'){

                var preferencesData = result.PreferencesResponse;

                if (preferencesData.prefIsSmoker == 'y') {
                    isSmokerOption = 'profileprefissmoker-yes';
                }
                else if (preferencesData.prefIsSmoker == 'n') {
                    isSmokerOption = 'profileprefissmoker-no';
                }
                else {
                    isSmokerOption = 'profileprefissmoker-null';
                }
                document.getElementById(isSmokerOption).checked = 'checked';

            /*if (preferencesData.prefGender == 'f') {
                    genderOption = 'profileprefgender-f';
                }
                else {
                    genderOption = 'profileprefgender-null';
                }
                document.getElementById(genderOption).checked = 'checked';*/

            }
        },

        putprofilepreferences : function(){

            /* Build the request */
            $.ajax({
                type: "GET",
                url: 'https://' + PeerMenager + '/users/'+username+'/profile/preferences',//'/api/register/' + user,
                data: "",
                crossDomain: true,
                contentType:  "application/json; charset=UTF-8",
                accepts: "application/json",
                dataType: "json",
                username: username,
                password: password,
                beforeSend: function (xhr)
                {
                    xhr.withCredentials = true,
                    xhr.setRequestHeader('Authorization' , 'Basic ' + username+':'+password);
                    xhr.setRequestHeader("APP_KEY" , "RIDE-SHARING-CLIENT-APPLICATION");
                    xhr.setRequestHeader("APP_SECRET", "508e8d50-ab80-11e3-a5e2-0800200c9a66");
                },
                async: false,
                //accepts: "application/json",
                success: function(data, textStatus, jqXHR){
                    data._revision = data._revision+1;
                    var isSmokerValue ='';
                    if (document.getElementById('profileprefissmoker-yes').checked) {
                        isSmokerValue = 'y';
                    }
                    else if (document.getElementById('profileprefissmoker-no').checked) {
                        isSmokerValue = 'n';
                    }
                    else {
                        isSmokerValue = '-';
                    }
                    data.isSmoker = isSmokerValue;
                    //alert(JSON.stringify(data));
                    $.ajax({
                        type: "PUT",
                        url: 'https://' + PeerMenager + '/users/'+username+'/profile/preferences',//'/api/register/' + user,
                        data: JSON.stringify(data),
                        crossDomain: true,
                        contentType:  "application/json; charset=UTF-8",
                        accepts: "application/json",
                        dataType: "json",
                        username: username,
                        password: password,
                        beforeSend: function (xhr)
                        {
                            xhr.withCredentials = true,
                            xhr.setRequestHeader('Authorization' , 'Basic ' + username+':'+password);
                            xhr.setRequestHeader("APP_KEY" , "RIDE-SHARING-CLIENT-APPLICATION");
                            xhr.setRequestHeader("APP_SECRET", "508e8d50-ab80-11e3-a5e2-0800200c9a66");
                        },
                        async: false,
                        //accepts: "application/json",
                        success: function(data, textStatus, jqXHR){
                            showOverlayDialog('Preferences were saved successfully!', '', 'OK', '', '', '');

                        },
                        error: function(jq , textStatus , errorThrown){
                            fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, your preferences could not be saved.');
                        }
                    });
                },
                error: function(jq , textStatus , errorThrown){
                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, your preferences could not be saved.');
                }
            });

        /*if (document.getElementById('profileprefgender-f').checked) {
                genderValue = 'f';
            }
            else {
                genderValue = '-';
            }
            profilemod.setPrefGender(genderValue);*/

        // Submit PUT request
        //            srvconn.PUT('/OpenRideServer-RS/resources/users/'+this.username+'/profile/preferences', true, profilemod.getPreferencesRequest(), function() {
        //                showOverlayDialog('Preferences were saved successfully!', '', 'OK', '', '', '')
        //            }, function(x,s,e) {
        //                fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Unfortunately, your preferences could not be saved.')
        //            });

        },

        putprofilepassword : function(){

            /* Validation */

            if (document.getElementById('profilepasswordold').value == '' || document.getElementById('profilepassword').value == '' || document.getElementById('profilepasswordcheck').value == '') {
                showOverlayDialog('The specification of the old and new password is mandatory.', '', 'OK', '', '', '');
                return;
            }

            if (document.getElementById('profilepassword').value != document.getElementById('profilepasswordcheck').value) {
                showOverlayDialog('The passwords do not match.', '', 'OK', '', '', '');
                return;
            }

            /* Build the request */

            var profilemod = fokus.openride.mobclient.controller.modules.profile;

            profilemod.setPasswordOld(document.getElementById('profilepasswordold').value);
            profilemod.setPassword(document.getElementById('profilepassword').value);
            userProfile.setPassword(document.getElementById('profilepassword').value);
            // Submit PUT request
            srvconn.PUT('/OpenRideServer-RS/resources/users/'+this.username+'/profile/password', true, profilemod.getPasswordRequest(), function() {
                showOverlayDialog('Password successfully changed!', '', 'OK', '', '', '')
            }, function(x,s,e) {
                fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Sorry, your password could not be changed.')
            });
            $.ajax({
                type: "Get",
                url: 'https://' + PeerMenager + '/users/'+username,//'/api/register/' + user,
                data: "",
                crossDomain: true,
                contentType:  "application/json; charset=UTF-8",
                accepts: "application/json",
                dataType: "json",
                username: username,
                password: password,
                beforeSend: function (xhr)
                {
                    xhr.withCredentials = true,
                    xhr.setRequestHeader('Authorization' , 'Basic ' + username+':'+password);
                    xhr.setRequestHeader("APP_KEY" , "RIDE-SHARING-CLIENT-APPLICATION");
                    xhr.setRequestHeader("APP_SECRET", "508e8d50-ab80-11e3-a5e2-0800200c9a66");
                },
                async: false,
                //accepts: "application/json",
                success: function(data, textStatus, jqXHR){
                   // alert(JSON.stringify(data));
                    data.password = document.getElementById('profilepassword').value;
                    data._revision = data._revision+1;
                    //alert(JSON.stringify(data));
                    $.ajax({
                        type: "PUT",
                        url: 'https://' + PeerMenager + '/users/'+username,//'/api/register/' + user,
                        data: JSON.stringify(data),//"{username="+user+"&password="+pass+"}",
                        crossDomain: true,
                        contentType:  "application/json; charset=UTF-8",
                        accepts: "application/json",
                        dataType: "json",
                        username: username,
                        password: password,
                        beforeSend: function (xhr)
                        {
                            xhr.withCredentials = true,
                            xhr.setRequestHeader('Authorization' , 'Basic ' + username+':'+password);
                            xhr.setRequestHeader("APP_KEY" , "RIDE-SHARING-CLIENT-APPLICATION");
                            xhr.setRequestHeader("APP_SECRET", "508e8d50-ab80-11e3-a5e2-0800200c9a66");
                        },
                        async: false,
                        //accepts: "application/json",
                        success: function(data, textStatus, jqXHR){
                            showOverlayDialog('Password successfully changed!', '', 'OK', '', '', '');
                            password=document.getElementById('profilepassword').value;
                            eraseCookie('password');
                            createCookie('password',password,365);

                        },
                        error: function(jq , textStatus , errorThrown){
                            fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Sorry, your password could not be changed.');
                        }
                    });
                },
                error: function(jq , textStatus , errorThrown){
                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Sorry, your password could not be changed.');
                }
            });

        },

        parseratingssummary : function(ratingssummarydiv, obj){
            //var result = JSON.parse(resultlist);
            //alert('ratings summery');
            var price = 0;
            var rel = 0;
            var comm = 0;
            var friend = 0;
            var avg = 0;
            var numofraters = 0;
            var genderString="male";
            var addressString="";
            if (obj != null)
            {
                //price = obj["average_ride_Price"] ;
                rel = obj["average_OnTime"] ;
                //comm = obj["average_individual_Communication"] ;
                friend = obj["average_Friendly"] ;
                avg = obj["average_StarRating"];
                numofraters = obj["total_StarRating"]/obj["average_StarRating"];
            }
            else{
                price="N/A";
                rel = "N/A" ;
                comm = "N/A";
                friend = "N/A" ;
                avg = "N/A";
            }
            if (personalDetails.gender=='f')
                genderString="Female";
            document.getElementById("ratingsUserName").innerHTML = user;
            document.getElementById("ratingsUserGender").innerHTML =genderString;
            if (personalDetails.streetAddress!='undefined' && personalDetails.streetAddress!="")
                addressString += personalDetails.streetAddress;
            if (personalDetails.city!='undefined' && personalDetails.city!="")
                addressString+=", "+personalDetails.city;
            document.getElementById("ratingsUserLocation").innerHTML =addressString;

            document.getElementById("ratingssummarytotal").innerHTML = avg+" (From "+numofraters+" people)";//entry.ratingsTotal;
            //document.getElementById("ratingssummaryratio").innerHTML = entry.ratingsRatioPercent + "%";
            document.getElementById("ratingssummarypositive").innerHTML = price;//entry.ratingsLatestPositive;
            document.getElementById("ratingssummarydecent").innerHTML = rel//entry.ratingsLatestDecent;
            document.getElementById("ratingssummaryneutral").innerHTML = comm;//entry.ratingsLatestNeutral;
            document.getElementById("ratingssummarymediocre").innerHTML = friend;//entry.ratingsLatestMediocre;
        //document.getElementById("numofratings").innerHTML = numofraters;
        //Add Badges
            
        },

        parseopenratingslist : function(openratingslistdiv, resultlist){
            //var result = JSON.parse(resultlist);
            var listhtml = '<h3>Write reviews</h3>';
            favnames = new Array();
            pass = readCookie('password');
            var listhtml = 'Loading...'
            if (rides.length > 0) {
                listhtml = '';
            }
            else listhtml = 'You have rated all previous rides.'
            $.ajax
            ({
                type: "GET",
                url: "http://"+DimitrisRemote+"/subject/byURI/" + user ,
                data: "",
                crossDomain: true,
                username : user,
                password : pass,
                beforeSend: function (xhr)
                {
                    xhr.setRequestHeader('Authorization' , 'Basic ' + user+':'+pass);
                    xhr.withCredentials = true;
                },
                headers:
                {
                    "X-Requested-With": "XMLHttpRequest"
                //"Origin" : "http://localhost:8080"
                },
                //dataType : "json" ,
                async: false,
                accepts:  //"application/x-www-form-urlencoded; charset=UTF-8", //for data1 which is actualnested strings
                "application/json;",
                success: function(data , textStatus) {
                    //alert(data);
                    var obj = JSON.parse(data);
                    var subjectId=obj.subject_id;
                    var events = obj["authored_reports"];
                    
                    var ratedRides = [];
                    if (events!='undefined'){
                        //alert('here');
                        for (var report in events)
                        {
                            var object = events[report];
                            var event = object["event"];
                            //alert(event);
                            var index = event.indexOf("/");
                            var id = event.substring(index+1);
                            ratedRides.push(parseInt(id));
                        }
                    }
                    for (var i=0; i<rides.length; i++)
                    {
                        //alert(rides.length);
                        if (!rides.hasOwnProperty(i)) {
                            continue;
                        }

                        obj = JSON.parse(rides[i]);
                        if (ratedRides.indexOf(obj["index"])!=-1)
                            continue;
                        //alert(JSON.stringify(obj) + ' ' + obj["potentiallyAgreedCommuters"].length == 1 + ' ' + obj["potentiallyAgreedCommuters"].length == 0);
                        if (obj["potentiallyAgreedCommuters"].length != 0 && obj["potentiallyAgreedCommuters"] != [""]&& obj["potentiallyAgreedCommuters"] != [])
                        {
                            continue;
                        }
                        var ride_rate = [-1,0,-1,0,-1];
                        submitted_rides[i] = ride_rate;
                        //alert(JSON.stringify(submitted_rides));
                        var date = new Date(+obj.depDateTimeWindow.depDateTimeLow);
                        var hours = date.getHours();
                        if (hours < 10) hours = '0' + hours;
                        var mins = date.getMinutes();
                        if (mins < 10) mins = '0' + mins;
                        var date_realized = ""+hours + ':' + mins + ' ' + date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear();
                        //alert(date_realized + ' '+ date.getDay());
                        //alert('creation' +i+''+obj["index"]+''+5);
                        if (usermode == DRIVERMODE) id = obj.commuters; else id = obj.driver;
                        listhtml += '<div class="open-rating-row" style="border-bottom: 1px solid #ccc; padding: 5px; min-height: 60px; clear: both;" id="openrating' + subjectId + '">'
                        + '    <div class="profile-info-short" style="float: left; margin: 0 15px 0 0; text-align: right;"><img src="../../OpenRideWeb/img/icon.png" style="width: 60px; height: 60px; display: block; background: #ddd;" /><br> </div>'
                        + '    <div style="line-height: 140%; padding-left: 75px;">'
                        + '        Ride with: ' + id + ' taken on: <div style="color:#96bd0d;"><strong>' + date_realized + '</strong><br>'
                        + ' ' +obj.departureCity + ' -> ' + obj.destinationCity + '<br><br></div>'
                        // + '        ' + rateeRoleName + ' on ' + dateRealized.getDate() + '.' + (dateRealized.getMonth() + 1) + '.' + dateRealized.getFullYear() + ':'
                        + '    </div>'
                        + '    <div class="open-rating-buttons" style="line-height: 100%;"><br><br>'
                        + '<div style="color=#96bd0d; font-family: Arial, sans-serif;"><strong>Overall: </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + stars(0,i) + '</div>'
                        //+ '<div style="color=#96bd0d; font-family: Arial, sans-serif;"><strong>Price: </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + stars(1,i) + '</div>'
                        + '<div style="color=#96bd0d; font-family: Arial, sans-serif;"><strong>Reliability: </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + stars(2,i) + '</div>'
                        //+ '<div style="color=#96bd0d; font-family: Arial, sans-serif;"><strong>Communication: </strong>' + stars(3,i) + '</div>'
                        + '<div style="color=#96bd0d; font-family: Arial, sans-serif;"><strong>Friendliness: </strong>&nbsp;&nbsp;&nbsp;&nbsp;' + stars(4,i) + '</div>'
                        + '<div align="center" style="color=#96bd0d; font-family: Arial, sans-serif;"><strong><input vertical-align:middle; horizontal-align:middle;  type="button" class="rounded compact" value="Submit" onClick="comment(\'' +obj["index"]+'-'+i+''+5  + '\');">'+ '</strong></div>'
                        + '    </div>'
                        + '</div>';
                    }
                    //alert(listhtml);
                    if (listhtml)
                        document.getElementById(openratingslistdiv).innerHTML = listhtml;
                },
                error: function(jq , textStatus , errorThrown){
                    alert('state: ' + jq.readyState);
                    alert('status: ' + jq.status);
                    alert('response ' + jq.responseText)
                    alert('this error is: ' + errorThrown );
                                            //fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, Something went wrong. Please try again later.');
                }

            });
        },

       


        postrating : function(riderRouteId, rating, ratingComment){

            var ratingsmod = fokus.openride.mobclient.controller.modules.ratings;
            ratingsmod.setRiderRouteId(riderRouteId);
            ratingsmod.setGivenRating(rating);
            ratingsmod.setGivenRatingComment(ratingComment);

            // submit POST request
            srvconn.POST('/OpenRideServer-RS/resources/users/'+this.username+'/ratings', true, ratingsmod.getGivenRatingRequest(), function() {
                //document.getElementById('openrating'+riderRouteId).style.display='none';
                showOverlayDialog('Your review was submitted successfully.', '', 'OK', '', '', '');
                fokus.openride.mobclient.controller.modules.modulemanager.setView("openratingsUI");
            }, function(x,s,e) {
                fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Oops, your vote could not be delivered.')
            });

        },

        parsereceivedratingslist : function(receivedratingslistdiv, resultlist){
            var result = JSON.parse(resultlist);
            var listhtml = '<h3>Ratings received</h3>';
            favnames = new Array();

            if(typeof (result.list[0].ReceivedRatingResponse) != 'undefined'){
                if(typeof (result.list[0].ReceivedRatingResponse.length) == 'undefined'){
                    result.list[0].ReceivedRatingResponse = [result.list[0].ReceivedRatingResponse];

                }
                for(var i=0;i< result.list[0].ReceivedRatingResponse.length; i++){
                    var entry = result.list[0].ReceivedRatingResponse[i];

                    var raterRoleName = '';
                    if (entry.custRole == 'd') {
                        if (entry.custGender == 'm') {
                            raterRoleName = "Your drivers";
                        }
                        else if (entry.custGender == 'f') {
                            raterRoleName = "Your drivers";
                        }
                    }
                    else if (entry.custRole == 'r') {
                        if (entry.custGender == 'm') {
                            raterRoleName = "Your riders";
                        }
                        else if (entry.custGender == 'f') {
                            raterRoleName = "Your riders";
                        }
                    }

                    var dateRealized = new Date(entry.timestamprealized);

                    var comment = '';
                    if (typeof (entry.receivedRatingComment) != 'undefined' && entry.receivedRatingComment != '') {
                        comment = '&bdquo;' + entry.receivedRatingComment + '&ldquo;';
                    }
                    else {
                        switch(entry.receivedRating) {
                            case 1:
                                comment = '<span style="color: #aaa; font-style: italic;">Positiv bewertet</span>';
                                break;
                            case 0:
                                comment = '<span style="color: #aaa; font-style: italic;">Neutral bewertet</span>';
                                break;
                            case -1:
                                comment = '<span style="color: #aaa; font-style: italic;">Negativ bewertet</span>';
                                break;
                        }
                    }

                    listhtml += '<div class="rating-row" style="border-bottom: 1px solid #ccc; padding: 5px; min-height: 60px; clear: both;">'
                    + '<div class="profile-info-short" style="float: left; margin: 0 15px 0 0; text-align: right;"><img src="../../OpenRideWeb/pictures/profile/' + entry.custNickname + '_' + entry.custId + '_thumb.jpg" alt="Profilbild von ' + entry.custNickname + '" style="width: 60px; height: 60px; display: block; background: #ddd;" /></div>'
                    + '<div style="line-height: 140%; padding-left: 75px;">'
                    + '<strong>' + entry.custNickname + '</strong> &ndash; <br />'
                    + raterRoleName + ' am ' + dateRealized.getDate() + '.' + (dateRealized.getMonth() + 1) + '.' + dateRealized.getFullYear() + ':<br />'
                    + '<img src="../img/rated_' + entry.receivedRating + '.png" style="vertical-align: -3px; padding: 0 5px 0 5px;" /> '
                    + comment
                    + '</div>'
                    + '</div>';
                }
            }
            else {
                listhtml += "<p>No one has written a review for you.</p>";
            }

            document.getElementById(receivedratingslistdiv).innerHTML = listhtml;
        },

        setView : function (viewId){

            document.getElementById(this.currentdisplayedview).style.display = 'none';
            document.getElementById(viewId).style.display = 'block';
            var position = nativemod.getUserLocation();
            if(position == null){
                position = new google.maps.LatLng(52.525798, 13.314266);
            } /*DUMMYPOSITION;*/
            else{
                var pos = position;
                position = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
            }

            // clear tabListActiveRefreshTimer when switching tabs - those that need it will set it again
            clearInterval(tabListActiveRefreshTimer);
            // clear updateCountRefreshTimer when switching to active offers / searches list:
            if (viewId == 'activeofferUI' || viewId == 'activesearchUI') {
                clearInterval(updateCountRefreshTimer);
                updateCountRefreshTimer = 0;
            }
            // set updateCountRefreshTimer when switching to other tabs if not yet running:
            else if (!updateCountRefreshTimer) {
                if (updateCountRefreshTimer == 0)
                    this.receiveUpdates();
                updateCountRefreshTimer = setInterval("fokus.openride.mobclient.controller.modules.modulemanager.receiveUpdates()", 15000);
            }
            mode=readCookie('usermode');

            if(viewId == 'offerstartpickerUI'){
                /*if(!mapInitialized){*/
                mapmod.setMapMode(0);
                mapmod.initialize('offerstartmap', 'offerstartaddrinput', position);
            /*mapInitialized = true;
                  }*/
            }

            //fill start/dest selects with current position and favorite points newofferdetailsUI
            else if(viewId == 'newofferUI'){

                fokus.openride.mobclient.controller.modules.uievents.unhideAllTabs();
                fokus.openride.mobclient.controller.modules.uievents.hideUnusedTabs(new Array("tabimg14"));
                var pass = readCookie('password');
                $.ajax({
                    type: "GET",
                    url: 'https://' + PeerMenager + '/users/'+this.username+'/profile',//'/api/register/' + user,
                    data:"",// JSON.stringify(parsed),//"{username="+user+"&password="+pass+"}",
                    crossDomain: true,
                    contentType:  "application/json; charset=UTF-8",
                    accepts: "application/json",
                    dataType: "json",
                    username: this.username,
                    password: this.password,
                    beforeSend: function (xhr)
                    {
                        xhr.withCredentials = true,
                        xhr.setRequestHeader('Authorization' , 'Basic ' + this.username+':'+pass);
                        xhr.setRequestHeader("APP_KEY" , "RIDE-SHARING-CLIENT-APPLICATION");
                        xhr.setRequestHeader("APP_SECRET", "508e8d50-ab80-11e3-a5e2-0800200c9a66");
                    },
                    async: false,
                    success: function(data, textStatus, jqXHR){
                        userProfile.setAllData(data);
                        if (!userProfile.getCarColour() || !userProfile.getCarBrand() ) { //|| !userProfile.carPlateNo
                            showOverlayDialog('Please complete your car description in your profile before you can set ride offers.', '', 'OK', 'fokus.openride.mobclient.controller.modules.modulemanager.setTabContent(0, 1);', '', '');
                        }
                    },
                    error: function(jq , textStatus , errorThrown){
                        fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, your profile information could not be loaded.');
                    }
                });

                // Car details
                //                srvconn.GET('/OpenRideServer-RS/resources/users/'+ this.username +'/profile', false, function(result) {
                //                    if(typeof (result.ProfileResponse) != 'undefined'){
                //                        var personalData = result.ProfileResponse;
                //                        if (!personalData.carColour || !personalData.carBrand || !personalData.carPlateNo) {
                //                            showOverlayDialog('Please complete your car details in the profile, before you can submit rides!', '', 'OK', 'fokus.openride.mobclient.controller.modules.modulemanager.setTabContent(0, 1);', '', '');
                //                        }
                //                    }
                //                }, function(x,s,e) {
                //                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Failed to load profile data (car color, model).')
                //                });

                if(serviceType == 'modify'){
                    document.getElementById('tabimg11').src = "../img/tab1AngebotAendernActive_wide.png";
                } else {
                    document.getElementById('tabimg11').src = "../img/tab1NeuesAngebotActive_wide.png";
                }

                document.getElementById(offerstartselectcurrpos).value = 'Location: undetermined!';
                document.getElementById(offerstartselectcurrpos).latln = 'none';
                document.getElementById(offerdestselectcurrpos).value = 'Location: undetermined!';
                document.getElementById(offerdestselectcurrpos).latln = 'none';

                try{
                    mapmod.insertRevGeocodedAddr(nativemod.getUserLocation(), offerstartselectcurrpos);
                    mapmod.insertRevGeocodedAddr(nativemod.getUserLocation(), offerdestselectcurrpos);
                }catch(e){

                }

                //                calendar.reset();
                //                calendar.refreshSimpleCalendarPickerLabels(calendar.dateLabels, calendar.timeLabels);

                /*var offerlatln = nativemod.getUserLocation();
                if(offerlatln == null || offerlatln == 'undefined'){
                    document.getElementById(offerstartselectcurrpos).value = 'Standort: nicht ermittelbar!';
                    document.getElementById(offerstartselectcurrpos).latln = 'none';
                    document.getElementById(offerdestselectcurrpos).value = 'Standort: nicht ermittelbar!';
                    document.getElementById(offerdestselectcurrpos).latln = 'none';
                }else{
                    mapmod.insertRevGeocodedAddr(offerlatln, offerstartselectcurrpos);
                    mapmod.insertRevGeocodedAddr(offerlatln, offerdestselectcurrpos);
                }*/


                /*document.getElementById(offerdestselectcurrpos).innerHTML = document.getElementById(offerstartselectcurrpos).innerHTML;*/

                if (!this.detailsClicked) {
                    var ddBox = document.getElementById(offerstartdropdownid);
                    var count = ddBox.length;
                    for (var i = count - 1; i > 1; i--) {
                        if (!ddBox[i].mod) {
                            ddBox[i] = null;
                        }
                    }

                    ddBox = document.getElementById(offerdestdropdownid);
                    count = ddBox.length;
                    for (var j = count - 1; j > 1; j--) {
                        if (!ddBox[j].mod) {
                            ddBox[j] = null;
                        }
                    }

                    srvconn.GET('/OpenRideServer-RS/resources/users/'+ this.username +'/favoritepoints', false, function(data){
                        var offerstartsel = document.getElementById(offerstartdropdownid);
                        var offerdestsel = document.getElementById(offerdestdropdownid);

                        var result = data;

                        if(typeof (result.list[0].FavoritePointResponse) != 'undefined'){
                            if(typeof (result.list[0].FavoritePointResponse.length) == 'undefined'){
                                var favorite = result.list[0].FavoritePointResponse;

                                var name = favorite.favptDisplayName;
                                var address = favorite.favptAddress;
                                var favptGeoCoords = favorite.favptGeoCoords;
                                var id = favorite.favptId;

                                var favoption0 = document.createElement('option');
                                var favoption01 = document.createElement('option');
                                favoption0.innerHTML = name + ': ' +  address;
                                favoption0.latln = favptGeoCoords;
                                /*favoption0.latln = */

                                favoption01.innerHTML = name + ': ' +  address;
                                favoption01.latln = favptGeoCoords;

                                offerstartsel.add(favoption0,null);
                                offerdestsel.add(favoption01,null);

                            }else{
                                for(var j=0;j< result.list[0].FavoritePointResponse.length; j++){
                                    var entry = result.list[0].FavoritePointResponse[j];

                                    var favname0 = entry.favptDisplayName;
                                    var favaddress0 = entry.favptAddress;
                                    var favptGeoCoords0 = entry.favptGeoCoords;
                                    var favid0 = entry.favptId;

                                    var favoption1 = document.createElement('option');
                                    var favoption11 = document.createElement('option');
                                    favoption1.innerHTML = favname0 + ': ' +  favaddress0;
                                    favoption1.latln = favptGeoCoords0;
                                    /*favoption0.latln = */

                                    favoption11.innerHTML = favname0 + ': ' +  favaddress0;
                                    favoption11.latln = favptGeoCoords0;

                                    offerdestsel.add(favoption11,null);
                                }
                            }
                        }else{
                    }
                    }, function(x,s,e) {
                        fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Oops, your favorites could not be loaded.')
                    } );
                    this.offerfavsset = true;
                }
            }

            else if(viewId == 'newsearchUI'){

                fokus.openride.mobclient.controller.modules.uievents.unhideAllTabs();
                fokus.openride.mobclient.controller.modules.uievents.hideUnusedTabs(new Array("tabimg14"));

                if(serviceType == 'modify'){
                    document.getElementById('tabimg11').src = "../img/tab1GesuchAendernActive_wide.png";
                } else {
                    document.getElementById('tabimg11').src = "../img/tab1NeuesGesuchActive_wide.png";
                }

                document.getElementById(searchstartselectcurrpos).value = 'Location: undetermined!';
                document.getElementById(searchstartselectcurrpos).latln = 'none';
                document.getElementById(searchdestselectcurrpos).value = 'Location: undetermined!';
                document.getElementById(searchdestselectcurrpos).latln = 'none';

                try {
                    mapmod.insertRevGeocodedAddr(nativemod.getUserLocation(), searchstartselectcurrpos);
                    mapmod.insertRevGeocodedAddr(nativemod.getUserLocation(), searchdestselectcurrpos);
                } catch (e) {

                }

                /*var searchlatln = nativemod.getUserLocation();

                if(offerlatln == 'undefined'){
                    document.getElementById(searchstartselectcurrpos).value = 'Standort: nicht ermittelbar!';
                    document.getElementById(searchstartselectcurrpos).latln = 'none';
                    document.getElementById(searchdestselectcurrpos).value = 'Standort: nicht ermittelbar!';
                    document.getElementById(searchdestselectcurrpos).latln = 'none';
                }else{
                    mapmod.insertRevGeocodedAddr(searchlatln, searchstartselectcurrpos);
                    mapmod.insertRevGeocodedAddr(searchlatln, searchdestselectcurrpos);
                }*/


                /*document.getElementById(searchdestselectcurrpos).innerHTML = document.getElementById(searchstartselectcurrpos).innerHTML;*/

                if (!this.detailsClicked) {
                    ddBox = document.getElementById(searchstartdropdownid);
                    count = ddBox.length;
                    for (i = count - 1; i > 1; i--) {
                        if (!ddBox[i].mod) {
                            ddBox[i] = null;
                        }
                    }

                    ddBox = document.getElementById(searchdestdropdownid);
                    count = ddBox.length;
                    for (j = count - 1; j > 1; j--) {
                        if (!ddBox[j].mod) {
                            ddBox[j] = null;
                        }
                    }

                    srvconn.GET('/OpenRideServer-RS/resources/users/'+ this.username +'/favoritepoints', false, function(data){
                        var searchstartsel = document.getElementById(searchstartdropdownid);
                        var searchdestsel = document.getElementById(searchdestdropdownid);

                        var result = data;

                        if(typeof (result.list[0].FavoritePointResponse) != 'undefined'){
                            if(typeof (result.list[0].FavoritePointResponse.length) == 'undefined'){
                                var favorite = result.list[0].FavoritePointResponse;

                                var name1 = favorite.favptDisplayName;
                                var address1 = favorite.favptAddress;
                                var geocoords = favorite.favptGeoCoords;
                                var id1 = favorite.favptId;

                                var favoption2 = document.createElement('option');
                                var favoption21 = document.createElement('option');
                                favoption2.innerHTML = name1 + ': ' +  address1;
                                favoption2.latln = geocoords;
                                /*favoption0.latln = */

                                favoption21.innerHTML = name1 + ': ' +  address1;
                                favoption21.latln = geocoords;

                                searchstartsel.add(favoption2,null);
                                searchdestsel.add(favoption21,null);

                            }else{
                                for(var j=0;j< result.list[0].FavoritePointResponse.length; j++){
                                    var entry = result.list[0].FavoritePointResponse[j];

                                    var favname1 = entry.favptDisplayName;
                                    var favaddress1 = entry.favptAddress;
                                    var geocoords1 = entry.favptGeoCoords;
                                    var favid1 = entry.favptId;

                                    var favoption3 = document.createElement('option');
                                    var favoption31 = document.createElement('option');
                                    favoption3.innerHTML = favname1 + ': ' +  favaddress1;
                                    favoption3.latln = geocoords1;
                                    /*favoption0.latln = */

                                    favoption31.innerHTML = favname1 + ': ' +  favaddress1;
                                    favoption31.latln = geocoords1;

                                    searchstartsel.add(favoption3,null);
                                    searchdestsel.add(favoption31,null);
                                }
                            }
                        }else{
                    }
                    }, function(x,s,e) {
                        fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Oops, your favorites could not be loaded.')
                    });
                    this.searchfavsset = true;
                }
            }

            else if(viewId == 'offerdestpickerUI'){
                mapmod.setMapMode(0);
                mapmod.initialize('offerdestmap', 'offerdestaddrinput', position);
            }

            else if(viewId == 'searchstartpickerUI'){
                mapmod.setMapMode(0);
                mapmod.initialize('searchstartmap', 'searchstartaddrinput', position);
            }

            else if(viewId == 'searchdestpickerUI'){
                mapmod.setMapMode(0);
                mapmod.initialize('searchdestmap', 'searchdestaddrinput', position);
            }

            else if(viewId == 'newfavoritepickerUI'){
            /*mapmod.setMapMode(0);
                mapmod.initialize('newfavoritepickermap', 'newfavoriteaddrinput', position);*/

            //set view to fullscreen favorite picker map as temporary approach
            //TODO: connect fullscreen map view to tab tree
            // this.setFullScreenMapView('favoritesgmapscreencontainer');
            }

            else if(viewId == 'showofferrouteUI'){
                mapmod.setMapMode(1);
                var dummydiv = document.createElement('div');
                dummydiv.id = "dummyaddrinput";
                var routearr = mapmod.getRoutePath();
                var center;
                if(routearr != null && routearr != 'undefined'){
                    if(routearr.length >=2){
                        mapmod.initialize('offersimpleroutemap', 'dummyaddrinput', routearr[0]);
                    }else
                        showOverlayDialog('Get Directions', '<br />Start and finish must be different!<br />', 'OK', 'fokus.openride.mobclient.controller.modules.modulemanager.setTabContent(1, 0)', '', '');
                }
            }

            else if(viewId == 'showsearchrouteUI'){
                mapmod.setMapMode(1);
                var dummydiv = document.createElement('div');
                dummydiv.id = "dummyaddrinput";
                var routearr = mapmod.getRoutePath();
                var center;
                if(routearr != null && routearr != 'undefined'){
                    if(routearr.length >=2){
                        mapmod.initialize('searchsimpleroutemap', 'dummyaddrinput', routearr[0]);
                    }else
                        showOverlayDialog('Get Directions', '<br />Start and finish must be different!<br />', 'OK', 'fokus.openride.mobclient.controller.modules.modulemanager.setTabContent(1, 0)', '', '');
                }
            }

            else if(viewId == 'activeofferUI'){
                //provenance changeView
                var datetime = new Date();
                var timeZone = datetime.getTimezoneOffset()/60;
                if (timeZone>0)
                    timeZone="-"+timeZone;
                else
                    timeZone="+"+(-timeZone);
                var datetimestr = datetime.getFullYear()+'-'+datetime.getMonth()+'-'+datetime.getDate()+'T'+datetime.getHours()+':'+datetime.getMinutes()+':'+datetime.getSeconds()+timeZone;
                $.ajax({
                    type: "POST",
                    url: "https://provenance.ecs.soton.ac.uk/smartsociety/provbindings/binding/",
                    data: '{"prov":"@prefix prov: <http://www.w3.org/ns/prov#> .@prefix xsd: <http://www.w3.org/2001/XMLSchema#/> .@prefix tmpl: <http://openprovenance.org/tmpl#> .@prefix var: <http://openprovenance.org/var#> '+
                    '.@prefix view: <168.144.152.202/OpenRideServer-RS/view/> .@prefix rideservice: <168.144.152.202/OpenRideServer-RS/> .@prefix rideserver: <168.144.152.202/> .@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> '+
                    '.@prefix  usr: <http://168.144.202.152:3000/subject/byURI/> '+
                    '.var:view a prov:Entity; tmpl:value_0 rideservice:view . '+
                    'var:client a prov:Entity; tmpl:value_0 rideserver:OpenRideServer-RS . '+
                    'var:change_view a prov:Entity; tmpl:value_0 view:activeOffersView . '+
                    'var:username a prov:Entity; tmpl:2dvalue_0_0 usr:'+user+' . '+
                    'var:change_view_start_time a prov:Entity; tmpl:2dvalue_0_0 \\"'+datetimestr+'\\"^^xsd:dateTime . '+
                    'var:change_view_start_end_time a prov:Entity; tmpl:2dvalue_0_0 \\"'+datetimestr+'\\"^^xsd:dateTime .",'+
                    ' "binding_name":"ss_change_view_binding_223", "template_name":"ss_change_view"}',
                    crossDomain: true,
                    headers: {
                        "Content-Type" : "text/turtle"
                    },
                    contentType: "text/turtle",
                    async: "true",
                
                    success: function(data , textStatus) {
                    //alert('success '+data);
                    },
                    error: function(jq , textStatus , errorThrown){
                    //alert('failed');
                    }
                });

                fokus.openride.mobclient.controller.modules.uievents.unhideAllTabs();
                fokus.openride.mobclient.controller.modules.uievents.hideUnusedTabs(new Array("tabimg14"));

                srvconn.GET('/OpenRideServer-RS/resources/users/'+ this.username +'/rides/offers', false, this.setActiveOfferList, function(x,s,e) {
                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Unfortunately, your listings could not be loaded.')
                });

                rides.length = 0;
                parseOffer  = this.parseactiveofferlist;
                var parseUnmatchedOffer = this.parseUnmatchedRideRequest;
                dummyTHIS = this;
               
                var t = fokus.openride.mobclient.controller.modules.modulemanager.username;
                /********* IDENTITY ********/
                if (usermode == DRIVERMODE)
                    if (username == 'AviB') {
                        user = 'agent1';
                        pass = 'agent1';
                    }
                    else {
                        user = 'agent6';
                        pass = 'agent6';
                    }
                else
                if (username == 'MaxS') {
                    user = 'agent2';
                    pass = 'agent2';
                }
                else {
                    user = 'agent3';
                    pass = 'agent3';
                }
                var agent = user.substring(5, user.length);
                var agentID = parseInt(agent) - 1;
                user = readCookie('username');
                pass = readCookie('password');
                var sum = 0;
                var counttime=0;
                /********* IDENTITY ********/
                
                $.ajax
                ({
                    type: "GET",
                    url: 'http://'+DimitrisRemote+'/rideRequests',
                    data: "user="+user,
                    crossDomain: true,
                    username : user,
                    password : pass,
                    beforeSend: function (xhr)
                    {
                        xhr.setRequestHeader('Authorization' , 'Basic ' + user+ ':' +pass);
                        xhr.withCredentials = true;
                    },
                    headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Origin" : "http://localhost:8080"
                    },
                    dataType : "json" ,
                    async: false,
                    accepts:  //"application/x-www-form-urlencoded; charset=UTF-8", //for data1 which is actualnested strings
                    "application/json;",                                  //for a nested json object, not strings
                    success: function(data , textStatus) {
                        //alert('success in ajax call!! ' + data.data);
                        //alert(data.data[0])
                        //alert("start ajax call");
                        
                        var allRequests={};

                        allRequests.data=[];
                        for (var i in data.data[0]){
                            allRequests.data.push({
                                "url":data.data[0][i],
                                "ETag":"",
                                "doc":{}
                            });
                        }
                        //alert(JSON.stringify(allRequests));
                        $.ajax({
                            type: "POST",
                            url: "http://"+DimitrisRemote+"/rideRequests/?action=getSet",
                            data:JSON.stringify(allRequests),
                            crossDomain: true,
                            username: user,
                            password: pass,
                            beforeSend: function (xhr)
                            {
                                xhr.setRequestHeader('Authorization' , 'Basic ' + user+ ':' +pass);
                                xhr.withCredentials = true;
                                xhr.setRequestHeader("APP_KEY" , "RIDE-SHARING-CLIENT-APPLICATION");
                                xhr.setRequestHeader("APP_SECRET", "508e8d50-ab80-11e3-a5e2-0800200c9a66");
                            },
                            //                            headers: {
                            //                                    "X-Requested-With": "XMLHttpRequest",
                            //                                    "Origin" : "http://localhost:8080"
                            //                                },
                            contentType : "application/json" ,
                            async: false,                                                     //for a nested json object, not strings
                            success: function(data , textStatus,jqXHR) {
                                rideRequests=[];
                                var documentToFill = {};
                                documentToFill.data = [];
                                var flag;
                                var i;
                                var rideSet = JSON.parse(data);
                                for (var g=0; g<rideSet.data.length;g++){
                                    flag=false;
                                    rideRequests.push(JSON.stringify(rideSet.data[g].doc));

                                    //alert(g+' - '+JSON.stringify(rideSet.data[g].doc));
                                    if (rideSet.data[g].doc.potentialRidePlans.length!=0){
                                        flag=true;
                                        //alert('prp '+JSON.stringify(rideSet.data[g].doc.potentialRidePlans));
                                        for (i=0;i<rideSet.data[g].doc.potentialRidePlans.length;i++){
                                            documentToFill.data.push({
                                                "url"  : rideSet.data[g].doc.potentialRidePlans[i],
                                                "ETag" : "",
                                                "doc"  : {}
                                            })
                                        }
                                    }
                                    if (rideSet.data[g].doc.potentiallyAgreedRidePlans.length!=0 ){
                                        flag=true;
                                        //alert('parp '+JSON.stringify(rideSet.data[g].doc.potentiallyAgreedRidePlans));
                                        for (i=0;i<rideSet.data[g].doc.potentiallyAgreedRidePlans.length;i++){
                                            documentToFill.data.push({
                                                "url"  : rideSet.data[g].doc.potentiallyAgreedRidePlans[i],
                                                "ETag" : "",
                                                "doc"  : {}
                                            })
                                        }
                                    }
                                    if (rideSet.data[g].doc.driverAgreedRidePlans.length!=0 ){
                                        flag=true;
                                        //alert('darp '+JSON.stringify(rideSet.data[g].doc.driverAgreedRidePlans));
                                        for (i=0;i<rideSet.data[g].doc.driverAgreedRidePlans.length;i++){
                                            documentToFill.data.push({
                                                "url"  : rideSet.data[g].doc.driverAgreedRidePlans[i],
                                                "ETag" : "",
                                                "doc"  : {}
                                            })
                                        }
                                    }
                                    if (rideSet.data[g].doc.agreedRidePlan.length!=0 ){
                                        flag=true;
                                        //alert('arp '+JSON.stringify(rideSet.data[g].doc.agreedRidePlan));
                                        documentToFill.data.push({
                                            "url"  : rideSet.data[g].doc.agreedRidePlan,
                                            "ETag" : "",
                                            "doc"  : {}
                                        })
                                    }
                                    if (flag){
                                //    alert('flag=true ' +JSON.stringify(rideSet.data[g].doc));
                                }
                                // rideRequests.pop();                                    }
                                }//end plans for
                                //alert(JSON.stringify(documentToFill));
                               
                                $.ajax({
                                    type: "POST",
                                    url: "http://"+DimitrisRemote+"/ridePlans/?action=getSet",
                                    data:JSON.stringify(documentToFill),
                                    crossDomain: true,
                                    username: user,
                                    password: pass,
                                    beforeSend: function (xhr)
                                    {
                                        xhr.setRequestHeader('Authorization' , 'Basic ' + user+ ':' +pass);
                                        xhr.withCredentials = true;
                                        xhr.setRequestHeader("APP_KEY" , "RIDE-SHARING-CLIENT-APPLICATION");
                                        xhr.setRequestHeader("APP_SECRET", "508e8d50-ab80-11e3-a5e2-0800200c9a66");
                                    },
                                    contentType : "application/json" ,
                                    async: false,
                                    success: function(data, textStatus, jqXHR) {
                                        rides=[];
                                        var rideSet = JSON.parse(data);
                                        //alert("result is "+data);
                                        for (var g=0; g<rideSet.data.length;g++){
                                            //alert(JSON.stringify(rideSet.data[g].doc));
                                            rides.push(JSON.stringify(rideSet.data[g].doc));
                                        }
                                    },
                                    error: function (jq, textStatus, errorThrown) {
                                        alert('state: ' + jq.readyState);
                                        alert('status: ' + jq.status);
                                        alert('response ' + jq.responseText);
                                        alert('this error is: ' + errorThrown );
                                    //fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, Something went wrong. Please try again later.');
                                    }
                                })
                            //alert(rideRequests.length);
                                
                            },
                            error: function(jq , textStatus , errorThrown){
                                alert('state: ' + jq.readyState);
                                alert('status: ' + jq.status);
                                alert('response ' + jq.responseText);
                                alert('this error is: ' + errorThrown );
                            //fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, Something went wrong. Please try again later.');
                            }
                        });
                        parseOffer();

                    },
                    error: function(jq , textStatus , errorThrown){
                        alert('state: ' + jq.readyState);
                        alert('status: ' + jq.status);
                        alert('response ' + jq.responseText);
                        alert('this error is: ' + errorThrown );
                    //fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, Something went wrong. Please try again later.');
                    }

                })
                //alert('this is url after function '+ parsedUrl + 'stringified ' + JSON.stringify(parsedUrl))
                this.parseactiveofferlist();
                
            //alert('avg = ' + sum+'/'+counttime);
            }
            
            else if(viewId == 'completedtripsUI'){

                fokus.openride.mobclient.controller.modules.uievents.unhideAllTabs();
                fokus.openride.mobclient.controller.modules.uievents.hideUnusedTabs(new Array("tabimg14"));

                srvconn.GET('/OpenRideServer-RS/resources/users/'+ this.username +'/rides/offers/inactive', false, this.setActiveOfferList, function(x,s,e) {
                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Unfortunately, your listings could not be loaded.')
                });
                srvconn.GET('/OpenRideServer-RS/resources/users/'+ this.username +'/rides/searches/inactive', false, this.setActiveSearchList, function(x,s,e) {
                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Unfortunately, your listings could not be loaded.')
                });
                srvconn.GET('/OpenRideServer-RS/resources/users/'+ this.username +'/ratings/open', false, this.setOpenRatingsList, function(x,s,e) {
                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Unfortunately, your open reviews could not be loaded.')
                });
                this.parsecompletedtriplist();
            }
            else if(viewId == 'activesearchUI'){

                fokus.openride.mobclient.controller.modules.uievents.unhideAllTabs();
                fokus.openride.mobclient.controller.modules.uievents.hideUnusedTabs(new Array("tabimg14"));

                srvconn.GET('/OpenRideServer-RS/resources/users/'+ this.username +'/rides/searches', false, this.setActiveSearchList, function(x,s,e) {
                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Unfortunately, your application could not be loaded.')
                });
                rides.length = 0;
                parseSearch = this.parseactivesearcheslist;
                parseUnmatchedSearch = this.parseUnmatchedRideRequest;
                dummyTHIS = this;

                var t = fokus.openride.mobclient.controller.modules.modulemanager.username;
                /********* IDENTITY ********/
                if (usermode == DRIVERMODE)
                    if (username == 'AviB') {
                        user = 'agent1';
                        pass = 'agent1';
                    }
                    else {
                        user = 'agent6';
                        pass = 'agent6';
                    }
                else
                if (username == 'MaxS') {
                    user = 'agent2';
                    pass = 'agent2';
                }
                else {
                    user = 'agent3';
                    pass = 'agent3';
                }
                agent = user.substring(5, user.length);
                agentID = parseInt(agent) - 1;
                user = readCookie('username');
                pass = readCookie('password');
                /********* IDENTITY ********/
                $.ajax
                ({
                    type: "GET",
                    url: 'http://'+DimitrisRemote+'/rideRequests',
                    data:"user="+ user,
                    crossDomain: true,
                    username : user,
                    password : pass,
                    beforeSend: function (xhr)
                    {
                        xhr.setRequestHeader('Authorization' , 'Basic ' + user+ ':' +pass);
                        xhr.withCredentials = true;
                        xhr.setRequestHeader("APP_KEY" , "RIDE-SHARING-CLIENT-APPLICATION");
                        xhr.setRequestHeader("APP_SECRET", "508e8d50-ab80-11e3-a5e2-0800200c9a66");
                        xhr.setRequestHeader("UHOPPER_PASSWORD", pass);
                    },
                    headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Origin" : "http://localhost:8080"
                    },
                    dataType : "json" ,
                    async: false,
                    accepts:  //"application/x-www-form-urlencoded; charset=UTF-8", //for data1 which is actualnested strings
                    "application/json;",                                  //for a nested json object, not strings
                    success: function(data , textStatus) {
                        //                        //alert('success in ajax call!! ' + data.data);
                        //                        var allRequests={};
                        var allRequests={};

                        allRequests.data=[];
                        for (var i in data.data[0]){
                            allRequests.data.push({
                                "url":data.data[0][i],
                                "ETag":"",
                                "doc":{}
                            });
                        }
                        //alert(JSON.stringify(allRequests));
                        $.ajax({
                            type: "POST",
                            url: "http://"+DimitrisRemote+"/rideRequests/?action=getSet",
                            data:JSON.stringify(allRequests),
                            crossDomain: true,
                            username: user,
                            password: pass,
                            beforeSend: function (xhr)
                            {
                                xhr.setRequestHeader('Authorization' , 'Basic ' + user+ ':' +pass);
                                xhr.withCredentials = true;
                                xhr.setRequestHeader("APP_KEY" , "RIDE-SHARING-CLIENT-APPLICATION");
                                xhr.setRequestHeader("APP_SECRET", "508e8d50-ab80-11e3-a5e2-0800200c9a66");
                            },
                            //                            headers: {
                            //                                    "X-Requested-With": "XMLHttpRequest",
                            //                                    "Origin" : "http://localhost:8080"
                            //                                },
                            contentType : "application/json" ,
                            async: false,                                                     //for a nested json object, not strings
                            success: function(data , textStatus,jqXHR) {
                                rideRequests=[];
                                var documentToFill = {};
                                documentToFill.data = [];
                                var flag=false;
                                var i;
                                var rideSet = JSON.parse(data);
                                //alert('ddd');
                                for (var g=0; g<rideSet.data.length;g++){
                                    flag=false;
                                    rideRequests.push(JSON.stringify(rideSet.data[g].doc));

                                    //alert(g+' - '+JSON.stringify(rideSet.data[g].doc));
                                    if (rideSet.data[g].doc.potentialRidePlans.length!=0){
                                        flag=true;
                                        //alert('prp ');//+JSON.stringify(rideSet.data[g].doc.potentialRidePlans));
                                        for (i=0;i<rideSet.data[g].doc.potentialRidePlans.length;i++){
                                            documentToFill.data.push({
                                                "url"  : rideSet.data[g].doc.potentialRidePlans[i],
                                                "ETag" : "",
                                                "doc"  : {}
                                            })
                                        }
                                    }
                                    if (rideSet.data[g].doc.potentiallyAgreedRidePlans.length!=0){
                                        flag=true;
                                        //alert('parp ');//+JSON.stringify(rideSet.data[g].doc.potentiallyAgreedRidePlans));
                                        for (i=0;i<rideSet.data[g].doc.potentiallyAgreedRidePlans.length;i++){
                                            documentToFill.data.push({
                                                "url"  : rideSet.data[g].doc.potentiallyAgreedRidePlans[i],
                                                "ETag" : "",
                                                "doc"  : {}
                                            })
                                        }
                                    }
                                    if (rideSet.data[g].doc.driverAgreedRidePlans.length!=0){
                                        flag=true;
                                        //alert('darp ');//+JSON.stringify(rideSet.data[g].doc.driverAgreedRidePlans));
                                        for (i=0;i<rideSet.data[g].doc.driverAgreedRidePlans.length;i++){
                                            documentToFill.data.push({
                                                "url"  : rideSet.data[g].doc.driverAgreedRidePlans[i],
                                                "ETag" : "",
                                                "doc"  : {}
                                            })
                                        }
                                    }
                                    if (rideSet.data[g].doc.agreedRidePlan!=""){
                                        flag=true;
                                        //alert('arp ');//+JSON.strinigfy(rideSet.data[g].doc.agreedRidePlan));
                                        documentToFill.data.push({
                                            "url"  : rideSet.data[g].doc.agreedRidePlan,
                                            "ETag" : "",
                                            "doc"  : {}
                                        })
                                    }
                                    if (flag){
                                //alert('flag=true ' +g);
                                }
                                }//end plans for
                                //alert(JSON.stringify(documentToFill));

                                $.ajax({
                                    type: "POST",
                                    url: "http://"+DimitrisRemote+"/ridePlans/?action=getSet",
                                    data:JSON.stringify(documentToFill),
                                    crossDomain: true,
                                    username: user,
                                    password: pass,
                                    beforeSend: function (xhr)
                                    {
                                        xhr.setRequestHeader('Authorization' , 'Basic ' + user+ ':' +pass);
                                        xhr.withCredentials = true;
                                        xhr.setRequestHeader("APP_KEY" , "RIDE-SHARING-CLIENT-APPLICATION");
                                        xhr.setRequestHeader("APP_SECRET", "508e8d50-ab80-11e3-a5e2-0800200c9a66");
                                    },
                                    contentType : "application/json" ,
                                    async: false,
                                    success: function(data, textStatus, jqXHR) {
                                        rides=[];
                                        var rideSet = JSON.parse(data);
                                        for (var g=0; g<rideSet.data.length;g++){
                                            //alert(JSON.stringify(rideSet.data[g].doc));
                                            rides.push(JSON.stringify(rideSet.data[g].doc));
                                        }

                                    },
                                    error: function (jq, textStatus, errorThrown) {
                                        alert('state: ' + jq.readyState);
                                        alert('status: ' + jq.status);
                                        alert('response ' + jq.responseText)
                                        alert('this error is: ' + errorThrown );
                                    //fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, Something went wrong. Please try again later.');
                                    }
                                })
                                //alert(rideRequests.length);
                                parseSearch();
                            },
                            error: function(jq , textStatus , errorThrown){
                                alert('state: ' + jq.readyState);
                                alert('status: ' + jq.status);
                                alert('response ' + jq.responseText)
                                alert('this error is: ' + errorThrown );
                            //fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, Something went wrong. Please try again later.');
                            }
                        })

                    },
                    error: function(jq , textStatus , errorThrown){
                        alert('state: ' + jq.readyState);
                        alert('status: ' + jq.status);
                        alert('response ' + jq.responseText)
                        alert('this error is: ' + errorThrown );
                    //fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, Something went wrong. Please try again later.');
                    }

                })
                //parseUnmatchedSearch(0);
                this.parseactivesearcheslist();
            }
            else if(viewId == 'favlistUI'){

                fokus.openride.mobclient.controller.modules.uievents.unhideAllTabs();
                fokus.openride.mobclient.controller.modules.uievents.hideUnusedTabs(new Array("tabimg13","tabimg14"));

            //                srvconn.GET('/OpenRideServer-RS/resources/users/'+ this.username +'/favoritepoints', false, this.setFavoriteList, function(x,s,e) {
            //                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Unfortunately your favorites could not be loaded.')
            //                });
            //                this.parsefavoriteslist(this.favoritelistdiv, favoritelist);
            }
            else if(viewId == 'ratingsUI'){
                
                fokus.openride.mobclient.controller.modules.uievents.unhideAllTabs();
                fokus.openride.mobclient.controller.modules.uievents.hideUnusedTabs(new Array("tabimg14"));
                //            srvconn.GET('OpenRideServer-RS/resources/users/'+ this.username +'/profile', false, this.parseprofilepersonaldata, function(x,s,e) {
                //                fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Unfortunately, your profile information could not be loaded.')
                //            });
                //                srvconn.GET(PeerMenager+'/users/'+ this.username +'/profile', false, this.parseprofilepersonaldata, function(x,s,e) {
                //                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Unfortunately, your profile information could not be loaded.')
                //                });
                //                //            srvconn.GET('/OpenRideServer-RS/resources/users/'+ this.username +'/profile/preferences', false, this.parseprofilepreferences, function(x,s,e) {
                //                //                fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Oops, your settings could not be loaded.')
                //                //            });
                //                srvconn.GET('/OpenRideServer-RS/resources/users/'+ this.username +'/ratings/summary', false, this.setRatingsSummary, function(x,s,e) {
                //                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Unfortunately your favorites could not be loaded.')
                //                });
                var pass = readCookie('password');
                $.ajax({
                    type: "GET",
                    url: 'https://' + PeerMenager + '/users/'+this.username+'/profile',//'/api/register/' + user,
                    data:"",// JSON.stringify(parsed),//"{username="+user+"&password="+pass+"}",
                    crossDomain: true,
                    contentType:  "application/json; charset=UTF-8",
                    accepts: "application/json",
                    dataType: "json",
                    username: this.username,
                    password: this.password,
                    beforeSend: function (xhr)
                    {
                        xhr.withCredentials = true,
                        xhr.setRequestHeader('Authorization' , 'Basic ' + this.username+':'+pass);
                        xhr.setRequestHeader("APP_KEY" , "RIDE-SHARING-CLIENT-APPLICATION");
                        xhr.setRequestHeader("APP_SECRET", "508e8d50-ab80-11e3-a5e2-0800200c9a66");
                    },
                    async: false,
                    accepts: "application/json",
                    success: function(data, textStatus, jqXHR){
                        userProfile.setAllData(data);
                        fokus.openride.mobclient.controller.modules.modulemanager.parseprofilepersonaldata('fff');
                    },
                    error: function(jq , textStatus , errorThrown){
                        fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, your profile information could not be loaded.');
                    }
                });
                /************** START CHANGE *************/
                var ans;
                /********* IDENTITY ********/
                if (usermode == DRIVERMODE)
                    if (username == 'AviB') {
                        user = 'agent1';
                        pass = 'agent1';
                    }
                    else {
                        user = 'agent6';
                        pass = 'agent6';
                    }
                else
                if (username == 'MaxS') {
                    user = 'agent2';
                    pass = 'agent2';
                }
                else {
                    user = 'agent3';
                    pass = 'agent3';
                }
                user = readCookie('username');
                pass = readCookie('password');
                
                /********* IDENTITY ********/
                var dummyparseratingssummary = this.parseratingssummary;
                var dummydiv = this.parseratingssummarydiv;
                $.ajax
                ({
                    type: "GET",
                    url: "http://"+DimitrisRemote+"/subject/byURI/" + user ,
                    data: "",
                    crossDomain: true,
                    username : user,
                    password : pass,
                    beforeSend: function (xhr)
                    {
                        xhr.setRequestHeader('Authorization' , 'Basic ' + user+':'+pass);
                        xhr.withCredentials = true;
                    },
                    headers:
                    {
                        "X-Requested-With": "XMLHttpRequest"
                    //"Origin" : "http://localhost:8080"
                    },
                    //dataType : "json" ,
                    async: false,
                    accepts:  //"application/x-www-form-urlencoded; charset=UTF-8", //for data1 which is actualnested strings
                    "application/json;",
                    success: function(data , textStatus) {
                        //alert("summery " +data);
                        var obj = JSON.parse(data);
                        if (obj["versionInfo"]["previousVersion"]=="none" || typeof(obj["currentReputationReport"])=='undefined'){//no rating
                            dummyparseratingssummary(dummydiv, /*ratingssummary*/ null);
                        }
                        else{
                            //alert('1'+data);
                            var url = obj["currentReputationReport"]["uri"];
                            //alert(url);
                            $.ajax
                            ({
                                type: "GET",
                                url: "http://"+DimitrisRemote+"/" + url,
                                data: "",
                                crossDomain: true,
                                username : user,
                                password : pass,
                                beforeSend: function (xhr)
                                {
                                    xhr.setRequestHeader('Authorization' , 'Basic ' + user+':'+pass);
                                    xhr.withCredentials = true;
                                },
                                headers:
                                {
                                    "X-Requested-With": "XMLHttpRequest"
                                //"Origin" : "http://localhost:8080"
                                },
                                //dataType : "json" ,
                                async: false,
                                accepts:  //"application/x-www-form-urlencoded; charset=UTF-8", //for data1 which is actualnested strings
                                "application/json;",
                                success: function(data , textStatus) {
                                    if (data != null && data != 'undefined' && data != "")
                                    {
                                        var rep = JSON.parse(data);
                                        //alert('2'+data);

                                        dummyparseratingssummary(dummydiv, /*ratingssummary*/ rep["json"]);
                                    }
                                    else dummyparseratingssummary(dummydiv, /*ratingssummary*/ null);
                                },
                                error: function(jq , textStatus , errorThrown){
                                    alert('state: ' + jq.readyState);
                                    alert('status: ' + jq.status);
                                    alert('response ' + jq.responseText)
                                    alert('this error is: ' + errorThrown );
                                //fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, Something went wrong. Please try again later.');
                                }

                            });
                        }
                    },
                    error: function(jq , textStatus , errorThrown){
                        alert('state: ' + jq.readyState);
                        alert('status: ' + jq.status);
                        alert('response ' + jq.responseText)
                        alert('this error is: ' + errorThrown );
                    //fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, Something went wrong. Please try again later.');
                    }

                });

            }
            else if(viewId == 'openratingsUI'){
                //alert('viewID == \'openratingsUI\'');
                fokus.openride.mobclient.controller.modules.uievents.unhideAllTabs();
                fokus.openride.mobclient.controller.modules.uievents.hideUnusedTabs(new Array("tabimg14"));

                srvconn.GET('/OpenRideServer-RS/resources/users/'+ this.username +'/ratings/open', "false", this.setOpenRatingsList, function(x,s,e) {
                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Unfortunately, your open reviews could not be loaded.')
                });
                rides.length = 0;
                dummyTHIS = this;
                parseOpenRatings = this.parseopenratingslist;
                var t = fokus.openride.mobclient.controller.modules.modulemanager.username;
                /********* IDENTITY ********/
                if (usermode == DRIVERMODE)
                    if (username == 'AviB') {
                        user = 'agent1';
                        pass = 'agent1';
                    }
                    else {
                        user = 'agent6';
                        pass = 'agent6';
                    }
                else
                if (username == 'MaxS') {
                    user = 'agent2';
                    pass = 'agent2';
                }
                else {
                    user = 'agent3';
                    pass = 'agent3';
                }
                var agent = user.substring(5, user.length);
                var agentID = parseInt(agent) - 1;
                user = readCookie('username');
                pass = readCookie('password');
                /********* IDENTITY ********/
                $.ajax
                ({
                    type: "GET",
                    url: 'http://'+DimitrisRemote+'/rideRequests',
                    data: "user="+user,
                    crossDomain: true,
                    username : user,
                    password : pass,
                    beforeSend: function (xhr)
                    {
                        xhr.setRequestHeader('Authorization' , 'Basic ' + user+':'+pass);
                        xhr.withCredentials = true;
                    },
                    headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Origin" : "http://localhost:8080"
                    },
                    dataType : "json" ,
                    async: false,
                    accepts:  //"application/x-www-form-urlencoded; charset=UTF-8", //for data1 which is actualnested strings
                    "application/json;",                                  //for a nested json object, not strings
                    success: function(data , textStatus) {
                        //alert('success in ajax call!! ' + data.data);
                        var allRequests={};

                        allRequests.data=[];
                        for (var i in data.data[0]){
                            allRequests.data.push({
                                "url":data.data[0][i],
                                "ETag":"",
                                "doc":{}
                            });
                        }
                        $.ajax({
                            type: "POST",
                            url: "http://"+DimitrisRemote+"/rideRequests/?action=getSet",
                            data:JSON.stringify(allRequests),
                            crossDomain: true,
                            username: user,
                            password: pass,
                            beforeSend: function (xhr)
                            {
                                xhr.setRequestHeader('Authorization' , 'Basic ' + user+ ':' +pass);
                                xhr.withCredentials = true;
                                xhr.setRequestHeader("APP_KEY" , "RIDE-SHARING-CLIENT-APPLICATION");
                                xhr.setRequestHeader("APP_SECRET", "508e8d50-ab80-11e3-a5e2-0800200c9a66");
                            },
                            //                            headers: {
                            //                                    "X-Requested-With": "XMLHttpRequest",
                            //                                    "Origin" : "http://localhost:8080"
                            //                                },
                            contentType : "application/json" ,
                            async: false,                                                     //for a nested json object, not strings
                            success: function(data , textStatus,jqXHR) {
                                rideRequests=[];
                                var documentToFill = {};
                                documentToFill.data = [];
                                var flag;
                                var i;
                                var rideSet = JSON.parse(data);
                                for (var g=0; g<rideSet.data.length;g++){
                                    flag=false;
                                    rideRequests.push(JSON.stringify(rideSet.data[g].doc));

                                    //alert(g+' - '+JSON.stringify(rideSet.data[g].doc));
                                    if (rideSet.data[g].doc.potentialRidePlans.length!=0){
                                        flag=true;
                                        //alert('prp '+JSON.stringify(rideSet.data[g].doc.potentialRidePlans));
                                        for (i=0;i<rideSet.data[g].doc.potentialRidePlans.length;i++){
                                            documentToFill.data.push({
                                                "url"  : rideSet.data[g].doc.potentialRidePlans[i],
                                                "ETag" : "",
                                                "doc"  : {}
                                            })
                                        }
                                    }
                                    if (rideSet.data[g].doc.potentiallyAgreedRidePlans.length!=0){
                                        flag=true;
                                        //alert('parp '+JSON.stringify(rideSet.data[g].doc.potentiallyAgreedRidePlans));
                                        for (i=0;i<rideSet.data[g].doc.potentiallyAgreedRidePlans.length;i++){
                                            documentToFill.data.push({
                                                "url"  : rideSet.data[g].doc.potentiallyAgreedRidePlans[i],
                                                "ETag" : "",
                                                "doc"  : {}
                                            })
                                        }
                                    }
                                    if (rideSet.data[g].doc.driverAgreedRidePlans.length!=0){
                                        flag=true;
                                        //alert('darp '+JSON.stringify(rideSet.data[g].doc.driverAgreedRidePlans));
                                        for (i=0;i<rideSet.data[g].doc.driverAgreedRidePlans.length;i++){
                                            documentToFill.data.push({
                                                "url"  : rideSet.data[g].doc.driverAgreedRidePlans[i],
                                                "ETag" : "",
                                                "doc"  : {}
                                            })
                                        }
                                    }
                                    if (rideSet.data[g].doc.agreedRidePlan.length!=0){
                                        flag=true;
                                        //alert('arp '+JSON.stringify(rideSet.data[g].doc.agreedRidePlan));
                                        documentToFill.data.push({
                                            "url"  : rideSet.data[g].doc.agreedRidePlan,
                                            "ETag" : "",
                                            "doc"  : {}
                                        })
                                    }
                                    if (flag){
                                //    alert('flag=true ' +JSON.stringify(rideSet.data[g].doc));
                                }
                                // rideRequests.pop();                                    }
                                }//end plans for
                                // alert(JSON.stringify(documentToFill));
                                if (documentToFill.length!=0){
                                    $.ajax({
                                        type: "POST",
                                        url: "http://"+DimitrisRemote+"/ridePlans/?action=getSet",
                                        data:JSON.stringify(documentToFill),
                                        crossDomain: true,
                                        username: user,
                                        password: pass,
                                        beforeSend: function (xhr)
                                        {
                                            xhr.setRequestHeader('Authorization' , 'Basic ' + user+ ':' +pass);
                                            xhr.withCredentials = true;
                                            xhr.setRequestHeader("APP_KEY" , "RIDE-SHARING-CLIENT-APPLICATION");
                                            xhr.setRequestHeader("APP_SECRET", "508e8d50-ab80-11e3-a5e2-0800200c9a66");
                                        },
                                        contentType : "application/json" ,
                                        async: false,
                                        success: function(data, textStatus, jqXHR) {
                                            rides=[];
                                            var rideSet = JSON.parse(data);
                                            //alert("result is "+data);
                                            for (var g=0; g<rideSet.data.length;g++){
                                                //alert(JSON.stringify(rideSet.data[g].doc));

                                                rides.push(JSON.stringify(rideSet.data[g].doc));
                                            }
                                        },
                                        error: function (jq, textStatus, errorThrown) {
                                            alert('state: ' + jq.readyState);
                                            alert('status: ' + jq.status);
                                            alert('response ' + jq.responseText);
                                            alert('this error is: ' + errorThrown );
                                        //fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, Something went wrong. Please try again later.');
                                        }
                                    })
                                }
                                //alert(rideRequests.length);
                                parseOpenRatings(dummyTHIS.openratingslistdiv , null);
                            },
                            error: function(jq , textStatus , errorThrown){
                                alert('state: ' + jq.readyState);
                                alert('status: ' + jq.status);
                                alert('response ' + jq.responseText);
                                alert('this error is: ' + errorThrown );
                            //fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, Something went wrong. Please try again later.');
                            }
                        })


                    //old version
                    //                        for (var i=0; i<data.data[0].length; i++)
                    //                        {       //for each rideRequest fetch all types of ridePlans and display them
                    //                            if (data.data[0][i] != 'undefined' && data.data[0][i] != "")
                    //
                    //                                $.ajax
                    //                                ({
                    //                                    type: "GET",
                    //                                    url: data.data[0][i],
                    //                                    data: "",
                    //                                    crossDomain: true,
                    //                                    username : user,
                    //                                    password : pass,
                    //                                    beforeSend: function (xhr)
                    //                                    {
                    //                                        xhr.setRequestHeader('Authorization' , 'Basic ' + user+':'+pass);
                    //                                        xhr.withCredentials = true;
                    //                                    },
                    //                                    headers: {
                    //                                        "X-Requested-With": "XMLHttpRequest",
                    //                                        "Origin" : "http://localhost:8080"
                    //                                    },
                    //                                    //dataType : "json" ,
                    //                                    async: "false",                                                     //for a nested json object, not strings
                    //                                    success: function(data , textStatus) {
                    //                                        var parsed = JSON.parse(data);
                    //                                        var paRP = [];
                    //                                        var daRP = [];
                    //                                        var aRP = [];
                    //                                        ridePlans = [];//rideRequests = [];
                    //                                        paRP = parsed.potentiallyAgreedRidePlans;
                    //                                        daRP = parsed.driverAgreedRidePlans;
                    //                                        aRP = parsed.agreedRidePlan;
                    //                                        ridePlans = ridePlans.concat(paRP, daRP , aRP);
                    //                                        //alert('success in ajax call!! first' + ridePlans[0] + ' second: ' + ridePlans.length);
                    //                                        //alert('these are the results: '+ paRP + ' ' + daRP + ' ' + aRP);
                    //                                        for (var j=0; j<ridePlans.length; j++)
                    //                                        {
                    //                                            /*if ($.inArray(ridePlans[j], rideRequests))
                    //                                            {
                    //                                                var index = rideRequests.indexOf(ridePlans[j]);
                    //                                                rideRequests.splice(index, 1);
                    //                                            }*/
                    //                                            if (ridePlans[j] != 'undefined' && ridePlans[j] != "")
                    //                                                $.ajax
                    //                                                ({
                    //                                                    type: "GET",
                    //                                                    url: ridePlans[j],
                    //                                                    data: "",
                    //                                                    crossDomain: true,
                    //                                                    username : user,
                    //                                                    password : pass,
                    //                                                    beforeSend: function (xhr)
                    //                                                    {
                    //                                                        xhr.setRequestHeader('Authorization' , 'Basic ' + user+':'+pass);
                    //                                                        xhr.withCredentials = true;
                    //                                                    },
                    //                                                    headers:
                    //                                                    {
                    //                                                        "X-Requested-With": "XMLHttpRequest",
                    //                                                        "Origin" : "http://localhost:8080"
                    //                                                    },
                    //                                                    //dataType : "json" ,
                    //                                                    async: "false",
                    //
                    //                                                    success: function(data , textStatus) {
                    //                                                        ridePlan = data;
                    //                                                        //alert('success in ajax call!! ' + data);
                    //                                                        //alert('this is the data: ' + data
                    //                                                        //+ ' and the text ' + JSON.parse(data));
                    //                                                        //alert(data);
                    //                                                        var obj = JSON.parse(data);
                    //                                                        var oldDate = obj.depDateTimeWindow.depDateTimeLow;
                    //                                                        //alert(oldDate);
                    //                                                        var date = new Date();
                    //                                                        var id = this.url.substring(this.url.lastIndexOf("/")+1);
                    //                                                        var found = $.inArray(data , rides);
                    //                                                        if (found < 0)
                    //                                                            if (date - oldDate > 0) {
                    //                                                                rides[id] = data;
                    //                                                            }
                    //                                                        parseOpenRatings(dummyTHIS.openratingslistdiv , null);
                    //                                                    },
                    //                                                    error: function(jq , textStatus , errorThrown){
                    //                                                        alert('state: ' + jq.readyState);
                    //                                                        alert('status: ' + jq.status);
                    //                                                        alert('response ' + jq.responseText)
                    //                                                        alert('this error is: ' + errorThrown );
                    //                                                    }
                    //
                    //                                                })
                    //                                        }
                    //
                    //                                    },
                    //                                    error: function(jq , textStatus , errorThrown){
                    //                                        alert('state: ' + jq.readyState);
                    //                                        alert('status: ' + jq.status);
                    //                                        alert('response ' + jq.responseText)
                    //                                        alert('this error is: ' + errorThrown );
                    //                                    }
                    //                                })
                    //                        }
                    },
                    error: function(jq , textStatus , errorThrown){
                        alert('state: ' + jq.readyState);
                        alert('status: ' + jq.status);
                        alert('response ' + jq.responseText)
                        alert('this error is: ' + errorThrown );
                    //fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, Something went wrong. Please try again later.');
                    }

                })

                this.parseopenratingslist(this.openratingslistdiv, openratingslist);
            }
            else if(viewId == 'receivedratingsUI'){
                fokus.openride.mobclient.controller.modules.uievents.unhideAllTabs();
                fokus.openride.mobclient.controller.modules.uievents.hideUnusedTabs(new Array("tabimg14"));

                srvconn.GET('/OpenRideServer-RS/resources/users/'+ this.username +'/ratings', false, this.setReceivedRatingsList, function(x,s,e) {
                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Oops, your received rating could not be loaded.')
                });
                this.parsereceivedratingslist(this.receivedratingslistdiv, receivedratingslist);
            }
            else if(viewId == 'profileUI'){

                fokus.openride.mobclient.controller.modules.uievents.unhideAllTabs();
                fokus.openride.mobclient.controller.modules.uievents.hideUnusedTabs(new Array("tabimg13","tabimg14"));

                //            srvconn.GET('OpenRideServer-RS/resources/users/'+ this.username +'/profile', false, this.parseprofilepersonaldata, function(x,s,e) {
                //                fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Unfortunately, your profile information could not be loaded.')
                //            });
                var pass = readCookie('password');
                $.ajax({
                    type: "GET",
                    url: 'https://' + PeerMenager + '/users/'+this.username+'/profile',//'/api/register/' + user,
                    data:"",// JSON.stringify(parsed),//"{username="+user+"&password="+pass+"}",
                    crossDomain: true,
                    contentType:  "application/json; charset=UTF-8",
                    accepts: "application/json",
                    dataType: "json",
                    username: this.username,
                    password: this.password,
                    beforeSend: function (xhr)
                    {
                        xhr.withCredentials = true,
                        xhr.setRequestHeader('Authorization' , 'Basic ' + this.username+':'+pass);
                        xhr.setRequestHeader("APP_KEY" , "RIDE-SHARING-CLIENT-APPLICATION");
                        xhr.setRequestHeader("APP_SECRET", "508e8d50-ab80-11e3-a5e2-0800200c9a66");
                    },
                    async: false,
                    success: function(data, textStatus, jqXHR){
                        //alert(JSON.stringify(data));
                        userProfile.setAllData(data);

                        fokus.openride.mobclient.controller.modules.modulemanager.parseprofilepersonaldata('fff');
                    },
                    error: function(jq , textStatus , errorThrown){
                        fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, your profile information could not be loaded.');
                    }
                });
                //                srvconn.GET(PeerMenager+'/users/'+ this.username +'/profile', false, this.parseprofilepersonaldata, function(x,s,e) {
                //                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Unfortunately, your profile information could not be loaded.')
                //                });
                srvconn.GET('/OpenRideServer-RS/resources/users/'+ this.username +'/profile/preferences', false, this.parseprofilepreferences, function(x,s,e) {
                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Oops, your settings could not be loaded.')
                });
            }
            else if(viewId == 'homeUI'){

                fokus.openride.mobclient.controller.modules.uievents.unhideAllTabs();
                fokus.openride.mobclient.controller.modules.uievents.hideUnusedTabs(new Array("tabimg13","tabimg14"));
                var pass = readCookie('password');
                var user = readCookie('username');
                $.ajax({
                    type: "GET",
                    url: 'https://' + PeerMenager + '/users/'+user+'/profile',//'/api/register/' + user,
                    data:"",// JSON.stringify(parsed),//"{username="+user+"&password="+pass+"}",
                    crossDomain: true,
                    contentType:  "application/json; charset=UTF-8",
                    accepts: "application/json",
                    dataType: "json",
                    username: user,
                    password: pass,
                    beforeSend: function (xhr)
                    {
                        xhr.withCredentials = true,
                        xhr.setRequestHeader('Authorization' , 'Basic ' + user+':'+pass);
                        xhr.setRequestHeader("APP_KEY" , "RIDE-SHARING-CLIENT-APPLICATION");
                        xhr.setRequestHeader("APP_SECRET", "508e8d50-ab80-11e3-a5e2-0800200c9a66");
                    },
                    async: false,
                    success: function(data, textStatus, jqXHR){
                        //alert(JSON.stringify(data));
                        userProfile.setAllData(data);
                    },
                    error: function(jq , textStatus , errorThrown){
                        fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, your profile information could not be loaded.');
                    }
                });
                // Get initialization data
                srvconn.GET('/OpenRideServer-RS/resources/configuration/init', false, fokus.openride.mobclient.controller.modules.uievents.parseInitData, function(x,s,e){
                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Unfortunately, initial data could not be loaded.')
                } );
            }

            this.currentdisplayedview = viewId;
            this.detailsClicked = false;
            
        },

        dummy : function() {
            return
        },

        changeViewAndUserMode : function(view) {
            fokus.openride.mobclient.controller.modules.uievents.unhideAllTabs();
            fokus.openride.mobclient.controller.modules.uievents.hideUnusedTabs(new Array("tabimg14"));
            switch(view){
                case 'offers':
                    if(usermode != DRIVERMODE) {
                        fokus.openride.mobclient.controller.modules.modulemanager.changemode();
                    }
                    fokus.openride.mobclient.controller.modules.modulemanager.setTabContent(1, 1);
                    break;
                case 'searches':
                    if(usermode != RIDERMODE) {
                        fokus.openride.mobclient.controller.modules.modulemanager.changemode();
                    }
                    fokus.openride.mobclient.controller.modules.modulemanager.setTabContent(1, 1);
                    break;
                case 'ratings':
                    fokus.openride.mobclient.controller.modules.modulemanager.setTabContent(2, 1);
                    break;
            }
        },

        changemode: function(){
            var drivermodeimg = document.getElementById('drivermodeimg');
            var ridermodeimg = document.getElementById('ridermodeimg');

            var retval = -1;
            if(usermode == DRIVERMODE){
                usermode = RIDERMODE;
                drivermodeimg.src = "../img/drivermodebtn_inactive.png";
                ridermodeimg.src = "../img/ridermodebtn_active.png";
                document.getElementById('usermodeslider').style.marginLeft = '0px';
                document.getElementById('usermodelabel').innerHTML = 'Rider';

                document.getElementById('riderupdatecount2').style.display = (document.getElementById('riderupdatecount2').innerHTML!='')?'block':'none';
                document.getElementById('driverupdatecount2').style.display = 'none';

                retval = 1;
            }else if(usermode == RIDERMODE){
                usermode = DRIVERMODE;
                drivermodeimg.src = "../img/drivermodebtn_active.png";
                ridermodeimg.src = "../img/ridermodebtn_inactive.png";
                document.getElementById('usermodeslider').style.marginLeft = '41px';
                document.getElementById('usermodelabel').innerHTML = 'Driver';

                document.getElementById('driverupdatecount2').style.display = (document.getElementById('driverupdatecount2').innerHTML!='')?'block':'none';
                document.getElementById('riderupdatecount2').style.display = 'none';

                retval = 0;
            }
            createCookie('usermode', retval, 365);
            this.setupTabs();
            return retval;
        },

        setriderupdatecount: function(count) {
            if (!count>0)
                count='';

            document.getElementById('riderupdatecount').innerHTML = count;
            document.getElementById('riderupdatecount2').innerHTML = count;
            document.getElementById('riderupdatecount3').innerHTML = count;

            document.getElementById('riderupdatecount').style.display = (count!='')?'block':'none';

            if (usermode == RIDERMODE) {
                document.getElementById('riderupdatecount2').style.display = (document.getElementById('riderupdatecount2').innerHTML!='')?'block':'none';
            }

            riderupdatecount = count;
        },
        reduceriderupdatecount: function() {
            this.setriderupdatecount(riderupdatecount - 1);
        },
        setdriverupdatecount: function(count) {
            if (!count>0)
                count='';

            document.getElementById('driverupdatecount').innerHTML = count;
            document.getElementById('driverupdatecount2').innerHTML = count;
            document.getElementById('driverupdatecount3').innerHTML = count;

            document.getElementById('driverupdatecount').style.display = (count!='')?'block':'none';

            if (usermode == DRIVERMODE) {
                document.getElementById('driverupdatecount2').style.display = (document.getElementById('driverupdatecount2').innerHTML!='')?'block':'none';
            }

            driverupdatecount = count;
        },
        reducedriverupdatecount: function() {
            this.setdriverupdatecount(driverupdatecount - 1);
        },

        alertajaxerror: function(xhr, textStatus, errorThrown, customMessage){
            //alert('1'+customMessage);
            var textMessage = '';
            var reload = false;
            //alert(customMessage);
            switch (textStatus) {
                case 'error':
                    switch (xhr.status) {
                        case 500: // Server error
                            textMessage = 'The request could not be processed by the server. <br /> If this problem persists, please contact our support team.';
                            reload = false;
                            break;
                        case 502: // Bad gateway
                            textMessage = 'The request could not be forwarded to the server. <br /> Please try again.';
                            reload = false;
                            break;
                        case 400: // Bad request - display custom message, if supplied:
                            textMessage = customMessage || 'The request was rejected by the server as invalid. Please check your information.';
                            break;
                        case 404: // Not found - display custom message, if supplied:
                            textMessage = customMessage || 'The request was rejected by the server as invalid.';
                            break;
                        case 0: // Connection problems - reload
                            location.href="./";
                            break;
                    }
                    //DEBUG:
                    textMessage = textMessage + ' <br /><br /><small style="color:#999;margin-bottom:-1em;">HTTP status: ' + xhr.status + '</small>';
                    break;
                case 'parseerror':
                    textMessage = 'The server response could not be processed. Please try again later.';//Die Antwort des Servers konnte nicht verarbeitet werden. Bitte versuchen Sie es später noch einmal.';
                    break;
                case 'timeout':
                    textMessage = 'The request could not be sent to the server. Please check your Internet connection.';//'Die Anfrage konnte nicht an den Server gesendet werden. Bitte prüfen Sie Ihre Internetverbindung.';
                    break;
                case 'notmodified':
                    // ok.
                    break;
                case 'validateError':
                    textMessage = customMessage;
                    break;
            }

            if (textMessage != '') {
                if (reload) {
                    showOverlayDialog('Error:', textMessage, 'OK', 'location.reload()', '', '');
                }
                else {
                    showOverlayDialog('Error:', textMessage, 'OK', '', '', '');
                }
            }

        }
    };
}();

jQuery.fn.sort = function() {
    return this.pushStack( [].sort.apply( this, arguments ), []);
};


function round(zahl,n_stelle){
    n_stelle = (n_stelle == "" || n_stelle == 0 ? 1 : Math.pow(10,n_stelle));

    zahl = Math.round(zahl * n_stelle) / n_stelle;

    return zahl;
}



function dumpProps(obj, parent) {
    // Go through all the properties of the passed-in object
    for (var i in obj) {
        // if a parent (2nd parameter) was passed in, then use that to
        // build the message. Message includes i (the object's property name)
        // then the object's property value on a new line
        if (parent) {
            var msg = parent + "." + i + "\n" + obj[i];
        }else {
            var msg = i + "\n" + obj[i];
        }
        // Display the message. If the user clicks "OK", then continue. If they
        // click "CANCEL" then quit this level of recursion
        if (!confirm(msg)) {
            return;
        }
        // If this property (i) is an object, then recursively process the object
        if (typeof obj[i] == "object") {
            if (parent) {
                dumpProps(obj[i], parent + "." + i);
            }else {
                dumpProps(obj[i], i);
            }
        }
    }
}
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

fokus.openride.mobclient.controller.modules.uievents = function(){ //found in eventlistener.module.js

    /* ------ private variabeles and methods ------ */

    //references to modules
    var mapmod              = fokus.openride.mobclient.controller.modules.mapmanager;
    var modulemanagermod    = fokus.openride.mobclient.controller.modules.modulemanager;
    var calendarpicker      = fokus.openride.mobclient.controller.modules.calendar;
    var calendarpickerEnd   = fokus.openride.mobclient.controller.modules.calendar;
    var offermod            = fokus.openride.mobclient.controller.modules.offer;
    var searchmod           = fokus.openride.mobclient.controller.modules.search;
    var nativemod           = fokus.openride.mobclient.controller.modules.nativemodule;
    var srvconn             = fokus.openride.mobclient.controller.serverconnector;
    var favmod              = fokus.openride.mobclient.controller.modules.favorites;
    var profilemod          = fokus.openride.mobclient.controller.modules.profile;
    var profile = {};

    var profilepic = '';

    var timer = true;
	
    var showofferrouteUI = 'showofferrouteUI';

    var offerstartdropdownid = 'offerstartdropd';
    var offerdestdropdownid = 'offerdestdropd';
    var searchstartdropdownid = 'searchstartdropd';
    var searchdestdropdownid = 'searchdestdropd';

    //option elemt id's for setting user position address, when screen gets set to offer/search ui
    var offerstartselectcurrpos = 'offerstartselectcurrpos';
    var offerdestselectcurrpos = 'offerdestselectcurrpos';
    var searchstartselectcurrpos = 'searchstartselectcurrpos';
    var searchdestselectcurrpos = 'searchdestselectcurrpos';

    var minutelabelEnd = 'minuteLabelEnd';
    var hourlabelEnd = 'hourLabelEnd';

    var timeLabelsEnd = new Array(hourlabelEnd, minutelabelEnd);

    var daylabel = 'dayLabel';
    var monthlabel = 'monthLabel';
    var yearlabel = 'yearLabel';

    var minutelabel = 'minuteLabel';
    var hourlabel = 'hourLabel';

    var dateLabels = new Array(daylabel, monthlabel, yearlabel);
    var timeLabels = new Array(hourlabel, minutelabel);

    var searchdaylabel = 'searchdayLabel';
    var searchmonthlabel = 'searchmonthLabel';
    var searchyearlabel = 'searchyearLabel';

    var searchminutelabel = 'searchminuteLabel';
    var searchhourlabel = 'searchhourLabel';

    var searchminutelabelEnd = 'searchminuteLabelEnd';
    var searchhourlabelEnd = 'searchhourLabelEnd';

    var searchdateLabels = new Array(searchdaylabel, searchmonthlabel, searchyearlabel);
    var searchtimeLabels = new Array(searchhourlabel, searchminutelabel);
    var searchtimeLabelsEnd = new Array(searchhourlabelEnd, searchminutelabelEnd);

    var focusdatelabelid = daylabel;
    var focustimelabelid = hourlabel;

    /*var offersavetempllink = document.getElementById('offersavetempllink');
    var offersavetemplimg = document.getElementById('offersavetemplimg');*/

    var offertempl = false;
    var offeractive = false;

    var searchtempl = false;
    var searchactive = false;

    /*var searchfocusdatelabelid = searchdaylabel;
    var searchfocustimelabelid = searchhourlabel;*/

    function setLabelFocus(labels, id){
        if(labels.length>2){
            focusdatelabelid = id;
        }else focustimelabelid = id;
        
        for(var i=0; i< labels.length; i++){
            if(labels[i] == id){
                document.getElementById(id).className = 'labelStyleOnFocus';
            }else document.getElementById(labels[i]).className = 'labelStyle';
        }
    }

    function refreshSimpleCalendarPickerLabels(dlabels, tlabels){

        var days = calendarpicker.getDay();
        if(days < 10){
            var daysstr = '0' + days;
            document.getElementById(dlabels[0]).innerHTML = daysstr;
        }else document.getElementById(dlabels[0]).innerHTML = days;

        var months = calendarpicker.getMonth();
        if(months < 10){
            var monthstr = '0' + months;
            document.getElementById(dlabels[1]).innerHTML = monthstr;
        }else document.getElementById(dlabels[1]).innerHTML = months;

        document.getElementById(dlabels[2]).innerHTML = calendarpicker.getYear();

        var hours,minutes;
        if (tlabels[0].substr(tlabels[0].length-3)=="End"){
            hours = calendarpicker.getHourEnd();
            minutes= calendarpicker.getMinEnd();
        }
        else{
            hours = calendarpicker.getHour();
            minutes = calendarpicker.getMin();
        }

        if(hours < 10){
            var hourstr = '0'+hours;
            document.getElementById(tlabels[0]).innerHTML = hourstr;
        }else {
            document.getElementById(tlabels[0]).innerHTML = hours;
        }

        if(minutes < 10){
            var minutestr = '0' + minutes;
            document.getElementById(tlabels[1]).innerHTML = minutestr;
        }else {
            document.getElementById(tlabels[1]).innerHTML = minutes;
        }
    }

    function confirmMapAddr(dropdownid){
        modulemanagermod.setTabContent(1, 0);
        var selectdiv = document.getElementById(dropdownid);
        var newoption = document.createElement('option');
        newoption.innerHTML = mapmod.currentFormattedAddress;
        //newoption.innerHTML = mapmod.currentFormattedAddress.substring(0, 24);
        
        newoption.latln = mapmod.getCenterPosition().lat()+','+mapmod.getCenterPosition().lng();
        newoption.mod = true;

        /*var lastopt = selectdiv.options[selectdiv.length-1];

        selectdiv.options[selectdiv.length] = lastopt;
        selectdiv.options[selectdiv.length-2] = newoption;*/

        try
        {
            selectdiv.add(newoption,null); // standards compliant
            selectdiv.selectedIndex = selectdiv.length-1;
        }
        catch(ex)
        {
        /*selectdiv.add(newoption); // IE only*/
        }
    /*document.getElementById(dropdownid).options[0].innerHTML = mapmod.currentFormattedAddress.substring(0, 24); */
    }
    
    /* ------ public variabeles and methods ------ */
    return {
		
        ajaxsuccess : false,

        validationerror : false,

        newfavaddrstring : "",

        parseInitData : function(initData){
            username = initData.InitResponse.nickname;
            password = readCookie('password');
            var picsrc="";
            $.ajax({
                type: "GET",
                url: 'https://' + PeerMenager + '/users/'+username+'/profile/picture',//'/api/register/' + user,
                data:"",// JSON.stringify(parsed),//"{username="+user+"&password="+pass+"}",
                crossDomain: true,
                //contentType:  "application/json; charset=UTF-8",
                accepts: "application/json",
                dataType: "json",
                username: username,
                password: password,
                beforeSend: function (xhr)
                {
                    xhr.withCredentials = true,
                    xhr.setRequestHeader('Authorization' , 'Basic ' + username+':'+password);
                    xhr.setRequestHeader("APP_KEY" , "RIDE-SHARING-CLIENT-APPLICATION");
                    xhr.setRequestHeader("APP_SECRET", "508e8d50-ab80-11e3-a5e2-0800200c9a66");
                },
                async: false,
                success: function(data, textStatus, jqXHR){
                    //alert(data);
                    //profilemod.setAllData(data);
                    picsrc=data.picture;
                //fokus.openride.mobclient.controller.modules.uievents.parseInitData(profile);
                },
                error:function(jq , textStatus , errorThrown){
                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, initial data could not be loaded.')
                }
            });
            //            alert(JSON.stringify(profile));
            profilepic = initData.InitResponse.profilpic;
            
            modulemanagermod.username = username;
            mapmod.username = username;
            //username and password are identical!!!!!
            //            alert(password);
            //            if (password==null){
            //            createCookie('username',username,365);
            //            createCookie('password',username,365);
            //            }
            document.getElementById('usernametag').innerHTML = username;
            var profileimg = document.getElementById('profilepicimg');
            var now = new Date();
            var lMessages =
            ['מדוע ליסוע לבד כשאפשר ליסוע יחד?','למה לעמוד בפקק לבד?' ,'נסיעות קבוצתיות מפחיתות באופן משמעותי את זיהום האוויר'
            ,'נסיעות קבוצתיות יפחיתו את ההוצאות החודשיות שלך' ,'נסיעות קבוצתיות תורמות לטיפוח החברה' ,'המערכת מיועדת לסטודנטים באוניברסיטת בן-גוריון בלבד'];
            //                ['Patience is something you admire in the driver behind you and scorn in the one ahead. ~Mac McCleary'
            //            ,'For every "Drive Safely" sign, shouldn\'t there be a "Resume Normal Driving" sign? ~Robert Brault'
            //            ,'Every time I see an adult on a bicycle, I no longer despair for the future of the human race. ~H.G. Wells'
            //            ,'Any man who can drive safely while kissing a pretty girl is simply not giving the kiss the attention it deserves. ~Albert Einstein'
            //            ,'The one thing that unites all human beings, regardless of age, gender, religion, economic status or ethnic background, is that, deep down inside, we ALL believe that we are above average drivers. ~Dave Barry, \"Things That It Took Me 50 Years to Learn\"'
            //            ,'Walking isn\'t a lost art — one must, by some means, get to the garage. ~Evan Esar']; //Motivational Massages
            profileimg.src = picsrc;//"../.." + profilepic + "?" + now.getTime(); // time in search string forces reload

            //Motivation Message
            if(true)//TODO create selection from server
            {
                var randMessage = lMessages[Math.floor(Math.random()*lMessages.length)];
                //alert(randMessage);
                document.getElementById("motivationmessage").innerHTML = randMessage+'<hr>';
            }

            // Home tab statistics
            document.getElementById("homeinfoopenoffers").innerHTML = initData.InitResponse.openoffers;
            if (initData.InitResponse.openoffers==1) {
                document.getElementById("homeinfoopenoffers-singular").style.display = 'inline';
                document.getElementById("homeinfoopenoffers-plural").style.display = 'none';
            }
            else {
                document.getElementById("homeinfoopenoffers-singular").style.display = 'none';
                document.getElementById("homeinfoopenoffers-plural").style.display = 'inline';
            }

            document.getElementById("homeinfoopensearches").innerHTML = initData.InitResponse.opensearches;
            if (initData.InitResponse.opensearches==1) {
                document.getElementById("homeinfoopensearches-singular").style.display = 'inline';
                document.getElementById("homeinfoopensearches-plural").style.display = 'none';
            }
            else {
                document.getElementById("homeinfoopensearches-singular").style.display = 'none';
                document.getElementById("homeinfoopensearches-plural").style.display = 'inline';
            }

            document.getElementById("homeinfoopenratings").innerHTML = initData.InitResponse.openratings;
            if (initData.InitResponse.openratings==1) {
                document.getElementById("homeinfoopenratings-plural").style.display = 'none';
            }
            else {
                document.getElementById("homeinfoopenratings-plural").style.display = 'inline';
            }

            

            // Update notifications
            modulemanagermod.setriderupdatecount(initData.InitResponse.updatedsearches);
            modulemanagermod.setdriverupdatecount(initData.InitResponse.updatedoffers);            

            // Profile data - upload form action
            document.getElementById("profilepictureform").action = "../resources/users/"+username+"/profile/picture";
            
            return true;
        },

        hideUnusedTabs : function(tabArray) {
            var id;

            for (id in tabArray) {
                document.getElementById(tabArray[id]).setAttribute("class", "inactiveTab");;
            }
        },

        unhideAllTabs : function() {
            var id;
            var tabArray = new Array("tabimg11", "tabimg12", "tabimg13", "tabimg14");

            for (id in tabArray) {
                document.getElementById(tabArray[id]).setAttribute("class", "tablevel1 img");
            }
        },

        timerStart : function() {
            timer = true;
        },

        refreshTimer : function() {
            if (timer) {
                fokus.openride.mobclient.controller.modules.calendar.reset();
                refreshSimpleCalendarPickerLabels(dateLabels, timeLabels);
                refreshSimpleCalendarPickerLabels(dateLabels, timeLabelsEnd);
                refreshSimpleCalendarPickerLabels(searchdateLabels, searchtimeLabels);
                refreshSimpleCalendarPickerLabels(searchdateLabels, searchtimeLabelsEnd);
            }
            setTimeout("fokus.openride.mobclient.controller.modules.uievents.refreshTimer()", 10000);
        },

        timerStop : function() {
            timer = false;
        },
        
        //init setup
        start: function(){
            modulemanagermod.setupTabs();
            this.setUpListeners();
            refreshSimpleCalendarPickerLabels(dateLabels, timeLabels);
            refreshSimpleCalendarPickerLabels(dateLabels, timeLabelsEnd);

            // Restore previous mode from cookie
            if (readCookie('usermode') == 1) // Rider mode -> need to switch from default
                modulemanagermod.changemode();
            
            // Enable homeUI
            document.getElementById("homeUI_loading").style.display = "none";
            document.getElementById("homeUI_live").style.display = "block";

        },

        setUpListeners: function (){

            /* ------ home ui link elements ------ */
            var homeActiveOffers = document.getElementById("homeActiveOffers");

            homeActiveOffers.onclick = function () {
                
                modulemanagermod.changeViewAndUserMode('offers');
            };

            var homeActiveSearches = document.getElementById("homeActiveSearches");

            homeActiveSearches.onclick = function () {
                modulemanagermod.changeViewAndUserMode('searches');
            };


            var homeOpenRatings = document.getElementById("homeOpenRatings");

            homeOpenRatings.onclick = function () {
                modulemanagermod.changeViewAndUserMode('ratings');
            };


            /* ------ configure Date picker layout elements ------ */
            var dayLbl = document.getElementById(daylabel);
            var monthLbl = document.getElementById(monthlabel);
            var yearLbl = document.getElementById(yearlabel);

            var hourLbl = document.getElementById(hourlabel);
            var minuteLbl = document.getElementById(minutelabel);

            var hourLblEnd = document.getElementById(hourlabelEnd);
            var minuteLblEnd = document.getElementById(minutelabelEnd);

            dayLbl.onclick = function(){
                setLabelFocus(dateLabels, daylabel);
            };

            monthLbl.onclick = function(){
                setLabelFocus(dateLabels, monthlabel);
            };

            yearLbl.onclick = function(){
                setLabelFocus(dateLabels, yearlabel);
            };

            hourLbl.onclick = function(){
                setLabelFocus(timeLabels, hourlabel);
            };

            minuteLbl.onclick = function(){
                setLabelFocus(timeLabels, minutelabel);
            };

            hourLblEnd.onclick = function(){
                setLabelFocus(timeLabelsEnd, hourlabelEnd);
            };

            minuteLblEnd.onclick = function(){
                setLabelFocus(timeLabelsEnd, minutelabelEnd);
            };

            var dateuparrow = document.getElementById("dateuparrow");

            var dateuparrowlink = document.getElementById("dateuparrowlink");
            dateuparrowlink.href = "javascript:void(0);";

            dateuparrow.onclick = function(){
                fokus.openride.mobclient.controller.modules.uievents.timerStop();
                if(focusdatelabelid == daylabel)
                    calendarpicker.increaseDay();
                else if(focusdatelabelid == monthlabel)
                    calendarpicker.increaseMonth();
                else if(focusdatelabelid == yearlabel)
                    calendarpicker.increaseYear();
                refreshSimpleCalendarPickerLabels(dateLabels, timeLabels);
            };

            var datedownarrow = document.getElementById("datedownarrow");

            var datedownarrowlink = document.getElementById("datedownarrowlink");
            datedownarrowlink.href = "javascript:void(0);";

            datedownarrow.onclick = function(){
                fokus.openride.mobclient.controller.modules.uievents.timerStop();
                if(focusdatelabelid == daylabel)
                    calendarpicker.decreaseDay();
                else if(focusdatelabelid == monthlabel)
                    calendarpicker.decreaseMonth();
                else if(focusdatelabelid == yearlabel)
                    calendarpicker.decreaseYear();
                refreshSimpleCalendarPickerLabels(dateLabels, timeLabels);
            };

            var timeuparrow = document.getElementById("timeuparrow");

            var timeuparrowlink = document.getElementById("timeuparrowlink");
            timeuparrowlink.href = "javascript:void(0);";

            timeuparrow.onclick = function(){
                fokus.openride.mobclient.controller.modules.uievents.timerStop();
                if(focustimelabelid == hourlabel){
                    calendarpicker.increaseHour();
                }
                else if(focustimelabelid == minutelabel){
                    calendarpicker.increaseMin(5);
                }
                refreshSimpleCalendarPickerLabels(dateLabels, timeLabels);
            };

            var timedownarrow = document.getElementById("timedownarrow");

            var timedownarrowlink = document.getElementById("timedownarrowlink");
            timedownarrowlink.href = "javascript:void(0);";

            timedownarrow.onclick = function(){
                fokus.openride.mobclient.controller.modules.uievents.timerStop();
                if(focustimelabelid == hourlabel){
                    calendarpicker.decreaseHour();
                }else if(focustimelabelid == minutelabel){
                    calendarpicker.decreaseMin(5);
                }
                refreshSimpleCalendarPickerLabels(dateLabels, timeLabels);
            };

            //time end
            var timeuparrowEnd = document.getElementById("timeuparrowEnd");

            var timeuparrowlinkEnd = document.getElementById("timeuparrowlinkEnd");
            timeuparrowlinkEnd.href = "javascript:void(0);";

            timeuparrowEnd.onclick = function(){
                fokus.openride.mobclient.controller.modules.uievents.timerStop();
                if(focustimelabelid == hourlabelEnd)
                    calendarpicker.increaseHourEnd();
                else if(focustimelabelid == minutelabelEnd)
                    calendarpicker.increaseMinEnd(5);
                refreshSimpleCalendarPickerLabels(dateLabels, timeLabelsEnd);
            };

            var timedownarrowEnd = document.getElementById("timedownarrowEnd");

            var timedownarrowlinkEnd = document.getElementById("timedownarrowlinkEnd");
            timedownarrowlinkEnd.href = "javascript:void(0);";

            timedownarrowEnd.onclick = function(){
                fokus.openride.mobclient.controller.modules.uievents.timerStop();
                if(focustimelabelid == hourlabelEnd)
                    calendarpicker.decreaseHourEnd();
                else if(focustimelabelid == minutelabelEnd)
                    calendarpicker.decreaseMinEnd(5);
                refreshSimpleCalendarPickerLabels(dateLabels, timeLabelsEnd);
            };

            /* ------ configure Date picker layout elements SEARCH ------ */
            var searchdayLbl = document.getElementById(searchdaylabel);
            var searchmonthLbl = document.getElementById(searchmonthlabel);
            var searchyearLbl = document.getElementById(searchyearlabel);

            var searchhourLbl = document.getElementById(searchhourlabel);
            var searchminuteLbl = document.getElementById(searchminutelabel);

            var searchhourLblEnd = document.getElementById(searchhourlabelEnd);
            var searchminuteLblEnd = document.getElementById(searchminutelabelEnd);

            searchdayLbl.onclick = function(){
                setLabelFocus(searchdateLabels, searchdaylabel);
            };

            searchmonthLbl.onclick = function(){
                setLabelFocus(searchdateLabels, searchmonthlabel);
            };

            searchyearLbl.onclick = function(){
                setLabelFocus(searchdateLabels, searchyearlabel);
            };

            searchhourLbl.onclick = function(){
                setLabelFocus(searchtimeLabels, searchhourlabel);
            };

            searchminuteLbl.onclick = function(){
                setLabelFocus(searchtimeLabels, searchminutelabel);
            };
            searchhourLblEnd.onclick = function(){
                setLabelFocus(searchtimeLabelsEnd, searchhourlabelEnd);
            };

            searchminuteLblEnd.onclick = function(){
                setLabelFocus(searchtimeLabelsEnd, searchminutelabelEnd);
            };

            var searchdateuparrow = document.getElementById("searchdateuparrow");

            var searchdateuparrowlink = document.getElementById("searchdateuparrowlink");
            searchdateuparrowlink.href = "javascript:void(0);";

            searchdateuparrow.onclick = function(){
                fokus.openride.mobclient.controller.modules.uievents.timerStop();
                if(focusdatelabelid == searchdaylabel)
                    calendarpicker.increaseDay();
                else if(focusdatelabelid == searchmonthlabel)
                    calendarpicker.increaseMonth();
                else if(focusdatelabelid == searchyearlabel)
                    calendarpicker.increaseYear();
                refreshSimpleCalendarPickerLabels(searchdateLabels, searchtimeLabels);
            };

            var searchdatedownarrow = document.getElementById("searchdatedownarrow");

            var searchdatedownarrowlink = document.getElementById("searchdatedownarrowlink");
            searchdatedownarrowlink.href = "javascript:void(0);";

            searchdatedownarrow.onclick = function(){
                fokus.openride.mobclient.controller.modules.uievents.timerStop();
                if(focusdatelabelid == searchdaylabel)
                    calendarpicker.decreaseDay();
                else if(focusdatelabelid == searchmonthlabel)
                    calendarpicker.decreaseMonth();
                else if(focusdatelabelid == searchyearlabel)
                    calendarpicker.decreaseYear();
                refreshSimpleCalendarPickerLabels(searchdateLabels, searchtimeLabels);
            };

            var searchtimeuparrow = document.getElementById("searchtimeuparrow");

            var searchtimeuparrowlink = document.getElementById("searchtimeuparrowlink");
            searchtimeuparrowlink.href = "javascript:void(0);";

            searchtimeuparrow.onclick = function(){
                fokus.openride.mobclient.controller.modules.uievents.timerStop();
                if(focustimelabelid == searchhourlabel)
                    calendarpicker.increaseHour();
                else if(focustimelabelid == searchminutelabel)
                    calendarpicker.increaseMin(5);
                refreshSimpleCalendarPickerLabels(searchdateLabels, searchtimeLabels);
            };

            var searchtimedownarrow = document.getElementById("searchtimedownarrow");

            var searchtimedownarrowlink = document.getElementById("searchtimedownarrowlink");
            searchtimedownarrowlink.href = "javascript:void(0);";

            searchtimedownarrow.onclick = function(){
                fokus.openride.mobclient.controller.modules.uievents.timerStop();
                if(focustimelabelid == searchhourlabel)
                    calendarpicker.decreaseHour();
                else if(focustimelabelid == searchminutelabel)
                    calendarpicker.decreaseMin(5);
                refreshSimpleCalendarPickerLabels(searchdateLabels, searchtimeLabels);
            };
            //end time
            var searchtimeuparrowEnd = document.getElementById("searchtimeuparrowEnd");

            var searchtimeuparrowlinkEnd = document.getElementById("searchtimeuparrowlinkEnd");
            searchtimeuparrowlinkEnd.href = "javascript:void(0);";

            searchtimeuparrowEnd.onclick = function(){
                //alert('down end');
                fokus.openride.mobclient.controller.modules.uievents.timerStop();
                if(focustimelabelid == searchhourlabelEnd)
                    calendarpicker.increaseHourEnd();
                else if(focustimelabelid == searchminutelabelEnd)
                    calendarpicker.increaseMinEnd(5);
                refreshSimpleCalendarPickerLabels(searchdateLabels, searchtimeLabelsEnd);
            };

            var searchtimedownarrowEnd = document.getElementById("searchtimedownarrowEnd");

            var searchtimedownarrowlinkEnd = document.getElementById("searchtimedownarrowlinkEnd");
            searchtimedownarrowlinkEnd.href = "javascript:void(0);";

            searchtimedownarrowEnd.onclick = function(){
                //alert('down end');
                fokus.openride.mobclient.controller.modules.uievents.timerStop();
                if(focustimelabelid == searchhourlabelEnd)
                    calendarpicker.decreaseHourEnd();
                else if(focustimelabelid == searchminutelabelEnd)
                    calendarpicker.decreaseMinEnd(5);
                refreshSimpleCalendarPickerLabels(searchdateLabels, searchtimeLabelsEnd);
            };

            /* ------ set focus ------ */
            setLabelFocus(dateLabels, daylabel);
            setLabelFocus(timeLabels, minutelabel);
            setLabelFocus(timeLabelsEnd, minutelabelEnd);
            setLabelFocus(searchdateLabels, searchdaylabel);
            setLabelFocus(searchtimeLabels, searchminutelabel);
            setLabelFocus(searchtimeLabelsEnd, searchminutelabelEnd);

            /* ------ new offer related elements ------ */

            var newOfferDdArrow = document.getElementById('newOfferDdArrow');
            
            if(newOfferDdArrow) {
                newOfferDdArrow.onclick = function() {
                    var adrInput = document.getElementById('newOfferFrom');
                    adrInput.focus();
                }
            }

            var newOfferDestDdArrow = document.getElementById('newOfferDestDdArrow');

            if(newOfferDestDdArrow) {
                newOfferDestDdArrow.onclick = function() {
                    var adrInput = document.getElementById('newOfferDest');
                    adrInput.focus();
                }
            }

            var newofferdetaillink = document.getElementById('newofferdetaillink');
            newofferdetaillink.href = "javascript:void(0);";

            newofferdetaillink.onclick = function(){
                modulemanagermod.setView('newofferdetailsUI');
                return false;
            }

            var newoffersubmit = document.getElementById('newoffersubmit');
            newoffersubmit.href = "javascript:void(0);";

            newoffersubmit.onclick = function(){
                //set start time

                var minute = 1000*60;


                // Validation
                // Time & date
                if ((calendarpicker.getDate().getTime() + minute - new Date().getTime()) < 0) {
                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(null,'validateError',null,'The departure time is in the past.');
                    return;
                }



                // OK, continue submitting:

                offermod.setStartTime(calendarpicker.getDate());

                //set start location
                //                var test = document.getElementById(offerstartdropdownid)[document.getElementById(offerstartdropdownid).selectedIndex]; // just for debugging...
                offermod.setStartLatLn(document.getElementById(offerstartdropdownid)[document.getElementById(offerstartdropdownid).selectedIndex].latln);

                //set destination location
                offermod.setDestLatLn(document.getElementById(offerdestdropdownid)[document.getElementById(offerdestdropdownid).selectedIndex].latln);

                /*currently no geocoding here, address-string from dropd's is used instead. it is actually cropped, but will hold the full adress text in substitution of selecvt with inputs
                 *
                //rev geocoding to get adress
                var startlatitude = offermod.getStartLat();
                var startlongititude = offermod.getStartLon();

                var destlatitude = offermod.getDestLat();
                var destlongititude = offermod.getDestLon();

                var startLatLn = new Object();
                var destLatLn = new Object();

                startLatLn.coords.latitude = startlatitude;
                startLatLn.coords.longitude = startlongititude;

                destLatLn.coords.latitude = destlatitude;
                destLatLn.coords.longitude = destlongititude;

                var startAddrContainer = document.createElement('div');
                startAddrContainer.id = 'startAddrCont';
                mapmod.insertRevGeocodedAddr(startLatLn, 'startAddrCont');

                var startAdressStr = startAddrContainer.innerHTML;

                var destAddrContainer = document.createElement('div');
                destAddrContainer.id = 'destAddrCont';
                mapmod.insertRevGeocodedAddr(destLatLn, 'destAddrCont');

                var destAdressStr = startAddrContainer.innerHTML;

                alert('Startadresse: ' + startAdressStr + 'Zieladresse: ' + destAdressStr);

                 */
                
                var determiningLocation = 'Location...';

                if ((document.getElementById(offerdestdropdownid)[document.getElementById(offerdestdropdownid).selectedIndex].text == determiningLocation) ||
                    (document.getElementById(offerstartdropdownid)[document.getElementById(offerstartdropdownid).selectedIndex].text == determiningLocation)) {
                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(null,'validateError',null,'Your location could not be determined.');
                    return;
                }

                //alert(document.getElementById(offerstartdropdownid)[document.getElementById(offerstartdropdownid).selectedIndex].text);
                offermod.setStartAddr(document.getElementById(offerstartdropdownid)[document.getElementById(offerstartdropdownid).selectedIndex].text);

                //alert(document.getElementById(offerdestdropdownid)[document.getElementById(offerdestdropdownid).selectedIndex].text);
                offermod.setDestAddr(document.getElementById(offerdestdropdownid)[document.getElementById(offerdestdropdownid).selectedIndex].text);

                //set detour
                //                switch(document.getElementById('offerdetourselect').selectedIndex){
                //                    case 0:
                //                        offermod.setDetour(1);
                //                        break;
                //                    case 1:
                //                        offermod.setDetour(2);
                //                        break;
                //                    case 2:
                //                        offermod.setDetour(5);
                //                        break;
                //                    case 3:
                //                        offermod.setDetour(10);
                //                        break;
                //                    case 4:
                //                        offermod.setDetour(20);
                //                        break;
                //                    case 5:
                //                        offermod.setDetour(30);
                //                        break;
                //                }
                offermod.setDetour(30);
                //set offered seats number
                //offermod.setOfferedSeatsNo(document.getElementById('offerseatsselect').selectedIndex + 1);
                offermod.setOfferedSeatsNo(document.getElementById('nrseatsselect').selectedIndex + 1);

                //set price
                /* switch(document.getElementById('offerpriceselect').selectedIndex){
                    case 0:
                        offermod.setPrice(1.8);
                        break;
                    case 1:
                        offermod.setPrice(1.9);
                        break;
                    case 2:
                        offermod.setPrice(2.0);
                        break;
                    case 3:
                        offermod.setPrice(2.1);
                        break;
                    case 4:
                        offermod.setPrice(2.2);
                        break;
                    case 5:
                        offermod.setPrice(2.3);
                        break;
                    default: // Für FOKUS-DAY
                        offermod.setPrice(1.8);
                }*/
                // offermod.setPrice(document.getElementById('offerpriceselect').selectedIndex);

                offermod.setPrice(document.getElementById('priceselect').selectedIndex);
                //set currency
                /* switch(document.getElementById('offerCurrency').selectedIndex){
                    case 0:
                        offermod.setCurrency("Euro");
                        break;
                    case 1:
                        offermod.setCurrency("Shekel");
                        break;
                    case 2:
                        offermod.setCurrency("Dollar");
                        break;
                    case 3:
                        offermod.setCurrency("Pound");
                        break;

                    default:
                        offermod.setCurrency("Euro");
                }*/
                offermod.setCurrency("Euro");
                //set comment
                //                offermod.setComment(document.getElementById('offercommentta').value);
                offermod.setComment("No comment");

                //(validate and) commit new offer to server
                var eventlistenerTHIS = this;
                //                var serviceType = modulemanagermod.getServiceType();
                //                if ((offermod.getStartLat() != offermod.getDestLat()) || (offermod.getStartLon() != offermod.getDestLon())) {
                //                    if (serviceType == 'new') {
                //                    /*srvconn.POST('/OpenRideServer-RS/resources/users/'+username+'/rides/offers', false, offermod.validateOfferRequest(), function(data) {
                //                            eventlistenerTHIS.ajaxsuccess = true;
                //                            if(eventlistenerTHIS.ajaxsuccess) {
                //                                showOverlayDialog('Ihr Fahrtangebot wurde erfolgreich gespeichert.', '', 'OK', 'fokus.openride.mobclient.controller.modules.modulemanager.setTabContent(1, 1);', '', '');
                //                                slidingUITabListClick(document.getElementById('r'+data.PostOfferResponse.rideId));
                //                            }
                //                        }, function(x,s,e) {
                //                            fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Ihr neues Angebot konnte leider nicht gespeichert werden.');
                //                        });*/
                //                    }else {
                //                /*srvconn.PUT('/OpenRideServer-RS/resources/users/'+username+'/rides/offers/'+modulemanagermod.getRideId(), false, offermod.validateOfferRequest(), function(data) {
                //                            eventlistenerTHIS.ajaxsuccess = true;
                //                            if(eventlistenerTHIS.ajaxsuccess) {
                //                                showOverlayDialog('Ihr Fahrtangebot wurde erfolgreich ge&auml;ndert.', '', 'OK', 'fokus.openride.mobclient.controller.modules.modulemanager.setTabContent(1, 1);', '', '');
                //                                slidingUITabListClick(document.getElementById('r'+data.PostOfferResponse.rideId));
                //                            }
                //                        }, function(x,s,e) {
                //                            fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Ihr ge&auml;ndertes Angebot konnte leider nicht gespeichert werden.');
                //                        });*/
                //                }
                //                } else {
                //                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(null,'validateError',null,'Please enter different addresses for start and finish.');
                //                }
                var smoker = '';
                $.ajax({
                type: "GET",
                url: 'https://' + PeerMenager + '/users/'+username+'/profile/preferences',//'/api/register/' + user,
                data: "",
                crossDomain: true,
                contentType:  "application/json; charset=UTF-8",
                accepts: "application/json",
                dataType: "json",
                username: username,
                password: password,
                beforeSend: function (xhr)
                {
                    xhr.withCredentials = true,
                    xhr.setRequestHeader('Authorization' , 'Basic ' + username+':'+password);
                    xhr.setRequestHeader("APP_KEY" , "RIDE-SHARING-CLIENT-APPLICATION");
                    xhr.setRequestHeader("APP_SECRET", "508e8d50-ab80-11e3-a5e2-0800200c9a66");
                },
                async: false,
                //accepts: "application/json",
                success: function(data, textStatus, jqXHR){
                    smoker = data.isSmoker;
                },error:function(xhr,textStatus,errorThrown){
                    smoker="n";
                }
                });

                var newRideRequest = {};

                function getRideDetails()
                {
                    newRideRequest.potentialRidePlans         = [];
                    newRideRequest.potentiallyAgreedRidePlans = [];
                    newRideRequest.driverAgreedRidePlans      = [];
                    newRideRequest.agreedRidePlan             = "";
                    newRideRequest.invalidRidePlans           = [];
                    newRideRequest.user = username;

                    newRideRequest.index = 0;
                    newRideRequest.__v = 0;
                    newRideRequest._revision = 0;
                    newRideRequest._id = 0;

                    newRideRequest.rideRecord           = ""; 		// string: link to the ride record associated with the ride request

                    if (readCookie('usermode') == 1)            newRideRequest.mode                 = "commuter";
                    else                                        newRideRequest.mode                 = "driver";

                    newRideRequest.currency             = offermod.getCurrency();

                    newRideRequest.pets                 = "No"; //defs.SS_DEFS.STATIC_PREFERENCE_LINK_BASED_ON_TEXT_PETS     (myData.values.ridePreferences.pets);

                    if (smoker == "y")//if (profilemod.getPrefIsSmoker() == 'y')
                        newRideRequest.smoking              = "Yes";
                    else
                        newRideRequest.smoking              = "No";
                    newRideRequest.rideQualityThreshold = "0";//"5"; //defs.SS_DEFS.STATIC_PREFERENCE_LINK_BASED_ON_TEXT_RQT      (myData.values.ridePreferences.rideQualityThreshold);
                    //newRideRequest.capacity          = defs.SS_DEFS.STATIC_PREFERENCE_LINK_BASED_ON_TEXT_CAPACITY($('#dropDownCapacityList').find(':selected').text());
                    newRideRequest.capacity             = document.getElementById('nrseatsselect').selectedIndex + 1;//offermod.getOfferedSeatsNo();

                    /*
	 * Now deal with the rest
	 */
                    newRideRequest.departureCity = document.getElementById('offerstartcombo')[document.getElementById('offerstartcombo').selectedIndex].text;
                    //                    var depCity  //=offermod.getStartAddr().split(", ");
                    //                    var tempdepCity = depCity[depCity.length-2].split(" ");
                    //                    if (tempdepCity.length > 1 && isNaN(tempdepCity[tempdepCity.length-2]) )
                    //                        newRideRequest.departureCity = tempdepCity[tempdepCity.length-2]+ " " + tempdepCity[tempdepCity.length-1];
                    //                    else if (tempdepCity.length > 1)
                    //                        newRideRequest.departureCity = tempdepCity[tempdepCity.length-2] + " " + tempdepCity[tempdepCity.length-1];
                    //                    else newRideRequest.departureCity = tempdepCity[tempdepCity.length-1];


        
                    newRideRequest.destinationCity = document.getElementById('offerendcombo')[document.getElementById('offerendcombo').selectedIndex].text;

                    //                    var desCity = offermod.getDestAddr().split(", ");
                    //                    var tempdesCity = desCity[desCity.length-2].split(" ");
                    //                    if (tempdesCity.length > 1 && isNaN(tempdesCity[tempdesCity.length-2]) )
                    //                        newRideRequest.destinationCity = tempdesCity[tempdesCity.length-2]+ " " + tempdesCity[tempdesCity.length-1];
                    //                    else if (tempdesCity.length > 1)
                    //                        newRideRequest.departureCity = tempdesCity[tempdesCity.length-2] + " " +tempdesCity[tempdesCity.length-1];
                    //                    else newRideRequest.destinationCity = tempdesCity[tempdesCity.length-1];
        
                    // Figure out datetime for departure based on the input
                    var tempDateLow1                      = offermod.getStartTime();//'1/11/2013';
                    var tempTimeLow1                      = '18:00';
                    newRideRequest.depDateTimeWindow = {};
                    newRideRequest.depDateTimeWindow.depDateTimeLow = tempDateLow1;//generateDateObject (tempDateLow1, tempTimeLow1);
                    //alert(newRideRequest.depDateTimeWindow.depDateTimeLow);
                    var tempDateHigh1                     = offermod.getStartTime()+5000000;//'2/11/2013';
                    var tempTimeHigh1                     = '19:00';
                    newRideRequest.depDateTimeWindow.depDateTimeHigh = tempDateHigh1;//generateDateObject (tempDateHigh1, tempTimeHigh1);

                    // Figure out datetime for destination based on the input
                    var tempDateLow                                      = offermod.getStartTime()+5000000;//'1/11/2013';
                    var tempTimeLow                                      = '18:00';
                    newRideRequest.desDateTimeWindow = {};
                    newRideRequest.desDateTimeWindow.desDateTimeLow  = tempDateLow;//generateDateObject (tempDateLow, tempTimeLow);
                    //alert(newRideRequest.desDateTimeWindow.desDateTimeLow);
                    var tempDateHigh                                     = offermod.getStartTime()+9000000;//'2/11/2013';
                    var tempTimeHigh                                     = '19:00';
                    newRideRequest.desDateTimeWindow.desDateTimeHigh = tempDateHigh;//generateDateObject (tempDateHigh, tempTimeHigh);
                    //alert(newRideRequest.desDateTimeWindow.desDateTimeHigh);
                    //console.log(newRideRequest.desDateTimeWindow.desDateTimeLow);
                    //console.log(newRideRequest.desDateTimeWindow.desDateTimeHigh);
                    //alert(calendarpicker.getDate()+' -> '+calendarpicker.getDateEnd());
                    newRideRequest.depDateTimeWindow.depDateTimeLow = calendarpicker.getDate().getTime();
                    newRideRequest.depDateTimeWindow.depDateTimeHigh = calendarpicker.getDateEnd().getTime();

                    // Figure out route and price
                    newRideRequest.route             = "whatever";
                    newRideRequest.priceBound        = offermod.getPrice();
                    //alert("Type of priceBound: " + typeof newRideRequest.priceBound);

                    // Write down comments
                    newRideRequest.comments          = offermod.getComment();
                    // One-time ride request
                    newRideRequest.managedBy     = null;
                }
                var response1 ;
                var parsedData;
                /********* IDENTITY ********/
                if (usermode == DRIVERMODE)
                    if (username == 'AviB') {
                        user = 'agent1';
                        pass = 'agent1';
                    }
                    else {
                        user = 'agent6';
                        pass = 'agent6';
                    }
                else
                if (username == 'MaxS') {
                    user = 'agent2';
                    pass = 'agent2';
                }
                else {
                    user = 'agent3';
                    pass = 'agent3';
                }
                var agentID = user.substring(5, user.length);
                /********* IDENTITY ********/
                user = readCookie('username');
                pass = readCookie('password');
                /************** START OF POST REQUEST **************/
                function postRide()
                {
                    $.ajax

                    ({
                        type: "POST",
                        url: 'http://'+DimitrisRemote+'/rideRequests',
                        data: JSON.stringify(newRideRequest),
                        crossDomain: true,
                        beforeSend: function (xhr)
                        {
                            xhr.setRequestHeader('Authorization' , 'Basic ' + user +':'+ pass);
                        //xhr.setRequestHeader('Origin' , 'http://localhost:8080');
                        },
                        headers: {
                            "X-Requested-With": "XMLHttpRequest",
                            "Origin" : "http://localhost:8080"
                        //"Authorization" : "Basic " + btoa('agent1:agent1')
                        },
                        //xhrFields: { withCredentials: true },
                        //username : 'agent1',
                        //password : 'agent1',
                        dataType : "json" ,
                        async: false,
                        contentType:  //"application/x-www-form-urlencoded; charset=UTF-8", //for data1 which is actualnested strings
                        "application/json; charset=UTF-8",                                  //for a nested json object, not strings
                        success: function(data, textStatus, jqXHR) {

                            response1 = JSON.stringify(JSON.parse(jqXHR.response));
                            fokus.openride.mobclient.controller.modules.modulemanager.setView('activeofferUI');
                            fokus.openride.mobclient.controller.modules.modulemanager.setTabContent(1, 1);
                        },
                        error: function(jq , textStatus , errorThrown){
                            alert('state: ' + jq.readyState);
                            alert('status: ' + jq.status);
                            alert('response ' + jq.responseText)
                            alert('this error is: ' + errorThrown );
                        //fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, Something went wrong. Please try again later.');
                        }

                    })

                }
                getRideDetails();
                postRide();
            //alert("returned from post!! " + urlInParsedJson);
            

            }

            var offershowroutepickerlink = document.getElementById('offershowroutepickerlink');
            offershowroutepickerlink.href = "javascript:void(0);";
			
            offershowroutepickerlink.onclick = function(){
				
                var startlatlnstr = document.getElementById(offerstartdropdownid)[document.getElementById(offerstartdropdownid).selectedIndex].latln;
				
                var startseparatorindex = startlatlnstr.indexOf(',');
                var startlatstr = startlatlnstr.substr(0, startseparatorindex);
                var startlnstr = startlatlnstr.substr(startseparatorindex+1, startlatlnstr.length-startseparatorindex+1);
				
                var startlat = parseFloat(startlatstr);
                var startln = parseFloat(startlnstr);
				
                var dstlatlnstr = document.getElementById(offerdestdropdownid)[document.getElementById(offerdestdropdownid).selectedIndex].latln;
				
                var dstseparatorindex = dstlatlnstr.indexOf(',');
                var dstlatstr = dstlatlnstr.substr(0, dstseparatorindex);
                var dstlnstr = dstlatlnstr.substr(dstseparatorindex+1, dstlatlnstr.length-dstseparatorindex+1);
				
                var dstlat = parseFloat(dstlatstr);
                var dstln = parseFloat(dstlnstr);
				
                //stop changing screens and give user info, if start equals destination
                if(startlat==dstlat && startln==dstln){				                   
                    showOverlayDialog('Start and finish may not be identical, please select new!', '', 'OK', '', '', '');
                    return false;
                }

                srvconn.GET('/OpenRideServer-RS/resources/users/'+username+'/routes/new,'+startlat+','+startln+','+dstlat+','+dstln, false, function(routexml){
                    var routeFound = modulemanagermod.parsesimpleroute(routexml);
                    if(routeFound){
                        //modulemanagermod.setView('showofferrouteUI');
                        modulemanagermod.setFullScreenMapView('offerroutegmapscreencontainer');
                    }
                }, function(){
                    showOverlayDialog('The route could not be loaded! Please try again later.', '', 'OK', '', '', '');
                });
            }
			
            var searchroutepickerlink = document.getElementById('searchroutepickerlink');
            searchroutepickerlink.href = "javascript:void(0);";
			
            searchroutepickerlink.onclick = function(){
				
                var startlatlnstr = document.getElementById(searchstartdropdownid)[document.getElementById(searchstartdropdownid).selectedIndex].latln;
				
                var startseparatorindex = startlatlnstr.indexOf(',');
                var startlatstr = startlatlnstr.substr(0, startseparatorindex);
                var startlnstr = startlatlnstr.substr(startseparatorindex+1, startlatlnstr.length-startseparatorindex+1);
				
                var startlat = parseFloat(startlatstr);
                var startln = parseFloat(startlnstr);
				
                var dstlatlnstr = document.getElementById(searchdestdropdownid)[document.getElementById(searchdestdropdownid).selectedIndex].latln;
				
                var dstseparatorindex = dstlatlnstr.indexOf(',');
                var dstlatstr = dstlatlnstr.substr(0, dstseparatorindex);
                var dstlnstr = dstlatlnstr.substr(dstseparatorindex+1, dstlatlnstr.length-dstseparatorindex+1);
				
                var dstlat = parseFloat(dstlatstr);
                var dstln = parseFloat(dstlnstr);
				
                //stop changing screens and give user info, if start equals destination
                if(startlat==dstlat && startln==dstln){
                    showOverlayDialog('Start and finish may not be identical, please select new!', '', 'OK', '', '', '');
                    return false;
                }
					

                srvconn.GET('/OpenRideServer-RS/resources/users/'+username+'/routes/new,'+startlat+','+startln+','+dstlat+','+dstln, false, function(routexml){
                    var routeFound = modulemanagermod.parsesimpleroute(routexml);
                    if(routeFound){
                        modulemanagermod.setFullScreenMapView('searchroutegmapscreencontainer');
                    }
                //modulemanagermod.setView('showsearchrouteUI');
                }, function(){
                    showOverlayDialog('The route could not be loaded! Please try again later.', '', 'OK', '', '', '');
                });
            }
			
            var offerroutebackbtnlink = document.getElementById('offerroutebackbtnlink');
            offerroutebackbtnlink.href = "javascript:void(0);";
			
            offerroutebackbtnlink.onclick = function(){
                modulemanagermod.setView('newofferUI');
            }
			
            var searchroutebackbtnlink = document.getElementById('searchroutebackbtnlink');
            searchroutebackbtnlink.href = "javascript:void(0);";
			
            searchroutebackbtnlink.onclick = function(){
                modulemanagermod.setView('newsearchUI');
            }

            var offerstartdropdown = document.getElementById(offerstartdropdownid);

            offerstartdropdown.onchange = function(){
                if(offerstartdropdown.selectedIndex == 0){
                    var userlocation = nativemod.getUserLocation();
                    mapmod.insertRevGeocodedAddr(userlocation, offerstartselectcurrpos);
                }
                else if(offerstartdropdown.selectedIndex == 1){
                    modulemanagermod.setFullScreenMapView('offerstartgmapscreencontainer');
                }
                if(offerstartdropdown.selectedIndex != 1){
                    offermod.setStartLatLn(offerstartdropdown[offerstartdropdown.selectedIndex].latln);
                }
            }

            var offerdestdropdown = document.getElementById(offerdestdropdownid);

            offerdestdropdown.onchange = function(){
                if(offerdestdropdown.selectedIndex == 0){
                    var userlocation = nativemod.getUserLocation();
                    mapmod.insertRevGeocodedAddr(userlocation, offerdestselectcurrpos);
                }
                else if(offerdestdropdown.selectedIndex == 1){
                    modulemanagermod.setFullScreenMapView('offerdestgmapscreencontainer');
                }
                if(offerdestdropdown.selectedIndex != 1){
                    offermod.setDestLatLn(offerdestdropdown[offerdestdropdown.selectedIndex].latln);
                }
            }

            var searchstartdropdown = document.getElementById(searchstartdropdownid);

            searchstartdropdown.onchange = function(){
                if(searchstartdropdown.selectedIndex == 0){
                    var userlocation = nativemod.getUserLocation();
                    mapmod.insertRevGeocodedAddr(userlocation, searchstartselectcurrpos);
                }
                else if(searchstartdropdown.selectedIndex == 1){
                    modulemanagermod.setFullScreenMapView('searchstartgmapscreencontainer');
                }
                if(searchstartdropdown.selectedIndex != 1){
                    searchmod.setStartLatLn(searchstartdropdown[searchstartdropdown.selectedIndex].latln);
                }
            }

            var searchdestdropdown = document.getElementById(searchdestdropdownid);

            searchdestdropdown.onchange = function(){
                if(searchdestdropdown.selectedIndex == 0){
                    var userlocation = nativemod.getUserLocation();
                    mapmod.insertRevGeocodedAddr(userlocation, searchdestselectcurrpos);
                }
                else if(searchdestdropdown.selectedIndex == 1){
                    modulemanagermod.setFullScreenMapView('searchdestgmapscreencontainer');
                }
                if(searchdestdropdown.selectedIndex != 1){
                    searchmod.setDestLatLn(searchdestdropdown[searchdestdropdown.selectedIndex].latln);
                }
            }

            var newsearchdetaillink = document.getElementById('newsearchdetaillink');
            newsearchdetaillink.href = "javascript:void(0);";

            newsearchdetaillink.onclick = function(){
                modulemanagermod.setView('newsearchdetailsUI');
                return false;
            }

            var newSearchFromDdArrow = document.getElementById('newSearchFromDdArrow');

            if(newSearchFromDdArrow) {
                newSearchFromDdArrow.onclick = function() {
                    var adrInput = document.getElementById('newSearchFrom');
                    adrInput.focus();
                }
            }

            var newSearchDestDdArrow = document.getElementById('newSearchDestDdArrow');

            if(newSearchDestDdArrow) {
                newSearchDestDdArrow.onclick = function() {
                    var adrInput = document.getElementById('newSearchDest');
                    adrInput.focus();
                }
            }

            var newsearchsubmit = document.getElementById('newsearchsubmit');
            newsearchsubmit.href = "javascript:void(0);";

            newsearchsubmit.onclick = function(){

                var minute = 1000*60;

                if ((calendarpicker.getDate().getTime() + minute - new Date().getTime()) < 0) {
                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(null,'validateError',null,'The departure time is in the past.');
                    return;
                }
                if ((calendarpicker.getDateEnd().getTime() + minute - calendarpicker.getDate().getTime()) < 0) {
                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(null,'validateError',null,'The departure time range is invalid.');
                    return;
                }
                if (document.getElementById('searchstartcombo')[document.getElementById('searchstartcombo').selectedIndex].text == document.getElementById('searchendcombo')[document.getElementById('searchendcombo').selectedIndex].text){
                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(null,'validateError',null,'Please enter different addresses for start and finish.');
                    return;
                }

                //set start time
                searchmod.setStartTime(calendarpicker.getDate());

                //                var determiningLocation = 'Location...';
                //
                //                if ((document.getElementById(searchdestdropdownid)[document.getElementById(searchdestdropdownid).selectedIndex].text == determiningLocation) ||
                //                    (document.getElementById(searchstartdropdownid)[document.getElementById(searchstartdropdownid).selectedIndex].text == determiningLocation)) {
                //                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(null,'validateError',null,'Your location could not be determined.');
                //                    return;
                //                }


                //set start location
                //                var test = document.getElementById(searchstartdropdownid)[document.getElementById(searchstartdropdownid).selectedIndex]; // just for debugging...
                searchmod.setStartLatLn(document.getElementById(searchstartdropdownid)[document.getElementById(searchstartdropdownid).selectedIndex].latln);

                //set destination location
                searchmod.setDestLatLn(document.getElementById(searchdestdropdownid)[document.getElementById(searchdestdropdownid).selectedIndex].latln);
                searchmod.setSearchedSeatsNo(document.getElementById('searchseatsselect').selectedIndex + 1);

                searchmod.setStartAddr(document.getElementById(searchstartdropdownid)[document.getElementById(searchstartdropdownid).selectedIndex].text);

                searchmod.setDestAddr(document.getElementById(searchdestdropdownid)[document.getElementById(searchdestdropdownid).selectedIndex].text);

                //set time waitnig
                switch(document.getElementById('searchwaitimeselect').selectedIndex){
                    //                    switch(document.getElementById('maxwait').selectedIndex){

                    case 0:
                        searchmod.setMaxWaitingTime(10);
                        break;
                    case 1:
                        searchmod.setMaxWaitingTime(15);
                        break;
                    case 2:
                        searchmod.setMaxWaitingTime(20);
                        break;
                    case 3:
                        searchmod.setMaxWaitingTime(30);
                        break;
                    case 4:
                        searchmod.setMaxWaitingTime(45);
                        break;
                    case 5:
                        searchmod.setMaxWaitingTime(60);
                        break;
                    case 6:
                        searchmod.setMaxWaitingTime(120);
                        break;
                    case 7:
                        searchmod.setMaxWaitingTime(180);
                        break;
                    case 8:
                        searchmod.setMaxWaitingTime(240);
                        break;
                }
                //set comment
                //                searchmod.setComment(document.getElementById('searchcommentta').value);
                searchmod.setComment("No comment!");
                //(validate and) commit new offer to server

                //                var eventlistenerTHIS = this;
                //                var serviceType = modulemanagermod.getServiceType();
                //
                //                if ((searchmod.getStartLat() != searchmod.getDestLat()) || (searchmod.getStartLon() != searchmod.getDestLon())) {
                //                    if (serviceType == 'new') {
                //                    /*srvconn.POST('/OpenRideServer-RS/resources/users/'+username+'/rides/searches', false, searchmod.validateSearchRequest(), function(data) {
                //                            eventlistenerTHIS.ajaxsuccess = true;
                //                            if(eventlistenerTHIS.ajaxsuccess) {
                //                                showOverlayDialog('Your search was successfully saved.', '', 'OK', 'fokus.openride.mobclient.controller.modules.modulemanager.setTabContent(1, 1);', '', '');
                //                                slidingUITabListClick(document.getElementById('r'+data.PostSearchResponse.rideId));
                //                            }
                //                        }, function(x,s,e) {
                //                            fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Ihr neues Gesuch konnte leider nicht gespeichert werden.')
                //                        });*/
                //                    } else {/*
                //                        srvconn.PUT('/OpenRideServer-RS/resources/users/'+username+'/rides/searches/'+modulemanagermod.getRideId(), false, searchmod.validateSearchRequest(), function(data) {
                //                            eventlistenerTHIS.ajaxsuccess = true;
                //                            if(eventlistenerTHIS.ajaxsuccess) {
                //                                showOverlayDialog('Your search was successfully saved.', '', 'OK', 'fokus.openride.mobclient.controller.modules.modulemanager.setTabContent(1, 1);', '', '');
                //                                slidingUITabListClick(document.getElementById('r'+data.PostSearchResponse.rideId));
                //                            }
                //                        }, function(x,s,e) {
                //                            fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'Ihr geändertes Gesuch konnte leider nicht gespeichert werden.')
                //                        });*/
                //                }
                //                //                    var offerstartsel = document.getElementById(offerstartdropdownid);
                //                //                    if(offerstartsel.length > 2){
                //                //                        for(var k=2;k<offerstartsel.length;k++){
                //                //                            offerstartsel[k] = null;
                //                //                        }
                //                //                    }
                //                }else {
                //                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(null,'validateError',null,'Please enter different addresses for start and finish.');
                //                }

                var newRideRequest = {};

                function getRideDetails1()
                {
                    newRideRequest.potentialRidePlans         = [];
                    newRideRequest.potentiallyAgreedRidePlans = [];
                    newRideRequest.driverAgreedRidePlans      = [];
                    newRideRequest.agreedRidePlan             = "";
                    newRideRequest.invalidRidePlans           = [];
                    newRideRequest.user = username;

                    newRideRequest.index = 0;
                    newRideRequest.__v = 0;
                    newRideRequest._revision = 0;
                    newRideRequest._id = "";
        
                    newRideRequest.rideRecord           = ""; 		// string: link to the ride record associated with the ride request

                    if (readCookie('usermode') == 1)            newRideRequest.mode                 = "commuter";
                    else                                        newRideRequest.mode                 = "driver";

                    newRideRequest.currency             = "Euro";

                    newRideRequest.pets                 = "No"; //defs.SS_DEFS.STATIC_PREFERENCE_LINK_BASED_ON_TEXT_PETS     (myData.values.ridePreferences.pets);

                    if (profilemod.getPrefIsSmoker() == 'y') newRideRequest.smoking              = "Yes";
                    else                                     newRideRequest.smoking              = "No";
                    newRideRequest.rideQualityThreshold = "0";//"5"; //defs.SS_DEFS.STATIC_PREFERENCE_LINK_BASED_ON_TEXT_RQT      (myData.values.ridePreferences.rideQualityThreshold);
                    //newRideRequest.capacity          = defs.SS_DEFS.STATIC_PREFERENCE_LINK_BASED_ON_TEXT_CAPACITY($('#dropDownCapacityList').find(':selected').text());
                    newRideRequest.capacity             = "1";//document.getElementById('nrplacesselect').selectedIndex+1;//"2";

                    
                    /* Now deal with the rest*/
	 
                    newRideRequest.departureCity = document.getElementById('searchstartcombo')[document.getElementById('searchstartcombo').selectedIndex].text;
                    newRideRequest.destinationCity = document.getElementById('searchendcombo')[document.getElementById('searchendcombo').selectedIndex].text;

                    //                    var depCity = searchmod.getStartAddr().split(", ");
                    //                    var tempdepCity = depCity[depCity.length-2].split(" ");
                    //                    if (tempdepCity.length>1 && isNaN(tempdepCity[tempdepCity.length-2]) )
                    //                        newRideRequest.departureCity = tempdepCity[tempdepCity.length-2]+ " " +tempdepCity[tempdepCity.length-1];
                    //                    else if (tempdepCity.length > 1)
                    //                        newRideRequest.departureCity = tempdepCity[tempdepCity.length-2] + " " +tempdepCity[tempdepCity.length-1];
                    //                    else newRideRequest.departureCity = tempdepCity[tempdepCity.length-1];
                    //
                    //                    var desCity = searchmod.getDestAddr().split(", ");
                    //                    var tempdesCity = desCity[desCity.length-2].split(" ");
                    //                    if (tempdesCity.length>1 && isNaN(tempdesCity[tempdesCity.length-2]) )
                    //                        newRideRequest.destinationCity = tempdesCity[tempdesCity.length-2]+ " " +tempdesCity[tempdesCity.length-1];
                    //                    else if (tempdesCity.length > 1)
                    //                        newRideRequest.departureCity = tempdesCity[tempdesCity.length-2] + " " +tempdesCity[tempdesCity.length-1];
                    //                    else newRideRequest.destinationCity = tempdesCity[tempdesCity.length-1];
       
                    // Figure out datetime for departure based on the input
                    var tempDateLow1                      = searchmod.getStartTime();//'1/11/2013';
                    var tempTimeLow1                      = '18:00';
                    newRideRequest.depDateTimeWindow = {};
                    //newRideRequest.depDateTimeWindow.depDateTimeLow = tempDateLow1;//generateDateObject (tempDateLow1, tempTimeLow1);
                    //alert(newRideRequest.depDateTimeWindow.depDateTimeLow);
                    var tempDateHigh1                     = searchmod.getStartTime()+5000000;//'2/11/2013';
                    var tempTimeHigh1                     = '19:00';
                    //newRideRequest.depDateTimeWindow.depDateTimeHigh = tempDateHigh1;//generateDateObject (tempDateHigh1, tempTimeHigh1);

                    // Figure out datetime for destination based on the input
                    var tempDateLow                                      = searchmod.getStartTime()+5000000;//'1/11/2013';
                    var tempTimeLow                                      = '18:00';
                    newRideRequest.desDateTimeWindow = {};
                    newRideRequest.desDateTimeWindow.desDateTimeLow  = tempDateLow;//generateDateObject (tempDateLow, tempTimeLow);
                    //alert(newRideRequest.desDateTimeWindow.desDateTimeLow);
                    var tempDateHigh                                     = searchmod.getStartTime()+9000000;//'2/11/2013';
                    var tempTimeHigh                                     = '19:00';
                    newRideRequest.desDateTimeWindow.desDateTimeHigh = tempDateHigh;//generateDateObject (tempDateHigh, tempTimeHigh);
                    //
                    newRideRequest.depDateTimeWindow.depDateTimeLow = calendarpicker.getDate().getTime();
                    newRideRequest.depDateTimeWindow.depDateTimeHigh = calendarpicker.getDateEnd().getTime();
                    // Figure out route and price
                    newRideRequest.route             = "whatever";
                    newRideRequest.priceBound        = "20";//9";
                    //alert("Type of priceBound: " + typeof newRideRequest.priceBound);

                    // Write down comments
                    newRideRequest.comments          = searchmod.getComment();
                    ;
                    // One-time ride request
                    newRideRequest.managedBy     = null;
                }


                var response1 ;
                var parsedData;
                /********* IDENTITY ********/
                if (usermode == DRIVERMODE)
                    if (username == 'AviB') {
                        user = 'agent1';
                        pass = 'agent1';
                    }
                    else {
                        user = 'agent6';
                        pass = 'agent6';
                    }
                else
                if (username == 'MaxS') {
                    user = 'agent2';
                    pass = 'agent2';
                }
                else {
                    user = 'agent3';
                    pass = 'agent3';
                }
                var agentID = user.substring(5, user.length);
                user = readCookie('username');
                pass = readCookie('password');
                /********* IDENTITY ********/
                /************** START OF POST REQUEST **************/
                function postRide1()
                {
                    $.ajax

                    ({
                        type: "POST",
                        url: 'http://'+DimitrisRemote+'/rideRequests',
                        data: JSON.stringify(newRideRequest),
                        crossDomain: true,
                        beforeSend: function (xhr)
                        {
                            xhr.setRequestHeader('Authorization' , 'Basic ' + user +':'+ pass);
                        //xhr.setRequestHeader('Origin' , 'http://localhost:8080');
                        },
                        headers: {
                            "X-Requested-With": "XMLHttpRequest",
                            "Origin" : "http://localhost:8080"
                        //"Authorization" : "Basic " + btoa('agent1:agent1')
                        },
                        //xhrFields: { withCredentials: true },
                        //username : 'agent1',
                        //password : 'agent1',
                        dataType : "json" ,
                        async: false,
                        contentType:  //"application/x-www-form-urlencoded; charset=UTF-8", //for data1 which is actualnested strings
                        "application/json; charset=UTF-8",                                  //for a nested json object, not strings
                        success: function(data, textStatus, jqXHR) {
                            response1 = JSON.stringify(JSON.parse(jqXHR.response));
                            fokus.openride.mobclient.controller.modules.modulemanager.setView('activesearchUI');
                            fokus.openride.mobclient.controller.modules.modulemanager.setTabContent(1, 1);
                        },
                        error: function(jq , textStatus , errorThrown){
                            alert('state: ' + jq.readyState);
                            alert('status: ' + jq.status);
                            alert('response ' + jq.responseText)
                            alert('this error is: ' + errorThrown );
                        //fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, Something went wrong. Please try again later.');
                        }

                    })

                }
                getRideDetails1();
                postRide1();
            // alert("returned from post!! " + urlInParsedJson);
            }


            /*var offersavetempllink = document.getElementById('offersavetempllink');
            var offersavetemplimg = document.getElementById('offersavetemplimg');

            offersavetempllink.href = "javascript:void(0);";
            offersavetempllink.onclick = function(){
                if(!offertempl){
                    offersavetemplimg.src = '../img/checkactive.png';
                    offertempl = true;
                }else if(offertempl){
                    offersavetemplimg.src = '../img/checkinactive.png';
                    offertempl = false;
                }
            }*/

            /*var searchsavetempllink = document.getElementById('searchsavetempllink');
            var searchsavetemplimg = document.getElementById('searchsavetemplimg');

            searchsavetempllink.href = "javascript:void(0);";
            searchsavetempllink.onclick = function(){
                if(!searchtempl){
                    searchsavetemplimg.src = '../img/checkactive.png';
                    searchtempl = true;
                }else if(searchtempl){
                    searchsavetemplimg.src = '../img/checkinactive.png';
                    searchtempl = false;
                }
            }*/

            /*var offeractivelink = document.getElementById('offeractivelink');
            var offeractivateimg = document.getElementById('offeractivateimg');

            offeractivelink.href = "javascript:void(0);";
            offeractivelink.onclick = function(){
                if(!offeractive){
                    offeractivateimg.src = '../img/checkactive.png';
                    offeractive = true;
                }else if(offeractive){
                    offeractivateimg.src = '../img/checkinactive.png';
                    offeractive = false;
                }
            }*/

            /*var searchactivelink = document.getElementById('searchactivelink');
            var searchactivateimg = document.getElementById('searchactivateimg');

            searchactivelink.href = "javascript:void(0);";
            searchactivelink.onclick = function(){
                if(!searchactive){
                    searchactivateimg.src = '../img/checkactive.png';
                    searchactive = true;
                }else if(searchactive){
                    searchactivateimg.src = '../img/checkinactive.png';
                    searchactive = false;
                }
            }*/

            var resumebtnlink = document.getElementById('resumebtnlink');
            resumebtnlink.href  = "javascript:void(0);";

            resumebtnlink.onclick = function(){
                modulemanagermod.detailsClicked = true;
                modulemanagermod.setTabContent(1, 0);
            }

            var resumebtnlink2 = document.getElementById('resumebtnlink2');
            resumebtnlink2.href  = "javascript:void(0);";

            resumebtnlink2.onclick = function(){
                modulemanagermod.detailsClicked = true;
                modulemanagermod.setTabContent(1, 0);
            }

            /*var offerstartselectlink = document.getElementById('offerstartselectlink');
            offerstartselectlink.href = "javascript:void(0);";

            var offerstartdropd = document.getElementById('offerstartdropd');
            
            offerstartselectlink.onclick = function(){
                var clickevent=document.createEvent("MouseEvents");
                clickevent.initEvent("select", true, true);
                offerstartdropd.style.display = 'block';
                offerstartdropd.dispatchEvent(clickevent);
            }*/

            /* ------ configure full-screen gmap-related layout elements start ------ */
            
            //offer start
            var offerstartgmapaddressinput = document.getElementById('offerstartgmapaddressinput');
            offerstartgmapaddressinput.onchange = function(){
                mapmod.geocodeAddressFromInput('offerstartgmapaddressinput');
                mapmod.updateAddressInfo('offerstartgmapaddressinput');
            };
            var offerstartgmaplocateadressbtn = document.getElementById('offerstartgmaplocateadressbtn');
            offerstartgmaplocateadressbtn.onclick = function(){
                mapmod.geocodeAddressFromInput('offerstartgmapaddressinput');
                mapmod.updateAddressInfo('offerstartgmapaddressinput');
            };
            var offerstartgmapbackbtn = document.getElementById('offerstartgmapbackbtn');
            offerstartgmapbackbtn.onclick = function(){
                modulemanagermod.returnFromFullscreenMapView();
            };
            var offerstartgmapconfirmadressandbackbtn = document.getElementById('offerstartgmapconfirmadressandbackbtn');
            offerstartgmapconfirmadressandbackbtn.onclick = function(){
                modulemanagermod.detailsClicked = true;
                confirmMapAddr(offerstartdropdownid);
                offermod.setStartLat(mapmod.getCenterPosition().lat());
                offermod.setStartLon(mapmod.getCenterPosition().lng());
                modulemanagermod.returnFromFullscreenMapView();
            };
            var offerstartgmapzoominbtn = document.getElementById('offerstartgmapzoominbtn');
            offerstartgmapzoominbtn.onclick = function(){
                mapmod.zoomIn();
            };
            var offerstartgmapzoomoutbtn = document.getElementById('offerstartgmapzoomoutbtn');
            offerstartgmapzoomoutbtn.onclick = function(){
                mapmod.zoomOut();
            };
			
            //offer destintation
            var offerdestgmapaddressinput = document.getElementById('offerdestgmapaddressinput');
            offerdestgmapaddressinput.onchange = function(){
                mapmod.geocodeAddressFromInput('offerdestgmapaddressinput');
                mapmod.updateAddressInfo('offerdestgmapaddressinput');
            };
            var offerdestgmaplocateadressbtn = document.getElementById('offerdestgmaplocateadressbtn');
            offerdestgmaplocateadressbtn.onclick = function(){
                mapmod.geocodeAddressFromInput('offerdestgmapaddressinput');
                mapmod.updateAddressInfo('offerdestgmapaddressinput');
            };
            var offerdestgmapbackbtn = document.getElementById('offerdestgmapbackbtn');
            offerdestgmapbackbtn.onclick = function(){
                modulemanagermod.returnFromFullscreenMapView();
            };
            var offerdestgmapconfirmadressandbackbtn = document.getElementById('offerdestgmapconfirmadressandbackbtn');
            offerdestgmapconfirmadressandbackbtn.onclick = function(){
                modulemanagermod.detailsClicked = true;
                confirmMapAddr(offerdestdropdownid);
                offermod.setDestLat(mapmod.getCenterPosition().lat());
                offermod.setDestLon(mapmod.getCenterPosition().lng());
                modulemanagermod.returnFromFullscreenMapView();
            };
            var offerdestgmapzoominbtn = document.getElementById('offerdestgmapzoominbtn');
            offerdestgmapzoominbtn.onclick = function(){
                mapmod.zoomIn();
            };
            var offerdestgmapzoomoutbtn = document.getElementById('offerdestgmapzoomoutbtn');
            offerdestgmapzoomoutbtn.onclick = function(){
                mapmod.zoomOut();
            };
            
            //search start
            var searchstartgmapaddressinput = document.getElementById('searchstartgmapaddressinput');
            searchstartgmapaddressinput.onchange = function(){
                mapmod.geocodeAddressFromInput('searchstartgmapaddressinput');
                mapmod.updateAddressInfo('searchstartgmapaddressinput');
            };
            var searchstartgmaplocateadressbtn = document.getElementById('searchstartgmaplocateadressbtn');
            searchstartgmaplocateadressbtn.onclick = function(){
                mapmod.geocodeAddressFromInput('searchstartgmapaddressinput');
                mapmod.updateAddressInfo('searchstartgmapaddressinput');
            };
            var searchstartgmapbackbtn = document.getElementById('searchstartgmapbackbtn');
            searchstartgmapbackbtn.onclick = function(){
                modulemanagermod.returnFromFullscreenMapView();
            };
            var searchstartgmapconfirmadressandbackbtn = document.getElementById('searchstartgmapconfirmadressandbackbtn');
            searchstartgmapconfirmadressandbackbtn.onclick = function(){
                modulemanagermod.detailsClicked = true;
                confirmMapAddr(searchstartdropdownid);
                searchmod.setStartLat(mapmod.getCenterPosition().lat());
                searchmod.setStartLon(mapmod.getCenterPosition().lng());
                modulemanagermod.returnFromFullscreenMapView();
            };
            var searchstartgmapzoominbtn = document.getElementById('searchstartgmapzoominbtn');
            searchstartgmapzoominbtn.onclick = function(){
                mapmod.zoomIn();
            };
            var searchstartgmapzoomoutbtn = document.getElementById('searchstartgmapzoomoutbtn');
            searchstartgmapzoomoutbtn.onclick = function(){
                mapmod.zoomOut();
            };

            //search destination
            var searchdestgmapaddressinput = document.getElementById('searchdestgmapaddressinput');
            searchdestgmapaddressinput.onchange = function(){
                mapmod.geocodeAddressFromInput('searchdestgmapaddressinput');
                mapmod.updateAddressInfo('searchdestgmapaddressinput');
            };
            var searchdestgmaplocateadressbtn = document.getElementById('searchdestgmaplocateadressbtn');
            searchdestgmaplocateadressbtn.onclick = function(){
                mapmod.geocodeAddressFromInput('searchdestgmapaddressinput');
                mapmod.updateAddressInfo('searchdestgmapaddressinput');
            };
            var searchdestgmapbackbtn = document.getElementById('searchdestgmapbackbtn');
            searchdestgmapbackbtn.onclick = function(){
                modulemanagermod.returnFromFullscreenMapView();
            };
            var searchdestgmapconfirmadressandbackbtn = document.getElementById('searchdestgmapconfirmadressandbackbtn');
            searchdestgmapconfirmadressandbackbtn.onclick = function(){
                modulemanagermod.detailsClicked = true;
                confirmMapAddr(searchdestdropdownid);
                searchmod.setDestLat(mapmod.getCenterPosition().lat());
                searchmod.setDestLon(mapmod.getCenterPosition().lng());
                modulemanagermod.returnFromFullscreenMapView();
            };
            var searchdestgmapzoominbtn = document.getElementById('searchdestgmapzoominbtn');
            searchdestgmapzoominbtn.onclick = function(){
                mapmod.zoomIn();
            };
            var searchdestgmapzoomoutbtn = document.getElementById('searchdestgmapzoomoutbtn');
            searchdestgmapzoomoutbtn.onclick = function(){
                mapmod.zoomOut();
            };
            
            //favorites
            var favoritesgmapaddressinput = document.getElementById('favoritesgmapaddressinput');
            favoritesgmapaddressinput.onchange = function(){
                mapmod.geocodeAddressFromInput('favoritesgmapaddressinput');
                mapmod.updateAddressInfo('favoritesgmapaddressinput');
            };
            var favoritesgmaplocateadressbtn = document.getElementById('favoritesgmaplocateadressbtn');
            favoritesgmaplocateadressbtn.onclick = function(){
                mapmod.geocodeAddressFromInput('favoritesgmapaddressinput');
                mapmod.updateAddressInfo('favoritesgmapaddressinput');
            };
            var favoritesgmapbackbtn = document.getElementById('favoritesgmapbackbtn');
            favoritesgmapbackbtn.onclick = function(){
                modulemanagermod.returnFromFullscreenMapView();
                modulemanagermod.setTabContent(3, 0);
            };
            var favoritesgmapconfirmadressandbackbtn = document.getElementById('favoritesgmapconfirmadressandbackbtn');
            favoritesgmapconfirmadressandbackbtn.onclick = function(){
                var coordstr = mapmod.getCenterPosition().lat() + ',' + mapmod.getCenterPosition().lng();
                favmod.setGeoCoordStr(coordstr);
                showOverlayDialog('Please enter a name for the favorite:', '<input id=\'favnameinput\' type=\'text\' style=\'width: 97.5%; background: url(../img/favstar.png) no-repeat center right\' />', 'Save', 'return fokus.openride.mobclient.controller.modules.uievents.addFavFromFullscreenMap();', 'Cancel', '');
            };
            var favoritesgmapzoominbtn = document.getElementById('favoritesgmapzoominbtn');
            favoritesgmapzoominbtn.onclick = function(){
                mapmod.zoomIn();
            };
            var favoritesgmapzoomoutbtn = document.getElementById('favoritesgmapzoomoutbtn');
            favoritesgmapzoomoutbtn.onclick = function(){
                mapmod.zoomOut();
            };
            
            //simple offer route view
            var offerroutegmapbackbtn = document.getElementById('offerroutegmapbackbtn');
            offerroutegmapbackbtn.onclick = function(){
                modulemanagermod.returnFromFullscreenMapView();
            };
            /*var offerroutegmapaddptbtn = document.getElementById('offerroutegmapaddptbtn');
            offerroutegmapaddptbtn.onclick = function(){
                mapmod.addCorrectionPoint();
            };*/
            var offerroutegmapzoominbtn = document.getElementById('offerroutegmapzoominbtn');
            offerroutegmapzoominbtn.onclick = function(){
                mapmod.zoomIn();
            };
            var offerroutegmapzoomoutbtn = document.getElementById('offerroutegmapzoomoutbtn');
            offerroutegmapzoomoutbtn.onclick = function(){
                mapmod.zoomOut();
            };
            
            //simple search route view
            var searchroutegmapbackbtn = document.getElementById('searchroutegmapbackbtn');
            searchroutegmapbackbtn.onclick = function(){
                modulemanagermod.returnFromFullscreenMapView();
            };
            var searchroutegmapzoominbtn = document.getElementById('searchroutegmapzoominbtn');
            searchroutegmapzoominbtn.onclick = function(){
                mapmod.zoomIn();
            };
            var searchroutegmapzoomoutbtn = document.getElementById('searchroutegmapzoomoutbtn');
            searchroutegmapzoomoutbtn.onclick = function(){
                mapmod.zoomOut();
            };
            
            //route with viapoints view
            var viaptroutegmapbackbtn = document.getElementById('viaptroutegmapbackbtn');
            viaptroutegmapbackbtn.onclick = function(){
                mapmod.resetRiderMarkers();
                modulemanagermod.returnFromFullscreenMapView();
            };
            var viaptroutegmapzoominbtn = document.getElementById('viaptroutegmapzoominbtn');
            viaptroutegmapzoominbtn.onclick = function(){
                mapmod.zoomIn();
            };
            var viaptroutegmapzoomoutbtn = document.getElementById('viaptroutegmapzoomoutbtn');
            viaptroutegmapzoomoutbtn.onclick = function(){
                mapmod.zoomOut();
            };
            
            /* ------ configure full-screen gmap-related layout elements end ------ */
            
            
            //old - to be removed after testing new fullscreen version
            /* ------ configure map-related layout elements ------ */

            var offerstartaddrinput = document.getElementById('offerstartaddrinput');

            offerstartaddrinput.onchange = function(){
                mapmod.geocodeAddressFromInput('offerstartaddrinput');
                mapmod.updateAddressInfo('offerstartaddrinput');
            };

            var offerdestaddrinput = document.getElementById('offerdestaddrinput');

            offerdestaddrinput.onchange = function(){
                mapmod.geocodeAddressFromInput('offerdestaddrinput');
                mapmod.updateAddressInfo('offerdestaddrinput');
            };

            var searchstartaddrinput = document.getElementById('searchstartaddrinput');

            searchstartaddrinput.onchange = function(){
                mapmod.geocodeAddressFromInput('searchstartaddrinput');
                mapmod.updateAddressInfo('searchstartaddrinput');
            };

            var searchdestaddrinput = document.getElementById('searchdestaddrinput');

            searchdestaddrinput.onchange = function(){
                mapmod.geocodeAddressFromInput('searchdestaddrinput');
                mapmod.updateAddressInfo('searchdestaddrinput');
            };

            var offerstartconfirm = document.getElementById('offerstartconfirm');
            offerstartconfirm.href = "javascript:void(0);";

            offerstartconfirm.onclick = function(){
                confirmMapAddr(offerstartdropdownid);
                offermod.setStartLat(mapmod.getCenterPosition().lat());
                offermod.setStartLon(mapmod.getCenterPosition().lng());
            };

            var offerdestconfirm = document.getElementById('offerdestconfirm');
            offerdestconfirm.href = "javascript:void(0);";

            offerdestconfirm.onclick = function(){
                confirmMapAddr(offerdestdropdownid);
                offermod.setDestLat(mapmod.getCenterPosition().lat());
                offermod.setDestLon(mapmod.getCenterPosition().lng());
            };

            var searchstartconfirm = document.getElementById('searchstartconfirm');
            searchstartconfirm.href = "javascript:void(0);";

            searchstartconfirm.onclick = function(){
                confirmMapAddr(searchstartdropdownid);
            };

            var searchdestconfirm = document.getElementById('searchdestconfirm');
            searchdestconfirm.href = "javascript:void(0);";

            searchdestconfirm.onclick = function(){
                confirmMapAddr(searchdestdropdownid);
            };

            var newfavoriteconfirm = document.getElementById('newfavoriteconfirm');
            newfavoriteconfirm.href = "javascript:void(0);";

            newfavoriteconfirm.onclick = function(){
                var coordstr = mapmod.getCenterPosition().lat() + ',' + mapmod.getCenterPosition().lng();
                favmod.setGeoCoordStr(coordstr);
                showOverlayDialog('Please enter a name for the favorite:', '<input id=\'favnameinput\' type=\'text\' style=\'width: 97.5%; background: url(../img/favstar.png) no-repeat center right\' />', 'Favoriten anlegen', 'fokus.openride.mobclient.controller.modules.uievents.addFav();', 'Cancel', '');
            };

            var offerstartpickerlink = document.getElementById('offerstartpickerlink');
            offerstartpickerlink.href = "javascript:void(0);";

            offerstartpickerlink.onclick = function(){
                //modulemanagermod.setView('offerstartpickerUI');
                modulemanagermod.setFullScreenMapView('offerstartgmapscreencontainer');
                var index = document.getElementById(offerstartdropdownid).selectedIndex;
                if(index > 1){
                    var latlnstr = document.getElementById(offerstartdropdownid)[document.getElementById(offerstartdropdownid).selectedIndex].latln;
                    var Lat = parseFloat(latlnstr.substr(0, latlnstr.indexOf(',')));
                    var Ln = parseFloat(latlnstr.substr(latlnstr.indexOf(',')+1, latlnstr.length-(latlnstr.indexOf(',')+1)));
                    var dropDownSelectedLocation = new google.maps.LatLng(Lat, Ln);
                    mapmod.setMapToLocation(dropDownSelectedLocation);
                }
            };

            var offerdestpickerlink = document.getElementById('offerdestpickerlink');
            offerdestpickerlink.href = "javascript:void(0);";

            offerdestpickerlink.onclick = function(){
                //modulemanagermod.setView('offerdestpickerUI');
                modulemanagermod.setFullScreenMapView('offerdestgmapscreencontainer');
                var index = document.getElementById(offerdestdropdownid).selectedIndex;
                if(index > 1){
                    var latlnstr = document.getElementById(offerdestdropdownid)[document.getElementById(offerdestdropdownid).selectedIndex].latln;
                    var Lat = parseFloat(latlnstr.substr(0, latlnstr.indexOf(',')));
                    var Ln = parseFloat(latlnstr.substr(latlnstr.indexOf(',')+1, latlnstr.length-(latlnstr.indexOf(',')+1)));
                    var dropDownSelectedLocation = new google.maps.LatLng(Lat, Ln);
                    mapmod.setMapToLocation(dropDownSelectedLocation);
                }
            };

            var searchstartpickerlink = document.getElementById('searchstartpickerlink');
            searchstartpickerlink.href = "javascript:void(0);";

            searchstartpickerlink.onclick = function(){
                //modulemanagermod.setView('searchstartpickerUI');
                modulemanagermod.setFullScreenMapView('searchstartgmapscreencontainer');
                var index = document.getElementById(searchstartdropdownid).selectedIndex;
                if(index > 1){
                    var latlnstr = document.getElementById(searchstartdropdownid)[document.getElementById(searchstartdropdownid).selectedIndex].latln;
                    var Lat = parseFloat(latlnstr.substr(0, latlnstr.indexOf(',')));
                    var Ln = parseFloat(latlnstr.substr(latlnstr.indexOf(',')+1, latlnstr.length-(latlnstr.indexOf(',')+1)));
                    var dropDownSelectedLocation = new google.maps.LatLng(Lat, Ln);
                    mapmod.setMapToLocation(dropDownSelectedLocation);
                }
            };

            var searchdestpickerlink = document.getElementById('searchdestpickerlink');
            searchdestpickerlink.href = "javascript:void(0);";

            searchdestpickerlink.onclick = function(){
                //modulemanagermod.setView('searchdestpickerUI');
                modulemanagermod.setFullScreenMapView('searchdestgmapscreencontainer');
                var index = document.getElementById(searchdestdropdownid).selectedIndex;
                if(index > 1){
                    var latlnstr = document.getElementById(searchdestdropdownid)[document.getElementById(searchdestdropdownid).selectedIndex].latln;
                    var Lat = parseFloat(latlnstr.substr(0, latlnstr.indexOf(',')));
                    var Ln = parseFloat(latlnstr.substr(latlnstr.indexOf(',')+1, latlnstr.length-(latlnstr.indexOf(',')+1)));
                    var dropDownSelectedLocation = new google.maps.LatLng(Lat, Ln);
                    mapmod.setMapToLocation(dropDownSelectedLocation);
                }
            };


            /* ------ configure tab-related layout elements ------ */

            var tab01elem = document.getElementById('tab01link');



            tab01elem.href = "javascript:void(0);";

            tab01elem.onclick = function(){
                modulemanagermod.setTabContent(0, 0);
            };

            var tab02elem = document.getElementById('tab02link');
            tab02elem.href = "javascript:void(0);";

            tab02elem.onclick = function(){
                fokus.openride.mobclient.controller.modules.uievents.timerStart();
                calendarpicker.reset();
                refreshSimpleCalendarPickerLabels(dateLabels, timeLabels);
                refreshSimpleCalendarPickerLabels(dateLabels, timeLabelsEnd);
                refreshSimpleCalendarPickerLabels(searchdateLabels, searchtimeLabels);
                refreshSimpleCalendarPickerLabels(searchdateLabels, searchtimeLabelsEnd);

                // delete addresses used for modifying an offer/search
                modulemanagermod.deleteModAdrFromBox(offerstartdropdownid);
                modulemanagermod.deleteModAdrFromBox(offerdestdropdownid);
                modulemanagermod.deleteModAdrFromBox(searchstartdropdownid);
                modulemanagermod.deleteModAdrFromBox(searchdestdropdownid);

                modulemanagermod.setServiceType('new');
                modulemanagermod.setTabContent(1, 0);
            };

            var tab03elem = document.getElementById('tab03link');
            tab03elem.href = "javascript:void(0);";

            tab03elem.onclick = function(){
                modulemanagermod.setTabContent(2, 0);
            };

            var tab04elem = document.getElementById('tab04link');
            tab04elem.href = "javascript:void(0);";

            tab04elem.onclick = function(){
                modulemanagermod.setTabContent(3, 0);
            };

            /*var tab05elem = document.getElementById('tab05link');
            tab05elem.href = "javascript:void(0);";

            tab05elem.onclick = function(){
                fokus.openride.mobclient.controller.modules.uievents.unhideAllTabs();
                fokus.openride.mobclient.controller.modules.uievents.hideUnusedTabs(new Array("tabimg12","tabimg13","tabimg14"));
                modulemanagermod.setTabContent(4, 0);
            };*/

            var tab11elem = document.getElementById('tab11link');
            tab11elem.href = "javascript:void(0);";

            tab11elem.onclick = function(){
                fokus.openride.mobclient.controller.modules.uievents.timerStart();
                calendarpicker.reset();
                refreshSimpleCalendarPickerLabels(dateLabels, timeLabels);
                refreshSimpleCalendarPickerLabels(dateLabels, timeLabelsEnd);
                refreshSimpleCalendarPickerLabels(searchdateLabels, searchtimeLabels);
                refreshSimpleCalendarPickerLabels(searchdateLabels, searchtimeLabelsEnd);

                // delete addresses used for modifying an offer/search
                modulemanagermod.deleteModAdrFromBox(offerstartdropdownid);
                modulemanagermod.deleteModAdrFromBox(offerdestdropdownid);
                modulemanagermod.deleteModAdrFromBox(searchstartdropdownid);
                modulemanagermod.deleteModAdrFromBox(searchdestdropdownid);

                modulemanagermod.setServiceType('new');
                modulemanagermod.setTabContent(modulemanagermod.currentactivenodeindex, 0);
            };

            var tab12elem = document.getElementById('tab12link');
            tab12elem.href = "javascript:void(0);";

            tab12elem.onclick = function(){
                modulemanagermod.setTabContent(modulemanagermod.currentactivenodeindex, 1);
            };

            var tab13elem = document.getElementById('tab13link');
            tab13elem.href = "javascript:void(0);";

            tab13elem.onclick = function(){
                modulemanagermod.setTabContent(modulemanagermod.currentactivenodeindex, 2);
            };

            var tab14elem = document.getElementById('tab14link');
            tab14elem.href = "javascript:void(0);";

            tab14elem.onclick = function(){
                modulemanagermod.setTabContent(modulemanagermod.currentactivenodeindex, 3);
            };

            /* ------ configure home layout elements ------ */

            var usermodelink = document.getElementById('usermodelink');
            usermodelink.href = "javascript:void(0);";

            usermodelink.onclick = function(){
                var returnedmode = modulemanagermod.changemode();
                if(returnedmode == 0){
                    calendarpicker.reset();
                    calendarpickerEnd.reset();
                    refreshSimpleCalendarPickerLabels(dateLabels, timeLabels);
                    refreshSimpleCalendarPickerLabels(dateLabels, timeLabelsEnd);


                    setLabelFocus(dateLabels, daylabel);
                    setLabelFocus(timeLabels, minutelabel);
                }
                else if(returnedmode == 1){
                    calendarpicker.reset();
                    refreshSimpleCalendarPickerLabels(searchdateLabels, searchtimeLabels);
                    refreshSimpleCalendarPickerLabels(searchdateLabels, searchtimeLabelsEnd);
                    setLabelFocus(searchdateLabels, searchdaylabel);
                    setLabelFocus(searchtimeLabels, searchminutelabel);
                }
            };

            /*var fastratelink = document.getElementById('fastratelink');
            fastratelink.href = "javascript:void(0);";

            fastratelink.onclick = function(){
                modulemanagermod.setTabContent(2, 0);
            };

            var fastpaymentlink = document.getElementById('fastpaymentlink');
            fastpaymentlink.href = "javascript:void(0);";

            fastpaymentlink.onclick = function(){
                modulemanagermod.setTabContent(4, 0);
            };*/

            var logoutlink = document.getElementById('logoutlink');
            logoutlink.href = "javascript:void(0);";

            logoutlink.onclick = function(){
                srvconn.PUTaction('/OpenRideServer-RS/resources/configuration/signoff', false);
                window.location.reload();
            };

        },

        //will be replaced by addFavFromFullscreenMap()
        addFav : function(){
            var inputaddr = document.getElementById('newfavoriteaddrinput').value;
            favmod.setAddress(inputaddr);

            var inputname = document.getElementById('favnameinput').value;
            favmod.setDisplayName(inputname);

            var coords = mapmod.getCenterPosition();
            favmod.setGeoCoords(coords.lat(), coords.lng());

            srvconn.POST('/OpenRideServer-RS/resources/users/'+username+'/favoritepoints', false, favmod.getFavPt(), function() {
                fokus.openride.mobclient.controller.modules.modulemanager.returnFromFullscreenMapView();
                showOverlayDialog('New favorite location successfully saved!', '', 'OK', 'fokus.openride.mobclient.controller.modules.modulemanager.setView(\'favlistUI\');', '', '')
            }, function(x,s,e) {
                fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'A place with this name already exists.')
            } );
        },
        
        addFavFromFullscreenMap : function(){
            var inputaddr = document.getElementById('favoritesgmapaddressinput').value;
            favmod.setAddress(inputaddr);

            var inputname = document.getElementById('favnameinput').value.search(/^.{1,18}$/);
            if(inputname != -1) {
                inputname = document.getElementById('favnameinput').value;
                favmod.setDisplayName(inputname);

                var coords = mapmod.getCenterPosition();
                favmod.setGeoCoords(coords.lat(), coords.lng());

                srvconn.POST('/OpenRideServer-RS/resources/users/'+username+'/favoritepoints', false, favmod.getFavPt(), function() {
                    fokus.openride.mobclient.controller.modules.modulemanager.returnFromFullscreenMapView();
                    fokus.openride.mobclient.controller.modules.modulemanager.setTabContent(3, 1);
                    showOverlayDialog('New favorite location saved successfully!', '', 'OK', '', '', '')
                }, function(x,s,e) {
                    fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(x,s,e,'A place with this name already exists.')
                    return false;
                } );
            } else {
                showOverlayDialog('The name of the bookmark can be up to 18 characters long.', '', 'OK', '', '', '');
                return false;
            }
        },

        // returns true if start/dest address are different
        validateDifferentAdr : function(offermod){
            var result = false;

            if ((offermod.getStartLat != offermodget.DestLat) || (offermod.getStartLon != offermod.getDestLon)) {
                result = true;
            }

            return result;
        }
    };
}();

var favs = new Array("Kaiserin Augusta Allee 31, Berlin","New York","Helmholtzstra�?e 9, Berlin");

function bindAutoSuggestEvents()
{
    //Find all of the INPUT tags
    var tags = document.getElementsByName('adrInput');
    for (i in tags)
    {
        var tag = tags[i];
        //If it's a text tag, attach an AutoSuggest object.
        if(tag.type && tag.type.toLowerCase() == "text")
        {
            new AutoSuggest(tag,favs);
        }
    }
}

function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}

function stars(category , riderId)
{
    //alert(category+" -"+riderId);
    var tmpID = "" + riderId + category;
    var ans =
    /*'     <img src="../../OpenRideWeb/img/rating_off.gif" id="1' + tmpID +'" onClick="submit(1,' + riderId + ','+category+')"/>'
                    + '    <img src="../../OpenRideWeb/img/rating_off.gif" id="2' + tmpID +'" onClick="submit(2' + riderId + ','+category+')"/>'
                    + '    <img src="../../OpenRideWeb/img/rating_off.gif" id="3' + tmpID +'" onClick="submit(3' + riderId + ','+category+')"/>'
                    + '    <img src="../../OpenRideWeb/img/rating_off.gif" id="4' + tmpID +'" onClick="submit(4' + riderId + ','+category+')"/>'
                    + '    <img src="../../OpenRideWeb/img/rating_off.gif" id="5' + tmpID +'" onClick="submit(5' + riderId + ','+category+')"/><br><br>';*/
    '     <img src="../../OpenRideWeb/img/rating_off.gif" id="1' + tmpID +'" onMouseOver="mouseOver(' + 1 + tmpID + ')" onMouseOut="mouseOut(' + 1 + tmpID + ')" onClick="fix(' + 1 + tmpID + ')"/>'
    + '    <img src="../../OpenRideWeb/img/rating_off.gif" id="2' + tmpID +'" onMouseOver="mouseOver(' + 2 + tmpID + ')" onMouseOut="mouseOut(' + 2 + tmpID + ')" onClick="fix(' + 2 + tmpID + ')"/>'
    + '    <img src="../../OpenRideWeb/img/rating_off.gif" id="3' + tmpID +'" onMouseOver="mouseOver(' + 3 + tmpID + ')" onMouseOut="mouseOut(' + 3 + tmpID + ')" onClick="fix(' + 3 + tmpID + ')"/>'
    + '    <img src="../../OpenRideWeb/img/rating_off.gif" id="4' + tmpID +'" onMouseOver="mouseOver(' + 4 + tmpID + ')" onMouseOut="mouseOut(' + 4 + tmpID + ')" onClick="fix(' + 4 + tmpID + ')"/>'
    + '    <img src="../../OpenRideWeb/img/rating_off.gif" id="5' + tmpID +'" onMouseOver="mouseOver(' + 5 + tmpID + ')" onMouseOut="mouseOut(' + 5 + tmpID + ')" onClick="fix(' + 5 + tmpID + ')"/><br><br>';
    //alert(ans);
    return ans;
}
function mouseOver(id1)
{
    //alert(id1);
    var id = id1.toString();
    var personal = parseInt(id.charAt(0));
    var riderId = id.substring(1, id.length-1); //charAt(1);
    var riderIdInt = parseInt(riderId);
    var category = id.charAt(id.length-1);
    if (submitted_rides[riderIdInt][category] == -1)
    {
        for (var i=1; i<personal+1; i++)
        {
            //alert(i + riderId + category);
            if (document.getElementById(i + riderId + category) != null)
                document.getElementById(i + riderId + category).src = "../../OpenRideWeb/img/rating_on.gif";
        }
    }
}
function mouseOut(id1)
{
    //alert(id1);
    var id = id1.toString();
    var personal = parseInt(id.charAt(0));
    var riderId = id.substring(1, id.length-1);//id.charAt(1);
    var riderIdInt = parseInt(riderId);
    var category = id.charAt(id.length-1);
    if (submitted_rides[riderIdInt][category] == -1)
    {
        for (var i=1; i<personal+1; i++)
        {
            //alert(i + riderId + category);
            if (document.getElementById(i + riderId + category) != null)
                document.getElementById(i + riderId + category).src = "../../OpenRideWeb/img/rating_off.gif";
        }
    }
}
function fix(id1)
{
    //alert(id1);
    var id = id1.toString();
    var personal = parseInt(id.charAt(0));
    var riderId = id.substring(1, id.length-1);//id.charAt(1);
    var category = id.charAt(id.length-1);
    for (var i=1; i<6; i++){
        //alert(i + riderId + category);
        document.getElementById(i + riderId + category).src = "../../OpenRideWeb/img/rating_off.gif";
    }
    for (var i=1; i<personal+1; i++)
        document.getElementById(i + riderId + category).src = "../../OpenRideWeb/img/rating_on.gif";
            
    riderId = parseInt(riderId);
    //alert("glob " + riderId +" ["+ submitted_rides[riderId] + "] " + category);
    submitted_rides[riderId][category] = personal;
//    if ($.inArray(-1, submitted_rides[riderId]) == -1)
//    {
//        submit(submitted_rides[riderId] , riderId);
//        submitted_rides[riderId]= [-1,-1,-1,-1,-1];
//    }
}

function submit (rate_array , riderId )
{
    var rideIdInt = parseInt(riderId);
    var agent1 = 1 + rideIdInt;
    var agent = 'agent' + agent1;
    user = readCookie('username');
    pass = readCookie('password');
    //alert('submit - '+JSON.stringify(rate_array)+' - '+rideIdInt)
    $.ajax
    ({
        type: "GET",
        url: "http://"+DimitrisRemote+ "/ridePlans/"+rideIdInt,
        data: "",
        crossDomain: true,
        username : user,
        password : pass,
        
        beforeSend: function (xhr)
        {
            xhr.setRequestHeader('Authorization' , 'Basic ' + user+':'+pass);
            xhr.withCredentials = true;
        },
        headers:
        {
            "X-Requested-With": "XMLHttpRequest",
            "Origin" : "http://localhost:8080"
        },
        //dataType : "json" ,
        async: false,

        success: function(data , textStatus) {
            //alert('success rideplan call');
            var obj = JSON.parse(data);
            var participants = "driver:" + obj["driver"] + "commuters:" + obj["commuters"];
            //if (usermode == DRIVERMODE) participants = obj.commuters;
            //else participants = obj.driver + " " + obj.commuters;
            var mode = 'driver';
            if (usermode == RIDERMODE) mode = 'commuter';
            //alert(participants);
            var subjects='{';
            var index = participants.indexOf("commuters");
            var ind=0;
            var subparticipants = participants.substring(index+10);
            if (mode == 'commuter')
                subjects = subjects +
                '"subject_'+ind+'":{"subject_uri" : "smartshare/' + participants.substring(7,index) + '",'
                +'"quantifier_uri" : "driver"}';
            var array = subparticipants.split(",");
            
            for (var i=0; i<array.length;i++)
            {
                if (subjects != '{' && user != array[i]) subjects = subjects + ',';
                if (user != array[i]){
                    subjects = subjects +
                    '"subject_'+ind+'":{"subject_uri" : "smartshare/' + array[i] + '",'
                    +'"quantifier_uri" : "commuter"}';
                    ind++;
                }
            }
            //alert(JSON.stringify(rate_array));
            subjects = subjects + '},';
            var json2 = '{'
            +'"application_uri" : "smartshare",'
            +'"event_uri" : "ride/' + rideIdInt + '",'
            +'"subjects": '
            + subjects
            +'"authors": {"author_0":{'
            +'"author_uri" : "' + user + '",'
            +'"quantifier_uri" : "'+ mode + '"'
            //+'"author_uri" : "' + user + '",'
            //+'"quantifier_uri" : "' + mode +'"'
            +'}},'
            +'"feedback": {'
            +'"StarRating": ' + rate_array[0] + ','//overall
            //+'"ride_Price": '+ rate_array[1] + ','//price
            //+'"ride_Route": 4,'
            //+'"ride_Car/Environment": 2,'
            +'"OnTime": ' + rate_array[2] + ','//reliability
            // +'"Communication": '+rate_array[3] + ',' //Communication
            +'"Friendly": ' + rate_array[4] //friendliness
            //+'"individual_Reliability": '+ rate_array[2] + ','
            //+'"individual_Communication": '+ rate_array[3] + ','
            //+'"individual_DrivingSkill": 3,'
            //+'"individual_Friendliness": '+ rate_array[4] + ','
            //+'"outsideFactors_Traffic": 2,'
            //+'"outsideFactors_Weather": 2'
            //+'"free_text": "'+ rate_array[5] + '",'
            //+'"serviceURI": "http://ridesharepplication"'
            +'}'
            +'}';
            //alert(json2);
            $.ajax
            ({
                type: "POST",
                url: "http://"+DimitrisRemote+"/application/1/feedback", //"http://"+DimitrisRemote+"/application/1/feedback" ,
                data: json2,
                crossDomain: true,
                username : user,
                password : pass,
                contentType:  //"application/x-www-form-urlencoded; charset=UTF-8", //for data1 which is actualnested strings
                "application/json; charset=utf-8",
                beforeSend: function (xhr)
                {
                    xhr.setRequestHeader('Authorization' , 'Basic ' + user+':'+pass);
                    xhr.withCredentials = true;
                },
                headers:
                {
                    "X-Requested-With": 'XMLHttpRequest'
                //"Origin" : "http://localhost:8080"
                },
                async: false,
                success: function(data , textStatus) {
                    //alert('submit success');
                    fokus.openride.mobclient.controller.modules.modulemanager.setView('openratingsUI');
                },
                error: function(jq , textStatus , errorThrown){
                    alert('state: ' + jq.readyState);
                    alert('status: ' + jq.status);
                    alert('response ' + jq.responseText)
                    alert('this error is: ' + errorThrown );
                //fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, Something went wrong. Please try again later.');
                }
            });
        },
        error: function(jq , textStatus , errorThrown){
            alert('state: ' + jq.readyState);
            alert('status: ' + jq.status);
            alert('response ' + jq.responseText)
            alert('this error is: ' + errorThrown );
        //fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,textStatus,errorThrown,'Unfortunately, Something went wrong. Please try again later.');
        }

    })


}

function comment(id1)
{
    //alert(id1);
    var id = id1.toString();
    var personal = parseInt(id.substring(0,id.indexOf("-")));
    var riderId = id.substring(id.indexOf("-")+1,id.length-1);//charAt(1);
    var category = id.charAt(id.length-1);
    //alert("comment - riderId "+riderId);

    var x;
    var comment;
    //comment=prompt("Please enter your name","Ride Comment");
    //while (comment==null){comment=prompt("Please enter your name","Ride Comment");}
    //alert('personal '+personal + ' riderId '+riderId);
    //alert(JSON.stringify(submitted_rides[riderId]));
    //submitted_rides[riderId][category] = comment;
    if ($.inArray(-1, submitted_rides[riderId]) == -1)
    {
        //alert('ff');
        submit(submitted_rides[riderId] , personal);
        submitted_rides[riderId]= [-1,0,-1,0,-1];
    }
//alert('finish comment');
}
function rideDelete(num)
{
    user = readCookie('username');
    pass = readCookie('password');
    var revision = 0;
    var prp = JSON.parse(rideRequests[num-rides.length]);
    //alert( prp);
    $.ajax({//get subject reputation
        type:"DELETE",
        url:"http://"+DimitrisRemote+"/rideRequests/"+prp.index,
        async:false,
        crossDomain:true,
        username:user,
        password:pass,
        beforeSend : function(xhr) {
            xhr.withCredentials = true;
            xhr.setRequestHeader("Authorization", "Basic " + user + ":" + pass);
            xhr.setRequestHeader("APP_KEY" , "RIDE-SHARING-CLIENT-APPLICATION");
            xhr.setRequestHeader("APP_SECRET", "508e8d50-ab80-11e3-a5e2-0800200c9a66");
        },
        accepts: "application/json",
        //dataType: "json",
        success:function(data, textStatus, jqXHR){
            //                                    alert(data);
            if (usermode==DRIVERMODE)
                showOverlayDialog('Your ride has been successfully deleted.', '', 'OK', fokus.openride.mobclient.controller.modules.modulemanager.setView('activeofferUI'), '', '');
            else
                showOverlayDialog('Your ride has been successfully deleted.', '', 'OK', fokus.openride.mobclient.controller.modules.modulemanager.setView('activesearchUI'), '', '');
        },
        error:function(jq,textStatus,errorThrown){
        //                                    alert('fail');
        }
    });
}
function myaccept(num)
{
    user = readCookie('username');
    pass = readCookie('password');
    var revision = 0;
    var prp = JSON.parse(rides[num]);
    if (usermode == DRIVERMODE && prp.agreedDriver == "")
    {
        var me = prp.potentiallyAgreedDriver;
        prp.agreedDriver = me;
        prp.potentiallyAgreedDriver = "";
        revision = parseInt(prp._revision);
        prp._revision = revision + 1;
        ajaxcall("PUT" , "http://"+DimitrisRemote+"/ridePlans/" + prp.index, prp ,false, user , pass);
        fokus.openride.mobclient.controller.modules.modulemanager.setView('activeofferUI');
        fokus.openride.mobclient.controller.modules.modulemanager.setTabContent(1, 1);
    }
    else if (usermode == RIDERMODE && prp.agreedDriver != "")
    {
        var index = $.inArray(user, prp.potentiallyAgreedCommuters);
        if (index>=0) prp.potentiallyAgreedCommuters.splice(index, 1);
        (prp.agreedCommuters).push(user);
        revision = parseInt(prp._revision);
        prp._revision = revision + 1;
        ajaxcall("PUT" , "http://"+DimitrisRemote+"/ridePlans/" + prp.index, prp ,false ,user, pass );
        fokus.openride.mobclient.controller.modules.modulemanager.setView('activesearchUI');
        fokus.openride.mobclient.controller.modules.modulemanager.setTabContent(1, 1);
    }
//alert( prp);
                    

}
function myreject(num)
{
    user = readCookie('username');
    pass = readCookie('password');
    var prp = JSON.parse(rides[num]);
    var revision = 0;
    if (usermode == DRIVERMODE)
    {
        var me = prp.potentiallyAgreedDriver;
        prp.potentiallyAgreedDriver = "";
        prp.rejectedDriver = me;
        revision = parseInt(prp._revision);
        prp._revision = revision + 1;
        ajaxcall("PUT" , "http://"+DimitrisRemote+"/ridePlans/" + prp.index, prp , "false", user , pass);
        fokus.openride.mobclient.controller.modules.modulemanager.setView('activeofferUI');
        fokus.openride.mobclient.controller.modules.modulemanager.setTabContent(1, 1);

    }
    else if (usermode == RIDERMODE)
    {
        var index = $.inArray(user, prp.potentiallyAgreedCommuters);
        if (index>=0) prp.potentiallyAgreedCommuters.splice(index, 1);
        (prp.rejectedCommuters).push(user);
        revision = parseInt(prp._revision);
        prp._revision = revision + 1;
        ajaxcall("PUT" , "http://"+DimitrisRemote+"/ridePlans/" + prp.index, prp , "false" , user , pass );

        fokus.openride.mobclient.controller.modules.modulemanager.setView('activesearchUI');
        fokus.openride.mobclient.controller.modules.modulemanager.setTabContent(1, 1);
    }
}

function fail(jq , status ,errorThrown)
{
    alert('state: ' + jq.readyState);
    alert('status: ' + jq.status);
    alert('response ' + jq.responseText)
    alert('this error is: ' + errorThrown );
//fokus.openride.mobclient.controller.modules.modulemanager.alertajaxerror(jq,status,errorThrown,'Unfortunately, Something went wrong. Please try again later.');
}

function ajaxcall(op , add , info , asynch ,usr , pass)
{
    $.ajax
    ({
        type: op,
        url: add,
        data: info,
        crossDomain: true,
        username : usr,
        password : pass,
        beforeSend: function (xhr)
        {
            xhr.setRequestHeader('Authorization' , 'Basic ' + usr+':'+pass);
            xhr.withCredentials = true;
        },
        headers:
        {
            "X-Requested-With": "XMLHttpRequest",
            "Origin" : "http://localhost:8080"
        },
        dataType : "json" ,
        async: asynch,
        contentType:  "application/x-www-form-urlencoded; charset=UTF-8", //for data1 which is actualnested strings
        //"application/json; charset=UTF-8",
        success: function(data , textStatus) {
        //  alert('success in ajax call!! ' + data);
        //   alert('this is the data: ' + data
        //  + ' and the text ' + JSON.parse(data));
        },
        error: function(jq , textStatus , errorThrown){
            fail(jq , textStatus , errorThrown)
        }
    })
}

window.onload = function(){
    fokus.openride.mobclient.controller.modules.uievents.start();
    fokus.openride.mobclient.controller.modules.uievents.refreshTimer();
    fokus.openride.mobclient.controller.modules.uievents.hideUnusedTabs(new Array("tabimg13","tabimg14"));
    window.onresize();
    bindAutoSuggestEvents();

    // skip toolbar of mobile browsers:
    setTimeout(scrollTo, 0, 0, 1);

    // set body class "desktop" for non-mobile devices:
    if (!DetectMobileQuick()) {
        document.getElementsByTagName('body')[0].className = 'desktop';
    }
}
window.onresize = function(){
    adjustContentDimensions();
}

adjustContentDimensions = function() {

    // Adjusting only the height for now: innerHeight - tabmenu height (88px) - bottom border (5px)
    document.getElementById("content").style.minHeight = window.innerHeight - 88 - 5 + "px";
//document.getElementById("newfavoritepickerUI").style.height = document.getElementById("content").offsetHeight - 30 + "px";

}



/* *******************************************
// Copyright 2010, Anthony Hand
//
// File version date: June 06, 2010
//
// LICENSE INFORMATION
// Licensed under the Apache License, Version 2.0 (the "License"); 
// you may not use this file except in compliance with the License. 
// You may obtain a copy of the License at 
//        http://www.apache.org/licenses/LICENSE-2.0 
// Unless required by applicable law or agreed to in writing, 
// software distributed under the License is distributed on an 
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, 
// either express or implied. See the License for the specific 
// language governing permissions and limitations under the License. 
//
//
// ABOUT THIS PROJECT
//   Project Owner: Anthony Hand
//   Email: anthony.hand@gmail.com
//   Web Site: http://www.mobileesp.com
//   Source Files: http://code.google.com/p/mobileesp/
//   
//   Versions of this code are available for:
//      PHP, JavaScript, Java, and ASP.NET (C#)
//
//
// WARNING: 
//   These JavaScript-based device detection features may ONLY work 
//   for the newest generation of smartphones, such as the iPhone, 
//   Android and Palm WebOS devices.
//   These device detection features may NOT work for older smartphones 
//   which had poor support for JavaScript, including 
//   older BlackBerry, PalmOS, and Windows Mobile devices. 
//   Additionally, because JavaScript support is extremely poor among 
//   'feature phones', these features may not work at all on such devices.
//   For better results, consider using a server-based version of this code, 
//   such as Java, APS.NET, or PHP.
//
// *******************************************
*/

//Optional: Store values for quickly accessing same info multiple times.
//Stores whether the device is an iPhone or iPod Touch.
var isIphone = false; 
//Stores whether is the iPhone tier of devices.
var isTierIphone = false; 
//Stores whether the device can probably support Rich CSS, but JavaScript support is not assumed. (e.g., newer BlackBerry, Windows Mobile)
var isTierRichCss = false; 
//Stores whether it is another mobile device, which cannot be assumed to support CSS or JS (eg, older BlackBerry, RAZR)
var isTierGenericMobile = false; 

//Initialize some initial string variables we'll look for later.
var engineWebKit = "webkit";
var deviceAndroid = "android";
var deviceIphone = "iphone";
var deviceIpod = "ipod";
var deviceIpad = "ipad";
var deviceMacPpc = "macintosh"; //Used for disambiguation

var deviceNuvifone = "nuvifone"; //Garmin Nuvifone

var deviceSymbian = "symbian";
var deviceS60 = "series60";
var deviceS70 = "series70";
var deviceS80 = "series80";
var deviceS90 = "series90";

var deviceWinMob = "windows ce";
var deviceWindows = "windows";
var deviceIeMob = "iemobile";
var devicePpc = "ppc"; //Stands for PocketPC
var enginePie = "wm5 pie";  //An old Windows Mobile

var deviceBB = "blackberry";
var vndRIM = "vnd.rim"; //Detectable when BB devices emulate IE or Firefox
var deviceBBStorm = "blackberry95"; //Storm 1 and 2
var deviceBBBold = "blackberry97"; //Bold
var deviceBBTour = "blackberry96"; //Tour
var deviceBBCurve = "blackberry89"; //Curve 2

var devicePalm = "palm";
var deviceWebOS = "webos"; //For Palm's new WebOS devices
var engineBlazer = "blazer"; //Old Palm browser
var engineXiino = "xiino";

var deviceKindle = "kindle"; //Amazon Kindle, eInk one.

//Initialize variables for mobile-specific content.
var vndwap = "vnd.wap";
var wml = "wml";

//Initialize variables for random devices and mobile browsers.
//Some of these may not support JavaScript
var deviceBrew = "brew";
var deviceDanger = "danger";
var deviceHiptop = "hiptop";
var devicePlaystation = "playstation";
var deviceNintendoDs = "nitro";
var deviceNintendo = "nintendo";
var deviceWii = "wii";
var deviceXbox = "xbox";
var deviceArchos = "archos";

var engineOpera = "opera"; //Popular browser
var engineNetfront = "netfront"; //Common embedded OS browser
var engineUpBrowser = "up.browser"; //common on some phones
var engineOpenWeb = "openweb"; //Transcoding by OpenWave server
var deviceMidp = "midp"; //a mobile Java technology
var uplink = "up.link";
var engineTelecaQ = 'teleca q'; //a modern feature phone browser

var devicePda = "pda";
var mini = "mini";  //Some mobile browsers put 'mini' in their names.
var mobile = "mobile"; //Some mobile browsers put 'mobile' in their user agent strings.
var mobi = "mobi"; //Some mobile browsers put 'mobi' in their user agent strings.

//Use Maemo, Tablet, and Linux to test for Nokia's Internet Tablets.
var maemo = "maemo";
var maemoTablet = "tablet";
var linux = "linux";
var qtembedded = "qt embedded"; //for Sony Mylo and others
var mylocom2 = "com2"; //for Sony Mylo also

//In some UserAgents, the only clue is the manufacturer.
var manuSonyEricsson = "sonyericsson";
var manuericsson = "ericsson";
var manuSamsung1 = "sec-sgh";
var manuSony = "sony";
var manuHtc = "htc"; //Popular Android and WinMo manufacturer

//In some UserAgents, the only clue is the operator.
var svcDocomo = "docomo";
var svcKddi = "kddi";
var svcVodafone = "vodafone";


//Initialize our user agent string.
var uagent = navigator.userAgent.toLowerCase();


//**************************
// Detects if the current device is an iPhone.
function DetectIphone()
{
    if (uagent.search(deviceIphone) > -1)
    {
        //The iPad and iPod Touch say they're an iPhone! So let's disambiguate.
        if (DetectIpad() ||
            DetectIpod())
            return false;
        else
            return true;
    }
    else
        return false;
}

//**************************
// Detects if the current device is an iPod Touch.
function DetectIpod()
{
    if (uagent.search(deviceIpod) > -1)
        return true;
    else
        return false;
}

//**************************
// Detects if the current device is an iPad tablet.
function DetectIpad()
{
    if (uagent.search(deviceIpad) > -1  && DetectWebkit())
        return true;
    else
        return false;
}

//**************************
// Detects if the current device is an iPhone or iPod Touch.
function DetectIphoneOrIpod()
{
    //We repeat the searches here because some iPods
    //  may report themselves as an iPhone, which is ok.
    if (uagent.search(deviceIphone) > -1 ||
        uagent.search(deviceIpod) > -1)
        return true;
    else
        return false;
}

//**************************
// Detects if the current device is an Android OS-based device.
function DetectAndroid()
{
    if (uagent.search(deviceAndroid) > -1)
        return true;
    else
        return false;
}


//**************************
// Detects if the current device is an Android OS-based device and
//   the browser is based on WebKit.
function DetectAndroidWebKit()
{
    if (DetectAndroid() && DetectWebkit())
        return true;
    else
        return false;
}

//**************************
// Detects if the current browser is based on WebKit.
function DetectWebkit()
{
    if (uagent.search(engineWebKit) > -1)
        return true;
    else
        return false;
}

//**************************
// Detects if the current browser is the Nokia S60 Open Source Browser.
function DetectS60OssBrowser()
{
    if (DetectWebkit())
    {
        if ((uagent.search(deviceS60) > -1 ||
            uagent.search(deviceSymbian) > -1))
            return true;
        else
            return false;
    }
    else
        return false;
}

//**************************
// Detects if the current device is any Symbian OS-based device,
//   including older S60, Series 70, Series 80, Series 90, and UIQ, 
//   or other browsers running on these devices.
function DetectSymbianOS()
{
    if (uagent.search(deviceSymbian) > -1 ||
        uagent.search(deviceS60) > -1 ||
        uagent.search(deviceS70) > -1 ||
        uagent.search(deviceS80) > -1 ||
        uagent.search(deviceS90) > -1)
        return true;
    else
        return false;
}

//**************************
// Detects if the current browser is a Windows Mobile device.
function DetectWindowsMobile()
{
    //Most devices use 'Windows CE', but some report 'iemobile'
    //  and some older ones report as 'PIE' for Pocket IE.
    if (uagent.search(deviceWinMob) > -1 ||
        uagent.search(deviceIeMob) > -1 ||
        uagent.search(enginePie) > -1)
        return true;
    //Test for Windows Mobile PPC but not old Macintosh PowerPC.
    if ((uagent.search(devicePpc) > -1) &&
        !(uagent.search(deviceMacPpc) > -1))
        return true;
    //Test for Windwos Mobile-based HTC devices.
    if (uagent.search(manuHtc) > -1 &&
        uagent.search(deviceWindows) > -1)
        return true;
    else
        return false;
}

//**************************
// Detects if the current browser is a BlackBerry of some sort.
function DetectBlackBerry()
{
    if (uagent.search(deviceBB) > -1)
        return true;
    if (uagent.search(vndRIM) > -1)
        return true;
    else
        return false;
}

//**************************
// Detects if the current browser is a BlackBerry Touch
//    device, such as the Storm.
function DetectBlackBerryTouch()
{
    if (uagent.search(deviceBBStorm) > -1)
        return true;
    else
        return false;
}

//**************************
// Detects if the current browser is a BlackBerry device AND
//    has a more capable recent browser. 
//    Examples, Storm, Bold, Tour, Curve2
function DetectBlackBerryHigh()
{
    if (DetectBlackBerry())
    {
        if (DetectBlackBerryTouch() ||
            uagent.search(deviceBBBold) > -1 ||
            uagent.search(deviceBBTour) > -1 ||
            uagent.search(deviceBBCurve) > -1)
            return true;
        else
            return false;
    }
    else
        return false;
}

//**************************
// Detects if the current browser is a BlackBerry device AND
//    has an older, less capable browser. 
//    Examples: Pearl, 8800, Curve1.
function DetectBlackBerryLow()
{
    if (DetectBlackBerry())
    {
        //Assume that if it's not in the High tier, then it's Low.
        if (DetectBlackBerryHigh())
            return false;
        else
            return true;
    }
    else
        return false;
}


//**************************
// Detects if the current browser is on a PalmOS device.
function DetectPalmOS()
{
    //Most devices nowadays report as 'Palm',
    //  but some older ones reported as Blazer or Xiino.
    if (uagent.search(devicePalm) > -1 ||
        uagent.search(engineBlazer) > -1 ||
        uagent.search(engineXiino) > -1)
        {
        //Make sure it's not WebOS first
        if (DetectPalmWebOS())
            return false;
        else
            return true;
    }
    else
        return false;
}

//**************************
// Detects if the current browser is on a Palm device
//   running the new WebOS.
function DetectPalmWebOS()
{
    if (uagent.search(deviceWebOS) > -1)
        return true;
    else
        return false;
}

//**************************
// Detects if the current browser is a
//   Garmin Nuvifone.
function DetectGarminNuvifone()
{
    if (uagent.search(deviceNuvifone) > -1)
        return true;
    else
        return false;
}


//**************************
// Check to see whether the device is a 'smartphone'.
//   You might wish to send smartphones to a more capable web page
//   than a dumbed down WAP page. 
function DetectSmartphone()
{
    if (DetectIphoneOrIpod())
        return true;
    if (DetectS60OssBrowser())
        return true;
    if (DetectSymbianOS())
        return true;
    if (DetectWindowsMobile())
        return true;
    if (DetectAndroid())
        return true;
    if (DetectBlackBerry())
        return true;
    if (DetectPalmWebOS())
        return true;
    if (DetectPalmOS())
        return true;
    if (DetectGarminNuvifone())
        return true;

    //Otherwise, return false.
    return false;
};

//**************************
// Detects if the current device is an Archos media player/Internet tablet.
function DetectArchos()
{
    if (uagent.search(deviceArchos) > -1)
        return true;
    else
        return false;
}



//**************************
// Detects whether the device is a Brew-powered device.
function DetectBrewDevice()
{
    if (uagent.search(deviceBrew) > -1)
        return true;
    else
        return false;
}

//**************************
// Detects the Danger Hiptop device.
function DetectDangerHiptop()
{
    if (uagent.search(deviceDanger) > -1 ||
        uagent.search(deviceHiptop) > -1)
        return true;
    else
        return false;
}

//**************************
// Detects if the current device is on one of 
// the Maemo-based Nokia Internet Tablets.
function DetectMaemoTablet()
{
    if (uagent.search(maemo) > -1)
        return true;
    //Must be Linux + Tablet, or else it could be something else.
    if (uagent.search(maemoTablet) > -1 &&
        uagent.search(linux))
        return true;
    else
        return false;
}

//**************************
// Detects if the current browser is a Sony Mylo device.
function DetectSonyMylo()
{
    if (uagent.search(manuSony) > -1)
    {
        if (uagent.search(qtembedded) > -1 ||
            uagent.search(mylocom2) > -1)
            return true;
        else
            return false;
    }
    else
        return false;
}

//**************************
// Detects if the current browser is Opera Mobile or Mini.
function DetectOperaMobile()
{
    if (uagent.search(engineOpera) > -1)
    {
        if (uagent.search(mini) > -1 ||
            uagent.search(mobi) > -1)
            return true;
        else
            return false;
    }
    else
        return false;
}

//**************************
// Detects if the current device is a Sony Playstation.
function DetectSonyPlaystation()
{
    if (uagent.search(devicePlaystation))
        return true;
    else
        return false;
};

//**************************
// Detects if the current device is a Nintendo game device.
function DetectNintendo()
{
    if (uagent.search(deviceNintendo) > -1   ||
        uagent.search(deviceWii) > -1 ||
        uagent.search(deviceNintendoDs) > -1)
        return true;
    else
        return false;
};

//**************************
// Detects if the current device is a Microsoft Xbox.
function DetectXbox()
{
    if (uagent.search(deviceXbox))
        return true;
    else
        return false;
};

//**************************
// Detects if the current device is an Internet-capable game console.
function DetectGameConsole()
{
    if (DetectSonyPlaystation())
        return true;
    if (DetectNintendo())
        return true;
    if (DetectXbox())
        return true;
    else
        return false;
};

//**************************
// Detects if the current device is a Kindle.
function DetectKindle()
{
    if (uagent.search(deviceKindle) > -1)
        return true;
    else
        return false;
}

//**************************
// Detects if the current device is a mobile device.
//  This method catches most of the popular modern devices.
//  Excludes Apple iPads.
function DetectMobileQuick()
{
    //Let's say no if it's an iPad, which contains 'mobile' in its user agent.
    if (DetectIpad())
        return false;

    //Most mobile browsing is done on smartphones
    if (DetectSmartphone())
        return true;

    if (uagent.search(deviceMidp) > -1 ||
        DetectBrewDevice())
        return true;

    if (DetectOperaMobile())
        return true;

    if (uagent.search(engineNetfront) > -1)
        return true;
    if (uagent.search(engineUpBrowser) > -1)
        return true;
    if (uagent.search(engineOpenWeb) > -1)
        return true;

    if (DetectDangerHiptop())
        return true;
      
    if (DetectMaemoTablet())
        return true;
    if (DetectArchos())
        return true;

    if (uagent.search(devicePda) > -1)
        return true;
    if (uagent.search(mobile) > -1)
        return true;

    if (DetectKindle())
        return true;
      
    return false;
};


//**************************
// Detects in a more comprehensive way if the current device is a mobile device.
function DetectMobileLong()
{
    if (DetectMobileQuick())
        return true;
    if (DetectGameConsole())
        return true;
    if (DetectSonyMylo())
        return true;

    //Detect for certain very old devices with stupid useragent strings.
    if (uagent.search(manuSamsung1) > -1 ||
        uagent.search(manuSonyEricsson) > -1 ||
        uagent.search(manuericsson) > -1)
        return true;

    if (uagent.search(svcDocomo) > -1)
        return true;
    if (uagent.search(svcKddi) > -1)
        return true;
    if (uagent.search(svcVodafone) > -1)
        return true;


    return false;
};


//*****************************
// For Mobile Web Site Design
//*****************************

//**************************
// The quick way to detect for a tier of devices.
//   This method detects for devices which can 
//   display iPhone-optimized web content.
//   Includes iPhone, iPod Touch, Android, WebOS, etc.
function DetectTierIphone()
{
    if (DetectIphoneOrIpod())
        return true;
    if (DetectAndroid())
        return true;
    if (DetectAndroidWebKit())
        return true;
    if (DetectPalmWebOS())
        return true;
    if (DetectGarminNuvifone())
        return true;
    if (DetectMaemoTablet())
        return true;
    else
        return false;
};

//**************************
// The quick way to detect for a tier of devices.
//   This method detects for devices which are likely to be 
//   capable of viewing CSS content optimized for the iPhone, 
//   but may not necessarily support JavaScript.
//   Excludes all iPhone Tier devices.
function DetectTierRichCss()
{
    if (DetectMobileQuick())
    {
        if (DetectTierIphone())
            return false;
          
        //The following devices are explicitly ok.
        if (DetectWebkit())
            return true;
        if (DetectS60OssBrowser())
            return true;

        //Note: 'High' BlackBerry devices ONLY
        if (DetectBlackBerryHigh())
            return true;

        if (DetectWindowsMobile())
            return true;
          
        if (uagent.search(engineTelecaQ) > -1)
            return true;
          
        else
            return false;
    }
    else
        return false;
};

//**************************
// The quick way to detect for a tier of devices.
//   This method detects for all other types of phones,
//   but excludes the iPhone and RichCSS Tier devices.
// NOTE: This method probably won't work due to poor
//  support for JavaScript among other devices. 
function DetectTierOtherPhones()
{
    if (DetectMobileLong())
    {
        //Exclude devices in the other 2 categories
        if (DetectTierIphone())
            return false;
        if (DetectTierRichCss())
            return false;

        //Otherwise, it's a YES
        else
            return true;
    }
    else
        return false;
};

