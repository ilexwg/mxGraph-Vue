import mx from 'mxgraph'

// construct the mxgraph instance and indicate the base path of mxgraph
const mxgraph = mx({
  mxBasePath: './mxgraph'
})

// mount mxgraph classes to global window
for (const key in mxgraph) {
  window[key] = mxgraph[key]
}