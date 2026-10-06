# File Transfer Workflow Builder

A visual editor where users build file-transfer pipelines by dragging nodes onto a canvas and connecting them.

## Language

**Workflow**:
A graph of connected nodes that describes how files move from where they come from to where they end up.

**Node**:
One step in a workflow, placed on the canvas from the toolbox.
_Avoid_: Block, step, card

**Category**:
The group a node belongs to (input, transform or output). It decides the node's colour and which handles it has.
_Avoid_: Type, group

**Toolbox**:
The sidebar panel listing every available node, grouped by category, from which nodes are dragged.
_Avoid_: Sidebar, palette

**Canvas**:
The surface where nodes are placed and connected.

**Handle**:
A connection point on a node's left (incoming) or right (outgoing) edge.
_Avoid_: Port, socket

**Edge**:
A connection from one node's outgoing handle to another node's incoming handle.
_Avoid_: Link, wire

**Node status**:
Whether a transform or output node has at least one incoming edge. It is shown as a badge on the node. Input nodes have no status.
_Avoid_: Health, validity
