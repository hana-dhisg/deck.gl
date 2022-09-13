(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{tjUo:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return _}));var a=n("dI71"),i=n("q1tI"),r=n.n(i),o=n("3oFX"),l=n("Wbzz"),c=n("vOnD"),s=n("zLVn"),p=n("lxDd"),d=n("v9TO"),m=n("SJrJ"),u=n("+BuP"),h=n("w6UT"),g=n("CtqP"),b=function(e){function t(t){var n;n=e.call(this,t)||this;var a=new m.a({light1:new u.a({color:[255,255,255],intensity:1}),light2:new h.a({color:[255,255,255],intensity:2,direction:[-1,-2,-3],_shadow:!0})});return a.shadowColor=[0,0,0,.3],n.theme={buildingColor:[232,232,247],trailColor0:[91,145,244],trailColor1:[115,196,150],material:{ambient:.2,diffuse:.6,shininess:32,specularColor:[232,232,247]},effects:[a]},n.initialViewState={longitude:-74.012,latitude:40.705,zoom:14.5,pitch:40,bearing:0},n}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.data,n=Object(s.a)(e,["data"]);return r.a.createElement(d.a,Object.assign({},n,{trips:t&&t[0]||null,buildings:t&&t[1]||null,trailLength:180,animationSpeed:.5,theme:this.theme,initialViewState:this.initialViewState}))},t}(i.Component);b.data=[{url:p.a+"/trips-data-s.txt",worker:"/workers/trips-data-decoder.js?loop=1800&trail=180"},{url:p.a+"/building-data-s.txt",worker:"/workers/building-data-decoder.js"}],b.mapStyle=p.c.LIGHT;var f=Object(g.a)(b,{isInteractive:!1,style:{pointerEvents:"none"}}),w=c.c.button.withConfig({displayName:"close-button__Button",componentId:"sc-1ao0v3y-0"})(["background-color:transparent;background-image:url(",");background-repeat:no-repeat;background-position:center;border:none;width:36px;height:36px;border-radius:4px;&:hover{background-color:rgba(255,255,255,0.25);border-color:#FFF;cursor:pointer;}"],Object(l.d)("/images/icon-close.svg")),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement(w,{onClick:this.props.onClick,"aria-label":"close announce"})},t}(i.PureComponent),y=c.c.div.withConfig({displayName:"announcement__AnnounceBanner",componentId:"sc-1t8wgqa-0"})(["display:flex;position:fixed;width:100vw;height:64px;bottom:0;z-index:3;background:",";padding:14px 24px;justify-content:space-between;@media screen and (max-width:","px){height:200px;padding-top:44px;button{position:absolute;top:8px;right:8px;}}"],(function(e){return e.theme.colors.primary}),(function(e){return e.theme.breakpoints.medium})),k=c.c.div.withConfig({displayName:"announcement__AnnounceContent",componentId:"sc-1t8wgqa-1"})(["display:flex;align-items:center;@media screen and (max-width:","px){flex-wrap:wrap;justify-content:center;}"],(function(e){return e.theme.breakpoints.medium})),v=c.c.div.withConfig({displayName:"announcement__AnnounceTitleWrapper",componentId:"sc-1t8wgqa-2"})(["display:flex;@media screen and (max-width:","px){margin-bottom:24px;}&:before{content:'';display:inline-block;height:16px;width:16px;background:#000;flex-shrink:0;margin-right:8px;margin-top:8px;}"],(function(e){return e.theme.breakpoints.medium})),E=c.c.span.withConfig({displayName:"announcement__AnnounceTitle",componentId:"sc-1t8wgqa-3"})(["font-weight:bold;font-size:18px;line-height:1.33;margin-right:32px;strong{font-size:24px;}small{font-size:14px;}"]),C=c.c.a.withConfig({displayName:"announcement__Button",componentId:"sc-1t8wgqa-4"})(["padding:6px 26px;border:2px solid #000;background:transparent;text-transform:uppercase;text-decoration:none;font-weight:bold;color:#000;letter-spacing:2px;&:hover{background:#FFF;border-color:#FFF;cursor:pointer;}"]),j="undefined"==typeof window,I=function(e){function t(t){var n,a;return(n=e.call(this,t)||this).handleClick=function(){var e,t;n.setState({announceShowed:!0}),e="madridSummit2022",t="closed",!j&&window.localStorage.setItem(e,t)},n.state={announceShowed:!!j||(a="madridSummit2022",!j&&window.localStorage.getItem(a))},n}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement("div",null,!this.state.announceShowed&&r.a.createElement(y,null,r.a.createElement(k,null,r.a.createElement(v,null,r.a.createElement(E,null,"Open Visualization Collaborator",r.a.createElement("strong",null," Summit "),r.a.createElement("small",null,"(In person and Online). "),"September 22th 2022. Madrid.")),r.a.createElement(C,{href:"https://deck.gl/events/madrid-summit-2022/",rel:"noopener noreferrer",target:"_blank"},"More info")),r.a.createElement(x,{onClick:this.handleClick})))},t}(i.Component),O=c.c.div.withConfig({displayName:"src__FeatureImage",componentId:"b18qox-0"})(["position:absolute;height:100%;width:50%;top:0;right:0;z-index:-1;border-top:solid 200px transparent;background-image:url(",");background-size:contain;background-repeat:no-repeat;background-position:right top;@media screen and (max-width:768px){display:none;}"],Object(l.d)("/images/maps.jpg")),S=c.c.div.withConfig({displayName:"src__TextContainer",componentId:"b18qox-1"})(["max-width:800px;padding:64px 112px;width:70%;font-size:14px;h2{font:",";margin:24px 0 16px;position:relative;}h3{font:",";margin:16px 0 0;position:relative;}h3 > img{position:absolute;top:-4px;width:36px;left:-48px;}hr{border:none;background:",";height:1px;margin:24px 0 0;width:32px;height:2px;}@media screen and (max-width:768px){max-width:100%;width:100%;padding:48px 48px 48px 80px;}"],(function(e){return e.theme.typography.font700}),(function(e){return e.theme.typography.font450}),(function(e){return e.theme.colors.mono400})),_=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement(o.a,{HeroExample:f,theme:"light"},r.a.createElement("div",{style:{position:"relative"}},r.a.createElement(I,null),r.a.createElement(O,null),r.a.createElement(S,null,r.a.createElement("h2",null,"deck.gl is a WebGL-powered framework for visual exploratory data analysis of large datasets."),r.a.createElement("hr",{className:"short"}),r.a.createElement("h3",null,r.a.createElement("img",{src:Object(l.d)("/images/icon-layers.svg")}),"A Layered Approach to Data Visualization"),r.a.createElement("p",null,"deck.gl allows complex visualizations to be constructed by composing existing layers, and makes it easy to package and share new visualizations as reusable layers. We already offer a ",r.a.createElement("a",{href:Object(l.d)("/docs/api-reference/layers")},"catalog of proven layers")," and we have many more in the works."),r.a.createElement("h3",null,r.a.createElement("img",{src:Object(l.d)("/images/icon-high-precision.svg")}),"High-Precision Computations in the GPU"),r.a.createElement("p",null,"By emulating 64 bit floating point computations in the GPU, deck.gl renders datasets with unparalleled accuracy and performance."),r.a.createElement("h3",null,r.a.createElement("img",{src:Object(l.d)("/images/icon-react.svg")}),"React Friendly"),r.a.createElement("p",null,"deck.gl APIs are designed to reflect the reactive programming paradigm. Whether using Vanilla JS or the React interface, it can handle efficient WebGL rendering under heavy data load."),r.a.createElement("h3",null,r.a.createElement("img",{src:Object(l.d)("/images/icon-basemap.webp")}),"Integration with Base Map Providers"),r.a.createElement("p",null,"While deck.gl works standalone without a base map, it plays nicely with your favorite base map providers such as Google Maps, Mapbox, ArcGIS and more. Where the base map library permits, deck.gl may interleave with 3D map layers to create seamless visualizations."))))},t}(r.a.Component)}}]);