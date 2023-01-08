//import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
//import * as d3 from '/node_modules/d3/dist/d3.js'
//import * as d3 from './node_modules/d3/dist/d3.min.js'

console.log('window.innerWidth', window.innerWidth)
console.log('window.innerHeight', window.innerHeight)
const width = window.innerWidth
const height = window.innerHeight
const svg=d3.select('body').append('svg')
.attr('width', width)
.attr('height', height)


function makeData(n,t) {
    const data = d3.range(n).map(d => ({
        x: d * 60 + 50,
        y: 250 + Math.sin(d*0.5 + t) *220,
        r: 20 + Math.sin(d*0.5 + t*2) *10
    }))
    return data
}
function visData(svg,data) {
    const lineGenerator = d3.line()
    .x((d)=>d.x)
    .y((d)=>d.y)

    const circles = svg
    .selectAll('circle')
    .data(data)
    .join('circle')
    .attr('r',(d)=>d.r)
    .attr('cx',(d)=> d.x)
    .attr('cy',(d)=> d.y )
    //.attr('fill',(d)=>d.fill)
    //.attr('stroke',(d)=>d.stroke)
    //.attr('stroke-width',(d)=>d['stroke-width'])
    const lines = svg
    .selectAll('path')
    //.data(data)
    .data([null])
    .join('path')
    .attr('d',lineGenerator(data))
    .attr('fill','none')
    .attr('stroke','black')
}
let t = 0
setInterval(() => {
    //const n = 10 + Math.sin(t) *5
    const n = 15
    const data = makeData(n,t)
    console.log('data', data, t)
    visData(svg,data)
    t = t + 0.01
},2000/60)