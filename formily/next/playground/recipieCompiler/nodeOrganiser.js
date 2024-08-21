export function nodeOrganiser(inputObj) {
  const obj = JSON.parse(JSON.stringify(inputObj))
  //extract the target Node
  const startEdgeIndex = obj.edges.findIndex((edge) => edge.source === 'start')
  // console.log('startEdgeIndex', startEdgeIndex)
  if (startEdgeIndex !== -1) {
    const targetNode = obj.edges[startEdgeIndex].target
    // console.log('targetNode', targetNode)
    //index of TargetNode
    const targetNodeINdex = obj.nodes.findIndex(
      (node) => node.id === targetNode
    )
    // setting targetNode to start of array
    if (targetNodeINdex !== -1) {
      const node = obj.nodes.splice(targetNodeINdex, 1)[0]
      obj.nodes.unshift(node)
    }
    //removing start node
    const startNodeIndex = obj.nodes.findIndex((node) => node.id === 'start')
    // console.log('startNodeIndex', startNodeIndex)
    if (startNodeIndex !== -1) {
      obj.nodes.splice(startNodeIndex, 1)[0]
    }
    //removing start edge
    if (startEdgeIndex !== -1) {
      obj.edges.splice(startEdgeIndex, 1)[0]
    }
  }
  return obj
}
