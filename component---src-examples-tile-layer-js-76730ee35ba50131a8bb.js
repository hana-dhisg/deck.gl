(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{A1wi:function(e,t,a){"use strict";a.r(t);var r=a("zLVn"),o=a("dI71"),n=a("q1tI"),i=a.n(n),l=a("lxDd"),s=(a("i8i4"),a("4ErG")),p=a("CtJ5"),d=a("WQ8h"),c=a("R1ST"),u=a("+TqB"),h={latitude:47.65,longitude:7,zoom:4.5,maxZoom:20,maxPitch:89,bearing:0},m={position:"absolute",right:0,bottom:0,backgroundColor:"hsla(0,0%,100%,.5)",padding:"0 5px",font:"12px/20px Helvetica Neue,Arial,Helvetica,sans-serif"},w={textDecoration:"none",color:"rgba(0,0,0,.75)",cursor:"grab"},g="undefined"!=typeof window&&window.devicePixelRatio||1;function b(e){var t=e.tile,a=t.index,r=a.x,o=a.y,n=a.z;return t&&"tile: x: "+r+", y: "+o+", z: "+n}function f(e){var t=e.showBorder,a=void 0!==t&&t,r=e.onTilesLoad,o=void 0===r?null:r,n=new d.a({data:["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png","https://b.tile.openstreetmap.org/{z}/{x}/{y}.png","https://c.tile.openstreetmap.org/{z}/{x}/{y}.png"],maxRequests:20,pickable:!0,onViewportLoad:o,autoHighlight:a,highlightColor:[60,60,60,40],minZoom:0,maxZoom:19,tileSize:256,zoomOffset:1===g?-1:0,renderSubLayers:function(e){var t=e.tile.bbox,r=t.west,o=t.south,n=t.east,i=t.north;return[new c.a(e,{data:null,image:e.data,bounds:[r,o,n,i]}),a&&new u.a({id:e.id+"-border",visible:e.visible,data:[[[r,i],[r,o],[n,o],[n,i],[r,i]]],getPath:function(e){return e},getColor:[255,0,0],widthMinPixels:4})]}});return i.a.createElement(s.a,{layers:[n],views:new p.a({repeat:!0}),initialViewState:h,controller:!0,getTooltip:b},i.a.createElement("div",{style:m},"© ",i.a.createElement("a",{style:w,href:"http://www.openstreetmap.org/copyright",target:"blank"},"OpenStreetMap contributors")))}var v=a("CtqP"),x=function(e){function t(){for(var t,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this)._onTilesLoad=function(e){requestAnimationFrame((function(){return t.props.onStateChange({tileCount:e.length})}))},t}return Object(o.a)(t,e),t.renderInfo=function(e){return i.a.createElement("div",null,i.a.createElement("p",null,"OpenStreetMap data source:",i.a.createElement("a",{href:"https://en.wikipedia.org/wiki/OpenStreetMap"}," Wiki ")," and",i.a.createElement("a",{href:"https://wiki.openstreetmap.org/wiki/Tile_servers"}," Tile Servers ")),i.a.createElement("div",{className:"stat"},"No. of Tiles Loaded",i.a.createElement("b",null,e.tileCount||0)))},t.prototype.render=function(){var e=this.props,t=e.params,a=Object(r.a)(e,["params"]);return i.a.createElement(f,Object.assign({},a,{showBorder:t.showBorder.value,onTilesLoad:this._onTilesLoad}))},t}(n.Component);x.title="Raster Map Tiles",x.code=l.b+"/examples/website/map-tile",x.parameters={showBorder:{displayName:"Show tile borders",type:"checkbox",value:!1}};t.default=Object(v.a)(x)}}]);